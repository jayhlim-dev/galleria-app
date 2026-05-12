export const artists = [
    {
        id: 'a1',
        slug: 'lena-aurell',
        name: 'Lena Aurell',
        location: 'Stockholm, Sweden',
        specialty: 'Atmospheric Oil Painting',
        portrait:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80',
        heroImage:
            'https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=1800&q=80',
        shortBio:
            'Lena composes quiet emotional landscapes where light behaves like memory and weather.',
        statement:
            'I paint stillness as an event. In each canvas, I look for the soft threshold between what is remembered and what is physically present.',
        processNote:
            'Each work begins from graphite field sketches and long-exposure photographs taken before sunrise.',
        exhibitions: [
            { year: '2026', title: 'Soft Distances', venue: 'Atelier Norr, Stockholm' },
            { year: '2024', title: 'Threshold Weather', venue: 'Galerie Verre, Paris' },
            { year: '2022', title: 'Northern Interiors', venue: 'Studio 11, Copenhagen' }
        ]
    },
    {
        id: 'a2',
        slug: 'dario-velas',
        name: 'Dario Velas',
        location: 'Madrid, Spain',
        specialty: 'Large-Format Photography',
        portrait:
            'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1200&q=80',
        heroImage:
            'https://images.unsplash.com/photo-1504198322253-cfa87a0ff25f?auto=format&fit=crop&w=1800&q=80',
        shortBio:
            'Dario documents architectural silence through monochrome studies and long shadows.',
        statement:
            'My camera is less about capture and more about restraint. I wait until space reveals its emotional temperature.',
        processNote:
            'Film negatives are scanned and toned by hand, preserving grain structure and soft highlights.',
        exhibitions: [
            { year: '2025', title: 'Civic Light', venue: 'Casa Forma, Madrid' },
            { year: '2023', title: 'Shadow Archive', venue: 'Lumen Gallery, Berlin' },
            { year: '2021', title: 'Urban Liturgies', venue: 'Room 2, Lisbon' }
        ]
    },
    {
        id: 'a3',
        slug: 'mei-okafor',
        name: 'Mei Okafor',
        location: 'Osaka, Japan',
        specialty: 'Mixed Media Sculpture',
        portrait:
            'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80',
        heroImage:
            'https://images.unsplash.com/photo-1554189097-ffe88e998a8f?auto=format&fit=crop&w=1800&q=80',
        shortBio:
            'Mei assembles clay, ash, and fiber into sculptural forms that feel ritual and contemporary.',
        statement:
            'I am interested in the dignity of surfaces touched by time. Material remembers hands, friction, and weather.',
        processNote:
            'Her studio practice combines ceramic firings with hand-woven linen and charred cedar fragments.',
        exhibitions: [
            { year: '2026', title: 'Ground Choir', venue: 'Nami Hall, Tokyo' },
            { year: '2024', title: 'Ash Geometry', venue: 'Kite House, Seoul' },
            { year: '2021', title: 'Matter & Breath', venue: 'Stillworks, Kyoto' }
        ]
    },
    {
        id: 'a4',
        slug: 'amara-cole',
        name: 'Amara Cole',
        location: 'London, UK',
        specialty: 'Editorial Collage & Print',
        portrait:
            'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=1200&q=80',
        heroImage:
            'https://images.unsplash.com/photo-1578301978018-3005759f48f7?auto=format&fit=crop&w=1800&q=80',
        shortBio:
            'Amara merges archival imagery with hand-printed textures into poetic editorial tableaux.',
        statement:
            'Collage allows me to edit time. Fragments from different decades can breathe in one shared frame.',
        processNote:
            'Each final print is produced on cotton rag paper in small editions from layered analog scans.',
        exhibitions: [
            { year: '2025', title: 'Archive as Weather', venue: 'South Rooms, London' },
            { year: '2023', title: 'Paper Memory', venue: 'Fieldspace, Brussels' },
            { year: '2020', title: 'Cut Quietly', venue: 'Lark Editions, London' }
        ]
    }
];

