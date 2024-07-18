import { Component, inject } from '@angular/core';
import { UserService } from '../../core/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catalogue',
  standalone: true,
  imports: [],
  templateUrl: './catalogue.component.html',
  styleUrl: './catalogue.component.scss'
})
export class CatalogueComponent {

  private userService = inject(UserService)
  private router = inject(Router)

  listSerata = [
    {
      title: "MASTER EXPERIENCE",
      text: "<p>Momentos para recordar con el Grupo Seratta. Un espacio para aprender a cocinar y disfrutar, sabores únicos de cocinas de todo el mundo.<br>Cada experiencia es válida para una persona.<br><span>Experiencias disponibles:</span> Un Viaggio in Italia, Y Olé, Otafuku Omasake, La Vera Italia, Pizza Per il Cuore, Vine por Vino, Gin for me Gin for us, Entre Mares, Recorriendo España, Arte de la Xarcutería, Degustando Japón, En Manos del Itamae.</p>",
      active: false,
      listH: [
        {
          idProduct: 3,
          imageUrl: "assets/images/seratta.png",
          description: "acércate a la cultura de España desde sus sabores icónicos, en compañía del Chef podrás preparar un menú tradicional con Pulpo a la Gallega, Tortilla Española, Paella y el toque dulce de la Crema Catalana.",
          desc: "<p><span>Recorriendo España:</span> acércate a la cultura de España desde sus sabores icónicos, en compañía del Chef podrás preparar un menú tradicional con Pulpo a la Gallega, Tortilla Española, Paella y el toque dulce de la Crema Catalana.</p>",
          pointsProduct: "125500"
        },
        {
          idProduct: 4,
          imageUrl: "assets/images/seratta.png",
          description: "desde la pizzeta y la ensalada perfecta, hasta la pasta y el postre ideal para conocer un menú italiano tradicional que cuenta la mejor historia de amor a través de cada bocado.",
          desc: "<p><span>Un Viaggio in Italia:</span> desde la pizzeta y la ensalada perfecta, hasta la pasta y el postre ideal para conocer un menú italiano tradicional que cuenta la mejor historia de amor a través de cada bocado.</p>",
          pointsProduct: "149900"
        },
        {
          idProduct: 5,
          imageUrl: "assets/images/seratta.png",
          description: "aprende a hacer la pizza napolitana perfecta, desde la preparación de su masa, hasta la elección de cada ingrediente, conocerás los secretos para preparar y disfrutar tres pizzas insignia de Italia.",
          desc: "<p><span>Pizza Per il Cuore:</span> aprende a hacer la pizza napolitana perfecta, desde la preparación de su masa, hasta la elección de cada ingrediente, conocerás los secretos para preparar y disfrutar tres pizzas insignia de Italia.</p>",
          pointsProduct: "149900"
        },
        {
          idProduct: 6,
          imageUrl: "assets/images/seratta.png",
          description: "conoce y disfruta de nuevos sabores de quesos maduradores y cortes de jamón exclusivos, mientras aprendes sobre su clasificación, su denominación de origen y el maridaje perfecto para cada uno de ellos. ",
          desc: "<p><span>El Arte de la Xarcutería:</span> conoce y disfruta de nuevos sabores de quesos maduradores y cortes de jamón exclusivos, mientras aprendes sobre su clasificación, su denominación de origen y el maridaje perfecto para cada uno de ellos.</p>",
          pointsProduct: "147000"
        },
        {
          idProduct: 7,
          imageUrl: "assets/images/seratta.png",
          description: "en compañía del sommelier aprenderás sobre las bondades, clasificaciones, estilos y variedades de los vinos que despiertan todos tus sentidos.",
          desc: "<p><span>Vine por Vino:</span> en compañía del sommelier aprenderás sobre las bondades, clasificaciones, estilos y variedades de los vinos que despiertan todos tus sentidos.</p>",
          pointsProduct: "152400"
        },
        {
          idProduct: 8,
          imageUrl: "assets/images/seratta.png",
          description: " conoce las interesantes combinaciones del mundo del Gin en compañía de un bartender experto en mezclas y preparaciones que te ayudarán a convertirete en el mejor anfitrión coctelero. ",
          desc: "<p><span>Gin for Me Gin for Us:</span> conoce las interesantes combinaciones del mundo del Gin en compañía de un bartender experto en mezclas y preparaciones que te ayudarán a convertirete en el mejor anfitrión coctelero.</p>",
          pointsProduct: "189500"
        },
        {
          idProduct: 9,
          imageUrl: "assets/images/seratta.png",
          description: "explora este viaje de sabores, técnicas y preparaciones de una de las cocinas más complejas y deliciosas del mundo. Cada vocado y preparación serán una experiencia única entre 12 pasos de degustación. ",
          desc: "<p><span>Degustando Japón:</span> explora este viaje de sabores, técnicas y preparaciones de una de las cocinas más complejas y deliciosas del mundo. Cada vocado y preparación serán una experiencia única entre 12 pasos de degustación.</p>",
          pointsProduct: "284400"
        },
        {
          idProduct: 10,
          imageUrl: "assets/images/seratta.png",
          description: " en compañía de un experto en sushi podrás aprender y degustar sobre makis, nigiris y sashimis frescos. Todo en compañía de un Itamae que se encargará de hacer de tu experiencia un momento increíble. ",
          desc: "<p><span>En Manos del Itamae:</span> en compañía de un experto en sushi podrás aprender y degustar sobre makis, nigiris y sashimis frescos. Todo en compañía de un Itamae que se encargará de hacer de tu experiencia un momento increíble.</p>",
          pointsProduct: "259200"
        },
        {
          idProduct: 11,
          imageUrl: "assets/images/seratta.png",
          description: "a través de este recorrido de sabores podrás conocer un poco más de España y sus platillos emblemáticos. Entre ellos cortes de jamón de la mejor calidad, Tortilla Española, Croquetas Ibéricas y otras delicias que te llevarán a vivir un verano auropeo. ",
          desc: "<p><span>Y Olé:</span> a través de este recorrido de sabores podrás conocer un poco más de España y sus platillos emblemáticos. Entre ellos cortes de jamón de la mejor calidad, Tortilla Española, Croquetas Ibéricas y otras delicias que te llevarán a vivir un verano auropeo.</p>",
          pointsProduct: "159900"
        },
        {
          idProduct: 12,
          imageUrl: "assets/images/seratta.png",
          description: " en compañía de un Chef experto aprenderás a identificar y disfrutar de la frescura de los productos del mar, preparando deliciosos ceviches de la cocinca latina y Nikkei. ",
          desc: "<p><span>Entre Mares:</span> en compañía de un Chef experto aprenderás a identificar y disfrutar de la frescura de los productos del mar, preparando deliciosos ceviches de la cocinca latina y Nikkei.</p>",
          pointsProduct: "146800"
        },
        {
          idProduct: 13,
          imageUrl: "assets/images/seratta.png",
          description: "a través de cada bocado de platos emblemáticos de la cocinca nipona aprenderás de la traidicón culinario japonesa. Disfruta de sabores donde los suhis, nigiris y platos emblemáticos de esta cocina te harán vivir una experiencia única. ",
          desc: "<p><span>Otafuku Omakase:</span> a través de cada bocado de platos emblemáticos de la cocinca nipona aprenderás de la traidicón culinario japonesa. Disfruta de sabores donde los suhis, nigiris y platos emblemáticos de esta cocina te harán vivir una experiencia única.</p>",
          pointsProduct: "190000"
        },
        {
          idProduct: 14,
          imageUrl: "assets/images/seratta.png",
          description: "aprende los mejores secretos y trucos para preparar pasta como un auténtico italiano, en compañía de un Chef experto podrás balancear y disfrutar los mejores sabores de la cocina Italiana. ",
          desc: "<p><span>La Vera Italia:</span> aprende los mejores secretos y trucos para preparar pasta como un auténtico italiano, en compañía de un Chef experto podrás balancear y disfrutar los mejores sabores de la cocina Italiana.</p>",
          pointsProduct: "144600"
        },
      ]
    },
    {
      title: "BONOS DE REGALO",
      image: "assets/images/bono-seratta.png",
      text: "<p>Una increíble experiencia para compartir. Con este bono, podrás disfrutar de una aventura gastronómica en un restaurante del Grupo Serrata de tu elección.<br>El bono tiene una validez de un año después de la fecha de redención. Aplican los TYC definidos por Grupo Seratta, disponibles en:<br> <a href='https://www.restauranteseratta.com/terminos-condiciones' target='_blank'>https://www.restauranteseratta.com/terminos-condiciones</a></p>",
      active: false,
      listV: [
        {
          idProduct: 15,
          imageUrl: "/assets/images/bono-seratta.png",
          description: "Una increíble experiencia para compartir. Con este bono, podrás disfrutar de una aventura gastronómica en un restaurante del Grupo Serrata de tu elección. El bono tiene una validez de un año después de la fecha de redención. Aplican los TYC definidos por Grupo Seratta, disponibles en: https://www.restauranteseratta.com/terminos-condiciones ",
          pointsProduct:"100000"
        },
        {
          idProduct: 16,
          imageUrl: "/assets/images/bono-seratta.png",
          description: "Una increíble experiencia para compartir. Con este bono, podrás disfrutar de una aventura gastronómica en un restaurante del Grupo Serrata de tu elección. El bono tiene una validez de un año después de la fecha de redención. Aplican los TYC definidos por Grupo Seratta, disponibles en: https://www.restauranteseratta.com/terminos-condiciones ",
          pointsProduct:"200000"
        },
        {
          idProduct: 17,
          imageUrl: "/assets/images/bono-seratta.png",
          description: "Una increíble experiencia para compartir. Con este bono, podrás disfrutar de una aventura gastronómica en un restaurante del Grupo Serrata de tu elección. El bono tiene una validez de un año después de la fecha de redención. Aplican los TYC definidos por Grupo Seratta, disponibles en: https://www.restauranteseratta.com/terminos-condiciones ",
          pointsProduct:"500000"
        },
        {
          idProduct: 18,
          imageUrl: "/assets/images/bono-seratta.png",
          description: "Una increíble experiencia para compartir. Con este bono, podrás disfrutar de una aventura gastronómica en un restaurante del Grupo Serrata de tu elección. El bono tiene una validez de un año después de la fecha de redención. Aplican los TYC definidos por Grupo Seratta, disponibles en: https://www.restauranteseratta.com/terminos-condiciones ",
          pointsProduct:"1000000"
        }
      ]
    },
    {
      title: "EVENTOS MENSUALES SERATTA",
      image: "assets/images/evento-seratta.png",
      text: "<p>Eventos exclusivos, donde el diseño cautivador se fusiona con platos creativos elaborados con los más finos ingredientes. Déjate sorprender por experiencias personalizadas y una oferta gastronómica a la vanguardia de las tendencias. </p>",
      active: false,
      listV: [
        {
          idProduct: 19,
          imageUrl: "assets/images/evento-seratta.png",
          description: "Eventos exclusivos, donde el diseño cautivador se fusiona con platos creativos elaborados con los más finos ingredientes. Déjate sorprender por experiencias personalizadas y una oferta gastronómica a la vanguardia de las tendencias.",
          pointsProduct:"59900"
        },
        {
          idProduct: 20,
          imageUrl: "assets/images/evento-seratta.png",
          description: "Eventos exclusivos, donde el diseño cautivador se fusiona con platos creativos elaborados con los más finos ingredientes. Déjate sorprender por experiencias personalizadas y una oferta gastronómica a la vanguardia de las tendencias.",
          pointsProduct:"158400"
        },
        {
          idProduct: 21,
          imageUrl: "assets/images/evento-seratta.png",
          description: "Eventos exclusivos, donde el diseño cautivador se fusiona con platos creativos elaborados con los más finos ingredientes. Déjate sorprender por experiencias personalizadas y una oferta gastronómica a la vanguardia de las tendencias.",
          pointsProduct:"129900"
        }
      ]
    },
  ]

