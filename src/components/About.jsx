import { motion } from 'framer-motion';
import { Code2, LayoutTemplate, Server, Smartphone } from 'lucide-react';

const About = () => {
  const focuses = [
    {
      icon: <Server className="text-primary-400" size={32} />,
      title: "Arquitectura Backend",
      desc: "Diseño robusto con .NET, C# y SQL Server preparado para sistemas empresariales."
    },
    {
      icon: <Code2 className="text-primary-400" size={32} />,
      title: "Desarrollo Full-Stack",
      desc: "Creación de productos completos, desde la base de datos hasta la experiencia web."
    },
    {
      icon: <Smartphone className="text-primary-400" size={32} />,
      title: "Mobile & APIs",
      desc: "Apps Flutter para Android e iOS sustentadas por APIs seguras y escalables."
    },
    {
      icon: <LayoutTemplate className="text-primary-400" size={32} />,
      title: "Optimización de Sistemas",
      desc: "Modernización, mantenimiento y refactorización de plataformas en producción."
    }
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Text Area */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex-1 space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Sobre <span className="text-primary-400">mí</span>
            </h2>
            <div className="space-y-4 text-gray-400 text-lg leading-relaxed">
              <p>
                Soy <strong className="text-white">Bachiller en Ingeniería de Software por la UNMSM</strong> y desarrollador de software senior con una profunda pasión por la creación de soluciones tecnológicas que resuelven problemas reales. Mi principal fortaleza radica en el ecosistema <strong className="text-white">.NET</strong>, donde he diseñado, estructurado e implementado múltiples sistemas empresariales de misión crítica.
              </p>
              <p>
                Mi sólida base académica como ingeniero me permite tener una visión analítica y formal sobre la arquitectura de proyectos. A lo largo de mi carrera, he liderado equipos técnicos para construir desde cero aplicaciones ambiciosas en diversos formatos: plataformas web integrales y móviles (Android e iOS). 
              </p>
              <p>
                Mi enfoque va mucho más allá de escribir código: entiendo el proceso del negocio, defino una arquitectura sostenible y acompaño el ciclo de vida del producto para que la solución sea útil, mantenible y escalable.
              </p>
            </div>
          </motion.div>

          {/* Value Props Grid */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {focuses.map((focus, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-effect p-6 rounded-2xl hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="p-3 bg-dark-900 rounded-lg inline-block mb-4">
                  {focus.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{focus.title}</h3>
                <p className="text-sm text-gray-400">{focus.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
