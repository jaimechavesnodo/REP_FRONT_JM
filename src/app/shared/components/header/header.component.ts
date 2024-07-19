import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Menu } from '../../../core/models/manu.interface';
import { UserService } from '../../../core/services/user.service';
import { SessionService } from '../../../core/services/session.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    ReactiveFormsModule,
    JsonPipe
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  private userService = inject(UserService)
  private router = inject(Router)
  sessionService = inject(SessionService)

  mainMenu : Menu[] = []
  authMenu : Menu[] = []
  formLogin!: FormGroup;
  formEmail!: FormGroup;
  viewModal: boolean = false;
  viewImgMenu: boolean = false;
  showMenu: boolean = true;
  viewError: boolean = false;
  viewModalEmail: boolean = false;
  emailNotFound: boolean = false;
  login: boolean = false;

  ngOnInit() {
    this.buildForm();

    if (window.innerWidth < 1025) {
      this.showMenu = false;
      this.viewImgMenu = true;
    }
  }

  buildForm() {
    this.formLogin = new FormGroup({
      identification: new FormControl("", [ Validators.required, Validators.pattern(/^\d*$/)]),
      password: new FormControl("", Validators.required)
    })

    this.formEmail = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
    })
  }

  send() {
    const data = {
      identification: this.identificationField.value,
      password: this.passwordField.value
    }

    this.userService.loginUser(data).subscribe({
      next: (response: any) => {
        sessionStorage.setItem("userId", response.idUser);
        sessionStorage.setItem("sessionToken", response.access_token);
        this.sessionService.setToken(response.access_token);
        this.router.navigate(["/mis-puntos"]);
        this.viewModal = false;
      },
      error: (_response) =>{
        this.viewError = true;
      }
    })
  }

  sendEmail() {
    if (this.formEmail.valid) {
      this.userService.emailRecoverPassword({corporateEmail: this.emailField.value}).subscribe({
        next: (response) => {
          this.viewModalEmail = false;
        },
        error: (response) =>{
          this.emailNotFound = true
        }
      })
    } else {
      this.formEmail.markAllAsTouched();
    }
  }

  logOut(){
    console.log("cerrar");
    
    sessionStorage.clear();
    this.sessionService.setToken(null);
    this.router.navigate(["/"]);
  }

  openEmailModal() {
    this.viewModal = false;
    this.viewModalEmail = true
  }

  showModal() {
    this.viewModal = true;
  }

  viewmenu(){
    this.showMenu = !this.showMenu;
  }

  get identificationField(): any { return this.formLogin.get("identification"); }
  get passwordField(): any { return this.formLogin.get("password"); }

  get emailField(): any { return this.formEmail.get("email"); }

}
