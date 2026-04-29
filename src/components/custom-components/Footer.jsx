import React from 'react';
import logo from '../../assets/logo.jpg';
import Button from './Button';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-black text-white pt-24 pb-8 border-t border-[#AADD00] relative overflow-hidden">
            <div className="px-6 md:px-16 lg:px-32 relative z-10 w-full mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20 items-start">
                    
                    {/* Brand Info */}
                    <div className="flex flex-col items-start gap-6">
                        <img
                            src={logo}
                            alt="Regortz Logo"
                            className="h-10 w-auto brightness-110"
                        />
                        <p className="text-white/60 font-outfit text-xs max-w-[280px] leading-relaxed font-light mt-[-8px]">
                            Full-throttle campaigns, scroll-stopping ads, and brand identities
                            that burn into memory. We turn attention into revenue.
                        </p>
                        
                        {/* Social Links */}
                        <div className="flex gap-4">
                            {[
                                { name: 'instagram', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg> },
                                { name: 'twitter', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l16 16M4 20L20 4"></path></svg> },
                                { name: 'linkedin', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg> },
                                { name: 'youtube', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.11 1 12 1 12s0 3.89.42 5.58a2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.89 23 12 23 12s0-3.89-.42-5.58z"></path><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"></polygon></svg> }
                            ].map((item) => (
                                <motion.a 
                                    key={item.name}
                                    whileHover={{ y: -3 }}
                                    href={`#${item.name}`} 
                                    className="w-10 h-10 border border-white/20 rounded-md flex items-center justify-center text-[#AADD00] hover:border-[#AADD00] transition-colors duration-300"
                                >
                                    <span className="sr-only">{item.name}</span>
                                    {item.icon}
                                </motion.a>
                            ))}
                        </div>

                        {/* Navigation Links inside Col 1 */}
                        <div className="flex flex-col gap-3 mt-2 w-full">
                            <div className="flex gap-5 font-outfit text-[14px] uppercase tracking-wide text-white">
                                <Link to="/" className="hover:text-[#AADD00] transition-colors">HOME</Link>
                                <Link to="/about" className="hover:text-[#AADD00] transition-colors">ABOUT US</Link>
                                <Link to="/works" className="hover:text-[#AADD00] transition-colors">OUR WORKS</Link>
                            </div>
                            <div className="flex gap-5 font-outfit text-[14px] uppercase tracking-wide text-white">
                                <Link to="/services" className="hover:text-[#AADD00] transition-colors">OUR SERVICES</Link>
                            </div>
                        </div>

                    </div>

                    {/* Contact Info */}
                    <div className="flex flex-col gap-6">
                        <h3 className="font-outfit font-bold text-[22px] tracking-tight text-[#AADD00]">Contact Info</h3>
                        <div className="text-white/60 font-outfit text-[13px] leading-relaxed max-w-[280px]">
                            <p>Gold Towers, B5, 50, Residency Rd, next to</p>
                            <p>Ritz Carlton, Bengaluru, Karnataka 560025</p>
                        </div>
                        <div className="text-white/60 font-outfit text-[13px] mt-2">
                            <p className="mb-1">regortzstudio@gmail.com</p>
                            <p>+91 7800000000</p>
                        </div>
                    </div>

                    {/* Subscribe Form */}
                    <div className="flex flex-col gap-6 w-full max-w-sm">
                        <h3 className="font-outfit font-bold text-[22px] tracking-tight text-[#AADD00]">Subscribe to Creative Labs</h3>
                        <form className="flex flex-col gap-6 w-full">
                            <input 
                                type="email" 
                                placeholder="YOUR EMAIL ADDRESS" 
                                className="bg-black text-white px-5 py-[14px] border border-white shadow-[5px_5px_0_0_#AADD00] font-outfit text-xs tracking-[0.15em] placeholder:text-white/40 outline-none uppercase w-full rounded-lg"
                            />
                            <Button variant="primary" className="w-full mt-2">
                                SUBSCRIBE
                            </Button>
                        </form>
                        <div className="flex justify-between items-center mt-3 text-[10px] text-white/50 font-outfit tracking-widest uppercase px-1">
                            <a href="#terms" className="hover:text-white transition-colors">TERMS & CONDITIONS</a>
                            <a href="#privacy" className="hover:text-white transition-colors">PRIVACY & POLICY</a>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="flex justify-end items-center pt-8 border-t border-[#AADD00]">
                    <p className="text-[11px] text-white/40 font-outfit tracking-wider">
                        &copy; 2026 Regortz Creative Labs. All Rights Reserved
                    </p>
                </div>
            </div>
        </footer>
    );
}