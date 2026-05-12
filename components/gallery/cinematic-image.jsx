'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export function CinematicImage({
    src,
    alt,
    className = '',
    imageClassName = '',
    priority = false,
    onClick,
    whileHover = { scale: 1.015 },
    sizes = '100vw'
}) {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <motion.div
            className={`relative overflow-hidden rounded-gallery bg-[#ece7de] ${className}`}
            whileHover={whileHover}
            transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
            onClick={onClick}
        >
            <div
                className={`absolute inset-0 animate-pulse bg-gradient-to-b from-[#efebe4] via-[#ece5da] to-[#e8e1d6] transition-opacity duration-1000 ${
                    isLoaded ? 'opacity-0' : 'opacity-100'
                }`}
            />
            <img
                src={src}
                alt={alt}
                loading={priority ? 'eager' : 'lazy'}
                decoding="async"
                sizes={sizes}
                onLoad={() => setIsLoaded(true)}
                className={`h-full w-full object-cover transition-all duration-[1600ms] ease-out ${
                    isLoaded ? 'scale-100 blur-0' : 'scale-[1.035] blur-md'
                } ${imageClassName}`}
            />
        </motion.div>
    );
}
