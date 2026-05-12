'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export function ArtworkFullscreenViewer({ image, title }) {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'auto';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    return (
        <>
            <button
                type="button"
                onClick={() => setIsOpen(true)}
                className="rounded-full border border-line bg-[#f8f4ed] px-5 py-2 text-xs uppercase tracking-[0.16em] text-ink transition hover:bg-ink hover:text-ivory"
            >
                View Fullscreen
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed inset-0 z-[70] flex items-center justify-center bg-[#0e0d0a]/95 p-4 md:p-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <motion.img
                            src={image}
                            alt={title}
                            className="max-h-full max-w-full object-contain"
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.98 }}
                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        />
                        <button
                            type="button"
                            onClick={() => setIsOpen(false)}
                            className="absolute right-5 top-5 rounded-full border border-white/30 px-4 py-2 text-xs uppercase tracking-[0.14em] text-white"
                        >
                            Close
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
