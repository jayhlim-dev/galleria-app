'use client';

import { motion } from 'framer-motion';

export function MotionSection({ children, className = '', delay = 0, y = 36 }) {
    return (
        <motion.section
            className={className}
            initial={{ opacity: 0, y }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay }}
        >
            {children}
        </motion.section>
    );
}
