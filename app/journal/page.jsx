import { JournalCard } from 'components/gallery/cards';
import { MotionSection } from 'components/gallery/motion-section';
import { PageTransition } from 'components/gallery/page-transition';
import { artist, journalEntries } from 'data/gallery';

export const metadata = {
    title: 'Journal'
};

export default function JournalPage() {
    return (
        <PageTransition>
            <div className="mx-auto w-full max-w-6xl px-6 pb-24 pt-16 md:px-10">
                <MotionSection>
                    <p className="text-xs uppercase tracking-[0.2em] text-neutral-600">Journal / Writings</p>
                    <h1 className="mt-5 max-w-4xl font-serif text-5xl leading-tight md:text-6xl">
                        Editorial reflections from the studio, process notes, and visual diary fragments.
                    </h1>
                    <p className="mt-6 max-w-2xl text-sm leading-relaxed text-neutral-700 md:text-base">
                        Written by {artist.name}. A slow archive of thoughts around making, doubt, memory, and emotional pacing.
                    </p>
                </MotionSection>

                <MotionSection className="mt-16 space-y-8" delay={0.1}>
                    {journalEntries.length ? (
                        journalEntries.map((entry) => <JournalCard key={entry.id} entry={entry} />)
                    ) : (
                        <p className="text-sm text-neutral-600">Journal entries will be published here soon.</p>
                    )}
                </MotionSection>
            </div>
        </PageTransition>
    );
}
