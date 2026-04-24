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
  ChevronLeft,
  Menu, 
  X,
  Clock,
  Target,
  Trees
} from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

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
    description: "Pomagamy w wyborze gatunku drewna i montażu, biorąc pod uwagę wilgotność i ogrzewanie podłogowe.",
    icon: Users
  },
  {
    title: "Montaż Listew",
    description: "Perfekcyjne wykończenie detali. Dobór i montaż listew przypodłogowych, które spinają całość projektu.",
    icon: Target
  },
  {
    title: "Przygotowanie Podłoża",
    description: "Profesjonalne wyrównywanie wylewek pod parkiet. Gwarancja stabilnej i cichej podłogi na lata.",
    icon: Trees
  }
];

const STATS = [
  { label: "Lat Doświadczenia", value: "25+", icon: Calendar },
  { label: "Zadowolonych Klientów", value: "500+", icon: Users },
  { label: "Ułożonych Podłóg", value: "100k+ m²", icon: Maximize2 },
  { label: "Gwarancja Jakości", value: "100%", icon: ShieldCheck }
];

const PROJECTS = [
  { 
    title: "Rezydencja pod Poznaniem", 
    category: "Jodełka Klasyczna",
    img: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&q=80&w=1000"
  },
  { 
    title: "Apartament w Wilanowie", 
    category: "Parkiet Dębowy",
    img: "https://images.unsplash.com/photo-1616486341351-7efd3a036442?auto=format&fit=crop&q=80&w=1000"
  },
  { 
    title: "Dom w Grodzisku Wlkp.", 
    category: "Renowacja Historyczna",
    img: "https://images.unsplash.com/photo-1615876234582-29a20ec377e4?auto=format&fit=crop&q=80&w=1000"
  },
  { 
    title: "Loft Artystyczny", 
    category: "Lakierowanie Matowe",
    img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1000"
  }
];

