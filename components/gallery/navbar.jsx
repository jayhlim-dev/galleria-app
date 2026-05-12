'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

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

    return (
        <header className="fixed left-0 right-0 top-0 z-50 border-b border-(--line) bg-[rgba(248,246,241,0.68)] backdrop-blur-xl transform-[translateZ(0)]">
            <div className="mx-auto flex h-[72px] w-full max-w-7xl items-center justify-between px-6 md:px-10">
                <Link href="/" className="text-sm font-semibold uppercase tracking-[0.26em] no-underline">
                    Soleil Voss
                </Link>
                <button
                    type="button"
                    className="text-xs uppercase tracking-[0.22em]"
                    onClick={() => setOpen((prev) => !prev)}
                    aria-label="Toggle navigation"
                >
                    {open ? 'Close' : 'Menu'}
                </button>
            </div>
            {open && (
                <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/40 px-6 pt-24 backdrop-blur-sm md:pt-28">
                    <button
                        type="button"
                        className="absolute inset-0 cursor-default"
                        aria-label="Close navigation modal"
                        onClick={() => setOpen(false)}
                    />
                    <nav className="relative w-full max-w-xl rounded-2xl border border-(--line) bg-(--background) p-8 shadow-2xl">
                        <p className="mb-6 text-xs uppercase tracking-[0.22em] text-neutral-500">Navigate</p>
                        <div className="flex flex-col gap-4">
                            {navItems.map((item) => {
                                const isActive = pathname === item.href || pathname?.startsWith(`${item.href}/`);
                                return (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        onClick={() => setOpen(false)}
                                        className={`text-2xl font-serif no-underline transition-opacity md:text-3xl ${
                                            isActive ? 'opacity-100' : 'opacity-60 hover:opacity-100'
                                        }`}
                                    >
                                        {item.label}
                                    </Link>
                                );
                            })}
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
}
