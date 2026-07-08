
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-primary)] text-[var(--color-background)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-display text-2xl font-bold mb-4 text-[var(--color-accent-2)]">Shakama Creaciones</h3>
            <p className="text-[var(--color-background)] opacity-90 max-w-sm">
              Creando momentos inolvidables con productos hechos con amor y dedicación.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-[var(--color-accent-2)]">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-[var(--color-accent-1)] transition-colors">Inicio</a>
              </li>
              <li>
                <a href="#categorias" className="hover:text-[var(--color-accent-1)] transition-colors">Categorías</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-[var(--color-accent-2)]">Síguenos</h4>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61558648897142&sk=about" className="text-[var(--color-background)] hover:text-[var(--color-accent-1)] transition-colors" aria-label="Facebook">
                <FaFacebook size={24} />
              </a>
              <a href="https://www.instagram.com/shakama_creaciones/" className="text-[var(--color-background)] hover:text-[var(--color-accent-1)] transition-colors" aria-label="Instagram">
                <FaInstagram size={24} />
              </a>
              <a href="https://wa.me/6181714576" className="text-[var(--color-background)] hover:text-[var(--color-accent-1)] transition-colors" aria-label="WhatsApp">
                <FaWhatsapp size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-[var(--color-background)] border-opacity-20 text-center text-sm opacity-70">
          &copy; {new Date().getFullYear()} Shakama Creaciones. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
