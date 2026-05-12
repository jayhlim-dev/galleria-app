import { Navbar } from './navbar';
import { GalleryFooter } from './footer';

export function SiteShell({ children }) {
    return (
        <div className="min-h-screen min-w-screen ">
            <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_20%_0%,rgba(255,255,255,0.75),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(228,223,210,0.25),transparent_45%)]" />
            <Navbar />
            <main className="relative z-10">{children}</main>
            <GalleryFooter />
        </div>
    );
}
