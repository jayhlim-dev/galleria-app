'use client';

import { useMemo, useState } from 'react';

const TAB_ORDER = ['Biography', 'Statement', 'Inspirations', 'Contact'];

export function ArtistSectionsTabs({ artist }) {
    const [activeTab, setActiveTab] = useState('Biography');

    const tabContent = useMemo(
        () => ({
            Biography: <p className="leading-relaxed text-neutral-700">{artist.bio}</p>,
            Statement: <p className="leading-relaxed text-neutral-700">{artist.statement}</p>,
            Inspirations: (
                artist.inspirations?.length ? (
                    <ul className="space-y-3 text-neutral-700">
                        {artist.inspirations.map((item) => (
                            <li key={item} className="text-sm">
                                {item}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-sm text-neutral-600">Inspirations coming soon.</p>
                )
            ),
            Contact: (
                <div className="space-y-3 text-sm">
                    <a href={artist.links.website} className="block no-underline hover:opacity-70">
                        Website
                    </a>
                    <a href={artist.links.instagram} className="block no-underline hover:opacity-70">
                        Instagram
                    </a>
                    <a href={artist.links.email} className="block no-underline hover:opacity-70">
                        Collector Inquiry
                    </a>
                </div>
            )
        }),
        [artist]
    );

    return (
        <div className="rounded-2xl border border-[var(--line)] bg-[rgba(255,255,255,0.58)] p-6 md:p-8">
            <div className="mb-8 flex flex-wrap gap-3">
                {TAB_ORDER.map((tab) => (
                    <button
                        key={tab}
                        type="button"
                        onClick={() => setActiveTab(tab)}
                        className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.16em] transition ${
                            activeTab === tab
                                ? 'border-neutral-800 bg-neutral-800 text-neutral-100'
                                : 'border-[var(--line)] bg-transparent text-neutral-700 hover:border-neutral-400'
                        }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>
            <div>{tabContent[activeTab]}</div>
        </div>
    );
}
