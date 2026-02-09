import Link from 'next/link';
import { testimonials } from '../../data/testimonials';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function TestimonialsPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow bg-gray-50 py-12">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-gray-800 mb-4">Student Success Stories</h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Hear from our graduates who have successfully launched their careers in mobile repairing after training at ZMZ Institute.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {testimonials.map((testimonial) => (
                            <div key={testimonial.id} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
                                <div className="flex items-center mb-6">
                                    <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-2xl mr-4 flex-shrink-0">
                                        {testimonial.name.charAt(0)}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg text-gray-800">{testimonial.name}</h4>
                                        <span className="text-sm text-blue-600 font-medium">{testimonial.role}</span>
                                    </div>
                                </div>
                                <div className="flex-grow">
                                    <p className="text-gray-600 italic leading-relaxed">"{testimonial.text}"</p>
                                </div>
                                <div className="mt-6 flex text-yellow-400">
                                    {/* 5 Star Rating Placeholder */}
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                        </svg>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 bg-blue-900 rounded-2xl p-8 md:p-12 text-center text-white">
                        <h2 className="text-3xl font-bold mb-4">Join Our Growing Community</h2>
                        <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                            Become a part of ZMZ Institute and start writing your own success story today.
                        </p>
                        <Link href="/contact-us" className="inline-block px-8 py-3 bg-white text-blue-900 font-bold rounded-md hover:bg-gray-100 transition duration-300">
                            Enroll Now
                        </Link>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
