import { ArtistCard } from 'components/gallery/cards';
import { MotionSection } from 'components/gallery/motion-section';
import { PageTransition } from 'components/gallery/page-transition';
import { artists } from 'data/gallery';

export const metadata = {
    title: 'Explore Artists'
};

export default function ArtistsPage() {
    return (
        <PageTransition>
            <div className="mx-auto w-full max-w-7xl px-6 pb-24 pt-16 md:px-10">
                <MotionSection>
                    <p className="text-xs uppercase tracking-[0.2em] text-neutral-600">Explore Artists</p>
                    <h1 className="mt-5 max-w-4xl font-serif text-5xl leading-tight md:text-6xl">
                        Curated artistic worlds shaped by process, memory, and atmosphere.
                    </h1>
                </MotionSection>

                <MotionSection className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3" delay={0.1}>
                    {artists.length ? (
                        artists.map((artist) => <ArtistCard key={artist.id} artist={artist} />)
                    ) : (
                        <p className="text-sm text-neutral-600">Artist profiles are being prepared.</p>
                    )}
                </MotionSection>
            </div>
        </PageTransition>
    );
}
