import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: "Inicio", href: "/" },
    { label: "Categorías", href: "#categorias" },
    { label: "Nosotros", href: "#nosotros" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[var(--color-background)] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="font-display text-3xl font-bold text-[var(--color-primary)]">
              Shakama Creaciones
            </a>
          </div>
          
          <div className="hidden md:flex space-x-8">
            {links.map((link) => (
              <a 
                key={link.label} 
                href={link.href} 
                className="text-[var(--color-primary)] hover:text-[var(--color-accent-1)] transition-colors text-lg font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-[var(--color-primary)] focus:outline-none"
            >
              {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-[var(--color-background)] border-t border-[var(--color-accent-1)] border-opacity-20"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 text-base font-medium text-[var(--color-primary)] hover:bg-[var(--color-accent-1)] hover:bg-opacity-10 hover:text-[var(--color-primary)] rounded-md transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