  listMatumbe = [
    {
      title: "Clase Grupal",
      text: "",
      active: false,
      listH: [
        {
          idProduct: 22,
          imageUrl: "assets/images/matumbe.png",
          description: "A ponernos en movimiento. Clase de baile en Matumbé Fitness Dance Studio de 50 minutos, en la cual será posible tonificar el cuerpo, fortalecer el sistema cardiovascular, mejorar el equilibrio y la ubicación espacial y tener un espacio divertido y de recarga. Clase válida para una persona, la disponibilidad de los horarios en cada sede debe ser consultado a la línea de WA de Matumbé (+57 3164713110) y aplican los TYC definidos por el studio fitness, disponibles aquí.",
          desc: "<p>A ponernos en movimiento. Clase de baile en Matumbé Fitness Dance Studio de 50 minutos, en la cual será posible tonificar el cuerpo, fortalecer el sistema cardiovascular, mejorar el equilibrio y la ubicación espacial y tener un espacio divertido y de recarga.<br>Clase válida para una persona, la disponibilidad de los horarios en cada sede debe ser consultado a <span>la línea de WA de Matumbé (+57 3164713110)</span> y aplican los TYC definidos por el studio fitness, disponibles aquí.</p>",
          pointsProduct: "45000"
        }
      ]
    },
    {
      title: "Clases Individuales",
      text: "",
      active: false,
      listH: [
        {
          idProduct: 23,
          imageUrl: "assets/images/matumbe.png",
          description: "Un espacio creado para tu bienestar. Clase de baile en Matumbé Fitness Dance Studio de 50 minutos en la cual será posible tonificar el cuerpo, fortalecer el sistema cardiovascular, mejorar el equilibrio, la ubicación espacial, y tener un espacio divertido y de recarga. Clase válida para una persona, la disponibilidad de los horarios en cada sede debe ser consultado a la línea de WA de Matumbé (+57 3164713110) y aplican los TYC definidos por el studio fitness, disponibles aquí.",
          desc: "<p>Un espacio creado para tu bienestar. Clase de baile en Matumbé Fitness Dance Studio de 50 minutos en la cual será posible tonificar el cuerpo, fortalecer el sistema cardiovascular, mejorar el equilibrio, la ubicación espacial, y tener un espacio divertido y de recarga.<br>Clase válida para una persona, la disponibilidad de los horarios en cada sede debe ser consultado a la línea de WA de Matumbé (+57 3164713110) y aplican los TYC definidos por el studio fitness, disponibles aquí. </p>",
          pointsProduct: "130000"
        }
      ]
    }
  ]

