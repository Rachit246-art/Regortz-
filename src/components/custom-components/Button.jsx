import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const VARIANTS = {
    primary: {
        base: 'bg-white text-black border-white shadow-[5px_5px_0_0_#AADD00]',
        hover: 'hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[3px_3px_0_0_#AADD00]',
        active: 'active:translate-x-[5px] active:translate-y-[5px] active:shadow-none',
    },
    outline: {
        base: 'bg-black text-white border-white shadow-[5px_5px_0_0_#AADD00]',
        hover: 'hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[3px_3px_0_0_#AADD00]',
        active: 'active:translate-x-[5px] active:translate-y-[5px] active:shadow-none',
    },
    ghost: {
        base: 'bg-transparent text-white/70 border-transparent',
        hover: 'hover:text-[#AADD00] hover:-translate-y-1',
        active: 'active:translate-y-0',
    },
    connect: {
        base: 'bg-white text-black border-white shadow-[4px_4px_0_0_#AADD00]',
        hover: 'hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_#AADD00]',
        active: 'active:translate-x-[4px] active:translate-y-[4px] active:shadow-none',
    }
}

const SIZES = {
    sm: 'px-5 py-2 text-xs tracking-widest font-bold',
    md: 'px-8 py-3.5 text-sm tracking-widest font-black',
    lg: 'px-12 py-5 text-base tracking-[0.15em] font-black',
}

export default function Button({
    children = 'Click Me',
    variant = 'primary',
    size = 'md',
    disabled = false,
    onClick,
    className = '',
    href,
    target,
}) {
    const v = VARIANTS[variant] || VARIANTS.primary
    const s = SIZES[size] || SIZES.md

    const sharedClasses = `
        inline-flex items-center justify-center gap-3
        border-[2px] rounded-lg
        transition-all duration-200 ease-out
        select-none cursor-pointer
        font-outfit uppercase
        ${v.base} ${v.shadow || ''}
        ${!disabled ? v.hover : ''}
        ${s}
        ${disabled ? 'opacity-40 cursor-not-allowed' : ''}
        ${className}
    `

    if (href) {
        const isInternal = href.startsWith('/') || href.startsWith('#')
        
        if (isInternal && !href.startsWith('#')) {
            return (
                <Link to={href} className={sharedClasses} onClick={onClick}>
                    {children}
                </Link>
            )
        }

        return (
            <a 
                href={href} 
                className={sharedClasses} 
                target={target} 
                rel={target === '_blank' ? 'noopener noreferrer' : undefined}
                onClick={onClick}
            >
                {children}
            </a>
        )
    }

    return (
        <motion.button
            onClick={!disabled ? onClick : undefined}
            disabled={disabled}
            className={sharedClasses}
            whileTap={!disabled ? { scale: 0.98 } : {}}
        >
            {children}
        </motion.button>
    )
}