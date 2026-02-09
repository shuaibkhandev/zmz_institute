import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow bg-white py-12">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h1 className="text-4xl font-bold text-gray-800 mb-8">Privacy Policy</h1>

                    <div className="prose prose-blue max-w-none text-gray-700">
                        <p className="mb-4">
                            At ZMZ Institute, we collect and manage user data according to the following Privacy Policy. This document is part of our Terms of Service, and by using zmzinstitute.com (the “Website”), you agree to the terms of this Privacy Policy and the Terms of Service.
                        </p>

                        <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-800">1. Information Collection</h2>
                        <p className="mb-4">
                            We collect information you provide directly to us. For example, we collect information when you create an account, subscribe, participate in any interactive features of our services, fill out a form, request customer support or otherwise communicate with us. The types of information we may collect include your name, email address, postal address, credit card information and other contact or identifying information you choose to provide.
                        </p>

                        <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-800">2. Use of Information</h2>
                        <p className="mb-4">
                            We use the information we collect to provide, maintain, and improve our services, such as to administer your account, send you technical notices, updates, security alerts and support and administrative messages and to respond to your comments, questions and requests and provide customer service.
                        </p>

                        <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-800">3. Sharing of Information</h2>
                        <p className="mb-4">
                            We will not share or sell your personal information to third parties. We may share information about you as follows or as otherwise described in this Privacy Policy:
                        </p>
                        <ul className="list-disc pl-6 mb-4 space-y-2">
                            <li>With vendors, consultants and other service providers who need access to such information to carry out work on our behalf.</li>
                            <li>In response to a request for information if we believe disclosure is in accordance with any applicable law, regulation or legal process, or as otherwise required by any applicable law, rule or regulation.</li>
                            <li>If we believe your actions are inconsistent with the spirit or language of our user agreements or policies, or to protect the rights, property and safety of Company or others.</li>
                        </ul>

                        <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-800">4. Data Security</h2>
                        <p className="mb-4">
                            We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction.
                        </p>

                        <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-800">5. Contact Us</h2>
                        <p className="mb-4">
                            If you have any questions about this Privacy Policy, please contact us at zmzinstitute@gmail.com.
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
