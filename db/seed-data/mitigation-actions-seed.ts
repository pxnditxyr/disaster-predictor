export const mitigationActionsSeed = [
    {
      id: 1,
      description: "Implementar racionamiento de agua",
      actionList: [
        "Limitar la duración de las duchas",
        "Restringir el riego de jardines a horarios específicos",
        "Suspender el lavado de vehículos"
      ].join( ';' ),
      objectives: "Reducir el consumo de agua en actividades no esenciales",
      disasterTypeId: 1,
      riskLevel: 3,
      icon: "water-rationing"
    },
    {
      id: 2,
      description: "Reparación rápida de infraestructuras de agua",
      actionList: [
        "Inspeccionar redes de distribución",
        "Arreglar fugas y roturas identificadas",
        "Optimizar el uso del agua disponible"
      ].join( ';' ),
      objectives: "Maximizar la disponibilidad de agua y prevenir pérdidas adicionales",
      disasterTypeId: 1,
      riskLevel: 2,
      icon: "repair-of-water-infrastructure"
    },
    {
      id: 3,
      description: "Distribución de agua de emergencia",
      actionList: [
        "Establecer puntos de distribución estratégicos",
        "Movilizar camiones cisterna",
        "Instalar estaciones temporales de distribución"
      ].join( ';' ),
      objectives: "Asegurar el acceso a agua potable para toda la población",
      disasterTypeId: 1,
      riskLevel: 2,
      icon: "emergency-water-distribution"
    },
    {
      id: 4,
      description: "Campañas de concientización sobre el uso responsable del agua",
      actionList: [
        "Difundir información a través de medios locales y redes sociales",
        "Promover prácticas de ahorro de agua en hogares e industrias",
        "Educar sobre la reutilización del agua para riego de plantas"
      ].join( ';' ),
      objectives: "Fomentar el uso responsable y sostenible del agua",
      disasterTypeId: 1,
      riskLevel: 1,
      icon: "water-use-awareness"
    },
    {
      id: 5,
      description: "Promover el almacenamiento de agua de lluvia",
      actionList: [
        "Instalar sistemas temporales de recolección de agua",
        "Utilizar tanques portátiles o barriles para almacenar agua de lluvia",
        "Distribuir materiales necesarios para la recolección"
      ].join( ';' ),
      objectives: "Aumentar la disponibilidad de agua para usos no potables",
      disasterTypeId: 1,
      riskLevel: 2,
      icon: "rainwater-storage"
    },


    {
      id: 6,
      description: "Evacuación de zonas de riesgo",
      actionList: [
        "Desalojar rápidamente a las personas de áreas propensas",
        "Establecer rutas de evacuación claras",
        "Proveer medios de transporte seguros"
      ].join( ';' ),
      objectives: "Proteger vidas humanas evitando la presencia en áreas inestables",
      disasterTypeId: 2,
      riskLevel: 3,
      icon: "risk-areas"
    },
    {
      id: 7,
      description: "Monitoreo intensivo del terreno",
      actionList: [
        "Instalar sensores móviles para detectar movimientos del suelo",
        "Realizar inspecciones visuales frecuentes",
        "Analizar datos para prever posibles derrumbes"
      ].join( ';' ),
      objectives: "Detectar movimientos inusuales y actuar preventivamente",
      disasterTypeId: 2,
      riskLevel: 2,
      icon: "ground-monitoring"
    },
    {
      id: 8,
      description: "Instalación de barreras temporales",
      actionList: [
        "Colocar sacos de arena en áreas críticas",
        "Utilizar materiales como madera para estabilizar el terreno",
        "Implementar barreras de retención temporales"
      ].join( ';' ),
      objectives: "Estabilizar el suelo y prevenir deslizamientos inmediatos",
      disasterTypeId: 2,
      riskLevel: 1,
      icon: "temporary-barriers"
    },
    {
      id: 9,
      description: "Refuerzo de estructuras temporales",
      actionList: [
        "Instalar geotextiles en taludes inestables",
        "Colocar soportes metálicos para proporcionar estabilidad",
        "Reforzar áreas vulnerables con materiales de soporte"
      ].join( ';' ),
      objectives: "Proveer estabilidad adicional a estructuras y taludes",
      disasterTypeId: 2,
      riskLevel: 2,
      icon: "temporary-structures"
    },
    {
      id: 10,
      description: "Despejar vegetación y obstáculos",
      actionList: [
        "Remover árboles y ramas que contribuyen al peso del suelo",
        "Eliminar escombros que puedan desestabilizar el terreno",
        "Mantener libres las áreas propensas a derrumbes"
      ].join( ';' ),
      objectives: "Reducir la carga sobre el suelo y prevenir desencadenantes externos",
      disasterTypeId: 2,
      riskLevel: 1,
      icon: "clear-vegetation"
    },
    {
      id: 11,
      description: "Evacuación de áreas vulnerables",
      actionList: [
        "Identificar comunidades cercanas al río en riesgo",
        "Organizar traslados seguros a zonas alejadas",
        "Proveer asistencia durante la evacuación"
      ].join( ';' ),
      objectives: "Proteger vidas humanas evacuando zonas en riesgo de desborde",
      disasterTypeId: 3,
      riskLevel: 3,
      icon: "evacuation-of-people"
    },
    {
      id: 12,
      description: "Construcción de barreras temporales",
      actionList: [
        "Levantamiento de diques de emergencia",
        "Uso de sacos de arena para contener el flujo de agua",
        "Instalación de barreras portátiles en puntos críticos"
      ].join( ';' ),
      objectives: "Contener el flujo de agua y prevenir el desbordamiento",
      disasterTypeId: 3,
      riskLevel: 2,
      icon: "construction-of-barriers"
    },
    {
      id: 13,
      description: "Activación de sistemas de alerta",
      actionList: [
        "Emitir alertas a través de medios de comunicación",
        "Enviar notificaciones vía mensajes de texto y aplicaciones móviles",
        "Informar sobre medidas preventivas a la población"
      ].join( ';' ),
      objectives: "Informar a la comunidad sobre el riesgo inminente para tomar actionList preventivas",
      disasterTypeId: 3,
      riskLevel: 1,
      icon: "warning-systems"
    },
    {
      id: 14,
      description: "Despeje de canales y alcantarillas",
      actionList: [
        "Limpiar riberas de ríos y canales",
        "Eliminar obstrucciones en sistemas de drenaje",
        "Mejorar el flujo del agua para reducir presión sobre el río"
      ].join( ';' ),
      objectives: "Facilitar el flujo del agua y prevenir desbordes por obstrucciones",
      disasterTypeId: 3,
      riskLevel: 2,
      icon: "clearing-of-gullies"
    },
    {
      id: 15,
      description: "Coordinación con equipos de respuesta",
      actionList: [
        "Preparar equipos de emergencia para actuar rápidamente",
        "Asignar roles y responsabilidades claras",
        "Coordinar recursos para una respuesta eficiente"
      ].join( ';' ),
      objectives: "Asegurar una respuesta rápida y organizada ante el desborde",
      disasterTypeId: 3,
      riskLevel: 1,
      icon: "response-teams"
    },
    {
      id: 16,
      description: "Evacuación inmediata de zonas de riesgo",
      actionList: [
        "Desalojar urgentemente áreas identificadas como altamente susceptibles",
        "Establecer puntos de reunión seguros",
        "Proveer transporte adecuado para la evacuación"
      ].join( ';' ),
      objectives: "Proteger vidas humanas desalojando áreas en riesgo inminente",
      disasterTypeId: 4,
      riskLevel: 3,
      icon: "immediate-evacuation"
    },
    {
      id: 17,
      description: "Refuerzo de taludes",
      actionList: [
        "Aplicar mantas de retención en taludes inestables",
        "Instalar geotextiles para proporcionar estabilidad",
        "Colocar soportes temporales para prevenir el deslizamiento"
      ].join( ';' ),
      objectives: "Proveer estabilidad adicional al terreno para prevenir deslizamientos",
      disasterTypeId: 4,
      riskLevel: 2,
      icon: "slope-reinforcement"
    },
    {
      id: 18,
      description: "Control del agua en el área",
      actionList: [
        "Instalar sistemas de drenaje temporales",
        "Mejorar el drenaje existente para reducir la acumulación de agua",
        "Regular el flujo de agua para evitar la saturación del suelo"
      ].join( ';' ),
      objectives: "Prevenir la saturación del suelo que puede desencadenar deslizamientos",
      disasterTypeId: 4,
      riskLevel: 1,
      icon: "drainage"
    },
    {
      id: 19,
      description: "Inspección y mantenimiento de infraestructuras",
      actionList: [
        "Revisar puentes y carreteras cercanas a taludes",
        "Asegurar que las edificaciones no contribuyan a la inestabilidad del terreno",
        "Realizar reparaciones rápidas en infraestructuras dañadas"
      ].join( ';' ),
      objectives: "Garantizar la seguridad de las infraestructuras y prevenir su contribución a deslizamientos",
      disasterTypeId: 4,
      riskLevel: 2,
      icon: "inspection"
    },
    {
      id: 20,
      description: "Comunicación y educación rápida",
      actionList: [
        "Informar a la población sobre señales de alerta de deslizamientos",
        "Capacitar sobre procedimientos de seguridad",
        "Distribuir materiales educativos sobre prevención de deslizamientos"
      ].join( ';' ),
      objectives: "Empoderar a la comunidad para actuar de manera adecuada ante señales de riesgo",
      disasterTypeId: 4,
      riskLevel: 1,
      icon: "inform"
    },

    {
      id: 21,
      description: "Instalación de redes anti-granizo en áreas agrícolas",
      actionList: [
        "Colocar coberturas protectoras sobre cultivos vulnerables",
        "Distribuir redes anti-granizo a agricultores",
        "Instalar estructuras temporales para sostener las redes"
      ].join( ';' ),
      objectives: "Minimizar el daño a los cultivos causado por el granizo",
      disasterTypeId: 5,
      riskLevel: 3,
      icon: "anti-hail"
    },
    {
      id: 22,
      description: "Protección de infraestructuras",
      actionList: [
        "Asegurar techos y ventanas de edificios",
        "Instalar láminas protectoras temporales",
        "Reparar estructuras vulnerables rápidamente"
      ].join( ';' ),
      objectives: "Minimizar daños materiales en edificaciones causados por el granizo",
      disasterTypeId: 5,
      riskLevel: 2,
      icon: "infrastructure-protection"
    },
    {
      id: 23,
      description: "Cobertura de vehículos",
      actionList: [
        "Proteger vehículos con lonas",
        "Trasladar vehículos a garajes o estacionamientos cubiertos",
        "Utilizar protectores específicos para parabrisas y carrocerías"
      ].join( ';' ),
      objectives: "Prevenir daños en vehículos debido al impacto del granizo",
      disasterTypeId: 5,
      riskLevel: 1,
      icon: "vehicles"
    },
    {
      id: 24,
      description: "Refuerzo de sistemas de alerta",
      actionList: [
        "Activar sistemas de monitoreo meteorológico",
        "Verificar el funcionamiento de alarmas y notificaciones",
        "Emitir alertas tempranas sobre la proximidad de granizadas"
      ].join( ';' ),
      objectives: "Informar oportunamente a la población sobre la amenaza de granizadas",
      disasterTypeId: 5,
      riskLevel: 2,
      icon: "alerts"
    },
    {
      id: 25,
      description: "Distribución de materiales de protección",
      actionList: [
        "Proveer lonas, mallas y coberturas temporales a agricultores y propietarios",
        "Distribuir kits de protección para cultivos y edificaciones",
        "Facilitar el acceso a materiales necesarios para proteger propiedades"
      ].join( ';' ),
      objectives: "Asegurar que las comunidades tengan los recursos necesarios para protegerse del granizo",
      disasterTypeId: 5,
      riskLevel: 1,
      icon: "materials"
    },

    {
      id: 26,
      description: "Evacuación de zonas de alto riesgo",
      actionList: [
        "Identificar áreas vulnerables a ambos fenómenos",
        "Organizar traslados seguros a zonas alejadas",
        "Proveer asistencia durante la evacuación"
      ].join( ';' ),
      objectives: "Proteger vidas humanas desalojando áreas en riesgo de granizada e inundación",
      disasterTypeId: 6,
      riskLevel: 3,
      icon: "high-risk-areas"
    },
    {
      id: 27,
      description: "Fortalecimiento de barreras temporales",
      actionList: [
        "Utilizar sacos de arena para proteger áreas propensas a inundaciones",
        "Instalar barreras portátiles que también protejan contra granizadas",
        "Reforzar diques de emergencia para contener el agua"
      ].join( ';' ),
      objectives: "Contener el agua y proteger infraestructuras contra ambos fenómenos",
      disasterTypeId: 6,
      riskLevel: 2,
      icon: "strengthening-barriers"
    },
    {
      id: 28,
      description: "Activación de planes de emergencia integrados",
      actionList: [
        "Coordinar actionList para enfrentar granizadas e inundaciones simultáneamente",
        "Movilizar equipos de rescate y recursos necesarios",
        "Establecer comunicación constante con la población sobre las medidas a seguir"
      ].join( ';' ),
      objectives: "Asegurar una respuesta cohesiva y eficiente ante ambos desastres",
      disasterTypeId: 6,
      riskLevel: 1,
      icon: "plan-activation"
    },
    {
      id: 29,
      description: "Protección de infraestructuras críticas",
      actionList: [
        "Asegurar instalaciones eléctricas y sanitarias",
        "Instalar coberturas protectoras sobre equipos esenciales",
        "Reforzar estructuras para mantener servicios vitales operativos"
      ].join( ';' ),
      objectives: "Mantener servicios esenciales durante y después de los desastres",
      disasterTypeId: 6,
      riskLevel: 2,
      icon: "electricity"
    },
    {
      id: 30,
      description: "Comunicación efectiva y continua",
      actionList: [
        "Mantener informada a la población a través de múltiples canales",
        "Proveer actualizaciones regulares sobre el desarrollo de los eventos",
        "Instruir sobre medidas preventivas y procedimientos de seguridad"
      ].join( ';' ),
      objectives: "Garantizar que la población esté preparada para actuar de manera adecuada y oportuna",
      disasterTypeId: 6,
      riskLevel: 1,
      icon: "communication"
    },


    {
      id: 31,
      description: "Evacuación de zonas vulnerables",
      actionList: [
        "Organizar la evacuación inmediata de áreas bajas propensas a inundaciones",
        "Establecer rutas de evacuación claras y seguras",
        "Proveer medios de transporte adecuados para la evacuación"
      ].join( ';' ),
      objectives: "Proteger vidas humanas desalojando áreas en riesgo de inundación",
      disasterTypeId: 7,
      riskLevel: 3,
      icon: "evacuation-routes"
    },
    {
      id: 32,
      description: "Construcción de barreras temporales",
      actionList: [
        "Levantamiento de diques de emergencia",
        "Uso de barreras portátiles para contener el flujo de agua",
        "Instalación de sacos de arena en puntos críticos"
      ].join( ';' ),
      objectives: "Contener el flujo de agua y proteger áreas habitadas de la inundación",
      disasterTypeId: 7,
      riskLevel: 2,
      icon: "dam"
    },
    {
      id: 33,
      description: "Despeje de canales y sistemas de drenaje",
      actionList: [
        "Limpiar y desobstruir alcantarillas, canales y drenajes",
        "Eliminar escombros que puedan bloquear el flujo del agua",
        "Mantener sistemas de drenaje eficientes para facilitar el desagüe"
      ].join( ';' ),
      objectives: "Mejorar el flujo del agua y reducir la posibilidad de desbordes",
      disasterTypeId: 7,
      riskLevel: 1,
      icon: "drainage-systems"
    },
    {
      id: 34,
      description: "Protección de infraestructuras y propiedades",
      actionList: [
        "Elevar objetos de valor y equipamiento",
        "Asegurar edificaciones con materiales impermeables",
        "Instalar elevaciones temporales para instalaciones críticas"
      ].join( ';' ),
      objectives: "Prevenir daños materiales y asegurar la funcionalidad de infraestructuras esenciales",
      disasterTypeId: 7,
      riskLevel: 2,
      icon: "protection"
    },
    {
      id: 35,
      description: "Activación de equipos de respuesta rápida",
      actionList: [
        "Desplegar personal y recursos para la mitigación",
        "Coordinar esfuerzos de rescate y asistencia",
        "Proveer apoyo logístico a las comunidades afectadas"
      ].join( ';' ),
      objectives: "Asegurar una respuesta eficiente y coordinada ante la inundación",
      disasterTypeId: 7,
      riskLevel: 1,
      icon: "builders"
    },

    {
      id: 36,
      description: "Evacuación preventiva",
      actionList: [
        "Desalojar rápidamente las zonas más afectadas por la riada",
        "Identificar y movilizar a los residentes de áreas críticas",
        "Establecer puntos de reunión seguros antes de que la riada alcance su punto máximo"
      ].join( ';' ),
      objectives: "Proteger vidas humanas mediante la evacuación anticipada",
      disasterTypeId: 8,
      riskLevel: 3,
      icon: "preventive-evacuation"
    },
    {
      id: 37,
      description: "Construcción de barreras temporales",
      actionList: [
        "Utilizar sacos de arena para contener el flujo de agua",
        "Levantamiento de diques de emergencia",
        "Instalar barreras portátiles en áreas propensas a inundación"
      ].join( ';' ),
      objectives: "Contener el flujo de agua y prevenir inundaciones severas",
      disasterTypeId: 8,
      riskLevel: 2,
      icon: "prevent-water-flow"
    },
    {
      id: 38,
      description: "Protección de infraestructuras críticas",
      actionList: [
        "Asegurar puentes y carreteras cercanas al río",
        "Instalar coberturas protectoras sobre edificaciones cercanas",
        "Reforzar estructuras existentes para resistir el flujo de agua"
      ].join( ';' ),
      objectives: "Mantener operativas las infraestructuras esenciales durante la riada",
      disasterTypeId: 8,
      riskLevel: 1,
      icon: "bridges"
    },
    {
      id: 39,
      description: "Monitoreo intensivo de niveles de agua",
      actionList: [
        "Vigilar constantemente los niveles de los ríos mediante estaciones móviles",
        "Analizar datos en tiempo real para prever crecidas",
        "Actualizar pronósticos y alertas basadas en el monitoreo continuo"
      ].join( ';' ),
      objectives: "Prever crecidas del río y tomar decisiones informadas para mitigar el impacto",
      disasterTypeId: 8,
      riskLevel: 2,
      icon: "river"
    },
    {
      id: 40,
      description: "Activación de alertas tempranas",
      actionList: [
        "Informar a la población sobre el aumento del caudal del río",
        "Emitir alertas a través de medios de comunicación locales y dispositivos móviles",
        "Proveer instrucciones claras sobre medidas preventivas a seguir"
      ].join( ';' ),
      objectives: "Permitir que las personas tomen medidas preventivas y se preparen para la evacuación si es necesario",
      disasterTypeId: 8,
      riskLevel: 1,
      icon: "instructions"
    }
  ]