  listCyglo = [
    {
      title: "Clase inidividual ",
      text: "",
      active: false,
      listH: [
        {
          idProduct: 24,
          imageUrl: "assets/images/cyglo.png",
          description: "Clases de 45 minutos en las que la música es tu paisaje, y la bici tu mejor aliado para recorrerlo. Una rumba asegurada. Enfoque cardiovascular de alta intensidad. Aplican TyC de Cyglo, disponibles en: https://cyglo.co/terminos-y-condiciones",
          desc: "<p>Clases de 45 minutos en las que la música es tu paisaje, y la bici tu mejor aliado para recorrerlo.<br>Una rumba asegurada.<br>Enfoque cardiovascular de alta intensidad.<br>Aplican TyC de Cyglo, disponibles en: <a href='https://cyglo.co/terminos-y-condiciones' target='_blank'>https://cyglo.co/terminos-y-condiciones</a></p>",
          pointsProduct: "53000"
        }
      ]
    },
    {
      title: "Semana de Prueba",
      text: "",
      active: false,
      listH: [
        {
          idProduct: 25,
          imageUrl: "assets/images/cyglo.png",
          description: "Un tiempo dedicado a ti. Semana introductoria de 7 clases, es válido por siete días consecutivos a partir del día de tu primera reserva. Esta semana te permite probar nuestros diferentes tipos de clase (FYRE, FLOW, RIDE, BOOST), coaches, horarios y estudios. Puedes tomar las clases que desees en ese plazo de siete días. Aplicar TyC de Cyglo, disponibles en: https://cyglo.co/terminos-y-condiciones",
          desc: "<p>Un tiempo dedicado a ti. Semana introductoria de 7 clases, es válido por siete días consecutivos a partir del día de tu primera reserva. Esta semana te permite probar nuestros diferentes tipos de clase (FYRE, FLOW, RIDE, BOOST), coaches, horarios y estudios. Puedes tomar las clases que desees en ese plazo de siete días. Aplicar TyC de Cyglo, disponibles en: <a href='https://cyglo.co/terminos-y-condiciones' target='_blank'>https://cyglo.co/terminos-y-condiciones</a></p>",
          pointsProduct: "76000"
        }
      ]
    }
  ]

