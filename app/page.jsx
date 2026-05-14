import Link from 'next/link';
import { ArtworkCard } from 'components/gallery/cards';
import { CinematicImage } from 'components/gallery/cinematic-image';
import { ImagePreload } from 'components/gallery/image-preload';
import { MotionSection } from 'components/gallery/motion-section';
import { PageTransition } from 'components/gallery/page-transition';
import { artist, getFeaturedArtworks } from 'data/gallery';

export default function Page() {
    const featured = getFeaturedArtworks();
    const preloadSources = [artist.heroImage, ...featured.map((item) => item.image)];

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
                </section>
            </div>
        </PageTransition>
    );
}
