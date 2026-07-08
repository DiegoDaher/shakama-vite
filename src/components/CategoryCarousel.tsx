
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import { categories } from "../data/categories";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function CategoryCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    dragFree: true,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section id="categorias" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl font-bold text-primary mb-4">
            Categorías Destacadas
          </h2>
          <div className="h-1 w-24 bg-accent-1 mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-4">
              {categories.map((category) => (
                <div
                  key={category.id}
                  className="flex-[0_0_80%] min-w-0 sm:flex-[0_0_45%] md:flex-[0_0_30%] pl-4"
                >
                  <div className="group relative rounded-xl overflow-hidden shadow-lg border border-accent-1 border-opacity-30 aspect-[4/5] cursor-pointer">
                    <img
                      src={category.imageUrl}
                      alt={category.title}
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-80"></div>
                    <div className="absolute bottom-0 left-0 w-full p-6 text-left">
                      <h3 className="font-display text-2xl font-bold text-background group-hover:text-accent-2 transition-colors">
                        {category.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={scrollPrev}
            className="absolute top-1/2 -left-4 md:-left-6 transform -translate-y-1/2 bg-background text-primary p-3 rounded-full shadow-md hover:bg-accent-2 transition-colors z-10 border border-accent-1 border-opacity-20"
            aria-label="Anterior"
          >
            <FiChevronLeft size={24} />
          </button>
          <button
            onClick={scrollNext}
            className="absolute top-1/2 -right-4 md:-right-6 transform -translate-y-1/2 bg-background text-primary p-3 rounded-full shadow-md hover:bg-accent-2 transition-colors z-10 border border-accent-1 border-opacity-20"
            aria-label="Siguiente"
          >
            <FiChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