  listPilates = [
    {
      title: "Clases individuales/ de prueba de pilates y ejercicio funcional",
      text: "",
      active: false,
      listH: [
        {
          idProduct: 26,
          imageUrl: "assets/images/pitales.png",
          description: "Dedica un espacio para tu cuerpo y bienestar. Clases de 40-55 minutos en las que puedes elegir entre PILATES PRO - PILATES CLASSIC - PILATES MAT - BARRE PRO - STRETCH & RESTORE. La disponibilidad de cada clase depende de las sedes de Pilates ProWorks. Aplican TYC presentados por Pilates ProWorks, disponibles aquí.",
          desc: "<p>Dedica un espacio para tu cuerpo y bienestar. Clases de 40-55 minutos en las que puedes elegir entre PILATES PRO - PILATES CLASSIC - PILATES MAT - BARRE PRO - STRETCH & RESTORE. La disponibilidad de cada clase depende de las sedes de Pilates ProWorks. Aplican TYC presentados por Pilates ProWorks, disponibles aquí.</p>",
          pointsProduct: "56800"
        }
      ]
    }
  ]

  listTuboleta = [
    {
      title: "Entradas a conciertos, shows de comedia, eventos de ferias, etc ",
      text: "<p>Nuevas Experiencias y diversión. Bono disponible para adquirir las boletas de tus eventos favoritos a través de TuBoleta. <br>Ten en cuenta el valor del bono que deseas redimir. Aplican TYC presentados por TuBoleta, disponibles en:  <a href='https://acortar.link/aE7YJR' target='_blank'>https://acortar.link/aE7YJR</a> y <a href='https://acortar.link/bJH6WD' target='_blank'>https://acortar.link/bJH6WD</a></p>",
      active: false,
      listV: [
        {
          idProduct: 27,
          imageUrl: "assets/images/tuboleta.png",
          description: "Nuevas Experiencias y diversión. Bono disponible para adquirir las boletas de tus eventos favoritos a través de TuBoleta. Ten en cuenta el valor del bono que deseas redimir. Aplican TYC presentados por TuBoleta, disponibles en:  https://acortar.link/aE7YJR y https://acortar.link/bJH6WD",
          pointsProduct:"50000"
        },
        {
          idProduct: 28,
          imageUrl: "assets/images/tuboleta.png",
          description: "Nuevas Experiencias y diversión. Bono disponible para adquirir las boletas de tus eventos favoritos a través de TuBoleta. Ten en cuenta el valor del bono que deseas redimir. Aplican TYC presentados por TuBoleta, disponibles en:  https://acortar.link/aE7YJR y https://acortar.link/bJH6WD",
          pointsProduct:"100000"
        },
        {
          idProduct: 29,
          imageUrl: "assets/images/tuboleta.png",
          description: "Nuevas Experiencias y diversión. Bono disponible para adquirir las boletas de tus eventos favoritos a través de TuBoleta. Ten en cuenta el valor del bono que deseas redimir. Aplican TYC presentados por TuBoleta, disponibles en:  https://acortar.link/aE7YJR y https://acortar.link/bJH6WD",
          pointsProduct:"200000"
        },
        {
          idProduct: 30,
          imageUrl: "assets/images/tuboleta.png",
          description: "Nuevas Experiencias y diversión. Bono disponible para adquirir las boletas de tus eventos favoritos a través de TuBoleta. Ten en cuenta el valor del bono que deseas redimir. Aplican TYC presentados por TuBoleta, disponibles en:  https://acortar.link/aE7YJR y https://acortar.link/bJH6WD",
          pointsProduct:"300000"
        },
        {
          idProduct: 31,
          imageUrl: "assets/images/tuboleta.png",
          description: "Nuevas Experiencias y diversión. Bono disponible para adquirir las boletas de tus eventos favoritos a través de TuBoleta. Ten en cuenta el valor del bono que deseas redimir. Aplican TYC presentados por TuBoleta, disponibles en:  https://acortar.link/aE7YJR y https://acortar.link/bJH6WD",
          pointsProduct:"400000"
        },
        {
          idProduct: 32,
          imageUrl: "assets/images/tuboleta.png",
          description: "Nuevas Experiencias y diversión. Bono disponible para adquirir las boletas de tus eventos favoritos a través de TuBoleta. Ten en cuenta el valor del bono que deseas redimir. Aplican TYC presentados por TuBoleta, disponibles en:  https://acortar.link/aE7YJR y https://acortar.link/bJH6WD",
          pointsProduct:"500000"
        }
      ]
    }
  ]

