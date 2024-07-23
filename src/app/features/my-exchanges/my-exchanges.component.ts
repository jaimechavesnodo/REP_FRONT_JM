import { Component, inject } from '@angular/core';
import { UserService } from '../../core/services/user.service';
import { DatePipe } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-my-exchanges',
  standalone: true,
  imports: [
    DatePipe,
    ReactiveFormsModule
  ],
  templateUrl: './my-exchanges.component.html',
  styleUrl: './my-exchanges.component.scss'
})
export class MyExchangesComponent {

  private userService = inject(UserService)
  formfilter!: FormGroup;
  listChanges: any[] = [];
  myPoints: Number | undefined;
  page:number = 0

  ngOnInit() {
    this.userService.getPointClient(sessionStorage.getItem("userId")).subscribe({
      next: (response: any) => {
        if (response) {
          this.myPoints = response.pointsCurrent;
        } else {
          this.myPoints = 0;
        }
      },
      error: (error) => {
      }
    })

    this.buildForm();
    this.redemptions("","", this.page);
  }

  buildForm() {
    this.formfilter = new FormGroup({
      date: new FormControl(""),
      name: new FormControl("")
    })
  }

  redemptions(name:any, date:any, page:number) {
    this.userService.getRedemptionsCustomer(sessionStorage.getItem("userId"), name, date, page, 10).subscribe({
      next: (response: any) => {
        this.listChanges = response;
      },
      error: (error) => {
        console.log("error")
      }
    })
  }

  searsh() {
    this.redemptions(this.nameField.value,this.dateField.value, this.page);
  }

  clear() {
    this.nameField.value = "";
    this.dateField.value = "";
    this.nameField.setValue("")
    this.dateField.setValue("")
    this.searsh();
  }

  next(){
    this.page ++;
    this.searsh();
  }

  prev() {
    console.log(this.page);
    
    if (this.page >= 1) {
      this.page --;
      this.searsh();
    }
  }

  get dateField(): any { return this.formfilter.get("date"); }
  get nameField(): any { return this.formfilter.get("name"); }

}
