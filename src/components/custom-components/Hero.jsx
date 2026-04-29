import React from 'react'
import Button from '../custom-components/Button'
import { motion } from 'framer-motion'
import heroImage from '../../assets/hero-image.png'
import CircularText from './CircularText'


export default function Hero() {
    return (
        <section id="home" className="bg-black min-h-screen w-full flex flex-col lg:flex-row items-center justify-between px-6 lg:px-32 pt-32 pb-12 lg:pt-20 lg:pb-20 gap-16 font-baricolage relative overflow-hidden">

            
            {/* Background elements for premium feel */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#AADD00 0.5px, transparent 0.5px)', backgroundSize: '30px 30px' }}></div>
            </div>
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#AADD00]/5 blur-[120px] rounded-full pointer-events-none"></div>
            








            {/* - - - - LEFT CONTENT - - - - */}
            <div className="flex flex-col items-start w-full lg:w-[55%] z-10">
                <div className="flex items-center justify-between w-full mb-8 lg:mb-12 relative">
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex items-center px-4 py-2 text-sm md:text-base font-black bg-[#AADD00] text-black shadow-[4px_4px_0_0_white] select-none"
                    >
                        Est. 2026 / Creative Labs
                    </motion.div>

                    {/* Circular Moving Text - Positioned exactly as in mockup */}
                    <div className="lg:hidden flex-shrink-0 ml-4">
                        <CircularText 
                            text="* REGORTZ * CREATIVE * LABS "
                            radius={52}
                            fontSize="12px"
                            color="white"
                            className="opacity-100"
                        />
                    </div>
                </div>



                {/* ── HEADING ── */}





                <motion.h1 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-white text-[44px] md:text-6xl lg:text-[84px] font-black leading-[0.85] mb-8 tracking-[-0.04em] uppercase font-baricolage"
                >
                    <span className="block mb-2">We Make</span>
                    <span className="block mb-2">
                        <span className="text-[#AADD00]">Brands</span> Hit
                    </span>
                    <span className="block">
                        Different<span className="text-[#AADD00] animate-pulse">_</span>
                    </span>
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

            {/* ── MOBILE IMAGE ── (Removed as per user request, replaced by text circle in above section) */}
            {/* <div className="lg:hidden w-full aspect-video rounded-xl overflow-hidden border border-white/10 mb-8">
                <img src={heroImage} alt="Creative Studio" className="w-full h-full object-cover" />
            </div> */}


            {/* Marquee Strip Moved to Bottom of Component or Separated */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden border-t border-white/5 py-5 bg-black z-20 flex">
                <div className="flex w-max animate-marquee">
                    {[1, 2].map((set) => (
                        <div key={set} className="flex items-center">
                            {['Brand Strategy', 'Paid Media', 'Creative Direction', 'Social Campaigns', 'Performance Marketing', 'Visual Identity'].map((item, i) => (
                                <div key={i} className="flex items-center text-[#AADD00] text-[11px] lg:text-[13px] tracking-[0.3em] font-black uppercase whitespace-nowrap cursor-default">
                                    <span className="mx-8 lg:mx-12">{item}</span>
                                    <span>✦</span>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                @keyframes marquee {
                    from { transform: translateX(0); }
                    to   { transform: translateX(-50%); }
                }
                .animate-marquee {
                    animation: marquee 25s linear infinite;
                    will-change: transform;
                }
                .animate-marquee:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </section>
    )
}