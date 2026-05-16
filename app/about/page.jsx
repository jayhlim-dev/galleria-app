import Image from 'next/image';
import Link from 'next/link';
import { MotionSection } from 'components/gallery/motion-section';
import { PageTransition } from 'components/gallery/page-transition';
import { ParallaxLayer } from 'components/gallery/parallax-layer';
import { ArtistQuote } from 'components/gallery/artist-quote';
import { Timeline } from 'components/gallery/timeline';
import { artist, exhibitions, journalEntries, studioMoments } from 'data/gallery';

export const metadata = {
    title: 'About The Artist'
};

export default function AboutPage() {
    return (
        <PageTransition>
            <div className="mx-auto w-full max-w-6xl px-6 pb-32 pt-20 md:px-10 md:pt-28">
                <MotionSection className="max-w-2xl" revealOnScroll={false} y={20}>
                    <p className="text-[11px] uppercase tracking-[0.24em] text-neutral-500">About</p>
                    <h1 className="mt-5 font-serif text-[1.85rem] leading-[1.12] text-neutral-900 md:text-4xl lg:text-[2.65rem]">
                        Portrait, biography, and the quiet rhythm of the studio.
                    </h1>
                    <p className="mt-5 max-w-lg text-sm leading-relaxed text-neutral-600 md:text-[0.9375rem]">
                        A glimpse into the artist's world, where memory, material, and atmosphere shape the language of
                        the work.
                    </p>
                </MotionSection>

                <MotionSection
                    className="mt-16 grid items-start gap-14 lg:mt-24 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1fr)] lg:gap-14 xl:gap-16"
                    y={20}
                    delay={0.04}
                >
                    <ParallaxLayer
                        className="relative mx-auto h-[80vh] w-full max-w-md overflow-hidden rounded-3xl shadow-[0_20px_60px_-20px_rgba(22,20,18,0.16)] lg:mx-0 lg:max-w-[30vw]"
                        yPercent={12}
                        mouse
                    >
                        <Image
                            src="/images/png/self-portrait.png"
                            alt={artist.name}
                            fill
                            sizes="30vw"
                            className="object-cover object-[center_40%]"
                            priority
                        />
                    </ParallaxLayer>

                    <div className="min-w-0">
                        <p className="text-[11px] uppercase tracking-[0.2em] text-neutral-500">{artist.location}</p>
                        <h2 className="mt-3 font-serif text-4xl leading-[1.05] text-neutral-900 md:text-5xl">
                            {artist.name}
                        </h2>
                        <div className="mt-10 max-w-prose space-y-6 text-[0.9375rem] leading-[1.75] text-neutral-700 md:text-base md:leading-[1.8]">
                            <p>{artist.bio}</p>
                            <ArtistQuote text={artist.quote} />
                            <p>{artist.statement}</p>
                            <p>{artist.philosophy}</p>
                        </div>
                    </div>
                </MotionSection>

                <div className="mt-24 border-t border-(--line) pt-20 md:mt-32 md:pt-24">
                    <MotionSection className="grid gap-16 lg:grid-cols-2 lg:gap-20" y={18} delay={0.06}>
                        <section>
                            <p className="text-[11px] uppercase tracking-[0.2em] text-neutral-500">Inspirations</p>
                            <h3 className="mt-3 font-serif text-3xl text-neutral-900 md:text-4xl">
                                What returns in the work
                            </h3>
                            {artist.inspirations?.length ? (
                                <ul className="mt-8 space-y-0 divide-y divide-(--line) text-sm text-neutral-700 md:text-base">
                                    {artist.inspirations.map((inspiration) => (
                                        <li key={inspiration} className="py-4 first:pt-0">
                                            {inspiration}
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="mt-8 text-sm text-neutral-600">Inspirations will be updated soon.</p>
                            )}
                        </section>

                        <section>
                            <div className="flex items-end justify-between gap-4">
                                <div>
                                    <p className="text-[11px] uppercase tracking-[0.2em] text-neutral-500">Journal</p>
                                    <h3 className="mt-3 font-serif text-3xl text-neutral-900 md:text-4xl">
                                        From the desk
                                    </h3>
                                </div>
                                <Link
                                    href="/journal"
                                    className="shrink-0 text-[11px] uppercase tracking-[0.16em] text-neutral-500 no-underline transition hover:text-neutral-900"
                                >
                                    View all
                                </Link>
                            </div>
                            <div className="mt-8 divide-y divide-(--line)">
                                {journalEntries.length ? (
                                    journalEntries.slice(0, 3).map((entry) => (
                                        <article key={entry.id} className="py-6 first:pt-0 last:pb-0">
                                            <p className="text-[11px] uppercase tracking-[0.14em] text-neutral-500">
                                                {entry.date}
                                            </p>
                                            <p className="mt-2 font-serif text-xl leading-snug text-neutral-900 md:text-2xl">
                                                {entry.title}
                                            </p>
                                            <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                                                {entry.excerpt}
                                            </p>
                                        </article>
                                    ))
                                ) : (
                                    <p className="py-6 text-sm text-neutral-600">Journal entries coming soon.</p>
                                )}
                            </div>
                        </section>
                    </MotionSection>
                </div>

                <MotionSection className="mt-24 md:mt-32" y={18} delay={0.08}>
                    <p className="text-[11px] uppercase tracking-[0.2em] text-neutral-500">Studio</p>
                    <h3 className="mt-3 max-w-xl font-serif text-3xl text-neutral-900 md:text-4xl">
                        Process, in fragments
                    </h3>
                    <div className="mt-10 grid gap-4 sm:grid-cols-3 sm:gap-5">
                        {studioMoments.length ? (
                            studioMoments.map((image) => (
                                <ParallaxLayer
                                    key={image}
                                    className="relative aspect-4/5 overflow-hidden rounded-2xl"
                                    yPercent={10}
                                >
                                    <Image
                                        src={image}
                                        alt="Studio process"
                                        fill
                                        sizes="(min-width: 640px) 28vw, 88vw"
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

                <MotionSection className="mt-24 border-t border-(--line) pt-20 md:mt-32 md:pt-24" y={18} delay={0.1}>
                    <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                            <p className="text-[11px] uppercase tracking-[0.2em] text-neutral-500">Exhibitions</p>
                            <h3 className="mt-3 font-serif text-3xl text-neutral-900 md:text-4xl">Selected rooms</h3>
                            <p className="mt-3 max-w-md text-sm text-neutral-600">
                                Solo and group presentations, in chronological order.
                            </p>
                        </div>
                        <Link
                            href="/exhibitions"
                            className="text-[11px] uppercase tracking-[0.16em] text-neutral-500 no-underline transition hover:text-neutral-900"
                        >
                            Full timeline →
                        </Link>
                    </div>
                    <div className="mt-10 rounded-2xl border border-(--line) bg-[rgba(255,255,255,0.35)] p-8 md:p-10">
                        <Timeline items={exhibitions} />
                    </div>
                </MotionSection>

                <MotionSection className="mx-auto mt-24 max-w-2xl text-center md:mt-32" y={16} delay={0.12}>
                    <p className="text-sm leading-relaxed text-neutral-600 md:text-base">
                        This site is a private universe for one artist — not built for speed or endless feeds, but for
                        quiet pacing so the work stays the center of gravity.
                    </p>
                </MotionSection>
            </div>
        </PageTransition>
    );
}
