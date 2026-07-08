
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-background">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-background to-accent-1 opacity-20"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-accent-2 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="font-display text-5xl md:text-7xl font-bold text-primary mb-6 leading-tight tracking-tight">
            Regalos y Creaciones <br className="hidden md:block" />
            <span className="text-accent-1">Hechos con Amor</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <p className="text-lg md:text-xl text-primary opacity-80 mb-10 max-w-2xl mx-auto font-sans leading-relaxed">
            Descubre nuestra colección exclusiva de ropa de bebé, regalos personalizados y detalles únicos para cada ocasión especial.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
        >
          <a
            href="https://wa.me/6181714576"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-accent-2 text-white hover:text-primary font-bold py-4 px-8 rounded-full text-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <FaWhatsapp size={24} />
            <span>Contáctanos por WhatsApp</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
