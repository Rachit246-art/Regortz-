import React, { useState, useEffect } from 'react'
import logo from '../../assets/logo.jpg'
import Button from './Button'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'HOME', path: '/' },
        { name: 'ABOUT US', path: '/about' },
        { name: 'OUR WORKS', path: '/works' },
        { name: 'OUR SERVICES', path: '/services' }
    ];

    return (
        <nav className={`
            fixed top-0 left-0 w-full h-auto flex justify-between items-center 
            px-6 lg:px-32 py-4 z-[100] transition-all duration-500
            border-b border-[#AADD00] bg-black
        `}>
            {/* Logo Wrapper - Using filters to strip black BG while keeping brand colors */}
            <Link to="/" className="w-[140px] md:w-[160px] flex items-center">
                <img
                    src={logo}
                    alt="Logo"
                    className="w-full h-auto cursor-pointer"
                />
            </Link>

            {/* DESKTOP MENU - Strong & Global White Text */}
            <div className='hidden lg:flex items-center gap-10 font-outfit text-sm font-medium text-white tracking-widest'>
                {navLinks.map((link) => (
                    <Link 
                        key={link.name} 
                        to={link.path} 
                        className={`transition-colors duration-300 relative group text-white hover:text-[#AADD00]`}
                    >
                        {link.name}
                    </Link>
                ))}
                <Button variant="primary" size="sm" href="/contact" className="ml-4">
                    LET'S CONNECT
                </Button>
            </div>

            {/* MOBILE HAMBURGER - Darkened for White Background */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden flex flex-col justify-center items-end w-8 h-8 gap-[6px] z-[110] focus:outline-none relative"
            >
                <div className={`h-[2px] bg-white transition-all duration-300 ${isOpen ? 'w-8 rotate-45 translate-y-[8px]' : 'w-8'}`} />
                <div className={`h-[2px] bg-white transition-all duration-200 ${isOpen ? 'w-0 opacity-0' : 'w-6'}`} />
                <div className={`h-[2px] bg-white transition-all duration-300 ${isOpen ? 'w-8 -rotate-45 -translate-y-[8px]' : 'w-8'}`} />
            </button>

            {/* MOBILE MENU */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.25, ease: 'easeOut' }}
                        className="fixed top-[57px] left-0 w-full bg-white border-b border-zinc-200 shadow-lg flex flex-col px-6 py-4 gap-4 font-outfit font-black text-black z-[100]"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`text-base py-2 border-b border-zinc-100 transition-colors ${location.pathname === link.path ? 'text-[#AADD00]' : 'text-black hover:text-[#AADD00]'}`}
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            to="/contact"
                            onClick={() => setIsOpen(false)}
                            className="mt-2 bg-[#AADD00] text-black font-black text-center py-3 rounded-full text-sm tracking-wide"
                        >
                            Let's Connect
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}