  listTeatro = [
    {
      title: "Entradas a obras de teatro",
      text: "<p>Un punto de encuentro con la cultura. Bono disponible para adquirir las boletas a tus eventos favoritos en el Teatro Nacional.<br>Ten en cuenta el valor del bono que deseas redimir.<br>Aplican TYC presentados por Teatro Nacional, disponibles en: <a href='https://teatronacional.co/terminos-y-condiciones/' target='_blank'>https://teatronacional.co/terminos-y-condiciones/</a></p>",
      active: false,
      listV: [
        {
          idProduct: 33,
          imageUrl: "assets/images/teatro.png",
          description: "Un punto de encuentro con la cultura. Bono disponible para adquirir las boletas a tus eventos favoritos en el Teatro Nacional .Ten en cuenta el valor del bono que deseas redimir.Aplican TYC presentados por Teatro Nacional, disponibles en: https://teatronacional.co/terminos-y-condiciones/",
          pointsProduct:"80000"
        },
        {
          idProduct: 34,
          imageUrl: "assets/images/teatro.png",
          description: "Un punto de encuentro con la cultura. Bono disponible para adquirir las boletas a tus eventos favoritos en el Teatro Nacional .Ten en cuenta el valor del bono que deseas redimir.Aplican TYC presentados por Teatro Nacional, disponibles en: https://teatronacional.co/terminos-y-condiciones/",
          pointsProduct:"100000"
        },
        {
          idProduct: 35,
          imageUrl: "assets/images/teatro.png",
          description: "Un punto de encuentro con la cultura. Bono disponible para adquirir las boletas a tus eventos favoritos en el Teatro Nacional .Ten en cuenta el valor del bono que deseas redimir.Aplican TYC presentados por Teatro Nacional, disponibles en: https://teatronacional.co/terminos-y-condiciones/",
          pointsProduct:"150000"
        }
      ]
    }
  ]