export const artworks = [
    {
        id: 'w1',
        slug: 'morning-aperture',
        title: 'Morning Aperture',
        artistSlug: 'lena-aurell',
        image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=1600&q=80',
        year: '2026',
        medium: 'Oil on linen',
        dimensions: '160 x 120 cm',
        story: 'A muted horizon where color collapses into a pale seam of light.',
        notes: 'Painted over thirteen thin glazes during winter mornings.'
    },
    {
        id: 'w2',
        slug: 'low-tide-room',
        title: 'Low Tide Room',
        artistSlug: 'lena-aurell',
        image: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&w=1600&q=80',
        year: '2025',
        medium: 'Oil and charcoal on canvas',
        dimensions: '140 x 110 cm',
        story: 'Interior geometry dissolving toward the sea line.',
        notes: 'Built from graphite underdrawing and a desaturated marine palette.'
    },
    {
        id: 'w3',
        slug: 'breathline',
        title: 'Breathline',
        artistSlug: 'lena-aurell',
        image: 'https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&w=1600&q=80',
        year: '2024',
        medium: 'Oil on wood panel',
        dimensions: '120 x 90 cm',
        story: 'A minimal field broken by one warm vertical interruption.',
        notes: 'A study in edge softness and dry-brush texture.'
    },
    {
        id: 'w4',
        slug: 'atrium-study-v',
        title: 'Atrium Study V',
        artistSlug: 'dario-velas',
        image: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1600&q=80',
        year: '2026',
        medium: 'Silver gelatin print',
        dimensions: '100 x 150 cm',
        story: 'Late-afternoon light cutting through civic architecture.',
        notes: 'Shot on medium-format film with a tripod-based six-second exposure.'
    },
    {
        id: 'w5',
        slug: 'passageway-no-2',
        title: 'Passageway No. 2',
        artistSlug: 'dario-velas',
        image: 'https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?auto=format&fit=crop&w=1600&q=80',
        year: '2025',
        medium: 'Archival pigment print',
        dimensions: '90 x 130 cm',
        story: 'A corridor rendered as a gradient from matte black to pearl gray.',
        notes: 'Part of a sequence exploring municipal thresholds.'
    },
    {
        id: 'w6',
        slug: 'night-portico',
        title: 'Night Portico',
        artistSlug: 'dario-velas',
        image: 'https://images.unsplash.com/photo-1473773508845-188df298d2d1?auto=format&fit=crop&w=1600&q=80',
        year: '2024',
        medium: 'Digital C-print',
        dimensions: '110 x 165 cm',
        story: 'Stone planes and electric fog in deep blue monochrome.',
        notes: 'Captured in rain to preserve reflective pavement textures.'
    },
    {
        id: 'w7',
        slug: 'vessel-for-quiet',
        title: 'Vessel for Quiet',
        artistSlug: 'mei-okafor',
        image: 'https://images.unsplash.com/photo-1612196808214-b7e239e5f5d9?auto=format&fit=crop&w=1600&q=80',
        year: '2026',
        medium: 'Stoneware, ash glaze, linen',
        dimensions: '75 x 60 x 40 cm',
        story: 'A standing sculpture balancing porous clay and folded textile.',
        notes: 'Fired at low temperature to preserve tonal variation in the ash.'
    },
    {
        id: 'w8',
        slug: 'ember-column',
        title: 'Ember Column',
        artistSlug: 'mei-okafor',
        image: 'https://images.unsplash.com/photo-1458735820603-83c8416d82d8?auto=format&fit=crop&w=1600&q=80',
        year: '2025',
        medium: 'Ceramic, cedar, graphite wax',
        dimensions: '180 x 35 x 35 cm',
        story: 'A vertical form scarred with delicate carbon traces.',
        notes: 'Surface rubbed with waxed graphite after firing.'
    },
    {
        id: 'w9',
        slug: 'ground-script',
        title: 'Ground Script',
        artistSlug: 'mei-okafor',
        image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=1600&q=80',
        year: '2023',
        medium: 'Ceramic triptych',
        dimensions: 'Each panel 90 x 60 cm',
        story: 'Three slab forms etched with repeating gestural marks.',
        notes: 'Marks were incised before the final iron wash.'
    },
    {
        id: 'w10',
        slug: 'index-of-light',
        title: 'Index of Light',
        artistSlug: 'amara-cole',
        image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=1600&q=80',
        year: '2026',
        medium: 'Collage and silkscreen on rag paper',
        dimensions: '110 x 85 cm',
        story: 'Newsprint fragments suspended inside pale cream fields.',
        notes: 'Built from 24 hand-cut layers and two silkscreen passes.'
    },
    {
        id: 'w11',
        slug: 'library-drift',
        title: 'Library Drift',
        artistSlug: 'amara-cole',
        image: 'https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=1600&q=80',
        year: '2024',
        medium: 'Archival collage',
        dimensions: '95 x 70 cm',
        story: 'Editorial remnants arranged as a floating architectural map.',
        notes: 'Printed from a hand-composed plate matrix.'
    },
    {
        id: 'w12',
        slug: 'soft-archive',
        title: 'Soft Archive',
        artistSlug: 'amara-cole',
        image: 'https://images.unsplash.com/photo-1458530970867-aaa3700f1d22?auto=format&fit=crop&w=1600&q=80',
        year: '2022',
        medium: 'Letterpress and collage',
        dimensions: '80 x 60 cm',
        story: 'Muted typography and textile scans in a central axis.',
        notes: 'The paper is tea-toned to soften contrast and edge lines.'
    }
];

