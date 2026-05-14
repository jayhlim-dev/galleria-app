export const artist = {
    id: 'artist-soleil-voss',
    slug: 'soleil-voss',
    name: 'Soleil Voss',
    location: 'Copenhagen, Denmark',
    portrait: '/images/dummy/portrait.svg',
    heroImage: '/images/png/museum-looks-landscape.png',
    studioImage: '/images/dummy/studio-1.svg',
    bio: 'Soleil Voss composes atmospheric photographic and mixed-media works that navigate memory, architecture, and emotional weather.',
    statementTitle: 'The older I become, the more I realize memory has its own architecture.',
    statement:
        'I am drawn to spaces that carry emotional weight long after moments have passed. Through painting, I try to translate that invisible feeling into atmosphere, texture, and stillnes.',
    philosophy:
        'I do not search for spectacle. I search for a tempo where an image can breathe long enough for someone to remember themselves.',
    exhibitions: [
        { year: '2026', title: 'Quiet Geometry', venue: 'Maison Verre, Paris' },
        { year: '2025', title: 'Intervals Of Weather', venue: 'Lumen Rooms, Copenhagen' },
        { year: '2024', title: 'Threshold Study', venue: 'Northlight Gallery, Brussels' }
    ],
    processImages: [
        '/images/dummy/studio-1.svg',
        '/images/dummy/studio-2.svg'
    ],
    links: {
        instagram: 'https://instagram.com',
        email: 'mailto:studio@soleilvoss.com',
        website: 'https://example.com'
    }
};

export const artists = [artist];

export const artworks = [
    {
        id: 'artwork-1',
        slug: 'silent-courtyard',
        title: 'Silent Courtyard',
        artistSlug: artist.slug,
        year: '2026',
        medium: 'Archival pigment print on cotton rag',
        dimensions: '140 x 110 cm',
        story: 'A study of morning light drifting through an empty courtyard after rain.',
        category: 'Photography',
        featured: true,
        image: '/images/png/g-1.png',
        processImages: ['/images/dummy/studio-1.svg', '/images/dummy/studio-2.svg']
    },
    {
        id: 'artwork-2',
        slug: 'after-rain-study',
        title: 'After Rain Study',
        artistSlug: artist.slug,
        year: '2025',
        medium: 'Silver gelatin print',
        dimensions: '95 x 70 cm',
        story: 'Architecture dissolves into reflections while the city holds its breath.',
        category: 'Photography',
        featured: true,
        image: '/images/png/g-2.png',
        processImages: []
    },
    {
        id: 'artwork-3',
        slug: 'weather-archive-iii',
        title: 'Weather Archive III',
        artistSlug: artist.slug,
        year: '2026',
        medium: 'Oil, ash, and graphite on linen',
        dimensions: '180 x 240 cm',
        story: 'A painted horizon assembled from memory fragments and mountain weather logs.',
        category: 'Painting',
        featured: true,
        image: '/images/png/g-3.png',
        processImages: ['/images/dummy/studio-3.svg']
    },
    {
        id: 'artwork-4',
        slug: 'hushed-summit',
        title: 'Hushed Summit',
        artistSlug: artist.slug,
        year: '2024',
        medium: 'Mixed media on panel',
        dimensions: '150 x 200 cm',
        story: 'An imagined summit where scale shifts between body and cloud.',
        category: 'Mixed Media',
        featured: true, // turn on for featured artworks
        image: '/images/png/g-4.png',
        processImages: []
    },
    {
        id: 'artwork-5',
        slug: 'season-room-no-2',
        title: 'Season Room No. 2',
        artistSlug: artist.slug,
        year: '2025',
        medium: 'Hand-dyed textile, stitched photo transfer',
        dimensions: '120 x 170 cm',
        story: 'Layers of stitched light recalling a room held in winter memory.',
        category: 'Textile',
        featured: false,
        image: '/images/dummy/artwork-1.svg',
        processImages: ['/images/dummy/studio-2.svg']
    },
    {
        id: 'artwork-6',
        slug: 'tender-archive',
        title: 'Tender Archive',
        artistSlug: artist.slug,
        year: '2023',
        medium: 'Photo-textile collage',
        dimensions: '90 x 120 cm',
        story: 'An intimate map of domestic memory through soft materials.',
        category: 'Textile',
        featured: false,
        image: '/images/dummy/artwork-2.svg',
        processImages: []
    },
    {
        id: 'artwork-7',
        slug: 'elegy-in-glass',
        title: 'Elegy In Glass',
        artistSlug: artist.slug,
        year: '2022',
        medium: 'Photographic transfer on glass and vellum',
        dimensions: '80 x 110 cm',
        story: 'A layered work built from archive fragments and erased correspondence.',
        category: 'Mixed Media',
        featured: false,
        image: '/images/dummy/artwork-3.svg',
        processImages: []
    },
    {
        id: 'artwork-8',
        slug: 'monastic-drift',
        title: 'Monastic Drift',
        artistSlug: artist.slug,
        year: '2021',
        medium: 'Ink wash and mineral pigment',
        dimensions: '160 x 200 cm',
        story: 'Painted stillness tracing a corridor that never fully resolves into architecture.',
        category: 'Painting',
        featured: false,
        image: '/images/dummy/artwork-4.svg',
        processImages: []
    }
];

