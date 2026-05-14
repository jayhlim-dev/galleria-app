import '../styles/globals.css';
import { SiteShell } from '../components/gallery/site-shell';

export const metadata = {
    title: {
        template: '%s | Soleil Voss',
        default: 'Soleil Voss | Private Digital Gallery'
    },
    description: 'A personal artist archive and exhibition space built for quiet visual storytelling.',
    metadataBase: new URL('https://example.com')
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.svg" sizes="any" />
            </head>
            <body className="antialiased min-w-screen overflow-x-clip">
                <SiteShell>{children}</SiteShell>
            </body>
        </html>
    );
}
