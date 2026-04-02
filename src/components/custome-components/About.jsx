import React from 'react'
import { motion } from 'framer-motion'

export default function About() {
    return (
        <section id="about" className="bg-black text-white relative overflow-hidden min-h-screen flex flex-col justify-center pt-16 md:pt-24 pb-16 md:pb-24 border-t-2 border-[#AADD00]/40">
            
            {/* Background Image Accent */}
            <div className="absolute right-0 top-0 w-1/3 h-full opacity-10 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-l from-[#AADD00]/20 to-transparent"></div>
            </div>

            <div className="px-6 md:px-16 lg:px-32 relative z-10">
                {/* Center Label */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-6 mb-16"
                >
                    <div className="h-[2px] w-16 bg-[#AADD00]"></div>
                    <p className="text-[#AADD00] font-unica text-sm md:text-lg lg:text-xl tracking-[0.4em] uppercase font-black">
                        Our Philosophy
                    </p>
                </motion.div>


                <div className="flex flex-col lg:flex-row items-start gap-16 lg:gap-32">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-3/5"
                    >
                        <h2 className="font-baricolage font-black text-4xl md:text-6xl tracking-tighter leading-none mb-8">
                            We Don&apos;t Just Make Ads. <br />
                            <span className="text-[#AADD00]">We Make Moves.</span>
                        </h2>
                        <p className="font-outfit text-white/80 text-lg md:text-xl leading-relaxed max-w-xl font-light tracking-wide">
                            Regortz Creative Labs is a high-output boutique studio specialized in transforming attention into undeniable brand authority. We blend technical precision with creative anarchy.
                        </p>
                    </motion.div>

                    {/* Stats Grid */}
                    <div className="lg:w-2/5 grid grid-cols-2 gap-x-8 gap-y-12">
                        {[
                            { label: 'PROJECTS DONE', value: '150+' },
                            { label: 'HAPPY CLIENTS', value: '80+' },
                            { label: 'AWARDS WON', value: '12+' },
                            { label: 'COFFEE CUPS', value: '∞' },
                        ].map((stat, i) => (
                            <motion.div 
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex flex-col gap-2"
                            >
                                <span className="font-baricolage font-black text-3xl md:text-5xl tracking-tighter">{stat.value}</span>
                                <span className="font-outfit text-[10px] tracking-[0.3em] uppercase text-white/60 font-bold">{stat.label}</span>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>

            {/* Separator - Perfecting the Gap */}
            <div className="mt-24 border-t border-white/5 mx-6 md:mx-48"></div>
        </section>
    )
}