interface DisasterMitigation {
  [ disaster : string ]: {
    icon: string,
    actions: string[]
  }
}

export const mitigationActions : DisasterMitigation = {
  'Inundaciones': {
    icon: 'rain',
    actions: [
      'Construcción de infraestructura verde: Implementar sistemas de drenaje urbano sostenible (SUDS), como jardines de lluvia, para absorber y retener el agua de lluvia.',
      'Restauración de humedales: Los humedales actúan como esponjas naturales, absorbiendo el exceso de agua y reduciendo el riesgo de inundaciones.',
      'Mejoramiento de diques y represas: Fortalecer y mantener diques y represas para controlar el flujo de ríos y prevenir desbordamientos.',
      'Zonificación y planificación del uso del suelo: Prohibir la construcción en zonas inundables mediante la creación de mapas de riesgo.',
      'Sistema de alerta temprana: Implementar sistemas de monitoreo y alerta temprana que informen a las comunidades sobre la posibilidad de inundaciones.'
    ]
  },
  'Deslizamientos de tierra': {
    icon: 'landslide',
    actions: [
      'Reforestación: Plantar árboles y vegetación en áreas susceptibles para estabilizar el suelo y reducir el riesgo de deslizamientos.',
      'Construcción de muros de contención: Instalar muros de contención en áreas vulnerables para prevenir el desplazamiento de tierra.',
      'Drenaje adecuado: Mejorar los sistemas de drenaje para evitar la saturación del suelo, que puede desencadenar deslizamientos.',
      'Monitoreo y alerta temprana: Utilizar tecnología como radares y sensores para detectar movimientos de tierra y alertar a las comunidades.',
      'Zonificación y planificación: Evitar construcciones en pendientes empinadas y áreas conocidas por su riesgo de deslizamientos.'
    ]
  },
  'Sequías': {
    icon: 'no-water',
    actions: [
      'Gestión eficiente del agua: Implementar sistemas de riego por goteo y otras técnicas de conservación de agua en la agricultura.',
      'Captación de agua de lluvia: Fomentar la recolección de agua de lluvia para su uso en períodos de sequía.',
      'Cultivos resistentes a la sequía: Desarrollar e implementar variedades de cultivos que requieran menos agua.',
      'Desalación: Desarrollar tecnologías de desalación del agua para abastecimiento en áreas costeras afectadas.',
      'Planes de contingencia: Desarrollar planes de gestión de crisis para el suministro de agua potable durante sequías prolongadas.'
    ]
  },
  'Incendios forestales': {
    icon: 'forest-burn',
    actions: [
      'Gestión de combustibles: Reducir la cantidad de material inflamable en los bosques mediante técnicas como el desbroce controlado.',
      'Cinturones cortafuegos: Crear zonas despejadas de vegetación alrededor de áreas habitadas para prevenir la propagación de incendios.',
      'Campañas de concienciación: Educar al público sobre los riesgos de incendios y las prácticas para prevenirlos.',
      'Monitoreo y detección temprana: Implementar sistemas de vigilancia y detección temprana de incendios mediante satélites y cámaras.',
      'Planes de evacuación y respuesta rápida: Desarrollar y practicar planes de evacuación y establecer brigadas de respuesta rápida ante incendios.'
    ]
  },
  'Huracanes y ciclones tropicales': {
    icon: 'hurricane',
    actions: [
      'Construcción resistente: Diseñar edificios y viviendas con materiales y técnicas que resistan vientos fuertes y lluvias intensas.',
      'Zonificación costera: Limitar el desarrollo en áreas costeras vulnerables a huracanes y ciclones.',
      'Refugios y centros de evacuación: Establecer refugios seguros y bien equipados en áreas propensas a huracanes.',
      'Alerta temprana y evacuación: Implementar sistemas de alerta temprana y protocolos de evacuación claros y efectivos.',
      'Reforestación costera: Plantar manglares y otras vegetaciones costeras para reducir el impacto de las tormentas y proteger las costas.'
    ]
  },
  'Ondas de calor': {
    icon: 'heat-wave',
    actions: [
      'Sistemas de enfriamiento urbano: Implementar techos y paredes verdes en edificios para reducir la temperatura urbana.',
      'Sistemas de alerta temprana: Monitorear y alertar sobre olas de calor para permitir a las personas tomar precauciones.',
      'Campañas de concienciación pública: Educar a la población sobre los riesgos de las olas de calor y cómo protegerse.',
      'Acceso a refugios frescos: Crear centros comunitarios con aire acondicionado para que las personas vulnerables puedan refugiarse.',
      'Reducción del efecto isla de calor urbana: Aumentar la vegetación urbana y reducir las superficies asfaltadas para disminuir la temperatura.'
    ]
  },
  'Alteraciones en la pesca y ecosistemas marinos': {
    icon: 'fishing',
    actions: [
      'Gestión sostenible de la pesca: Implementar cuotas de captura para evitar la sobreexplotación de especies marinas afectadas.',
      'Creación de áreas marinas protegidas: Establecer zonas de protección donde la pesca esté restringida para permitir la recuperación de especies.',
      'Monitoreo de las condiciones oceánicas: Utilizar boyas y satélites para monitorear cambios en la temperatura del agua y ajustar las prácticas pesqueras.',
      'Educación y sensibilización: Capacitar a los pescadores sobre prácticas sostenibles y el impacto de El Niño en los ecosistemas.',
      'Diversificación de fuentes de ingreso: Fomentar alternativas económicas para las comunidades pesqueras afectadas, como el ecoturismo.'
    ]
  },
  'Tormentas eléctricas y granizo': {
    icon: 'thunderstorm',
    actions: [
      'Sistemas de protección de cultivos: Instalar redes y cubiertas en áreas agrícolas para proteger los cultivos del granizo.',
      'Mejoramiento de estructuras: Fortalecer techos y ventanas para resistir el impacto del granizo.',
      'Sistemas de alerta temprana: Implementar sistemas que avisen con antelación sobre la formación de tormentas eléctricas severas.',
      'Monitoreo y análisis atmosférico: Utilizar radares y tecnología avanzada para monitorear las condiciones atmosféricas y predecir tormentas.',
      'Educación comunitaria: Informar a la población sobre las medidas de seguridad durante tormentas eléctricas y granizo.'
    ]
  },
  'Desabastecimiento de agua': {
    icon: 'faucet',
    actions: [
      'Optimización del uso del agua: Implementar tecnologías y prácticas que maximicen la eficiencia en el uso del agua en la agricultura, la industria y los hogares.',
      'Desalación de agua: Invertir en plantas desaladoras para convertir agua de mar en agua potable en regiones costeras.',
      'Reutilización de aguas grises: Fomentar la reutilización de aguas residuales tratadas para riego y otros usos no potables.',
      'Captación de agua de lluvia: Promover la instalación de sistemas de recolección de agua de lluvia en áreas urbanas y rurales.',
      'Protección de fuentes de agua: Implementar medidas para proteger los acuíferos y otras fuentes de agua dulce de la contaminación y la sobreexplotación.'
    ]
  },
  //'Plagas y enfermedades': {
  //  icon: 'no-water',
  //  actions: [
  //    'Vigilancia epidemiológica: Monitorear y controlar la población de vectores y plagas mediante programas de salud pública.',
  //    'Campañas de vacunación: Implementar campañas de vacunación y programas de control sanitario en regiones vulnerables.',
  //    'Educación pública: Fomentar prácticas de higiene y prevención entre la población para reducir la propagación de enfermedades.',
  //    'Control biológico: Utilizar métodos de control biológico para reducir la población de vectores y plagas.',
  //    'Preparación y respuesta rápida: Establecer planes de contingencia y equipos de respuesta rápida para controlar brotes epidémicos.'
  //  ]
  //},
  //'Salinización de suelos': {
  //  icon: 'no-water',
  //  actions: [
  //    'Drenaje y lavado del suelo: Implementar sistemas de drenaje que ayuden a eliminar las sales acumuladas del suelo.',
  //    'Uso de cultivos tolerantes a la sal: Introducir variedades de cultivos que sean resistentes a la salinidad en áreas afectadas.',
  //    'Manejo adecuado del riego: Evitar el riego excesivo y utilizar técnicas de riego que minimicen la acumulación de sales.',
  //    'Mejoras en la gestión del suelo: Aplicar enmiendas al suelo, como yeso, para mejorar su estructura y reducir la salinidad.',
  //    'Monitoreo y manejo integrado: Realizar análisis regulares del suelo para monitorizar la salinidad y ajustar las prácticas agrícolas en consecuencia.'
  //  ]
  //},
  'Impactos en la producción agrícola': {
    icon: 'stock-out',
    actions: [
      'Diversificación de cultivos: Fomentar la diversificación de cultivos para reducir la dependencia de un solo tipo de cultivo susceptible a El Niño.',
      'Rotación de cultivos: Implementar la rotación de cultivos para mejorar la salud del suelo y reducir la susceptibilidad a plagas y enfermedades.',
      'Uso de variedades resistentes: Desarrollar e implementar variedades de cultivos que sean más resistentes a las condiciones adversas causadas por El Niño.',
      'Riego eficiente: Utilizar tecnologías de riego eficientes que optimicen el uso del agua durante períodos de sequía.',
      'Planes de contingencia agrícola: Desarrollar planes de emergencia para gestionar el impacto de El Niño en la producción agrícola, incluyendo seguros de cosecha.'
    ]
  },
  'Alteraciones en los patrones de migración de especies': {
    icon: 'toucan-tropical',
    actions: [
      'Creación de corredores biológicos: Establecer corredores naturales que faciliten el movimiento y la migración de especies en respuesta a cambios ambientales.',
      'Protección de hábitats críticos: Identificar y proteger los hábitats esenciales para las especies migratorias durante eventos de El Niño.',
      'Monitoreo de poblaciones de fauna: Implementar programas de monitoreo para seguir el desplazamiento de especies y adaptar las medidas de conservación.',
      'Restauración de ecosistemas: Restaurar hábitats degradados para apoyar la recuperación de especies afectadas por cambios en sus patrones migratorios.',
      'Investigación y adaptación: Fomentar la investigación sobre los impactos de El Niño en la migración de especies y adaptar las estrategias de conservación en consecuencia.'
    ]
  },
}
