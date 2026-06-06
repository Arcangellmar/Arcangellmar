import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Phone } from 'lucide-react';

const Contact = () => {
  const [message, setMessage] = useState('');

  const handleWhatsAppMsg = (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    const phone = '51972594901';
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-600/10 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl font-bold mb-4 text-white">
                ¿Necesitas un sistema, <br />
                <span className="text-primary-400">app o automatización?</span>
              </h2>
              <p className="text-gray-400 text-lg">
                Escríbeme por WhatsApp y cuéntame qué proceso quieres mejorar, qué app quieres lanzar o qué sistema necesitas modernizar.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors">
                <div className="w-12 h-12 rounded-full glass-effect flex items-center justify-center shrink-0">
                  <Mail className="text-primary-400" size={20} />
                </div>
                <div>
                  <span className="block text-sm text-gray-500">Email</span>
                  <a href="mailto:rolando20022016@hotmail.com" className="font-medium text-lg text-white hover:text-primary-400 transition-colors">rolando20022016@hotmail.com</a>
                </div>
              </div>

              <div className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors">
                <div className="w-12 h-12 rounded-full glass-effect flex items-center justify-center shrink-0">
                  <Phone className="text-primary-400" size={20} />
                </div>
                <div>
                  <span className="block text-sm text-gray-500">Teléfono</span>
                  <a href="tel:972594901" className="font-medium text-lg text-white hover:text-primary-400 transition-colors">+51972594901</a>
                </div>
              </div>

              <div className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors">
                <div className="w-12 h-12 rounded-full glass-effect flex items-center justify-center shrink-0">
                  <MapPin className="text-primary-400" size={20} />
                </div>
                <div>
                  <span className="block text-sm text-gray-500">Ubicación</span>
                  <span className="font-medium text-lg text-white">Lima, Perú</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-effect p-8 rounded-2xl"
          >
            <form className="space-y-6 flex flex-col" onSubmit={handleWhatsAppMsg}>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">Mensaje</label>
                <textarea
                  rows="6"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Hola Rolando, necesito desarrollar un sistema web/app para..."
                  className="w-full px-4 py-3 bg-dark-900 border border-white/10 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={!message.trim()}
                className="flex items-center justify-center gap-2 w-full py-4 bg-primary-600 hover:bg-primary-500 text-white font-semibold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Enviar por WhatsApp
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
