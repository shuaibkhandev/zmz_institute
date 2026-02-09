import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Photowalks() {
    // Placeholder data for photos
    const photos = [
        { id: 1, title: "Workshop Session", category: "Education" },
        { id: 2, title: "Student Graduation", category: "Events" },
        { id: 3, title: "Chip Level Repair", category: "Practical" },
        { id: 4, title: "Classroom Environment", category: "Campus" },
        { id: 5, title: "Guest Lecture", category: "Events" },
        { id: 6, title: "Tool Showcase", category: "Equipment" },
        { id: 7, title: "Student Project", category: "Practical" },
        { id: 8, title: "Award Ceremony", category: "Events" },
        { id: 9, title: "Group Photo", category: "Community" },
    ];

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow bg-gray-50 py-12">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-gray-800 mb-4">Photowalks & Events</h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            A glimpse into life at ZMZ Institute. Explore our workshops, events, and daily activities.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {photos.map((photo) => (
                            <div key={photo.id} className="group relative overflow-hidden rounded-lg shadow-md cursor-pointer">
                                {/* Placeholder Image */}
                                <div className="bg-gray-300 h-64 w-full flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                                    <span className="text-gray-500 font-semibold text-lg">{photo.title}</span>
                                </div>

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white">
                                    <h3 className="text-xl font-bold mb-2">{photo.title}</h3>
                                    <span className="text-sm bg-blue-600 px-3 py-1 rounded-full">{photo.category}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
