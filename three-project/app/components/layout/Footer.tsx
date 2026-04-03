"use client";
import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <footer className="bg-background border-t border-white/5 py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          
          {/* Column 1: Brand & Logo */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-cream tracking-[0.3em] font-bold text-xl uppercase">
              Three Hairlab
            </h3>
            <p className="text-accent text-xs leading-relaxed max-w-[250px] uppercase tracking-widest">
              High-end grooming services for the modern man. Precision in every cut.
            </p>
          </div>

          {/* Column 2: Hours */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-cream text-[10px] uppercase tracking-[0.4em] font-semibold text-accent">
              Working Hours
            </h4>
            <ul className="text-cream/80 text-xs space-y-2 tracking-widest uppercase">
              <li className="flex justify-between border-b border-white/5 pb-1">
                <span>ΤΡΙ - ΠΑΡ</span>
                <span>10:00 - 21:00</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-1">
                <span>ΣΑΒΒΑΤΟ</span>
                <span>09:00 - 17:00</span>
              </li>
              <li className="flex justify-between text-accent">
                <span>ΚΥΡ - ΔΕΥ</span>
                <span>CLOSED</span>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Location */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-cream text-[10px] uppercase tracking-[0.4em] font-semibold text-accent">
              Location
            </h4>
            <address className="not-italic text-cream/80 text-xs space-y-2 tracking-widest uppercase">
              <p>Στουρνάρα 19,</p>
              <p>Τρίκαλα 421 00</p>
              <p className="pt-4 text-cream font-bold underline underline-offset-4">
                +30 2431181703
              </p>
            </address>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-accent uppercase tracking-[0.2em]">
            &copy; {new Date().getFullYear()} Three Hairlab. All rights reserved.Desing and Developed by Oikonomou Evangelos
          </p>
          <div className="flex gap-8">
            <a href="https://www.instagram.com/three_hairlab/" className="text-[10px] text-accent hover:text-cream transition-colors uppercase tracking-[0.2em]">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
};