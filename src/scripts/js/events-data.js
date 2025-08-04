// Events Data Management
// 集中管理所有事件数据，便于添加新事件

const EVENTS_DATA = {
    // 事件数据数组
    events: [
        {
            id: 1,
            title: "IEEE International Conference on Antenna Design",
            date: "2024-03-15",
            location: "Glasgow, UK",
            type: "Conference",
            attendees: "200+ Attendees",
            image: "../assets/images/news/1.png",
            tags: ["antenna", "research", "technology"],
            description: "Leading conference on antenna design and optimization",
            fullDescription: `
                <p class="mb44">
                    The IEEE International Conference on Antenna Design brings together leading researchers, engineers, and industry professionals 
                    to discuss the latest advances in antenna technology and design methodologies. This premier event focuses on innovative 
                    approaches to antenna optimization, including AI-driven design techniques and emerging technologies.
                </p>
                <blockquote class="wp-block-quote">
                    <p>This conference represents the cutting edge of antenna design research, showcasing how artificial intelligence is 
                    revolutionizing the field of electronic design automation.</p>
                    <cite><strong>– Dr. Sarah Chen, Conference Chair</strong></cite>
                </blockquote>
                <h3>Key Topics</h3>
                <ul>
                    <li>AI-powered antenna optimization algorithms</li>
                    <li>Multi-objective design methodologies</li>
                    <li>Machine learning in electromagnetic simulation</li>
                    <li>Advanced materials for antenna applications</li>
                    <li>5G and beyond antenna technologies</li>
                </ul>
                <h3>Event Highlights</h3>
                <p>
                    The conference features keynote presentations from industry leaders, technical sessions with peer-reviewed papers, 
                    hands-on workshops, and networking opportunities. Participants will gain insights into the latest research findings 
                    and practical applications in antenna design.
                </p>
            `,
            registrationUrl: "https://ieee-antenna-conference-2024.com",
            organizer: "IEEE Antennas and Propagation Society",
            contactEmail: "antenna-conf@ieee.org",
            venue: "Glasgow Conference Centre",
            duration: "3 days"
        },
        {
            id: 2,
            title: "AI in Electronic Design Workshop",
            date: "2024-04-22",
            location: "Online",
            type: "Workshop",
            attendees: "50+ Attendees",
            image: "../assets/images/news/2.png",
            tags: ["ai", "technology", "engineering"],
            description: "Hands-on workshop on AI applications in electronic design",
            fullDescription: `
                <p class="mb44">
                    This intensive workshop provides hands-on experience with AI techniques applied to electronic design automation. 
                    Participants will learn practical implementation of machine learning algorithms for circuit optimization, layout design, 
                    and performance prediction.
                </p>
                <h3>Workshop Agenda</h3>
                <ul>
                    <li>Introduction to AI in EDA</li>
                    <li>Neural networks for circuit optimization</li>
                    <li>Reinforcement learning in layout design</li>
                    <li>Practical coding sessions</li>
                    <li>Case studies and real-world applications</li>
                </ul>
                <h3>Prerequisites</h3>
                <p>
                    Basic knowledge of Python programming and electronic design concepts is recommended. All software and tools will be 
                    provided during the workshop.
                </p>
            `,
            registrationUrl: "https://ai-ed-workshop-2024.com",
            organizer: "AIDAC Research Group",
            contactEmail: "workshop@aidac.ac.uk",
            venue: "Virtual Platform (Zoom)",
            duration: "1 day"
        },
        {
            id: 3,
            title: "Research Symposium on RF Design",
            date: "2024-05-10",
            location: "Edinburgh, UK",
            type: "Symposium",
            attendees: "150+ Attendees",
            image: "../assets/images/news/3.png",
            tags: ["rf", "research", "engineering"],
            description: "Academic symposium focusing on RF design research",
            fullDescription: `
                <p class="mb44">
                    The Research Symposium on RF Design brings together academic researchers and industry practitioners to present 
                    cutting-edge research in radio frequency design and optimization. This event emphasizes the latest theoretical 
                    advances and their practical applications.
                </p>
                <h3>Research Areas</h3>
                <ul>
                    <li>RF circuit design and optimization</li>
                    <li>Antenna array design</li>
                    <li>Filter and amplifier design</li>
                    <li>RF system integration</li>
                    <li>Emerging RF technologies</li>
                </ul>
                <h3>Call for Papers</h3>
                <p>
                    We invite submissions of original research papers in all areas of RF design. Selected papers will be presented 
                    in technical sessions and published in the symposium proceedings.
                </p>
            `,
            registrationUrl: "https://rf-symposium-2024.com",
            organizer: "University of Edinburgh",
            contactEmail: "rf-symposium@ed.ac.uk",
            venue: "Edinburgh International Conference Centre",
            duration: "2 days"
        },
        {
            id: 4,
            title: "International Conference on Microwave Engineering",
            date: "2024-06-28",
            location: "London, UK",
            type: "Conference",
            attendees: "300+ Attendees",
            image: "../assets/images/news/12.jpg",
            tags: ["rf", "technology", "engineering"],
            description: "International conference on microwave engineering",
            fullDescription: `
                <p class="mb44">
                    The International Conference on Microwave Engineering is a premier event for microwave and RF engineering professionals. 
                    This conference covers the entire spectrum of microwave technology, from fundamental research to commercial applications.
                </p>
                <h3>Conference Tracks</h3>
                <ul>
                    <li>Microwave circuit design</li>
                    <li>Antenna and propagation</li>
                    <li>RF and microwave systems</li>
                    <li>Emerging technologies</li>
                    <li>Industry applications</li>
                </ul>
                <h3>Exhibition</h3>
                <p>
                    The conference includes a technical exhibition featuring the latest products and services from leading companies 
                    in the microwave and RF industry.
                </p>
            `,
            registrationUrl: "https://microwave-conference-2024.com",
            organizer: "IET Microwave, Antennas & Propagation",
            contactEmail: "microwave-conf@iet.org",
            venue: "London ExCeL Centre",
            duration: "4 days"
        },
        {
            id: 5,
            title: "Machine Learning in Antenna Optimization",
            date: "2024-07-15",
            location: "Online",
            type: "Webinar",
            attendees: "100+ Attendees",
            image: "../assets/images/news/13.jpg",
            tags: ["ai", "antenna", "research"],
            description: "Webinar on ML applications in antenna optimization",
            fullDescription: `
                <p class="mb44">
                    This webinar explores the application of machine learning techniques to antenna optimization problems. 
                    Learn how AI algorithms can significantly reduce design time while improving performance.
                </p>
                <h3>Webinar Topics</h3>
                <ul>
                    <li>Introduction to ML in antenna design</li>
                    <li>Neural network architectures for optimization</li>
                    <li>Genetic algorithms and evolutionary strategies</li>
                    <li>Real-world case studies</li>
                    <li>Future trends and challenges</li>
                </ul>
                <h3>Interactive Session</h3>
                <p>
                    The webinar includes an interactive Q&A session where participants can ask questions about implementing 
                    ML techniques in their antenna design projects.
                </p>
            `,
            registrationUrl: "https://ml-antenna-webinar-2024.com",
            organizer: "AIDAC Research Group",
            contactEmail: "webinar@aidac.ac.uk",
            venue: "Virtual Platform (WebEx)",
            duration: "2 hours"
        },
        {
            id: 6,
            title: "Advanced Filter Design Techniques",
            date: "2024-08-30",
            location: "Manchester, UK",
            type: "Workshop",
            attendees: "75+ Attendees",
            image: "../assets/images/news/14.jpg",
            tags: ["rf", "engineering", "technology"],
            description: "Workshop on advanced filter design techniques",
            fullDescription: `
                <p class="mb44">
                    This advanced workshop covers cutting-edge techniques in RF and microwave filter design. Participants will learn 
                    about modern design methodologies, optimization techniques, and practical implementation strategies.
                </p>
                <h3>Workshop Content</h3>
                <ul>
                    <li>Advanced filter synthesis methods</li>
                    <li>Multi-band filter design</li>
                    <li>Filter optimization using AI</li>
                    <li>Practical design exercises</li>
                    <li>Manufacturing considerations</li>
                </ul>
                <h3>Hands-on Experience</h3>
                <p>
                    The workshop includes hands-on design sessions using industry-standard software tools. Participants will 
                    design and simulate filters under expert guidance.
                </p>
            `,
            registrationUrl: "https://filter-workshop-2024.com",
            organizer: "University of Manchester",
            contactEmail: "filter-workshop@manchester.ac.uk",
            venue: "Manchester Engineering Campus",
            duration: "1 day"
        }
    ],
    
    // 获取所有事件
    getAllEvents() {
        return this.events;
    },
    
    // 根据标签筛选事件
    getEventsByTag(tag) {
        if (tag === 'all') {
            return this.events;
        }
        return this.events.filter(event => event.tags.includes(tag));
    },
    
    // 根据ID获取单个事件
    getEventById(id) {
        return this.events.find(event => event.id === parseInt(id));
    },
    
    // 添加新事件
    addEvent(eventData) {
        const newEvent = {
            id: this.events.length + 1,
            ...eventData
        };
        this.events.push(newEvent);
        return newEvent;
    },
    
    // 更新事件
    updateEvent(id, eventData) {
        const index = this.events.findIndex(event => event.id === id);
        if (index !== -1) {
            this.events[index] = { ...this.events[index], ...eventData };
            return this.events[index];
        }
        return null;
    },
    
    // 删除事件
    deleteEvent(id) {
        const index = this.events.findIndex(event => event.id === id);
        if (index !== -1) {
            return this.events.splice(index, 1)[0];
        }
        return null;
    },
    
    // 获取所有可用标签
    getAllTags() {
        const tags = new Set();
        this.events.forEach(event => {
            event.tags.forEach(tag => tags.add(tag));
        });
        return Array.from(tags);
    },
    
    // 格式化日期显示
    formatDate(dateString) {
        const date = new Date(dateString);
        const day = date.getDate();
        const month = date.toLocaleString('en', { month: 'short' });
        return { day, month };
    }
};

// 导出供其他文件使用
if (typeof module !== 'undefined' && module.exports) {
    module.exports = EVENTS_DATA;
} 