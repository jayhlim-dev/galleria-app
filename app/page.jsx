import Link from 'next/link';
import { MotionSection } from 'components/gallery/motion-section';
import { CinematicImage } from 'components/gallery/cinematic-image';
import { ArtistCard, ArtworkCard } from 'components/gallery/cards';
import { artists, artworks, curatedCollections, manifestoQuote, studioDiary } from 'data/gallery';

export default function Page() {
    const featuredArtists = artists.slice(0, 3);
    const featuredArtworks = artworks.slice(0, 8);

    return (
        <div className="pb-20">
            <section className="shell-width section-gap">
                <div className="editorial-grid items-end gap-10">
                    <div className="space-y-8">
                        <p className="eyebrow">Contemporary Artist Portfolio Platform</p>
                        <h1 className="text-balance">A quiet digital sanctuary for timeless contemporary artworks.</h1>
                        <p className="max-w-2xl text-balance">
                            Private Reverie is designed as an immersive gallery experience where visual pacing, whitespace,
                            and stillness allow each artwork to be encountered with intention.
                        </p>
                        <div className="flex flex-wrap gap-3 pt-2">
                            <Link
                                href="/artists"
                                className="rounded-full border border-ink bg-ink px-6 py-3 text-xs uppercase tracking-[0.18em] text-ivory no-underline transition hover:bg-[#2c2925]"
                            >
                                Explore Artists
                            </Link>
                            <Link
                                href="/about"
                                className="rounded-full border px-6 py-3 text-xs uppercase tracking-[0.18em] text-ink no-underline transition hover:bg-[#ece6dc]"
                            >
                                Read Manifesto
                            </Link>
                        </div>
                    </div>
                    <CinematicImage
                        src="https://images.unsplash.com/photo-1572947650440-e8a97ef053b2?auto=format&fit=crop&w=1800&q=80"
                        alt="Minimalist gallery interior"
                        className="cinematic-height"
                        priority
                    />
                </div>
            </section>

            <MotionSection className="shell-width section-gap border-t" delay={0.05}>
                <div className="mb-10 flex items-end justify-between gap-6">
                    <div>
                        <p className="eyebrow">Featured Artists</p>
                        <h2 className="mt-3">Curated voices shaping contemporary visual language.</h2>
                    </div>
                    <Link href="/artists" className="soft-link text-sm uppercase tracking-[0.14em]">
                        See all artists
                    </Link>
                </div>
                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {featuredArtists.map((artist) => (
                        <ArtistCard key={artist.id} artist={artist} />
                    ))}
                </div>
            </MotionSection>

            <MotionSection className="shell-width section-gap border-t" delay={0.1}>
                <div className="mb-10 space-y-3">
                    <p className="eyebrow">Featured Works</p>
                    <h2>Responsive masonry selections from current exhibitions.</h2>
                </div>
                <div className="masonry">
                    {featuredArtworks.map((artwork) => {
                        const artist = artists.find((candidate) => candidate.slug === artwork.artistSlug);
                        return (
                            <div key={artwork.id} className="masonry-item">
                                <ArtworkCard artwork={artwork} artistName={artist?.name || 'Unknown Artist'} />
                            </div>
                        );
                    })}
                </div>
            </MotionSection>

            <MotionSection className="shell-width section-gap border-t" delay={0.12}>
                <div className="mb-10 space-y-3">
                    <p className="eyebrow">Curated Collections</p>
                    <h2>Slowly assembled narratives across medium, texture, and time.</h2>
                </div>
                <div className="grid gap-5 md:grid-cols-3">
                    {curatedCollections.map((collection) => (
                        <article key={collection.slug} className="gallery-card p-7">
                            <p className="eyebrow">{collection.artworkSlugs.length} works</p>
                            <h3 className="mt-4 text-2xl text-ink">{collection.title}</h3>
                            <p className="mt-4 text-base leading-7">{collection.description}</p>
                        </article>
                    ))}
                </div>
            </MotionSection>

            <MotionSection className="shell-width section-gap border-t" delay={0.16}>
                <blockquote className="mx-auto max-w-4xl text-center">
                    <p className="font-serif text-[1.9rem] leading-tight text-ink md:text-[2.7rem]">{manifestoQuote}</p>
                </blockquote>
            </MotionSection>

            <MotionSection className="shell-width section-gap border-t" delay={0.2}>
                <div className="editorial-grid gap-8">
                    <CinematicImage
                        src="https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&w=1800&q=80"
                        alt="Editorial feature on artist process"
                        className="aspect-[5/4] md:aspect-[16/10]"
                    />
                    <article className="gallery-card flex flex-col justify-between p-7 md:p-9">
                        <div className="space-y-4">
                            <p className="eyebrow">Featured Story</p>
                            <h2 className="text-[2rem] md:text-[2.4rem]">Inside the studio: notes on pace, light, and form.</h2>
                            <p>
                                An editorial profile exploring how contemporary artists construct atmosphere and attention in
                                both process and display.
                            </p>
                        </div>
                        <Link href="/about" className="mt-7 inline-block soft-link text-xs uppercase tracking-[0.17em]">
                            Read editorial
                        </Link>
                    </article>
                </div>
            </MotionSection>

            <MotionSection className="shell-width section-gap border-t" delay={0.25}>
                <div className="mb-8 space-y-3">
                    <p className="eyebrow">Future-ready Sections</p>
                    <h2>Prepared architecture for the next phase.</h2>
                </div>
                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                    {[
                        'Studio diary / journal',
                        'Process documentation',
                        'Exhibition archive',
                        'Save to collection',
                        'Private collector viewing mode',
                        'Editorial interviews'
                    ].map((label) => (
                        <div key={label} className="rounded-2xl border bg-[#faf7f2] p-5">
                            <p className="text-sm tracking-[0.12em] text-muted">{label}</p>
                        </div>
                    ))}
                </div>
                <div className="mt-10 grid gap-4 md:grid-cols-3">
                    {studioDiary.map((entry) => (
                        <article key={entry.slug} className="rounded-2xl border bg-white/65 p-5">
                            <p className="text-xs uppercase tracking-[0.14em] text-muted">{entry.date}</p>
                            <h3 className="mt-3 text-xl text-ink">{entry.title}</h3>
                            <p className="mt-3 text-sm leading-7">{entry.excerpt}</p>
                        </article>
                    ))}
                </div>
            </MotionSection>
        </div>
    );
}
