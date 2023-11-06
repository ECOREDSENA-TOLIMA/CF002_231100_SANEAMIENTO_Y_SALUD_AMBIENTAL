<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Inspección de condiciones sanitarias 

    .row.align-items-center.my-5.col-lg-12.m-auto  
      .cajon.color-primario.p-4.mt-0.col-lg-12.m-auto.pb-1(style="background-color:#E7FFD1;")
        p.mb-0.py-3(data-aos="fade-up") La importancia de que se emita el concepto sanitario es de vital importancia para las empresas dedicadas a fabricar, procesar, preparar, envasar, almacenar, transportar, distribuir, comercializar, importar o exportar alimentos o materias primas para alimentos, donde gracias a este se prevé posibles riesgos higiénico-sanitarios de los consumidores y trabajadores; además, se puede mejorar la cadena de producción y de igual manera se fortalece la imagen empresarial.
    
    .cont_1_1.mt-5(style="position:relative;")
      .titulo-segundo.color-acento-contenido(style="position:relative")
        h2#t_1_1 1.1  Conceptos y tipos   
      p La verificación técnica de las condiciones sanitarias y de salubridad de los establecimientos comerciales de acuerdo con la normatividad vigente, deben necesariamente contar con el concepto sanitario; para ello, se debe tener en cuenta lo siguiente:

    figure.desktop.d-none.d-sm-block.d-sm-none.d-lg-block.d-none.d-md-block
      ImagenInfografica.color-acento-botones
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/temas/1/1.svg', alt='Texto que describa la imagen')

        .tarjeta.color-primario.p-3(x="4.5%" y="51%" numero="+")
          .h5.mb-2 Concepto sanitario
          p Concepto sanitario: Es “el concepto emitido por la autoridad sanitaria una vez realizada la inspección, vigilancia y control al establecimiento donde se fabriquen, procesen, preparen, envasen, almacenen transporten, distribuyan, comercialicen, importen o exporten alimentos o sus materias primas” (Ministerio de Salud y Protección Social, 2013). Gracias a esto, se ayuda a mitigar el riesgo de contaminación o algún posible riesgo sanitario.

        .tarjeta.color-primario.p-3(x="17.5%" y="77%" numero="+")
          .h5.mb-2 Limpieza
          p Limpieza: es vital para cada establecimiento, ya que es “la remoción, generalmente realizada con agua y detergente, de la materia orgánica e inorgánica visible” (Ministerio de la Protección Social, 2006), contribuyendo a una cultura de limpieza la cual nos permite mitigar la diferente carga bacteriana visible.

        .tarjeta.color-primario.p-3(x="41.9%" y="90%" numero="+")
          .h5.mb-2 Descontaminación
          p Descontaminación: es un “proceso físico o químico mediante el cual los objetos contaminados se dejan seguros para ser manipulados por el personal, al bajar la carga microbiana” (Ministerio de la Protección Social, 2006), por lo cual nos indica que este proceso de limpieza es de vital importancia, ya que ayuda a controlar cualquier tipo de contaminación que se pueda presentar.

        .tarjeta.color-primario.p-3(x="65%" y="77%" numero="+")
          .h5.mb-2 Desinfección
          p Desinfección: donde nos dice que “es el proceso físico o químico por medio del cual se logra eliminar los microorganismos de formas vegetativas en objetos inanimados, sin que se asegure la eliminación de esporas bacterianas. Por esto los objetos y herramientas a desinfectar, se les debe evaluar previamente el nivel de desinfección que requieren para lograr la destrucción de los microorganismos que contaminan los elementos” (Ministerio de la Protección Social, 2006).
        
        .tarjeta.color-primario.p-3(x="79%" y="48%" numero="+")
          .h5.mb-2 Inspección
          p Inspección: es un significado importante debido a que “consiste en la atribución que tienen la Superintendencia Nacional de Salud, el Invima, los servicios seccionales, distritales y locales de salud, para verificar, solicitar, confirmar y analizar de manera ocasional, y en la forma, detalles y términos que las normas determinen, información sobre el estado higiénico-sanitario de las personas, establecimientos, edificaciones y, en general, todos los entes que de conformidad con la ley y sus reglamentos son susceptibles de ser inspeccionados por estas” (Secretaría Distrital de Salud de Bogotá, 2016).

    figure.movil.mt-0
      .row.justify-content-center.d-lg-none.d-md-none        
        img(src="@/assets/curso/temas/1/2.svg" data-aos="zoom-in-up") 

    Separador.mt-5        

    .cont_1_2.pt-3(style="position:relative;")
      .titulo-segundo.color-acento-contenido(style="position:relative")
        h2#t_1_2 1.2 Tipos de medidas sanitarias

    p Existe un sistema de medidas sanitarias que trata sobre las reglas básicas de cómo los alimentos y salud de los animales no generan algún tipo de daño. Cada país establece las normas por las cuales se van a regir, pero se debe tener en cuenta que estas normas deben ir fundamentadas por principios científicos y que sean aplicadas solo cuando exista algún riesgo para la salud y la vida de los consumidores. El acuerdo que se implementó debe llevar la siguiente información:
    
    .row.align-items-center.my-1.col-lg-12.m-auto.mt-5        
      .col-lg-7.col-sm-12.col-m-12.col-md-12
        figure
          img.mb-1(src='@/assets/curso/temas/1/3.png').m-auto(data-aos="fade-right")
      .col-lg-5.col-sm-12.col-m-12.col-md-12   
        ol.lista-ol--cuadro.lista-ol--separador
          li.my-1.pb-1 
            .lista-ol--cuadro__vineta
              span(style="color:black") 1
            | Cubrir todas las actividades de la cadena agroalimentaria: “De la granja y el mar a la mesa”.
          li.my-1.pb-1  
            .lista-ol--cuadro__vineta.mb-0
              span.mb-1(style="color:black") 2
            | Soportarse en el enfoque de análisis de riesgo. 
          li.my-1.pb-1  
            .lista-ol--cuadro__vineta
              span(style="color:black") 3
            | La admisibilidad de los productos exige no solo el cumplimiento de requisitos en los productos, sino también la calidad y credibilidad de los sistemas nacionales MSF del país exportador.
          li.my-1.pb-1  
            .lista-ol--cuadro__vineta
              span(style="color:black") 4
            | La ampliación y fortalecimiento de los sistemas de vigilancia y control. 
          li.my-1.pb-1  
            .lista-ol--cuadro__vineta
              span(style="color:black") 5
            | Mayor importancia de los sistemas preventivos, como las BPA (Buenas Prácticas Agrícolas), el Sistema HACCP (Análisis de peligros y puntos de control crítico) y la trazabilidad
          li.my-1.pb-1  
            .lista-ol--cuadro__vineta
              span(style="color:black") 6
            | La mayor exigencia de una base científica para la determinación de MSF. 
          li.my-1.pb-1  
            .lista-ol--cuadro__vineta
              span(style="color:black") 7
            | El fortalecimiento y desarrollo de las instituciones sanitarias (MinSalud, 2013).

    Separador.mt-5        

    .cont_1_3.pt-3(style="position:relative;")
      .titulo-segundo.color-acento-contenido(style="position:relative")
        h2#t_1_3 1.3 Protocolos y procedimientos

    p Cuando se desea solicitar el concepto sanitario para un establecimiento se deben seguir los siguientes protocolos y procedimientos:    

    LineaTiempoC.color-primario(text-small)
      
      .row.align-items-center(titulo="1").p-4(style="background-color:#DBF9BD")
        .col-lg-3
          figure
            img(src='@/assets/curso/temas/1/4.svg' alt='Información de las secretarías de salud').mb-4
        .col-lg-9
          h4 Información de las secretarías de salud
          p Acceder a información que cada secretaría de salud del municipio o subred de la secretaría distrital de salud, tiene en su página web o por atención telefónica.


      .row.align-items-center(titulo="2").p-4(style="background-color:#DBF9BD")
        .col-lg-3
          figure
            img(src='@/assets/curso/temas/1/5.svg' alt='Documentos requeridos').mb-4
        .col-lg-9
          h4 Documentos requeridos
          p Reunir los documentos requeridos por cada entidad territorial para realizar el trámite.

      
      .row.align-items-center(titulo="3").p-4(style="background-color:#DBF9BD")
        .col-lg-3
          figure
            img(src='@/assets/curso/temas/1/6.svg' alt='Solicitud del concepto sanitario').mb-4
        .col-lg-9
          h4 Solicitud del concepto sanitario
          p Radicar la solicitud de visita frente a la secretaría de salud de forma escrita.

      
      .row.align-items-center(titulo="4").p-4(style="background-color:#DBF9BD")
        .col-lg-3
          figure
            img(src='@/assets/curso/temas/1/7.svg' alt='Esperar la visita y recibir la visita del funcionario').mb-4
        .col-lg-9
          h4 Esperar la visita y recibir la visita del funcionario
          p El funcionario revisará que se cumpla con las normas higiénico-sanitarias vigentes. Deberá estar debidamente identificado  y se acercará al establecimiento registrado en la carta de solicitud.

      
      .row.align-items-center(titulo="5").p-4(style="background-color:#DBF9BD")
        .col-lg-3
          figure
            img(src='@/assets/curso/temas/1/8.svg' alt='Recibir el resultado de la visita de concepto sanitario').mb-4
        .col-lg-9
          h4 Recibir el resultado de la visita de concepto sanitario
          p El funcionario dará una conclusión y se notificará por medio escrito o digital.

    p.my-5 También se deben tener en cuenta estos procedimientos sanitarios:

    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-lg-10 
        .titulo-sexto.mb-0.color-acento-contenido.mb-4
          p.mb-0 #[b Figura 1.] 
            i  Procedimientos sanitarios        
        .row 
          figure.desktop.d-none.d-sm-block.d-sm-none.d-lg-block.d-none.d-md-block
            img.mb-1(src='@/assets/curso/temas/1/9.svg' alt='En la figura 1 se muestran los aspectos que son de revisión en los procedimientos sanitarios.').m-auto(data-aos="fade-right")
          figure.movil.mt-0
            .row.justify-content-center.d-lg-none.d-md-none        
              img(src="@/assets/curso/temas/1/10.svg" data-aos="zoom-in-up")   

    Separador.mt-5        

    .cont_1_4.pt-3(style="position:relative;")
      .titulo-segundo.color-acento-contenido(style="position:relative")
        h2#t_1_4 1.4  Tipos de establecimientos para inspección

    p.my-4 Los diferentes tipos de establecimientos, donde se realiza la fabricación, procesamiento, preparación, envase, almacenamiento, transporte, distribución y comercialización de alimentos, deben realizarse la respectiva inspección por medio de la autoridad sanitaria requerida, esto para generar una mayor orientación respecto a cada actividad que se ejecuta.      
    p.my-4 Algunos de los establecimientos que deben regirse a la norma sanitaria son:   

    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-lg-10   
        figure
          .row
            .col-lg-6.justify-content-center
              img(src="@/assets/curso/temas/1/11.png" data-aos="zoom-in-up")   
            .col-lg-6.justify-content-center
              .cajon.p-4.mt-0.col-lg-12.m-auto.pb-0(style="background-color:#DBF9BD; overflow-x: hidden !important")
                p ● Restaurantes.
                p ● Tiendas de comestibles.
                p ● Tiendas de conveniencia.
                p ● Bares.
                p ● Cafeterías.
                p ● Cafés.
                p ● Heladerías.
                p ● Cocinas de catering.
                p ● Organizaciones privadas al servicio del público.
    
    p.my-4 Según el Invima, existen diferentes tipos de actividades a las cuales se le deben realizar el respectivo control sanitario y se relacionan de la siguiente manera:

    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-lg-10  
        .row.align-items-center.my-5.col-lg-12.m-auto  
          .col-sm-12.col-lg-12
            .titulo-sexto.mb-0.color-acento-contenido.mb-1
              p.mb-0 #[b Tabla 1.] 
                i Tipos de actividades y su control sanitario.
        .tabla-b.color-acento-contenido
          table
            caption Nota. Tomada del Instituto de Vigilancia de Medicamentos y Alimentos- Invima. 
            thead
              tr
                th.text-center(style="background-color:#FFAE7E" rowspan="2") Actividad
                th.text-center(style="background-color:#FFAE7E; " colspan="2") Autoridad competente 
              tr
                th.text-center(style="background-color:#FFAE7E") invima 
                th.text-center(style="background-color:#FFAE7E") entidad
            tbody    
            tr
              th Fabricación 
              th.text-center x
              td.text-center 
            tr
              th Preparación   
              th.text-center 
              th.text-center x
            tr
              th Ensamble de refrigerios o menús
              th.text-center 
              th.text-center x
            tr
              th Almacenamiento
              th.text-center 
              th.text-center x
            tr
              th Distribución
              th.text-center 
              th.text-center x
            tr
              th Expendio o Comercialización
              th.text-center 
              th.text-center x
            tr
              th Vehículos transportadores de alimentos
              th.text-center
              th.text-center x

    p.my-4 Realizar la inscripción en el Invima es muy sencillo, solo debe ingresar a la página web de la institución www.invima.gov.co y seguir el paso a paso, también los establecimientos que deban realizar el proceso ante la Entidad Territorial de Salud (ETS) deben, primero, revisar en qué categoría se encuentra el municipio en el que están ubicados y después se adelantará la visita de la ETS dependiendo si es departamental o municipal.

    Separador.mt-5        

    .cont_1_5.pt-3(style="position:relative;")
      .titulo-segundo.color-acento-contenido(style="position:relative")
        h2#t_1_5 1.5  Autoridades sanitarias

    p.my-4 En continuidad con el anterior punto, la autoridad sanitaria es la encargada de realizar la inspección dependiendo el establecimiento y las actividades que allí ejerza; a continuación, se verán las entidades y qué tipos de establecimientos aplican.

    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-lg-10 
        .titulo-sexto.mb-0.color-acento-contenido.mb-4
          p.mb-0 #[b Figura 2.] 
            i  Entidades sanitarias.        
        .row 
          figure.desktop.d-none.d-sm-block.d-sm-none.d-lg-block.d-none.d-md-block
            img.mb-1(src='@/assets/curso/temas/1/12.svg' alt='● Plantas de beneficio animal, desposte, desprese y acondicionadores. ● Centros de acopio de leche. ● Plantas de procesamiento de alimentos y bebidas. ● Buques pesqueros. ● Plantas que elaboran envases y empaques para contacto directo con alimentos.').m-auto(data-aos="fade-right")
          figure.movil.mt-0
            .row.justify-content-center.d-lg-none.d-md-none        
              img(src="@/assets/curso/temas/1/13.svg" data-aos="zoom-in-up")  

    p.my-4 Dependiendo la ubicación del establecimiento, la Entidad Territorial de Salud (ETS) de manera particular inspeccionará el mismo como se muestra a continuación:

    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-lg-10 
        .titulo-sexto.mb-0.color-acento-contenido.mb-4
          p.mb-0 #[b Figura 3.] 
            i  Estructura de control de ETS.        
        .row 
          figure.desktop.d-none.d-sm-block.d-sm-none.d-lg-block.d-none.d-md-block
            img.mb-1(src='@/assets/curso/temas/1/14.svg' alt='La figura 4 nos muestra en forma de pirámide  los niveles de autoridades sanitarias, en la base el nivel local, siguiendo por el nivel intermedio y en la punta el nivel nacional.').m-auto(data-aos="fade-right")
          figure.movil.mt-0
            .row.justify-content-center.d-lg-none.d-md-none        
              img(src="@/assets/curso/temas/1/16.svg" data-aos="zoom-in-up")  

    p.my-4 La autoridad sanitaria es un conjunto de instituciones oficiales encargadas de direccionar el sistema de salud y está compuesta por tres niveles:

    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-lg-10 
        .titulo-sexto.mb-0.color-acento-contenido.mb-4
          p.mb-0 #[b Figura 4.] 
            i  Niveles de autoridades sanitarias.      
        .row 
          figure.desktop.d-none.d-sm-block.d-sm-none.d-lg-block.d-none.d-md-block
            img.mb-1(src='@/assets/curso/temas/1/17.svg' alt='La figura 4 nos muestra en forma de pirámide  los niveles de autoridades sanitarias, en la base el nivel local, siguiendo por el nivel intermedio y en la punta el nivel nacional.').m-auto(data-aos="fade-right")
          figure.movil.mt-0
            .row.justify-content-center.d-lg-none.d-md-none        
              img(src="@/assets/curso/temas/1/15.svg" data-aos="zoom-in-up")  

    p.my-5 Estas autoridades cumplen con las funciones de regulación y gestión, de igual manera, existen organismos de salud que apoyan la prestación adecuada de los diferentes servicios, estos organismos son:
   
    .row.justify-content-center
      .col-lg-10
        .row.no(:style="{'background-image': `url(${require('@/assets/curso/temas/1/19.svg')})`}")
          .col-sm-10.col-lg-2.p-2
            img.mx-3(src='@/assets/curso/temas/1/18.svg', style="width:200px")
          .col-sm-10.col-lg-5
            ul(style="color:black").lista-ul--color.pt-4                
              li
                |● Consejos Territoriales de Seguridad Social en Salud.
              li 
                |● Consejos Municipales de Política Social.
              li 
                |● Sistema de Atención a los Usuarios (SIAU).
              li 
                |● Comités de Participación Comunitaria (Copaco).  
          .col-sm-10.col-lg-5
            ul(style="color:black").lista-ul--color.pt-4                
              li
                |● Asociación de Usuarios.
              li 
                |● Comité de Ética Hospitalaria.
              li 
                |● Veedurías Ciudadanas en Salud, entre otros.
      



</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
