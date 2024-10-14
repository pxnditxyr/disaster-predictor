import { db, DisasterType, MitigationAction, OurIcons, Role, User } from 'astro:db'
import { v4 as uuid } from 'uuid'
import bcryptjs from 'bcryptjs'

// https://astro.build/db/seed
// TODO: move independently
export default async function seed() {
  const roles = [
    { id: 'admin', name: 'Admin' },
  ]

  const users = [
    {
      id: uuid(),
      name: 'Pxndxs',
      lastName: 'Ricaldi',
      email: 'pxnditxyr@gmail.com',
      password: bcryptjs.hashSync( '123456', 10 ),
      role: 'admin',
    }
  ]

  const disasterTypes = [
    {
      id: 1,
      name: "Crisis del agua (sequia)",
      description: "La crisis del agua, o sequía, es un fenómeno natural caracterizado por una disminución significativa y prolongada en la disponibilidad de agua en una región. Esta escasez puede afectar tanto el suministro de agua potable como las fuentes de agua para la agricultura, la industria y otros usos domésticos. Las sequías pueden ser causadas por factores climáticos como la falta de precipitaciones, altas temperaturas y vientos secos, así como por la sobreexplotación de recursos hídricos. Sus consecuencias incluyen la reducción de cultivos, la pérdida de biodiversidad, problemas de salud pública y conflictos por el acceso al agua.",
      icon: "rain"
    },
    {
      id: 3,
      name: "Derrumbe",
      description: "Un derrumbe es un tipo de desastre geológico que ocurre cuando una masa de tierra, rocas o escombros se desplaza de manera súbita y violenta, generalmente por la inestabilidad del terreno. Este fenómeno puede ser provocado por factores naturales como lluvias intensas, terremotos, erupciones volcánicas o la erosión del suelo, así como por actividades humanas como la minería, la construcción o la deforestación. Los derrumbes pueden causar daños significativos a infraestructuras, viviendas y carreteras, además de representar un grave riesgo para la vida humana y animal en las áreas afectadas.",
      icon: "landslide"
    },
    {
      id: 2,
      name: "Desborde de rio",
      description: "El desborde de río se produce cuando el caudal de un río excede su capacidad de contención, provocando que el agua se desborde de sus márgenes y se extienda sobre áreas adyacentes. Este fenómeno suele estar asociado a lluvias intensas, rápidos deshielos o bloqueos naturales o artificiales que impiden el flujo normal del agua. Las inundaciones resultantes pueden causar daños considerables a viviendas, cultivos, infraestructuras y ecosistemas, además de poner en riesgo la vida de las personas y animales que habitan en las zonas ribereñas.",
      icon: "landslide"
    },
    {
      id: 4,
      name: "Deslizamiento de tierra",
      description: "Un deslizamiento de tierra es el movimiento masivo y rápido de suelo, rocas y escombros cuesta abajo bajo la influencia de la gravedad. Este tipo de desastre suele ocurrir en áreas montañosas o inclinadas y puede ser desencadenado por precipitaciones excesivas, terremotos, actividad volcánica, deforestación o la construcción inadecuada en terrenos inestables. Los deslizamientos pueden sepultar comunidades, bloquear ríos creando lagunas peligrosas y destruir infraestructuras como carreteras y puentes, además de causar pérdidas humanas significativas.",
      icon: "landslide"
    },
    {
      id: 5,
      name: "Granizada",
      description: "La granizada es un fenómeno meteorológico que se caracteriza por la caída de bolas de hielo, conocidas como granizo, desde las nubes durante tormentas eléctricas intensas. El tamaño y la frecuencia del granizo pueden variar, y en casos extremos, puede causar daños considerables a cultivos agrícolas, vehículos, edificaciones y otras infraestructuras. Además, las granizadas pueden representar un riesgo para la seguridad de las personas y los animales, especialmente cuando ocurren de manera repentina y en áreas densamente pobladas.",
      icon: "landslide"
    },
    {
      id: 6,
      name: "Granizada e inundación",
      description: "La combinación de granizada e inundación ocurre cuando una tormenta intensa produce tanto granizo como lluvias torrenciales, llevando a un rápido aumento del nivel de los ríos y al desbordamiento de cuerpos de agua. Esta situación puede amplificar los daños causados por cada fenómeno por separado, afectando gravemente la agricultura, las infraestructuras, y poniendo en peligro la vida y la propiedad. Además, la saturación del suelo por las lluvias intensas puede dificultar la recuperación de los daños causados por el granizo, complicando aún más las labores de mitigación y reparación.",
      icon: "landslide"
    },
    {
      id: 7,
      name: "Inundaciones",
      description: "La inundación es un evento natural en el que el agua cubre áreas que normalmente están secas, ya sea de manera temporal o prolongada. Las inundaciones pueden ser causadas por lluvias intensas, desbordes de ríos, tsunamis, marejadas ciclónicas o fallos en infraestructuras de contención como diques y presas. Este desastre puede tener efectos devastadores en comunidades, provocando la destrucción de viviendas, cultivos, infraestructura, así como la pérdida de vidas humanas y animales. Además, las inundaciones pueden facilitar la propagación de enfermedades y contaminar fuentes de agua potable.",
      icon: "landslide"
    },
    {
      id: 8,
      name: "Riada",
      description: "Una riada es una crecida rápida y violenta de un río, generalmente causada por lluvias intensas, deshielos rápidos o bloqueos que impiden el flujo normal del agua. A diferencia de las inundaciones graduales, las riadas se desarrollan de manera súbita, dejando poco tiempo para la evacuación y aumentando el riesgo de daños materiales y pérdidas humanas. Las riadas pueden causar el colapso de infraestructuras, la destrucción de puentes y carreteras, y afectar gravemente a las comunidades ribereñas, además de interrumpir el suministro de servicios básicos como agua, electricidad y comunicaciones.",
      icon: "landslide"
    },
    {
      id: 9,
      name: "Incendios forestales",
      description: "Las condiciones secas provocadas por las sequías asociadas a El Niño aumentan el riesgo de incendios forestales en áreas vulnerables, destruyendo grandes extensiones de vegetación y poniendo en peligro a las poblaciones.",
      icon: "landslide"
    },
    {
      id: 10,
      name: "Huracanes y ciclones tropicales",
      description: "El Niño puede alterar los patrones de formación de huracanes y ciclones. En el Pacífico oriental, la actividad ciclónica aumenta, mientras que en el Atlántico la actividad de huracanes tiende a disminuir.",
      icon: "landslide"
    },
    {
      id: 11,
      name: "Ondas de calor",
      description: "Las condiciones secas y cálidas asociadas a El Niño pueden llevar a episodios de calor extremo, afectando la salud pública, la agricultura y el consumo de energía.",
      icon: "landslide"
    },
    {
      id: 12,
      name: "Alteraciones en la pesca y ecosistemas marinos",
      description: "El calentamiento de las aguas del océano Pacífico durante El Niño afecta los ecosistemas marinos, alterando la disponibilidad de recursos pesqueros y causando mortalidad en especies marinas sensibles.",
      icon: "landslide"
    },
    {
      id: 13,
      name: "Tormentas eléctricas y granizo",
      description: "Las anomalías climáticas asociadas a El Niño pueden intensificar las tormentas eléctricas y dar lugar a tormentas severas de granizo, que pueden dañar cultivos, viviendas y vehículos.",
      icon: "landslide",
    },
    {
      id: 14,
      name: "Desabastecimiento de agua",
      description: "La combinación de sequías prolongadas y una mala gestión de los recursos hídricos durante El Niño puede provocar crisis de agua potable, afectando tanto a las comunidades urbanas como rurales.",
      icon: "faucet",
    }
  ]

  //interface IDisasterMitigation {
  //  id: number
  //  description: string
  //  actions: string
  //  objectives: string
  //  disasterType: number
  //  riskLevel: number
  //  icon: string
  //
  //}
  const mitigationActions = [
    {
      id: 1,
      description: "Implementar racionamiento de agua",
      actions: [
        "Limitar la duración de las duchas",
        "Restringir el riego de jardines a horarios específicos",
        "Suspender el lavado de vehículos"
      ].join(', '),
      objectives: "Reducir el consumo de agua en actividades no esenciales",
      disasterType: 1,
      riskLevel: 3,
      icon: "water-rationing-icon"
    },
    {
      id: 2,
      description: "Reparación rápida de infraestructuras de agua",
      actions: [
        "Inspeccionar redes de distribución",
        "Arreglar fugas y roturas identificadas",
        "Optimizar el uso del agua disponible"
      ].join(', '),
      objectives: "Maximizar la disponibilidad de agua y prevenir pérdidas adicionales",
      disasterType: 1,
      riskLevel: 2,
      icon: "infrastructure-repair-icon"
    },
    {
      id: 3,
      description: "Distribución de agua de emergencia",
      actions: [
        "Establecer puntos de distribución estratégicos",
        "Movilizar camiones cisterna",
        "Instalar estaciones temporales de distribución"
      ].join(', '),
      objectives: "Asegurar el acceso a agua potable para toda la población",
      disasterType: 1,
      riskLevel: 2,
      icon: "emergency-water-distribution-icon"
    },
    {
      id: 4,
      description: "Campañas de concientización sobre el uso responsable del agua",
      actions: [
        "Difundir información a través de medios locales y redes sociales",
        "Promover prácticas de ahorro de agua en hogares e industrias",
        "Educar sobre la reutilización del agua para riego de plantas"
      ].join(', '),
      objectives: "Fomentar el uso responsable y sostenible del agua",
      disasterType: 1,
      riskLevel: 1,
      icon: "awareness-campaign-icon"
    },
    {
      id: 5,
      description: "Promover el almacenamiento de agua de lluvia",
      actions: [
        "Instalar sistemas temporales de recolección de agua",
        "Utilizar tanques portátiles o barriles para almacenar agua de lluvia",
        "Distribuir materiales necesarios para la recolección"
      ].join(', '),
      objectives: "Aumentar la disponibilidad de agua para usos no potables",
      disasterType: 1,
      riskLevel: 2,
      icon: "rainwater-collection-icon"
    },


    {
      id: 6,
      description: "Evacuación de zonas de riesgo",
      actions: [
        "Desalojar rápidamente a las personas de áreas propensas",
        "Establecer rutas de evacuación claras",
        "Proveer medios de transporte seguros"
      ].join(', '),
      objectives: "Proteger vidas humanas evitando la presencia en áreas inestables",
      disasterType: 2,
      riskLevel: 3,
      icon: "evacuation-icon"
    },
    {
      id: 7,
      description: "Monitoreo intensivo del terreno",
      actions: [
        "Instalar sensores móviles para detectar movimientos del suelo",
        "Realizar inspecciones visuales frecuentes",
        "Analizar datos para prever posibles derrumbes"
      ].join(', '),
      objectives: "Detectar movimientos inusuales y actuar preventivamente",
      disasterType: 2,
      riskLevel: 2,
      icon: "monitoring-icon"
    },
    {
      id: 8,
      description: "Instalación de barreras temporales",
      actions: [
        "Colocar sacos de arena en áreas críticas",
        "Utilizar materiales como madera para estabilizar el terreno",
        "Implementar barreras de retención temporales"
      ].join(', '),
      objectives: "Estabilizar el suelo y prevenir deslizamientos inmediatos",
      disasterType: 2,
      riskLevel: 1,
      icon: "temporary-barriers-icon"
    },
    {
      id: 9,
      description: "Refuerzo de estructuras temporales",
      actions: [
        "Instalar geotextiles en taludes inestables",
        "Colocar soportes metálicos para proporcionar estabilidad",
        "Reforzar áreas vulnerables con materiales de soporte"
      ].join(', '),
      objectives: "Proveer estabilidad adicional a estructuras y taludes",
      disasterType: 2,
      riskLevel: 2,
      icon: "structural-reinforcement-icon"
    },
    {
      id: 10,
      description: "Despejar vegetación y obstáculos",
      actions: [
        "Remover árboles y ramas que contribuyen al peso del suelo",
        "Eliminar escombros que puedan desestabilizar el terreno",
        "Mantener libres las áreas propensas a derrumbes"
      ].join(', '),
      objectives: "Reducir la carga sobre el suelo y prevenir desencadenantes externos",
      disasterType: 2,
      riskLevel: 1,
      icon: "vegetation-clearing-icon"
    },


    {
      id: 11,
      description: "Evacuación de áreas vulnerables",
      actions: [
        "Identificar comunidades cercanas al río en riesgo",
        "Organizar traslados seguros a zonas alejadas",
        "Proveer asistencia durante la evacuación"
      ].join(', '),
      objectives: "Proteger vidas humanas evacuando zonas en riesgo de desborde",
      disasterType: 3,
      riskLevel: 3,
      icon: "river-evacuation-icon"
    },
    {
      id: 12,
      description: "Construcción de barreras temporales",
      actions: [
        "Levantamiento de diques de emergencia",
        "Uso de sacos de arena para contener el flujo de agua",
        "Instalación de barreras portátiles en puntos críticos"
      ].join(', '),
      objectives: "Contener el flujo de agua y prevenir el desbordamiento",
      disasterType: 3,
      riskLevel: 2,
      icon: "temporary-barriers-river-icon"
    },
    {
      id: 13,
      description: "Activación de sistemas de alerta",
      actions: [
        "Emitir alertas a través de medios de comunicación",
        "Enviar notificaciones vía mensajes de texto y aplicaciones móviles",
        "Informar sobre medidas preventivas a la población"
      ].join(', '),
      objectives: "Informar a la comunidad sobre el riesgo inminente para tomar actions preventivas",
      disasterType: 3,
      riskLevel: 1,
      icon: "alert-system-icon"
    },
    {
      id: 14,
      description: "Despeje de canales y alcantarillas",
      actions: [
        "Limpiar riberas de ríos y canales",
        "Eliminar obstrucciones en sistemas de drenaje",
        "Mejorar el flujo del agua para reducir presión sobre el río"
      ].join(', '),
      objectives: "Facilitar el flujo del agua y prevenir desbordes por obstrucciones",
      disasterType: 3,
      riskLevel: 2,
      icon: "drainage-clearing-icon"
    },
    {
      id: 15,
      description: "Coordinación con equipos de respuesta",
      actions: [
        "Preparar equipos de emergencia para actuar rápidamente",
        "Asignar roles y responsabilidades claras",
        "Coordinar recursos para una respuesta eficiente"
      ].join(', '),
      objectives: "Asegurar una respuesta rápida y organizada ante el desborde",
      disasterType: 3,
      riskLevel: 1,
      icon: "response-coordination-icon"
    },


    {
      id: 16,
      description: "Evacuación inmediata de zonas de riesgo",
      actions: [
        "Desalojar urgentemente áreas identificadas como altamente susceptibles",
        "Establecer puntos de reunión seguros",
        "Proveer transporte adecuado para la evacuación"
      ].join(', '),
      objectives: "Proteger vidas humanas desalojando áreas en riesgo inminente",
      disasterType: 4,
      riskLevel: 3,
      icon: "landslide-evacuation-icon"
    },
    {
      id: 17,
      description: "Refuerzo de taludes",
      actions: [
        "Aplicar mantas de retención en taludes inestables",
        "Instalar geotextiles para proporcionar estabilidad",
        "Colocar soportes temporales para prevenir el deslizamiento"
      ].join(', '),
      objectives: "Proveer estabilidad adicional al terreno para prevenir deslizamientos",
      disasterType: 4,
      riskLevel: 2,
      icon: "slope-reinforcement-icon"
    },
    {
      id: 18,
      description: "Control del agua en el área",
      actions: [
        "Instalar sistemas de drenaje temporales",
        "Mejorar el drenaje existente para reducir la acumulación de agua",
        "Regular el flujo de agua para evitar la saturación del suelo"
      ].join(', '),
      objectives: "Prevenir la saturación del suelo que puede desencadenar deslizamientos",
      disasterType: 4,
      riskLevel: 1,
      icon: "water-control-icon"
    },
    {
      id: 19,
      description: "Inspección y mantenimiento de infraestructuras",
      actions: [
        "Revisar puentes y carreteras cercanas a taludes",
        "Asegurar que las edificaciones no contribuyan a la inestabilidad del terreno",
        "Realizar reparaciones rápidas en infraestructuras dañadas"
      ].join(', '),
      objectives: "Garantizar la seguridad de las infraestructuras y prevenir su contribución a deslizamientos",
      disasterType: 4,
      riskLevel: 2,
      icon: "infrastructure-inspection-icon"
    },
    {
      id: 20,
      description: "Comunicación y educación rápida",
      actions: [
        "Informar a la población sobre señales de alerta de deslizamientos",
        "Capacitar sobre procedimientos de seguridad",
        "Distribuir materiales educativos sobre prevención de deslizamientos"
      ].join(', '),
      objectives: "Empoderar a la comunidad para actuar de manera adecuada ante señales de riesgo",
      disasterType: 4,
      riskLevel: 1,
      icon: "education-communication-icon"
    },

    {
      id: 21,
      description: "Instalación de redes anti-granizo en áreas agrícolas",
      actions: [
        "Colocar coberturas protectoras sobre cultivos vulnerables",
        "Distribuir redes anti-granizo a agricultores",
        "Instalar estructuras temporales para sostener las redes"
      ].join(', '),
      objectives: "Minimizar el daño a los cultivos causado por el granizo",
      disasterType: 5,
      riskLevel: 3,
      icon: "hail-protection-icon"
    },
    {
      id: 22,
      description: "Protección de infraestructuras",
      actions: [
        "Asegurar techos y ventanas de edificios",
        "Instalar láminas protectoras temporales",
        "Reparar estructuras vulnerables rápidamente"
      ].join(', '),
      objectives: "Minimizar daños materiales en edificaciones causados por el granizo",
      disasterType: 5,
      riskLevel: 2,
      icon: "infrastructure-protection-icon"
    },
    {
      id: 23,
      description: "Cobertura de vehículos",
      actions: [
        "Proteger vehículos con lonas",
        "Trasladar vehículos a garajes o estacionamientos cubiertos",
        "Utilizar protectores específicos para parabrisas y carrocerías"
      ].join(', '),
      objectives: "Prevenir daños en vehículos debido al impacto del granizo",
      disasterType: 5,
      riskLevel: 1,
      icon: "vehicle-coverage-icon"
    },
    {
      id: 24,
      description: "Refuerzo de sistemas de alerta",
      actions: [
        "Activar sistemas de monitoreo meteorológico",
        "Verificar el funcionamiento de alarmas y notificaciones",
        "Emitir alertas tempranas sobre la proximidad de granizadas"
      ].join(', '),
      objectives: "Informar oportunamente a la población sobre la amenaza de granizadas",
      disasterType: 5,
      riskLevel: 2,
      icon: "alert-system-hail-icon"
    },
    {
      id: 25,
      description: "Distribución de materiales de protección",
      actions: [
        "Proveer lonas, mallas y coberturas temporales a agricultores y propietarios",
        "Distribuir kits de protección para cultivos y edificaciones",
        "Facilitar el acceso a materiales necesarios para proteger propiedades"
      ].join(', '),
      objectives: "Asegurar que las comunidades tengan los recursos necesarios para protegerse del granizo",
      disasterType: 5,
      riskLevel: 1,
      icon: "protection-materials-icon"
    },

    {
      id: 26,
      description: "Evacuación de zonas de alto riesgo",
      actions: [
        "Identificar áreas vulnerables a ambos fenómenos",
        "Organizar traslados seguros a zonas alejadas",
        "Proveer asistencia durante la evacuación"
      ].join(', '),
      objectives: "Proteger vidas humanas desalojando áreas en riesgo de granizada e inundación",
      disasterType: 6,
      riskLevel: 3,
      icon: "combined-evacuation-icon"
    },
    {
      id: 27,
      description: "Fortalecimiento de barreras temporales",
      actions: [
        "Utilizar sacos de arena para proteger áreas propensas a inundaciones",
        "Instalar barreras portátiles que también protejan contra granizadas",
        "Reforzar diques de emergencia para contener el agua"
      ].join(', '),
      objectives: "Contener el agua y proteger infraestructuras contra ambos fenómenos",
      disasterType: 6,
      riskLevel: 2,
      icon: "combined-barriers-icon"
    },
    {
      id: 28,
      description: "Activación de planes de emergencia integrados",
      actions: [
        "Coordinar actions para enfrentar granizadas e inundaciones simultáneamente",
        "Movilizar equipos de rescate y recursos necesarios",
        "Establecer comunicación constante con la población sobre las medidas a seguir"
      ].join(', '),
      objectives: "Asegurar una respuesta cohesiva y eficiente ante ambos desastres",
      disasterType: 6,
      riskLevel: 1,
      icon: "emergency-plan-icon"
    },
    {
      id: 29,
      description: "Protección de infraestructuras críticas",
      actions: [
        "Asegurar instalaciones eléctricas y sanitarias",
        "Instalar coberturas protectoras sobre equipos esenciales",
        "Reforzar estructuras para mantener servicios vitales operativos"
      ].join(', '),
      objectives: "Mantener servicios esenciales durante y después de los desastres",
      disasterType: 6,
      riskLevel: 2,
      icon: "critical-infrastructure-protection-icon"
    },
    {
      id: 30,
      description: "Comunicación efectiva y continua",
      actions: [
        "Mantener informada a la población a través de múltiples canales",
        "Proveer actualizaciones regulares sobre el desarrollo de los eventos",
        "Instruir sobre medidas preventivas y procedimientos de seguridad"
      ].join(', '),
      objectives: "Garantizar que la población esté preparada para actuar de manera adecuada y oportuna",
      disasterType: 6,
      riskLevel: 1,
      icon: "effective-communication-icon"
    },


    {
      id: 31,
      description: "Evacuación de zonas vulnerables",
      actions: [
        "Organizar la evacuación inmediata de áreas bajas propensas a inundaciones",
        "Establecer rutas de evacuación claras y seguras",
        "Proveer medios de transporte adecuados para la evacuación"
      ].join(', '),
      objectives: "Proteger vidas humanas desalojando áreas en riesgo de inundación",
      disasterType: 7,
      riskLevel: 3,
      icon: "flood-evacuation-icon"
    },
    {
      id: 32,
      description: "Construcción de barreras temporales",
      actions: [
        "Levantamiento de diques de emergencia",
        "Uso de barreras portátiles para contener el flujo de agua",
        "Instalación de sacos de arena en puntos críticos"
      ].join(', '),
      objectives: "Contener el flujo de agua y proteger áreas habitadas de la inundación",
      disasterType: 7,
      riskLevel: 2,
      icon: "flood-barriers-icon"
    },
    {
      id: 33,
      description: "Despeje de canales y sistemas de drenaje",
      actions: [
        "Limpiar y desobstruir alcantarillas, canales y drenajes",
        "Eliminar escombros que puedan bloquear el flujo del agua",
        "Mantener sistemas de drenaje eficientes para facilitar el desagüe"
      ].join(', '),
      objectives: "Mejorar el flujo del agua y reducir la posibilidad de desbordes",
      disasterType: 7,
      riskLevel: 1,
      icon: "drainage-clearance-icon"
    },
    {
      id: 34,
      description: "Protección de infraestructuras y propiedades",
      actions: [
        "Elevar objetos de valor y equipamiento",
        "Asegurar edificaciones con materiales impermeables",
        "Instalar elevaciones temporales para instalaciones críticas"
      ].join(', '),
      objectives: "Prevenir daños materiales y asegurar la funcionalidad de infraestructuras esenciales",
      disasterType: 7,
      riskLevel: 2,
      icon: "infrastructure-protection-flood-icon"
    },
    {
      id: 35,
      description: "Activación de equipos de respuesta rápida",
      actions: [
        "Desplegar personal y recursos para la mitigación",
        "Coordinar esfuerzos de rescate y asistencia",
        "Proveer apoyo logístico a las comunidades afectadas"
      ].join(', '),
      objectives: "Asegurar una respuesta eficiente y coordinada ante la inundación",
      disasterType: 7,
      riskLevel: 1,
      icon: "rapid-response-icon"
    },

    {
      id: 36,
      description: "Evacuación preventiva",
      actions: [
        "Desalojar rápidamente las zonas más afectadas por la riada",
        "Identificar y movilizar a los residentes de áreas críticas",
        "Establecer puntos de reunión seguros antes de que la riada alcance su punto máximo"
      ].join(', '),
      objectives: "Proteger vidas humanas mediante la evacuación anticipada",
      disasterType: 8,
      riskLevel: 3,
      icon: "flood-wave-evacuation-icon"
    },
    {
      id: 37,
      description: "Construcción de barreras temporales",
      actions: [
        "Utilizar sacos de arena para contener el flujo de agua",
        "Levantamiento de diques de emergencia",
        "Instalar barreras portátiles en áreas propensas a inundación"
      ].join(', '),
      objectives: "Contener el flujo de agua y prevenir inundaciones severas",
      disasterType: 8,
      riskLevel: 2,
      icon: "riad-barriers-icon"
    },
    {
      id: 38,
      description: "Protección de infraestructuras críticas",
      actions: [
        "Asegurar puentes y carreteras cercanas al río",
        "Instalar coberturas protectoras sobre edificaciones cercanas",
        "Reforzar estructuras existentes para resistir el flujo de agua"
      ].join(', '),
      objectives: "Mantener operativas las infraestructuras esenciales durante la riada",
      disasterType: 8,
      riskLevel: 1,
      icon: "critical-infrastructure-riad-icon"
    },
    {
      id: 39,
      description: "Monitoreo intensivo de niveles de agua",
      actions: [
        "Vigilar constantemente los niveles de los ríos mediante estaciones móviles",
        "Analizar datos en tiempo real para prever crecidas",
        "Actualizar pronósticos y alertas basadas en el monitoreo continuo"
      ].join(', '),
      objectives: "Prever crecidas del río y tomar decisiones informadas para mitigar el impacto",
      disasterType: 8,
      riskLevel: 2,
      icon: "water-level-monitoring-icon"
    },
    {
      id: 40,
      description: "Activación de alertas tempranas",
      actions: [
        "Informar a la población sobre el aumento del caudal del río",
        "Emitir alertas a través de medios de comunicación locales y dispositivos móviles",
        "Proveer instrucciones claras sobre medidas preventivas a seguir"
      ].join(', '),
      objectives: "Permitir que las personas tomen medidas preventivas y se preparen para la evacuación si es necesario",
      disasterType: 8,
      riskLevel: 1,
      icon: "early-warning-alert-icon"
    }
  ];

  const icons = [
    "about",
    "black-cat-statue",
    "briefcase",
    "category",
    "contact-notebook",
    "contact",
    "crystal-ball"    ,
    "date",
    "emergency-kit",
    "engineer",
    "facebook",
    "faucet",
    "fishing",
    "forest-burn",
    "github",
    "google",
    "heat-wave",
    "history",
    "home",
    "hurricane",
    "instagram",
    "landslide",
    "linkedin",
    "luggage-insurance",
    "mail",
    "message",
    "mitigations",
    "no-water",
    "profile",
    "rain",
    "rocket",
    "scientist",
    "send",
    "shield",
    "starfall",
    "stock-out",
    "storm",
    "thunderstorm",
    "toucan-tropical",
    "twitch",
    "view-hide",
    "view-show",
    "x"
  ]

  await db.insert( Role ).values( roles )
  await db.insert( User ).values( users )
  await db.insert( DisasterType ).values( disasterTypes )
  await db.insert( MitigationAction ).values( mitigationActions )
  await db.insert( OurIcons ).values(
    icons.map( ( icon, index ) => {
      return {
        id: index,
        name: icon
      }
    } )
  )
}