  listKift = [
    {
      title: "Bonos de diferentes comercios nacionales",
      text: "<p>Múltiples opciones para redimir. Bono disponible para escoger entre un catálogo de más de 50 marcas. Recuerda que el valor mínimo de redención es de 25.000. Aplican TyC presentados por Kiosco, disponibles en: <a href='http://www.elkioscodelregalo.com/t-rminos---condiciones.html' target='_blank'>http://www.elkioscodelregalo.com/t-rminos---condiciones.html</a></p>",
      active: false,
      listV: [
        {
          idProduct: 36,
          imageUrl: "assets/images/kift.png",
          description: "Múltiples opciones para redimir. Bono disponible para escoger entre un catálogo de más de 50 marcas. Recuerda que el valor mínimo de redención es de 25.000. Aplican TyC presentados por Kiosco, disponibles en: http://www.elkioscodelregalo.com/t-rminos---condiciones.html",
          pointsProduct:"25000"
        },
        {
          idProduct: 37,
          imageUrl: "assets/images/kift.png",
          description: "Múltiples opciones para redimir. Bono disponible para escoger entre un catálogo de más de 50 marcas. Recuerda que el valor mínimo de redención es de 25.000. Aplican TyC presentados por Kiosco, disponibles en: http://www.elkioscodelregalo.com/t-rminos---condiciones.html",
          pointsProduct:"50000"
        },
        {
          idProduct: 38,
          imageUrl: "assets/images/kift.png",
          description: "Múltiples opciones para redimir. Bono disponible para escoger entre un catálogo de más de 50 marcas. Recuerda que el valor mínimo de redención es de 25.000. Aplican TyC presentados por Kiosco, disponibles en: http://www.elkioscodelregalo.com/t-rminos---condiciones.html",
          pointsProduct:"100000"
        },
        {
          idProduct: 39,
          imageUrl: "assets/images/kift.png",
          description: "Múltiples opciones para redimir. Bono disponible para escoger entre un catálogo de más de 50 marcas. Recuerda que el valor mínimo de redención es de 25.000. Aplican TyC presentados por Kiosco, disponibles en: http://www.elkioscodelregalo.com/t-rminos---condiciones.html",
          pointsProduct:"250000"
        },
        {
          idProduct: 40,
          imageUrl: "assets/images/kift.png",
          description: "Múltiples opciones para redimir. Bono disponible para escoger entre un catálogo de más de 50 marcas. Recuerda que el valor mínimo de redención es de 25.000. Aplican TyC presentados por Kiosco, disponibles en: http://www.elkioscodelregalo.com/t-rminos---condiciones.html",
          pointsProduct:"500000"
        }
      ]
    }
  ]

