(function(e){function a(a){for(var o,i,c=a[0],s=a[1],d=a[2],l=0,u=[];l<c.length;l++)i=c[l],Object.prototype.hasOwnProperty.call(t,i)&&t[i]&&u.push(t[i][0]),t[i]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);m&&m(a);while(u.length)u.shift()();return r.push.apply(r,d||[]),n()}function n(){for(var e,a=0;a<r.length;a++){for(var n=r[a],o=!0,i=1;i<n.length;i++){var c=n[i];0!==t[c]&&(o=!1)}o&&(r.splice(a--,1),e=s(s.s=n[0]))}return e}var o={},i={app:0},t={app:0},r=[];function c(e){return s.p+"js/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3"}[e]||e)+"."+{actividad:"51b4883f","chunk-0206bfa0":"9d64e2cb","chunk-0c047e41":"c1b5f948","chunk-13a6037e":"b6cc52b1","chunk-18f95272":"c2a5eee4","chunk-25b302c8":"26cfb7b2","chunk-26fc7596":"286ada91","chunk-2c06842c":"44a60f75","chunk-2d0c5615":"ebc1981a","chunk-2d0e96ec":"7b8875b5","chunk-2d208d90":"9c6a4a0e","chunk-2d21d0e2":"320e0a0d","chunk-2d22c123":"474e9714","chunk-2d2747e2":"55b9a2a1","chunk-2e80bb9a":"818f9add","chunk-319206de":"2b0a71fd","chunk-32334cb6":"4e06baf7","chunk-36769079":"f509823e","chunk-3c57cd7b":"d8fd3cb3","chunk-4cdd78c0":"21552dad","chunk-4f2d402a":"f52de32d","chunk-515a8379":"ad4b0488","chunk-53ccb27e":"e4c9c4d9","chunk-55d286b8":"984d19df","chunk-59974754":"4b536167","chunk-60cbc06b":"17f2bb4a","chunk-659152b8":"4c724f06","chunk-6e1e538a":"94b77279","chunk-766a929b":"4fd76fb0","chunk-c796899c":"b404a9ce","chunk-e8a7823a":"9ff4a1e8","chunk-f2df7d2c":"d2fe56d5","chunk-fde47172":"6ef31f8b",comple:"98fa0dba",creditos:"39663769",glosario:"4f1cd0dc",intro:"fc3f47ec",referencias:"9b514e26",sintesis:"a725fbc6",tema1:"12706915",tema2:"5effceac",tema3:"3c5ba83d"}[e]+".js"}function s(a){if(o[a])return o[a].exports;var n=o[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var a=[],n={"chunk-0c047e41":1,"chunk-25b302c8":1,"chunk-26fc7596":1,"chunk-2d2747e2":1,"chunk-32334cb6":1,"chunk-3c57cd7b":1,"chunk-4f2d402a":1,"chunk-515a8379":1,"chunk-59974754":1,"chunk-60cbc06b":1,"chunk-6e1e538a":1,"chunk-766a929b":1,"chunk-f2df7d2c":1,comple:1,creditos:1,glosario:1,referencias:1};i[e]?a.push(i[e]):0!==i[e]&&n[e]&&a.push(i[e]=new Promise((function(a,n){for(var o="css/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3"}[e]||e)+"."+{actividad:"31d6cfe0","chunk-0206bfa0":"31d6cfe0","chunk-0c047e41":"3babef71","chunk-13a6037e":"31d6cfe0","chunk-18f95272":"31d6cfe0","chunk-25b302c8":"3babef71","chunk-26fc7596":"3babef71","chunk-2c06842c":"31d6cfe0","chunk-2d0c5615":"31d6cfe0","chunk-2d0e96ec":"31d6cfe0","chunk-2d208d90":"31d6cfe0","chunk-2d21d0e2":"31d6cfe0","chunk-2d22c123":"31d6cfe0","chunk-2d2747e2":"3babef71","chunk-2e80bb9a":"31d6cfe0","chunk-319206de":"31d6cfe0","chunk-32334cb6":"3babef71","chunk-36769079":"31d6cfe0","chunk-3c57cd7b":"3babef71","chunk-4cdd78c0":"31d6cfe0","chunk-4f2d402a":"3babef71","chunk-515a8379":"f9fcc02b","chunk-53ccb27e":"31d6cfe0","chunk-55d286b8":"31d6cfe0","chunk-59974754":"2075f776","chunk-60cbc06b":"09438581","chunk-659152b8":"31d6cfe0","chunk-6e1e538a":"3ba0a060","chunk-766a929b":"7de6b228","chunk-c796899c":"31d6cfe0","chunk-e8a7823a":"31d6cfe0","chunk-f2df7d2c":"3babef71","chunk-fde47172":"31d6cfe0",comple:"5cd90d9c",creditos:"393f7c6c",glosario:"8ec00926",intro:"31d6cfe0",referencias:"9d78c988",sintesis:"31d6cfe0",tema1:"31d6cfe0",tema2:"31d6cfe0",tema3:"31d6cfe0"}[e]+".css",t=s.p+o,r=document.getElementsByTagName("link"),c=0;c<r.length;c++){var d=r[c],l=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(l===o||l===t))return a()}var u=document.getElementsByTagName("style");for(c=0;c<u.length;c++){d=u[c],l=d.getAttribute("data-href");if(l===o||l===t)return a()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=a,m.onerror=function(a){var o=a&&a.target&&a.target.src||t,r=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=o,delete i[e],m.parentNode.removeChild(m),n(r)},m.href=t;var f=document.getElementsByTagName("head")[0];f.appendChild(m)})).then((function(){i[e]=0})));var o=t[e];if(0!==o)if(o)a.push(o[2]);else{var r=new Promise((function(a,n){o=t[e]=[a,n]}));a.push(o[2]=r);var d,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(e);var u=new Error;d=function(a){l.onerror=l.onload=null,clearTimeout(m);var n=t[e];if(0!==n){if(n){var o=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;u.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",u.name="ChunkLoadError",u.type=o,u.request=i,n[1](u)}t[e]=void 0}};var m=setTimeout((function(){d({type:"timeout",target:l})}),12e4);l.onerror=l.onload=d,document.head.appendChild(l)}return Promise.all(a)},s.m=e,s.c=o,s.d=function(e,a,n){s.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,a){if(1&a&&(e=s(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var o in e)s.d(n,o,function(a){return e[a]}.bind(null,o));return n},s.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(a,"a",a),a},s.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},s.p="",s.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],l=d.push.bind(d);d.push=a,d=d.slice();for(var u=0;u<d.length;u++)a(d[u]);var m=l;r.push([0,"chunk-vendors"]),n()})({0:function(e,a,n){e.exports=n("56d7")},"417a":function(e,a,n){e.exports=n.p+"img/fondo-banner-principal.b865e58c.svg"},"52e5":function(e,a,n){e.exports=n.p+"img/cc.0f3b944a.svg"},"56d7":function(e,a,n){"use strict";n.r(a);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("68f3"),i=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"app",attrs:{id:"app"}},[n("Header"),n("div",{staticClass:"contenedor-principal"},[n("AsideMenu"),n("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[n("router-view")],1)],1),n("BarraAvance"),n("Accesibilidad")],1)},t=[],r={name:"App",data:function(){return{menuOpen:!1}},computed:{menuState:function(){return this.$store.getters.isMenuOpen}},mounted:function(){this.$aos.init({offset:100})}},c=r,s=n("2877"),d=Object(s["a"])(c,i,t,!1,null,null,null),l=d.exports,u=(n("d3b7"),n("3ca3"),n("ddb0"),n("b0c0"),n("2b0e")),m=n("8c4f"),f=n("ae58"),p=n("7e58");u["a"].use(m["a"]);var b=new m["a"]({routes:[{path:"/",name:"inicio",component:f["a"]},{path:"/introduccion",name:"introduccion",component:function(){return n.e("intro").then(n.bind(null,"5167"))}},{path:"/curso",name:"curso",component:p["a"],redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:function(){return n.e("tema1").then(n.bind(null,"02c8"))}},{path:"tema2",name:"tema2",component:function(){return n.e("tema2").then(n.bind(null,"fd11"))}},{path:"tema3",name:"tema3",component:function(){return n.e("tema3").then(n.bind(null,"eb46"))}},{path:"tema4",name:"tema4",component:function(){return n.e("tema3").then(n.bind(null,"3eb5"))}}]},{path:"/actividad",name:"actividad",component:function(){return n.e("actividad").then(n.bind(null,"4298"))}},{path:"/glosario",name:"glosario",component:function(){return n.e("glosario").then(n.bind(null,"69a7"))}},{path:"/complementario",name:"complementario",component:function(){return n.e("comple").then(n.bind(null,"dd8c"))}},{path:"/referencias",name:"referencias",component:function(){return n.e("referencias").then(n.bind(null,"64ef"))}},{path:"/sintesis",name:"sintesis",component:function(){return n.e("sintesis").then(n.bind(null,"15a3"))}},{path:"/creditos",name:"creditos",component:function(){return n.e("creditos").then(n.bind(null,"2e81"))}}],scrollBehavior:function(e,a){if(e.hash){var n={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===a.name?n:new Promise((function(e){setTimeout((function(){e(n)}),500)}))}setTimeout((function(){window.scrollTo({left:0,top:0,behavior:"auto"})}),100)}}),h=b,g=n("1c2c"),v=(n("a3a0"),{global:{componenteFormativo:"Caracterización de condiciones sanitarias de establecimientos",descripcionCurso:"En este componente formativo se tratarán los temas respecto a las condiciones sanitarias en los establecimientos, plasmando así toda la información relevante para este proceso.",imagenBannerPrincipal:n("74b5"),fondoBannerPrincipal:n("417a"),imagenesDecorativasBanner:[{clases:["banner-principal-decorativo-1","d-none","d-lg-block"],imagen:n("71f8")},{clases:["banner-principal-decorativo-2"],imagen:n("8f04")}]},menuPrincipal:{menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"introduccion",icono:"fas fa-info-circle",titulo:"Introducción",desarrolloContenidos:!0},{nombreRuta:"tema1",numero:"1",titulo:"Inspección de condiciones sanitarias",desarrolloContenidos:!0,subMenu:[{numero:"1.1",titulo:"Conceptos y tipos",hash:"t_1_1"},{numero:"1.2",titulo:"Tipos de medidas sanitarias",hash:"t_1_2"},{numero:"1.3",titulo:"Protocolos y procedimientos",hash:"t_1_3"},{numero:"1.4",titulo:"Tipos de establecimientos para inspección",hash:"t_1_4"},{numero:"1.5",titulo:"Autoridades sanitarias",hash:"t_1_5"}]},{nombreRuta:"tema2",numero:"2",titulo:"Trazabilidad de manejo de residuos sólidos",desarrolloContenidos:!0,subMenu:[{numero:"2.1",titulo:"Conceptos",hash:"t_2_1"},{numero:"2.2",titulo:"Características y tipos",hash:"t_2_2"},{numero:"2.3",titulo:"Métodos de clasificación, disposición y aprovechamiento",hash:"t_2_3"},{numero:"2.4",titulo:"Normatividad ambiental",hash:"t_2_4"}]},{nombreRuta:"tema3",numero:"3",titulo:"Valoración y recolección de información de condiciones sanitarias",desarrolloContenidos:!0,subMenu:[{numero:"3.1",titulo:"Procedimiento de valoración de puntajes de riesgo",hash:"t_2_1"},{numero:"3.2",titulo:"Características de validación de documentos",hash:"t_3_2"}]},{nombreRuta:"tema4",numero:"4",titulo:"Reporte concepto sanitario",desarrolloContenidos:!0,subMenu:[{numero:"4.1",titulo:"Tipos de leyes de salud pública enfocadas en riesgo sanitario",hash:"t_4_1"},{numero:"4.2",titulo:"Características de protocolos de manejo del riesgo",hash:"t_4_2"},{numero:"4.3",titulo:"Tipos de procedimiento de intervención sanitaria",hash:"t_4_3"},{numero:"4.4",titulo:"Características de manuales y guías de inspección sanitaria",hash:"t_4_4"}]}],subMenu:[{icono:"fas fa-sitemap",titulo:"Síntesis",nombreRuta:"sintesis",desarrolloContenidos:!0},{nombreRuta:"actividad",icono:"far fa-question-circle",titulo:"Actividad didáctica",desarrolloContenidos:!0},{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{nombreRuta:"complementario",icono:"far fa-folder-open",titulo:"Material complementario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"fas fa-download",titulo:"Descargar material",download:"downloads/material.zip"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},complementario:[{tema:"Conceptos y tipos",referencia:"Cámara de Comercio de Bogotá. (2016). Concepto sanitario, más que un requisito, una herramienta para expandir su empresa.",tipo:"Documento",link:"https://bibliotecadigital.ccb.org.co/server/api/core/bitstreams/3ff12adf-a9e2-4143-aefc-927a4ea2d1e4/content"}],glosario:[{termino:"Autoridades sanitarias:",significado:"Entidades jurídicas de carácter público con atribuciones para ejercer funciones de rectoría, regulación, inspección, vigilancia y control de los sectores público y privado en salud y adoptar medidas de prevención y seguimiento que garanticen la protección de la salud pública."},{termino:"Desinfección:",significado:"Proceso físico o químico por medio del cual se logra eliminar los microorganismos de formas vegetativas en objetos inanimados, sin que se asegure la eliminación de esporas bacterianas. Por esto los objetos y herramientas a desinfectar, se les debe evaluar previamente el nivel de desinfección que requieren para lograr la destrucción de los microorganismos que contaminan los elementos."},{termino:"Inspección:",significado:"Consiste en la atribución que tienen la Superintendencia Nacional de Salud, el Invima, los servicios seccionales, distritales y locales de salud para verificar, solicitar, confirmar y analizar de manera ocasional, y en la forma, detalles y términos que las normas determinen, información sobre el estado higiénico-sanitario de las personas, establecimientos, edificaciones y, en general, todos los entes que de conformidad con la ley y sus reglamentos son susceptibles de ser inspeccionados por estas."},{termino:"Prevención:",significado:"Conjunto de acciones o medidas adoptadas o previstas, que evitan o disminuyen los accidentes de trabajo y las enfermedades profesionales, proporcionando una mejor calidad de vida a los miembros de una comunidad."}],referencias:[{referencia:"Aroca, A., y Guzmán, J. (2017). Modelo para la inspección, vigilancia y control sanitario con enfoque de riesgos en Colombia. Rev Panam Salud Pública, 21;41:e105.",link:"https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6660868/#:~:texto=En%20este%20caso%2C%20el%20%20puntaje,y%202%20a%20%20riesgo%20%20bajo"},{referencia:"Así vamos en salud. (2018). Autoridad sanitaria y movilización social en salud.",link:"https://www.asivamosensalud.org/salud-para-ciudadanos/autoridad-sanitaria-y-movilizacion-social-en-salud"},{referencia:"Banco Mundial. (2018). Los desechos: un análisis actualizado del futuro de la gestión de los desechos sólidos. Banco Mundial",link:"https://www.bancomundial.org/es/news/immersive-story/2018/09/20/what-a-waste-an-updated-look-into-the-future-of-solid-waste-management"},{referencia:"Dobbox. (2019). Inspecciones sanitarias: ¿qué se revisa? Dobbox.",link:"https://dobbox.com/inspecciones-sanitarias-que-se-revisa/"},{referencia:"Emgrisa. (2014). Tipos de residuos: clasificación. Emgrisa.",link:"https://www.emgrisa.es/publicaciones/tipos-de-residuos/?cn-reloaded=1"},{referencia:"Manipulación de Alimentos Colombia. (2011). Normatividad. Manipulación de Alimentos Colombia.",link:"https://www.manipulaciondealimentoscolombia.com/normatividad"},{referencia:"Ministerio de Salud y Protección Social. (2013). Resolución 2674 de 2013.",link:"https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/resolucion-2674-de-2013.pdf"},{referencia:"Ramírez, C., R. H. (2017). Resolución 816 de 2017. Unidad de Planeación Minero-Energética.",link:"https://www.leyex.info/documents/leyes/306bb7232b719c1f8adb32ce31ce5cb8.pdf"},{referencia:"Rivas, A., C. A. (2018). Piensa un minuto antes de actuar: gestión integral de residuos sólidos.",link:"https://www.mincit.gov.co/getattachment/c957c5b4-4f22-4a75-be4d-73e7b64e4736/17-10-2018-Uso-Eficiente-de-Recursos-Agua-y-Energi.aspx#:~:text=Los%20Residuos%20S%C3%B3lidos%2C%20constituyen%20aquellos,utilizaci%C3%B3n%20de%20bienes%20de%20consumo"},{referencia:"Saldarriaga, L. (2021). Manual de procedimientos: qué es y cómo hacer uno.",link:"http://www.saludcapital.gov.co/sitios/VigilanciaSaludPublica/Protocolos%20de%20Vigilancia%20en%20Salud%20Publica/Procesos%20Legales.pdf"},{referencia:"Unidad Nacional para la Gestión del Riesgo de Desastres. (2016). Plan Nacional de Gestión del Riesgo de Desastres. Unidad Nacional para la Gestión del Riesgo de Desastres.",link:"https://portal.gestiondelriesgo.gov.co/Documents/PNGRD/Plan-Nacional-de-Gestion-del-Riesgo-de-Desastres-2015-2025.pdf"}],creditos:[{titulo:"ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES",autores:[{nombre:"Claudia Patricia Aristizabal",cargo:"Responsable del equipo",centro:"Dirección General"},{nombre:"Norma Constanza Morales Cruz",cargo:"Responsable de línea de producción",centro:'"Regional Tolima - Centro de Comercio y Servicios"'}]},{titulo:"CONTENIDO INSTRUCCIONAL",autores:[{nombre:"Lizeth Daniela Reinoso Diaz",cargo:"Experto temático",centro:'"Regional Tolima - Centro Agropecuario La Granja"'},{nombre:"Gloria Alexandra Orejarena Barrios",cargo:"Diseñadora Instruccional",centro:'"Regional Distrito Capital - Centro de Gestión Industrial"'},{nombre:"Carolina Coca Salazar",cargo:"Asesora Metodológica",centro:'"Regional Distrito Capital - Centro de Diseño y Metrología"'},{nombre:"Rafael Neftalí Lizcano Reyes",cargo:"Responsable del equipo de desarrollo curricular",centro:'"Regional Santander - Centro Industrial de Diseño y la manufactura."'},{nombre:"Sandra Patricia Hoyos Sepúlveda",cargo:"Corrección de estilo",centro:'"Regional Distrito Capital - Centro de Diseño y Metrología."'},{nombre:"Jaslyth Juliana Eraso Casanova ",cargo:"Experta Temática",centro:'"Regional Putumayo - Centro Agroforestal y Acuícola Arapaima."'},{nombre:"Sergio Augusto Ardila Ortiz",cargo:"Diseñador instruccional ",centro:'"Regional Tolima - Centro de Comercio y Servicios"'},{nombre:"Viviana Esperanza Herrera Quiñonez",cargo:"Metodóloga",centro:'"Regional Tolima - Centro de Comercio y Servicios"'}]},{titulo:"DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES",autores:[{nombre:"Luis Fernando Botero Mendoza",cargo:"Diseñador de Contenidos Digitales",centro:'"Regional Tolima - Centro de Comercio y Servicios"'},{nombre:"Cristian Mauricio Otálora Clavijo",cargo:"Desarrollador Fullstack",centro:'"Regional Tolima - Centro de Comercio y Servicios"'},{nombre:"Gilberto Junior Rodríguez Rodríguez",cargo:"Storyboard de Ilustración",centro:'"Regional Tolima - Centro de Comercio y Servicios"'},{nombre:"Maria Alejandra Briceño Vera",cargo:"Producción",centro:'"Regional Tolima - Centro de Comercio y Servicios"'},{nombre:"Nelson Iván Vera Briceño",cargo:"Producción audiovisual",centro:'"Regional Tolima - Centro de Comercio y Servicios"'},{nombre:"Oleg Litvin",cargo:"Animador",centro:'"Regional Tolima - Centro de Comercio y Servicios"'},{nombre:"Cristian Mauricio Otálora Clavijo",cargo:"Actividad Didáctica",centro:'"Regional Tolima - Centro de Comercio y Servicios"'}]},{titulo:"VALIDACIÓN RECURSO EDUCATIVO DIGITAL",autores:[{nombre:"Javier Mauricio Oviedo",cargo:"Validación y vinculación en plataforma LMS",centro:'"Regional Tolima - Centro de Comercio y Servicios"'},{nombre:"Gilberto Naranjo Farfán",cargo:"Validación de contenidos accesibles",centro:'"Regional Tolima - Centro de Comercio y Servicios"'}]}],creditosAdicionales:{imagenes:'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',creativeCommons:'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>'}});o["a"].prototype.$config=v;var k=n("9224");o["a"].prototype.$package=k,new o["a"]({router:h,store:g["a"],render:function(e){return e(l)}}).$mount("#app")},"71f8":function(e,a,n){e.exports=n.p+"img/banner-principal-decorativo-1.8fd65f76.svg"},"74b5":function(e,a,n){e.exports=n.p+"img/banner-princiapal.b937494f.png"},"8f04":function(e,a,n){e.exports=n.p+"img/banner-principal-decorativo-2.c88cdeb9.svg"},9224:function(e){e.exports=JSON.parse('{"name":"sena-base-2021","version":"7.0.0","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"ecored-base-pkg":"6.0.1","vue":"^2.6.14","vue-router":"^3.5.2","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.13","@vue/cli-plugin-eslint":"^4.5.13","@vue/cli-plugin-router":"^4.5.13","@vue/cli-plugin-vuex":"^4.5.13","@vue/cli-service":"^4.5.13","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.4.1","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.6.14"}}')},a00a:function(e,a,n){e.exports=n.p+"img/logo-sena.da3129a2.svg"},a3a0:function(e,a,n){}});
//# sourceMappingURL=app.0f5c8923.js.map