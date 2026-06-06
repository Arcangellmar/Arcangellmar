import { motion } from 'framer-motion';
import { Bot, Code2, DatabaseZap, PlugZap, Smartphone, Wrench } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Code2 className="text-primary-400" size={28} />,
      title: 'Desarrollo de software a medida',
      desc: 'Sistemas web empresariales, paneles administrativos, plataformas internas y soluciones digitales creadas para procesos reales de negocio.',
      terms: ['sistemas web', 'software empresarial', 'aplicaciones a medida'],
    },
    {
      icon: <Smartphone className="text-primary-400" size={28} />,
      title: 'Desarrollo de apps móviles',
      desc: 'Apps Android e iOS con Flutter, APIs robustas, publicación en tiendas y arquitectura preparada para crecer sin rehacer el producto.',
      terms: ['apps moviles', 'Flutter', 'Android e iOS'],
    },
    {
      icon: <PlugZap className="text-primary-400" size={28} />,
      title: 'APIs e integración de sistemas',
      desc: 'Backends .NET, servicios REST, integraciones con pasarelas, ERPs, CRMs, nubes, bases de datos y sistemas existentes.',
      terms: ['API REST', '.NET C#', 'integraciones'],
    },
    {
      icon: <DatabaseZap className="text-primary-400" size={28} />,
      title: 'Automatización de procesos',
      desc: 'Herramientas para reducir tareas manuales, validar datos, controlar despliegues, generar reportes y ordenar operaciones repetitivas.',
      terms: ['automatizacion', 'DevOps', 'SQL Server'],
    },
    {
      icon: <Wrench className="text-primary-400" size={28} />,
      title: 'Mantenimiento y modernización',
      desc: 'Mejora de sistemas heredados, refactorización, corrección de errores, optimización de rendimiento y evolución de productos en producción.',
      terms: ['mantenimiento .NET', 'modernizacion', 'performance'],
    },
    {
      icon: <Bot className="text-primary-400" size={28} />,
      title: 'IA aplicada a negocios',
      desc: 'Automatizaciones inteligentes, asistentes internos, análisis de información e incorporación de IA en flujos donde aporte valor medible.',
      terms: ['IA para empresas', 'automatizacion con IA', 'asistentes'],
    },
  ];

  return (
    <section id="services" className="py-24 bg-dark-800/30">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="max-w-3xl mb-14">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary-400 font-semibold"
          >
            Servicios de desarrollo
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mt-3 mb-4"
          >
            Construyo sistemas web, apps móviles y automatizaciones para empresas
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg leading-relaxed"
          >
            Si tu negocio necesita dejar hojas de cálculo, conectar plataformas, lanzar una app o mejorar un sistema existente, puedo ayudarte a diseñar, desarrollar y mantener una solución estable.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: idx * 0.06 }}
              className="glass-effect p-6 rounded-2xl hover:border-primary-500/40 transition-colors"
            >
              <div className="w-12 h-12 bg-dark-900 rounded-xl flex items-center justify-center mb-5">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed mb-5">{service.desc}</p>
              <div className="flex flex-wrap gap-2">
                {service.terms.map((term) => (
                  <span key={term} className="text-xs font-medium px-2 py-1 bg-white/5 border border-white/10 rounded-md text-gray-300">
                    {term}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
