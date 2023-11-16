<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.align-items-center.my-3.col-lg-12.m-0        
      p.mb-2.py-1(style="overflow-x: hidden !important") Se verá a continuación, a través de este video, la introducción al componente sobre la caracterización de condiciones sanitarias de establecimientos y sus condiciones sanitarias:
        
    figure.mt-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com//embed/4dEg06Z2gIQ" title="Video Huella Hidrica" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    
      
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
