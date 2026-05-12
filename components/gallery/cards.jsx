import Link from 'next/link';
import { CinematicImage } from './cinematic-image';

export function ArtistCard({ artist }) {
    return (
        <Link href={`/artists/${artist.slug}`} className="group block no-underline">
            <article className="gallery-card p-3">
                <CinematicImage
                    src={artist.portrait}
                    alt={artist.name}
                    className="aspect-[4/5]"
                    imageClassName="group-hover:scale-[1.03]"
                />
                <div className="space-y-2 px-2 pb-2 pt-5">
                    <h3 className="text-2xl text-ink">{artist.name}</h3>
                    <p className="text-sm uppercase tracking-[0.13em] text-muted">{artist.specialty}</p>
                </div>
            </article>
        </Link>
    );
}

export function ArtworkCard({ artwork, artistName, className = '' }) {
    return (
        <Link href={`/artworks/${artwork.slug}`} className={`group block no-underline ${className}`}>
            <article className="gallery-card p-3">
                <CinematicImage
                    src={artwork.image}
                    alt={artwork.title}
                    className="aspect-[4/5]"
                    imageClassName="group-hover:scale-[1.025]"
                />
                <div className="space-y-2 px-2 pb-2 pt-5">
                    <h3 className="text-xl text-ink">{artwork.title}</h3>
                    <p className="text-sm text-muted">
                        {artistName} - {artwork.year}
                    </p>
                </div>
            </article>
        </Link>
    );
}
