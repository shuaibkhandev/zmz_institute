import Link from "next/link";

const Hero = () => {
    return (
        <section className="relative bg-gray-900 text-white py-20 lg:py-32">
            {/* Background Image Placeholder or Overlay */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Replace with actual image if available, using a placeholder gradient for now */}
                <div className="w-full h-full bg-gradient-to-r from-blue-900 to-gray-900 opacity-90"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                    WELCOME TO ZMZ INSTITUTE
                </h1>
                <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                    Learn Mobile Repairing from Experts. Advance Chip Level Training.
                </p>
                <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <Link href="/courses" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition duration-300">
                        View Courses
                    </Link>
                    <Link href="/contact-us" className="px-8 py-3 bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white font-semibold rounded-md transition duration-300">
                        Contact Us
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;
