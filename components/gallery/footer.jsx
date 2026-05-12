import Link from 'next/link';

export function GalleryFooter() {
    return (
        <footer className="border-t border-line/80 py-12 md:py-16">
            <div className="shell-width flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
                <div className="max-w-lg space-y-3">
                    <p className="eyebrow">Private Reverie</p>
                    <h3 className="font-serif text-2xl text-ink">A quiet platform for contemporary voices in art.</h3>
                </div>
                <div className="flex flex-col gap-2 text-sm uppercase tracking-[0.14em] text-muted">
                    <Link href="/" className="soft-link">
                        Home
                    </Link>
                    <Link href="/artists" className="soft-link">
                        Explore Artists
                    </Link>
                    <Link href="/about" className="soft-link">
                        About
                    </Link>
                </div>
            </div>
        </footer>
    );
}
