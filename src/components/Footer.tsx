import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* About Section */}
                    <div className="mb-6 md:mb-0">
                        <img src="/logo_color.png" alt="ZMZ Institute Logo" className='w-20 mb-2' />
                        <p className="text-gray-400">
                            Leading institute for mobile repairing and advanced chip level training. Empowering students with practical skills for a successful career.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="mb-6 md:mb-0">
                        <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link href="/" className="text-gray-400 hover:text-white transition duration-300">Home</Link></li>
                            <li><Link href="/about-us" className="text-gray-400 hover:text-white transition duration-300">About Us</Link></li>
                            <li><Link href="/courses" className="text-gray-400 hover:text-white transition duration-300">Courses</Link></li>
                        </ul>
                    </div>

                    {/* Menu Row 2 / Support */}
                    <div className="mb-6 md:mb-0">
                        <h3 className="text-xl font-bold mb-4">More</h3>
                        <ul className="space-y-2">
                            <li><Link href="/photowalks" className="text-gray-400 hover:text-white transition duration-300">Photowalks</Link></li>
                            <li><Link href="/testimonials" className="text-gray-400 hover:text-white transition duration-300">Testimonials</Link></li>
                            <li><Link href="/privacy-policy" className="text-gray-400 hover:text-white transition duration-300">Privacy Policy</Link></li>
                            <li><Link href="/terms-conditions" className="text-gray-400 hover:text-white transition duration-300">Terms & Conditions</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li className="flex items-start">
                                <svg className="w-5 h-5 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                <span>Nawagai Barikot Tehsil Barikot District Swat</span>
                            </li>
                            <li className="flex items-center">
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                <span>03409250940</span>
                            </li>
                            <li className="flex items-center">
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                <span>zmzinstitute@gmail.com</span>
                            </li>
                            <li className="pt-2"><Link href="/contact-us" className="text-gray-400 hover:text-white transition duration-300">Visit Us</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} ZMZ Institute. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
