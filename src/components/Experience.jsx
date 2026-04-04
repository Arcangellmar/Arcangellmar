import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      title: 'Analista de Desarrollo e Integración',
      company: 'Claro Perú (América Móvil Perú)',
      period: 'Mayo 2024 – Presente',
      description: 'Telco multinacional con presencia en 27 países. Analicé, mantuve y evolucioné el portafolio de productos digitales bajo el framework de Claro Perú.',
      achievements: [
        'Implementé un sistema de gestión de proyectos IoT, optimizando la administración de 10+ iniciativas.',
        'Diseñe e implementé una aplicación interna de control de asistencia para +3200 colaboradores.',
        'Identifiqué errores críticos en aplicaciones móviles, logrando una mejora del 30% en su estabilidad.'
      ],
      stack: ['C#', 'SQL Server', 'Android Nativo', 'Clean Architecture', 'Angular', 'Unit Testing', 'DI']
    },
    {
      title: 'Líder Técnico Mobile',
      company: 'Fractal',
      period: 'Abril 2023 – Mayo 2024',
      description: 'Fábrica de software y soluciones de planillas. Lideré un equipo de 5 desarrolladores en la creación de soluciones basadas en AWS.',
      achievements: [
        'Encabecé el diseño de arquitectura y funcionalidades de Meraki App, conectando a +2,000 usuarios.',
        'Desarrollé Linseg Smart, solución IoT para control de cercos eléctricos, con +1,000 descargas.',
        'Implementé arquitectura limpia en aplicaciones móviles, mejorando el desarrollo progresivo.',
        'Implementé servicios S3, bases de datos RDS y cifrado KMS, empleando LAMBDA y API GATEWAY.'
      ],
      stack: ['Flutter', 'C#', 'MySQL', 'Clean Architecture', 'Razor']
    },
    {
      title: 'Full Stack Developer',
      company: 'Fractal',
      period: 'Abril 2022 – Abril 2023',
      description: 'Fábrica de software y soluciones de planillas. Mejoré y propuse optimizaciones sobre el portafolio de aplicaciones existentes y nuevas.',
      achievements: [
        'Optimicé el portafolio de aplicaciones aplicando Clean Architecture a soluciones en Flutter.',
        'Desarrollé y mantuve APIs REST en C# y front-end con Razor para 5+ clientes corporativos.',
        'Implementé mejoras en aplicaciones móviles, incrementando la satisfacción de usuarios un 20%.'
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-dark-800/30">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-16 text-center"
        >
          Experiencia <span className="text-primary-400">Profesional</span>
        </motion.h2>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
          {experiences.map((exp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              {/* Timeline dot */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-dark-900 bg-primary-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 box-content" />

              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-effect p-6 rounded-2xl hover:bg-white/5 transition-colors">
                <div className="flex flex-col mb-4">
                  <span className="text-primary-400 font-semibold">{exp.period}</span>
                  <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                  <span className="text-gray-400">{exp.company}</span>
                </div>
                <p className="text-gray-300 leading-relaxed mb-4">
                  {exp.description}
                </p>
                <ul className="list-disc list-inside text-gray-400 space-y-1 mb-4 text-sm">
                  {exp.achievements.map((achieve, i) => (
                    <li key={i}>{achieve}</li>
                  ))}
                </ul>
                {exp.stack && exp.stack.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-white/5">
                    {exp.stack.map(tech => (
                      <span key={tech} className="text-xs font-semibold px-2 py-1 bg-primary-500/10 text-primary-400 border border-primary-500/20 rounded-md">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
