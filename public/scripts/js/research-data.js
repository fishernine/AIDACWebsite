// Research Papers Data
const researchPapers = [
        {
            id: 1,
        title: "Design and Analysis of Compact Bandpass Filters for 5G Applications",
        author: "Dr. Smith",
        category: "Filter",
        journal: "IEEE TMTT",
        year: 2024,
        citations: 45,
            image: "../assets/images/research/1.jpg",
        abstract: "This paper presents a novel approach to designing compact bandpass filters for 5G applications. The proposed design methodology combines advanced electromagnetic simulation techniques with optimization algorithms to achieve superior performance in terms of insertion loss, return loss, and bandwidth. Experimental results demonstrate significant improvements over conventional designs, with 30% reduction in size and 25% improvement in filter response.",
        tags: ["5G", "Bandpass Filter", "Microwave"],
        officialLink: "https://ieeexplore.ieee.org/document/12345678"
        },
        {
            id: 2,
        title: "Novel Low-Pass Filter Design Using Substrate Integrated Waveguide Technology",
        author: "Prof. Johnson",
            category: "Filter",
        journal: "IEEE MWCL",
        year: 2024,
        citations: 32,
            image: "../assets/images/research/2.jpg",
        abstract: "A new methodology for low-pass filter design utilizing substrate integrated waveguide technology is presented. The innovative approach leverages the advantages of SIW structures while maintaining excellent filtering characteristics. The design achieves ultra-wide stopband rejection and minimal insertion loss, making it suitable for high-frequency applications.",
        tags: ["Low-Pass Filter", "SIW", "Waveguide"],
        officialLink: "https://ieeexplore.ieee.org/document/87654321"
        },
        {
            id: 3,
        title: "High-Pass Filter Design for Millimeter-Wave Applications",
        author: "Dr. Williams",
        category: "Filter",
        journal: "IEEE TAP",
        year: 2023,
        citations: 28,
            image: "../assets/images/research/3.jpg",
        abstract: "Advanced high-pass filter designs optimized for millimeter-wave frequency applications are investigated. The research focuses on achieving high selectivity and low loss in the challenging mm-wave frequency range. Novel design techniques are proposed that significantly improve filter performance compared to existing solutions.",
        tags: ["High-Pass Filter", "Millimeter-Wave", "RF"],
        officialLink: "https://ieeexplore.ieee.org/document/98765432"
        },
        {
            id: 4,
        title: "Tunable Notch Filter Design for Interference Suppression",
        author: "Prof. Brown",
        category: "Filter",
        journal: "IEEE TMTT",
        year: 2023,
        citations: 41,
            image: "../assets/images/research/4.jpg",
        abstract: "Innovative tunable notch filter designs for effective interference suppression in communication systems are presented. The research demonstrates novel tuning mechanisms that provide wide frequency range coverage while maintaining excellent filter characteristics. Experimental validation shows superior performance in real-world interference scenarios.",
        tags: ["Notch Filter", "Tunable", "Interference"],
        officialLink: "https://ieeexplore.ieee.org/document/11223344"
        },
        {
            id: 5,
        title: "Compact Bandstop Filter for Ultra-Wideband Applications",
        author: "Dr. Davis",
        category: "Filter",
        journal: "IEEE MWCL",
        year: 2023,
        citations: 36,
            image: "../assets/images/research/5.jpg",
        abstract: "Compact bandstop filter designs specifically optimized for ultra-wideband applications are investigated. The research addresses the challenges of achieving wide stopband coverage while maintaining compact size. Novel design approaches result in filters with excellent rejection characteristics and minimal insertion loss.",
        tags: ["Bandstop Filter", "UWB", "Compact"],
        officialLink: "https://ieeexplore.ieee.org/document/55667788"
        },
        {
            id: 6,
        title: "Multi-Band Filter Design for Cognitive Radio Systems",
        author: "Prof. Miller",
            category: "Filter",
        journal: "IEEE TAP",
        year: 2023,
        citations: 29,
            image: "../assets/images/research/6.jpg",
        abstract: "Advanced multi-band filter designs for cognitive radio systems and dynamic spectrum access are presented. The research focuses on developing filters that can adapt to changing frequency requirements while maintaining optimal performance. The proposed designs enable efficient spectrum utilization in cognitive radio networks.",
        tags: ["Multi-Band Filter", "Cognitive Radio", "Dynamic Spectrum"],
        officialLink: "https://ieeexplore.ieee.org/document/99887766"
    },
    {
        id: 7,
        title: "Antenna Array Design for MIMO Systems",
        author: "Dr. Wilson",
        category: "Antenna",
        journal: "IEEE TAP",
        year: 2024,
        citations: 52,
        image: "../assets/images/research/1.jpg",
        abstract: "Novel antenna array designs optimized for MIMO communication systems are presented. The research focuses on achieving high channel capacity and low correlation between antenna elements. Advanced array geometries and feeding networks are proposed that significantly improve MIMO system performance.",
        tags: ["Antenna Array", "MIMO", "Wireless"],
        officialLink: "https://ieeexplore.ieee.org/document/22334455"
    },
    {
        id: 8,
        title: "Microstrip Patch Antenna Design for 5G Applications",
        author: "Prof. Anderson",
        category: "Antenna",
        journal: "IEEE TAP",
        year: 2024,
        citations: 38,
        image: "../assets/images/research/2.jpg",
        abstract: "Advanced microstrip patch antenna designs for next-generation 5G communication systems are investigated. The research addresses the challenges of achieving wide bandwidth and high gain in compact antenna structures. Novel design techniques result in antennas with excellent performance characteristics for 5G applications.",
        tags: ["Microstrip", "5G", "Patch Antenna"],
        officialLink: "https://ieeexplore.ieee.org/document/33445566"
    },
    {
        id: 9,
        title: "RFIC Design for 6G Communication",
        author: "Prof. Anderson",
        category: "RFIC",
        journal: "IEEE JSSC",
        year: 2024,
        citations: 38,
        image: "../assets/images/research/3.jpg",
        abstract: "Advanced RFIC designs targeting next-generation 6G communication systems are presented. The research focuses on developing integrated circuits that can operate at extremely high frequencies while maintaining low power consumption. Novel circuit topologies and design methodologies are proposed for 6G applications.",
        tags: ["RFIC", "6G", "Communication"],
        officialLink: "https://ieeexplore.ieee.org/document/44556677"
    },
    {
        id: 10,
        title: "Analog IC Design for Sensor Applications",
        author: "Dr. Chen",
        category: "Analog IC",
        journal: "IEEE JSSC",
        year: 2024,
        citations: 25,
        image: "../assets/images/research/4.jpg",
        abstract: "Novel analog integrated circuit designs for sensor applications and signal processing are investigated. The research focuses on developing low-power, high-precision analog circuits for sensor interfaces. Advanced design techniques result in circuits with excellent performance characteristics for various sensor applications.",
        tags: ["Analog IC", "Sensor", "Signal Processing"],
        officialLink: "https://ieeexplore.ieee.org/document/55667788"
    }
];

// Research Categories - 只保留4个主要分类
const researchCategories = [
    {
        name: "Antenna",
        slug: "antenna",
        count: 2
    },
    {
        name: "Filter", 
        slug: "filter",
        count: 6
    },
    {
        name: "Analog IC",
        slug: "analog-ic",
        count: 1
    },
    {
        name: "RFIC",
        slug: "rfic", 
        count: 1
    }
];

// Export data for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { researchPapers, researchCategories };
} 