  listAviatur = [
    {
      title: "Bono de Regalo",
      text: "<p>Es hora de viajar y disfrutar. Bono disponible para adquirir tiquetes, hoteles, autos, paquetes turísticos, cruceros y mucho más a través de Aviatur. Ten en cuenta el valor del bono que deseas redimir. Aplican TYC presentados por Aviatur, disponibles en: <a href='https://www.aviatur.com/contenidos/condiciones-bono-regalo-aviatur' target='_blank'>https://www.aviatur.com/contenidos/condiciones-bono-regalo-aviatur</a></p>",
      active: false,
      listV: [
        {
          idProduct: 41,
          imageUrl: "assets/images/aviatur.png",
          description: "Es hora de viajar y disfrutar. Bono disponible para adquirir tiquetes, hoteles, autos, paquetes turísticos, cruceros y mucho más a través de Aviatur. Ten en cuenta el valor del bono que deseas redimir. Aplican TYC presentados por Aviatur, disponibles en: https://www.aviatur.com/contenidos/condiciones-bono-regalo-aviatur",
          pointsProduct:"50000"
        },
        {
          idProduct: 42,
          imageUrl: "assets/images/aviatur.png",
          description: "Es hora de viajar y disfrutar. Bono disponible para adquirir tiquetes, hoteles, autos, paquetes turísticos, cruceros y mucho más a través de Aviatur. Ten en cuenta el valor del bono que deseas redimir. Aplican TYC presentados por Aviatur, disponibles en: https://www.aviatur.com/contenidos/condiciones-bono-regalo-aviatur",
          pointsProduct:"100000"
        },
        {
          idProduct: 43,
          imageUrl: "assets/images/aviatur.png",
          description: "Es hora de viajar y disfrutar. Bono disponible para adquirir tiquetes, hoteles, autos, paquetes turísticos, cruceros y mucho más a través de Aviatur. Ten en cuenta el valor del bono que deseas redimir. Aplican TYC presentados por Aviatur, disponibles en: https://www.aviatur.com/contenidos/condiciones-bono-regalo-aviatur",
          pointsProduct:"200000"
        },
        {
          idProduct: 44,
          imageUrl: "assets/images/aviatur.png",
          description: "Es hora de viajar y disfrutar. Bono disponible para adquirir tiquetes, hoteles, autos, paquetes turísticos, cruceros y mucho más a través de Aviatur. Ten en cuenta el valor del bono que deseas redimir. Aplican TYC presentados por Aviatur, disponibles en: https://www.aviatur.com/contenidos/condiciones-bono-regalo-aviatur",
          pointsProduct:"3000000"
        },
        {
          idProduct: 45,
          imageUrl: "assets/images/aviatur.png",
          description: "Es hora de viajar y disfrutar. Bono disponible para adquirir tiquetes, hoteles, autos, paquetes turísticos, cruceros y mucho más a través de Aviatur. Ten en cuenta el valor del bono que deseas redimir. Aplican TYC presentados por Aviatur, disponibles en: https://www.aviatur.com/contenidos/condiciones-bono-regalo-aviatur",
          pointsProduct:"500000"
        },
        {
          idProduct: 46,
          imageUrl: "assets/images/aviatur.png",
          description: "Es hora de viajar y disfrutar. Bono disponible para adquirir tiquetes, hoteles, autos, paquetes turísticos, cruceros y mucho más a través de Aviatur. Ten en cuenta el valor del bono que deseas redimir. Aplican TYC presentados por Aviatur, disponibles en: https://www.aviatur.com/contenidos/condiciones-bono-regalo-aviatur",
          pointsProduct:"1000000"
        }
      ]
    }
  ]

