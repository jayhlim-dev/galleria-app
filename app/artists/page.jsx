import { artists } from 'data/gallery';
import { ArtistCard } from 'components/gallery/cards';
import { MotionSection } from 'components/gallery/motion-section';

export const metadata = {
    title: 'Explore Artists | Private Reverie'
};

export default function ArtistsPage() {
    return (
        <div className="shell-width section-gap pb-24">
            <MotionSection className="space-y-6">
                <p className="eyebrow">Explore Artists</p>
                <h1 className="max-w-4xl text-balance">A curated roster of contemporary artists and image-makers.</h1>
                <p className="max-w-3xl">
                    Each profile is designed as an editorial space with process notes, exhibition history, and cinematic works.
                </p>
            </MotionSection>

            <MotionSection className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3" delay={0.08}>
                {artists.map((artist) => (
                    <ArtistCard key={artist.id} artist={artist} />
                ))}
            </MotionSection>
        </div>
    );
}
