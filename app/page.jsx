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
                    <CinematicImage src={artist.heroImage} alt={artist.name} className="h-[88vh] min-h-[620px]" priority parallax={26} />
                    <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(9,10,12,0.15),rgba(9,10,12,0.62))]" />
                    <div className="absolute inset-x-0 bottom-0 z-10 mx-auto w-full max-w-7xl px-6 pb-14 md:px-10">
                        <p className="text-xs uppercase tracking-[0.22em] text-neutral-100/80">Private Artist Residence</p>
                        <h1 className="mt-4 max-w-4xl font-serif text-5xl leading-tight text-neutral-100 md:text-7xl">
                            {artist.name}
                        </h1>
                        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-neutral-100/85 md:text-base">
                            A personal museum of still images, material memory, and editorial storytelling.
                        </p>
                        <Link href="/works" className="mt-9 inline-flex gallery-pill bg-neutral-100 text-neutral-900 no-underline">
                            Enter Gallery
                        </Link>
                    </div>
                </section>

                <section className="mx-auto w-full max-w-7xl px-6 pb-24 pt-18 md:px-10 md:pt-24">
                    <MotionSection className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
                        <p className="font-serif text-3xl leading-tight md:text-5xl">
                            This is not a feed. It is a quiet archive where each artwork is given time, space, and silence.
                        </p>
                        <p className="text-sm leading-relaxed text-neutral-700 md:text-base">{artist.statement}</p>
                    </MotionSection>

                    <MotionSection className="mt-18" delay={0.08}>
                        <div className="mb-8 flex items-end justify-between">
                            <h2 className="font-serif text-4xl md:text-5xl">Featured Works</h2>
                            <Link href="/works" className="text-xs uppercase tracking-[0.16em] no-underline text-neutral-600">
                                View Full Collection
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
