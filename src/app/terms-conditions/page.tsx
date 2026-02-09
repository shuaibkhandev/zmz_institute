import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function TermsConditions() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow bg-white py-12">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h1 className="text-4xl font-bold text-gray-800 mb-8">Terms and Conditions</h1>

                    <div className="prose prose-blue max-w-none text-gray-700">
                        <p className="mb-4">
                            Welcome to ZMZ Institute. These terms and conditions outline the rules and regulations for the use of ZMZ Institute's Website. By accessing this website we assume you accept these terms and conditions. Do not continue to use zmzinstitute.com if you do not agree to take all of the terms and conditions stated on this page.
                        </p>

                        <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-800">1. License</h2>
                        <p className="mb-4">
                            Unless otherwise stated, ZMZ Institute and/or its licensors own the intellectual property rights for all material on ZMZ Institute. All intellectual property rights are reserved. You may access this from ZMZ Institute for your own personal use subjected to restrictions set in these terms and conditions.
                        </p>
                        <p className="mb-2 font-semibold">You must not:</p>
                        <ul className="list-disc pl-6 mb-4 space-y-2">
                            <li>Republish material from ZMZ Institute</li>
                            <li>Sell, rent or sub-license material from ZMZ Institute</li>
                            <li>Reproduce, duplicate or copy material from ZMZ Institute</li>
                            <li>Redistribute content from ZMZ Institute</li>
                        </ul>

                        <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-800">2. Course Enrollment and Fees</h2>
                        <p className="mb-4">
                            Enrollment in our courses is subject to availability and payment of the applicable fees. Fees are non-refundable once the course has commenced, except as required by law. We reserve the right to change course fees at any time, but changes will not affect already enrolled students.
                        </p>

                        <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-800">3. Student Conduct</h2>
                        <p className="mb-4">
                            Students are expected to conduct themselves in a professional and respectful manner at all times. Harassment, discrimination, or disruptive behavior will not be tolerated and may result in expulsion from the institute without refund.
                        </p>

                        <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-800">4. Limitation of Liability</h2>
                        <p className="mb-4">
                            In no event shall ZMZ Institute, nor any of its officers, directors and employees, be held liable for anything arising out of or in any way connected with your use of this Website whether such liability is under contract. ZMZ Institute, including its officers, directors and employees shall not be held liable for any indirect, consequential or special liability arising out of or in any way related to your use of this Website.
                        </p>

                        <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-800">5. Changes to Terms</h2>
                        <p className="mb-4">
                            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
