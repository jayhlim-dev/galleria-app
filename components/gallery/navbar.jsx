'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';

const navItems = [
    { href: '/', label: 'Home' },
    { href: '/works', label: 'Works' },
    { href: '/journal', label: 'Journal' },
    { href: '/exhibitions', label: 'Exhibitions' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' }
];

export function Navbar() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = open ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [open]);

    const isActiveRoute = (href) => {
        if (href === '/') {
            return pathname === '/';
        }
        return pathname === href || pathname?.startsWith(`${href}/`);
    };

    return (
        <>
            <header className="fixed left-0 right-0 top-0 z-50 border-b border-(--line) bg-[rgba(248,246,241,0.74)] backdrop-blur-xl transform-[translateZ(0)]">
                <div className="mx-auto flex h-[72px] w-full max-w-7xl items-center justify-between px-5 sm:px-6 md:px-10">
                    <Link href="/" className="text-sm font-semibold uppercase tracking-[0.28em] no-underline">
                        Soleil Voss
                    </Link>
                    <nav className="hidden min-w-0 flex-1 items-center justify-end gap-1 md:flex lg:gap-2">
                        {navItems.map((item) => {
                            const isActive = isActiveRoute(item.href);
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`rounded-full px-2 py-2 text-[10px] uppercase tracking-[0.12em] no-underline transition lg:px-3 lg:text-[11px] lg:tracking-[0.18em] ${
                                        isActive
                                            ? 'bg-black/5 text-neutral-950'
                                            : 'text-neutral-600 hover:bg-black/5 hover:text-neutral-900'
                                    }`}
                                >
                                    {item.label}
                                </Link>
                            );
                        })}
                    </nav>
                    <button
                        type="button"
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full  hover:border-neutral-400 hover:bg-black/5 md:hidden"
                        onClick={() => setOpen((prev) => !prev)}
                        aria-label={open ? 'Close navigation' : 'Open navigation'}
                        aria-expanded={open}
                    >
                        <span className="relative block h-3.5 w-4">
                            <span
                                className={`absolute left-0 top-0 h-px w-4 bg-neutral-800 transition duration-300 ease-out ${
                                    open ? 'translate-y-[7px] rotate-45' : ''
                                }`}
                            />
                            <span
                                className={`absolute left-0 top-[7px] h-px w-4 bg-neutral-800 transition duration-300 ease-out ${
                                    open ? 'opacity-0' : 'opacity-100'
                                }`}
                            />
                            <span
                                className={`absolute left-0 top-[14px] h-px w-4 bg-neutral-800 transition duration-300 ease-out ${
                                    open ? 'translate-y-[-7px] -rotate-45' : ''
                                }`}
                            />
                        </span>
                    </button>
                </div>
            </header>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="fixed inset-0 z-60 bg-black/40 backdrop-blur-sm md:hidden"
                    >
                        <button
                            type="button"
                            className="absolute inset-0 cursor-default"
                            aria-label="Close navigation modal backdrop"
                            onClick={() => setOpen(false)}
                        />

                        <motion.div
                            role="dialog"
                            aria-modal="true"
                            initial={{ opacity: 0, y: -18, scale: 0.985 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -12, scale: 0.99 }}
                            transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
                            className="relative mx-auto mt-6 w-[calc(100%-1.5rem)] max-w-5xl rounded-3xl border border-(--line) bg-(--background) p-6 shadow-2xl sm:mt-8 sm:p-8"
                        >
                            <div className="mb-8 flex items-center justify-between border-b border-(--line) pb-5">
                                <p className="text-xs uppercase tracking-[0.22em] text-neutral-500">Navigate</p>
                                <button
                                    type="button"
                                    onClick={() => setOpen(false)}
                                    className="text-[11px] uppercase tracking-[0.2em] text-neutral-500 transition hover:text-neutral-900"
                                >
                                    Close
                                </button>
                            </div>

                            <nav className="grid gap-4 md:grid-cols-2">
                                {navItems.map((item) => {
                                    const isActive = isActiveRoute(item.href);
                                    return (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            onClick={() => setOpen(false)}
                                            className={`rounded-2xl px-4 py-3 font-serif text-3xl no-underline transition md:text-4xl ${
                                                isActive
                                                    ? 'bg-black/5 text-neutral-950'
                                                    : 'text-neutral-600 hover:bg-black/5 hover:text-neutral-900'
                                            }`}
                                        >
                                            {item.label}
                                        </Link>
                                    );
                                })}
                            </nav>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
