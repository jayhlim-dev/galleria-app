import Link from 'next/link';
import { ArtworkCard } from 'components/gallery/cards';
import { CinematicImage } from 'components/gallery/cinematic-image';
import { ImagePreload } from 'components/gallery/image-preload';
import { MotionSection } from 'components/gallery/motion-section';
import { PageTransition } from 'components/gallery/page-transition';
import { artist, exhibitions, getFeaturedArtworks, journalEntries } from 'data/gallery';

export default function Page() {
    const featured = getFeaturedArtworks();
    const preloadSources = [artist.heroImage, ...featured.map((item) => item.image)];
    const journalPreview = journalEntries.slice(0, 2);
    const exhibitionsPreview = exhibitions.slice(0, 3);

    return (
        <PageTransition>
            <div>
                <ImagePreload sources={preloadSources} />
                <section className="relative isolate overflow-hidden">
                    <CinematicImage
                        src={artist.heroImage}
                        alt={artist.name}
                        className="h-[68vh] min-h-[620px]"
                        priority
                        parallax={26}
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(9,10,12,0.08),rgba(9,10,12,0.42))] md:bg-[linear-gradient(to_bottom,rgba(9,10,12,0.15),rgba(9,10,12,0.62))]" />
                    <div className="absolute inset-x-0 bottom-0 z-10 mx-auto w-full max-w-7xl px-6 pb-14 md:px-10">
                        <p className="text-xs uppercase tracking-[0.22em] text-neutral-100/80">The Residence</p>
                        <h1 className="max-w-4xl font-serif text-5xl leading-tight text-neutral-100 md:text-7xl">
                            {artist.name}
                        </h1>
                        <p className="mt-1 max-w-2xl text-sm leading-relaxed text-neutral-100/85 md:text-base">
                            Where rooms become memory, and memory becomes atmosphere
                        </p>
                        <Link
                            href="/works"
                            className="mt-6 inline-flex gallery-pill bg-neutral-100 text-neutral-900 no-underline"
                        >
                            Enter Gallery
                        </Link>
                    </div>
                </section>

                <section className="w-full px-6 pb-24 pt-18 md:px-[10%] md:pt-20">
                    <MotionSection
                        className="grid lg:gap-10 lg:grid-cols-[1.1fr_0.9fr] py-10 gap-6"
                        revealOnScroll={false}
                    >
                        <p className="font-serif text-3xl leading-tight md:text-4xl">{artist.statementTitle}</p>
                        <p className="text-sm leading-relaxed text-neutral-700 md:text-base">{artist.statement}</p>
                    </MotionSection>

                    <MotionSection className="mt-18 w-full" delay={0.08}>
                        <div className="lg:mb-8 flex items-start gap-3 sm:flex-row sm:items-end justify-between mb-6">
                            <h2 className="font-serif text-4xl leading-none sm:text-[2.65rem] md:text-5xl">
                                Featured Works
                            </h2>
                            <Link
                                href="/works"
                                aria-label="View full collection"
                                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-(--line) text-neutral-700 no-underline transition hover:border-neutral-400 hover:text-neutral-900 sm:h-auto sm:w-auto sm:gap-2 sm:px-4 sm:py-2"
                            >
                                <span className="hidden text-xs uppercase tracking-[0.16em] sm:inline">
                                    View Full Collection
                                </span>
                                <span aria-hidden="true" className="text-base leading-none">
                                    &rarr;
                                </span>
                            </Link>
                        </div>
                        <div className="grid gap-6 md:grid-cols-2">
                            {featured.map((artwork) => (
                                <ArtworkCard key={artwork.id} artwork={artwork} artistName={artist.name} />
                            ))}
                        </div>
                    </MotionSection>

                    <MotionSection className="mt-22 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]" delay={0.12}>
                        <article className="rounded-2xl border border-(--line) bg-[rgba(255,255,255,0.5)] p-7 md:p-9">
                            <p className="text-[11px] uppercase tracking-[0.2em] text-neutral-500">About</p>
                            <h3 className="mt-4 max-w-xl font-serif text-3xl leading-tight md:text-4xl">
                                A private practice shaped by memory, stillness, and emotional architecture.
                            </h3>
                            <p className="mt-5 text-sm leading-relaxed text-neutral-700 md:text-base">{artist.bio}</p>
                            <p className="mt-4 text-sm leading-relaxed text-neutral-700 md:text-base">{artist.philosophy}</p>
                            <Link
                                href="/about"
                                className="mt-7 inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-neutral-600 no-underline transition hover:text-neutral-900"
                            >
                                Read Full Profile
                                <span aria-hidden="true">&rarr;</span>
                            </Link>
                        </article>

                        <article className="rounded-2xl border border-(--line) bg-[rgba(255,255,255,0.5)] p-7 md:p-9">
                            <div className="mb-6 flex items-center justify-between">
                                <p className="text-[11px] uppercase tracking-[0.2em] text-neutral-500">Journal</p>
                                <Link
                                    href="/journal"
                                    className="text-[11px] uppercase tracking-[0.16em] text-neutral-600 no-underline transition hover:text-neutral-900"
                                >
                                    View All
                                </Link>
                            </div>
                            <div className="space-y-6">
                                {journalPreview.map((entry) => (
                                    <article key={entry.id}>
                                        <p className="text-[11px] uppercase tracking-[0.14em] text-neutral-500">{entry.date}</p>
                                        <h4 className="mt-2 font-serif text-2xl leading-tight text-neutral-900">{entry.title}</h4>
                                        <p className="mt-2 text-sm leading-relaxed text-neutral-700">{entry.excerpt}</p>
                                    </article>
                                ))}
                            </div>
                        </article>
                    </MotionSection>

                    <MotionSection className="mt-20 rounded-2xl border border-(--line) bg-[rgba(255,255,255,0.5)] p-7 md:p-9" delay={0.16}>
                        <div className="mb-7 flex items-center justify-between">
                            <h3 className="font-serif text-3xl md:text-4xl">Exhibitions</h3>
                            <Link
                                href="/exhibitions"
                                className="text-[11px] uppercase tracking-[0.16em] text-neutral-600 no-underline transition hover:text-neutral-900"
                            >
                                Full Timeline
                            </Link>
                        </div>
                        <div className="space-y-4">
                            {exhibitionsPreview.map((entry) => (
                                <article
                                    key={`${entry.year}-${entry.title}`}
                                    className="flex flex-col gap-2 border-b border-(--line) pb-4 last:border-b-0 last:pb-0 sm:flex-row sm:items-baseline sm:justify-between"
                                >
                                    <p className="text-[11px] uppercase tracking-[0.16em] text-neutral-500">{entry.year}</p>
                                    <div className="sm:text-right">
                                        <p className="font-serif text-2xl leading-tight text-neutral-900">{entry.title}</p>
                                        <p className="mt-1 text-sm text-neutral-700">
                                            {entry.venue} {entry.note ? `· ${entry.note}` : ''}
                                        </p>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </MotionSection>
                </section>
            </div>
        </PageTransition>
    );
}
