'use client';

import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const TAB_ORDER = [
    { key: 'bio', label: 'Biography' },
    { key: 'statement', label: 'Statement' },
    { key: 'process', label: 'Process' },
    { key: 'exhibitions', label: 'Exhibitions' }
];

export function ArtistSectionsTabs({ artist }) {
    const [activeTab, setActiveTab] = useState('bio');

    const content = useMemo(
        () => ({
            bio: (
                <p>
                    {artist.shortBio} Based in {artist.location}, their practice is known for intentional pacing and tactile
                    material depth.
                </p>
            ),
            statement: <p>{artist.statement}</p>,
            process: <p>{artist.processNote}</p>,
            exhibitions: (
                <ul className="space-y-4">
                    {artist.exhibitions.map((item) => (
                        <li key={`${item.year}-${item.title}`} className="flex items-start justify-between gap-6 border-b pb-3">
                            <div>
                                <p className="text-base font-medium text-ink">{item.title}</p>
                                <p className="text-sm text-muted">{item.venue}</p>
                            </div>
                            <p className="text-sm tracking-[0.12em] text-muted">{item.year}</p>
                        </li>
                    ))}
                </ul>
            )
        }),
        [artist]
    );

    return (
        <div className="gallery-card p-6 md:p-10">
            <div className="mb-8 flex flex-wrap gap-3">
                {TAB_ORDER.map((tab) => (
                    <button
                        type="button"
                        key={tab.key}
                        onClick={() => setActiveTab(tab.key)}
                        className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.14em] transition ${
                            activeTab === tab.key ? 'bg-ink text-ivory' : 'bg-transparent text-muted hover:text-ink'
                        }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                >
                    {content[activeTab]}
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
