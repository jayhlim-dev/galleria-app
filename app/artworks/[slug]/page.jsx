import Link from 'next/link';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { ArtworkCard } from 'components/gallery/cards';
import { CinematicImage } from 'components/gallery/cinematic-image';
import { MotionSection } from 'components/gallery/motion-section';
import { PageTransition } from 'components/gallery/page-transition';
import { ParallaxLayer } from 'components/gallery/parallax-layer';
import { ArtworkFullscreenViewer } from 'components/gallery/artwork-fullscreen-viewer';
import { artist, artworks, getArtworkBySlug, getRelatedArtworks } from 'data/gallery';

export async function generateStaticParams() {
    return artworks.map((artwork) => ({ slug: artwork.slug }));
}

export default async function ArtworkDetailPage({ params }) {
    const { slug } = await params;
    const artwork = getArtworkBySlug(slug);
    if (!artwork) {
        notFound();
    }

    const relatedWorks = getRelatedArtworks(artwork.slug, artist.slug);
    const artistWorks = artworks.filter((item) => item.artistSlug === artist.slug);
    const currentIndex = artistWorks.findIndex((item) => item.slug === artwork.slug);
    const previousArtwork = currentIndex > 0 ? artistWorks[currentIndex - 1] : null;
    const nextArtwork = currentIndex < artistWorks.length - 1 ? artistWorks[currentIndex + 1] : null;

    return (
        <PageTransition>
            <div className="mx-auto w-full max-w-7xl px-6 pb-24 md:px-10">
                <section className="relative mt-8 overflow-hidden rounded-2xl">
                    <CinematicImage src={artwork.image} alt={artwork.title} className="h-[74vh] min-h-[560px]" priority parallax={32} />
                    <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/10 to-transparent" />
                    <div className="absolute bottom-0 left-0 z-10 p-8 text-neutral-100 md:p-12">
                        <p className="text-xs uppercase tracking-[0.18em]">{artist.name}</p>
                        <h1 className="mt-4 font-serif text-5xl md:text-7xl">{artwork.title}</h1>
                    </div>
                </section>

                <MotionSection className="mt-16 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
                    <div>
                        <p className="text-sm leading-relaxed text-neutral-700 md:text-lg">{artwork.story}</p>
                        <div className="mt-8 grid grid-cols-2 gap-6 text-sm">
                            <div>
                                <p className="text-xs uppercase tracking-[0.16em] text-neutral-500">Medium</p>
                                <p className="mt-2 text-neutral-800">{artwork.medium}</p>
                            </div>
                            <div>
                                <p className="text-xs uppercase tracking-[0.16em] text-neutral-500">Year</p>
                                <p className="mt-2 text-neutral-800">{artwork.year}</p>
                            </div>
                            <div className="col-span-2">
                                <p className="text-xs uppercase tracking-[0.16em] text-neutral-500">Dimensions</p>
                                <p className="mt-2 text-neutral-800">{artwork.dimensions}</p>
                            </div>
                        </div>
                        <div className="mt-10 flex items-center gap-4">
                            <ArtworkFullscreenViewer image={artwork.image} title={artwork.title} />
                        </div>
                    </div>

                    <div className="rounded-2xl border border-(--line) bg-[rgba(255,255,255,0.5)] p-7">
                        <p className="text-xs uppercase tracking-[0.16em] text-neutral-600">Artist</p>
                        <h2 className="mt-3 font-serif text-3xl">{artist.name}</h2>
                        <p className="mt-3 text-sm text-neutral-700">{artist.bio}</p>
                        <Link
                            href="/about"
                            className="mt-7 inline-block text-xs uppercase tracking-[0.16em] no-underline text-neutral-600"
                        >
                            Visit Artist Profile
                        </Link>
                    </div>
                </MotionSection>

                <MotionSection className="mt-12 flex items-center justify-between border-y border-(--line) py-6" delay={0.06}>
                    {previousArtwork ? (
                        <Link href={`/artworks/${previousArtwork.slug}`} className="text-xs uppercase tracking-[0.16em] no-underline text-neutral-600">
                            Previous Artwork
                        </Link>
                    ) : (
                        <span className="text-xs uppercase tracking-[0.16em] text-neutral-400">Beginning Of Series</span>
                    )}
                    {nextArtwork ? (
                        <Link href={`/artworks/${nextArtwork.slug}`} className="text-xs uppercase tracking-[0.16em] no-underline text-neutral-600">
                            Next Artwork
                        </Link>
                    ) : (
                        <span className="text-xs uppercase tracking-[0.16em] text-neutral-400">End Of Series</span>
                    )}
                </MotionSection>

                {artwork.processImages.length > 0 && (
                    <MotionSection className="mt-20">
                        <h2 className="font-serif text-4xl">Process Imagery</h2>
                        <div className="mt-8 grid gap-6 md:grid-cols-2">
                            {artwork.processImages.map((image) => (
                                <ParallaxLayer key={image} className="relative aspect-5/4 overflow-hidden rounded-xl" yPercent={14}>
                                    <Image src={image} alt={`${artwork.title} process`} fill sizes="(min-width: 768px) 45vw, 92vw" className="object-cover" />
                                </ParallaxLayer>
                            ))}
                        </div>
                    </MotionSection>
                )}

                <MotionSection className="mt-20">
                    <div className="mb-8 flex items-end justify-between">
                        <h2 className="font-serif text-4xl">Related Works</h2>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                        {relatedWorks.length ? (
                            relatedWorks.map((work) => <ArtworkCard key={work.id} artwork={work} artistName={artist.name} />)
                        ) : (
                            <p className="text-sm text-neutral-600">No related works available yet.</p>
                        )}
                    </div>
                </MotionSection>
            </div>
        </PageTransition>
    );
}
