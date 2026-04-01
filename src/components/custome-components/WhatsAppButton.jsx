import React from 'react'
import { motion } from 'framer-motion'

export default function WhatsAppButton() {
    const phoneNumber = "917800000000"; // Replace with actual number
    const message = "Hey Regortz Creative Labs! I'm interested in starting a project together.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 1, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="fixed bottom-8 right-8 z-[150] flex items-center gap-3 bg-[#25D366] text-white p-4 rounded-full"
            title="Chat with us on WhatsApp"
        >
            
            <svg 
                width="28" 
                height="28" 
                viewBox="0 0 24 24" 
                fill="currentColor" 
                className="relative z-10"
            >
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.767 5.767 0 1.267.408 2.438 1.103 3.394l-.717 2.63 2.703-.71c.829.475 1.785.748 2.805.748 3.182 0 5.617-2.438 5.617-5.618 0-3.182-2.586-7.211-5.744-6.211zm3.692 8.232c-.174.485-.873.873-1.214.921-.34.048-.77.048-1.214-.096-.264-.096-.583-.217-.981-.387-1.706-.73-2.805-2.455-2.894-2.571-.087-.116-.714-.951-.714-1.815 0-.864.456-1.291.621-1.465.165-.174.34-.214.453-.214.113 0 .227.01.32.02.13.01.292-.048.456.34.174.412.592 1.45.642 1.556.048.106.08.23.01.378-.07.148-.106.242-.214.364-.106.121-.22.271-.314.365-.106.095-.213.193-.093.399.121.214.538.887 1.15 1.433.788.694 1.45.91 1.656 1.012.203.113.32.096.444-.048.121-.145.523-.615.656-.826.13-.214.26-.174.444-.113s1.173.553 1.373.655c.203.106.33.155.378.242.062.087.062.535-.113 1.013z"/>
            </svg>
            
            <span className="hidden md:block font-baricolage font-bold text-sm tracking-tight relative z-10 pr-2">Chat with us</span>
        </motion.a>
    )
}
