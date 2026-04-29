import React from 'react'
import Navbar from '../components/custom-components/Navbar'
import Contact from '../components/custom-components/Contact'
import Footer from '../components/custom-components/Footer'
import WhatsAppButton from '../components/custom-components/WhatsAppButton'
import { motion, AnimatePresence } from 'framer-motion'
import teamPhoto from '../assets/project-branding.png'
import studioPhoto from '../assets/project-ads.png'
import generatedTeam from '../assets/team-hero.png'

export default function AboutPage() {
    return (
        <div className="bg-black text-white min-h-screen pt-16 lg:pt-24">
            <Navbar />
            
            {/* Cinematic Hero Section */}
            <div className="relative h-[55vh] md:h-[70vh] w-full flex items-center overflow-hidden border-b border-white/5">
                {/* Background Image Container */}
                <div className="absolute inset-0 z-0">
                    <img 
                        src={generatedTeam} 
                        alt="The Lab Team" 
                        className="w-full h-full object-cover"
                    />
                    {/* Balanced Overlays */}
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
                            <p className="font-unica text-[#AADD00] tracking-[0.4em] uppercase font-black text-sm md:text-lg">The Laboratory</p>
                        </div>
                        
                        <h1 className="font-baricolage font-black text-4xl md:text-7xl lg:text-8xl tracking-tighter leading-[0.9]">
                            We Think. <br />
                            <span className="text-[#AADD00]">We Ignite.</span>
                        </h1>
                        
                        <p className="font-outfit text-white/80 text-base md:text-xl max-w-2xl font-light tracking-tight leading-relaxed">
                            Regortz is a high-output creative foundry designed for the bold. We don't follow trends; we set fires.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Content Sections */}
            <div className="flex flex-col">
                {/* Philosophy Section - REDUCED SIZE */}
                <section className="px-6 md:px-32 grid grid-cols-1 lg:grid-cols-2 gap-20 py-12 border-t-2 border-[#AADD00]/40">
                    <div className="flex flex-col justify-center gap-10">
                        <h2 className="font-baricolage font-black text-4xl md:text-6xl tracking-tighter leading-tight">
                            The Collective <br />
                            Destiny.
                        </h2>
                        <div className="flex flex-col gap-6 font-outfit text-white/70 text-lg leading-relaxed font-light">
                            <p>We are a localized team of absolute experts. No interns, no "account managers" — just high-tier creatives and strategists working directly on your brand's future.</p>
                            <p>Our method is simple: technical precision backed by creative anarchy.</p>
                        </div>
                    </div>
                    {/* Smaller Image Grid - NO EFFECTS */}
                    <div className="relative h-[300px] md:h-[400px] rounded-3xl overflow-hidden border border-white/10 group">
                        <img src={studioPhoto} alt="Indore" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                        <div className="absolute bottom-8 left-8">
                            <p className="font-unica text-[10px] tracking-widest text-[#AADD00] uppercase mb-1">Our Base</p>
                            <p className="font-baricolage text-2xl font-black">Indore, India</p>
                        </div>
                    </div>
                </section>

                {/* Team Section - SMALLER CARDS & NO EFFECTS */}
                <section className="px-6 md:px-32 py-12 bg-white/5 border-t-2 border-[#AADD00]/40">
                    <div className="flex flex-col gap-16">
                        <div className="flex justify-between items-end border-b border-white/10 pb-10">
                            <h2 className="font-baricolage font-black text-4xl md:text-5xl tracking-tighter">Our Team</h2>
                        </div>

                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                { name: 'Aryan Regortz', role: 'Creative Director', pos: "object-left" },
                                { name: 'Aman S.', role: 'Head of Growth', pos: "object-center" },
                                { name: 'The Studio', role: 'Motion Lab', pos: "object-right" },
                                { name: 'Join Us', role: 'Talent Foundry', pos: "object-center" }
                            ].map((person, i) => (
                                <motion.div 
                                    key={person.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="group flex flex-col gap-4"
                                >
                                    <div className="aspect-[3/4] bg-white/5 rounded-2xl overflow-hidden border border-white/5">
                                        <img src={generatedTeam} className={`w-full h-full object-cover ${person.pos}`} alt="Human" />
                                    </div>
                                    <div>
                                        <h3 className="font-baricolage font-bold text-xl group-hover:text-[#AADD00] transition-colors">{person.name}</h3>
                                        <p className="font-outfit text-white/40 uppercase tracking-widest text-[8px] font-black">{person.role}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>


            <Footer />
            <WhatsAppButton />
        </div>
    )
}
