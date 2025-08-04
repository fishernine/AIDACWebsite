// Case Studies Data Management
const CASES_DATA = {
    cases: [
        {
            id: 1,
            title: "AI-Optimized Antenna Design for 5G Applications",
            category: "Antenna Design",
            subtitle: "Advanced AI-driven optimization techniques for 5G antenna design",
            date: "2024-03-15",
            duration: "6 months",
            team: "AIDAC Research Team",
            // Using fixed gallery images
            images: [
                "../assets/images/gallery/11.jpg",
                "../assets/images/gallery/12.jpg",
                "../assets/images/gallery/13.jpg"
            ],
            meta: [
                { label: "Project Type", value: "Research & Development" },
                { label: "Technology", value: "AI Optimization" },
                { label: "Start Date", value: "March 15, 2024" },
                { label: "Duration", value: "6 months" }
            ],
            content: `
                <p>
                    This case study demonstrates how AI-driven optimization techniques revolutionized antenna design for 5G applications. 
                    The project focused on developing advanced algorithms that could automatically optimize antenna parameters for maximum 
                    performance and efficiency.
                </p>
                <p>
                    Our team implemented machine learning algorithms that analyzed thousands of antenna configurations, identifying 
                    optimal designs that achieved 70% faster design time while improving performance by 25% compared to traditional methods.
                </p>
                <h3>Key Achievements</h3>
                <ul>
                    <li>70% reduction in design time</li>
                    <li>25% improvement in antenna performance</li>
                    <li>Automated parameter optimization</li>
                    <li>Real-time performance analysis</li>
                </ul>
                <h3>Technical Approach</h3>
                <p>
                    The project utilized deep learning neural networks to analyze electromagnetic simulations and predict optimal 
                    antenna configurations. The AI system was trained on a comprehensive dataset of antenna designs and their 
                    performance characteristics.
                </p>
            `,
            tags: ["antenna", "ai", "5g", "optimization"]
        },
        {
            id: 2,
            title: "Machine Learning in RF Filter Optimization",
            category: "RF Engineering",
            subtitle: "Advanced machine learning algorithms for RF filter design optimization",
            date: "2024-04-22",
            duration: "4 months",
            team: "AIDAC RF Team",
            // Using fixed gallery images
            images: [
                "../assets/images/gallery/11.jpg",
                "../assets/images/gallery/12.jpg",
                "../assets/images/gallery/13.jpg"
            ],
            meta: [
                { label: "Project Type", value: "Algorithm Development" },
                { label: "Technology", value: "Machine Learning" },
                { label: "Start Date", value: "April 22, 2024" },
                { label: "Duration", value: "4 months" }
            ],
            content: `
                <p>
                    This case study explores the application of machine learning algorithms in RF filter optimization. 
                    The project aimed to develop intelligent systems that could automatically design and optimize RF filters 
                    for various applications.
                </p>
                <p>
                    Advanced machine learning algorithms were applied to optimize RF filter design, achieving 40% better 
                    performance and 60% faster design convergence compared to traditional methods.
                </p>
                <h3>Technical Implementation</h3>
                <ul>
                    <li>Neural network-based filter parameter optimization</li>
                    <li>Automated frequency response analysis</li>
                    <li>Real-time performance monitoring</li>
                    <li>Adaptive learning algorithms</li>
                </ul>
                <h3>Results</h3>
                <p>
                    The machine learning approach resulted in significantly improved filter performance with reduced design time. 
                    The system was able to automatically adjust filter parameters based on performance requirements and environmental conditions.
                </p>
            `,
            tags: ["rf", "filter", "machine-learning", "optimization"]
        },
        {
            id: 3,
            title: "Neural Network-Based Circuit Design Automation",
            category: "AI Engineering",
            subtitle: "Implementation of neural networks for automated circuit design",
            date: "2024-05-10",
            duration: "8 months",
            team: "AIDAC AI Team",
            // Using fixed gallery images
            images: [
                "../assets/images/gallery/11.jpg",
                "../assets/images/gallery/12.jpg",
                "../assets/images/gallery/13.jpg"
            ],
            meta: [
                { label: "Project Type", value: "Automation System" },
                { label: "Technology", value: "Neural Networks" },
                { label: "Start Date", value: "May 10, 2024" },
                { label: "Duration", value: "8 months" }
            ],
            content: `
                <p>
                    This comprehensive case study demonstrates the implementation of neural networks for automated circuit design. 
                    The project focused on developing intelligent systems that could automatically generate and optimize electronic 
                    circuit designs based on specified requirements.
                </p>
                <p>
                    Implementation of neural networks for automated circuit design resulted in 50% reduction in design time 
                    and 30% improvement in circuit performance compared to traditional manual design methods.
                </p>
                <h3>System Architecture</h3>
                <ul>
                    <li>Deep learning-based circuit generation</li>
                    <li>Automated component selection</li>
                    <li>Performance prediction algorithms</li>
                    <li>Real-time optimization</li>
                </ul>
                <h3>Impact</h3>
                <p>
                    The neural network system revolutionized the circuit design process by automating complex design decisions 
                    and optimizing circuit performance automatically. This approach significantly reduced design time while 
                    improving overall circuit quality and reliability.
                </p>
            `,
            tags: ["neural-networks", "circuit-design", "automation", "ai"]
        }
    ],

    // Get all cases
    getAllCases() {
        return this.cases;
    },

    // Get case by ID
    getCaseById(id) {
        return this.cases.find(caseItem => caseItem.id === parseInt(id));
    },

    // Add new case
    addCase(caseData) {
        const newId = Math.max(...this.cases.map(c => c.id)) + 1;
        const newCase = {
            id: newId,
            title: caseData.title,
            category: caseData.category,
            subtitle: caseData.subtitle,
            date: caseData.date,
            duration: caseData.duration,
            team: caseData.team,
            images: caseData.images || [
                "../assets/images/gallery/11.jpg",
                "../assets/images/gallery/12.jpg",
                "../assets/images/gallery/13.jpg"
            ],
            meta: caseData.meta,
            content: caseData.content,
            tags: caseData.tags || []
        };
        this.cases.push(newCase);
        return newCase;
    },

    // Update case
    updateCase(id, caseData) {
        const index = this.cases.findIndex(c => c.id === parseInt(id));
        if (index !== -1) {
            this.cases[index] = { ...this.cases[index], ...caseData };
            return this.cases[index];
        }
        return null;
    },

    // Delete case
    deleteCase(id) {
        const index = this.cases.findIndex(c => c.id === parseInt(id));
        if (index !== -1) {
            return this.cases.splice(index, 1)[0];
        }
        return null;
    },

    // Get cases by category
    getCasesByCategory(category) {
        return this.cases.filter(caseItem => caseItem.category === category);
    },

    // Get cases by tag
    getCasesByTag(tag) {
        return this.cases.filter(caseItem => caseItem.tags.includes(tag));
    },

    // Get all categories
    getAllCategories() {
        const categories = this.cases.map(caseItem => caseItem.category);
        return [...new Set(categories)];
    },

    // Get all tags
    getAllTags() {
        const allTags = this.cases.flatMap(caseItem => caseItem.tags);
        return [...new Set(allTags)];
    },

    // Format date
    formatDate(dateString) {
        const date = new Date(dateString);
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
                       'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        return {
            day: date.getDate(),
            month: months[date.getMonth()],
            year: date.getFullYear(),
            full: date.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            })
        };
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CASES_DATA;
} 