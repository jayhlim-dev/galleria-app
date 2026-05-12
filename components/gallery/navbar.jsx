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
        <header className="sticky top-0 z-40 border-b border-[var(--line)] bg-[rgba(248,246,241,0.68)] backdrop-blur-xl">
            <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-5 md:px-10">
                <Link href="/" className="text-sm font-semibold uppercase tracking-[0.26em] no-underline">
                    Soleil Voss
                </Link>
                <button
                    type="button"
                    className="text-xs uppercase tracking-[0.22em] md:hidden"
                    onClick={() => setOpen((prev) => !prev)}
                    aria-label="Toggle navigation"
                >
                    {open ? 'Close' : 'Menu'}
                </button>
                <nav className="hidden items-center gap-8 md:flex">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href || pathname?.startsWith(`${item.href}/`);
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`text-xs uppercase tracking-[0.18em] no-underline transition-opacity ${
                                    isActive ? 'opacity-100' : 'opacity-55 hover:opacity-100'
                                }`}
                            >
                                {item.label}
                            </Link>
                        );
                    })}
                </nav>
            </div>
            {open && (
                <nav className="border-t border-[var(--line)] px-6 py-4 md:hidden">
                    <div className="flex flex-col gap-3">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setOpen(false)}
                                className="text-xs uppercase tracking-[0.16em] no-underline opacity-80"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </nav>
            )}
        </header>
    );
}
