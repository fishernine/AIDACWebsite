// Case Studies Data Management
const CASES_DATA = {
    cases: [
        {
                  id: 1,
                  title: "Stacked Body-Worn Broadband Antenna with Parasitic Element",
                  category: "Antenna Design",
                  subtitle: "Universidade de Aveiro, Portugal",
                  images: [
                    "../assets/images/gallery/case1_1.jpg",
                    "../assets/images/gallery/case1_2.jpg"
                  ],
              additionalImages: {
                image1: "../assets/images/gallery/case1_3.jpg",
                image2: "../assets/images/gallery/case1_4.jpg"
              },
                  technical: {
                    application: "Body-worn / free-space broadband antenna",
                    frequency: "Broadband, dual-mode",
                    variables: 27,
                    constraints: 17,
                    simulations: { count: 512, duration: "≈3 days" },
                    size: { w: 86.53, h: 86.53, t: 7.74, unit: "mm" },
                    aiMethod: "SADEA"
                  },
                  results: {
                    highlights: [
                      "Stable on-body S11 performance",
                      "Measured and simulated results in close agreement",
                      "Compact structure suitable for wearable integration"
                    ],
                    comparison: "Traditional parameter sweeps are impractical due to large design space",
                validation: "Prototype fabricated and tested on-body"
                  },
              references: [{ citation: "References as listed in PPT" }],
                  content: {
                    introduction: `
                      <p>
                    Wearable antennas often suffer from detuning and performance degradation 
                    when placed on the human body. This study addresses the challenge of 
                    achieving <strong>broadband and stable performance</strong> in both 
                    free-space and body-worn environments.
                      </p>
                    `,
                    methodology: `
                      <p>
                    The <strong>SADEA algorithm</strong> was applied with 
                    <strong>27 design variables</strong> and <strong>17 constraints</strong>. 
                    A total of <strong>512 simulations</strong> were conducted in about 3 days.
                      </p>
                    `,
                    findings: `
                      <p>
                    The optimized antenna included a stacked radiator, parasitic element, 
                    and defected ground plane. The prototype measured 
                    <strong>86.53 × 86.53 × 7.74 mm</strong>. Both free-space and on-body 
                    measurements confirmed robust wideband operation.
                      </p>
                    `,
                    conclusion: `
                      <p>
                    This case demonstrates that surrogate-assisted AI optimization can 
                    <em>accelerate wearable antenna design</em> and ensure robust performance.
                      </p>
                    `
                  },
                  tags: ["antenna", "ai", "body-worn", "broadband", "sadea"]
                },
              
                {
                  id: 2,
                  title: "Open Resonant Cavity Antenna for C-Band Applications",
                  category: "Antenna Design",
                  subtitle: "University of Calcutta, India",
                  images: [
                    "../assets/images/gallery/case2_1.jpg",
                    "../assets/images/gallery/case2_2.jpg"
                  ],
              additionalImages: {
                image1: "../assets/images/gallery/case2_3.jpg",
                image2: "../assets/images/gallery/case2_4.jpg"
              },
                  technical: {
                    application: "C-band resonant cavity antenna",
                frequency: "C-band, broadband",
                    variables: null,
                    constraints: null,
                    simulations: { count: 2771, duration: "≈3 weeks" },
                    size: { diameter_ground: 231.68, diameter_wall: 203.3, h: 40.63, unit: "mm" },
                    aiMethod: "SADEA"
                  },
                  results: {
                    highlights: [
                  "High gain with broad bandwidth",
                  "Suppressed sidelobes in compact profile",
                  "Measured and simulated results consistent"
                ],
                comparison: "Conventional optimizers fail with strong parameter coupling",
                validation: "Prototype fabricated and measured"
              },
              references: [{ citation: "2021 and 2024 references as listed in PPT" }],
                  content: {
                    introduction: `
                      <p>
                    Resonant cavity antennas are critical for <strong>high-gain broadband systems</strong>. 
                    Achieving wideband performance with sidelobe suppression in compact size is a challenge.
                      </p>
                    `,
                    methodology: `
                      <p>
                    <strong>SADEA optimization</strong> handled complex couplings, requiring 
                    <strong>2771 simulations</strong> over about 3 weeks.
                      </p>
                    `,
                    findings: `
                      <p>
                    The optimized design achieved broad bandwidth and high directivity. 
                    Prototype size: <strong>231.68 mm ground plane, 203.3 mm side wall, 40.63 mm height</strong>. 
                    Experimental results validated the simulations.
                      </p>
                    `,
                    conclusion: `
                      <p>
                    This case highlights SADEA’s strength in <em>cavity antenna design</em> 
                    where conventional methods fail.
                      </p>
                    `
                  },
                  tags: ["antenna", "ai", "c-band", "cavity", "sadea"]
                },
              
                {
                  id: 3,
                  title: "Compact Cross-Dipole GNSS Antenna",
                  category: "Antenna Design",
              subtitle: "GNSS Case Study",
                  images: [
                    "../assets/images/gallery/case3_1.jpg",
                    "../assets/images/gallery/case3_2.jpg"
                  ],
              additionalImages: {
                image1: "../assets/images/gallery/case3_3.jpg",
                image2: "../assets/images/gallery/case3_4.jpg"
              },
                  technical: {
                    application: "GNSS reception antenna",
                frequency: "GNSS bands",
                    variables: null,
                constraints: "Complex geometrical constraints",
                    simulations: { count: 143, duration: "≈7.2 hours" },
                    size: { w: 64, h: 64, t: 10.6, unit: "mm" },
                    aiMethod: "SADEA"
                  },
                  results: {
                    highlights: [
                  "Strict GNSS requirements satisfied",
                  "Outperformed patented award-winning design",
                  "Measured and simulated results consistent"
                ],
                comparison: "CST TRF and PSO failed; SADEA exceeded patent benchmark",
                validation: "Prototype fabricated and validated"
              },
              references: [{ citation: "GNSS references as listed in PPT" }],
                  content: {
                    introduction: `
                      <p>
                    GNSS antennas demand <strong>tight impedance and axial ratio requirements</strong> 
                    in compact geometries.
                      </p>
                    `,
                    methodology: `
                      <p>
                    <strong>SADEA optimization</strong> was applied under complex constraints. 
                    Only <strong>143 simulations</strong> (≈7.2 h) were required.
                      </p>
                    `,
                    findings: `
                      <p>
                    Final design: <strong>64 × 64 × 10.6 mm cross-dipole</strong>. 
                    Achieved superior performance, surpassing patented solutions.
                      </p>
                    `,
                    conclusion: `
                      <p>
                    Demonstrates how AI-driven optimization surpasses 
                    state-of-the-art GNSS antenna designs.
                      </p>
                    `
                  },
                  tags: ["antenna", "ai", "gnss", "compact", "sadea"]
            },
          
            {
              id: 4,
              title: "AI-Optimized Antenna Array for 5G Outdoor Base Station",
              category: "Antenna Design",
              subtitle: "University of Liverpool & University of Glasgow",
              images: [
                "../assets/images/gallery/case4_1.jpg",
                "../assets/images/gallery/case4_2.jpg"
              ],
              additionalImages: {
                image1: "../assets/images/gallery/case4_3.jpg",
                image2: "../assets/images/gallery/case4_4.jpg"
              },
              technical: {
                application: "5G outdoor base station array",
                frequency: "3.3–3.8 GHz, 4.8–5.0 GHz",
                variables: 23,
                constraints: 18,
                simulations: { count: 1087, duration: "≈7.5 days" },
                size: { w: 84.3, h: 84.3, t: 18.1, unit: "mm" },
                aiMethod: "SADEA"
              },
              results: {
                highlights: [
                  "Multi-band dual-polarized array achieved",
                  "Superior to conventional CST optimizer",
                  "Measured and simulated results matched"
                ],
                comparison: "CST optimizer required months but failed",
                validation: "Prototype fabricated and tested successfully"
              },
              references: [{ citation: "Reference as listed in PPT" }],
              content: {
                introduction: `
                  <p>
                    Base station antennas must satisfy <strong>multi-band, dual-polarization, 
                    and isolation requirements</strong>. Meeting all simultaneously is difficult.
                  </p>
                `,
                methodology: `
                  <p>
                    <strong>SADEA</strong> optimized <strong>23 variables</strong> and 
                    <strong>18 specifications</strong> in 1087 simulations (~7.5 days).
                  </p>
                `,
                findings: `
                  <p>
                    The optimized array measured <strong>84.3 × 84.3 × 18.1 mm</strong>. 
                    Achieved performance across required 5G bands with excellent agreement 
                    between simulation and measurement.
                  </p>
                `,
                conclusion: `
                  <p>
                    This case shows AI’s ability to deliver high-performance base station antennas 
                    far faster than conventional tools.
                  </p>
                `
              },
              tags: ["antenna", "ai", "5g", "base-station", "sadea"]
            },
          
            {
              id: 5,
              title: "SIW Endfire Antenna Array for mmWave 5G",
              category: "Antenna Design",
              subtitle: "Aalborg University, Denmark",
              images: [
                "../assets/images/gallery/case5_1.jpg",
                "../assets/images/gallery/case5_2.jpg"
              ],
              additionalImages: {
                image1: "../assets/images/gallery/case5_3.jpg",
                image2: "../assets/images/gallery/case5_4.jpg"
              },
              technical: {
                application: "mmWave SIW endfire antenna",
                frequency: "mmWave 5G band",
                variables: ">20",
                constraints: null,
                simulations: { count: 104, duration: "≈5 days (parallel)" },
                size: { w: 21.2, h: 37.8, t: 1.0, unit: "mm" },
                aiMethod: "SADEA"
              },
              results: {
                highlights: [
                  "Wide bandwidth and high Q achieved",
                  "Validated in 1-element and 4-element array",
                  "Superior to CST TRF/PSO"
                ],
                comparison: "Traditional methods failed; SADEA converged",
                validation: "Prototype fabricated and measured"
              },
              references: [{ citation: "Reference as listed in PPT" }],
              content: {
                introduction: `
                  <p>
                    SIW endfire antennas face challenges in achieving <strong>wideband and high Q</strong>. 
                    Complex variable interactions make conventional sweeps infeasible.
                  </p>
                `,
                methodology: `
                  <p>
                    <strong>SADEA</strong> explored >20 variables. Only <strong>104 simulations</strong> 
                    were required in parallel, completing in ~5 days.
                  </p>
                `,
                findings: `
                  <p>
                    Final design: <strong>21.2 × 37.8 × 1 mm</strong>. 
                    Single and 4-element arrays confirmed SADEA-predicted results.
                  </p>
                `,
                conclusion: `
                  <p>
                    Demonstrates AI optimization enabling mmWave SIW designs 
                    that conventional methods could not realize.
                  </p>
                `
              },
              tags: ["antenna", "ai", "mmwave", "siw", "sadea"]
            },
          
            {
              id: 6,
              title: "Low RCS Wideband Circularly Polarized Antenna Array",
              category: "Antenna Design",
              subtitle: "KU Leuven, Belgium",
              images: [
                "../assets/images/gallery/case6_1.jpg",
                "../assets/images/gallery/case6_2.jpg"
              ],
              additionalImages: {
                image1: "../assets/images/gallery/case6_3.jpg",
                image2: "../assets/images/gallery/case6_4.jpg"
              },
              technical: {
                application: "Wideband CP antenna with low RCS",
                frequency: "Broadband with 3 dB axial ratio",
                variables: null,
                constraints: null,
                simulations: { count: 315, duration: "≈1 day" },
                size: { w: 90, h: 90, t: 3.5, unit: "mm" },
                aiMethod: "SADEA"
              },
              results: {
                highlights: [
                  "Achieved wideband impedance and CP bandwidth",
                  "Low RCS across wideband",
                  "Measured and simulated results matched"
                ],
                comparison: "N/A",
                validation: "Prototype fabricated and measured"
              },
              references: [{ citation: "Reference as listed in PPT" }],
              content: {
                introduction: `
                  <p>
                    Combining <strong>wideband circular polarization</strong> with 
                    <strong>low radar cross-section</strong> is a challenging task.
                  </p>
                `,
                methodology: `
                  <p>
                    Using <strong>SADEA</strong>, 315 simulations (~1 day) optimized 
                    parameters under strong coupling conditions.
                  </p>
                `,
                findings: `
                  <p>
                    Final size: <strong>90 × 90 × 3.5 mm</strong>. 
                    Validated for wideband impedance, axial ratio, and RCS reduction.
                  </p>
                `,
                conclusion: `
                  <p>
                    This study shows SADEA’s ability to <em>simultaneously optimize 
                    multiple bandwidth-related objectives</em>.
                  </p>
                `
              },
              tags: ["antenna", "ai", "circular", "rcs", "sadea"]
            },
          
            {
              id: 7,
              title: "Sub-THz Phased Array Antenna",
              category: "Antenna Design",
              subtitle: "University of Glasgow, UK",
              images: [
                "../assets/images/gallery/case7_1.jpg",
                "../assets/images/gallery/case7_2.jpg"
              ],
              additionalImages: {
                image1: "../assets/images/gallery/case7_3.jpg",
                image2: "../assets/images/gallery/case7_4.jpg"
              },
              technical: {
                application: "Sub-THz phased array",
                frequency: "100.5–103 GHz, 107–109.5 GHz",
                variables: null,
                constraints: null,
                simulations: { count: 350, duration: "≈9.1 hours" },
                size: { w: 9.5, h: 10.5, t: 0.125, unit: "mm" },
                aiMethod: "SADEA"
              },
              results: {
                highlights: [
                  "Dual wideband achieved",
                  "Gain ≥ 9 dBi, efficiency ≥ 65%",
                  "Very low sidelobe levels"
                ],
                comparison: "N/A",
                validation: "Prototype fabricated and measured"
              },
              references: [{ citation: "Reference as listed in PPT" }],
              content: {
                introduction: `
                  <p>
                    Sub-THz phased arrays require <strong>large bandwidth, high gain, and 
                    low sidelobes</strong> while maintaining miniaturized form factors.
                  </p>
                `,
                methodology: `
                  <p>
                    <strong>SADEA optimization</strong> used 350 simulations over ~9 hours. 
                    Performance targets included dual wideband and low sidelobes.
                  </p>
                `,
                findings: `
                  <p>
                    Final prototype: <strong>9.5 × 10.5 × 0.125 mm</strong>. 
                    Measured results matched simulations for bandwidth, gain, and sidelobes.
                  </p>
                `,
                conclusion: `
                  <p>
                    Demonstrates SADEA’s effectiveness for <em>Sub-THz phased arrays</em> 
                    with stringent performance goals.
                  </p>
                `
              },
              tags: ["antenna", "ai", "sub-thz", "phased-array", "sadea"]
            },
          
            {
              id: 8,
              title: "Body-Worn mmWave Antenna for 5G",
              category: "Antenna Design",
              subtitle: "University of Glasgow, UK",
              images: [
                "../assets/images/gallery/case8_1.jpg",
                "../assets/images/gallery/case8_2.jpg"
              ],
              additionalImages: {
                image1: "../assets/images/gallery/case8_3.jpg",
                image2: "../assets/images/gallery/case8_4.jpg"
              },
              technical: {
                application: "Wearable mmWave antenna",
                frequency: "Four frequency bands",
                variables: 20,
                constraints: 12,
                simulations: { count: null, duration: "N/A" },
                size: null,
                aiMethod: "SADEA"
              },
              results: {
                highlights: [
                  "Topology evolved to support four bands",
                  "Compact, lightweight design",
                  "Prototype under fabrication"
                ],
                comparison: "N/A",
                validation: "Prototype fabrication ongoing"
              },
              references: [{ citation: "Reference as listed in PPT" }],
              content: {
                introduction: `
                  <p>
                    Wearable mmWave antennas for 5G need <strong>multi-band operation</strong> 
                    with lightweight and compact form.
                  </p>
                `,
                methodology: `
                  <p>
                    <strong>SADEA</strong> optimized 20 design variables with 12 constraints, 
                    evolving topology for slot and radiator placement.
                  </p>
                `,
                findings: `
                  <p>
                    The design supports <strong>four frequency bands</strong>. 
                    A prototype is being fabricated for measurement.
                  </p>
                `,
                conclusion: `
                  <p>
                    Shows SADEA’s capability to explore <em>large shape freedom</em> 
                    in wearable mmWave antenna design.
                  </p>
                `
              },
              tags: ["antenna", "ai", "5g", "wearable", "mmwave", "sadea"]
            },
          
            {
              id: 9,
              title: "Indoor Base Station Antenna for 2G–5G",
              category: "Antenna Design",
              subtitle: "University of Liverpool & University of Glasgow",
              images: [
                "../assets/images/gallery/case9_1.jpg",
                "../assets/images/gallery/case9_2.jpg"
              ],
              additionalImages: {
                image1: "../assets/images/gallery/case9_3.jpg",
                image2: "../assets/images/gallery/case9_4.jpg"
              },
              technical: {
                application: "Indoor base station antenna",
                frequency: "Covers 2G/3G/4G and 5G sub-6 GHz",
                variables: 45,
                constraints: 12,
                simulations: { count: 1012, duration: "≈10 days" },
                size: { w: 170.6, h: 200.0, t: 37.0, unit: "mm" },
                aiMethod: "SADEA"
              },
              results: {
                highlights: [
                  "Multi-band, dual-polarized indoor array",
                  "Measured and simulated results matched",
                  "Superior to CST optimizer"
                ],
                comparison: "CST required months but failed to meet specs",
                validation: "Prototype fabricated and tested"
              },
              references: [{ citation: "Reference as listed in PPT" }],
              content: {
                introduction: `
                  <p>
                    Indoor base station antennas must support <strong>multiple legacy and 5G bands</strong> 
                    with strict polarization and isolation requirements.
                  </p>
                `,
                methodology: `
                  <p>
                    <strong>SADEA</strong> handled <strong>45 variables</strong> with 
                    <strong>12 specifications</strong>, requiring ~10 days of optimization.
                  </p>
                `,
                findings: `
                  <p>
                    Prototype: <strong>170.6 × 200.0 × 37.0 mm</strong>. 
                    Performance validated across all targeted bands.
                  </p>
                `,
                conclusion: `
                  <p>
                    Demonstrates AI’s role in <em>multi-band indoor antenna design</em>.
                  </p>
                `
              },
              tags: ["antenna", "ai", "indoor", "base-station", "sadea"]
            },
          
            {
              id: 10,
              title: "Frequency Reconfigurable Antenna Array with Isolator",
              category: "Antenna Design",
              subtitle: "KU Leuven, Belgium",
              images: [
                "../assets/images/gallery/case10_1.jpg",
                "../assets/images/gallery/case10_2.jpg"
              ],
              additionalImages: {
                image1: "../assets/images/gallery/case10_3.jpg",
                image2: "../assets/images/gallery/case10_4.jpg"
              },
              technical: {
                application: "Frequency reconfigurable array",
                frequency: "ISM/WiMAX bands",
                variables: 24,
                constraints: 6,
                simulations: { count: 930, duration: "≈61.4 hours (parallel)" },
                size: { w: 76, h: 38, t: 4.04, unit: "mm" },
                aiMethod: "SADEA"
              },
              results: {
                highlights: [
                  "Achieved dual-band with isolation",
                  "Novel parasitic isolation structure discovered",
                  "Measured and simulated results matched"
                ],
                comparison: "Traditional designs lacked such reconfigurable isolation",
                validation: "Prototype fabricated and measured"
              },
              references: [{ citation: "Reference as listed in PPT" }],
              content: {
                introduction: `
                  <p>
                    Reconfigurable antennas require <strong>dual-band operation with 
                    strong isolation</strong>, which is challenging to design manually.
                  </p>
                `,
                methodology: `
                  <p>
                    <strong>SADEA</strong> optimized <strong>24 variables</strong> and 
                    <strong>6 specifications</strong> across 930 parallel simulations.
                  </p>
                `,
                findings: `
                  <p>
                    Prototype: <strong>76 × 38 × 4.04 mm</strong>. 
                    Validated dual-band operation with novel isolation mechanism.
                  </p>
                `,
                conclusion: `
                  <p>
                    Demonstrates SADEA’s power in <em>frequency reconfigurable antenna design</em>.
                  </p>
                `
              },
              tags: ["antenna", "ai", "reconfigurable", "isolation", "sadea"]
            },
          
            {
              id: 11,
              title: "Folded Dual-Polarized Bowtie Antenna",
              category: "Antenna Design",
              subtitle: "Universidad Carlos III de Madrid, Spain",
              images: [
                "../assets/images/gallery/case11_1.jpg",
                "../assets/images/gallery/case11_2.jpg"
              ],
              additionalImages: {
                image1: "../assets/images/gallery/case11_3.jpg",
                image2: "../assets/images/gallery/case11_4.jpg"
              },
              technical: {
                application: "Dual-polarized bowtie antenna",
                frequency: "Sub-6 GHz 5G",
                variables: null,
                constraints: "Complex topology with geometrical constraints",
                simulations: { count: 1092, duration: "≈14 days (parallel)" },
                size: { w: 32, h: 32, t: 33.8, unit: "mm" },
                aiMethod: "SADEA"
              },
              results: {
                highlights: [
                  "High isolation without balun",
                  "Compact size, dual polarization achieved",
                  "Measured and simulated results matched"
                ],
                comparison: "Traditional design methods limited in topology exploration",
                validation: "Prototype fabricated and tested"
              },
              references: [{ citation: "Reference as listed in PPT" }],
              content: {
                introduction: `
                  <p>
                    Dual-polarized bowtie antennas require compactness and high isolation, 
                    often achieved with complex topologies.
                  </p>
                `,
                methodology: `
                  <p>
                    <strong>SADEA</strong> optimized under complex topological constraints, 
                    requiring 1092 parallel simulations over 14 days.
                  </p>
                `,
                findings: `
                  <p>
                    Prototype size: <strong>32 × 32 × 33.8 mm</strong>. 
                    Achieved dual-polarized performance without a balun.
                  </p>
                `,
                conclusion: `
                  <p>
                    This case shows SADEA’s role in discovering <em>novel folded topologies</em> 
                    for compact, high-performance antennas.
                  </p>
                `
              },
              tags: ["antenna", "ai", "bowtie", "dual-polarized", "sadea"]
            },
          
            {
              id: 12,
              title: "Dynamic Lens-Loaded Open Antenna for mmWave DoA",
              category: "Antenna Design",
              subtitle: "Queen’s University Belfast, UK",
              images: [
                "../assets/images/gallery/case12_1.jpg",
                "../assets/images/gallery/case12_2.jpg"
              ],
              additionalImages: {
                image1: "../assets/images/gallery/case12_3.jpg",
                image2: "../assets/images/gallery/case12_4.jpg"
              },
              technical: {
                application: "mmWave direction-of-arrival sensing",
                frequency: "mmWave band",
                variables: null,
                constraints: null,
                simulations: { count: 33, duration: "≈34 hours" },
                size: null,
                aiMethod: "SADEA"
              },
              results: {
                highlights: [
                  "Discovered optimal rotation angle for mixed-mode scatterer",
                  "Enhanced DoA sensitivity",
                  "Measured validation successful"
                ],
                comparison: "Conventional design could not predict optimal lens angle",
                validation: "Prototype fabricated and measured"
              },
              references: [{ citation: "Reference as listed in PPT" }],
              content: {
                introduction: `
                  <p>
                    mmWave DoA systems benefit from <strong>lens-loaded antennas</strong>, 
                    but identifying optimal mechanical tuning is challenging.
                  </p>
                `,
                methodology: `
                  <p>
                    <strong>SADEA</strong> identified the optimal rotation angle 
                    of a lens scatterer in <strong>33 simulations</strong> (~34 h).
                  </p>
                `,
                findings: `
                  <p>
                    Prototype validated DoA sensitivity improvement 
                    at the predicted lens rotation.
                  </p>
                `,
                conclusion: `
                  <p>
                    Shows how SADEA can <em>discover unknown mechanical configurations</em> 
                    for advanced antenna systems.
                  </p>
                `
              },
              tags: ["antenna", "ai", "mmwave", "lens", "sadea"]
            },
          
            {
              id: 13,
              title: "Planar Monopole UWB Antenna for Imaging",
              category: "Antenna Design",
              subtitle: "University of Bradford, UK",
              images: [
                "../assets/images/gallery/case13_1.jpg",
                "../assets/images/gallery/case13_2.jpg"
              ],
              additionalImages: {
                image1: "../assets/images/gallery/case13_3.jpg",
                image2: "../assets/images/gallery/case13_4.jpg"
              },
              technical: {
                application: "UWB imaging antenna",
                frequency: "3.1–10.6 GHz",
                variables: null,
                constraints: null,
                simulations: { count: 1500, duration: "≈50 hours" },
                size: { w: 33.14, h: 14.90, t: 0.84, unit: "mm" },
                aiMethod: "SADEA"
              },
              results: {
                highlights: [
                  "Ultra-wideband achieved",
                  "Stable on-body and free-space performance",
                  "Compact size, half of SoTA designs"
                ],
                comparison: "Outperformed CST TRF/PSO and state-of-the-art",
                validation: "Prototype fabricated and tested"
              },
              references: [{ citation: "Reference as listed in PPT" }],
              content: {
                introduction: `
                  <p>
                    UWB antennas must provide <strong>stable wideband operation</strong> 
                    even under body-loading.
                  </p>
                `,
                methodology: `
                  <p>
                    <strong>SADEA optimization</strong> used 1500 simulations (~50 h) 
                    to evolve compact planar monopole structures.
                  </p>
                `,
                findings: `
                  <p>
                    Prototype: <strong>33.14 × 14.90 × 0.84 mm</strong>. 
                    Achieved wideband and stability, superior to SoTA.
                  </p>
                `,
                conclusion: `
                  <p>
                    Shows AI’s role in <em>miniaturized UWB antenna design</em>.
                  </p>
                `
              },
              tags: ["antenna", "ai", "uwb", "monopole", "sadea"]
            },
          
            {
              id: 14,
              title: "Millimeter-Wave Metasurface Lens Antenna",
              category: "Antenna Design",
              subtitle: "Institution not specified",
            images: [
                "../assets/images/gallery/case14_1.jpg",
                "../assets/images/gallery/case14_2.jpg"
              ],
              additionalImages: {
                image1: "../assets/images/gallery/case14_3.jpg",
                image2: "../assets/images/gallery/case14_4.jpg"
              },
              technical: {
                application: "Metasurface lens antenna",
                frequency: "Millimeter-wave band",
                variables: 101,
                constraints: 70,
                simulations: { count: 3880, duration: "≈4 weeks" },
                size: null,
                aiMethod: "SADEA"
              },
              results: {
                highlights: [
                  "High-dimensional design space explored",
                  "Superior to reference design",
                  "Measured and simulated results consistent"
                ],
                comparison: "Traditional optimizers and experts failed",
                validation: "Prototype fabricated and tested"
              },
              references: [{ citation: "Reference as listed in PPT" }],
              content: {
                introduction: `
                  <p>
                    Metasurface lens antennas require handling 
                    <strong>hundreds of parameters</strong> with multiple performance constraints.
                  </p>
                `,
                methodology: `
                  <p>
                    <strong>SADEA optimization</strong> managed 101 parameters 
                    and 70 specifications, requiring 3880 simulations (~4 weeks).
                  </p>
                `,
                findings: `
                  <p>
                    Resulting design outperformed reference. 
                    Prototype validated simulations.
                </p>
            `,
                conclusion: `
                  <p>
                    Highlights SADEA’s ability to <em>optimize extremely high-dimensional 
                    metasurface designs</em>.
                  </p>
                `
              },
              tags: ["antenna", "ai", "metasurface", "lens", "sadea"]
            },
          
            {
              id: 15,
              title: "K-Band Metasurface Antenna with Crescent Elements",
              category: "Antenna Design",
              subtitle: "Frederick University, Cyprus",
            images: [
                "../assets/images/gallery/case15_1.jpg",
                "../assets/images/gallery/case15_2.jpg"
              ],
              additionalImages: {
                image1: "../assets/images/gallery/case15_3.jpg",
                image2: "../assets/images/gallery/case15_4.jpg"
              },
              technical: {
                application: "K-band metasurface antenna",
                frequency: "K-band",
                variables: null,
                constraints: null,
                simulations: { count: null, duration: "N/A" },
                size: null,
                aiMethod: "SADEA"
              },
              results: {
                highlights: [
                  "Wideband polarization-selective operation",
                  "AI-driven design implemented in prototype"
                ],
                comparison: "N/A",
                validation: "Prototype fabricated"
              },
              references: [{ citation: "Reference as listed in PPT" }],
              content: {
                introduction: `
                  <p>
                    K-band antennas with <strong>polarization selectivity</strong> 
                    are critical for high-frequency communications.
                  </p>
                `,
                methodology: `
                  <p>
                    <strong>SADEA</strong> explored crescent-shaped unit cells. 
                    Specific simulation count not reported.
                  </p>
                `,
                findings: `
                  <p>
                    Final prototype validated AI-driven metasurface design concept.
                </p>
            `,
                conclusion: `
                  <p>
                    This study confirms the feasibility of 
                    <em>AI-optimized K-band metasurface antennas</em>.
                  </p>
                `
              },
              tags: ["antenna", "ai", "k-band", "metasurface", "sadea"]
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