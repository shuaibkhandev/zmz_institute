"use client";

import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo */}
                <div className="text-2xl font-bold text-blue-900 flex items-center">
                    <Link href="/" className="flex items-center">
                        <img src="/logo.png" alt="ZMZ Institute Logo" className="w-20 mr-2" />
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-6">
                    <Link href="/" className="text-gray-700 hover:text-blue-900 font-medium">Home</Link>
                    <Link href="/about-us" className="text-gray-700 hover:text-blue-900 font-medium">About Us</Link>
                    <Link href="/courses" className="text-gray-700 hover:text-blue-900 font-medium">Courses</Link>
                    <Link href="/photowalks" className="text-gray-700 hover:text-blue-900 font-medium">Photowalks</Link>
                    <Link href="/testimonials" className="text-gray-700 hover:text-blue-900 font-medium">Testimonials</Link>
                    <Link href="/contact-us" className="text-gray-700 hover:text-blue-900 font-medium">Contact Us</Link>
                </nav>

                {/* Mobile Menu Button */}
                <button className="md:hidden text-gray-700 focus:outline-none" onClick={toggleMenu}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        {isMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <nav className="md:hidden bg-white border-t border-gray-100">
                    <div className="flex flex-col p-4 space-y-2">
                        <Link href="/" className="text-gray-700 hover:text-blue-900 font-medium py-2">Home</Link>
                        <Link href="/about-us" className="text-gray-700 hover:text-blue-900 font-medium py-2">About Us</Link>
                        <Link href="/courses" className="text-gray-700 hover:text-blue-900 font-medium py-2">Courses</Link>
                        <Link href="/photowalks" className="text-gray-700 hover:text-blue-900 font-medium py-2">Photowalks</Link>
                        <Link href="/testimonials" className="text-gray-700 hover:text-blue-900 font-medium py-2">Testimonials</Link>
                        <Link href="/contact-us" className="text-gray-700 hover:text-blue-900 font-medium py-2">Contact Us</Link>
                    </div>
                </nav>
            )}
        </header>
    );
};

export default Header;
