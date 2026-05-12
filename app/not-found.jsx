import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="mx-auto flex min-h-[60vh] w-full max-w-4xl flex-col items-start justify-center px-6 py-16 md:px-10">
            <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">404</p>
            <h1 className="mt-4 font-serif text-5xl">This gallery room is empty.</h1>
            <p className="mt-5 max-w-2xl text-sm text-neutral-700 md:text-base">
                The page may have moved, or the artwork has been archived. Continue exploring from the main residence.
            </p>
            <Link href="/" className="mt-8 text-xs uppercase tracking-[0.16em] no-underline text-neutral-600">
                Return Home
            </Link>
        </div>
    );
}
