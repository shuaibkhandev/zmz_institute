import Link from 'next/link';
import { courses } from '../data/courses';

const Courses = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Popular Courses</h2>
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
                <div className="text-center mt-12">
                    <Link href="/courses" className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300">
                        View All Courses
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Courses;
