import React from 'react'
import { motion } from 'framer-motion'

const VARIANTS = {
    primary: {
        base: 'bg-[#AADD00] text-black border-[#AADD00]',
        hover: 'hover:bg-white hover:border-white hover:scale-105',
        active: 'active:scale-95',
    },
    outline: {
        base: 'bg-transparent text-white border-white/40',
        hover: 'hover:border-[#AADD00] hover:text-[#AADD00] hover:scale-105',
        active: 'active:scale-95',
    },
    ghost: {
        base: 'bg-transparent text-white/70 border-transparent',
        hover: 'hover:text-[#AADD00] hover:scale-105',
        active: 'active:scale-95',
    },
    connect: {
        base: 'bg-white text-black border-white',
        hover: 'hover:bg-[#AADD00] hover:border-[#AADD00] hover:scale-105',
        shadow: 'shadow-[0_0_20px_rgba(170,221,0,0.3)]',
        active: 'active:scale-95',
    }
}

const SIZES = {
    sm: 'px-5 py-2 text-xs tracking-tight font-bold',
    md: 'px-8 py-3.5 text-sm tracking-tight font-bold',
    lg: 'px-12 py-5 text-base tracking-tight font-black',
}

export default function Button({
    children = 'Click Me',
    variant = 'primary',
    size = 'md',
    disabled = false,
    onClick,
    className = '',
    href,
}) {
    const v = VARIANTS[variant] || VARIANTS.primary
    const s = SIZES[size] || SIZES.md

    const content = (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={!disabled ? onClick : undefined}
            disabled={disabled}
            className={`
                inline-flex items-center justify-center gap-3
                border-[1.5px] rounded-full
                transition-all duration-300 ease-out
                select-none cursor-pointer
                font-outfit
                ${v.base} ${v.shadow || ''}
                ${!disabled ? v.hover : ''}
                ${s}
                ${disabled ? 'opacity-40 cursor-not-allowed' : ''}
                ${className}
            `}
        >
            {children}
        </motion.button>
    )

    if (href) {
        return <a href={href}>{content}</a>
    }

    return content
}