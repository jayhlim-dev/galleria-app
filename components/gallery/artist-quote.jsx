export function ArtistQuote({ text, className = '' }) {
    if (!text?.trim()) {
        return null;
    }

    return (
        <blockquote
            className={`border-l-2 border-(--line) py-1 pl-6 font-serif text-[1.2rem] font-normal leading-[1.55] tracking-[-0.01em] text-neutral-900 md:pl-8 md:text-[1.0625rem] md:leading-[1.62] lg:text-xl lg:leading-relaxed ${className}`}
        >
            <p className="m-0 text-pretty">
                <span className="text-neutral-400/90" aria-hidden="true">
                    &ldquo;
                </span>
                {text}
                <span className="text-neutral-400/90" aria-hidden="true">
                    &rdquo;
                </span>
            </p>
        </blockquote>
    );
}
