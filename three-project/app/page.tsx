// app/page.tsx
"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "./components/layout/Header";
import { BarberCard } from "./components/home/BarberCard";

export default function Home() {
  const [step, setStep] = useState<'selection' | 'booking'>('selection');
  const [selectedBarber, setSelectedBarber] = useState<string | null>(null);

  return (
    <main className="bg-background text-cream min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover opacity-40">
           <source src="/hero-placeholder.mp4" type="video/mp4" />
        </video>
        
        <div className="relative z-20 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-light tracking-tighter mb-8"
          >
            PRECISION <span className="italic">CRAFT</span>
          </motion.h2>
          <button 
            onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-12 py-4 bg-cream text-black uppercase tracking-widest text-sm font-bold hover:bg-accent hover:text-cream transition-all"
          >
            ΚΑΝΕ ΚΡΑΤΗΣΗ
          </button>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-32 px-6 max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          {step === 'selection' ? (
            <motion.div 
              key="step1"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {['Alex', 'John', 'Nick'].map((name) => (
                <BarberCard 
                  key={name}
                  name={name}
                  role="Master Barber"
                  image={`/barber-${name.toLowerCase()}.jpg`}
                  onSelect={() => { setSelectedBarber(name); setStep('booking'); }}
                />
              ))}
            </motion.div>
          ) : (
            <motion.div 
              key="step2"
              initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }}
              className="bg-accent/10 p-12 border border-accent/20"
            >
              <button onClick={() => setStep('selection')} className="mb-8 text-accent hover:text-cream flex items-center gap-2">
                ← BACK TO BARBERS
              </button>
              <h3 className="text-3xl mb-12 uppercase tracking-widest">Select Date & Time for {selectedBarber}</h3>
              {/* Add Calendar Component Here */}
              <div className="grid grid-cols-4 gap-4">
                {["10:00", "11:00", "12:00", "14:00", "15:00", "16:00"].map(time => (
                  <button key={time} className="border border-accent/50 py-4 hover:bg-cream hover:text-black transition-colors">
                    {time}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </main>
  );
}