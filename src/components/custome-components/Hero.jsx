import React from 'react'
import Button from '../custome-components/Button'
import { motion } from 'framer-motion'
import heroImage from '../../assets/hero-image.png'

export default function Hero() {
    return (
        <section id="home" className="bg-black min-h-screen w-full flex flex-col lg:flex-row items-center justify-between px-6 lg:px-32 pt-44 pb-12 lg:pt-20 lg:pb-20 gap-16 font-baricolage relative overflow-hidden">
            
            {/* Background elements for premium feel */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#AADD00 0.5px, transparent 0.5px)', backgroundSize: '30px 30px' }}></div>
            </div>
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#AADD00]/5 blur-[120px] rounded-full pointer-events-none"></div>

            {/* - - - - LEFT CONTENT - - - - */}
            <div className="flex flex-col items-start w-full lg:w-[55%] z-10">
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex items-center gap-3 bg-white/5 border border-white/10 text-[#AADD00] px-4 py-1.5 mb-8 text-xs font-black tracking-[0.2em] uppercase rounded-full backdrop-blur-sm"
                >
                    <span className="w-2 h-2 bg-[#AADD00] rounded-full animate-pulse"></span>
                    Est. 2026 / Creative Labs
                </motion.div>

                <motion.h1 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-white text-4xl md:text-6xl lg:text-[68px] font-black leading-[0.9] mb-8 tracking-[-0.04em] uppercase"
                >
                    <span className="block text-lg md:text-xl lg:text-2xl font-light tracking-[0.3em] text-white/50 mb-3 font-unica">We Make</span>
                    <span className="text-[#AADD00] block cursor-default">Brands</span>
                    <span className="block">Hit Different<span className="text-[#AADD00]">.</span></span>
                </motion.h1>



                <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-white/70 font-outfit text-base md:text-lg max-w-xl mb-12 leading-relaxed tracking-wide font-light"
                >
                    Full-throttle campaigns, scroll-stopping ads, and brand identities
                    that burn into memory. <span className="text-[#AADD00]/80 font-medium italic underline decoration-1 underline-offset-4">We turn attention into revenue.</span>
                </motion.p>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-wrap gap-6 w-full"
                >
                    <Button variant="primary" size="lg" className="group" href="#contact">
                        BOOK A CALL
                        <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17L17 7M17 7H7M17 7V17" />
                        </svg>
                    </Button>
                    <Button variant="outline" size="lg" href="#works">
                        VIEW PROJECTS
                    </Button>
                </motion.div>
            </div>

            {/* ── RIGHT IMAGE (Desktop) ── */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="hidden lg:block lg:w-[38%] relative group"
            >
                <div className="absolute -inset-4 bg-[#AADD00]/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="relative aspect-square overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                    <img 
                        src={heroImage} 
                        alt="Creative Studio" 
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
                    
                    {/* Floating badge over image */}
                    <motion.div 
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute bottom-8 left-8 bg-black/80 backdrop-blur-md border border-white/10 p-4 rounded-xl"
                    >
                        <p className="text-[#AADD00] text-xs font-black tracking-widest mb-1 uppercase">Next-Gen Creative</p>
                        <p className="text-white text-sm opacity-60 italic">Pushing boundaries 24/7</p>
                    </motion.div>
                </div>
            </motion.div>

            {/* Mobile Image (Small) */}
            <div className="lg:hidden w-full aspect-video rounded-xl overflow-hidden border border-white/10 mb-8">
                <img src={heroImage} alt="Creative Studio" className="w-full h-full object-cover" />
            </div>

            {/* Marquee Strip Moved to Bottom of Component or Separated */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden border-t border-white/5 py-6 bg-black/50 backdrop-blur-sm z-20">
                <div className="flex gap-12 whitespace-nowrap animate-marquee">
                    {[1, 2, 3].map((set) => (
                        <div key={set} className="flex gap-12 items-center">
                            {['Brand Strategy', 'Paid Media', 'Creative Direction', 'Social Campaigns', 'Performance Marketing', 'Visual Identity'].map((item, i) => (
                                <span key={i} className="flex items-center gap-12 text-white/30 text-[10px] tracking-[0.4em] uppercase font-black hover:text-[#AADD00] transition-colors cursor-default">
                                    {item} <span className="text-[#AADD00]/40">✦</span>
                                </span>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                @keyframes marquee {
                    from { transform: translateX(0); }
                    to   { transform: translateX(-33.33%); }
                }
                .animate-marquee {
                    animation: marquee 30s linear infinite;
                }
                .animate-marquee:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </section>
    )
}