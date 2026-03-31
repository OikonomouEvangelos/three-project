// components/layout/Header.tsx
"use client";
import { motion, useScroll, useTransform } from "framer-motion";

export const Header = () => {
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 50],
    ["rgba(0,0,0,0)", "rgba(0,0,0,0.9)"]
  );

  return (
    <motion.header 
      style={{ backgroundColor }}
      className="fixed top-0 w-full z-50 px-8 py-6 flex justify-between items-center backdrop-blur-sm border-b border-white/5"
    >
      <h1 className="text-cream tracking-[0.2em] font-bold text-xl uppercase">Three Hairlab</h1>
      <nav className="hidden md:flex gap-10 text-cream/70 uppercase text-xs tracking-widest">
        <a href="#services" className="hover:text-cream transition-colors">Services</a>
        <a href="#barbers" className="hover:text-cream transition-colors">Barbers</a>
        <a href="/admin" className="hover:text-cream transition-colors">Admin</a>
      </nav>
    </motion.header>
  );
};