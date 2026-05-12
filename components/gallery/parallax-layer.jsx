'use client';

import { useRef } from 'react';
import { motion, useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion';

export function ParallaxLayer({ children, className = '', yPercent = 16, scale = 1.03, mouse = false }) {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start']
    });
    const y = useTransform(scrollYProgress, [0, 1], [`-${Math.max(3, yPercent * 0.15)}%`, `${yPercent}%`]);
    const xMotion = useMotionValue(0);
    const yMotion = useMotionValue(0);
    const x = useSpring(xMotion, { stiffness: 140, damping: 24, mass: 0.25 });
    const yMouse = useSpring(yMotion, { stiffness: 140, damping: 24, mass: 0.25 });

    function handlePointerMove(event) {
        if (!mouse) {
            return;
        }
        const element = containerRef.current;
        if (!element) {
            return;
        }
        const bounds = element.getBoundingClientRect();
        const px = ((event.clientX - bounds.left) / bounds.width - 0.5) * 14;
        const py = ((event.clientY - bounds.top) / bounds.height - 0.5) * 14;
        xMotion.set(px);
        yMotion.set(py);
    }

    function handlePointerLeave() {
        if (!mouse) {
            return;
        }
        xMotion.set(0);
        yMotion.set(0);
    }

    return (
        <motion.div
            ref={containerRef}
            className={className}
            onPointerMove={handlePointerMove}
            onPointerLeave={handlePointerLeave}
            style={{ overflow: 'hidden' }}
        >
            <motion.div style={{ y, x: mouse ? x : 0, translateY: mouse ? yMouse : 0, scale }}>{children}</motion.div>
        </motion.div>
    );
}
