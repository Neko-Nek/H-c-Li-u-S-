import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export default function Background() {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; size: number; duration: number; delay: number }>>([]);

  useEffect(() => {
    // Generate particles concentrated on left and right thirds
    const newParticles = Array.from({ length: 40 }).map((_, i) => {
      // 50% chance for left third, 50% chance for right third
      const isLeft = Math.random() > 0.5;
      const xBase = isLeft ? Math.random() * 30 : 70 + Math.random() * 30;
      
      return {
        id: i,
        x: xBase, 
        size: Math.random() * 3 + 1.5,
        duration: Math.random() * 15 + 15, // 15-30s
        delay: Math.random() * 15,
      };
    });
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden bg-gradient-to-b from-[#FFFFFF] to-[#F0F7FF]">
      
      {/* Hexagon Grid Pattern */}
      <motion.div 
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='103.92304845413264' viewBox='0 0 60 103.92304845413264' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 103.92304845413264L0 86.60254037844386L0 51.96152422706632L30 34.64101615137754L60 51.96152422706632L60 86.60254037844386Z' fill='none' stroke='%2394A3B8' stroke-width='1'/%3E%3Cpath d='M30 51.96152422706632L0 34.64101615137754L0 0L30 -17.32050807568877L60 0L60 34.64101615137754Z' fill='none' stroke='%2394A3B8' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 103.92px'
        }}
        animate={{ opacity: [0.03, 0.08, 0.03] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* SVG Ribbons */}
      <svg className="absolute w-full h-full" viewBox="0 0 1920 1080" preserveAspectRatio="none">
        <defs>
          <linearGradient id="gradTeal" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#028090" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#028090" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#028090" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="gradBlue" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0056B3" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#0056B3" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#0056B3" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient id="gradLightBlue" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#38BDF8" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.4" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="20" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          <filter id="flareGlow">
            <feGaussianBlur stdDeviation="40" result="blur"/>
            <feMerge>
              <feMergeNode in="blur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Ribbon 3: Light Blue (Back layer, slowest) */}
        <motion.path
          fill="url(#gradLightBlue)"
          opacity="0.5"
          filter="url(#glow)"
          animate={{
            d: [
              "M -100 1080 C 300 700, 600 1000, 960 850 C 1320 700, 1600 1000, 2020 800 L 2020 1080 Z",
              "M -100 1080 C 400 850, 700 750, 960 900 C 1220 1050, 1500 800, 2020 900 L 2020 1080 Z",
              "M -100 1080 C 300 700, 600 1000, 960 850 C 1320 700, 1600 1000, 2020 800 L 2020 1080 Z",
            ]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Ribbon 2: Professional Blue (Middle layer) */}
        <motion.path
          fill="url(#gradBlue)"
          opacity="0.6"
          filter="url(#glow)"
          animate={{
            d: [
              "M -100 1080 C 200 850, 500 700, 960 900 C 1420 1100, 1700 750, 2020 850 L 2020 1080 Z",
              "M -100 1080 C 300 750, 600 900, 960 800 C 1320 700, 1600 950, 2020 750 L 2020 1080 Z",
              "M -100 1080 C 200 850, 500 700, 960 900 C 1420 1100, 1700 750, 2020 850 L 2020 1080 Z",
            ]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Ribbon 1: Teal (Front layer, fastest) */}
        <motion.path
          fill="url(#gradTeal)"
          opacity="0.7"
          filter="url(#glow)"
          animate={{
            d: [
              "M -100 1080 C 400 950, 800 800, 960 950 C 1120 1100, 1600 850, 2020 950 L 2020 1080 Z",
              "M -100 1080 C 300 850, 700 1000, 960 850 C 1220 700, 1700 950, 2020 850 L 2020 1080 Z",
              "M -100 1080 C 400 950, 800 800, 960 950 C 1120 1100, 1600 850, 2020 950 L 2020 1080 Z",
            ]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Left Side Ribbon (Vertical-ish) */}
        <motion.path
          fill="url(#gradTeal)"
          opacity="0.5"
          filter="url(#glow)"
          animate={{
            d: [
              "M -100 -100 C 250 200, 150 600, -100 1180 Z",
              "M -100 -100 C 350 300, 100 700, -100 1180 Z",
              "M -100 -100 C 250 200, 150 600, -100 1180 Z",
            ]
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Right Side Ribbon (Vertical-ish) */}
        <motion.path
          fill="url(#gradLightBlue)"
          opacity="0.4"
          filter="url(#glow)"
          animate={{
            d: [
              "M 2020 -100 C 1650 200, 1750 600, 2020 1180 Z",
              "M 2020 -100 C 1550 300, 1800 700, 2020 1180 Z",
              "M 2020 -100 C 1650 200, 1750 600, 2020 1180 Z",
            ]
          }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Subtle Light Flares */}
        <motion.circle
          cx="300"
          cy="850"
          r="120"
          fill="#028090"
          filter="url(#flareGlow)"
          animate={{
            opacity: [0.05, 0.15, 0.05],
            cx: [300, 350, 300],
            cy: [850, 800, 850]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle
          cx="1600"
          cy="900"
          r="150"
          fill="#38BDF8"
          filter="url(#flareGlow)"
          animate={{
            opacity: [0.05, 0.2, 0.05],
            cx: [1600, 1550, 1600],
            cy: [900, 950, 900]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </svg>

      {/* Particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-[#028090] shadow-[0_0_12px_4px_rgba(2,128,144,0.3)]"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            bottom: '-10%',
          }}
          animate={{
            y: ['0vh', '-120vh'],
            x: ['0px', `${Math.random() * 150 - 75}px`],
            opacity: [0, 0.4, 0.6, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "linear",
          }}
        />
      ))}

      {/* Film Grain Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Center Light Vignette (keeps center uncluttered) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-transparent to-[#F8FAFC]/80 pointer-events-none" />
    </div>
  );
}
