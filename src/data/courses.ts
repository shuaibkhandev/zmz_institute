export interface Course {
    id: number;
    title: string;
    description: string;
    duration: string;
    imagePlaceholder: string;
    details: {
        overview: string;
        curriculum: string[];
        certification: string;
    };
}

export const courses: Course[] = [
    {
        id: 1,
        title: "Android Advance Chip Level",
        description: "Master the art of repairing advanced Android devices at the chip level.",
        duration: "3 Months",
        imagePlaceholder: "Android Repair",
        details: {
            overview: "This comprehensive course covers everything from basic electronics to advanced chip-level troubleshooting for Android smartphones. You will learn to diagnose and repair complex hardware issues, work with schematics, and use professional tools.",
            curriculum: [
                "Basic Electronics & Components",
                "Multimeter & Soldering Iron Usage",
                "SMD Rework Station & Micro Soldering",
                "Schematic Diagram Reading",
                "Power IC, CPU, EMMC, & Network IC Work",
                "Software Flashing & Unlocking",
                "Dead Mobile Troubleshooting",
            ],
            certification: "Certificate of Completion in Android Advance Chip Level Repair",
        },
    },
    {
        id: 2,
        title: "iPhone Master Class",
        description: "Specialized training for iPhone repair and diagnostics.",
        duration: "2 Months",
        imagePlaceholder: "iPhone Repair",
        details: {
            overview: "Become an expert in iPhone repair with our Master Class. Focus on Apple's unique hardware architecture, face ID repair, battery replacement, screen refurbishment, and logic board diagnostics.",
            curriculum: [
                "iPhone Disassembly & Assembly",
                "Screen & Battery Replacement",
                "Face ID & Touch ID Repair",
                "Logic Board Diagnostics",
                "Audio IC, Touch IC, & Baseband Repair",
                "iCloud Bypass & Software Issues",
            ],
            certification: "iPhone Master Technician Certificate",
        },
    },
    {
        id: 3,
        title: "Software Specialist",
        description: "Learn to flash, unlock, and fix software issues on mobile devices.",
        duration: "1 Month",
        imagePlaceholder: "Software",
        details: {
            overview: "Focus solely on the software side of mobile repairing. Learn to handle various software boxes, dongles, and tools to fix software-bricked phones, unlock networks, and bypass security locks.",
            curriculum: [
                "Flashing Tools & Techniques",
                "FRP Lock Removal",
                "Network Unlocking",
                "Country Lock Removal",
                "Pattern/Pin/Password Removal without Data Loss (where possible)",
                "Operating System Installation",
            ],
            certification: "Mobile Software Specialist Certificate",
        },
    },
];
