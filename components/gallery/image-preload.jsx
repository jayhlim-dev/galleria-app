'use client';

import { useEffect } from 'react';

export function ImagePreload({ sources = [] }) {
    useEffect(() => {
        const uniqueSources = Array.from(new Set(sources.filter(Boolean)));
        uniqueSources.forEach((source) => {
            const img = new Image();
            img.src = source;
        });
    }, [sources]);

    return null;
}
