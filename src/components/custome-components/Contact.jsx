import React from 'react'
import { motion } from 'framer-motion'
import Button from './Button'

export default function Contact() {
    return (
        <section id="contact" className="bg-black text-white px-6 md:px-16 lg:px-32 min-h-screen flex flex-col justify-center py-16 lg:py-12 border-t-2 border-[#AADD00]/40 relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#AADD00 0.5px, transparent 0.5px)', backgroundSize: '40px 40px' }}></div>
            </div>

            <div className="flex flex-col lg:flex-row gap-20 relative z-10">
                {/* Left side: Let's talk */}
                <div className="lg:w-1/2 flex flex-col justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-4 mb-12"
                    >
                        <div className="h-[2px] w-12 bg-[#AADD00]"></div>
                        <p className="text-[#AADD00] font-unica text-sm md:text-lg tracking-[0.4em] uppercase font-black">
                            Get In Touch
                        </p>
                    </motion.div>

                    <motion.h2 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="font-baricolage font-black text-5xl md:text-7xl lg:text-[84px] tracking-tighter leading-[0.9] mb-8"
                    >
                        Ready to Hit <br />
                        <span className="text-[#AADD00]">Different?</span>
                    </motion.h2>

                    <p className="text-white/80 font-outfit text-lg max-w-md leading-relaxed mb-12 font-light tracking-wide">
                        Stop blending in. Let's build something that stays in their memory long after they scroll.
                    </p>

                    {/* Quick Contact Links */}
                    <div className="flex flex-col gap-6">
                        <div className="group cursor-pointer">
                            <p className="text-white/60 font-outfit text-[10px] tracking-widest uppercase mb-1 font-black">Email Us</p>
                            <p className="text-2xl font-baricolage font-bold group-hover:text-[#AADD00] transition-colors tracking-tight text-white/90">regortzstudio@gmail.com</p>
                        </div>
                        <div className="group cursor-pointer">
                            <p className="text-white/60 font-outfit text-[10px] tracking-widest uppercase mb-1 font-black">Call Us</p>
                            <p className="text-2xl font-baricolage font-bold group-hover:text-[#AADD00] transition-colors tracking-tight text-white/90">+91 7800000000</p>
                        </div>
                    </div>
                </div>

                {/* Right side: High-end Form */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="lg:w-1/2 bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-3xl"
                >
                    <form className="flex flex-col gap-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="flex flex-col gap-2">
                                <label className="font-outfit text-[10px] tracking-tighter uppercase text-white/70 font-bold">Full Name</label>
                                <input type="text" placeholder="John Doe" className="bg-transparent border-b border-white/10 py-3 focus:border-[#AADD00] outline-none transition-all placeholder:text-white/30 font-outfit font-medium text-xl text-white" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="font-outfit text-[10px] tracking-tighter uppercase text-white/70 font-bold">Work Email</label>
                                <input type="email" placeholder="john@company.com" className="bg-transparent border-b border-white/10 py-3 focus:border-[#AADD00] outline-none transition-all placeholder:text-white/30 font-outfit font-medium text-xl text-white" />
                            </div>
                        </div>
                        
                        <div className="flex flex-col gap-2">
                            <label className="font-outfit text-[10px] tracking-tighter uppercase text-white/70 font-bold">What are you looking for?</label>
                            <div className="flex flex-wrap gap-3 pt-4">
                                {['Branding', 'Ads', 'Socials', 'Strategy'].map((service) => (
                                    <button 
                                        key={service}
                                        type="button"
                                        className="px-6 py-2 rounded-full border border-white/10 text-[10px] font-outfit tracking-widest uppercase hover:bg-[#AADD00] hover:text-black transition-all focus:bg-[#AADD00] focus:text-black focus:border-[#AADD00] font-bold text-white/70"
                                    >
                                        {service}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col gap-2 mt-4">
                            <label className="font-outfit text-[10px] tracking-tighter uppercase text-white/70 font-bold">Project Vision</label>
                            <textarea rows="4" placeholder="Tell us about your mission..." className="bg-transparent border border-white/10 rounded-2xl p-4 focus:border-[#AADD00] outline-none transition-all placeholder:text-white/20 font-outfit font-medium text-lg resize-none text-white"></textarea>
                        </div>



                        <Button variant="primary" size="lg" className="w-full mt-4">
                            IGNITE THE PARTNERSHIP
                        </Button>
                    </form>
                </motion.div>
            </div>
        </section>
    )
}
