export interface ServiceData {
  id: string;
  name: string;
  title: string;
  description: string;
  features: string[];
  useCases: string[];
  benefits: string[];
  technologies: string[];
  img: string;
  bg: string;
}

export const servicesData: ServiceData[] = [
  {
    id: 'software-a-medida',
    name: 'Software a la medida',
    title: 'Desarrollo de Software Personalizado',
    description: 'Creamos soluciones de software completamente personalizadas que se adaptan perfectamente a las necesidades específicas de tu negocio. Nuestro enfoque se centra en entender tus procesos únicos y desarrollar herramientas que optimicen tu operación.',
    features: [
      'Análisis detallado de requerimientos',
      'Diseño de arquitectura escalable',
      'Desarrollo con metodologías ágiles',
      'Integración con sistemas existentes',
      'Soporte y mantenimiento continuo',
      'Documentación técnica completa'
    ],
    useCases: [
      'Sistemas de gestión empresarial (ERP)',
      'Plataformas de comercio electrónico',
      'Aplicaciones de gestión de inventarios',
      'Sistemas de facturación y contabilidad',
      'Herramientas de automatización de procesos',
      'Plataformas de gestión de clientes (CRM)'
    ],
    benefits: [
      'Solución 100% adaptada a tu negocio',
      'Mayor eficiencia operativa',
      'Reducción de costos a largo plazo',
      'Ventaja competitiva en el mercado',
      'Escalabilidad según crecimiento',
      'Control total sobre la funcionalidad'
    ],
    technologies: ['React', 'Node.js', 'Python', 'Java', '.NET', 'PostgreSQL', 'MongoDB', 'AWS'],
    img: '/src/ui/assets/images/pricing-illustration.svg',
    bg: '/src/ui/assets/images/pricing-illustration.svg'
  },
  {
    id: 'desarrollo-app',
    name: 'Desarrollo de App',
    title: 'Aplicaciones Móviles Nativas y Multiplataforma',
    description: 'Desarrollamos aplicaciones móviles innovadoras para iOS y Android que conectan tu negocio con tus clientes de manera directa y efectiva. Desde apps nativas hasta soluciones multiplataforma.',
    features: [
      'Desarrollo nativo iOS y Android',
      'Aplicaciones multiplataforma con React Native',
      'Diseño UX/UI optimizado para móviles',
      'Integración con APIs y servicios web',
      'Notificaciones push personalizadas',
      'Publicación en App Store y Google Play'
    ],
    useCases: [
      'Apps de comercio electrónico',
      'Aplicaciones de delivery y logística',
      'Plataformas de servicios profesionales',
      'Apps educativas y de capacitación',
      'Aplicaciones de salud y bienestar',
      'Herramientas de productividad empresarial'
    ],
    benefits: [
      'Acceso directo a clientes móviles',
      'Mayor engagement y retención',
      'Funcionalidades offline disponibles',
      'Aprovechamiento de características del dispositivo',
      'Presencia en tiendas de aplicaciones',
      'Monetización a través de la app'
    ],
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'GraphQL', 'Redux'],
    img: '/src/ui/assets/images/pricing-illustration.svg',
    bg: '/src/ui/assets/images/pricing-illustration.svg'
  },
  {
    id: 'consultoria-tecnologica',
    name: 'Consultoría tecnológica',
    title: 'Asesoría Estratégica en Tecnología',
    description: 'Ofrecemos consultoría especializada para ayudar a tu empresa a tomar las mejores decisiones tecnológicas. Analizamos tu infraestructura actual y diseñamos una hoja de ruta para la transformación digital.',
    features: [
      'Auditoría de infraestructura tecnológica',
      'Análisis de procesos y sistemas actuales',
      'Diseño de arquitectura tecnológica',
      'Planificación de migración a la nube',
      'Evaluación de herramientas y plataformas',
      'Capacitación del equipo técnico'
    ],
    useCases: [
      'Transformación digital empresarial',
      'Migración de sistemas legacy',
      'Optimización de infraestructura IT',
      'Implementación de DevOps',
      'Adopción de tecnologías emergentes',
      'Mejora de procesos de desarrollo'
    ],
    benefits: [
      'Decisiones tecnológicas informadas',
      'Reducción de riesgos en proyectos',
      'Optimización de recursos tecnológicos',
      'Mejora en la eficiencia operativa',
      'Preparación para el futuro digital',
      'ROI mejorado en inversiones IT'
    ],
    technologies: ['Cloud Computing', 'DevOps', 'Microservicios', 'Kubernetes', 'Docker', 'CI/CD'],
    img: '/src/ui/assets/images/pricing-illustration.svg',
    bg: '/src/ui/assets/images/pricing-illustration.svg'
  },
  {
    id: 'desarrollo-paginas-web',
    name: 'Desarrollo páginas web',
    title: 'Sitios Web Modernos y Responsivos',
    description: 'Creamos sitios web profesionales que combinan diseño atractivo con funcionalidad avanzada. Desde páginas corporativas hasta plataformas web complejas, optimizadas para todos los dispositivos.',
    features: [
      'Diseño responsivo y mobile-first',
      'Optimización SEO avanzada',
      'Velocidad de carga optimizada',
      'Integración con CMS',
      'Formularios y funcionalidades interactivas',
      'Analíticas y seguimiento de conversiones'
    ],
    useCases: [
      'Sitios web corporativos',
      'Portafolios profesionales',
      'Tiendas en línea (e-commerce)',
      'Blogs y sitios de contenido',
      'Landing pages para campañas',
      'Plataformas web de servicios'
    ],
    benefits: [
      'Presencia profesional en línea',
      'Mayor visibilidad en buscadores',
      'Generación de leads cualificados',
      'Credibilidad y confianza del cliente',
      'Accesibilidad desde cualquier dispositivo',
      'Herramienta de marketing 24/7'
    ],
    technologies: ['React', 'Next.js', 'WordPress', 'Shopify', 'Tailwind CSS', 'TypeScript'],
    img: '/src/ui/assets/images/pricing-illustration.svg',
    bg: '/src/ui/assets/images/escritorio.jpg'
  },
  {
    id: 'seguridad-datos',
    name: 'Seguridad de datos',
    title: 'Protección Integral de Información',
    description: 'Implementamos soluciones de seguridad robustas para proteger la información crítica de tu empresa. Desde auditorías de seguridad hasta implementación de protocolos de protección de datos.',
    features: [
      'Auditorías de seguridad integral',
      'Implementación de cifrado de datos',
      'Gestión de accesos y permisos',
      'Monitoreo de amenazas en tiempo real',
      'Backup y recuperación de datos',
      'Cumplimiento de normativas (GDPR, LOPD)'
    ],
    useCases: [
      'Protección de datos empresariales',
      'Cumplimiento normativo',
      'Prevención de ciberataques',
      'Seguridad en aplicaciones web',
      'Protección de bases de datos',
      'Implementación de políticas de seguridad'
    ],
    benefits: [
      'Protección contra pérdida de datos',
      'Cumplimiento legal garantizado',
      'Confianza de clientes y socios',
      'Reducción de riesgos operativos',
      'Continuidad del negocio asegurada',
      'Reputación empresarial protegida'
    ],
    technologies: ['SSL/TLS', 'OAuth', 'JWT', 'Firewall', 'VPN', 'Encryption', 'SIEM'],
    img: '/src/ui/assets/images/pricing-illustration.svg',
    bg: '/src/ui/assets/images/pricing-illustration.svg'
  },
  {
    id: 'stream-service',
    name: 'Stream Service',
    title: 'Servicios de Streaming y Transmisión',
    description: 'Desarrollamos plataformas de streaming personalizadas para transmisión de video y audio en tiempo real. Soluciones escalables para eventos, educación y entretenimiento.',
    features: [
      'Streaming de video en alta calidad',
      'Transmisión en vivo y bajo demanda',
      'CDN global para baja latencia',
      'Chat y interacción en tiempo real',
      'Monetización y suscripciones',
      'Analíticas de audiencia detalladas'
    ],
    useCases: [
      'Plataformas educativas online',
      'Eventos corporativos virtuales',
      'Entretenimiento y gaming',
      'Conferencias y webinars',
      'Servicios de video bajo demanda',
      'Transmisiones deportivas'
    ],
    benefits: [
      'Alcance global de audiencia',
      'Reducción de costos de eventos',
      'Interacción directa con usuarios',
      'Monetización de contenido',
      'Escalabilidad automática',
      'Métricas detalladas de engagement'
    ],
    technologies: ['WebRTC', 'HLS', 'DASH', 'FFmpeg', 'AWS MediaLive', 'CDN', 'Socket.io'],
    img: '/src/ui/assets/images/pricing-illustration.svg',
    bg: '/src/ui/assets/images/pricing-illustration.svg'
  },
  {
    id: 'renta-servidores',
    name: 'Renta de Servidores',
    title: 'Infraestructura de Servidores Gestionada',
    description: 'Ofrecemos servicios de alquiler de servidores con gestión completa, desde servidores dedicados hasta soluciones en la nube. Infraestructura confiable y escalable para tu negocio.',
    features: [
      'Servidores dedicados y VPS',
      'Configuración personalizada',
      'Monitoreo 24/7',
      'Backup automático diario',
      'Soporte técnico especializado',
      'Escalabilidad bajo demanda'
    ],
    useCases: [
      'Hosting de aplicaciones web',
      'Bases de datos empresariales',
      'Servidores de desarrollo y testing',
      'Infraestructura para e-commerce',
      'Servicios de backup y almacenamiento',
      'Entornos de alta disponibilidad'
    ],
    benefits: [
      'Reducción de costos de infraestructura',
      'Alta disponibilidad garantizada',
      'Escalabilidad según necesidades',
      'Soporte técnico especializado',
      'Seguridad y backup incluidos',
      'Enfoque en el core business'
    ],
    technologies: ['Linux', 'Windows Server', 'Docker', 'Kubernetes', 'Nginx', 'Apache', 'MySQL'],
    img: '/src/ui/assets/images/pricing-illustration.svg',
    bg: '/src/ui/assets/images/pricing-illustration.svg'
  },
  {
    id: 'infraestructura-servicio',
    name: 'Infraestructura como servicio',
    title: 'IaaS - Infraestructura Completa en la Nube',
    description: 'Proporcionamos infraestructura completa como servicio, incluyendo servidores virtuales, almacenamiento, redes y servicios de gestión. Soluciones flexibles y escalables en la nube.',
    features: [
      'Servidores virtuales escalables',
      'Almacenamiento distribuido',
      'Redes privadas virtuales',
      'Load balancers y CDN',
      'Gestión automatizada',
      'API para automatización'
    ],
    useCases: [
      'Migración completa a la nube',
      'Infraestructura para startups',
      'Entornos de desarrollo distribuidos',
      'Aplicaciones de alta demanda',
      'Disaster recovery',
      'Infraestructura híbrida'
    ],
    benefits: [
      'Pago por uso real',
      'Escalabilidad instantánea',
      'Alta disponibilidad',
      'Reducción de CAPEX',
      'Gestión simplificada',
      'Acceso global'
    ],
    technologies: ['AWS', 'Azure', 'Google Cloud', 'Terraform', 'Ansible', 'Prometheus', 'Grafana'],
    img: '/src/ui/assets/images/pricing-illustration.svg',
    bg: '/src/ui/assets/images/pricing-illustration.svg'
  }
];

export const getServiceById = (id: string): ServiceData | undefined => {
  return servicesData.find(service => service.id === id);
};

export const getAllServices = (): ServiceData[] => {
  return servicesData;
};

