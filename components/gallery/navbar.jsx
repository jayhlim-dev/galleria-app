'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const links = [
    { href: '/', label: 'Home' },
    { href: '/artists', label: 'Artists' },
    { href: '/about', label: 'About' }
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isHidden, setIsHidden] = useState(false);
    const [lastY, setLastY] = useState(0);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        function handleScroll() {
            const currentY = window.scrollY;
            setIsScrolled(currentY > 20);
            if (currentY > lastY && currentY > 180) {
                setIsHidden(true);
            } else {
                setIsHidden(false);
            }
            setLastY(currentY);
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastY]);

    useEffect(() => {
        if (mobileOpen) document.body.style.overflow = 'hidden';
        else document.body.style.overflow = 'auto';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [mobileOpen]);

    return (
        <>
            <motion.header
                className="fixed left-0 right-0 top-0 z-50 px-4 py-4 md:px-8"
                animate={{ y: isHidden ? -100 : 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
                <div
                    className={`mx-auto flex w-full max-w-[1320px] items-center justify-between rounded-full border px-5 py-3 md:px-7 ${
                        isScrolled ? 'bg-[#f8f5ef]/70 shadow-[var(--shadow-soft)] backdrop-blur-xl' : 'bg-transparent'
                    }`}
                >
                    <Link href="/" className="font-serif text-xl tracking-wide text-ink no-underline">
                        Private Reverie
                    </Link>
                    <nav className="hidden items-center gap-10 md:flex">
                        {links.map((link) => (
                            <Link key={link.href} href={link.href} className="soft-link text-sm uppercase tracking-[0.18em]">
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                    <button
                        type="button"
                        onClick={() => setMobileOpen((open) => !open)}
                        className="inline-flex items-center text-sm uppercase tracking-[0.18em] text-ink md:hidden"
                    >
                        Menu
                    </button>
                </div>
            </motion.header>

            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="fixed inset-0 z-40 bg-[#f8f4ec]/95 backdrop-blur-xl md:hidden"
                    >
                        <div className="shell-width flex h-full flex-col justify-center gap-7">
                            {links.map((link, index) => (
                                <motion.div
                                    key={link.href}
                                    initial={{ opacity: 0, y: 18 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.7, delay: index * 0.08 }}
                                >
                                    <Link
                                        href={link.href}
                                        className="font-serif text-4xl text-ink no-underline"
                                        onClick={() => setMobileOpen(false)}
                                    >
                                        {link.label}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
