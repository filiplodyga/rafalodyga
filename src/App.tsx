/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  MapPin, 
  Calendar, 
  Users, 
  Maximize2, 
  Hammer, 
  Sparkle, 
  ShieldCheck, 
  ChevronRight, 
  Menu, 
  X,
  Clock
} from 'lucide-react';
import { useState, useEffect } from 'react';

const SERVICES = [
  {
    title: "Układanie Parkietów",
    description: "Od klasycznej jodełki po nowoczesne wzory pałacowe. Każda klepka montowana z chirurgiczną precyzją.",
    icon: Hammer
  },
  {
    title: "Cyklinowanie Bezpyłowe",
    description: "Najnowocześniejszy park maszynowy gwarantuje czystość w Twoim domu i idealnie gładką powierzchnię.",
    icon: Sparkle
  },
  {
    title: "Renowacja i Lakierowanie",
    description: "Przywracamy duszę starym podłogom, stosując ekologiczne lakiery i oleje najwyższej klasy premium.",
    icon: ShieldCheck
  },
  {
    title: "Doradztwo Techniczne",
    description: "Pomagamy w wyborze gatunku drewna i technologii montażu, biorąc pod uwagę wilgotność i ogrzewanie podłogowe.",
    icon: Users
  }
];

const STATS = [
  { label: "Lat Doświadczenia", value: "25+", icon: Calendar },
  { label: "Zadowolonych Klientów", value: "500+", icon: Users },
  { label: "Ułożonych Podłóg", value: "100k+ m²", icon: Maximize2 },
  { label: "Gwarancja Jakości", value: "100%", icon: ShieldCheck }
];

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-wood-cream selection:bg-wood-oak selection:text-white">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 lg:px-12 py-4 ${
          isScrolled ? 'bg-wood-cream/90 backdrop-blur-md shadow-sm border-b border-wood-dark/5 py-2' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-xl lg:text-2xl font-serif font-bold tracking-tight text-wood-dark">
              Atelier Podłóg
            </span>
            <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-wood-dark/60 -mt-1">
              Rzemiosło Drewna
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            {['O nas', 'Usługi', 'Realizacje', 'Kontakt'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-sm uppercase tracking-widest font-medium text-wood-dark/70 hover:text-wood-dark transition-colors border-draw pb-1"
              >
                {item}
              </a>
            ))}
            <a 
              href="tel:+48123456789" 
              className="flex items-center gap-2 bg-wood-dark text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-wood-walnut transition-all hover:scale-105 active:scale-95 shadow-lg shadow-wood-dark/20"
            >
              <Phone size={16} />
              +48 123 456 789
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-wood-dark p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-wood-cream pt-24 px-8"
          >
            <div className="flex flex-col gap-8">
              {['O nas', 'Usługi', 'Realizacje', 'Kontakt'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="text-2xl font-serif text-wood-dark border-b border-wood-dark/10 pb-4"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <a 
                href="tel:+48123456789" 
                className="flex items-center justify-center gap-2 bg-wood-dark text-white px-6 py-4 rounded-xl text-lg font-medium"
              >
                <Phone size={20} />
                Zadzwoń teraz
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative h-[95vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1581850518616-bcb81881443e?auto=format&fit=crop&q=80&w=2070" 
            alt="Premium Parquet Floor" 
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-wood-cream via-transparent to-wood-dark/30" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block text-xs lg:text-sm uppercase tracking-[0.4em] font-medium text-white/80 mb-6 px-4 py-2 bg-black/20 backdrop-blur-sm rounded-full">
              Mistrzowska Jakość · 25 lat rzemiosła
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-[1.1] mb-8 drop-shadow-sm">
              Podłoga, która <br />
              <span className="italic font-display text-wood-oak">ma duszę</span>
            </h1>
            <p className="max-w-xl mx-auto text-white/90 text-lg md:text-xl font-light mb-12">
              Przekształcamy naturalne drewno w ponadczasowe dzieła sztuki. 
              Pół wieku doświadczenia zamknięte w każdym ułożonym metry kwadratowym.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#kontakt" 
                className="bg-wood-oak text-white px-10 py-4 rounded-full text-sm font-semibold tracking-widest uppercase hover:bg-white hover:text-wood-dark transition-all duration-300 shadow-xl shadow-wood-dark/10"
              >
                Bezpłatna konsultacja
              </a>
              <a 
                href="#usługi" 
                className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-4 rounded-full text-sm font-semibold tracking-widest uppercase hover:bg-white/20 transition-all duration-300"
              >
                Poznaj ofertę
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/40"
        >
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/60 to-transparent" />
        </motion.div>
      </section>

      {/* Narrative Section - The Story */}
      <section id="o-nas" className="py-24 lg:py-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-xs uppercase tracking-[0.3em] font-bold text-wood-oak mb-4 block">Historia Rzemiosła</span>
              <h2 className="text-4xl md:text-5xl font-serif text-wood-dark mb-8 leading-tight">
                Ćwierć wieku słuchania <br /> 
                <span className="italic">tego, co mówi drewno.</span>
              </h2>
              <div className="space-y-6 text-wood-dark/70 text-lg leading-relaxed font-light">
                <p>
                  Dwadzieścia pięć lat temu wziąłem do ręki pierwszą deskę. Od tego czasu drewno stało się nie tylko moją pracą, ale i pasją. Przez ćwierć wieku nauczyłem się słuchać jego włókien, rozumieć jego duszę i wydobywać z niego to, co najpiękniejsze.
                </p>
                <p>
                  Dziś, jako renomowany specjalista, oferuję kompleksowe usługi od profesjonalnego doradztwa po realizację najbardziej wymagających projektów. Moje podłogi to nie tylko powierzchnia, po której chodzisz – to fundament Twojego domu, który przetrwa pokolenia.
                </p>
              </div>
              
              <div className="mt-12 flex items-center gap-6">
                <div className="w-16 h-[1px] bg-wood-oak" />
                <span className="font-serif italic text-xl text-wood-dark">Artur Kowalski, Mistrz Parkieciarstwa</span>
              </div>
            </motion.div>

            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1502446650505-23101e4d2830?auto=format&fit=crop&q=80&w=1974" 
                  alt="Craftsmanship" 
                  className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700 hover:scale-110"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-wood-dark rounded-3xl -z-0 flex items-center justify-center p-8 text-center text-white">
                <div>
                  <p className="text-4xl font-serif mb-1">500+</p>
                  <p className="text-[10px] uppercase tracking-widest opacity-60">Zadowolonych Rezydencji</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-wood-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {STATS.map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="inline-flex p-3 rounded-2xl bg-white/5 mb-4 text-wood-oak">
                  <stat.icon size={24} />
                </div>
                <div className="text-4xl lg:text-5xl font-serif mb-2">{stat.value}</div>
                <div className="text-[10px] uppercase tracking-widest text-white/40">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="usługi" className="py-24 lg:py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-wood-oak mb-4 block">Kompleksowa Obsługa</span>
            <h2 className="text-4xl md:text-5xl font-serif text-wood-dark mb-6">Nasze Specjalizacje</h2>
            <div className="w-24 h-1 bg-wood-oak mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group p-8 rounded-3xl border border-wood-dark/5 hover:border-wood-oak/30 transition-all duration-500 hover:shadow-xl hover:shadow-wood-dark/5"
              >
                <div className="w-14 h-14 rounded-2xl bg-wood-cream flex items-center justify-center text-wood-dark mb-6 group-hover:bg-wood-oak group-hover:text-white transition-colors duration-500">
                  <service.icon size={28} />
                </div>
                <h3 className="text-xl font-serif font-bold mb-4 text-wood-dark">{service.title}</h3>
                <p className="text-wood-dark/60 font-light leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-wood-oak opacity-0 group-hover:opacity-100 transition-opacity">
                  Dowiedz się więcej <ChevronRight size={14} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action - Contact */}
      <section id="kontakt" className="relative py-24 lg:py-32 overflow-hidden bg-wood-dark">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=2070" 
            alt="Workshop background" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-serif text-white mb-8">
              Zacznijmy budować Twój <br />
              <span className="italic text-wood-oak">wymarzony dom już dziś.</span>
            </h2>
            <p className="text-white/60 text-lg mb-12 max-w-2xl mx-auto">
              Potrzebujesz profesjonalnego doradztwa lub darmowej wyceny? 
              Zadzwoń bezpośrednio do mistrza – bez pośredników, bez kompromisów.
            </p>
            
            <div className="inline-flex flex-col md:flex-row items-center gap-6 p-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl md:rounded-full">
              <div className="flex items-center gap-4 px-8 py-4">
                <div className="p-3 bg-wood-oak text-white rounded-full">
                  <Phone size={24} />
                </div>
                <div className="text-left">
                  <p className="text-[10px] uppercase tracking-widest text-white/40">Bezpośredni Telefon</p>
                  <a href="tel:+48123456789" className="text-2xl font-serif text-white hover:text-wood-oak transition-colors">
                    +48 123 456 789
                  </a>
                </div>
              </div>
              <div className="hidden md:block w-[1px] h-12 bg-white/10" />
              <div className="flex items-center gap-4 px-8 py-4">
                <div className="p-3 bg-white/10 text-white rounded-full">
                  <MapPin size={24} />
                </div>
                <div className="text-left">
                  <p className="text-[10px] uppercase tracking-widest text-white/40">Obszar Działania</p>
                  <p className="text-lg text-white">Warszawa i cała Polska</p>
                </div>
              </div>
            </div>
            
            <p className="mt-8 text-white/30 text-sm flex items-center justify-center gap-2">
              <Clock size={14} /> Dostępność: Poniedziałek - Sobota, 08:00 - 19:00
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-wood-dark border-t border-white/5 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start">
            <span className="text-xl font-serif font-bold text-white uppercase tracking-tight">Atelier Podłóg</span>
            <p className="text-white/40 text-[10px] uppercase tracking-[0.2em] mt-1">Lider Premium Parkieciarstwa</p>
          </div>
          
          <div className="text-white/40 text-xs text-center md:text-right">
            <p>© 2026 Atelier Podłóg Drewnianych. Wszystkie prawa zastrzeżone.</p>
            <p className="mt-1">Realizacja najwyższej jakości rzemiosła od 2001 roku.</p>
          </div>
        </div>
      </footer>

      {/* Floating CTA for Mobile */}
      <div className="md:hidden fixed bottom-6 right-6 z-50">
        <a 
          href="tel:+48123456789" 
          className="flex items-center justify-center w-16 h-16 bg-wood-oak text-white rounded-full shadow-2xl shadow-wood-oak/50 active:scale-90 transition-transform"
        >
          <Phone size={28} />
        </a>
      </div>
    </div>
  );
}
