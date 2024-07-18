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
      link: "https://www.linkedin.com/company/jmalucelli-travelers-seguros/?viewAsMember=true",
      target: "_blank",
    },
    {
      icon: "assets/icons/Facebook.png",
      link: "https://www.facebook.com/JMTRV",
      target: "_blank",
    },
    {
      icon: "assets/icons/Youtube.png",
      link: "https://www.youtube.com/@jmalucellitravelersseguros7672",
      target: "_blank",
    },
  ]

  contactUs : ContactUs[] = [
    {
      icon: "assets/icons/Telefono.png",
      title: "Número de teléfono:",
      text: "(601) 794 5774 ext: 2042",
      link: "tel:(601)7945774"
    },
    {
      icon: "assets/icons/Mensaje.png",
      title: "Correo electrónico:",
      text: "jmtrv@jmtrv.com.co",
      link: "mailto:jmtrv@jmtrv.com.co"
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
        { name :"Gobierno Corporativo",
          link: "https://www.jmtrv.com.co/?page_id=1555"
        },
        { name :"Accionistas",
          link: "https://www.jmtrv.com.co/?page_id=1549"
        },
        { name :"Enlaces de interés",
          link: "https://www.jmtrv.com.co/?page_id=1577"
        },
        { name :"Sistema de Administración de Riesgos",
          link: "https://www.jmtrv.com.co/?page_id=1571"
        },
        { name :"Información financiera",
          link: "https://www.jmtrv.com.co/?page_id=1563"
        }
      ]
    },
    {
      title:"SERVICIO AL CLIENTE:",
      items: [
        { name :"Defensor Del Consumidor Financiero",
          link: "https://www.jmtrv.com.co/?page_id=1627"
        },
        { name :"Sistema de Atención al Consumidor Financiero",
          link: "https://www.jmtrv.com.co/?page_id=1697"
        },
        { name :"Política de Tratamiento de Datos Personales",
          link: "https://www.jmtrv.com.co/?page_id=1647"
        },
        { name :"Aviso de privacidad",
          link: "https://www.jmtrv.com.co/?page_id=1613"
        },
        { name :"Proceso de Devolución de Primas",
          link: "https://www.jmtrv.com.co/?page_id=1667"
        },
        { name :"Presentar Peticiones, Quejas o Reclamos (PQR)",
          link: "https://www.jmtrv.com.co/?page_id=1655"
        },
        { name :"Glosario",
          link: "https://www.jmtrv.com.co/?page_id=1642"
        },
        { name :"Términos y condiciones",
          link: "https://www.jmtrv.com.co/?page_id=1678"
        },
      ]
    },
    {
      title:"INTERMEDIARIOS:",
      items: [
        { name :"Nuestros intermediarios",
          link: "https://www.jmtrv.com.co/?page_id=1715"
        },
        { name :"Cómo ser intermediario de JMTRV",
          link: "https://www.jmtrv.com.co/?page_id=1707"
        },
        { name :"UNISEG"},
        { name :"Sistema Único de Consulta de Intermediarios de Seguros – SUCIS",
          link: "https://forms.office.com/pages/responsepage.aspx?id=qm9BFSSun02GgIS4HCh0hsd6-5on87VApqaswsd2QJ9UNTFHRVE1TUYwMklEOUJDR05PWTlNSFk4Ni4u"
        },
      ]
    },
  ]

}
