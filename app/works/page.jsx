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
            <div className="mx-auto w-full max-w-7xl px-6 pb-28 pt-22 md:px-10 md:pt-28">
                <ImagePreload sources={preloadSources} />
                <p className="text-[11px] uppercase tracking-[0.24em] text-neutral-500">WORKS / PORTFOLIO</p>
                <h1 className="mt-6 max-w-4xl font-serif text-[2.4rem] leading-[1.04] text-neutral-900 md:text-6xl">
                    An archive of stillness shaped through paint, shadow, and time.
                </h1>
                <p className="mt-6 max-w-2xl text-sm leading-relaxed text-neutral-600 md:text-base">
                    Fragments of stillness translated into image
                </p>
                <WorksClient artworks={artworks} artistName={artist.name} categories={artworkCategories} />
            </div>
        </PageTransition>
    );
}
