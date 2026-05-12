import Link from 'next/link';

export function GalleryFooter() {
    return (
        <footer className="border-t border-(--line) py-12 md:py-16">
            <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 md:flex-row md:items-end md:justify-between md:px-10">
                <div className="max-w-xl">
                    <p className="text-xs uppercase tracking-[0.2em] text-neutral-600">Soleil Voss Studio</p>
                    <p className="mt-3 text-sm text-neutral-700">
                        A quiet digital residence for artworks, journals, exhibitions, and emotional atmosphere.
                    </p>
                </div>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-xs uppercase tracking-[0.17em] text-neutral-600 md:justify-end">
                    <Link href="/works" className="no-underline hover:text-neutral-900">
                        Works
                    </Link>
                    <Link href="/journal" className="no-underline hover:text-neutral-900">
                        Journal
                    </Link>
                    <Link href="/exhibitions" className="no-underline hover:text-neutral-900">
                        Exhibitions
                    </Link>
                    <Link href="/about" className="no-underline hover:text-neutral-900">
                        About
                    </Link>
                    <Link href="/contact" className="no-underline hover:text-neutral-900">
                        Contact
                    </Link>
                </div>
            </div>
        </footer>
    );
}
