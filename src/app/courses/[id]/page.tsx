import { courses } from '../../../data/courses';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

// This function is required for static site generation with dynamic routes
export async function generateStaticParams() {
    return courses.map((course) => ({
        id: course.id.toString(),
    }));
}

export default async function CourseDetail({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const course = courses.find((c) => c.id === parseInt(id));

    if (!course) {
        notFound();
    }

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow bg-gray-50 py-12">
                <div className="container mx-auto px-4">
                    <Link href="/" className="text-blue-600 hover:text-blue-800 mb-6 inline-block font-medium">
                        &larr; Back to Home
                    </Link>

                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <div className="bg-blue-900 text-white p-8 md:p-12">
                            <h1 className="text-3xl md:text-4xl font-bold mb-4">{course.title}</h1>
                            <p className="text-xl opacity-90">{course.description}</p>
                            <div className="mt-6 inline-block bg-blue-700 px-4 py-2 rounded-full font-semibold">
                                Duration: {course.duration}
                            </div>
                        </div>

                        <div className="p-8 md:p-12">
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                                <div className="lg:col-span-2">
                                    <h2 className="text-2xl font-bold mb-6 text-gray-800">Course Overview</h2>
                                    <p className="text-gray-600 mb-8 leading-relaxed">
                                        {course.details.overview}
                                    </p>

                                    <h2 className="text-2xl font-bold mb-6 text-gray-800">What You Will Learn</h2>
                                    <ul className="space-y-3 mb-8">
                                        {course.details.curriculum.map((item, index) => (
                                            <li key={index} className="flex items-start">
                                                <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                </svg>
                                                <span className="text-gray-700 font-medium">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="lg:col-span-1">
                                    <div className="bg-gray-100 p-6 rounded-lg">
                                        <h3 className="text-xl font-bold mb-4 text-gray-800">Course Highlights</h3>
                                        <ul className="space-y-4">
                                            <li className="flex items-center">
                                                <span className="font-semibold text-gray-700">Certification:</span>
                                            </li>
                                            <li className="text-gray-600">
                                                {course.details.certification}
                                            </li>
                                        </ul>
                                        <div className="mt-8">
                                            <Link href="/contact-us" className="block w-full text-center bg-blue-600 text-white font-bold py-3 rounded-md hover:bg-blue-700 transition duration-300">
                                                Enroll Now
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