export const curatedCollections = [
    {
        slug: 'light-as-memory',
        title: 'Light as Memory',
        description: 'Painterly works that treat light as an emotional artifact.',
        artworkSlugs: ['morning-aperture', 'low-tide-room', 'atrium-study-v']
    },
    {
        slug: 'material-rituals',
        title: 'Material Rituals',
        description: 'Sculptural works rooted in tactile process and elemental matter.',
        artworkSlugs: ['vessel-for-quiet', 'ember-column', 'ground-script']
    },
    {
        slug: 'editorial-fragments',
        title: 'Editorial Fragments',
        description: 'Print and collage pieces balancing narrative and abstraction.',
        artworkSlugs: ['index-of-light', 'library-drift', 'soft-archive']
    }
];

export const studioDiary = [
    {
        slug: 'dawn-studio-notes',
        title: 'Dawn studio notes',
        excerpt: 'Observations on ambient light, pigment absorbency, and silence as structure.',
        date: 'May 2026'
    },
    {
        slug: 'on-archival-paper',
        title: 'On archival paper',
        excerpt: 'How paper weight and tooth influence the emotional pacing of collage.',
        date: 'March 2026'
    },
    {
        slug: 'after-the-opening',
        title: 'After the opening',
        excerpt: 'A reflection on installation pacing and how viewers move through space.',
        date: 'January 2026'
    }
];

export const exhibitionArchive = [
    {
        year: '2026',
        title: 'Private Viewings: Quiet Rooms',
        location: 'Paris'
    },
    {
        year: '2025',
        title: 'Current Fields',
        location: 'Milan'
    },
    {
        year: '2024',
        title: 'Threshold Works',
        location: 'New York'
    }
];

export const manifestoQuote =
    'Art does not ask for attention here. It asks for presence. Every frame, margin, and breath is designed to return the viewer to the work itself.';

export function getArtistBySlug(slug) {
    return artists.find((artist) => artist.slug === slug);
}

export function getArtworkBySlug(slug) {
    return artworks.find((artwork) => artwork.slug === slug);
}

export function getArtworksByArtist(artistSlug) {
    return artworks.filter((artwork) => artwork.artistSlug === artistSlug);
}
