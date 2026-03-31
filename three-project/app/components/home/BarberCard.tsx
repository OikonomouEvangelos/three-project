// components/home/BarberCard.tsx
"use client";
import { motion } from "framer-motion";

interface BarberProps {
  name: string;
  role: string;
  image: string;
  onSelect: () => void;
}

export const BarberCard = ({ name, role, image, onSelect }: BarberProps) => (
  <motion.div 
    whileHover={{ y: -10 }}
    onClick={onSelect}
    className="group relative cursor-pointer border border-accent/30 overflow-hidden"
  >
    <div className="aspect-[3/4] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
      <img src={image} alt={name} className="object-cover w-full h-full scale-105 group-hover:scale-100 transition-transform duration-700" />
    </div>
    <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black to-transparent">
      <p className="text-cream text-lg uppercase tracking-tighter">{name}</p>
      <p className="text-accent text-xs uppercase">{role}</p>
    </div>
  </motion.div>
);