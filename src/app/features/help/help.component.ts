import { Component } from '@angular/core';

@Component({
  selector: 'app-help',
  standalone: true,
  imports: [],
  templateUrl: './help.component.html',
  styleUrl: './help.component.scss'
})
export class HelpComponent {

  list = [
    {
      title: "¿QUIÉNES PODRÁN PARTICIPAR EN EL PLAN DE PRIVILEGIOS?",
      text: "<p>Podrán ser participantes de El Plan todos los usuarios de El Portal que reúnan los siguientes requisitos:</p><br><ol><li><p><strong>1. </strong>Estar asociado a una clave de Intermediario (Agencia o Agente) habilitada y que tenga su acreditación activa (conforme a lo dispuesto en la Circular 050 de 2015)</p></li><li><p><strong>2. </strong>El representante legal del intermediario al que está asociado el usuario, deberá haber enviado previamente a la compañía la autorización para participar en este Plan de Privilegios</p></li><li><p><strong>3. </strong>Haberse registrado en el Plan a través de nuestro sitio web <a href='www.jmtrv.com.co'>www.jmtrv.com.co</a> en la sección Privilegios.</p></li></ol>",
      active: false
    },
    {
      title: "REQUISITO DE AUTORIZACIÓN PARA INGRESAR AL PLAN DE PRIVILEGIOS",
      text: "Escrito en el que el representante legal del Intermediario al que pertenece el Participante le otorga su autorización para participar en El Plan de Privilegios de JMalucelli Travelers Seguros S.A.",
      active: false
    },
    {
      title: "¿CÓMO FUNCIONA EL SISTEMA DE PUNTOS DEL PLAN DE PRIVILEGIOS?",
      text: "<ol><li><p><strong>1. Valor: </strong>Cada $35.000 acumulados en primas de pólizas expedidas y recaudadas, equivaldrán a 1 punto.</p></li><li><p><strong>2. Acumulación: </strong>Se concederán Puntos a los Participantes únicamente cuando se realice la expedición de Nuevas Pólizas a través de El Portal, además la prima de las Nuevas Pólizas deberá ser recaudada durante el mes de la expedición o máximo 5 días después de haber finalizado dicho mes.  Se cargarán y autorizarán, únicamente cuando las facturas de las pólizas expedidas a través de El Portal estén pagadas en su totalidad. Se verán reflejados máximo el mes siguiente de haber recaudado la prima de la Nueva Póliza y ser consultados en nuestro sitio web www.jmtrv.com.co sección Plan de Privilegios, previa Autenticación por parte del Participante.</p></li><li><p><strong>3. Redención: </strong>Los Puntos podrán ser redimidos por los Participantes en nuestro sitio web www.jmtrv.com.co sección Plan de Privilegios, en las diferentes opciones de Beneficio que se encuentren publicadas en el catálogo y que correspondan al número de puntos requeridos para su redención.<br><br>La redención de los Puntos por cualquiera de los privilegios del catálogo que se encuentre vigente al momento de la redención, solamente podrá hacerla el Participante, previo proceso de Autenticación en la página web de la Compañía. Para redimir el Privilegio o los Privilegios seleccionados se deberán tener en cuenta las condiciones o instrucciones brindadas por cada uno de los establecimientos de Comercio, las cuales serán informadas en sitio web www.jmtrv.com.co, sección Plan de Privilegios. Los Puntos cuentan con una vigencia determinada, por tanto, el Cliente deberá verificar el tiempo máximo de vigencia de éstos para estimar la cantidad de puntos que dispone para realizar las redenciones correspondientes.<br><br>Por último, es importante tener en cuenta que la solicitud de Redención de los Puntos será exitosa siempre y cuando el Privilegio se encuentre vigente y activo a la fecha de la solicitud.</p></li><li><p><strong>4. Vigencia: </strong>Los Puntos tienen una vigencia máxima de (6) seis meses calendario a partir de que sean cargados en la cuenta del Participante a la cual ingresa a través de nuestro sitio web www.jmtrv.com.co sección Plan de Privilegios.</p></li></ol>",
      active: false
    },
    {
      title: "¿ES POSIBLE CANCELAR LA SUSCRIPCIÓN AL PLAN DE PRIVILEGIOS?",
      text: "Si es posible, el usuario podrá realizar la cancelación de la suscripción al Plan de Privilegios de JMalucelli Travelers cuando lo desee por medio de la opción existente dentro de su cuenta de El Plan la cual se administra en nuestro sitio web www.jmtrv.com.co sección Plan de Privilegios.",
      active: false
    },
    {
      title: "CAUSALES DE EXCLUSIÓN DEL PLAN DE PRIVILEGIOS",
      text: "<p>Una vez aceptados los Términos y Condiciones de El Plan, serán causantes de exclusión del mismo:</p><br><ol><li><p><strong>1. </strong>Realizar cualquier práctica abusiva, restrictiva, de acoso o amenaza en contra de los demás Participantes o terceros.</p></li><li><p><strong>2. </strong>Utilizar El Plan o El Portal con fines ilegales</p></li><li><p><strong>3. </strong>Utilizar El Plan o El Portal para la obtención de datos o información de terceros.</p></li><li><p><strong>4. </strong>Interferir o intentar interferir con el funcionamiento adecuado del sitio de El Plan.</p></li><li><p><strong>5. </strong>Violar leyes de cualquier jurisdicción.</p></li></ol>",
      active: false
    },
    {
      title: "¿CUÁL ES LA VIGENCIA DEL PLAN DE PRIVILEGIOS?",
      text: "La vigencia de El Plan es indefinida, por lo cual en cualquier oportunidad JMalucelli Travelers podrá entre otras cosas, (i) terminar El Plan; (ii) retirar, limitar, modificar o cancelar cualquier Privilegio; (iii) cambiar los Privilegios de El Plan, participaciones de usuarios, condiciones de participación, reglas y metodología de acumulación y redención de puntos, reglas para el uso de los privilegios y vigencia de los puntos o en todo caso, restringir la disponibilidad de los privilegios o de las ofertas especiales.<br><br>En caso de definirse la culminación del Plan de Privilegios, JMalucelli Travellers dará aviso a los Participantes mediante publicación en la página Web de JMalucelli Travellers o por cualquier otro medio que se estime eficaz para tal fin. En este evento, El Plan se entenderá terminado pasados quince (15) días hábiles a partir del aviso. En este caso, JMalucelli Travelers no realizará devolución en especie o en dinero de los Puntos acumulados que no sean redimidos por el Participante.",
      active: false
    },
    {
      title: "TÉRMINOS Y CONDICIONES DEL PLAN DE PRIVILEGIOS",
      text: "Los Términos y Condiciones que rigen El Plan de Privilegios, delimitando y aclarando las condiciones bajo las cuales los Participantes pueden participar, y redimir los Puntos pueden ser consultados aquí.<br><br>Con el registro del Participante en El Plan, este declara que participa de manera voluntaria y que conoce y acepta todas las condiciones y limitaciones establecidas en los presentes Términos y Condiciones.<br><br>Sobre las <strong>modificaciones a los Términos y Condiciones</strong> de El Plan JMalucelli Travelers podrá cancelar, descontinuar, limitar, modificar, suprimir o adicionar los términos y condiciones de este Plan en cualquier momento con o sin previo aviso. Esto significa que la acumulación de Puntos no acredita a los Participantes ningún tipo de derecho adquirido respecto a dichos Puntos, premios o Privilegios de El Plan. Una versión actualizada de los términos y condiciones de El Plan se encontrará siempre disponible en nuestro sitio web www.jmtrv.com.co sección Plan de Privilegios.",
      active: false
    },
    {
      title: "¿CÓMO ESTÁN SIENDO PROTEGIDOS LOS DATOS PERSONALES?",
      text: "Al afiliarse a El Plan el Participante declara y acepta el tratamiento y el uso de sus datos por parte de JMalucelli Travellers Seguros S.A.  conforme a las finalidades descritas en la Política de Tratamiento de Datos Personales, la cual se podrá consultar en nuestro sitio web www.jmtrv.com.co",
      active: false
    },
    {
      title: "¿CUÁL ES EL ALCANCE LEGAL DEL PLAN DE PRIVILEGIOS?",
      text: "Para todos los efectos legales, El Plan no es un juego al azar pues los Puntos son otorgados con la fidelidad al uso del Portal y la habilidad de expedir y lograr el recaudo de las Nuevas Pólizas.",
      active: false
    },
  ]

  activeItem(id:any) {
    console.log(id)
    this.list[id].active = !this.list[id].active
    console.log(this.list[id].active);
    
  }

}
