import React from 'react';
import logo from '../../assets/logo.jpg';
import Button from './Button';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-black text-white py-24 border-t-2 border-[#AADD00]/40 relative overflow-hidden">
            
            {/* Background Accent */}
            <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-[#AADD00]/5 to-transparent pointer-events-none"></div>

            <div className="px-6 md:px-16 lg:px-32 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-20 mb-24">
                    
                    {/* Brand Info */}
                    <div className="lg:col-span-2 flex flex-col items-start gap-8">
                        <img
                            src={logo}
                            alt="Regortz Logo"
                            className="h-12 w-auto brightness-110"
                        />
                        <p className="text-white/70 font-outfit text-lg max-w-md leading-relaxed font-light tracking-wide">
                            Full-throttle campaigns, scroll-stopping ads, and brand identities
                            that burn into memory. <span className="text-[#AADD00]">We turn attention into revenue.</span>
                        </p>
                        
                        {/* Social Links */}
                        <div className="flex gap-4">
                            {[
                                { name: 'instagram', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg> },
                                { name: 'twitter', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg> },
                                { name: 'linkedin', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg> },
                                { name: 'youtube', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.11 1 12 1 12s0 3.89.42 5.58a2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.89 23 12 23 12s0-3.89-.42-5.58z"></path><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"></polygon></svg> }
                            ].map((item) => (
                                <motion.a 
                                    key={item.name}
                                    whileHover={{ y: -5, background: 'rgba(170, 221, 0, 0.2)', color: '#AADD00', borderColor: '#AADD00' }}
                                    href={`#${item.name}`} 
                                    className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white/60 hover:text-[#AADD00] transition-all duration-300"
                                >
                                    <span className="sr-only">{item.name}</span>
                                    {item.icon}
                                </motion.a>
                            ))}
                        </div>

                    </div>

                    {/* Quick Menu */}
                    <div className="flex flex-col gap-8">
                        <h3 className="font-outfit font-black text-xl tracking-tight text-[#AADD00]">Navigation</h3>
                        <div className="flex flex-col gap-4 font-outfit text-sm font-medium text-white/50">
                            {[
                                { name: 'Home', path: '/' },
                                { name: 'About', path: '/about' },
                                { name: 'Works', path: '/works' },
                                { name: 'Services', path: '/services' }
                            ].map((item) => (
                                <Link key={item.name} to={item.path} className="hover:text-[#AADD00] transition-colors">{item.name}</Link>
                            ))}
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-8">
                    <p className="text-[11px] text-white/20 font-outfit tracking-wider uppercase font-medium">
                        &copy; 2026 Regortz Creative Labs. All Rights Reserved
                    </p>
                    <div className="flex gap-8 text-[11px] text-white/20 font-outfit tracking-wider uppercase font-medium">
                        <a href="#terms" className="hover:text-white transition-colors">Terms</a>
                        <a href="#privacy" className="hover:text-white transition-colors">Privacy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}