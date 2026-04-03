import React from 'react';
import { motion } from 'framer-motion';

const CircularText = ({ 
  text = "CREATIVE * LABS * REGORTZ * ", 
  radius = 50, 
  fontSize = "10px", 
  color = "white", 
  className = "" 
}) => {
  // Ensure we have a trailing space or asterisk for perfect symmetry if needed
  const displayText = text.endsWith(" ") ? text : text + " ";
  const characters = displayText.split("");
  const angle = 360 / characters.length;

  return (
    <motion.div 
      className={`relative flex items-center justify-center aspect-square ${className}`}
      animate={{ rotate: 360 }}
      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      style={{ 
        width: radius * 2, 
        height: radius * 2,
        maxWidth: '100vw',
        maxHeight: '100vw'
      }}
    >
      {characters.map((char, i) => (
        <span
          key={i}
          className="absolute font-black uppercase text-center"
          style={{
            fontSize: fontSize,
            color: color,
            left: '50%',
            top: '50%',
            fontFamily: '"Unica One", sans-serif',
            // Use the requested rotation-translation logic
            // We only use the first rotation to keep characters facing outward (matches mockup)
            transform: `translate(-50%, -50%) rotate(${i * angle}deg) translateY(-${radius}px) scaleY(1.5)`,
            transformOrigin: '0 0', // Crucial for precise rotation around the center span point
            whiteSpace: 'pre'
          }}
        >
          {char}
        </span>
      ))}
    </motion.div>
  );
};

export default CircularText;

