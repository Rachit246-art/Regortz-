import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import projectBranding from '../../assets/project-branding.png'
import projectAds from '../../assets/project-ads.png'
import WorkDetails from './WorkDetails'

const works = [
    {
        id: '01',
        title: 'Brand Identity Overhaul',
        category: 'Branding',
        img: projectBranding,
    },
    {
        id: '02',
        title: 'Scroll-Stopping Ad Campaign',
        category: 'Advertising',
        img: projectAds,
    },
    {
        id: '03',
        title: 'Social Media Domination',
        category: 'Growth',
        img: projectBranding, // Reusing branding for now
    },
    {
        id: '04',
        title: 'Full-Throttle Launch Strategy',
        category: 'Strategy',
        img: projectAds, // Reusing ads for now
    },
]

export default function Works() {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section id="works" className="bg-black text-white px-6 md:px-16 lg:px-32 min-h-screen flex flex-col justify-center pt-24 pb-32 border-t-2 border-[#AADD00]/40 relative">
            {/* Section label */}
            <motion.p 
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-white/40 font-unica text-xs tracking-[0.6em] uppercase mb-10"
            >
                Portfolio
            </motion.p>

            {/* Section heading */}
            <div className="mb-20">
                <motion.h2 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="font-baricolage font-black text-4xl md:text-5xl lg:text-6xl tracking-tighter leading-[0.9]"
                >
                    Work That <br/> 
                    <span className="text-[#AADD00]">Speaks Multi-Verse.</span>
                </motion.h2>
            </div>

            {/* Cards grid - 3 cols on LG screens */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
                {works.map((project, i) => (
                    <motion.div
                        key={project.id}
                        onClick={() => setSelectedProject(project)}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-10%" }}
                        transition={{ duration: 0.8, delay: (i % 3) * 0.15 }}
                        className="group flex flex-col gap-6 cursor-pointer"
                    >
                        {/* Thumbnail Container - Reduced aspect ratio to be less vertical */}
                        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-white/10 group-hover:border-[#AADD00]/30 transition-colors duration-500">
                            <motion.img 
                                src={project.img} 
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                            />
                            
                            {/* Overlay on hover */}
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>
                            
                            {/* ID Badge */}
                            <div className="absolute top-4 left-4 font-unica text-[10px] tracking-widest text-[#AADD00] flex items-center gap-2">
                                <span className="w-5 h-[1px] bg-[#AADD00]"></span>
                                {project.id}
                            </div>
                        </div>

                        {/* Card info */}
                        <div className="flex flex-col gap-2">
                            <div className="flex justify-between items-center mb-1">
                                <span className="font-unica text-white/30 text-[10px] tracking-[0.3em] uppercase">
                                    {project.category}
                                </span>
                                <motion.div 
                                    whileHover={{ rotate: 45 }}
                                    className="w-8 h-8 flex items-center justify-center border border-white/10 rounded-full text-[#AADD00]"
                                >
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="7" y1="17" x2="17" y2="7" />
                                        <polyline points="7 7 17 7 17 17" />
                                    </svg>
                                </motion.div>
                            </div>
                            <h3 className="font-baricolage font-bold text-xl md:text-2xl tracking-tight leading-tight group-hover:text-[#AADD00] transition-colors">
                                {project.title}
                            </h3>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Project Details Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <WorkDetails 
                        project={selectedProject} 
                        onClose={() => setSelectedProject(null)} 
                    />
                )}
            </AnimatePresence>
            
            {/* Background Flair */}
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#AADD00]/5 blur-[150px] pointer-events-none rounded-full"></div>
        </section>
    )
}