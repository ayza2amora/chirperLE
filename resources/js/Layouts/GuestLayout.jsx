export default function GuestLayout({ children, formBackground = 'bg-gray-100' }) {
    return (
        <div className={`flex items-center justify-center min-h-screen ${formBackground}`}>
            <div className="w-full max-w-md px-8 py-8 bg-white shadow-md sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
