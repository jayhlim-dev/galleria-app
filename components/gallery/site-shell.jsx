'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { Navbar } from './navbar';
import { GalleryFooter } from './footer';

export function SiteShell({ children }) {
    const pathname = usePathname();

    return (
        <div className="min-h-screen bg-ivory text-ink">
            <Navbar />
            <AnimatePresence mode="wait">
                <motion.main
                    key={pathname}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
                    className="pt-24 md:pt-28"
                >
                    {children}
                </motion.main>
            </AnimatePresence>
            <GalleryFooter />
        </div>
    );
}
