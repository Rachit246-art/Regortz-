import React from 'react'
import { motion } from 'framer-motion'
import Button from './Button'

export default function WorkDetails({ project, onClose }) {
    if (!project) return null;

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-10"
        >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/95 backdrop-blur-xl" onClick={onClose}></div>

            {/* Content Container */}
            <motion.div 
                initial={{ y: 50, scale: 0.9, opacity: 0 }}
                animate={{ y: 0, scale: 1, opacity: 1 }}
                exit={{ y: 50, scale: 0.9, opacity: 0 }}
                className="relative w-full max-w-6xl max-h-[90vh] bg-[#111] rounded-3xl overflow-hidden border border-white/10 flex flex-col lg:flex-row"
            >
                {/* Close Button */}
                <button 
                    onClick={onClose}
                    className="absolute top-6 right-6 z-50 w-12 h-12 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-[#AADD00] hover:text-black transition-all"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </button>

                {/* Left: Image (Stays fixed or scrolls) */}
                <div className="lg:w-1/2 h-[400px] lg:h-auto relative overflow-hidden">
                    <img src={project.img} alt={project.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent lg:hidden"></div>
                </div>

                {/* Right: Info (Scrollable) */}
                <div className="lg:w-1/2 p-8 md:p-16 overflow-y-auto custom-scrollbar">
                    <div className="flex items-center gap-4 mb-8">
                        <span className="font-outfit text-[10px] tracking-[0.4em] text-[#AADD00] uppercase font-black">{project.category}</span>
                        <div className="h-[1px] flex-1 bg-white/10"></div>
                        <span className="font-outfit text-xs text-white/40 font-bold">{project.id}</span>
                    </div>

                    <h2 className="font-baricolage font-black text-4xl md:text-6xl tracking-tighter leading-tight mb-8">
                        {project.title}
                    </h2>

                    <div className="space-y-8 mb-12">
                        <div>
                            <p className="font-outfit text-[10px] tracking-[0.2em] uppercase text-white/30 mb-3 font-bold">Project Narrative</p>
                            <p className="font-outfit text-lg text-white/60 leading-relaxed font-light tracking-wide">
                                This project was a deep dive into {project.category.toLowerCase()} innovation. We focused on delivering a high-impact visual language that resonates with next-gen audiences, ensuring every touchpoint feels deliberate and premium.
                            </p>
                        </div>

                        <div>
                            <p className="font-outfit text-[10px] tracking-[0.2em] uppercase text-white/30 mb-3 font-bold">Core Deliverables</p>
                            <ul className="grid grid-cols-2 gap-4">
                                {['Visual System', 'Content Strategy', 'Motion Design', 'Brand DNA'].map((item) => (
                                    <li key={item} className="flex items-center gap-2 text-sm font-bold font-outfit tracking-tight">
                                        <span className="w-1 h-1 bg-[#AADD00] rounded-full"></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="pt-8 border-t border-white/5 flex flex-wrap gap-6">
                        <Button variant="primary" size="lg" href="#contact" onClick={onClose}>
                            START A PROJECT
                        </Button>
                        <div className="flex items-center gap-4">
                            <span className="font-outfit text-[10px] text-white/20 uppercase tracking-widest font-bold">Share Project</span>
                            <div className="flex gap-3">
                                {[1, 2].map(i => <div key={i} className="w-8 h-8 rounded-full border border-white/10 hover:border-[#AADD00] transition-colors cursor-pointer"></div>)}
                            </div>
                        </div>
                    </div>
                </div>

            </motion.div>
        </motion.div>
    )
}
