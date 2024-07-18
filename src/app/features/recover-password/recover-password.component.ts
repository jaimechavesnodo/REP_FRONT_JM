import { Component, Input, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'app-recover-password',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './recover-password.component.html',
  styleUrl: './recover-password.component.scss'
})
export class RecoverPasswordComponent {

  private userService = inject(UserService)

  @Input('id') id!: string;

  formPassword!: FormGroup;
  viewModal: boolean = false;

  ngOnInit() {
    this.buildForm();
    
  }

  buildForm() {
    this.formPassword = new FormGroup({
      password: new FormControl("", Validators.required),
      confirmationPassword: new FormControl("", Validators.required),
    })
  }

  send() {
    if (this.formPassword.valid) {
      this.userService.recoverPassword({password: this.passwordField.value}, this.id).subscribe({
        next: (response) => {
          this.viewModal = true;
        },
        error: (response) =>{
        }
      })
    } else {
      this.formPassword.markAllAsTouched();
    }
  }

  get passwordField(): any { return this.formPassword.get("password"); }
  get confirmationPasswordField(): any { return this.formPassword.get("confirmationPassword"); }


}
