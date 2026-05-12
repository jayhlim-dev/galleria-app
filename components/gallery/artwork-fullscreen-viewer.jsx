'use client';

import { useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';

export function ArtworkFullscreenViewer({ image, title }) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <button
                type="button"
                onClick={() => setOpen(true)}
                className="rounded-full border border-[var(--line)] px-5 py-2 text-xs uppercase tracking-[0.16em] transition hover:border-neutral-400"
            >
                View Fullscreen
            </button>
            <AnimatePresence>
                {open && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <button
                            type="button"
                            onClick={() => setOpen(false)}
                            className="absolute right-6 top-6 text-xs uppercase tracking-[0.16em] text-neutral-200"
                        >
                            Close
                        </button>
                        <motion.div
                            className="relative h-[84vh] w-full max-w-6xl overflow-hidden rounded-xl"
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.98 }}
                        >
                            <Image src={image} alt={title} fill sizes="100vw" className="object-contain" />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
