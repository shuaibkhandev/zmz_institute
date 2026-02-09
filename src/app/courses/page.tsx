import Link from 'next/link';
import { courses } from '../../data/courses';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function AllCourses() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow bg-gray-50 py-12">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-gray-800 mb-4">All Courses</h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Explore our comprehensive range of mobile repairing courses designed to turn you into a professional technician.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {courses.map((course) => (
                            <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                <div className="h-48 bg-blue-100 flex items-center justify-center">
                                    {/* Placeholder for Course Image */}
                                    <span className="text-blue-500 font-semibold">{course.imagePlaceholder} Image</span>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-2 text-gray-800">{course.title}</h3>
                                    <p className="text-gray-600 mb-4">{course.description}</p>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm font-semibold text-blue-600">{course.duration}</span>
                                        <Link href={`/courses/${course.id}`} className="text-blue-600 hover:text-blue-800 font-medium">
                                            Learn More &rarr;
                                        </Link>
                                    </div>
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
