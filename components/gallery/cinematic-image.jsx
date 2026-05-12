'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

export function CinematicImage({
    src,
    alt,
    className = '',
    priority = false,
    fill = true,
    parallax = 16,
    sizes = '(min-width: 1280px) 80vw, (min-width: 768px) 92vw, 100vw'
}) {
    const wrapperRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: wrapperRef,
        offset: ['start end', 'end start']
    });
    const y = useTransform(scrollYProgress, [0, 1], [`-${Math.max(4, parallax * 0.3)}%`, `${parallax}%`]);
    const scale = useTransform(scrollYProgress, [0, 1], [1.08, 1]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 1], [0.65, 1, 1]);

    return (
        <div ref={wrapperRef} className={`cinematic-image ${className}`}>
            <motion.div className="cinematic-image-layer" style={{ y, scale, opacity }}>
                <Image src={src} alt={alt} fill={fill} priority={priority} sizes={sizes} className="object-cover" />
            </motion.div>
        </div>
    );
}
