import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="shell-width section-gap min-h-[60vh] space-y-6">
            <p className="eyebrow">Not Found</p>
            <h1>The requested artwork or artist could not be found.</h1>
            <p>Please return to the curated index to continue browsing.</p>
            <Link
                href="/"
                className="inline-block rounded-full border border-ink bg-ink px-6 py-3 text-xs uppercase tracking-[0.16em] text-ivory no-underline"
            >
                Return Home
            </Link>
        </div>
    );
}