export const collections = [
    {
        id: 'collection-1',
        title: 'Rooms Of Quiet',
        description: 'Works that hold silence, architectural rhythm, and reflective space.'
    },
    {
        id: 'collection-2',
        title: 'Weather Memory',
        description: 'Landscape-based narratives shaped by climate, time, and recollection.'
    },
    {
        id: 'collection-3',
        title: 'Intimate Materials',
        description: 'Textile and mixed-media works where touch and memory converge.'
    }
];

export const journalEntries = [
    {
        id: 'entry-1',
        slug: 'the-ethics-of-slow-seeing',
        title: 'The Ethics Of Slow Seeing',
        excerpt: 'To look slowly is to give an artwork enough time to become more than an image.',
        body: 'I resist speed in both making and viewing. A work is not consumed. It is inhabited. I often leave pieces unresolved for weeks because uncertainty protects honesty.',
        date: 'May 08, 2026'
    },
    {
        id: 'entry-2',
        slug: 'notes-from-the-studio-floor',
        title: 'Notes From The Studio Floor',
        excerpt: 'Fragments from private artist journals on process, doubt, and persistence.',
        body: 'Most days begin before sunrise. The first hour is only for looking. No camera, no sketches, no edits. Just atmosphere and memory negotiating with one another.',
        date: 'April 14, 2026'
    },
    {
        id: 'entry-3',
        slug: 'an-exhibition-as-a-poem',
        title: 'An Exhibition As A Poem',
        excerpt: 'How spatial pacing and visual silence shape emotional resonance.',
        body: 'An exhibition should have rhythm: arrival, pause, compression, release. I install with breath in mind, not chronology. The body understands sequence before the mind does.',
        date: 'March 27, 2026'
    },
    {
        id: 'entry-4',
        slug: 'winter-room-notes',
        title: 'Winter Room Notes',
        excerpt: 'Studio reflections on texture, fatigue, and devotion.',
        body: 'When winter darkens at three in the afternoon, materials speak differently. Linen absorbs light like skin. Glass becomes memory. Silence becomes practical.',
        date: 'February 16, 2026'
    }
];

export const manifesto = {
    title: 'A Private Digital Residence',
    copy: 'This site is built as a sanctuary for one artist and one evolving body of work. The interface steps back, so emotion can step forward.'
};

export const exhibitions = [
    { year: '2026', title: 'Quiet Geometry', venue: 'Maison Verre, Paris', note: 'Solo exhibition' },
    { year: '2025', title: 'Intervals Of Weather', venue: 'Lumen Rooms, Copenhagen', note: 'Solo exhibition' },
    { year: '2024', title: 'Threshold Study', venue: 'Northlight Gallery, Brussels', note: 'Group exhibition' },
    { year: '2022', title: 'Soft Structure', venue: 'Atria Rooms, Lyon', note: 'Solo installation' }
];

export const studioMoments = [
    '/images/dummy/studio-1.svg',
    '/images/dummy/studio-2.svg',
    '/images/dummy/studio-3.svg'
];

export const artworkCategories = ['All', 'Photography', 'Painting', 'Mixed Media', 'Textile'];

export function getArtistBySlug(slug) {
    return artists.find((artist) => artist.slug === slug);
}

export function getArtworkBySlug(slug) {
    return artworks.find((artwork) => artwork.slug === slug);
}

export function getArtworksByArtist(artistSlug) {
    return artworks.filter((artwork) => artwork.artistSlug === artistSlug);
}

export function getRelatedArtworks(slug, artistSlug) {
    return artworks.filter((artwork) => artwork.slug !== slug && artwork.artistSlug === artistSlug).slice(0, 3);
}

export function getFeaturedArtworks() {
    return artworks.filter((artwork) => artwork.featured).slice(0, 4);
}

export function getArtworksByCategory(category) {
    if (!category || category === 'All') {
        return artworks;
    }
    return artworks.filter((artwork) => artwork.category === category);
}
