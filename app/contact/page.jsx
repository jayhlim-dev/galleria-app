import { MotionSection } from 'components/gallery/motion-section';
import { PageTransition } from 'components/gallery/page-transition';
import { artist } from 'data/gallery';

export const metadata = {
    title: 'Contact'
};

export default function ContactPage() {
    return (
        <PageTransition>
            <div className="mx-auto w-full max-w-5xl px-6 pb-24 pt-16 md:px-10">
                <MotionSection>
                    <p className="text-xs uppercase tracking-[0.2em] text-neutral-600">Contact</p>
                    <h1 className="mt-5 max-w-4xl font-serif text-5xl leading-tight md:text-6xl">Collector and curatorial inquiries.</h1>
                </MotionSection>

                <MotionSection className="mt-14 grid gap-8 rounded-2xl border border-[var(--line)] bg-[rgba(255,255,255,0.56)] p-7 lg:grid-cols-[1fr_0.9fr] md:p-10" delay={0.1}>
                    <form className="space-y-5">
                        <label className="block">
                            <span className="mb-2 block text-xs uppercase tracking-[0.16em] text-neutral-600">Name</span>
                            <input className="gallery-input" type="text" name="name" placeholder="Your name" />
                        </label>
                        <label className="block">
                            <span className="mb-2 block text-xs uppercase tracking-[0.16em] text-neutral-600">Email</span>
                            <input className="gallery-input" type="email" name="email" placeholder="you@example.com" />
                        </label>
                        <label className="block">
                            <span className="mb-2 block text-xs uppercase tracking-[0.16em] text-neutral-600">Message</span>
                            <textarea className="gallery-input min-h-36 resize-y" name="message" placeholder="Tell us about your inquiry." />
                        </label>
                        <button type="submit" className="gallery-pill bg-neutral-900 text-neutral-100">
                            Send Inquiry
                        </button>
                    </form>

                    <div className="space-y-5 text-sm text-neutral-700">
                        <h2 className="font-serif text-3xl text-neutral-900">Studio Links</h2>
                        <a href={artist.links.email} className="block no-underline hover:opacity-70">
                            Email
                        </a>
                        <a href={artist.links.instagram} className="block no-underline hover:opacity-70">
                            Instagram
                        </a>
                        <a href={artist.links.website} className="block no-underline hover:opacity-70">
                            Website
                        </a>
                        <p className="pt-5 text-xs uppercase tracking-[0.16em] text-neutral-500">{artist.location}</p>
                    </div>
                </MotionSection>
            </div>
        </PageTransition>
    );
}
