'use client';

import { useMemo, useState } from 'react';
import { ArtworkCard } from './cards';
import { MotionSection } from './motion-section';

export function WorksClient({ artworks, artistName, categories }) {
    const [activeCategory, setActiveCategory] = useState('All');
    const [sortBy, setSortBy] = useState('newest');

    const sortedArtworks = useMemo(() => {
        if (activeCategory === 'All') {
            return [...artworks];
        }
        return artworks.filter((artwork) => artwork.category === activeCategory);
    }, [activeCategory, artworks]);

    const filteredArtworks = useMemo(() => {
        const items = [...sortedArtworks];

        if (sortBy === 'oldest') {
            items.sort((a, b) => Number(a.year) - Number(b.year) || a.title.localeCompare(b.title));
            return items;
        }

        if (sortBy === 'title-asc') {
            items.sort((a, b) => a.title.localeCompare(b.title));
            return items;
        }

        if (sortBy === 'title-desc') {
            items.sort((a, b) => b.title.localeCompare(a.title));
            return items;
        }

        items.sort((a, b) => Number(b.year) - Number(a.year) || a.title.localeCompare(b.title));
        return items;
    }, [sortedArtworks, sortBy]);

    return (
        <>
            {categories?.length ? (
                <MotionSection className="mt-14 flex flex-wrap items-center justify-between gap-4" y={20} revealOnScroll={false}>
                    <div className="flex flex-wrap gap-3">
                        {categories.map((category) => (
                            <button
                                key={category}
                                type="button"
                                onClick={() => setActiveCategory(category)}
                                className={`gallery-pill transition duration-500 ${
                                    activeCategory === category
                                        ? 'bg-neutral-900 text-neutral-100'
                                        : 'border border-(--line) bg-[rgba(255,255,255,0.7)] text-neutral-700 hover:border-neutral-400 hover:bg-white/85'
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    <div className="flex items-center gap-2">
                        <span className="text-[10px] uppercase tracking-[0.22em] text-neutral-500">Sort</span>
                        <div className="relative">
                            <select
                                value={sortBy}
                                onChange={(event) => setSortBy(event.target.value)}
                                className="min-w-[156px] appearance-none border-b border-[color-mix(in_oklab,var(--line)_85%,transparent)] bg-transparent pb-1.5 pr-7 text-[12px] uppercase tracking-[0.18em] text-neutral-800 outline-none transition duration-300 hover:border-neutral-500 focus:border-neutral-600"
                            >
                                <option value="newest">Newest</option>
                                <option value="oldest">Oldest</option>
                                <option value="title-asc">Title A-Z</option>
                                <option value="title-desc">Title Z-A</option>
                            </select>
                            <span
                                aria-hidden="true"
                                className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-neutral-500"
                            >
                                <svg viewBox="0 0 20 20" className="h-3.5 w-3.5 fill-none stroke-current" strokeWidth="1.7">
                                    <path d="M5 7.5L10 12.5L15 7.5" />
                                </svg>
                            </span>
                        </div>
                    </div>
                </MotionSection>
            ) : null}

            <MotionSection className="mt-12 columns-1 gap-7 md:columns-2 xl:columns-3" delay={0.05} y={20}>
                {filteredArtworks.length ? (
                    filteredArtworks.map((artwork) => (
                        <div key={artwork.id} className="mb-7 break-inside-avoid">
                            <ArtworkCard artwork={artwork} artistName={artistName} />
                        </div>
                    ))
                ) : (
                    <p className="text-sm text-neutral-600">No artworks found for this category yet.</p>
                )}
            </MotionSection>
        </>
    );
}
