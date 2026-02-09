import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function AboutUs() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow bg-white">
                {/* Page Header */}
                <section className="bg-blue-900 text-white py-20 text-center">
                    <div className="container mx-auto px-4">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
                        <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                            Building Careers, Shaping Futures. The leading institute for mobile repairing in Swat.
                        </p>
                    </div>
                </section>

                {/* Our Story Section */}
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col md:flex-row items-center gap-12">
                            <div className="md:w-1/2">
                                <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Story</h2>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    ZMZ Institute was founded with a singular mission: to empower individuals with the technical skills needed to succeed in the rapidly growing mobile repair industry. Recognized as the first and most advanced chip-level training center in Swat, we have trained countless students who are now running successful businesses.
                                </p>
                                <p className="text-gray-600 leading-relaxed">
                                    Our journey began with a passion for technology and a desire to bridge the gap between theoretical knowledge and practical application. Today, we stand as a beacon of excellence, offering state-of-the-art facilities and expert mentorship.
                                </p>
                            </div>
                            <div className="md:w-1/2">
                                {/* Placeholder for About Detail Image */}
                                <div className="bg-gray-200 h-64 md:h-80 w-full rounded-lg shadow-lg flex items-center justify-center">
                                    <span className="text-gray-500 font-semibold">Institute / Classroom Image</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Mission & Vision */}
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-blue-600">
                                <h3 className="text-2xl font-bold mb-4 text-gray-800">Our Mission</h3>
                                <p className="text-gray-600">
                                    To provide high-quality, hands-on technical training that equips students with the expertise to diagnose and repair modern mobile devices efficiently. We aim to foster entrepreneurship and create employment opportunities in the technical sector.
                                </p>
                            </div>
                            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-green-600">
                                <h3 className="text-2xl font-bold mb-4 text-gray-800">Our Vision</h3>
                                <p className="text-gray-600">
                                    To be the premier institute for technical education in Pakistan, known for our commitment to excellence, innovation in training methods, and the success of our graduates in the global market.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Choose Us */}
                <section className="py-16">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold mb-12 text-gray-800">Why Choose ZMZ Institute?</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="p-6">
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-4">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                                </div>
                                <h3 className="text-xl font-bold mb-2">Expert Instructors</h3>
                                <p className="text-gray-600 text-sm">Learn from industry veterans with years of practical experience.</p>
                            </div>
                            <div className="p-6">
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-4">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                                </div>
                                <h3 className="text-xl font-bold mb-2">Advanced Curriculum</h3>
                                <p className="text-gray-600 text-sm">Stay ahead with up-to-date training on the latest devices and technologies.</p>
                            </div>
                            <div className="p-6">
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-4">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                </div>
                                <h3 className="text-xl font-bold mb-2">100% Practical</h3>
                                <p className="text-gray-600 text-sm">We believe in learning by doing. Get hands-on experience on real devices.</p>
                            </div>
                            <div className="p-6">
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-4">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                </div>
                                <h3 className="text-xl font-bold mb-2">Career Support</h3>
                                <p className="text-gray-600 text-sm">We help our students start their own businesses or find jobs in reputable service centers.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="bg-gray-900 text-white py-16 text-center">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
                        <p className="text-gray-400 mb-8 max-w-xl mx-auto">Join ZMZ Institute today and become a certified mobile repair technician.</p>
                        <div className="flex justify-center space-x-4">
                            <Link href="/courses" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition duration-300">
                                View Courses
                            </Link>
                            <Link href="/contact-us" className="px-8 py-3 bg-transparent border border-white hover:bg-white hover:text-blue-900 text-white font-semibold rounded-md transition duration-300">
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
