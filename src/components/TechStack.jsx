import { motion } from 'framer-motion';

const TechStack = () => {
  const technologies = [
    { name: '.NET', category: 'Backend' },
    { name: 'C#', category: 'Backend' },
    { name: 'ASP.NET Core', category: 'Backend' },
    { name: 'Web API', category: 'Backend' },
    { name: 'SQL Server', category: 'Database' },
    { name: 'Entity Framework', category: 'Database' },
    { name: 'AWS', category: 'Cloud' },
    { name: 'Flutter', category: 'Mobile' },
    { name: 'Android', category: 'Mobile' },
    { name: 'iOS', category: 'Mobile' },
    { name: 'React', category: 'Frontend' },
    { name: 'JavaScript', category: 'Frontend' },
    { name: 'Automatizacion', category: 'DevOps' },
    { name: 'CI CD', category: 'DevOps' },
  ];

  return (
    <section id="tech" className="py-24 relative overflow-hidden">
      {/* Decals */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary-600/10 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Stack <span className="text-primary-400">Tecnológico</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Herramientas y tecnologías que utilizo para construir arquitecturas robustas y aplicaciones multiplataforma.
          </motion.p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {technologies.map((tech, idx) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, type: 'spring', stiffness: 100 }}
              className="px-6 py-3 glass-effect rounded-full border border-white/10 hover:border-primary-500/50 hover:bg-white/5 transition-colors cursor-default flex items-center gap-2"
            >
              <div className={`w-2 h-2 rounded-full ${tech.category === 'Backend' ? 'bg-blue-400' :
                  tech.category === 'Frontend' ? 'bg-yellow-400' :
                    tech.category === 'Mobile' ? 'bg-green-400' :
                      tech.category === 'Cloud' ? 'bg-orange-400' :
                        tech.category === 'DevOps' ? 'bg-red-400' : 'bg-purple-400'
                }`} />
              <span className="text-gray-200 font-medium">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
