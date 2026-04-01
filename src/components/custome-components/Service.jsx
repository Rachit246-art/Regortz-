import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const services = [
    {
        id: '01',
        title: 'Brand Identity',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8l4 4-4 4-4-4 4-4z" />
            </svg>
        ),
        list: ['Logo Design', 'Visual Identity System', 'Brand Guidelines', 'Typography & Color', 'Brand Collateral'],
        tag: 'Foundation',
    },
    {
        id: '02',
        title: 'Ad Campaigns',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
        ),
        list: ['Performance Marketing', 'Meta & Google Ads', 'Creative Direction', 'Copy & Messaging', 'A/B Testing'],
        tag: 'Growth',
    },
    {
        id: '03',
        title: 'Social Media',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
        ),
        list: ['Content Strategy', 'Reel & Post Design', 'Community Management', 'Influencer Outreach', 'Monthly Analytics'],
        tag: 'Presence',
    },
]

export default function Services() {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <section id="services" className="bg-black text-white px-6 md:px-16 lg:px-32 py-24 border-t-2 border-[#AADD00]/40 relative overflow-hidden">
            
            {/* Background Accent */}
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/5 pointer-events-none"></div>

            {/* Section label */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 mb-16"
            >
                <div className="h-[2px] w-12 bg-[#AADD00]"></div>
                <p className="text-[#AADD00] font-unica text-sm md:text-lg tracking-[0.4em] uppercase font-black">
                    Our Expertise
                </p>
            </motion.div>

            {/* Section heading */}
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-baricolage font-black text-4xl md:text-5xl lg:text-6xl tracking-tighter leading-none mb-3"
            >
                What We <span className="text-[#AADD00]">Do.</span>
            </motion.h2>

            <p className="font-outfit text-white/80 text-base md:text-lg mb-20 max-w-xl leading-relaxed font-light tracking-wide italic">
                Strategic solutions for ambitious brands. We turn attention into revenue through precision execution.
            </p>

            {/* Service rows */}
            <div className="flex flex-col border-t border-white/5">
                {services.map(({ id, title, icon, list, tag }, index) => (
                    <motion.div
                        key={id}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        className="group border-b border-white/5 relative cursor-pointer"
                    >
                        {/* Top row */}
                        <div className="relative z-10 px-4 md:px-8 py-8 flex items-center gap-6 md:gap-10 transition-colors duration-500">
                            {/* Icon */}
                            <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center border border-white/5 group-hover:border-[#AADD00]/50 group-hover:text-[#AADD00] rounded-full transition-all">
                                {icon}
                            </span>

                            {/* Title */}
                            <h3 className="font-baricolage font-bold text-2xl md:text-3xl lg:text-4xl tracking-tighter leading-none flex-1 font-black group-hover:text-[#AADD00] transition-colors">
                                {title}
                            </h3>

                            {/* Tag */}
                            <span className="hidden md:block font-outfit text-[10px] tracking-[0.3em] uppercase opacity-60 group-hover:opacity-100 font-bold">
                                {tag}
                            </span>

                            {/* Arrow */}
                            <motion.span 
                                animate={{ rotate: hoveredIndex === index ? -45 : 0 }}
                                className="flex-shrink-0 group-hover:text-[#AADD00] transition-colors"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                    <polyline points="12 5 19 12 12 19" />
                                </svg>
                            </motion.span>
                        </div>

                        {/* Expandable list */}
                        <AnimatePresence>
                            {hoveredIndex === index && (
                                <motion.div 
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className="relative z-10 pl-16 md:pl-28 pb-10"
                                >
                                    <ul className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                                        {list.map((item) => (
                                            <li key={item} className="font-outfit text-xs md:text-sm font-bold tracking-tight flex items-center gap-2 text-white/80">
                                                <span className="w-1.5 h-1.5 bg-[#AADD00] rounded-full" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            )}
                        </AnimatePresence>

                    </motion.div>
                ))}
            </div>


        </section>
    )
}