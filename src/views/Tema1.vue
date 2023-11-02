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
