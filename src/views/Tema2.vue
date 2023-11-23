<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Trazabilidad de manejo de residuos sólidos
    p.my-5   En el mundo se generan más de dos mil millones de toneladas de desechos sólidos al año, de los cuales alrededor del 30 % no se clasificaron, presentando riesgo al medio ambiente (Banco Mundial, 2018). 

    .row.align-items-center.my-3.col-lg-12.m-0            
      .col.p-4(style="background:#E7FFD1")
        p.mb-2.py-1(style="overflow-x: hidden !important") Cabe resaltar que en los países de Latinoamérica y el Caribe, se diferencian en dos tipos de zonas, que son las áreas rurales y las áreas urbanas, donde en su mayoría las urbanas tienen cobertura de recolección con disposición final en su mayoría en los llamados rellenos sanitarios que son puestos para este fin, pero en la parte rural aún es deficiente este servicio, ya que los mismos pobladores son los que disponen de estos residuos, bien sea quemándolos a cielo abierto, enterrándolos o arrojándolos a fuentes hídricas, estas prácticas son peligrosas para la salud.
      .col-auto
        figure
          img(src='@/assets/curso/temas/2/1.svg').m-auto(data-aos="fade-right")

    .cont_2_1.mt-5(style="position:relative;")
      .titulo-segundo.color-acento-contenido
        h2#t_2_1 2.1  Conceptos   
      p El saneamiento debe incluir como mínimo los siguientes conceptos:

    figure.desktop.d-none.d-sm-block.d-sm-none.d-lg-block.d-none.d-md-block
      ImagenInfografica.color-acento-botones
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/temas/2/2.svg', alt='Texto que describa la imagen')

        .tarjeta.color-primario.p-3(x="6.5%" y="25%" numero="+")
          .h5.mb-2 Residuo sólido
          p Es cualquier objeto, material, sustancia o elemento principalmente sólido resultante del consumo o uso de un bien en actividades domésticas, industriales, comerciales, institucionales o de servicios, que el generador presenta para su recolección por parte de la persona prestadora del servicio público de aseo.
        .tarjeta.color-primario.p-3(x="5%" y="71.5%" numero="+")
          .h5.mb-2 Botadero
          p Es el sitio de disposición a cielo abierto de los residuos sólidos. Es un sitio de acumulación de residuos sólidos que no cumple con las disposiciones vigentes y crea riesgos para la salud humana y el ambiente en general.
        .tarjeta.color-primario.p-3(x="61.5%" y="88%" numero="+")
          .h5.mb-2 Biodegradación
          p Es el sitio de disposición a cielo abierto de los residuos sólidos. Es un sitio de acumulación de residuos sólidos que no cumple con las disposiciones vigentes y crea riesgos para la salud humana y el ambiente en general.

        .tarjeta.color-primario.p-3(x="77%" y="52%" numero="+")
          .h5.mb-2 Aprovechamiento
          p Es la actividad complementaria del servicio público de aseo que comprende la recolección de residuos aprovechables separados en la fuente por los usuarios, el transporte selectivo hasta la estación de clasificación y aprovechamiento o hasta la planta de aprovechamiento, así como su clasificación y pesaje.
        
        .tarjeta.color-primario.p-3(x="64.5%" y="13.5%" numero="+")
          .h5.mb-2 Saneamiento básico
          p Actividades propias del conjunto de los servicios domiciliarios de alcantarillado y aseo.

    figure.movil.mt-0
      .row.justify-content-center.d-lg-none.d-md-none        
        img(src="@/assets/curso/temas/2/3.svg" data-aos="zoom-in-up") 

    Separador.mt-5        

    .cont_2_2.pt-3(style="position:relative;")
      .titulo-segundo.color-acento-contenido(style="position:relative")
        h2#t_2_2 2.2 Características y tipos

    p.my-5 Los desechos se deben eliminar una vez sean usados con el fin de evitar problemas sanitarios o medioambientales, pero de igual manera es importante reutilizar todo aquello que se pueda; se está en un contexto en que la producción de residuos está en alza y allí es donde se debe generar una conciencia general hacia el reciclaje; es decir, son medidas de prevención, antes de que este residuo sea directamente eliminado. El siguiente esquema es una muestra del paso a paso por el que un residuo debería pasar:
    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-lg-10 
        .titulo-sexto.mb-0.color-acento-contenido.mb-4
          p.mb-0 #[b Figura 5.] 
            i  Paso a paso de los residuos    
        .row 
          figure.desktop.d-none.d-sm-block.d-sm-none.d-lg-block.d-none.d-md-block
            img.mb-1(src='@/assets/curso/temas/2/4.svg' alt='En la figura 5 se muestra el paso a paso que deben cumplir los residuos.').m-auto(data-aos="fade-right")
          figure.movil.mt-0
            .row.justify-content-center.d-lg-none.d-md-none        
              img(src="@/assets/curso/temas/2/5.svg" data-aos="zoom-in-up")  

    p.my-5 Es así como dentro de la gestión a nivel mundial de residuos es de vital importancia clasificarlos para generar un aprovechamiento óptimo de estos, así:

               

    //- .row.justify-content-center.mb-5
      .col-lg-9.position-relative
        h3.mb-4.text-center.txt--purpura Elementos determinantes para el análisis - CAC
        .avatar
          figure
            img(src="@/assets/curso/temas/2/10.svg", alt="alt").img250
        .crd.crd--avatarHorizontal.crd--first.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/2/6.svg", alt="alt").img100
            .col
              h5 Calidad de la información
              p Es importante tener en cuenta las variables, la ponderación de estas refleja la calidad de la información, la cual le permitirá obtener información concreta, clara y medible. Es necesario resaltar las características determinantes desde enfoques cualitativos y cuantitativos del dato obtenido.
        .crd.crd--avatarHorizontal.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/2/7.svg", alt="alt").img100
            .col
              h5 Aplicación de técnicas
              p Desarrolle técnicas que le permitan tener un panorama completo de la información que se esté analizando, integrando las variables obtenidas en la medición y contrastando detalladamente los datos.
        .crd.crd--avatarHorizontal.crd--last.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/2/8.svg", alt="alt").img100
            .col
              h5 Comunicación correcta de los resultados
              p En los análisis de resultados, el determinante es saber mostrar la información, tenga en cuenta la objetividad, la claridad, la transparencia y la organización de la información.
        .crd.crd--avatarHorizontal.crd--last.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/2/9.svg", alt="alt").img100
            .col
              h5 Comunicación correcta de los resultados
              p En los análisis de resultados, el determinante es saber mostrar la información, tenga en cuenta la objetividad, la claridad, la transparencia y la organización de la información.
  

    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-lg-10 
        figure.desktop.d-none.d-sm-block.d-sm-none.d-lg-block.d-none.d-md-block
          img.mb-1(src='@/assets/curso/temas/2/11.svg' alt='Residuos domésticos: Residuos generados en los hogares como consecuencia de las actividades domésticas. Se consideran también domésticos aquellos residuos similares generados en servicios e industrias. Residuos comerciales: Residuos generados por la actividad propia del comercio, al por mayor y al por menor, de los servicios de restauración y bares, de las oficinas y de los mercados, así como del resto del sector servicios. Residuos industriales: Residuos resultantes de los procesos de fabricación, de transformación, de utilización, de consumo, de limpieza o de mantenimiento generados por la actividad industrial, excluidas las emisiones a la atmósfera reguladas en la Ley 34 del 15 de noviembre de 2007.  Residuo peligroso: Residuo que presenta una o varias de las características peligrosas enumeradas en el anexo III, y aquél que pueda aprobar el Gobierno de conformidad con lo establecido en la normativa europea o en los convenios internacionales de los que España sea parte, así como los recipientes y envases que los hayan contenido (Emgrisa, 2014).').m-auto(data-aos="fade-right")
        figure.movil.mt-0
          .row.justify-content-center.d-lg-none.d-md-none        
            img(src="@/assets/curso/temas/2/11.svg" data-aos="zoom-in-up")        
    
    Separador.mt-5        

    .cont_2_3.pt-3(style="position:relative;")
      .titulo-segundo.color-acento-contenido(style="position:relative")
        h2#t_2_3 2.3 Métodos de clasificación, disposición y aprovechamiento

    p La clasificación de estos residuos sólidos varía depende de la terminología que se aplique; es decir, que no solo ocurre en las ciudades, sino también en la parte rural e incluso donde el ser humano tenga algún tipo de interacción con el medio ambiente. 
    p.my-5 Existen tres criterios para realizar la clasificación de los residuos sólidos:

    .row.justify-content-center 
      .col-sm.mb-5.mb-sm-0
        ol.lista-ol--cuadro(style="border-radius: 20px; background-color: #D5FFF5") 
          li 
            .lista-ol--cuadro__vineta(style="border-radius: 10px;") 
              span a.
            b.mx-5 Peligrosidad de los residuos
      .col-sm.mb-5.mb-sm-0
        ol.lista-ol--cuadro(style="border-radius: 20px; background-color: #D5FFF5") 
          li 
            .lista-ol--cuadro__vineta(style="border-radius: 10px;") 
              span b.
            b.mx-5 Origen de los residuos 
      .col-sm.mb-5.mb-sm-0
        ol.lista-ol--cuadro(style="border-radius: 20px; background-color: #D5FFF5") 
          li 
            .lista-ol--cuadro__vineta(style="border-radius: 10px;")  
              span c.
            b.mx-5.p-4 Composición

      p.my-5 Es importante destacar que la clasificación de los residuos sólidos debe generar un grado de efectividad amplio, según las siguientes consideraciones; iniciando según su peligrosidad:   
   
      .tarjeta--container.row
        .col-md.tarjeta.p-5(style="background-color:#C1E29A")
          .row.justify-content-center.mb-4
            .col-6
              figure
                img(src='@/assets/curso/temas/2/12.svg')

          h2.text-center Residuos inertes
          p Estos residuos son los que no tienen transformaciones físicas, químicas o biológicas, de igual manera, no reaccionan a ninguna transformación, no son biodegradables y no afectan en gran mayoría a la contaminación del medio ambiente, un claro ejemplo de estos residuos son los de la construcción.
        .col-md.tarjeta.p-5(style="background-color:#D5FFF5")
          .row.justify-content-center.mb-4
            .col-6
              figure
                img(src='@/assets/curso/temas/2/13.svg')

          h2.text-center Residuos no peligrosos
          p Se pueden definir como aquellos que no son ni inertes ni peligrosos. Así, por ejemplo, son residuos no peligrosos el plástico, el papel/cartón, o el metal, siempre que no estén contaminados por alguna sustancia peligrosa.
        .col-md.tarjeta.p-5(style="background-color:#F1D8FF")
          .row.justify-content-center.mb-4
            .col-6
              figure
                img(src='@/assets/curso/temas/2/14.svg')
          h2.text-center Residuos peligrosos
          p Estos son un riesgo para el medio ambiente y los seres vivos, podemos encontrar aquí envases con contenido peligroso como los de aceites, disolventes, etc.
    
    p.my-5  De la misma manera, se pueden clasificar según su origen:

    
    SlyderF.cardss(columnas="col-lg-6 col-xl-4")
      .tarjeta.color-secundario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/2/15.svg' alt='AvatarTop')
        h2.text-center Residuos domésticos
        p.text-center Son los residuos que se producen en el hogar, como resultado del uso diario que se les da en el mismo.

      .tarjeta.color-secundario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/2/16.svg' alt='AvatarTop')
        h2.text-center Residuos industriales
        p.text-center Estos residuos son los que se dan de los procesos de transformación, fabricación, etc., de las diferentes materias primas; de igual manera, del consumo o limpieza.

      .tarjeta.color-secundario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/2/17.svg' alt='AvatarTop')
        h2.text-center Residuos de construcción y demolición
        p.text-center Son aquellos residuos que se generan de una obra de construcción o demolición, todo esto según la norma.

      .tarjeta.color-secundario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/2/18.svg' alt='AvatarTop')
        h2.text-center Residuos agrícolas
        p.text-center Todos los procedentes de la agricultura, pesca, ganadería o explotaciones forestales las cuales contemplan la industria alimenticia.

      .tarjeta.color-secundario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/2/19.svg' alt='AvatarTop')
        h2.text-center Residuos hospitalarios
        p.text-center En relación con la prestación de servicio de salud, se derivan distintos materiales, sustancias, líquidos, etc., los cuales son el resultado de esta actividad que se ejerce.

      .tarjeta.color-secundario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/2/20.svg' alt='AvatarTop')
        h2.text-center Residuos electrónicos
        p.text-center Una vez finalice la vida útil de cada artículo electrónico, este ya es considerado como residuo electrónico. 

      
      
    p.my-5  Finalmente, se pueden clasificar también según su composición:

    figure.desktop.d-none.d-sm-block.d-sm-none.d-lg-block.d-none.d-md-block
      ImagenInfografica.color-acento-botones
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/temas/2/21.svg',)

        .tarjeta.color-primario.p-3(x="15.5%" y="75%" numero="+")
          .h5.mb-2 Residuo inorgánico
          p Residuo orgánico:  este tipo de desecho es de origen biológico, es decir, que estuvo vivo o fue parte de un ser vivo, donde se encuentra la carne, frutas, verduras, lácteos, etc.
        .tarjeta.color-primario.p-3(x="50%" y="75%" numero="+")
          .h5.mb-2 Mezcla de residuo
          p Residuo inorgánico: a diferencia del orgánico es todo lo contrario, es decir, que no es de origen biológico, puede ser de procedencia industrial o algún proceso artificial, aquí están las telas, el plástico, envases, etc.
        .tarjeta.color-primario.p-3(x="84.5%" y="75%" numero="+")
          .h5.mb-2 Residuo orgánico
          p Mezcla de residuo: es toda la combinación de materias orgánicas e inorgánicas.

    figure.movil.my-5
      .row.justify-content-center.d-lg-none.d-md-none        
        img(src="@/assets/curso/temas/2/3.svg" data-aos="zoom-in-up") 

    Separador.mt-5        


    .cont_2_4.pt-3(style="position:relative;")
      .titulo-segundo.color-acento-contenido(style="position:relative")
        h2#t_2_4 2.4 Normatividad ambiental   

    p.my-5 Para iniciar hablando sobre la normatividad ambiental, se debe iniciar por la Constitución Política de Colombia de 1991 que implementó la consideración, manejo y conservación de los recursos naturales y el medio ambiente, por medio de varios elementos, a saber:

    .row
      .col-auto.mb-5.mb-sm-0        
        ol.lista-ol--cuadro(style="border-radius: 20px; background-color: #C1E29A") 
          li 
            .lista-ol--cuadro__vineta(style="border-radius: 10px; background-color: #C1E29A") 
              .col  
               img(src="@/assets/curso/temas/2/23.svg" style="max-width: 65%; display: block; margin-top: -12px; " ) 
            b.mx-5 Derecho a un ambiente sano

    p.my-3 Las alertas son un aviso que se mencionan con anterioridad por la manifestación de algún acontecimiento que ponga en riesgo la vida de alguien, para este caso, el sistema de alerta temprana ambiental se da como consecuencia de la degradación y el manejo inapropiado de los recursos naturales por causa de actividades humanas invasivas, esta alerta temprana y de respuesta es un mecanismo de integración que recopila datos del ambiente y de la población para dirigir la respuesta de salud pública y, busca reducir el tiempo entre la emisión de alerta la participación en la respuesta, previendo así cualquier tipo de riesgo. 
    p.my-3 La Constitución Nacional de Colombia de 1991 consagra que: 

    .row.align-items-center.my-5.col-lg-10.m-auto  
      .cajon.color-primario.p-4.mt-0.col-lg-12.m-auto.pb-1(style="background-color:#E7FFD1;")
        p.mb-0.py-3(data-aos="fade-up") “Todas las personas tienen derecho a gozar de un ambiente sano. La Ley garantizará la participación de la comunidad en las decisiones que puedan afectar. Es deber del Estado proteger la diversidad e integridad del ambiente, conservar las áreas de especial importancia ecológica y fomentar la educación para el logro de estos fines (Art. 79)”.
    
    p.my-3 Esta norma constitucional puede interpretarse de manera solidaria con el principio fundamental del derecho a la vida, ya que este solo se podría garantizar bajo condiciones en las cuales la vida pueda disfrutarse con calidad (Unidad de Planeación Minero-Energética, 2017).
    
    .row
      .col-auto.my-5.mb-sm-0        
        ol.lista-ol--cuadro(style="border-radius: 20px; background-color: #C1E29A") 
          li 
            .lista-ol--cuadro__vineta(style="border-radius: 10px; background-color: #C1E29A") 
              .col  
               img(src="@/assets/curso/temas/2/23.svg" style="max-width: 65%; display: block; margin-top: -12px; " ) 
            b.mx-5 El medio ambiente como patrimonio común

    p.my-3 La Constitución Nacional de Colombia de 1991 incorpora este principio al imponer al Estado y a las personas la obligación de proteger las riquezas culturales y naturales (Art. 8), así como el deber de las personas y del ciudadano de proteger los recursos naturales y de velar por la conservación del ambiente (Art. 95). 

    .row.align-items-center.my-5.col-lg-10.m-auto  
      .cajon.color-primario.p-4.mt-0.col-lg-12.m-auto.pb-1(style="background-color:#D5FFF5;")
        p.mb-0.py-3(data-aos="fade-up") En desarrollo de este principio, en el Art. 58 consagra que “la propiedad es una función social que implica obligaciones y, como tal, le es inherente una función ecológica”; continúa su desarrollo al determinar en el Art. 63 que “Los bienes de uso público, los parques naturales, las tierras comunales de grupos étnicos, las tierras de resguardo, el patrimonio arqueológico de la Nación y los demás bienes que determine la Ley, son inalienables, imprescriptibles e inembargables” (Unidad de Planeación Minero-Energética, 2017).
    
    .row
      .col-auto.my-5.mb-sm-0        
        ol.lista-ol--cuadro(style="border-radius: 20px; background-color: #C1E29A") 
          li 
            .lista-ol--cuadro__vineta(style="border-radius: 10px; background-color: #C1E29A") 
              .col  
               img(src="@/assets/curso/temas/2/23.svg" style="max-width: 65%; display: block; margin-top: -12px; " ) 
            b.mx-5 Desarrollo sostenible

    p.my-3 Definido como el desarrollo que conduce al crecimiento económico, a la elevación de la calidad de vida y al bienestar social, sin agotar la base de los recursos naturales renovables en que se sustenta, ni deteriorar el medio ambiente o el derecho de las generaciones futuras a utilizarlo para la satisfacción de sus propias necesidades, la Constitución Nacional de Colombia de 1991 en desarrollo de este principio, consagra en el Art. 80 que: 

    .row.align-items-center.my-5.col-lg-10.m-auto  
      .cajon.color-primario.p-4.mt-0.col-lg-12.m-auto.pb-1(style="background-color:#E7FFD1;")
        p.mb-0.py-3(data-aos="fade-up") “El Estado planificará el manejo y aprovechamiento de los recursos naturales para garantizar su desarrollo sostenible, su conservación o sustitución. Además, deberá prevenir y controlar los factores de deterioro ambiental, imponer las sanciones legales y exigir la reparación de los daños causados. Así mismo, cooperará con otras naciones en la protección de los ecosistemas situados en zonas fronterizas”. 
    
    p.my-3 Lo anterior implica asegurar que la satisfacción de las necesidades actuales se realice de una manera tal que no comprometa la capacidad y el derecho de las futuras generaciones para satisfacer las propias (Unidad de Planeación Minero-Energética, 2017).

    .row.align-items-center.my-3.col-lg-12.m-0      
      .col-auto
        figure
          img(src='@/assets/curso/temas/2/24.svg').m-auto(data-aos="fade-right")      
      .col.p-4(style="background:#E8FEFF")
        p.mb-2.py-1(style="overflow-x: hidden !important") Gracias a estos tres principios fundamentales, se logra iniciar un paquete de normas y leyes, las cuales actúan en pro a la condición sanitaria del país, permitiendo no solo prever y mitigar los diferentes impactos ambientales que se derivan de distintos establecimientos o actividades.

        p.mb-2.py-1(style="overflow-x: hidden !important") Con lo anterior existe una gran cantidad de leyes, decretos y resoluciones que hablan sobre la disposición, clasificación, manejo, aprovechamiento, etc., de los residuos sólidos en el país, donde se plasmará las principales y más importantes:

    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-lg-10  
        .row.align-items-center.my-5.col-lg-12.m-auto  
          .col-sm-12.col-lg-12
            .titulo-sexto.mb-0.color-acento-contenido.mb-1
              p.mb-0 #[b Tabla 2.] 
                i  Normativa para la disposición, clasificación y aprovechamiento de los residuos
        .tabla-b.color-acento-contenido( alt='En la tabla 2 se muestran algunas normas y su descripción para el manejo de los residuos.')
          table
            thead
              tr
              th(style="background-color:#FFAE7E") Norma
              th(style="background-color:#FFAE7E") Descripción
             
            tbody    
            tr
              td Constitución Política de 1991
              td Norma Marco; de los derechos, deberes, constitución del estado de derecho y demás normas para los colombianos.
            tr
              td Ley 99 de 1993   
              td Por la cual se crea el Ministerio de Ambiente y Sistema Nacional Ambiental SINA.
            tr
              td Ley 142 de 1994
              td Ley de los Servicios Públicos domiciliarios.
            tr
              td Decreto 596 de 2016
              td La cual trata el incrementar las tasas de aprovechamiento de los residuos sólidos en el país.
            tr
              td Decreto Ley 2811 de 1974
              td Por el cual se dicta el Código Nacional de Recursos Naturales Renovables y de Protección al Medio Ambiente.
            tr
              td Decreto 1077 de 2015
              td Por medio del cual se expide el Decreto Único Reglamentario del Sector Vivienda, Ciudad y Territorio.
            tr
              td Resolución CRA 720 de 2015
              td La cual se incluyen aspectos de operación eficiente de las diferentes actividades del servicio público de aseo y se contemplan aspectos ambientalmente razonables. 
            tr
              td Resolución 330 de 2017
              td Por el cual se adopta el reglamento técnico del sector de agua potable y saneamiento básico.
            tr
              td Resolución 472 de 2017
              td Por la cual se reglamenta la Gestión Integral de los Residuos Generados en las actividades de Construcción y Demolición–RCD.
            tr
              td CONPES 3874 de 2016
              td Política Nacional para la Gestión integral de Residuos Sólidos.
           


</template>

<script>
export default {
  name: 'Tema2',
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
