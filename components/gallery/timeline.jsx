export function Timeline({ items = [] }) {
    if (!items.length) {
        return <p className="text-sm text-neutral-600">Exhibition timeline is being updated.</p>;
    }

    return (
        <ol className="space-y-8 border-l border-[var(--line)] pl-6">
            {items.map((item) => (
                <li key={`${item.year}-${item.title}`} className="relative">
                    <span className="absolute -left-[30px] top-2 h-2.5 w-2.5 rounded-full bg-neutral-700" />
                    <p className="text-xs uppercase tracking-[0.15em] text-neutral-600">{item.year}</p>
                    <h4 className="mt-2 font-serif text-xl text-neutral-900">{item.title}</h4>
                    <p className="mt-1 text-sm text-neutral-700">{item.venue}</p>
                    {item.note ? <p className="mt-1 text-xs uppercase tracking-[0.12em] text-neutral-500">{item.note}</p> : null}
                </li>
            ))}
        </ol>
    );
}
