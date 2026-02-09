import { testimonials } from '../data/testimonials';
import Link from 'next/link';

const Testimonials = () => {
    // Show only first 3 testimonials on homepage
    const displayedTestimonials = testimonials.slice(0, 3);

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">What Our Students Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {displayedTestimonials.map((testimonial) => (
                        <div key={testimonial.id} className="bg-gray-50 p-6 rounded-lg shadow-md border border-gray-100">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl mr-4">
                                    {testimonial.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                                    <span className="text-sm text-gray-500">{testimonial.role}</span>
                                </div>
                            </div>
                            <p className="text-gray-600 italic">"{testimonial.text}"</p>
                        </div>
                    ))}
                </div>
                <div className="text-center">
                    <Link href="/testimonials" className="inline-block px-6 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-md hover:bg-blue-600 hover:text-white transition duration-300">
                        View All Success Stories
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;

