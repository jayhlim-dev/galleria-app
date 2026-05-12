import '../styles/globals.css';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import { SiteShell } from '../components/gallery/site-shell';

const displayFont = Cormorant_Garamond({
    subsets: ['latin'],
    variable: '--font-display',
    weight: ['400', '500', '600', '700']
});

const bodyFont = Inter({
    subsets: ['latin'],
    variable: '--font-body',
    weight: ['300', '400', '500', '600']
});

export const metadata = {
    title: 'Private Reverie | Contemporary Artist Portfolio',
    description: 'A cinematic and minimal digital gallery sanctuary for contemporary artists and artworks.'
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.svg" sizes="any" />
            </head>
            <body className={`${displayFont.variable} ${bodyFont.variable}`}>
                <SiteShell>{children}</SiteShell>
            </body>
        </html>
    );
}
