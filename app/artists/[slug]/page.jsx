import { notFound } from 'next/navigation';
import { ArtistSectionsTabs } from 'components/gallery/artist-sections-tabs';
import { CinematicImage } from 'components/gallery/cinematic-image';
import { ArtworkCard } from 'components/gallery/cards';
import { MotionSection } from 'components/gallery/motion-section';
import { Timeline } from 'components/gallery/timeline';
import { artists, getArtistBySlug, getArtworksByArtist } from 'data/gallery';

export async function generateStaticParams() {
    return artists.map((artist) => ({ slug: artist.slug }));
}

export async function generateMetadata({ params }) {
    const resolvedParams = await params;
    const artist = getArtistBySlug(resolvedParams.slug);
    if (!artist) return {};
    return {
        title: `${artist.name} | Private Reverie`,
        description: artist.shortBio
    };
}

export default async function ArtistProfilePage({ params }) {
    const resolvedParams = await params;
    const artist = getArtistBySlug(resolvedParams.slug);
    if (!artist) notFound();

    const artistArtworks = getArtworksByArtist(artist.slug);

    return (
        <div className="pb-24">
            <section className="shell-width section-gap">
                <div className="space-y-6">
                    <p className="eyebrow">{artist.specialty}</p>
                    <h1 className="max-w-4xl">{artist.name}</h1>
                    <p className="max-w-3xl">{artist.shortBio}</p>
                </div>
                <div className="mt-10 grid gap-6 lg:grid-cols-[1.35fr_0.65fr]">
                    <CinematicImage src={artist.heroImage} alt={`${artist.name} hero artwork`} className="cinematic-height" priority />
                    <CinematicImage src={artist.portrait} alt={artist.name} className="h-full min-h-[22rem]" />
                </div>
            </section>

            <MotionSection className="shell-width section-gap border-t">
                <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
                    <ArtistSectionsTabs artist={artist} />
                    <div className="gallery-card p-6 md:p-9">
                        <p className="eyebrow mb-6">Exhibition Timeline</p>
                        <Timeline items={artist.exhibitions} />
                    </div>
                </div>
            </MotionSection>

            <MotionSection className="shell-width section-gap border-t" delay={0.08}>
                <div className="mb-10 space-y-3">
                    <p className="eyebrow">Artwork Gallery</p>
                    <h2>Selected works</h2>
                </div>
                <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                    {artistArtworks.map((artwork) => (
                        <ArtworkCard key={artwork.id} artwork={artwork} artistName={artist.name} />
                    ))}
                </div>
            </MotionSection>
        </div>
    );
}
