export default {
  global: {
    componenteFormativo:
      'Caracterización de condiciones sanitarias de establecimientos',
    descripcionCurso: 'BREVE DESCRIPCIÓN',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Inspección de condiciones sanitarias',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Conceptos y tipos',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Tipos de medidas sanitarias',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Protocolos y procedimientos',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Tipos de establecimientos para inspección',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Autoridades sanitarias',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Trazabilidad de manejo de residuos sólidos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Conceptos',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Características y tipos',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Métodos de clasificación, disposición y aprovechamiento',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Normatividad ambiental',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo:
          'Valoración y recolección de información de condiciones sanitarias',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Procedimiento de valoración de puntajes de riesgo',
            hash: 't_2_1',
          },
          {
            numero: '3.2',
            titulo: 'Características de validación de documentos',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Reporte concepto sanitario',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo:
              'Tipos de leyes de salud pública enfocadas en riesgo sanitario',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Características de protocolos de manejo del riesgo',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Tipos de procedimiento de intervención sanitaria',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo:
              'Características de manuales y guías de inspección sanitaria',
            hash: 't_4_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Conceptos y tipos',
      referencia:
        'Cámara de Comercio de Bogotá. (2016). Concepto sanitario, más que un requisito, una herramienta para expandir su empresa.',
      tipo: 'Documento',
      link:
        'https://bibliotecadigital.ccb.org.co/server/api/core/bitstreams/3ff12adf-a9e2-4143-aefc-927a4ea2d1e4/content',
    },
  ],
  glosario: [
    {
      termino: 'Autoridades sanitarias:',
      significado:
        'Entidades jurídicas de carácter público con atribuciones para ejercer funciones de rectoría, regulación, inspección, vigilancia y control de los sectores público y privado en salud y adoptar medidas de prevención y seguimiento que garanticen la protección de la salud pública.',
    },
    {
      termino: 'Desinfección:',
      significado:
        'Proceso físico o químico por medio del cual se logra eliminar los microorganismos de formas vegetativas en objetos inanimados, sin que se asegure la eliminación de esporas bacterianas. Por esto los objetos y herramientas a desinfectar, se les debe evaluar previamente el nivel de desinfección que requieren para lograr la destrucción de los microorganismos que contaminan los elementos.',
    },
    {
      termino: 'Inspección:',
      significado:
        'Consiste en la atribución que tienen la Superintendencia Nacional de Salud, el Invima, los servicios seccionales, distritales y locales de salud para verificar, solicitar, confirmar y analizar de manera ocasional, y en la forma, detalles y términos que las normas determinen, información sobre el estado higiénico-sanitario de las personas, establecimientos, edificaciones y, en general, todos los entes que de conformidad con la ley y sus reglamentos son susceptibles de ser inspeccionados por estas.',
    },
    {
      termino: 'Prevención:',
      significado:
        'Conjunto de acciones o medidas adoptadas o previstas, que evitan o disminuyen los accidentes de trabajo y las enfermedades profesionales, proporcionando una mejor calidad de vida a los miembros de una comunidad.',
    },
  ],
  referencias: [
    {
      referencia:
        'Aroca, A., y Guzmán, J. (2017). Modelo para la inspección, vigilancia y control sanitario con enfoque de riesgos en Colombia. Rev Panam Salud Pública, 21;41:e105.',
      link:
        'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6660868/#:~:texto=En%20este%20caso%2C%20el%20%20puntaje,y%202%20a%20%20riesgo%20%20bajo',
    },
    {
      referencia:
        'Así vamos en salud. (2018). Autoridad sanitaria y movilización social en salud.',
      link:
        'https://www.asivamosensalud.org/salud-para-ciudadanos/autoridad-sanitaria-y-movilizacion-social-en-salud',
    },
    {
      referencia:
        'Banco Mundial. (2018). Los desechos: un análisis actualizado del futuro de la gestión de los desechos sólidos. Banco Mundial',
      link:
        'https://www.bancomundial.org/es/news/immersive-story/2018/09/20/what-a-waste-an-updated-look-into-the-future-of-solid-waste-management',
    },
    {
      referencia:
        'Dobbox. (2019). Inspecciones sanitarias: ¿qué se revisa? Dobbox.',
      link: 'https://dobbox.com/inspecciones-sanitarias-que-se-revisa/',
    },
    {
      referencia: 'Emgrisa. (2014). Tipos de residuos: clasificación. Emgrisa.',
      link:
        'https://www.emgrisa.es/publicaciones/tipos-de-residuos/?cn-reloaded=1',
    },
    {
      referencia:
        'Manipulación de Alimentos Colombia. (2011). Normatividad. Manipulación de Alimentos Colombia.',
      link: 'https://www.manipulaciondealimentoscolombia.com/normatividad',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2013). Resolución 2674 de 2013.',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/resolucion-2674-de-2013.pdf',
    },
    {
      referencia:
        'Ramírez, C., R. H. (2017). Resolución 816 de 2017. Unidad de Planeación Minero-Energética.',
      link:
        'https://www.leyex.info/documents/leyes/306bb7232b719c1f8adb32ce31ce5cb8.pdf',
    },
    {
      referencia:
        'Rivas, A., C. A. (2018). Piensa un minuto antes de actuar: gestión integral de residuos sólidos.',
      link:
        'https://www.mincit.gov.co/getattachment/c957c5b4-4f22-4a75-be4d-73e7b64e4736/17-10-2018-Uso-Eficiente-de-Recursos-Agua-y-Energi.aspx#:~:text=Los%20Residuos%20S%C3%B3lidos%2C%20constituyen%20aquellos,utilizaci%C3%B3n%20de%20bienes%20de%20consumo',
    },
    {
      referencia:
        'Saldarriaga, L. (2021). Manual de procedimientos: qué es y cómo hacer uno.',
      link:
        'http://www.saludcapital.gov.co/sitios/VigilanciaSaludPublica/Protocolos%20de%20Vigilancia%20en%20Salud%20Publica/Procesos%20Legales.pdf',
    },
    {
      referencia:
        'Unidad Nacional para la Gestión del Riesgo de Desastres. (2016). Plan Nacional de Gestión del Riesgo de Desastres. Unidad Nacional para la Gestión del Riesgo de Desastres.',
      link:
        'https://portal.gestiondelriesgo.gov.co/Documents/PNGRD/Plan-Nacional-de-Gestion-del-Riesgo-de-Desastres-2015-2025.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Responsable de línea de producción',
          centro: '"Regional Tolima - Centro de Comercio y Servicios"',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Lizeth Daniela Reinoso Diaz',
          cargo: 'Experto temático',
          centro: '"Regional Tolima - Centro Agropecuario La Granja"',
        },
        {
          nombre: 'Gloria Alexandra Orejarena Barrios',
          cargo: 'Diseñadora Instruccional',
          centro: '"Regional Distrito Capital - Centro de Gestión Industrial"',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Asesora Metodológica',
          centro: '"Regional Distrito Capital - Centro de Diseño y Metrología"',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable del equipo de desarrollo curricular',
          centro:
            '"Regional Santander - Centro Industrial de Diseño y la manufactura."',
        },
        {
          nombre: 'Sandra Patricia Hoyos Sepúlveda',
          cargo: 'Corrección de estilo',
          centro:
            '"Regional Distrito Capital - Centro de Diseño y Metrología."',
        },
        {
          nombre: 'Jaslyth Juliana Eraso Casanova ',
          cargo: 'Experta Temática',
          centro:
            '"Regional Putumayo - Centro Agroforestal y Acuícola Arapaima."',
        },
        {
          nombre: 'Sergio Augusto Ardila Ortiz',
          cargo: 'Diseñador instruccional ',
          centro: '"Regional Tolima - Centro de Comercio y Servicios"',
        },
        {
          nombre: 'Viviana Esperanza Herrera Quiñonez',
          cargo: 'Metodóloga',
          centro: '"Regional Tolima - Centro de Comercio y Servicios"',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Luis Fernando Botero Mendoza',
          cargo: 'Diseñador de Contenidos Digitales',
          centro: '"Regional Tolima - Centro de Comercio y Servicios"',
        },
        {
          nombre: 'Cristian Mauricio Otálora Clavijo',
          cargo: 'Desarrollador Fullstack',
          centro: '"Regional Tolima - Centro de Comercio y Servicios"',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Storyboard de Ilustración',
          centro: '"Regional Tolima - Centro de Comercio y Servicios"',
        },
        {
          nombre: 'Maria Alejandra Briceño Vera',
          cargo: 'Producción',
          centro: '"Regional Tolima - Centro de Comercio y Servicios"',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Producción audiovisual',
          centro: '"Regional Tolima - Centro de Comercio y Servicios"',
        },
        {
          nombre: 'Oleg Litvin',
          cargo: 'Animador',
          centro: '"Regional Tolima - Centro de Comercio y Servicios"',
        },
        {
          nombre: 'Cristian Mauricio Otálora Clavijo',
          cargo: 'Actividad Didáctica',
          centro: '"Regional Tolima - Centro de Comercio y Servicios"',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: '"Regional Tolima - Centro de Comercio y Servicios"',
        },
        {
          nombre: 'Gilberto Naranjo Farfán',
          cargo: 'Validación de contenidos accesibles',
          centro: '"Regional Tolima - Centro de Comercio y Servicios"',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
