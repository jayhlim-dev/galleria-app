import { MotionSection } from 'components/gallery/motion-section';
import { PageTransition } from 'components/gallery/page-transition';
import { Timeline } from 'components/gallery/timeline';
import { artist, exhibitions } from 'data/gallery';

export const metadata = {
    title: 'Exhibitions'
};

export default function ExhibitionsPage() {
    return (
        <PageTransition>
            <div className="mx-auto w-full max-w-6xl px-6 pb-24 pt-16 md:px-10">
                <MotionSection>
                    <p className="text-xs uppercase tracking-[0.2em] text-neutral-600">Exhibitions</p>
                    <h1 className="mt-5 max-w-4xl font-serif text-5xl leading-tight md:text-6xl">
                        A timeline of selected solo and group presentations.
                    </h1>
                    <p className="mt-6 max-w-2xl text-sm leading-relaxed text-neutral-700 md:text-base">
                        Exhibition history for {artist.name}, including installations and gallery-based projects.
                    </p>
                </MotionSection>

                <MotionSection className="mt-16 rounded-2xl border border-[var(--line)] bg-[rgba(255,255,255,0.56)] p-7 md:p-10" delay={0.1}>
                    <Timeline items={exhibitions} />
                </MotionSection>
            </div>
        </PageTransition>
    );
}
