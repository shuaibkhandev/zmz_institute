export interface Testimonial {
    id: number;
    name: string;
    role: string;
    text: string;
}

export const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Ali Khan",
        role: "Mobile Technician",
        text: "ZMZ Institute provided me with the skills I needed to start my own mobile repair shop. The hands-on training was excellent.",
    },
    {
        id: 2,
        name: "Sara Ahmed",
        role: "Student",
        text: "The instructors are very knowledgeable and supportive. I learned advanced chip level repair which gave me a great career boost.",
    },
    {
        id: 3,
        name: "Bilal Hussain",
        role: "Entrepreneur",
        text: "Highly recommended for anyone looking to enter the mobile repairing industry. Professional environment and up-to-date curriculum.",
    },
    {
        id: 4,
        name: "Usman Zafar",
        role: "Software Expert",
        text: "I took the software specialist course and it was a game changer. I can now handle complex software issues with ease.",
    },
    {
        id: 5,
        name: "Hina Riaz",
        role: "Business Owner",
        text: "Thanks to ZMZ Institute, I was able to expand my family business to include mobile repairing services.",
    },
    {
        id: 6,
        name: "Kamran Akmal",
        role: "Freelancer",
        text: "The best place in Swat for technical training. The environment is friendly and conducive to learning.",
    },
];
