export default function Loading() {
    return (
        <div className="mx-auto flex min-h-[50vh] w-full max-w-7xl items-center justify-center px-6">
            <div className="flex items-center gap-4">
                <span className="h-2 w-2 animate-pulse rounded-full bg-neutral-700" />
                <span className="text-xs uppercase tracking-[0.22em] text-neutral-600">Curating atmosphere...</span>
            </div>
        </div>
    );
}
