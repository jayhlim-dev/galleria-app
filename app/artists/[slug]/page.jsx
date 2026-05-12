import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArtistSectionsTabs } from 'components/gallery/artist-sections-tabs';
import { ArtworkCard } from 'components/gallery/cards';
import { CinematicImage } from 'components/gallery/cinematic-image';
import { MotionSection } from 'components/gallery/motion-section';
import { PageTransition } from 'components/gallery/page-transition';
import { Timeline } from 'components/gallery/timeline';
import { artists, getArtistBySlug, getArtworksByArtist } from 'data/gallery';

export async function generateStaticParams() {
    return artists.map((artist) => ({ slug: artist.slug }));
}

export default async function ArtistProfilePage({ params }) {
    const { slug } = await params;
    const artist = getArtistBySlug(slug);
    if (!artist) {
        notFound();
    }

    const artistWorks = getArtworksByArtist(slug);

    return (
        <PageTransition>
            <div className="mx-auto w-full max-w-7xl px-6 pb-24 md:px-10">
                <section className="relative mt-8 overflow-hidden rounded-2xl">
                    <CinematicImage src={artist.heroImage} alt={artist.name} className="h-[72vh] min-h-[540px]" priority parallax={30} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />
                    <div className="absolute bottom-0 left-0 z-10 p-8 text-neutral-100 md:p-12">
                        <p className="text-xs uppercase tracking-[0.2em]">{artist.location}</p>
                        <h1 className="mt-4 font-serif text-5xl md:text-7xl">{artist.name}</h1>
                    </div>
                </section>

                <MotionSection className="mt-16 grid gap-10 lg:grid-cols-[260px_1fr]">
                    <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
                        <Image src={artist.portrait} alt={artist.name} fill sizes="(min-width: 1024px) 260px, 60vw" className="object-cover" />
                    </div>
                    <ArtistSectionsTabs artist={artist} />
                </MotionSection>

                <MotionSection className="mt-20" delay={0.1}>
                    <div className="mb-8 flex items-end justify-between">
                        <h2 className="font-serif text-4xl">Artworks</h2>
                        <button type="button" className="text-xs uppercase tracking-[0.16em] text-neutral-600">
                            Follow Artist
                        </button>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                        {artistWorks.length ? (
                            artistWorks.map((artwork) => <ArtworkCard key={artwork.id} artwork={artwork} artistName={artist.name} />)
                        ) : (
                            <p className="text-sm text-neutral-600">No artworks listed yet.</p>
                        )}
                    </div>
                </MotionSection>

                <MotionSection className="mt-20 grid gap-8 lg:grid-cols-2">
                    <div>
                        <h2 className="font-serif text-4xl">Process</h2>
                        <div className="mt-6 grid gap-5 sm:grid-cols-2">
                            {artist.processImages?.length ? (
                                artist.processImages.map((image) => (
                                    <div key={image} className="relative aspect-[4/5] overflow-hidden rounded-xl">
                                        <Image
                                            src={image}
                                            alt={`${artist.name} process`}
                                            fill
                                            sizes="(min-width: 640px) 40vw, 90vw"
                                            className="object-cover"
                                        />
                                    </div>
                                ))
                            ) : (
                                <p className="text-sm text-neutral-600">Process visuals coming soon.</p>
                            )}
                        </div>
                    </div>
                    <div>
                        <h2 className="font-serif text-4xl">Studio Journal</h2>
                        <div className="mt-6 space-y-6">
                            {artist.journals?.length ? (
                                artist.journals.map((entry) => (
                                    <article key={entry.id} className="rounded-xl border border-[var(--line)] bg-[rgba(255,255,255,0.55)] p-6">
                                        <p className="text-xs uppercase tracking-[0.14em] text-neutral-500">{entry.date}</p>
                                        <h3 className="mt-3 font-serif text-2xl">{entry.title}</h3>
                                        <p className="mt-3 text-sm text-neutral-700">{entry.excerpt}</p>
                                    </article>
                                ))
                            ) : (
                                <p className="text-sm text-neutral-600">Journal notes will be published soon.</p>
                            )}
                        </div>
                    </div>
                </MotionSection>

                <MotionSection className="mt-20 grid gap-8 rounded-2xl border border-[var(--line)] bg-[rgba(255,255,255,0.45)] p-8 lg:grid-cols-[1fr_0.9fr] md:p-12">
                    <div>
                        <h2 className="font-serif text-4xl">Exhibitions</h2>
                        <p className="mt-4 text-sm text-neutral-700">A timeline of recent and selected presentations.</p>
                        <div className="mt-8">
                            <Timeline items={artist.exhibitions} />
                        </div>
                    </div>
                    <div className="space-y-4">
                        <h3 className="font-serif text-3xl">Keep In Touch</h3>
                        <p className="text-sm text-neutral-700">For collector inquiries, studio visits, and exhibition announcements.</p>
                        <div className="pt-4 text-xs uppercase tracking-[0.16em] text-neutral-700">
                            <a href={artist.links.email} className="mr-4 no-underline">
                                Contact
                            </a>
                            <a href={artist.links.instagram} className="mr-4 no-underline">
                                Instagram
                            </a>
                            <a href={artist.links.website} className="no-underline">
                                Website
                            </a>
                        </div>
                        <Link href="/journal" className="inline-block pt-6 text-xs uppercase tracking-[0.16em] no-underline text-neutral-600">
                            Read Platform Journal
                        </Link>
                    </div>
                </MotionSection>
            </div>
        </PageTransition>
    );
}
