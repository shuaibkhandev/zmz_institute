const About = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/2">
                        {/* Placeholder for About Image */}
                        <div className="bg-gray-200 h-64 md:h-96 w-full rounded-lg shadow-lg flex items-center justify-center">
                            <span className="text-gray-500 text-lg">About Image Placeholder</span>
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <h2 className="text-3xl font-bold mb-6 text-gray-800">Why Choose ZMZ Institute?</h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            ZMZ Mobile Repairing Institute offers Android Advance Chip Level Training, a professional course designed to provide deep knowledge and hands-on skills in mobile repairing.
                        </p>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            This course is perfect for those who want to learn mobile repairing Level 3 Training and start a successful career in advanced chip-level repair. With the help of expert teachers, you can gain practical knowledge and improve your skills step by step.
                        </p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2">
                            <li>Expert Trainers</li>
                            <li>Practical Hands-on Training</li>
                            <li>Advanced Chip Level Repair</li>
                            <li>Job Placement Assistance</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
