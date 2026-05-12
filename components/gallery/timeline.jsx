export function Timeline({ items }) {
    return (
        <ol className="space-y-5 border-l border-line pl-6">
            {items.map((item) => (
                <li key={`${item.year}-${item.title}`} className="relative">
                    <span className="absolute -left-[31px] top-2 h-3 w-3 rounded-full bg-ink/60" />
                    <p className="text-xs uppercase tracking-[0.14em] text-muted">{item.year}</p>
                    <p className="mt-1 text-lg text-ink">{item.title}</p>
                    <p className="text-sm text-muted">{item.venue || item.location}</p>
                </li>
            ))}
        </ol>
    );
}
