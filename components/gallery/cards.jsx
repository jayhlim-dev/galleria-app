'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

function CardMotion({ children, className = '' }) {
    return (
        <motion.article
            className={className}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-8% 0px -8% 0px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4 }}
        >
            {children}
        </motion.article>
    );
}

export function ArtistCard({ artist }) {
    return (
        <CardMotion className="group">
            <Link href={`/artists/${artist.slug}`} className="block no-underline">
                <div className="relative aspect-4/5 overflow-hidden rounded-xl">
                    <Image src={artist.portrait} alt={artist.name} fill className="object-cover transition duration-700 group-hover:scale-[1.04]" />
                </div>
                <div className="mt-5">
                    <h3 className="font-serif text-2xl text-neutral-900">{artist.name}</h3>
                    <p className="mt-2 text-sm text-neutral-600">{artist.location}</p>
                </div>
            </Link>
        </CardMotion>
    );
}

export function ArtworkCard({ artwork, artistName, className = '' }) {
    return (
        <CardMotion className={`group ${className}`}>
            <Link href={`/artworks/${artwork.slug}`} className="block no-underline">
                <div className="relative aspect-4/3 overflow-hidden rounded-xl">
                    <Image src={artwork.image} alt={artwork.title} fill className="object-cover transition duration-700 group-hover:scale-[1.1]" />
                    <div className="absolute inset-0 bg-linear-to-t from-black/65 via-black/20  transition duration-500">
                        <div className="absolute inset-x-0 bottom-0 p-5 text-neutral-100">
                            <h4 className="font-serif text-2xl">{artwork.title}</h4>
                            <p className="mt-2 text-xs uppercase tracking-[0.14em]">
                                {artwork.year} · {artwork.medium}
                            </p>
                        </div>
                    </div>
                    {/* <div className="absolute inset-0 bg-linear-to-t from-black/65 via-black/20 to-transparent opacity-0 transition duration-500 group-hover:opacity-100">
                        <div className="absolute inset-x-0 bottom-0 p-5 text-neutral-100">
                            <h4 className="font-serif text-2xl">{artwork.title}</h4>
                            <p className="mt-2 text-xs uppercase tracking-[0.14em]">
                                {artwork.year} · {artwork.medium}
                            </p>
                        </div>
                    </div> */}
                </div>
                {/* <div className="mt-4">
                    <h4 className="font-serif text-xl text-neutral-900">{artwork.title}</h4>
                    <p className="mt-2 text-xs uppercase tracking-[0.13em] text-neutral-600">
                        {artistName} · {artwork.year}
                    </p>
                </div> */}
            </Link>
        </CardMotion>
    );
}

export function CollectionCard({ collection }) {
    return (
        <CardMotion className="rounded-xl border border-(--line) bg-[rgba(255,255,255,0.55)] p-7">
            <h3 className="font-serif text-2xl">{collection.title}</h3>
            <p className="mt-3 text-sm text-neutral-700">{collection.description}</p>
            <button type="button" className="mt-6 text-xs uppercase tracking-[0.16em] text-neutral-600">
                Save Collection
            </button>
        </CardMotion>
    );
}

export function JournalCard({ entry }) {
    return (
        <CardMotion className="rounded-xl border border-(--line) bg-[rgba(255,255,255,0.55)] p-7">
            <p className="text-xs uppercase tracking-[0.15em] text-neutral-600">{entry.date}</p>
            <h3 className="mt-3 font-serif text-2xl text-neutral-900">{entry.title}</h3>
            <p className="mt-3 text-sm text-neutral-700">{entry.excerpt}</p>
            <p className="mt-4 text-sm leading-relaxed text-neutral-600">{entry.body}</p>
        </CardMotion>
    );
}
