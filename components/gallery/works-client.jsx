'use client';

import { useMemo, useState } from 'react';
import { ArtworkCard } from './cards';
import { MotionSection } from './motion-section';

export function WorksClient({ artworks, artistName, categories }) {
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredArtworks = useMemo(() => {
        if (activeCategory === 'All') {
            return artworks;
        }
        return artworks.filter((artwork) => artwork.category === activeCategory);
    }, [activeCategory, artworks]);

    return (
        <>
            {categories?.length ? (
                <MotionSection className="mt-12 flex flex-wrap gap-3">
                    {categories.map((category) => (
                        <button
                            key={category}
                            type="button"
                            onClick={() => setActiveCategory(category)}
                            className={`gallery-pill ${
                                activeCategory === category
                                    ? 'bg-neutral-900 text-neutral-100'
                                    : 'border border-[var(--line)] bg-[rgba(255,255,255,0.7)] text-neutral-700'
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </MotionSection>
            ) : null}

            <MotionSection className="mt-12 columns-1 gap-7 md:columns-2 xl:columns-3" delay={0.05}>
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
