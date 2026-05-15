import Image from 'next/image';
import { MotionSection } from 'components/gallery/motion-section';
import { PageTransition } from 'components/gallery/page-transition';
import { ParallaxLayer } from 'components/gallery/parallax-layer';
import { Timeline } from 'components/gallery/timeline';
import { artist, exhibitions, journalEntries, studioMoments } from 'data/gallery';

export const metadata = {
    title: 'About The Artist'
};

export default function AboutPage() {
    return (
        <PageTransition>
            <div className="mx-auto w-full max-w-7xl px-6 pb-24 pt-12 md:px-10">
                <MotionSection>
                    <p className="text-xs uppercase tracking-[0.2em] text-neutral-600">About The Artist</p>
                    <h1 className="mt-5 max-w-4xl font-serif text-5xl leading-tight md:text-6xl">
                        Biography, philosophy, inspirations, and the studio ecology.
                    </h1>
                </MotionSection>

                <MotionSection className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.1fr]">
                    <ParallaxLayer className="relative aspect-[4/5] overflow-hidden rounded-2xl" yPercent={16} mouse>
                        <Image
                            src="/images/png/self-portrait.png"
                            alt={artist.name}
                            fill
                            sizes="(min-width: 1024px) 40vw, 90vw"
                            className="object-cover"
                        />
                    </ParallaxLayer>
                    <div className="rounded-2xl border border-[var(--line)] bg-[rgba(255,255,255,0.56)] p-7 md:p-10">
                        <p className="text-xs uppercase tracking-[0.18em] text-neutral-600">{artist.location}</p>
                        <h2 className="mt-4 font-serif text-4xl md:text-5xl">{artist.name}</h2>
                        <p className="mt-5 text-sm leading-relaxed text-neutral-700 md:text-base">{artist.bio}</p>
                        <p className="mt-5 text-sm leading-relaxed text-neutral-700 md:text-base">{artist.statement}</p>
                        <p className="mt-5 text-sm leading-relaxed text-neutral-700 md:text-base">
                            {artist.philosophy}
                        </p>
                    </div>
                </MotionSection>

                <MotionSection className="mt-20 grid gap-8 lg:grid-cols-2" delay={0.1}>
                    <article className="rounded-2xl border border-[var(--line)] bg-[rgba(255,255,255,0.54)] p-7 md:p-10">
                        <h3 className="font-serif text-3xl">Inspirations</h3>
                        {artist.inspirations?.length ? (
                            <ul className="mt-6 space-y-4 text-sm text-neutral-700 md:text-base">
                                {artist.inspirations.map((inspiration) => (
                                    <li key={inspiration} className="border-b border-[var(--line)] pb-3">
                                        {inspiration}
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="mt-6 text-sm text-neutral-600">Inspirations will be updated soon.</p>
                        )}
                    </article>
                    <article className="rounded-2xl border border-[var(--line)] bg-[rgba(255,255,255,0.54)] p-7 md:p-10">
                        <h3 className="font-serif text-3xl">Personal Writings</h3>
                        <div className="mt-6 space-y-5">
                            {journalEntries.length ? (
                                journalEntries.slice(0, 3).map((entry) => (
                                    <div key={entry.id}>
                                        <p className="text-xs uppercase tracking-[0.15em] text-neutral-500">
                                            {entry.date}
                                        </p>
                                        <p className="mt-2 font-serif text-2xl">{entry.title}</p>
                                        <p className="mt-2 text-sm text-neutral-700">{entry.excerpt}</p>
                                    </div>
                                ))
                            ) : (
                                <p className="text-sm text-neutral-600">Journal entries coming soon.</p>
                            )}
                        </div>
                    </article>
                </MotionSection>

                <MotionSection className="mt-20" delay={0.12}>
                    <h3 className="font-serif text-4xl">Studio Process</h3>
                    <div className="mt-8 grid gap-5 sm:grid-cols-3">
                        {studioMoments.length ? (
                            studioMoments.map((image) => (
                                <ParallaxLayer
                                    key={image}
                                    className="relative aspect-[4/5] overflow-hidden rounded-xl"
                                    yPercent={12}
                                >
                                    <Image
                                        src={image}
                                        alt="Studio process"
                                        fill
                                        sizes="(min-width: 640px) 30vw, 90vw"
                                        className="object-cover"
                                    />
                                </ParallaxLayer>
                            ))
                        ) : (
                            <p className="sm:col-span-3 text-sm text-neutral-600">
                                Studio process imagery is being prepared.
                            </p>
                        )}
                    </div>
                </MotionSection>

                <MotionSection
                    className="mt-20 rounded-2xl border border-[var(--line)] bg-[rgba(255,255,255,0.56)] p-7 md:p-10"
                    delay={0.14}
                >
                    <h3 className="font-serif text-4xl">Exhibition History</h3>
                    <p className="mt-4 text-sm text-neutral-700">
                        A timeline of selected solo and group presentations.
                    </p>
                    <div className="mt-8">
                        <Timeline items={exhibitions} />
                    </div>
                </MotionSection>

                <MotionSection
                    className="mt-16 space-y-8 text-sm leading-relaxed text-neutral-700 md:text-lg"
                    delay={0.16}
                >
                    <p>
                        This site is intentionally built as a private universe for one artist. It is not designed for
                        speed, endless feeds, or attention loops.
                    </p>
                    <p>
                        The interface privileges quiet pacing, whitespace, and emotional clarity so the artwork always
                        remains the center of gravity.
                    </p>
                </MotionSection>
            </div>
        </PageTransition>
    );
}
