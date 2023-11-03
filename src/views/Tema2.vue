<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Titulo de primer nivel
    p.my-5   En el mundo se generan más de dos mil millones de toneladas de desechos sólidos al año, de los cuales alrededor del 30% no se clasificaron, presentando riesgo al medio ambiente (Banco Mundial, 2018). 

    .row.align-items-center.my-3.col-lg-12.m-0            
      .col.p-4(style="background:#E7FFD1")
        p.mb-2.py-1(style="overflow-x: hidden !important") Cabe resaltar que en los países de Latinoamérica y el Caribe, se diferencian en dos tipos de zonas, que son las áreas rurales y las áreas urbanas, donde en su mayoría las urbanas tienen cobertura de recolección con disposición final en su mayoría en los llamados rellenos sanitarios que son puestos para este fin, pero en la parte rural aún es deficiente este servicio, ya que los mismos pobladores son los que disponen de estos residuos, bien sea quemándolos a cielo abierto, enterrándolos o arrojándolos a fuentes hídricas, estas prácticas son peligrosas para la salud.
      .col-auto
        figure
          img(src='@/assets/curso/temas/2/1.svg').m-auto(data-aos="fade-right")

    .cont_2_1.mt-5(style="position:relative;")
      .titulo-segundo.color-acento-contenido(style="position:relative")
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
          p Actividades propias del conjunto de los servicios domiciliarios de alcantarillado y aseo.
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
                img(src='@/assets/componentes/ej-05.svg', alt='Texto que describa la imagen')

          h2.text-center Residuos inertes
          p Estos residuos son los que no tienen transformaciones físicas, químicas o biológicas, de igual manera, no reaccionan a ninguna transformación, no son biodegradables y no afectan en gran mayoría a la contaminación del medio ambiente, un claro ejemplo de estos residuos son los de la construcción.
        .col-md.tarjeta.p-5(style="background-color:#D5FFF5")
          .row.justify-content-center.mb-4
            .col-6
              figure
                img(src='@/assets/componentes/ej-05.svg', alt='Texto que describa la imagen')

          h2.text-center Residuos no peligrosos
          p Se pueden definir como aquellos que no son ni inertes ni peligrosos. Así, por ejemplo, son residuos no peligrosos el plástico, el papel/cartón, o el metal, siempre que no estén contaminados por alguna sustancia peligrosa.
        .col-md.tarjeta.p-5(style="background-color:#F1D8FF")
          .row.justify-content-center.mb-4
            .col-6
              figure
                img(src='@/assets/componentes/ej-05.svg', alt='Texto que describa la imagen')
          h2.text-center Residuos peligrosos
          p Estos son un riesgo para el medio ambiente y los seres vivos, podemos encontrar aquí envases con contenido peligroso como los de aceites, disolventes, etc.
    
    p.my-5  De la misma manera, se pueden clasificar según su origen:
   


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
