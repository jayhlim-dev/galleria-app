import Link from 'next/link';
import { footerContent } from 'data/gallery';

export function GalleryFooter() {
    const year = new Date().getFullYear();

    return (
        <footer className="relative border-t border-(--line)">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(to_right,transparent,rgba(34,30,26,0.2),transparent)]" />
            <div className="mx-auto w-full max-w-7xl px-6 py-16 md:px-10 md:py-18">
                <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
                    <div className="max-w-xl">
                        <p className="text-[11px] uppercase tracking-[0.22em] text-neutral-600">{footerContent.eyebrow}</p>
                        <h2 className="mt-4 font-serif text-4xl leading-none text-neutral-900 md:text-[3.2rem]">
                            {footerContent.title}
                        </h2>
                        <p className="mt-5 max-w-xl text-sm leading-relaxed text-neutral-700 md:text-base">
                            {footerContent.description}
                        </p>
                        {/* <a
                            href={footerContent.cta.href}
                            className="mt-8 inline-flex rounded-full border border-(--line) px-4 py-2 text-[11px] uppercase tracking-[0.15em] text-neutral-700 no-underline transition hover:border-neutral-400 hover:text-neutral-900"
                        >
                            {footerContent.cta.label}
                        </a> */}
                    </div>

                    <div className="lg:pl-8">
                        <p className="text-[11px] uppercase tracking-[0.2em] text-neutral-500">
                            {footerContent.navigationLabel}
                        </p>
                        <div className="mt-5 grid grid-cols-2 gap-x-8 gap-y-4 text-xs uppercase tracking-[0.16em] text-neutral-700">
                            {footerContent.navigation.map((item) => (
                                <Link key={item.href} href={item.href} className="no-underline transition hover:text-neutral-900">
                                    {item.label}
                                </Link>
                            ))}
                        </div>

                        <div className="mt-8 flex flex-col gap-3 border-t border-(--line) pt-4 text-[11px] uppercase tracking-[0.14em] text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
                            <a
                                href={`mailto:${footerContent.contactEmail}`}
                                className="no-underline transition hover:text-neutral-800"
                            >
                                {footerContent.contactEmail}
                            </a>
                            <span>{year} Soleil Voss</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
