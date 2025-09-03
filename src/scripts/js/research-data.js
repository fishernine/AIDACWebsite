// Research Papers Data
const researchPapers = [
        {
            id: 1,
        title: "Application of Machine Learning-Assisted Global Optimization for Improvement in Design and Performance of Open Resonant Cavity Antenna",
        author: "Koushik Dutta; Mobayode O. Akinsolu; Puneet Kumar Mishra; Bo Liu; Debatosh Guha",
        journal: "IEEE Open Journal of Antennas and Propagation",
        year: 2024,
        doi: "10.1109/OJAP.2024.3385675",
                       image: "../assets/images/news/1.png",
        abstract: "Open resonant cavity antenna (ORCA) and its recent advances promise attractive features and possible applications, although the designs reported so far are solely based on the classical electromagnetic (EM) theory and general perception of EM circuits. This work explores machine learning (ML)-assisted antenna design techniques aiming to improve and optimize its major radiation parameters over the maximum achievable operating bandwidth. A state-of-the-art method, e.g., parallel surrogate model-assisted hybrid differential evolution for antenna synthesis (PSADEA) has been exercised upon a reference ORCA geometry revealing a fascinating outcome. This modifies the shape of the cavity which was not predicted by EM-based analysis as well as promising significant improvement in its radiation properties. The PSADEA-generated design has been experimentally verified indicating 3dB-11dB improvement in sidelobe level along with high broadside gain maintained above 17 dBi over the 18.5% impedance bandwidth of the ORCA. The new design has been theoretically interpreted by the theory of geometrical optics (GO). This investigation demonstrates the potential and possibilities of employing artificial intelligence (AI)-based techniques in antenna design where multiple parameters need to be adjusted simultaneously for the best possible performances.",
        tags: ["Antenna", "Filter"],
        officialLink: "javascript:void(0);"
        },
        {
            id: 2,
        title: "Geometrical Optics-Based Advanced Design of an Open Cavity Resonant Antenna",
        author: "Koushik Dutta; Puneet Kumar Mishra; Spandan Manna; Alolika Pal; Debatosh Guha",
        journal: "IEEE Antennas and Wireless Propagation Letters ",
        year: 2021,
        doi: "10.1109/LAWP.2021.3049415",
        image: "../assets/images/news/2.png",
        abstract: "This letter explores geometrical optics-based raytracing in combination with modal analysis to realize an open cavity structure as an advanced variant of the resonant cavity antenna (RCA). Additional ray confinement has been ensured by determining accurate phase-locking conditions as demonstrated for the first time. Its combination with the analysis of the cavity mode has also been introduced to determine the optimum design parameters, achieving improved radiation properties. With respect to a reference RCA reported earlier, the proposed approach exhibits a remarkable improvement in gain by 4-9 dB, resulting in about 17 dBi peak value consistently over the full 18% matching bandwidth. This is resultant from an increase in aperture efficiency, typically from 27% to 74%. This is achieved without any compromise with the cross-polarization property. The sidelobe level improves over the band except in higher frequency in H-plane. The proposed concept is commercially viable, showing significantly advantageous features.",
        tags: ["Antenna", "Filter"],
        officialLink: "https://ieeexplore.ieee.org/document/9314199"
        },
        {
            id: 3,
        title: "An Efficient Method for Complex Antenna Design Based on a Self Adaptive Surrogate Model-Assisted Optimization Technique",
        author: "Bo Liu; Mobayode O. Akinsolu; Chaoyun Song; Qiang Hua; Peter Excell; Qian Xu",
        journal: "IEEE Transactions on Antennas and Propagation",
        year: 2021,
        doi: "10.1109/TAP.2021.3051034",
        image: "../assets/images/news/3.png",
        abstract: "Surrogate models are widely used in antenna design for optimization efficiency improvement. Currently, the targeted antennas often have a small number of design variables and specifications, and the surrogate model training time is short. However, modern antennas become increasingly complex, which needs much more design variables and specifications, making the training time become a new bottleneck, i.e., in some cases, even longer than electromagnetic (EM) simulation time. Therefore, a new method, called training cost reduced surrogate model-assisted hybrid differential evolution for complex antenna optimization (TR-SADEA), is presented in this article. The key innovations include: 1) a self-adaptive Gaussian process surrogate modeling method with a significantly reduced training time while mostly maintaining the antenna performance prediction accuracy and 2) a new hybrid surrogate model-assisted antenna optimization framework that reduces the training time and increases the convergence speed. An indoor base station antenna with 2G to 5G cellular bands (45 design variables and 12 specifications) and a 5G outdoor base station antenna (23 design variables and 18 specifications) are used to demonstrate TR-SADEA. Experimental results show that more than 90% of the training time and about 20% iterations (simulations and surrogate modeling) are reduced compared to a state-of-the-art method while obtaining high antenna performance.",
        tags: ["Antenna", "Filter"],
        officialLink: "https://ieeexplore.ieee.org/document/9328181"
        },
        {
            id: 4,
        title: "Design of Zero Clearance SIW Endfire Antenna Array Using Machine Learning-Assisted Optimization",
        author: "Jin Zhang; Mobayode O. Akinsolu; Bo Liu; Shuai Zhang",
        journal: "IEEE Transactions on Antennas and Propagation",
        year: 2021,
        doi: "10.1109/TAP.2021.3137500",
        image: "../assets/images/news/4.jpg",
        abstract: "In this communication, a substrate integrated waveguide (SIW) end-fire antenna array with zero clearance is proposed for fifth-generation (5G) mobile applications using machine learning-assisted optimization. In particular, a novel impedance matching architecture that involves three arbitrary pad-loading metallic vias is investigated and adopted for the antenna element. Due to the stringent design requirements, the locations and sizes of the vias and pads are obtained via a state-of-the-art machine learning assisted antenna design exploration method, parallel surrogate model-assisted hybrid differential evolution for antenna synthesis (PSADEA). Keeping a very low profile, the array optimized by PSADEA covers an operating frequency bandwidth from 36 to 40 GHz. The in-band total efficiency is generally better than 60% and the peak gain is above 5 dBi. The beam scanning range at 39 GHz covers from −20° to 35°.",
        tags: ["Antenna", "RFIC"],
        officialLink: "https://ieeexplore.ieee.org/document/9665274"
        },
        {
            id: 5,
        title: "A Wideband Low-RCS Metasurface-Inspired Circularly Polarized Slot Array Based on AI-Driven Antenna Design Optimization Algorithm",
        author: "Qi Zheng; Chenjiang Guo; Jun Ding; Mobayode O. Akinsolu; Bo Liu; Guy A. E. Vandenbosch",
        journal: "IEEE Transactions on Antennas and Propagation",
        year: 2022,
        doi: "10.1109/TAP.2022.3161389",
        image: "../assets/images/news/5.jpg",
        abstract: "A metasurface (MS)-inspired low-profile circularly polarized (CP) slot array with a wide CP band and broadband low radar cross section (RCS) is proposed in this communication. The slot array consists of four element antennas, four grounded substrates, and a sequential-rotated feeding network. In terms of radiation performance, the array yields a wide CP band resulting from the CP element antenna and the sequential-rotated feeding network. The CP element antenna is achieved due to the polarization conversion property of the MS-based superstrate. The feeding network with multiple related design parameters is optimized by an artificial intelligence (AI)-driven antenna design method to find the widest bandwidth. In terms of scattering performance, broadband RCS reduction is achieved by using a hybrid RCS reduction technique that combines two destructive interference principles. The |S11|<−10 dB bandwidth reaches 53.2%, the AR < 3 dB bandwidth reaches 50%, and the RCS reduction bandwidth reaches 147.8% for a low-profile structure with a relatively low number of MS unit cells. A prototype was fabricated and measured. The measured and simulated results are in good agreement.",
        tags: ["Antenna", "Filter"],
        officialLink: "https://ieeexplore.ieee.org/document/9743763"
        },
        {
            id: 6,
        title: "Automatic AI-Driven Design of Mutual Coupling Reducing Topologies for Frequency Reconfigurable Antenna Arrays",
        author: "Jiahao Zhang; Mobayode O. Akinsolu; Bo Liu; Guy A. E. Vandenbosch",
        journal: "IEEE Transactions on Antennas and Propagation",
        year: 2020,
        doi: "10.1109/TAP.2020.3012792",
        image: "../assets/images/news/6.jpg",
        abstract: "An automatic artificial intelligence (AI)-driven design procedure for mutual coupling reduction and a novel isolator are proposed for a frequency reconfigurable antenna array. The design process is driven and expedited by the parallel surrogate model-assisted differential evolution for antenna synthesis (PSADEA) method. The reconfigurable array element can switch its operation between the 2.5 GHz ISM band and the 3.4 GHz WiMAX band. By introducing the proposed isolator, the mutual coupling in the higher and lower band is reduced by 8 and 7 dB, respectively. The reconfigurable array was prototyped, and measurements agree well with simulations, verifying the validity of the proposed concept. Although used for a specific antenna in this communication, the proposed AI-driven design strategy is generic and can easily be employed for other array topologies.",
        tags: ["Antenna", "Filter"],
        officialLink: "https://ieeexplore.ieee.org/document/9158524"
    },
    {
        id: 7,
        title: "Machine learning-assisted lens-loaded cavity response optimization for improved direction-of-arrival estimation",
        author: "Muhammad Ali Babar Abbasi, Mobayode O. Akinsolu, Bo Liu, Okan Yurduseven, Vincent F. Fusco & Muhammad Ali Imran ",
        journal: "Scientific Reports",
        year: 2022,
        doi: "https://doi.org/10.1038/s41598-022-12011-z",
        image: "../assets/images/news/8.jpg",
        abstract: "This paper presents a millimeter-wave direction of arrival estimation (DoA) technique powered by dynamic aperture optimization. The frequency-diverse medium in this work is a lens-loaded oversized mmWave cavity that hosts quasi-random wave-chaotic radiation modes. The presence of the lens is shown to confine the radiation within the field of view and improve the gain of each radiation mode; hence, enhancing the accuracy of the DoA estimation. It is also shown, for the first time, that a lens loaded-cavity can be transformed into a lens-loaded dynamic aperture by introducing a mechanically controlled mode-mixing mechanism inside the cavity. This work also proposes a way of optimizing this lens-loaded dynamic aperture by exploiting the mode mixing mechanism governed by a machine learning-assisted evolutionary algorithm. The concept is verified by a series of extensive simulations of the dynamic aperture states obtained via the machine learning-assisted evolutionary optimization technique. The simulation results show a 25improvement in the conditioning for the DoA estimation using the proposed technique.",
        tags: ["Antenna", "Filter"],
        officialLink: "https://www.nature.com/articles/s41598-022-12011-z"
    },
    {
        id: 8,
        title: "Machine learning‐assisted direction‐of‐arrival accuracy enhancement technique using oversized lens‐loaded cavity",
        author: "Muhammad Ali, Babar Abbasi, Okan Yurduseven, Mobayode O. Akinsolu, Vincent F. Fusco, Bo Liu, Mohsen Khalily, Simon L. Cotton, and Muhammad Ali Imran",
        journal: " IET Microwaves, Antennas & Propagation",
        year: 2022,
        doi: "https://doi.org/10.1049/mia2.12257",
        image: "../assets/images/news/9.jpg",
        abstract: "This paper presents a framework for achieving machine learning (ML)‐assisted direction‐of‐arrival (DoA) accuracy enhancement using a millimetre‐wave (mmWave) dynamic aperture. The technique used for the enhanced DoA estimation accuracy leverages an over‐sized lens‐loaded cavity antenna connected to a single RF chain in the physical layer and a computational method in the computational layer of the framework. It is shown for the first time that by introducing a reconfigurable mode‐mixing mechanism inside the over‐sized lens‐loaded cavity hardware, a greater number of spatially orthogonal radiation modes can be achieved giving rise to many cavity states. If the best cavity state is determined and selected by means of design exploration using a contemporary ML‐assisted antenna optimisation method, the computational DoA estimation accuracy can be improved. The mode‐mixing mechanism in this work is a randomly oriented metallic scatterer located inside an over‐sized constant−ϵr lens‐loaded cavity, connected to a stepper motor that is electronically controlled by inputs from the computational layer of the presented framework. Measurement results in terms of near‐field radiation mode scans are included in this study to verify and validate that the proposed ML‐assisted framework enhances the DoA estimation accuracy. Moreover, this investigation simultaneously provides a simplification in the physical layer implementation of mmWave radio hardware, and DoA accuracy enhancement, which in turn lends itself favourably to the adoption of the proposed framework for channel sounding in mmWave communication systems.",
        tags: ["Antenna", "Filter"],
        officialLink: "https://digital-library.theiet.org/doi/10.1049/mia2.12257"
    },
    {
        id: 9,
        title: "Design and Optimization of a Slotted Monopole Antenna for Ultra-Wide Band Body Centric Imaging Applications",
        author: "Isah Musa Danjuma; Mobayode O. Akinsolu; Chan Hwang See; Raed A. Abd-Alhameed; Bo Liu",
        journal: " IEEE Journal of Electromagnetics, RF and Microwaves in Medicine and Biology",
        year: 2020,
        doi: "10.1109/JERM.2020.2984910",
        image: "../assets/images/news/10.jpg",
        abstract: "This paper presents a cost-efficient design, optimization and physical implementation of a compact slotted ultra-wideband (UWB) monopole antenna for body-centric imaging applications. The proposed antenna is initially modelled and designed with the aid of commercial software (CST-Microwave Studio). To ensure that the proposed design is meeting the required specifications with reduced design time, the parallel surrogate model-assisted hybrid differential evolution for antenna optimization (PSADEA) is proposed to optimize the design. Based on the best set of geometry parameters for the optimum antenna performance, the antenna prototype is realized on an FR-4 substrate and analyzed in terms of bandwidth, gain, efficiency, and radiation pattern with and without the tissue models. All measured results are found to be in good agreement with the simulated results. The antenna provides a good reflection coefficient (S11 <−10 dB) in the UWB frequency band from 3.1 GHz to 10.6 GHz and maintains its bandwidth UWB operation without detuning when placed in closed contact with the human body or breast mimicking tissues (phantoms).",
        tags: ["Antenna", "Analog IC"],
        officialLink: "https://ieeexplore.ieee.org/document/9056570"
    },
    {
        id: 10,
        title: "Gain Bandwidth Enhancement and Sidelobe Level Stabilization of mmWave Lens Antennas Using AI-Driven Optimization",
        author: "Rahabu Mwang'amba; Peng Mei; Mobayode O. Akinsolu; Bo Liu; Shuai Zhang",
        journal: " IEEE Antennas and Wireless Propagation Letters",
        year: 2024,
        doi: "10.1109/LAWP.2024.3382028",
        image: "../assets/images/news/11.jpg",
        abstract: "This letter explores the transformative potential of artificial intelligence (AI) techniques in optimizing the phase distributions of a lens antenna to significantly enhance the gain bandwidth and stabilize the sidelobe levels (SLLs) at the millimeter-wave band. Through an AI-driven antenna design method (self-adaptive Bayesian neural network surrogate-model-assisted differential evolution for antenna optimization (SB-SADEA), specifically), this work obtains a phase distribution that provides a wide gain bandwidth and stable SLLs from 24 to 33 GHz. A lens antenna with 20 × 20 unit cells is implemented based on the phase distribution. Results show a 1 dB bandwidth of 28.2%, and the SLLs have also been lowered compared to the reference design. The optimized lens antenna shows a stable gain with a range of 20.13 to 22.16 dB from 24 to 33 GHz, in comparison to the reference design that has a gain range of 16.70 to 26.43 dB over the same frequency spectrum. The measured results align well with the simulated results, verifying the effectiveness of the AI-driven antenna design optimization technique in enhancing the performance of a lens antenna.",
        tags: ["Antenna", "Filter"],
        officialLink: "https://ieeexplore.ieee.org/abstract/document/10479985"
    }
];

// Export data for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { researchPapers };
} 