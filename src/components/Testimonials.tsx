
import { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Laura Martínez",
    role: "Clienta Frecuente",
    content: "¡Me encantan sus productos! La calidad es excepcional y siempre encuentro algo perfecto para regalar a mi familia.",
    rating: 5,
    avatar: "L"
  },
  {
    id: 2,
    name: "Carlos Gómez",
    role: "Nuevo Cliente",
    content: "El envío fue rapidísimo y la atención al cliente de primera. Sin duda volveré a comprar aquí.",
    rating: 5,
    avatar: "C"
  },
  {
    id: 3,
    name: "Sofía Rodríguez",
    role: "Amante del diseño",
    content: "Los diseños son únicos. Se nota el amor y la dedicación que le ponen a cada una de sus creaciones.",
    rating: 5,
    avatar: "S"
  },
  {
    id: 4,
    name: "Miguel Ángel",
    role: "Cliente Satisfecho",
    content: "Materiales de muy buena calidad. Compré un par de artículos y superaron mis expectativas por completo.",
    rating: 5,
    avatar: "M"
  }
];

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="py-20 bg-background overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <p className="text-lg text-gray-600 font-sans max-w-2xl mx-auto">
            Miles de clientes confían en Shakama Creaciones. Descubre sus experiencias.
          </p>
        </motion.div>

        <motion.div 
          className="relative max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex touch-pan-y -ml-4">
              {testimonials.map((testimonial) => (
                <div 
                  className="flex-[0_0_100%] min-w-0 pl-4 md:flex-[0_0_50%] lg:flex-[0_0_50%]" 
                  key={testimonial.id}
                >
                  <div className="bg-white p-8 rounded-2xl shadow-sm h-full flex flex-col justify-between border border-gray-100">
                    <div>
                      <div className="flex gap-1 mb-6 text-accent-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <FaStar key={i} />
                        ))}
                      </div>
                      <p className="text-gray-700 italic font-sans mb-6 text-lg">
                        "{testimonial.content}"
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl font-display">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground font-display">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-gray-500 font-sans">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 h-10 w-10 bg-white rounded-full shadow-md flex items-center justify-center text-primary hover:bg-gray-50 transition-colors z-10"
            onClick={scrollPrev}
            disabled={!prevBtnEnabled}
            aria-label="Anterior"
          >
            <FaChevronLeft />
          </button>
          
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 h-10 w-10 bg-white rounded-full shadow-md flex items-center justify-center text-primary hover:bg-gray-50 transition-colors z-10"
            onClick={scrollNext}
            disabled={!nextBtnEnabled}
            aria-label="Siguiente"
          >
            <FaChevronRight />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
