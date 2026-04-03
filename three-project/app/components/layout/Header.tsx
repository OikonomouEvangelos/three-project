"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export const Header = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [selectedBarberProfile, setSelectedBarberProfile] = useState<any>(null);

  const menuItems = {
    services: [
      { name: "Κούρεμα", price: "20€" },
      { name: "Περιποίηση Γενειάδας", price: "10€" },
      { name: "Three Special (Combo)", price: "25€" },
      { name: "Ξύρισμα με Φαλτσέτα", price: "15€" },
    ],
    barbers: [
      { 
        name: "Βασίλης", 
        role: "Master Barber",
        bio: "Με 10 χρόνια εμπειρίας στο κλασικό κούρεμα και το traditional shaving.",
        work: ["Classic Taper", "Hot Towel Shave", "Scissor Cut"],
        image: "/bill.png",
        samples: ["/v1.jpg", "/v2.jpg", "/v3.jpg"]
      },
      { 
        name: "Ηλίας", 
        role: "Senior Stylist",
        bio: "Expert στα σύγχρονα fades και το δημιουργικό styling.",
        work: ["Skin Fade", "Modern Mullet", "Hair Tattoo"],
        image: "/hlias.png",
        samples: ["/h1.jpg", "/h2.jpg", "/h3.jpg"]
      },
      { 
        name: "Σταύρος", 
        role: "Beard Specialist",
        bio: "Ο άνθρωπός σας για το τέλειο σχήμα και περιποίηση γενειάδας.",
        work: ["Beard Sculpting", "Line up", "Beard Treatments"],
        image: "/stavros.png",
        samples: ["/s1.jpg", "/s2.jpg", "/s3.jpg"]
      },
    ]
  };

  return (
    <>
      <nav 
        className="fixed top-0 w-full z-50 px-8 py-6 flex justify-between items-center backdrop-blur-md border-b border-white/5 bg-black/40"
        onMouseLeave={() => setActiveMenu(null)}
      >
        <Link href="/" className="text-cream tracking-[0.2em] font-bold text-xl uppercase">
          Three Hairlab
        </Link>

        <div className="hidden md:flex gap-10 text-cream/70 uppercase text-xs tracking-[0.2em]">
          
          {/* SERVICES DROPDOWN */}
          <div 
            className="relative py-2 cursor-pointer hover:text-cream transition-colors"
            onMouseEnter={() => setActiveMenu('services')}
          >
            Services
            <AnimatePresence>
              {activeMenu === 'services' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 mt-4 w-64 bg-[#0A0A0A] border border-white/10 p-6 shadow-2xl"
                >
                  <ul className="space-y-4">
                    {menuItems.services.map((item) => (
                      <li key={item.name} className="flex justify-between items-center group">
                        <span className="text-[10px] text-accent group-hover:text-cream transition-colors">{item.name}</span>
                        <span className="text-[10px] text-white/40">{item.price}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* BARBERS DROPDOWN - Fixed Alignment */}
          <div 
            className="relative py-2 cursor-pointer hover:text-cream transition-colors"
            onMouseEnter={() => setActiveMenu('barbers')}
          >
            Barbers
            <AnimatePresence>
              {activeMenu === 'barbers' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}
                  /* Χρησιμοποιούμε right-0 ή -left-20 για να μην "κόβεται" η πλευρά */
                  className="absolute top-full right-0 md:-right-20 mt-4 w-72 bg-[#0A0A0A] border border-white/10 p-6 shadow-2xl"
                >
                  <p className="text-[9px] text-accent mb-4 tracking-widest">ΚΛΙΚ ΓΙΑ ΒΙΟΓΡΑΦΙΚΟ</p>
                  <ul className="space-y-4">
                    {menuItems.barbers.map((barber) => (
                      <li 
                        key={barber.name} 
                        className="flex flex-col space-y-1 group cursor-pointer"
                        onClick={() => {
                          setSelectedBarberProfile(barber);
                          setActiveMenu(null);
                        }}
                      >
                        <span className="text-[10px] text-cream uppercase group-hover:underline underline-offset-4">{barber.name}</span>
                        <span className="text-[9px] text-accent leading-tight">{barber.role}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/admin" className="py-2 hover:text-cream transition-colors">Admin</Link>
        </div>
      </nav>

      {/* BARBER MINI-BIO MODAL */}
<AnimatePresence>
  {selectedBarberProfile && (
    <motion.div 
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 backdrop-blur-xl bg-black/90"
    >
      <motion.div 
        initial={{ scale: 0.95, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.95, y: 20 }}
        className="bg-[#0A0A0A] border border-white/10 max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-12 relative custom-scrollbar"
      >
        {/* Close Button */}
        <button 
          onClick={() => setSelectedBarberProfile(null)}
          className="absolute top-6 right-6 text-accent hover:text-cream uppercase text-[10px] tracking-[0.3em] z-50 bg-black/50 p-2"
        >
          Close [×]
        </button>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Main Portrait */}
          <div className="aspect-[3/4] bg-accent/10 overflow-hidden border border-white/5 grayscale">
            <img 
              src={selectedBarberProfile.image} 
              alt={selectedBarberProfile.name} 
              className="w-full h-full object-cover" 
            />
          </div>
          
          <div className="flex flex-col justify-center">
            <h3 className="text-5xl md:text-6xl uppercase tracking-tighter mb-2">{selectedBarberProfile.name}</h3>
            <p className="text-accent uppercase text-xs tracking-[0.3em] mb-8">{selectedBarberProfile.role}</p>
            
            <p className="text-cream/60 text-sm leading-relaxed mb-8 italic border-l-2 border-accent pl-4">
              "{selectedBarberProfile.bio}"
            </p>

            <div className="mb-10">
              <h4 className="text-[10px] uppercase text-accent tracking-[0.3em] mb-4">Core Skills</h4>
              <ul className="flex flex-wrap gap-3">
                {selectedBarberProfile.work.map((w: string) => (
                  <li key={w} className="text-[10px] uppercase tracking-widest border border-white/10 px-3 py-1 text-cream/80">
                    {w}
                  </li>
                ))}
              </ul>
            </div>

            <button 
              onClick={() => {
                setSelectedBarberProfile(null);
                document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full py-5 bg-cream text-black text-xs font-bold uppercase tracking-[0.4em] hover:bg-accent hover:text-cream transition-all duration-500"
            >
              Book {selectedBarberProfile.name}
            </button>
          </div>
        </div>

        {/* WORK SAMPLES GALLERY */}
        <div className="border-t border-white/5 pt-12">
          <h4 className="text-[10px] uppercase text-accent tracking-[0.4em] mb-8 text-center">Work Samples / Portfolio</h4>
          <div className="grid grid-cols-3 gap-4 md:gap-6">
            {selectedBarberProfile.samples?.map((src: string, index: number) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.02 }}
                className="aspect-square bg-accent/5 border border-white/5 overflow-hidden cursor-crosshair group"
              >
                <img 
                  src={src} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                  alt="Work sample"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
    </>
  );
};