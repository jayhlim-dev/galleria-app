import { WorksClient } from 'components/gallery/works-client';
import { ImagePreload } from 'components/gallery/image-preload';
import { PageTransition } from 'components/gallery/page-transition';
import { artist, artworkCategories, artworks } from 'data/gallery';

export const metadata = {
    title: 'Works'
};

export default function WorksPage() {
    const preloadSources = artworks.slice(0, 6).map((artwork) => artwork.image);

    return (
        <PageTransition>
            <div className="mx-auto w-full max-w-7xl px-6 pb-24 pt-16 md:px-10">
                <ImagePreload sources={preloadSources} />
                <p className="text-xs uppercase tracking-[0.2em] text-neutral-600">Works / Portfolio</p>
                <h1 className="mt-5 max-w-4xl font-serif text-5xl leading-tight md:text-6xl">
                    A curated body of artworks shaped by emotional atmosphere and visual stillness.
                </h1>
                <WorksClient artworks={artworks} artistName={artist.name} categories={artworkCategories} />
            </div>
        </PageTransition>
    );
}
