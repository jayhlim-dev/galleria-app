import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MotionSection } from 'components/gallery/motion-section';
import { CinematicImage } from 'components/gallery/cinematic-image';
import { ArtworkCard } from 'components/gallery/cards';
import { ArtworkFullscreenViewer } from 'components/gallery/artwork-fullscreen-viewer';
import { artworks, artists, getArtworkBySlug } from 'data/gallery';

export async function generateStaticParams() {
    return artworks.map((artwork) => ({ slug: artwork.slug }));
}

export async function generateMetadata({ params }) {
    const resolvedParams = await params;
    const artwork = getArtworkBySlug(resolvedParams.slug);
    if (!artwork) return {};
    return {
        title: `${artwork.title} | Private Reverie`,
        description: artwork.story
    };
}

export default async function ArtworkDetailPage({ params }) {
    const resolvedParams = await params;
    const artwork = getArtworkBySlug(resolvedParams.slug);
    if (!artwork) notFound();

    const artist = artists.find((item) => item.slug === artwork.artistSlug);
    const relatedArtworks = artworks.filter(
        (item) => item.artistSlug === artwork.artistSlug && item.slug !== artwork.slug
    );

    return (
        <div className="pb-24">
            <section className="shell-width section-gap">
                <div className="mb-8 flex flex-wrap items-center justify-between gap-5">
                    <div>
                        <p className="eyebrow">Artwork Detail</p>
                        <h1 className="mt-4">{artwork.title}</h1>
                    </div>
                    <ArtworkFullscreenViewer image={artwork.image} title={artwork.title} />
                </div>
                <CinematicImage
                    src={artwork.image}
                    alt={artwork.title}
                    className="cinematic-height"
                    imageClassName="object-contain bg-[#f2eee6]"
                    priority
                    whileHover={undefined}
                />
            </section>

            <MotionSection className="shell-width section-gap border-t">
                <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
                    <article className="space-y-6">
                        <p className="eyebrow">Description</p>
                        <p>{artwork.story}</p>
                        <p>{artwork.notes}</p>
                    </article>
                    <aside className="gallery-card space-y-5 p-7">
                        <MetadataRow label="Artist" value={artist?.name || 'Unknown Artist'} href={`/artists/${artist?.slug || ''}`} />
                        <MetadataRow label="Medium" value={artwork.medium} />
                        <MetadataRow label="Year" value={artwork.year} />
                        <MetadataRow label="Dimensions" value={artwork.dimensions} />
                    </aside>
                </div>
            </MotionSection>

            <MotionSection className="shell-width section-gap border-t" delay={0.08}>
                <div className="mb-10 space-y-3">
                    <p className="eyebrow">Related Artworks</p>
                    <h2>More from this artist</h2>
                </div>
                <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                    {relatedArtworks.map((item) => (
                        <ArtworkCard key={item.id} artwork={item} artistName={artist?.name || 'Unknown Artist'} />
                    ))}
                </div>
            </MotionSection>
        </div>
    );
}

function MetadataRow({ label, value, href }) {
    return (
        <div className="border-b border-line pb-4 last:border-none last:pb-0">
            <p className="text-xs uppercase tracking-[0.14em] text-muted">{label}</p>
            {href ? (
                <Link href={href} className="mt-2 inline-block soft-link text-lg">
                    {value}
                </Link>
            ) : (
                <p className="mt-2 text-lg text-ink">{value}</p>
            )}
        </div>
    );
}
