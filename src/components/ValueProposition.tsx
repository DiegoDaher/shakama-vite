
import { motion, type Variants } from "framer-motion";
import { FaGem, FaUsers, FaHeadset, FaShippingFast } from "react-icons/fa";

const benefits = [
  {
    title: "Materiales de Alta Calidad",
    description: "Seleccionamos cuidadosamente cada material para asegurar durabilidad y belleza.",
    icon: FaGem,
  },
  {
    title: "Para Toda la Familia",
    description: "Contamos con una amplia variedad de diseños para todas las edades y gustos.",
    icon: FaUsers,
  },
  {
    title: "Atención Personalizada",
    description: "Te ayudamos a encontrar o crear la pieza perfecta que refleje tu estilo.",
    icon: FaHeadset,
  },
  {
    title: "Envíos Rápidos",
    description: "Recibe tus compras de manera rápida y segura en la puerta de tu hogar.",
    icon: FaShippingFast,
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function ValueProposition() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            ¿Por Qué Elegirnos?
          </h2>
          <p className="text-lg text-gray-600 font-sans max-w-2xl mx-auto">
            En Shakama Creaciones nos dedicamos a ofrecerte la mejor experiencia con productos que destacan por su excelencia y dedicación.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-background shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="h-16 w-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6">
                <benefit.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 font-sans leading-relaxed text-sm">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
