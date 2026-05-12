import { MotionSection } from 'components/gallery/motion-section';
import { CinematicImage } from 'components/gallery/cinematic-image';
import { exhibitionArchive, manifestoQuote } from 'data/gallery';

export const metadata = {
    title: 'About | Private Reverie'
};

export default function AboutPage() {
    return (
        <div className="pb-24">
            <section className="shell-width section-gap">
                <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
                    <article className="space-y-6">
                        <p className="eyebrow">About the Platform</p>
                        <h1 className="max-w-4xl">Designed as an editorial gallery, not a feed.</h1>
                        <p>
                            Private Reverie is a frontend-first portfolio architecture for contemporary artists. Every layout,
                            transition, and interaction is deliberately quiet so that artworks remain central.
                        </p>
                        <blockquote className="border-l border-line pl-6">
                            <p className="font-serif text-2xl leading-tight text-ink">{manifestoQuote}</p>
                        </blockquote>
                    </article>
                    <CinematicImage
                        src="https://images.unsplash.com/photo-1577720580479-7d839d829c73?auto=format&fit=crop&w=1600&q=80"
                        alt="Gallery passageway"
                        className="aspect-[4/5]"
                        priority
                    />
                </div>
            </section>

            <MotionSection className="shell-width section-gap border-t" delay={0.08}>
                <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                    {[
                        'Curated collections',
                        'Studio diary / journal',
                        'Process documentation',
                        'Private collector mode'
                    ].map((item) => (
                        <div key={item} className="gallery-card p-6">
                            <p className="text-sm uppercase tracking-[0.14em] text-muted">Future Layer</p>
                            <h3 className="mt-4 text-xl text-ink">{item}</h3>
                        </div>
                    ))}
                </div>
            </MotionSection>

            <MotionSection className="shell-width section-gap border-t" delay={0.12}>
                <div className="max-w-3xl space-y-3">
                    <p className="eyebrow">Exhibition Archive</p>
                    <h2>Recent platform curation timeline.</h2>
                </div>
                <div className="mt-10 grid gap-4 md:grid-cols-3">
                    {exhibitionArchive.map((item) => (
                        <article key={`${item.year}-${item.title}`} className="rounded-2xl border bg-[#fbf8f2] p-6">
                            <p className="text-xs uppercase tracking-[0.14em] text-muted">{item.year}</p>
                            <h3 className="mt-3 text-2xl text-ink">{item.title}</h3>
                            <p className="mt-2 text-sm text-muted">{item.location}</p>
                        </article>
                    ))}
                </div>
            </MotionSection>
        </div>
    );
}
