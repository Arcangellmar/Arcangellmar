import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Monitor, Smartphone, Server } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Meraki App",
      shortDesc: "Aplicación Web y Mobile para asistencia mutua en emergencias.",
      description: "Aplicación integral Web y Mobile (Android e iOS) que conecta de manera eficiente a personas con la posibilidad de ayudar, con aquellas que se encuentran en situaciones vulnerables o con problemas.",
      problem: "Facilitar una red de asistencia comunitaria rápida y efectiva mediante una plataforma altamente disponible impulsada por la nube.",
      features: [
        "Desarrollo completo de API REST escalable",
        "Implementación estratégica de servicios en la nube de AWS (RDS, S3, KMS)",
        "Creación de aplicación móvil nativa con Flutter para Android e iOS",
        "Publicación completa y automatizada en las tiendas oficiales (App Store y Play Store)"
      ],
      technologies: ["Flutter", "C#", "SQL Server", "AWS (RDS, S3, KMS)"],
      architecture: "Arquitectura monolítica/microservicios apoyada sobre API REST en C# y aprovisionamiento de recursos e infraestructura en AWS.",
      type: "Aplicación Web y Mobile",
      image: "https://arcangellmar.github.io/Arcangellmar/meraki-mockup.png",
      link: "https://meraki-app.com/",
      impact: "Se proporcionó una red solidaria estable, sumamente accesible en múltiples portales y dispositivos."
    },
    {
      id: 2,
      title: "Linseg Smart",
      shortDesc: "Aplicación móvil IoT multiplataforma para control de cercos eléctricos.",
      description: "Aplicación móvil enfocada en el control remoto de cercos eléctricos mediante el uso de potentes servicios AWS. Utiliza un Message Broker para recibir la conexión de los dispositivos y despachar comandos eficientemente a las placas hardware en el hogar.",
      problem: "Se requería un sistema de bajísima latencia para enviar/recibir comandos de las placas de forma absolutamente segura y permanente.",
      features: [
        "Desarrollo de aplicación mobile moderna con Flutter",
        "Publicación exitosa para Android (Play Store) e iOS (App Store)",
        "Integración exhaustiva con módulo IoT (MQTT/Broker)",
        "Validación y enrolamiento asíncrono de dispositivos a las cuentas de los usuarios"
      ],
      technologies: ["Flutter", "AWS", "IoT", "Message Brokers"],
      architecture: "Flujo de comunicación basado firmemente en dispositivos conectados a Brokers e Infraestructura IoT en AWS mediante las interfaces móviles.",
      type: "Aplicación Móvil & IoT",
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=2000&auto=format&fit=crop",
      link: "https://play.google.com/store/apps/details?id=com.linseg.gestionalarmas.gestion_de_alarmas&hl=es_PE",
      impact: "Adopción exitosa materializada en más de +1,000 descargas, posibilitando a cientos de hogares gestionar su seguridad en línea."
    },
    {
      id: 3,
      title: "Automatización de Base de Datos",
      shortDesc: "Sistema unificado y controlado de despliegues SQL multi-gestor.",
      description: "Desarrollo proactivo de un sistema para asegurar el flujo de despliegue en ambientes multi-gestor. Cuenta con control riguroso de cambios, rastreo profundo de versiones y logs contra errores.",
      problem: "Eliminar el factor humano en pases a producción y prevenir en tu totalidad la ejecución de scripts huérfanos o duplicados.",
      features: [
        "Registro y control de versiones por script de base de datos",
        "Soporte dinámico para ejecución en varios gestores relacionales",
        "Mecanismos automatizados de contención y reintento en caso de fallos",
        "Trazabilidad unificada que elimina scripts duplicados históricamente"
      ],
      technologies: ["C#", ".NET", "SQL", "DevOps"],
      architecture: "Motor local altamente configurable que funciona en las tuberías CI/CD o en máquinas standalone para evaluar e inyectar deltas en bases de datos relacionales sin fricción.",
      type: "Herramienta DevOps",
      image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2000&auto=format&fit=crop",
      link: "https://github.com/Arcangellmar/AutomatizacionScriptsBD",
      impact: "Redujo drásticamente las incidencias pre/post lanzamiento garantizando la integridad de los ambientes críticos."
    },
    {
      id: 4,
      title: "Consulta Vehicular",
      shortDesc: "App de consulta instantánea para flujos vehiculares con monetización propia.",
      description: "Aplicación móvil optimizada robustamente usando Clean Architecture en Flutter, enfocada específicamente a la consulta de información vehicular utilizando una experiencia de usuario rápida y fluida.",
      problem: "Requerimiento de equilibrar alta demanda de consultas contra un modelo robusto de ingresos en un entorno nativo limpio y escalable.",
      features: [
        "Integración de Base de datos inteligente con Firebase",
        "Estructuración global sostenida sobre principios de Clean Architecture",
        "Implementación directa de servicios de suscripción nativa",
        "Capacidades de monetización (pago por uso) incorporando anuncios in-app"
      ],
      technologies: ["Flutter", "Firebase", "Clean Architecture", "In-App Purchases"],
      architecture: "Patrones arquitectónicos bajo estándares de Clean Architecture en Flutter, interactuando en tiempo real con Firebase Cloud Services como capa de datos.",
      type: "Aplicación Móvil",
      image: "https://images.unsplash.com/photo-1494905998402-395d579af36f?q=80&w=2000&auto=format&fit=crop",
      link: "https://play.google.com/store/apps/details?id=com.arcangellmar.consultar_vehiculo.consultar_vehiculo&hl=es_PE",
      impact: "Posibilitó un negocio sustentable mediante suscripción recurrente y optimización de uso de APIs garantizando una aplicación limpia y sin crasheos."
    }
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Proyectos <span className="text-primary-400">Destacados</span>
          </motion.h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Casos reales de desarrollo de sistemas web, apps móviles, APIs, IoT y automatización para negocios.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className="glass-effect rounded-2xl overflow-hidden cursor-pointer group hover:border-primary-500/50 transition-colors"
            >
              <div className="h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-dark-900/20 group-hover:bg-transparent transition-colors z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.shortDesc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map(tech => (
                    <span key={tech} className="text-xs font-medium px-2 py-1 bg-white/5 border border-white/10 rounded-md text-gray-300">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-xs font-medium px-2 py-1 bg-white/5 border border-white/10 rounded-md text-gray-300">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-dark-900/80 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl max-h-full overflow-y-auto bg-dark-800 border border-white/10 rounded-2xl shadow-2xl z-10"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/20 hover:bg-black/40 text-white transition-colors z-20"
              >
                <X size={20} />
              </button>

              <div className="h-64 md:h-80 relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-800 to-transparent" />
              </div>

              <div className="p-6 md:p-10 -mt-16 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
                  <div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">{selectedProject.title}</h2>
                    <div className="flex items-center gap-2 text-primary-400 font-medium">
                      {selectedProject.type.includes('Móvil') ? <Smartphone size={18} /> : <Monitor size={18} />}
                      <span>{selectedProject.type}</span>
                    </div>
                  </div>

                  {selectedProject.link !== '#' && (
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary-600 hover:bg-primary-500 text-white font-medium shadow-lg transition-colors"
                    >
                      Ver Proyecto <ExternalLink size={18} />
                    </a>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                  <div className="md:col-span-2 space-y-8">
                    <section>
                      <h4 className="text-xl font-semibold text-white mb-3">Descripción General</h4>
                      <p className="text-gray-300 leading-relaxed">{selectedProject.description}</p>
                    </section>

                    <section>
                      <h4 className="text-xl font-semibold text-white mb-3">El Problema</h4>
                      <p className="text-gray-300 leading-relaxed">{selectedProject.problem}</p>
                    </section>

                    <section>
                      <h4 className="text-xl font-semibold text-white mb-3">Funcionalidades Core</h4>
                      <ul className="list-disc list-inside space-y-2 text-gray-300">
                        {selectedProject.features.map(f => (
                          <li key={f}>{f}</li>
                        ))}
                      </ul>
                    </section>
                  </div>

                  <div className="space-y-8 bg-dark-900/50 p-6 rounded-xl border border-white/5 h-fit">
                    <section>
                      <h4 className="flex items-center gap-2 text-lg font-semibold text-white mb-4">
                        <Server size={20} className="text-primary-400" /> Tecnologías
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map(tech => (
                          <span key={tech} className="text-sm px-3 py-1 bg-white/5 border border-white/10 rounded-md text-gray-300">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </section>

                    <section>
                      <h4 className="text-lg font-semibold text-white mb-3">Arquitectura</h4>
                      <p className="text-sm text-gray-400 leading-relaxed">{selectedProject.architecture}</p>
                    </section>

                    <section>
                      <h4 className="text-lg font-semibold text-white mb-3">Impacto</h4>
                      <p className="text-sm text-gray-400 leading-relaxed">{selectedProject.impact}</p>
                    </section>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
