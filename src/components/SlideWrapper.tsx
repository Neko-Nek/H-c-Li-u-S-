import { motion, AnimatePresence } from 'motion/react';
import Background from './Background';

interface SlideWrapperProps {
  children: React.ReactNode;
  slideIndex: number;
  totalSlides: number;
  isDark?: boolean;
}

export default function SlideWrapper({ children, slideIndex, totalSlides, isDark = false }: SlideWrapperProps) {
  return (
    <div className={`relative w-full h-full overflow-hidden flex flex-col ${isDark ? 'bg-navy text-white' : 'text-gray-800'}`}>
      {!isDark && <Background />}
      
      <AnimatePresence mode="wait">
        <motion.div
          key={slideIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="relative z-10 flex-1 flex flex-col w-full h-full p-10 md:p-16"
        >
          {children}
        </motion.div>
      </AnimatePresence>

      {/* Footer */}
      <div className={`absolute bottom-6 right-8 z-20 text-[10px] md:text-xs ${isDark ? 'text-white/60' : 'text-gray-400'}`}>
        VNAISOFT — Vietnam AI Software Solution | Năm 2026
      </div>
      
      {/* Slide indicator */}
      <div className={`absolute bottom-6 left-8 z-20 text-[10px] md:text-xs font-medium ${isDark ? 'text-white/60' : 'text-gray-400'}`}>
        {slideIndex + 1} / {totalSlides}
      </div>
    </div>
  );
}
