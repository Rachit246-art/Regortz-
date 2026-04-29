import React from 'react'
import Navbar from '../components/custom-components/Navbar'
import Works from '../components/custom-components/Works'
import Footer from '../components/custom-components/Footer'
import WhatsAppButton from '../components/custom-components/WhatsAppButton'
import { motion } from 'framer-motion'

import branding_bg from '../assets/project-branding.png'

export default function WorksPage() {
    return (
        <div className="bg-black text-white min-h-screen pt-16 lg:pt-24">
            <Navbar />
            
            {/* Cinematic Hero Section - Unified Style */}
            <div className="relative h-[55vh] md:h-[70vh] w-full flex items-center overflow-hidden border-b border-white/5">
                {/* Background Image Container */}
                <div className="absolute inset-0 z-0">
                    <img 
                        src={branding_bg} 
                        alt="Portfolio" 
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/30 to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                </div>

                <div className="px-6 md:px-32 relative z-10 pt-10 md:pt-14">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex flex-col gap-6"
                    >
                        <div className="flex items-center gap-4">
                            <div className="h-[2px] w-12 bg-[#AADD00]"></div>
                            <p className="font-unica text-[#AADD00] tracking-[0.4em] uppercase font-black text-sm md:text-lg">Portfolio</p>
                        </div>
                        
                        <h1 className="font-baricolage font-black text-4xl md:text-7xl lg:text-8xl tracking-tighter leading-[0.9]">
                            High-Octane <br />
                            <span className="text-[#AADD00]">Portfolio.</span>
                        </h1>
                        
                        <p className="font-outfit text-white/80 text-base md:text-xl max-w-2xl font-light tracking-tight leading-relaxed">
                            We don't just showcase work. We showcase the shockwaves we cause in industries.
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="flex flex-col">
                <Works />
            </div>
            <Footer />
            <WhatsAppButton />
        </div>
    )
}