const NEARBY_CITIES = [
  "Poznań", "Grodzisk Wielkopolski", "Wolsztyn", "Nowy Tomyśl", "Kościan", 
  "Opalenica", "Granowo", "Buk", "Stęszew", "Luboń", "Swarzędz", "Komorniki"
];

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-wood-dark text-wood-cream selection:bg-wood-oak selection:text-white">
      {/* Subtle Wood Texture Overlay */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] z-50"></div>

      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 px-6 lg:px-12 py-4 ${
          isScrolled ? 'bg-wood-dark/95 backdrop-blur-md shadow-2xl border-b border-white/5 py-2' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-xl lg:text-2xl font-serif font-bold tracking-tight text-wood-oak uppercase">
              Parkiet-Plus
            </span>
            <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-white/40 -mt-1">
              Rafał Łodyga
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            {['O nas', 'Usługi', 'Realizacje', 'Kontakt'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-xs uppercase tracking-widest font-semibold text-white/50 hover:text-wood-oak transition-colors border-draw pb-1"
              >
                {item}
              </a>
            ))}
            <a 
              href="tel:+48123456789" 
              className="flex items-center gap-2 bg-wood-oak text-wood-dark px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white transition-all hover:scale-105 active:scale-95 shadow-lg shadow-wood-oak/10"
            >
              <Phone size={14} />
              +48 123 456 789
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-white p-2"
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
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-[70] bg-wood-dark pt-24 px-8"
          >
            <div className="flex flex-col gap-8">
              {['O nas', 'Usługi', 'Realizacje', 'Kontakt'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="text-3xl font-serif text-white border-b border-white/5 pb-4"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <a 
                href="tel:+48123456789" 
                className="flex items-center justify-center gap-2 bg-wood-oak text-wood-dark px-6 py-4 rounded-xl text-lg font-bold uppercase"
              >
                <Phone size={20} />
                Zadzwoń teraz
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1581850518616-bcb81881443e?auto=format&fit=crop&q=80&w=2070" 
            alt="Premium Parquet Floor" 
            className="w-full h-full object-cover scale-105 brightness-[0.6] contrast-[1.1]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-wood-dark via-wood-dark/40 to-wood-dark/80" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block text-[10px] lg:text-xs uppercase tracking-[0.5em] font-bold text-wood-oak mb-6 px-6 py-2 border border-wood-oak/30 bg-wood-oak/10 backdrop-blur-md rounded-full shadow-2xl">
              Mistrz Rzemiosła · Pasja w każdym włóknie
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-[1.1] mb-8 tracking-tight">
              Szlachetność <br />
              <span className="italic font-display text-wood-oak">Prawdziwego Drewna</span>
            </h1>
            <p className="max-w-xl mx-auto text-white/70 text-lg md:text-xl font-light mb-12 leading-relaxed">
              Profesjonalne usługi parkieciarskie. Tworzymy fundamenty Twojego domu, 
              łącząc 25-letnią tradycję z nowoczesną precyzją wykonania.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <a 
                href="#kontakt" 
                className="bg-wood-oak text-wood-dark px-12 py-5 rounded-full text-xs font-bold tracking-[0.2em] uppercase hover:bg-white transition-all duration-500 shadow-2xl shadow-black"
              >
                Darmowa Wycena
              </a>
              <a 
                href="#realizacje" 
                className="bg-white/5 backdrop-blur-xl border border-white/10 text-white px-12 py-5 rounded-full text-xs font-bold tracking-[0.2em] uppercase hover:bg-white/10 transition-all duration-500"
              >
                Nasze Projekty
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-[1px] h-16 bg-gradient-to-b from-wood-oak to-transparent" />
        </motion.div>
      </section>

      {/* Narrative Section */}
      <section id="o-nas" className="py-24 lg:py-40 px-6 bg-surface relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-[1px] bg-wood-oak" />
                <span className="text-xs uppercase tracking-[0.4em] font-bold text-wood-oak">O nas</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif text-white mb-10 leading-tight">
                Gdy Rzemiosło <br />
                <span className="italic text-wood-oak">Spotyka Sztukę.</span>
              </h2>
              <div className="space-y-8 text-white/60 text-lg leading-relaxed font-light">
                <p>
                  Od ćwierć wieku moja firma Parkiet-Plus Rafał Łodyga dostarcza usługi na najwyższym poziomie. Przez moje ręce przeszło ponad 100 tysięcy metrów kwadratowych drewna, a każdy z tych metrów był wyzwaniem, któremu sprostaliśmy z pasją.
                </p>
                <p>
                  Dla nas podłoga to nie tylko element wykończenia. To serce domu, które nadaje mu charakter i ciepło. Specjalizujemy się w kompleksowej obsłudze klientów premium, oferując doradztwo techniczne i realizację projektów, które zachwycają precyzją.
                </p>
              </div>
              
              <div className="mt-16 pt-8 border-t border-white/5 flex items-center gap-6">
                <img 
                  src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=200" 
                  alt="Rafał Łodyga signature" 
                  className="w-32 h-auto opacity-30 invert"
                />
                <span className="font-serif italic text-xl text-wood-oak">Rafał Łodyga, Właściciel</span>
              </div>
            </motion.div>

            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/5">
                <img 
                  src="https://images.unsplash.com/photo-1502446650505-23101e4d2830?auto=format&fit=crop&q=80&w=1974" 
                  alt="Craftsmanship" 
                  className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 w-56 h-56 bg-wood-oak rounded-[2rem] shadow-2xl flex items-center justify-center p-10 text-center text-wood-dark">
                <div>
                  <p className="text-5xl font-serif mb-2 leading-none">25</p>
                  <p className="text-[10px] uppercase tracking-widest font-bold opacity-80 leading-tight">Lat nieprzerwanego Doswiadczenia</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interactive Stats Section */}
      <section className="bg-wood-dark text-white py-16 lg:py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {STATS.map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="group p-10 rounded-[2rem] bg-surface border border-white/5 hover:border-wood-oak/40 hover:bg-wood-oak/5 transition-all duration-500 cursor-pointer text-center relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-10 transition-opacity">
                  <stat.icon size={80} />
                </div>
                <div className="inline-flex p-4 rounded-2xl bg-white/5 mb-6 text-wood-oak group-hover:bg-wood-oak group-hover:text-wood-dark transition-all">
                  <stat.icon size={32} />
                </div>
                <div className="text-5xl font-serif mb-3 text-white group-hover:text-wood-oak transition-colors">{stat.value}</div>
                <div className="text-xs uppercase tracking-[0.3em] text-white/40 group-hover:text-white/60 transition-colors font-bold">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Slider Section */}
      <section id="usługi" className="py-24 lg:py-40 bg-surface relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-wood-oak mb-4 block">Specjalizacje</span>
              <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Nasze Usługi</h2>
              <p className="text-white/50 text-lg leading-relaxed font-light">
                Oferujemy pełen zakres prac związanych z podłogami drewnianymi. Od przygotowania wylewki, przez precyzyjny montaż, aż po artystyczne wykończenie.
              </p>
            </div>
            <div className="flex gap-4">
              <button 
                onClick={() => scroll('left')}
                className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-wood-oak hover:text-wood-dark hover:border-wood-oak transition-all duration-300 shadow-xl"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={() => scroll('right')}
                className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-wood-oak hover:text-wood-dark hover:border-wood-oak transition-all duration-300 shadow-xl"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          <div 
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto pb-12 snap-x snap-mandatory scrollbar-hide no-scrollbar"
            style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
          >
            {SERVICES.map((service, idx) => (
              <div 
                key={idx}
                className="min-w-[300px] md:min-w-[400px] snap-center"
              >
                <motion.div 
                  className="h-full group p-10 rounded-[3rem] bg-wood-dark border border-white/5 hover:border-wood-oak/30 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
                >
                  <div className="w-16 h-16 rounded-2xl bg-surface flex items-center justify-center text-wood-oak mb-8 group-hover:scale-110 transition-transform duration-500">
                    <service.icon size={32} />
                  </div>
                  <h3 className="text-2xl font-serif mb-6 text-white group-hover:text-wood-oak transition-colors">{service.title}</h3>
                  <p className="text-white/50 font-light leading-relaxed mb-8 flex-grow">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-wood-oak opacity-60 group-hover:opacity-100 transition-opacity">
                    Szczegóły usługi <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Realizations Grid */}
      <section id="realizacje" className="py-24 lg:py-40 bg-wood-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-wood-oak mb-4 block">Wybrane Projekty</span>
            <h2 className="text-5xl md:text-6xl font-serif text-white mb-8 italic">Nasze Realizacje</h2>
            <div className="w-20 h-[1px] bg-wood-oak mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {PROJECTS.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative overflow-hidden rounded-[3rem] aspect-video cursor-pointer"
              >
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-wood-dark via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-wood-oak font-bold mb-2 block">{project.category}</span>
                    <h3 className="text-2xl font-serif text-white">{project.title}</h3>
                  </div>
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white group-hover:bg-wood-oak group-hover:text-wood-dark transition-all">
                    <ChevronRight size={20} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-20 text-center">
            <a href="tel:+48123456789" className="text-white/40 hover:text-wood-oak transition-colors underline underline-offset-8 decoration-wood-oak/30 font-light tracking-widest text-sm uppercase">
              Zobacz więcej na naszym profilu firmowym
            </a>
          </div>
        </div>
      </section>

      {/* Call to Action - Contact */}
      <section id="kontakt" className="relative py-24 lg:py-40 overflow-hidden">
        <div className="absolute inset-0 z-0 brightness-[0.2]">
          <img 
            src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=2070" 
            alt="Workshop background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-wood-dark/60" />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-serif text-white mb-12 tracking-tight">
              Stwórzmy razem <br />
              <span className="italic text-wood-oak font-display">Twoją nową historię.</span>
            </h2>
            <p className="text-white/60 text-lg mb-16 max-w-2xl mx-auto leading-relaxed">
              Planujesz remont rezydencji lub budowę domu? Zapraszam do bezpośredniej rozmowy. 
              Doradzę, wybierzemy najlepsze materiały i wykonamy podłogę, która będzie cieszyć przez lata.
            </p>
            
            <div className="flex flex-col lg:flex-row items-stretch justify-center gap-6">
              <div className="flex-1 p-8 md:p-12 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] text-left hover:border-wood-oak/30 transition-colors group">
                <div className="mb-10 text-wood-oak p-4 bg-wood-oak/10 inline-block rounded-2xl group-hover:scale-110 transition-transform">
                  <Phone size={32} />
                </div>
                <p className="text-[10px] uppercase tracking-[0.4em] text-white/40 mb-2 font-bold">Bezpośredni Kontakt</p>
                <a href="tel:+48123456789" className="text-3xl md:text-4xl font-serif text-white hover:text-wood-oak transition-colors">
                  +48 123 456 789
                </a>
              </div>
              
              <div className="flex-1 p-8 md:p-12 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] text-left hover:border-wood-oak/30 transition-colors group">
                <div className="mb-10 text-wood-oak p-4 bg-wood-oak/10 inline-block rounded-2xl group-hover:scale-110 transition-transform">
                  <MapPin size={32} />
                </div>
                <p className="text-[10px] uppercase tracking-[0.4em] text-white/40 mb-2 font-bold">Obszar Realizacji</p>
                <p className="text-3xl md:text-4xl font-serif text-white">Poznań, Grodzisk <br />i okolice</p>
              </div>
            </div>

            {/* SEO Cities - Hidden visually but in DOM */}
            <div className="opacity-0 pointer-events-none h-0">
              Realizujemy zlecenia w miastach: {NEARBY_CITIES.join(", ")}.
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-wood-dark border-t border-white/5 py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex flex-col items-center md:items-start">
            <span className="text-2xl font-serif font-bold text-white uppercase tracking-tight">Parkiet-Plus</span>
            <p className="text-wood-oak text-[10px] uppercase tracking-[0.4em] font-bold mt-2">Rafał Łodyga · Mistrz Parkieciarstwa</p>
          </div>
          
          <div className="flex gap-10">
            {['O nas', 'Usługi', 'Realizacje', 'Kontakt'].map(item => (
              <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-xs uppercase tracking-widest text-white/30 hover:text-white transition-colors">
                {item}
              </a>
            ))}
          </div>

          <div className="text-white/20 text-[10px] uppercase tracking-widest text-center md:text-right font-medium">
            <p>© 2026 Parkiet-Plus Rafał Łodyga.</p>
            <p className="mt-2">Najwyższy Standard Rzemiosła od 2001 roku.</p>
          </div>
        </div>
      </footer>

      {/* Floating CTA for Mobile */}
      <div className="md:hidden fixed bottom-10 right-8 z-50">
        <a 
          href="tel:+48123456789" 
          className="flex items-center justify-center w-20 h-20 bg-wood-oak text-wood-dark rounded-full shadow-[0_0_40px_rgba(197,160,89,0.3)] active:scale-95 transition-all animate-pulse"
        >
          <Phone size={32} />
        </a>
      </div>
    </div>
  );
}
