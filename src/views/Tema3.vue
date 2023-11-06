<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Valoración y recolección de información de condiciones sanitarias

    .row.align-items-center.my-3.col-lg-12.m-0      
      .col-auto
        figure
          img(src='@/assets/curso/temas/3/0.svg').m-auto(data-aos="fade-right")      
      .col.p-4(style="background:#fff")
        p.mb-2.py-1(style="overflow-x: hidden !important") Las distintas autoridades sanitarias de cada región deben garantizar la Inspección, Vigilancia y Control (IVC), en los diversos establecimientos; este proceso debe ser constante y de manera sistemática para garantizar así los estándares de calidad, lo que nos lleva con todos estos esfuerzos a minimizar los riesgos y daños para la salud humana.
        p.mb-2.py-1(style="overflow-x: hidden !important") El Instituto Nacional de Vigilancia de Medicamentos y Alimentos (Invima) para el año 2014 realizó un modelo para la vigilancia sanitaria llamado IVC-SOA, el cual pretende medir el riesgo de los alimentos, medicamentos, cosméticos, etc., donde se contemplan tres variables importantes: severidad del producto (S), ocurrencia de falla del producto (O) y la población posiblemente afectada (A).

    .cont_3_1.pt-3(style="position:relative;")
      .titulo-segundo.color-acento-contenido(style="position:relative")
        h2#t_3_1  3.1 Procedimiento de valoración de puntajes de riesgo  

    p.my-5 Los productos se clasifican según su Severidad, Ocurrencia y Afectación (SOA), los puntajes de riesgo son totalizados en el Índice de Riesgo Agregado (IRA), lo cual es el valor de riesgo de cada establecimiento, cabe resaltar que el SOA mide el riesgo por producto y las demás variables miden el riesgo por establecimiento. 

    p.my-5 El modelo de riesgo compuesto, el cual evalúa tanto el producto como las entidades o establecimientos es:

    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-lg-10 
        .titulo-sexto.mb-0.color-acento-contenido.mb-4
          p.mb-0 #[b Figura 6.] 
            i  Fórmula general para el modelo de riesgo compuesto

    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-lg-10 
        figure.desktop.d-none.d-sm-block.d-sm-none.d-lg-block.d-none.d-md-block
          img.mb-1(src='@/assets/curso/temas/3/1.svg' alt='Residuos domésticos: Residuos generados en los hogares como consecuencia de las actividades domésticas. Se consideran también domésticos aquellos residuos similares generados en servicios e industrias. Residuos comerciales: Residuos generados por la actividad propia del comercio, al por mayor y al por menor, de los servicios de restauración y bares, de las oficinas y de los mercados, así como del resto del sector servicios. Residuos industriales: Residuos resultantes de los procesos de fabricación, de transformación, de utilización, de consumo, de limpieza o de mantenimiento generados por la actividad industrial, excluidas las emisiones a la atmósfera reguladas en la Ley 34 del 15 de noviembre de 2007.  Residuo peligroso: Residuo que presenta una o varias de las características peligrosas enumeradas en el anexo III, y aquél que pueda aprobar el Gobierno de conformidad con lo establecido en la normativa europea o en los convenios internacionales de los que España sea parte, así como los recipientes y envases que los hayan contenido (Emgrisa, 2014).').m-auto(data-aos="fade-right")
        figure.movil.mt-0
          .row.justify-content-center.d-lg-none.d-md-none        
            img(src="@/assets/curso/temas/3/2.svg" data-aos="zoom-in-up")  

    p.my-3 Donde:

    .row.align-items-center.my-3.col-lg-12.m-0(style="border-radius: 30px;")     
    .row.justify-content-center.my-5
      .col-lg-8.my-5
        LineaTiempoD.color-primario
          p(numero="✔" titulo="IRAi")  Es el nivel de riesgo acumulado de un establecimiento, el cual nos indica para determinar si a un establecimiento se le debe hacer o no la inspección sanitaria. 

          p(numero="✔" titulo="VTi") Es el puntaje de riesgo acumulado de un establecimiento, derivado de las variables transversales o comunes de todas las direcciones misionales del Instituto (áreas funcionales): alimentos, medicamentos, dispositivos médicos y cosméticos. Por ejemplo: cumplimiento de estándares sanitarios, medidas sanitarias y fecha de la última visita, entre otras.

          p(numero="✔" titulo="VPI")  Es el puntaje de riesgo acumulado de un establecimiento, derivado de las variables propias de cada dirección (particulares por tipo de producto). Por ejemplo: enfermedades transmitidas por alimentos (ETA, alimentos), infecciones transmitidas por transfusiones (ITT, bancos de sangre), reacciones adversas por medicamentos (RAM, medicamentos), entre otras. 

          p(numero="✔" titulo="El riesgo SOA")  Se refiere al puntaje obtenido después de calificar los riesgos de cada uno de los productos de un establecimiento, según su severidad, ocurrencia de falla (ocurrencia) y afectación (población expuesta).

          p(numero="✔" titulo="β1, β2 y β3")  Son los ponderados o pesos de cada componente, su suma debe ser igual a uno (Aroca y Guzmán, 2017).

      .col-8.col-lg-4
        figure
          img(src='@/assets/curso/temas/3/3.png').m-auto(data-aos="fade-right") 
     
      p.my-5 Estos valores son determinados por una métrica que ya está estandarizada, la cual va con un puntaje de 1 a 5, donde 5 es el máximo valor en cuanto a riesgo, y depende de cada autoridad sanitaria asignar los valores teniendo en cuenta diferentes variables como el tipo de producto, datos estadísticos e historial del establecimiento.
     
      .row
        .col-auto.my-5.mb-sm-0        
          ol.lista-ol--cuadro(style="border-radius: 20px; background-color: #C1E29A") 
            li 
              .lista-ol--cuadro__vineta(style="border-radius: 10px; background-color: #C1E29A") 
                .col  
                img(src="@/assets/curso/temas/2/23.svg" style="max-width: 65%; display: block; margin-top: -12px; " ) 
              b.mx-5 Formatos de inspección, vigilancia y control 
      
      p.my-5 El siguiente formato, a manera de ejemplo, se explica cómo es el proceso de calificación de una industria láctea con el modelo IVC-SOA, donde el establecimiento que tenga mayor riesgo sanitario será el que tenga mayor calificación de riesgo: 

      .tarjeta.mb-5.p-3.no(:style="{'background-image': `url(${require('@/assets/curso/temas/3/14.svg')})`}")
        .row.justify-content-around.align-items-center
          .col-auto
            img(src="@/assets/template/icono-pdf.svg").img65
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h4.mb-1 Anexo formato industria lactea
                p.mb-0.text-small Proceso de calificación de una industria láctea con el modelo IVC-SOA
              .col-sm-auto
                a.boton.color-acento-botones(href="downloads/Anexo_1_formato_industria_lactea.pdf" target="_blank")
                  span Descargar
                  i.fas.fa-file-download

      .cont_3_2.pt-3(style="position:relative;")
        .titulo-segundo.color-acento-contenido(style="position:relative")
          h2#t_3_2  3.2 Características de validación de documentos             
      
      p.my-5 Existen varias características en los diferentes formatos, ya que cada entidad de salud puede definir cada acta general de visita para control sanitario, pero existen ciertas variables que tienen en común todos los formatos, las cuales son:

      AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--gris")
        .row(titulo="1. Membrete con los logos de la entidad")
          .col-md-6.mb-4.mb-md-0
            p En este irán datos como la ciudad, fecha, número de acta y a qué tipo de establecimiento se le hará la visita (comercial, espectáculo público o de diversión pública).

          .col-md-6
            figure
              img(src='@/assets/curso/temas/3/4.svg', alt='Texto que describa la imagen')

        .row(titulo="2. Identificación del establecimiento")
          
          .col-md-6.mb-4.mb-md-0
            p Razón social, NIT, dirección, nombre comercial, barrio, nombre del propietario, documento de identificación, entre otros datos.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/3/5.svg', alt='Texto que describa la imagen')
        .row(titulo="3. Concepto sanitario de la última visita")
          .col-md-6.mb-4.mb-md-0
            p De acuerdo con lo establecido en la Resolución 2674 de 2013, el concepto sanitario es “el concepto emitido por la autoridad sanitaria una vez realizada la inspección, vigilancia y control al establecimiento donde se fabriquen, procesen, preparen, envasen, almacenen transporten, distribuyan, comercialicen, importen o exporten alimentos o sus materias primas. Este concepto puede ser favorable o desfavorable, dependiendo de la situación encontrada”.  Teniendo el concepto sanitario, se cumple el  requerimiento sobre la naturaleza de lo que se realiza en el negocio, como por ejemplo son preparación de alimentos para consumo humano.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/3/6.svg', alt='Texto que describa la imagen')

        .row(titulo="4. Motivo de nueva visita")
          
          .col-md-6.mb-4.mb-md-0
            p Esto puede ser por solicitud propia del propietario, programación, solicitud oficial, evento de interés público, etc. 

          .col-md-6
            figure
              img(src='@/assets/curso/temas/3/7.svg', alt='Texto que describa la imagen')  

        .row(titulo="5. Aspectos a evaluar")
          .col-md-6.mb-4.mb-md-0
            p Aspectos a evaluar:  condiciones locativas. 

          .col-md-6
            figure
              img(src='@/assets/curso/temas/3/8.svg', alt='Texto que describa la imagen')

        .row(titulo="6. Criterios que miden el puntaje")
          
          .col-md-6.mb-4.mb-md-0
            p Criterios: aspecto de seguridad como el abastecimiento del agua. 

          .col-md-6
            figure
              img(src='@/assets/curso/temas/3/9.svg', alt='Texto que describa la imagen')

        .row(titulo="7. Manejo de residuos sólidos y plagas")
          .col-md-6.mb-4.mb-md-0
            p Definir el plan de saneamiento básico, dentro del cual se presenta el programa de desechos sólidos y de control de plagas con objetivos, alcance y definiciones. 

          .col-md-6
            figure
              img(src='@/assets/curso/temas/3/10.svg', alt='Texto que describa la imagen')

        .row(titulo="8. Porcentaje de cumplimiento")
          
          .col-md-6.mb-4.mb-md-0
            p El porcentaje implica un puntaje asociado que valora todos los conceptos y se traduce en el concepto “favorable” o “desfavorable”.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/3/11.svg', alt='Texto que describa la imagen')     

        .row(titulo="9. Firma de los funcionarios que realizan la visita")
          
          .col-md-6.mb-4.mb-md-0
            p La validación debe contener las firmas de los funcionarios que realizan la visita y de las personas por parte del establecimiento para que tenga validez.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/3/12.svg', alt='Texto que describa la imagen')    

    .row.mb-5
      .col-auto.my-5.mb-sm-0        
        ol.lista-ol--cuadro(style="border-radius: 20px; background-color: #C1E29A") 
          li 
            .lista-ol--cuadro__vineta(style="border-radius: 10px; background-color: #C1E29A") 
              .col  
              img(src="@/assets/curso/temas/2/23.svg" style="max-width: 65%; display: block; margin-top: -12px; " ) 
            b.mx-5 Listas de verificación y manuales de procedimiento 

    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-lg-12          
        .row 
          .bloque-texto-g.color-primario.p-4
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/temas/3/15.png')})`}"
            )
            .bloque-texto-g__texto.p-4.my-3
              p.pt-1.pb-3 En primera medida es importante conocer sobre el manual de procedimientos, el cual ayuda a cumplir los estándares por medio de los formatos puestos en cada visita a los establecimientos, las principales ventajas de estos procedimientos son el ahorro de tiempo en cada visita, ya que teniendo una lista donde se verifican los puntos, el funcionario que realiza la visita se enfocará solo en estos. <br> <br>  

              p.pt-1.pb-3 Por otro lado, se tiene a favor el manejo de control interno, garantizando la disminución de las irregularidades y evitar posibles fallas, de igual manera, delimita responsabilidades, ya que los documentos al estar estandarizados y si llegase a ocurrir un problema, existen evidencias de la persona a cargo del proceso. <br> <br>

              p.pt-1.pb-3 Por último, está la imagen de las diferentes entidades, ya que genera confianza y mayor reputación, lo anterior se realiza como lo establece la norma.

    p.pb-3 Cada manual de procedimientos debe tener unos elementos básicos, donde se encuentran el título, marco normativo, objetivo del documento, los responsables o quien lo revisa, breve descripción de los procesos, diagrama de flujo y, por último, un glosario el cual ayuda a entender un poco más este manual.
    

                


</template>

<script>
export default {
  name: 'Tema3',
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
