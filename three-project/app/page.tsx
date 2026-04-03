"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "./components/layout/Header";
import { BarberCard } from "./components/home/BarberCard";

// Δεδομένα των Barbers - Σιγουρέψου ότι τα αρχεία .png είναι στο /public
const BARBERS = [
  {
    id: 1,
    name: "ΒΑΣΙΛΗΣ",
    role: "Master Barber",
    image: "/bill.png",
  },
  {
    id: 2,
    name: "ΗΛΙΑΣ",
    role: "Senior Stylist",
    image: "/hlias.png",
  },
  {
    id: 3,
    name: "ΣΤΑΥΡΟΣ",
    role: "Beard Specialist",
    image: "/stavros.png",
  },
];

export default function Home() {
  const [step, setStep] = useState<'selection' | 'booking'>('selection');
  const [selectedBarber, setSelectedBarber] = useState<string | null>(null);

  // Λειτουργία για ομαλή μετακίνηση στο section κρατήσεων
  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="bg-background text-cream min-h-screen font-sans selection:bg-cream selection:text-black">
      <Header />

      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center relative overflow-hidden">
        {/* Overlay για αντίθεση */}
        <div className="absolute inset-0 bg-black/70 z-10" />
        
        {/* Σταθερή εικόνα Background */}
        <img 
          src="/bg.jpg" 
          alt="Three Hairlab Background" 
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        
        <div className="relative z-20 text-center px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-9xl font-light tracking-tighter mb-8 uppercase"
          >
            Precision <span className="italic font-serif">Craft</span>
          </motion.h2>
          
          <motion.button 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            onClick={scrollToBooking}
            className="px-10 py-4 border border-cream text-cream uppercase tracking-[0.3em] text-xs font-bold hover:bg-cream hover:text-black transition-all duration-500"
          >
            ΚΑΝΕ ΚΡΑΤΗΣΗ
          </motion.button>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-32 px-6 max-w-7xl mx-auto min-h-screen">
        <div className="mb-16 text-center">
          <h2 className="text-accent uppercase tracking-[0.4em] text-sm mb-2">The Lab</h2>
          <p className="text-3xl uppercase tracking-widest">Επιλέξτε Υπηρεσία & Barber</p>
        </div>

        <AnimatePresence mode="wait">
          {step === 'selection' ? (
            <motion.div 
              key="step1"
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-10"
            >
              {BARBERS.map((barber) => (
                <BarberCard 
                  key={barber.id}
                  name={barber.name}
                  role={barber.role}
                  image={barber.image}
                  onSelect={() => { 
                    setSelectedBarber(barber.name); 
                    setStep('booking');
                  }}
                />
              ))}
            </motion.div>
          ) : (
            <motion.div 
              key="step2"
              initial={{ opacity: 0, x: 30 }} 
              animate={{ opacity: 1, x: 0 }} 
              exit={{ opacity: 0, x: -30 }}
              className="bg-accent/5 p-8 md:p-16 border border-white/10 backdrop-blur-md"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
                <div>
                  <button 
                    onClick={() => setStep('selection')} 
                    className="group mb-4 text-accent hover:text-cream flex items-center gap-2 transition-all text-xs tracking-widest uppercase"
                  >
                    <span className="group-hover:-translate-x-1 transition-transform">←</span> Πισω στο προσωπικο
                  </button>
                  <h3 className="text-4xl uppercase tracking-tighter">
                    Ραντεβού με τον <span className="text-cream italic">{selectedBarber}</span>
                  </h3>
                </div>
                <div className="text-right">
                  <p className="text-accent text-xs uppercase tracking-widest">Διαθέσιμες Ώρες</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                {["10:00", "11:00", "12:00", "14:00", "15:00", "16:00", "17:00", "18:00"].map(time => (
                  <button 
                    key={time} 
                    className="border border-white/10 py-5 text-sm tracking-widest hover:bg-cream hover:text-black hover:border-cream transition-all duration-300 font-bold"
                  >
                    {time}
                  </button>
                ))}
              </div>

              <div className="mt-16 pt-8 border-t border-white/5 flex justify-end">
                 <p className="text-accent text-[10px] uppercase tracking-[0.2em]">Three Hairlab &copy; 2024 — Booking System</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </main>
  );
}