  addCar(element:any){

    const data = {
      idProduct: element.idProduct,
      imageUrl: element.imageUrl,
      description: element.description,
      pointsProduct: element.pointsProduct,
      redeemedAmount: 1,
      total: element.pointsProduct,
      idUser: sessionStorage.getItem("userId")
    }

    this.userService.saveProductsCart(data).subscribe({
      next: (response) => {
        this.router.navigate(["/carrito-de-compras"]);
      },
      error: (error) => {
      }
    })
  }
  
  activeItemSerata(id:any) {
    this.listSerata[id].active = !this.listSerata[id].active
  }

  activeItemMatumbe(id:any) {
    this.listMatumbe[id].active = !this.listMatumbe[id].active
  }

  activeItemCyglo(id:any) {
    this.listCyglo[id].active = !this.listCyglo[id].active
  }

  activeItemPilates(id:any) {
    this.listPilates[id].active = !this.listPilates[id].active
  }

  activeItemTuboleta(id:any) {
    this.listTuboleta[id].active = !this.listTuboleta[id].active
  }

  activeItemTeatro(id:any) {
    this.listTeatro[id].active = !this.listTeatro[id].active
  }

  activeItemKift(id:any) {
    this.listKift[id].active = !this.listKift[id].active
  }

  activeItemAviatur(id:any) {
    this.listAviatur[id].active = !this.listAviatur[id].active
  }
}
