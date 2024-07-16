import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContactUs, Links, SocialNetworks } from '../../../core/models/footer.interface';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  socialNetworks: SocialNetworks[] = [
    {
      icon: "assets/icons/LinkeIN.png",
      link: "",
      target: "_blank",
    },
    {
      icon: "assets/icons/Facebook.png",
      link: "",
      target: "_blank",
    },
    {
      icon: "assets/icons/Youtube.png",
      link: "",
      target: "_blank",
    },
  ]

  contactUs : ContactUs[] = [
    {
      icon: "assets/icons/Telefono.png",
      title: "Número de teléfono:",
      text: "(601) 794 5774",
      link: "tel:(601)7945774"
    },
    {
      icon: "assets/icons/Mensaje.png",
      title: "Correo electrónico:",
      text: "jmtr@jmtrv.com.co",
      link: "mailto:jmtr@jmtrv.com.co"
    },
    {
      icon: "assets/icons/ubicación.png",
      title: "Dirección:",
      text: "Calle 98 #21-50 Ofcina 901 Bogotá D.C",
      link: ""
    },
  ]

  links : Links[] = [
    {
      title:"CORPORATIVO:",
      items: [
        "Gobierno Corporativo",
        "Accionistas",
        "Enlaces de interés",
        "Sistema de Administración de Riesgos",
        "Información financiera"
      ]
    },
    {
      title:"SERVICIO AL CLIENTE:",
      items: [
        "Defensor Del Consumidor Financiero",
        "Sistema de Atención al Consumidor Financiero",
        "Política de Tratamiento de Datos Personales",
        "Aviso de privacidad",
        "Proceso de Devolución de Primas",
        "Presentar Peticiones, Quejas o Reclamos (PQR)",
        "Glosario",
        "Términos y condiciones",
      ]
    },
    {
      title:"INTERMEDIARIOS:",
      items: [
        "Nuestros intermediarios",
        "Cómo ser intermediario de JMTRV",
        "UNISEG",
        "Sistema Único de Consulta de Intermediarios de Seguros – SUCIS",
      ]
    },
  ]

}
