import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  private userService = inject(UserService)

  formRegister!: FormGroup;
  viewModal: boolean = false;

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.formRegister = new FormGroup({
      name: new FormControl("", Validators.required),
      lastName: new FormControl("", Validators.required),
      identification: new FormControl("", [ Validators.required, Validators.pattern(/^\d*$/)]),
      telMovil: new FormControl("", [ Validators.required, Validators.pattern(/^\d*$/)]),
      companyEmail: new FormControl("", [Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
      email: new FormControl("", [Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
      companyName: new FormControl("", Validators.required),
      birthdayDate: new FormControl(""),
      telPersonal: new FormControl("", [ Validators.pattern(/^\d*$/)]),
      companyPosition: new FormControl(""),
      password: new FormControl("", Validators.required),
      confirmationPassword: new FormControl("", Validators.required),
    })
  }

  send() {
    if (this.formRegister.valid) {
      const data = {
        name: this.nameField.value,
        password: this.passwordField.value,
        lastName: this.lastNameField.value,
        identification: this.identificationField.value,
        phone: this.telMovilField.value,
        corporateEmail: this.companyEmailField.value,
        secondaryEmail: this.emailField.value,
        company: this.companyNameField.value,
        birthdayDate: this.birthdayDateField.value,
        personalPhone: this.telPersonalField.value,
        role: this.companyPositionField.value,
        typeDocument: "cedula de ciudadania"
      }

      this.userService.createUser(data).subscribe({
        next: (response) => {
          this.viewModal = true;
        },
        error: (response) =>{
        }
      })
    } else {
      this.formRegister.markAllAsTouched();
    }
  }

  get nameField(): any { return this.formRegister.get("name"); }
  get lastNameField(): any { return this.formRegister.get("lastName"); }
  get identificationField(): any { return this.formRegister.get("identification"); }
  get telMovilField(): any { return this.formRegister.get("telMovil"); }
  get companyEmailField(): any { return this.formRegister.get("companyEmail"); }
  get emailField(): any { return this.formRegister.get("email"); }
  get companyNameField(): any { return this.formRegister.get("companyName"); }
  get birthdayDateField(): any { return this.formRegister.get("birthdayDate"); }
  get telPersonalField(): any { return this.formRegister.get("telPersonal"); }
  get companyPositionField(): any { return this.formRegister.get("companyPosition"); }
  get passwordField(): any { return this.formRegister.get("password"); }
  get confirmationPasswordField(): any { return this.formRegister.get("confirmationPassword"); }
}
