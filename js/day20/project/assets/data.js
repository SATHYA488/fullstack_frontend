/**
 * Future Without IT vs Future With IT
 * Advanced Data Repository for College Presentation & Dynamic Simulation Engine
 */

const comparisonData = [
  {
    id: "education",
    name: "Education & Learning",
    icon: "fa-graduation-cap",
    tagline: "From physical chalkboards to AI-personalized immersive global classrooms",
    currentSituation: {
      title: "Hybrid Digital-Physical Learning (2026)",
      summary: "Modern classrooms blend printed textbooks with online LMS portals, tablets, and video conferencing. While digital access has expanded, unequal internet penetration and standardized curriculums persist.",
      metrics: [
        { label: "Global Digital Access", value: "68% of students" },
        { label: "Personalized Pacing", value: "Moderate" },
        { label: "Resource Availability", value: "Hybrid (Physical + Cloud)" }
      ]
    },
    futureWithIT: {
      title: "Adaptive AI & Immersive Holographic Academies",
      summary: "Every student has an omnipresent AI mentor adapting curriculums in real-time to their neuro-learning style. Spatial computing and VR transport students directly into virtual biology simulations, historical epochs, and planetary physics labs.",
      features: [
        "Hyper-personalized 1-on-1 generative AI tutoring for every child globally",
        "Immersive VR/AR historical reconstructions and zero-risk medical/engineering labs",
        "Universal decentralized micro-credentials replacing rigid degrees"
      ],
      efficiencyScore: "98% Efficiency & Universal Access",
      badge: "Hyper-Connected Future"
    },
    futureWithoutIT: {
      title: "Manual, Geographically Isolated Rote Classrooms",
      summary: "Education reverts entirely to localized paper textbooks prone to wear and obsolescence. Rural and impoverished regions face severe teacher shortages with zero access to global research or libraries.",
      limitations: [
        "Extreme knowledge scarcity confined to physical libraries and geographical boundaries",
        "Complete loss of remote learning, interactive simulations, and automated grading",
        "Massive illiteracy rates in underfunded regions due to physical distribution barriers"
      ],
      severity: "High Educational Regression",
      badge: "Knowledge Isolation"
    },
    impact: {
      title: "Comparative Socio-Economic Impact",
      summary: "With IT, the global talent pool expands universally regardless of birth location. Without IT, education becomes an exclusive privilege for those living near elite physical institutions, stalling global scientific advancement by decades.",
      keyContrast: "Knowledge democratization vs. Extreme intellectual inequality"
    },
    solution: {
      title: "Strategic Implementation & Policy Roadmap",
      summary: "Bridge the remaining digital divide through satellite broadband (e.g., LEO constellations), subsidized open-source hardware, and strict privacy protections on student biometric and learning data.",
      actionSteps: [
        "Deploy sovereign offline-first digital learning nodes in remote zones",
        "Standardize open educational resources (OER) on decentralized networks",
        "Implement cognitive screen-time balance and human-teacher mentorship integration"
      ]
    }
  },
  {
    id: "healthcare",
    name: "Healthcare & Medicine",
    icon: "fa-heart-pulse",
    tagline: "From delayed manual diagnosis to predictive genomic therapy and robotic surgery",
    currentSituation: {
      title: "Electronic Health Records & Assisted Diagnostics (2026)",
      summary: "Hospitals utilize digital imaging (CT, MRI), telemedicine, and electronic patient records. However, interoperability issues, physician burnout from paperwork, and rural specialist shortages remain.",
      metrics: [
        { label: "Diagnostic Accuracy", value: "84% standard rate" },
        { label: "Remote Consultation", value: "35% adoption" },
        { label: "Record Processing", value: "Semi-automated" }
      ]
    },
    futureWithIT: {
      title: "Predictive Nano-Medicine & Autonomous Robotic Surgery",
      summary: "AI analyzes real-time biomarker streams from wearable sensors to diagnose illnesses months before symptoms manifest. Ultra-low-latency 6G enables robotic surgeons to perform micro-procedures across continents.",
      features: [
        "Continuous biomarker monitoring & preemptive disease detection via nanobots",
        "Instant mRNA vaccine and drug synthesis tailored to individual genomes",
        "Zero-latency telesurgery connecting top specialists to remote field clinics"
      ],
      efficiencyScore: "99.4% Diagnostic Precision",
      badge: "Life-Saving Innovation"
    },
    futureWithoutIT: {
      title: "Paper Ledgers, Delayed Diagnostics & High Mortality",
      summary: "Hospitals depend on physical filing cabinets. Lab test results take weeks to process via mail, emergency dispatchers operate blindly without GPS, and complex surgeries lack digital imaging or monitoring.",
      limitations: [
        "Catastrophic loss of electronic medical records during disasters",
        "Zero remote consultations; curable diseases become fatal due to lack of specialists",
        "Manual organ donor matching taking days instead of critical minutes"
      ],
      severity: "Critical Public Health Crisis",
      badge: "Medical Paralysis"
    },
    impact: {
      title: "Comparative Health Outcome Impact",
      summary: "With IT, global average life expectancy approaches 90+ years with eradicated genetic disorders. Without IT, preventable epidemics spread undetected, infant mortality climbs, and emergency response times triple.",
      keyContrast: "Preemptive real-time wellness vs. Reactive crisis management"
    },
    solution: {
      title: "Strategic Implementation & Policy Roadmap",
      summary: "Implement zero-trust encrypted medical clouds, ethical AI diagnostic auditing, and fail-safe local offline generators for hospital life-support systems.",
      actionSteps: [
        "Enforce strict HIPAA / GDPR genomic privacy regulations",
        "Build resilient edge computing in healthcare clinics resistant to network outages",
        "Invest heavily in biomedical informatics education for upcoming healthcare workers"
      ]
    }
  },
  {
    id: "banking",
    name: "Banking & Finance",
    icon: "fa-building-columns",
    tagline: "From physical coin ledgers to frictionless global decentralized economies",
    currentSituation: {
      title: "Digital Banking, Mobile UPI & Emerging DeFi (2026)",
      summary: "Cashless payments dominate urban hubs with instant transfers, mobile wallets, and credit scoring algorithms. Traditional legacy clearing systems still cause friction in cross-border settlements.",
      metrics: [
        { label: "Digital Transactions", value: "72% of global volume" },
        { label: "Cross-Border Settlement", value: "1 - 3 Days" },
        { label: "Fraud Detection", value: "Rule-based AI" }
      ]
    },
    futureWithIT: {
      title: "Instant Quantum-Secured Autonomous Finance",
      summary: "Smart contracts automate international trade finance instantaneously with zero intermediaries. Programmable Central Bank Digital Currencies (CBDCs) and decentralized finance provide 100% financial inclusion.",
      features: [
        "Sub-second quantum-encrypted global cross-border remittances with near-zero fees",
        "Automated micro-insurance and algorithmic credit for unbanked populations",
        "Real-time fraud prevention using multi-dimensional neural transaction graphs"
      ],
      efficiencyScore: "99.99% Transaction Velocity",
      badge: "Frictionless Economy"
    },
    futureWithoutIT: {
      title: "Cash-Only, Slow Physical Paper Ledgers & Economic Stagnation",
      summary: "Commerce reverts to physical paper banknotes, metallic coins, and heavy hand-written ledgers. Interstate trade requires armored trucks and weeks of physical clearance, throttling economic growth.",
      limitations: [
        "Total shutdown of e-commerce, digital payrolls, ATMs, and credit cards",
        "Extreme risk of currency counterfeiting and rampant physical bank robberies",
        "Severe liquidity crunches and hyper-inflation caused by distribution bottlenecks"
      ],
      severity: "Severe Global Financial Paralysis",
      badge: "Commercial Stagnation"
    },
    impact: {
      title: "Comparative Economic Velocity Impact",
      summary: "With IT, micro-entrepreneurs in emerging nations access global capital in seconds. Without IT, businesses are restricted to local cash buyers, destroying global trade velocity and shrinking global GDP by over 70%.",
      keyContrast: "Instant global liquidity vs. Localized barter/cash restrictions"
    },
    solution: {
      title: "Strategic Implementation & Policy Roadmap",
      summary: "Deploy resilient fault-tolerant distributed ledgers, establish algorithmic capital controls against flash crashes, and ensure physical cash redundancy for extreme grid events.",
      actionSteps: [
        "Mandate multi-cloud disaster recovery architectures for all financial clearing houses",
        "Provide universal zero-fee digital savings wallets to prevent economic exclusion",
        "Implement post-quantum cryptographic standards across all banking networks"
      ]
    }
  },
  {
    id: "transportation",
    name: "Transportation & Mobility",
    icon: "fa-plane-departure",
    tagline: "From gridlocked highways to autonomous, coordinated smart multi-modal transit",
    currentSituation: {
      title: "GPS Navigation & Semi-Autonomous Vehicles (2026)",
      summary: "Drivers rely on real-time traffic maps, ride-hailing apps, and Level 2 driver-assist features. Flight control and maritime shipping use satellite tracking, but urban congestion remains rampant.",
      metrics: [
        { label: "Traffic Congestion Delay", value: "38 hrs/commuter/year" },
        { label: "Fleet Automation", value: "12% autonomous assist" },
        { label: "Route Optimization", value: "Cloud-based GPS" }
      ]
    },
    futureWithIT: {
      title: "Autonomous Swarm Transit & Urban eVTOL Air Corridors",
      summary: "Zero-emission self-driving electric pods, magnetic levitation trains, and autonomous eVTOL air taxis communicate via V2X (Vehicle-to-Everything) networks, completely eliminating human-error traffic accidents.",
      features: [
        "V2X synchronized traffic grids reducing intersection wait times to zero",
        "Autonomous freight corridors and drone delivery for zero-emission logistics",
        "Predictive maintenance preventing mechanical failures before departure"
      ],
      efficiencyScore: "96% Reduced Transit Times & Zero Accidents",
      badge: "Seamless Smart Mobility"
    },
    futureWithoutIT: {
      title: "Manual Rail Switches, Traffic Gridlock & High Collision Rates",
      summary: "Roads depend on mechanical timers or manual traffic police. Aviation reverts to ground signal fires and Morse radio, causing frequent airspace collisions and crippling maritime supply chain logistics.",
      limitations: [
        "No GPS or radar; aviation and ocean freight operate with dangerous navigation margins",
        "Massive fatal collisions due to human fatigue, blind spots, and lack of warnings",
        "Supply chain collapse: perishable goods spoil in uncoordinated rail yards"
      ],
      severity: "High Safety & Logistical Collapse",
      badge: "Logistical Gridlock"
    },
    impact: {
      title: "Comparative Safety & Mobility Impact",
      summary: "With IT, 1.3 million annual traffic fatalities worldwide are virtually eradicated. Without IT, travel times quintuple, travel risks soar, and international commerce slows to 19th-century speeds.",
      keyContrast: "Zero-fatality synchronized mobility vs. High-risk chaotic transit"
    },
    solution: {
      title: "Strategic Implementation & Policy Roadmap",
      summary: "Develop open standard V2X communication protocols, secure satellite-independent inertial positioning backups, and design fail-safe human-override transit controls.",
      actionSteps: [
        "Invest in hardened smart-road sensors with localized edge fail-safes",
        "Implement rigorous cybersecurity certifications for connected vehicle fleets",
        "Design mass-transit multi-modal urban hubs to reduce single-occupancy transit"
      ]
    }
  },
  {
    id: "communication",
    name: "Communication & Media",
    icon: "fa-tower-broadcast",
    tagline: "From weeks-long postal letters to instantaneous holographic telepresence",
    currentSituation: {
      title: "Global Fiber Optics, 5G & Social Networks (2026)",
      summary: "Billions connect instantly through messaging apps, 4K video calling, and social platforms. Challenges include misinformation spread, digital echo chambers, and centralized platform monopolies.",
      metrics: [
        { label: "Message Delivery Speed", value: "Milliseconds" },
        { label: "Global Connected Pop.", value: "66% of humanity" },
        { label: "Media Format", value: "2D Streaming / Video" }
      ]
    },
    futureWithIT: {
      title: "Holographic Telepresence & Neural Language Translation",
      summary: "People collaborate in high-fidelity 3D spatial environments. Direct real-time bidirectional audio/visual neural translation dissolves all language barriers between different cultures across Earth.",
      features: [
        "Instant universal speech-to-speech translation across 5,000+ dialects",
        "Photorealistic 3D holographic projection for personal and work interactions",
        "Decentralized censorship-resistant communication protocols ensuring freedom of speech"
      ],
      efficiencyScore: "100% Real-Time Cross-Lingual Sync",
      badge: "Universal Connection"
    },
    futureWithoutIT: {
      title: "Paper Letters, Telegraphs & Complete Global Blindness",
      summary: "Intercontinental news takes weeks to travel by physical ship. Families separated by distance must wait months for letters. Rapid coordinated global crisis response becomes impossible.",
      limitations: [
        "Zero instant emergency warning systems for tsunamis, earthquakes, or conflicts",
        "Loss of international scientific collaboration and cultural exchange",
        "Extreme cultural and regional xenophobia bred from lack of global dialogue"
      ],
      severity: "Total Societal Disconnection",
      badge: "Information Blackout"
    },
    impact: {
      title: "Comparative Human Connectivity Impact",
      summary: "With IT, the collective intelligence of humanity is synchronized instantly. Without IT, communities live in isolated bubbles, unaware of global events until weeks or months later.",
      keyContrast: "Unified planetary dialogue vs. Isolated regional echo chambers"
    },
    solution: {
      title: "Strategic Implementation & Policy Roadmap",
      summary: "Combat digital disinformation through cryptographic content provenance (C2PA), promote open-source peer-to-peer messaging meshes, and protect privacy with end-to-end encryption.",
      actionSteps: [
        "Deploy decentralized identity protocols to prevent deepfake fraud",
        "Establish community-owned mesh networks resilient to ISP blackouts",
        "Incorporate media literacy programs into school curriculums globally"
      ]
    }
  },
  {
    id: "agriculture",
    name: "Agriculture & Food Security",
    icon: "fa-wheat-awn",
    tagline: "From weather-dependent subsistence to AI-precision vertical farming",
    currentSituation: {
      title: "Precision Farming & Satellite Soil Monitoring (2026)",
      summary: "Modern farms use weather satellite data, automated drip irrigation, and drone crop spraying. However, climate volatility, soil depletion, and supply chain spoilage still threaten food security.",
      metrics: [
        { label: "Crop Yield Optimization", value: "65% efficiency" },
        { label: "Water Waste Reduction", value: "30% saved" },
        { label: "Supply Chain Visibility", value: "Moderate" }
      ]
    },
    futureWithIT: {
      title: "Autonomous Precision Hydroponics & AI Climate Resilience",
      summary: "Smart vertical farms in urban skyscrapers produce 10x higher crop yields using 95% less water. AI drones and robotic harvesters monitor every single plant's nutrient levels 24/7.",
      features: [
        "Hyper-local AI weather forecasting preventing crop devastation from droughts/frost",
        "Closed-loop autonomous vertical farms feeding mega-cities locally",
        "Blockchain seed-to-table traceability ensuring zero contamination outbreaks"
      ],
      efficiencyScore: "95% Resource Reduction & 300% Yield",
      badge: "Zero-Hunger Future"
    },
    futureWithoutIT: {
      title: "Manual Tilling, Unpredictable Famines & Massive Food Spoilage",
      summary: "Farmers are blind to upcoming weather catastrophes. Crop diseases destroy entire harvests without automated sensor alerts. Lack of refrigerated logistics causes over 50% of food to rot before reaching cities.",
      limitations: [
        "Widespread regional famines caused by undetected pests and unpredictable weather",
        "Excessive chemical pesticide overuse due to lack of targeted precision spraying",
        "Severe urban food shortages due to slow uncoordinated transport"
      ],
      severity: "Catastrophic Global Food Insecurity",
      badge: "Agricultural Crisis"
    },
    impact: {
      title: "Comparative Food Security Impact",
      summary: "With IT, 10 billion humans can be fed sustainably with minimal ecological footprint. Without IT, agricultural output plunges, triggering global food riots and mass starvation.",
      keyContrast: "Sustainable abundance vs. Vulnerability to climate-induced famine"
    },
    solution: {
      title: "Strategic Implementation & Policy Roadmap",
      summary: "Deploy affordable IoT soil sensors to smallholder farmers, open-source agricultural AI weather models, and build solar-powered smart cold-storage chains.",
      actionSteps: [
        "Subsidize IoT moisture and nitrogen sensors for developing world farmers",
        "Establish regional AI agronomy advice hotlines via basic mobile networks",
        "Implement regenerative farming practices guided by satellite soil mapping"
      ]
    }
  },
  {
    id: "business",
    name: "Business & Commerce",
    icon: "fa-briefcase",
    tagline: "From local manual storefronts to dynamic 24/7 global digital ecosystems",
    currentSituation: {
      title: "E-Commerce, Cloud ERP & Omnichannel Retail (2026)",
      summary: "Businesses operate globally via cloud platforms (AWS/Azure), CRM systems, and e-commerce platforms (Amazon, Shopify). Legacy enterprise silos and supply chain opacity still present friction.",
      metrics: [
        { label: "E-Commerce Market Share", value: "22% of total retail" },
        { label: "Inventory Accuracy", value: "85% automated" },
        { label: "Customer Reach", value: "Global (Digital)" }
      ]
    },
    futureWithIT: {
      title: "Autonomous Supply Networks & Generative Hyper-Personalization",
      summary: "AI agents negotiate contracts, manage dynamic inventory, and design bespoke custom products on-demand. Digital twins simulate market conditions, eliminating supply-demand mismatches.",
      features: [
        "Self-optimizing autonomous supply chains with zero excess warehouse waste",
        "Generative micro-products created on-demand via distributed 3D micro-factories",
        "AI customer concierges providing instant 24/7 personalized resolution"
      ],
      efficiencyScore: "99% Operational Accuracy",
      badge: "Hyper-Agile Enterprise"
    },
    futureWithoutIT: {
      title: "Paper Invoices, Tiny Local Markets & Frequent Stockouts",
      summary: "Retail is strictly limited to walk-in physical stores with cash transactions. Ordering wholesale supplies requires telegrams or physical travel, leading to frequent inventory outages and high prices.",
      limitations: [
        "Zero e-commerce; consumers limited to whatever items are physically on local shelves",
        "Massive paperwork overhead: payroll, taxes, and accounting done on paper ledgers",
        "Extreme operational cost leading to small business bankruptcy"
      ],
      severity: "Severe Commercial Contraction",
      badge: "Economic Isolation"
    },
    impact: {
      title: "Comparative Commercial Prosperity Impact",
      summary: "With IT, a solopreneur in a village can sell digital services to multinational corporations. Without IT, businesses remain trapped within walking distance of their storefront.",
      keyContrast: "Universal frictionless trade vs. Highly restricted local barter"
    },
    solution: {
      title: "Strategic Implementation & Policy Roadmap",
      summary: "Prevent platform monopolies through interoperability laws, encourage open digital commerce protocols, and safeguard consumer data privacy.",
      actionSteps: [
        "Support open e-commerce standards (e.g., ONDC) to level the playing field",
        "Provide digital transformation grants to traditional brick-and-mortar SMBs",
        "Enforce robust algorithmic transparency for online pricing engines"
      ]
    }
  },
  {
    id: "government",
    name: "Government & Public Services",
    icon: "fa-landmark-flag",
    tagline: "From endless bureaucratic paperwork queues to transparent automated e-governance",
    currentSituation: {
      title: "E-Governance Portals & Digital Identity Systems (2026)",
      summary: "Citizens file taxes, renew passports, and access public records online in many countries. However, bureaucratic silos, legacy mainframes, and digital identity fraud remain hurdles.",
      metrics: [
        { label: "E-Gov Service Adoption", value: "58% average" },
        { label: "Passport/ID Processing", value: "2 - 14 Days" },
        { label: "Public Data Transparency", value: "Moderate" }
      ]
    },
    futureWithIT: {
      title: "Zero-Bureaucracy Smart Cities & Transparent Civic Blockchains",
      summary: "Government services operate proactively in real-time. Benefits, permits, and tax refunds are distributed automatically via smart contracts. Civic voting occurs securely through encrypted digital IDs.",
      features: [
        "Autonomous city operations (smart grids, water leaks, traffic lights auto-balanced)",
        "Immutable public blockchain ledgers eliminating government corruption and bribery",
        "Direct digital democracy allowing transparent real-time citizen referendums"
      ],
      efficiencyScore: "99.8% Transparency & Instant Service",
      badge: "Frictionless Governance"
    },
    futureWithoutIT: {
      title: "Endless Paper Queues, Lost Records & Rampant Corruption",
      summary: "Citizens must stand in physical queues for days to obtain basic birth certificates or licenses. Government records are easily forged, lost in warehouse fires, or altered by corrupt officials.",
      limitations: [
        "Paralyzed disaster relief coordination due to lack of real-time situational data",
        "Rampant corruption and lost tax revenue hidden in untraceable paper ledgers",
        "Months-long delays for vital civil documentation and judicial proceedings"
      ],
      severity: "Severe Administrative Failure",
      badge: "Bureaucratic Paralysis"
    },
    impact: {
      title: "Comparative Civic Trust & Efficiency Impact",
      summary: "With IT, governance is transparent, citizen-centric, and instantaneous. Without IT, public services become opaque, agonizingly slow, and vulnerable to systemic corruption.",
      keyContrast: "Transparent algorithmic governance vs. Opaque bureaucratic red tape"
    },
    solution: {
      title: "Strategic Implementation & Policy Roadmap",
      summary: "Build sovereign open-source digital public infrastructure (DPI), enforce multi-stakeholder algorithmic audits, and guarantee anonymous secure voting channels.",
      actionSteps: [
        "Adopt verifiable digital identity standards (e.g., W3C Verifiable Credentials)",
        "Institute public algorithmic oversight boards to prevent civic AI bias",
        "Deploy redundant offline-capable municipal disaster communication units"
      ]
    }
  }
];

const futureWithITCards = [
  {
    id: "ai-ml",
    title: "Artificial Intelligence & Generative ML",
    icon: "fa-brain",
    color: "#00f2fe",
    summary: "Self-evolving neural networks that co-create software, accelerate drug discovery, and optimize complex planetary systems in real time.",
    keyFeatures: [
      "Autonomous scientific discovery (materials, protein folding, clean fusion)",
      "Universal generative assistants boosting human creative productivity 10x",
      "Explainable AI frameworks ensuring transparent ethical decision-making"
    ],
    metric: "+85% Faster Scientific Discovery",
    badge: "Cognitive Revolution"
  },
  {
    id: "robotics",
    title: "Advanced Automation & Robotics",
    icon: "fa-robot",
    color: "#4facfe",
    summary: "Humanoid and specialized robots taking over hazardous manual labor, deep-sea exploration, disaster recovery, and precision manufacturing.",
    keyFeatures: [
      "Zero-fatality industrial and construction sites operated by autonomous bots",
      "Robotic disaster rescue units navigating radiation, fire, and rubble",
      "Soft robotics for eldercare and personalized physical therapy assistance"
    ],
    metric: "Zero Fatalities in Hazardous Work",
    badge: "Physical Automation"
  },
  {
    id: "smart-cities",
    title: "Smart Cities & Urban IoT Grids",
    icon: "fa-city",
    color: "#10b981",
    summary: "Hyper-connected urban centers where energy, clean water, waste disposal, and emergency services dynamically self-balance using millions of IoT sensors.",
    keyFeatures: [
      "Predictive micro-grids maximizing renewable solar and wind distribution",
      "Zero-waste AI circular recycling sorting materials at microscopic accuracy",
      "Smart dynamic lighting and acoustic emergency detection networks"
    ],
    metric: "45% Lower Urban Carbon Footprint",
    badge: "Sustainable Habitats"
  },
  {
    id: "health-tech",
    title: "Next-Gen Healthcare & Biotech",
    icon: "fa-dna",
    color: "#06b6d4",
    summary: "Convergence of CRISPR gene editing, continuous bio-telemetry, and AI pathology models delivering personalized preventative medicine.",
    keyFeatures: [
      "Real-time early cancer detection from single-drop blood liquid biopsies",
      "Digital twins of human organs testing medication responses before ingestion",
      "Global pandemic early-warning sensor arrays in public water systems"
    ],
    metric: "90+ Yrs Average Life Expectancy",
    badge: "Precision Biotech"
  },
  {
    id: "immersive-edu",
    title: "Immersive & Adaptive Education",
    icon: "fa-vr-cardboard",
    color: "#8b5cf6",
    summary: "Spatial computing classrooms and personalized AI mentors democratizing world-class education for every child on Earth at zero marginal cost.",
    keyFeatures: [
      "Interactive VR journeys inside quantum atoms, human cells, and galaxy clusters",
      "Gamified mastery-based learning eliminating exam stress and rote memorization",
      "Instant multi-lingual translation enabling worldwide cross-cultural student projects"
    ],
    metric: "Universal Global Literacy",
    badge: "Lifelong Learning"
  },
  {
    id: "auto-transit",
    title: "Autonomous Mobility & Sky Transit",
    icon: "fa-car-side",
    color: "#3b82f6",
    summary: "Coordinated swarms of electric autonomous vehicles, high-speed Hyperloops, and electric vertical takeoff (eVTOL) commuter aircraft.",
    keyFeatures: [
      "Intersection-free smart traffic eliminating highway traffic jams completely",
      "Autonomous zero-emission cargo ships traversing global maritime green corridors",
      "On-demand suburban air taxis shortening 2-hour commutes to 12 minutes"
    ],
    metric: "99.9% Fewer Traffic Accidents",
    badge: "Frictionless Mobility"
  },
  {
    id: "fintech-defi",
    title: "Quantum Fintech & Borderless Economy",
    icon: "fa-shield-halved",
    color: "#14b8a6",
    summary: "Cryptographically verified, friction-free decentralized finance replacing opaque banking middlemen with instant peer-to-peer economic empowerment.",
    keyFeatures: [
      "Universal micro-lending directly funding entrepreneurs in developing regions",
      "Zero cross-border remittance fees allowing immigrant workers to support families",
      "AI-driven automated corporate governance and fraud immunity"
    ],
    metric: "< 1 Sec Global Clearing Time",
    badge: "Inclusive Finance"
  },
  {
    id: "quantum-comm",
    title: "6G & Quantum Communication",
    icon: "fa-satellite-dish",
    color: "#ec4899",
    summary: "Terabit wireless connectivity and unhackable quantum key distribution creating a resilient, instantaneous global nervous system.",
    keyFeatures: [
      "Unhackable quantum encryption protecting critical energy and civic infrastructure",
      "Sub-millisecond latency enabling tactile internet and remote surgery anywhere",
      "Direct satellite-to-phone broadband covering 100% of the Earth's surface"
    ],
    metric: "1000x Faster Than 5G",
    badge: "Planetary Network"
  },
  {
    id: "smart-workplaces",
    title: "Smart Workplaces & Cloud Synthesis",
    icon: "fa-laptop-code",
    color: "#f97316",
    summary: "Asynchronous, AI-augmented collaborative digital workspaces where global teams assemble in virtual holographic studios with zero geographical friction.",
    keyFeatures: [
      "AI co-pilots summarizing meetings, writing drafts, and generating prototype code",
      "True work-from-anywhere freedom boosting mental health and family balance",
      "Decentralized talent matching based purely on proven skill rather than geography"
    ],
    metric: "300% Higher Collaborative Output",
    badge: "Future of Work"
  }
];

const futureWithoutITCards = [
  {
    id: "no-edu",
    title: "Education & Knowledge Scarcity",
    icon: "fa-book-skull",
    color: "#ef4444",
    summary: "Reversion to fragile physical paper books, extreme teacher shortages, and absolute isolation from worldwide scientific discoveries.",
    difficulties: [
      "No online research, scientific search engines, or digital courseware",
      "Students in remote or poor villages have zero access to advanced curriculum",
      "Textbooks become outdated for decades due to physical printing and shipping costs"
    ],
    severity: "Severe Educational Stagnation",
    riskTag: "High Illiteracy Risk"
  },
  {
    id: "no-health",
    title: "Healthcare & Epidemic Blindness",
    icon: "fa-hospital-user",
    color: "#dc2626",
    summary: "Manual paper charts, lost patient histories, inability to track epidemic outbreaks, and non-existent remote specialized surgical care.",
    difficulties: [
      "Physicians cannot access patient medical history during emergency ER visits",
      "Epidemics spread unchecked across borders with zero digital tracking or alerts",
      "Drug research takes 25+ years per discovery without computer simulation models"
    ],
    severity: "Catastrophic Mortality Spike",
    riskTag: "Health System Collapse"
  },
  {
    id: "no-bank",
    title: "Banking & Financial Freezes",
    icon: "fa-money-bill-wave",
    color: "#f59e0b",
    summary: "Destruction of electronic payments, credit cards, and online payrolls. Economy shrinks to local cash transactions and risky physical vaults.",
    difficulties: [
      "Armored vehicle transport required for all business payments; rampant highway robbery",
      "No automated ATMs or mobile transfers; massive multi-day bank queues for cash",
      "International trade stalls because letters of credit take months to physically ship"
    ],
    severity: "Global Economic Depression",
    riskTag: "Liquidity Freezes"
  },
  {
    id: "no-comm",
    title: "Communication & Media Blackouts",
    icon: "fa-envelope-open-text",
    color: "#ea580c",
    summary: "Communication shrinks to paper mail and physical telegraphs. Families separated by miles lose contact, and natural disasters strike without warning.",
    difficulties: [
      "Emergency tsunami, earthquake, and storm warnings fail to reach populations in time",
      "International collaboration between scientists, doctors, and engineers ceases",
      "Severe cultural fragmentation and misinformation spread through unverified rumor"
    ],
    severity: "Total Intercontinental Isolation",
    riskTag: "Information Blackout"
  },
  {
    id: "no-transit",
    title: "Transportation & Air Logistics Chaos",
    icon: "fa-triangle-exclamation",
    color: "#b91c1c",
    summary: "Aviation grounded without radar/computers; railway systems suffer frequent collisions; urban centers permanently gridlocked with manual signals.",
    difficulties: [
      "Commercial air travel collapses due to inability to manage crowded airspace manually",
      "Supply chain distribution centers take weeks to manually track pallet locations",
      "Traffic fatalities spike exponentially due to human error and blind intersections"
    ],
    severity: "Dangerous Logistics Failure",
    riskTag: "Transit Breakdown"
  },
  {
    id: "no-biz",
    title: "Commerce & Supply Chain Decay",
    icon: "fa-store-slash",
    color: "#991b1b",
    summary: "E-commerce vanishes. Modern inventory systems, barcode tracking, and just-in-time manufacturing collapse, causing widespread retail stockouts.",
    difficulties: [
      "No online shopping; consumers wait in long lines for basic household necessities",
      "Massive factory waste due to inaccurate paper forecasting and stock mismanagement",
      "Small businesses unable to reach customers beyond their immediate village"
    ],
    severity: "Severe Retail Contraction",
    riskTag: "Supply Chain Paralysis"
  },
  {
    id: "no-labor",
    title: "Labor Exhaustion & Brain Drain",
    icon: "fa-person-digging",
    color: "#7f1d1d",
    summary: "The entire knowledge economy vanishes. Billions of workers are forced into physically exhausting clerical, manual ledger, and repetitive physical labor.",
    difficulties: [
      "Workers spend 80% of their workday hand-copying documents and calculating ledgers",
      "Software, data, design, and digital service career sectors completely disappear",
      "Severe drop in workplace safety and rise in physical occupational injuries"
    ],
    severity: "Loss of High-Skilled Economy",
    riskTag: "Massive Brain Drain"
  },
  {
    id: "no-gov",
    title: "Government Paralysis & Red Tape",
    icon: "fa-landmark-dome",
    color: "#450a0a",
    summary: "Public services grind to a halt under mountains of physical paper files, fostering widespread corruption, tax evasion, and administrative paralysis.",
    difficulties: [
      "Citizens wait months or years for basic birth certificates, titles, and passports",
      "Tax revenues are lost or embezzled due to untraceable paper books and cash receipts",
      "Law enforcement cannot cross-reference criminal fingerprints or warrants across cities"
    ],
    severity: "Administrative Breakdown",
    riskTag: "Rampant Corruption"
  }
];

const problemImpactSolutions = [
  {
    id: "job-displacement",
    title: "Job Displacement & Automation Anxiety",
    category: "Economy & Labor",
    icon: "fa-user-gear",
    problem: "Rapid advancements in generative AI and robotics threaten to displace routine cognitive and manual jobs (e.g., customer service, data entry, basic coding, truck driving) faster than workers can adapt.",
    impact: "Short-term structural unemployment, wage depression in vulnerable sectors, social unrest, and heightened anxiety among entry-level graduates and mid-career workers.",
    solution: "Universal government-backed lifelong reskilling subsidies, transitioning workers to high-empathy, strategic, and human-in-the-loop oversight roles, supported by automation dividend tax models."
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity Threats & Infrastructure Vulnerability",
    category: "Security & Sovereignty",
    icon: "fa-shield-virus",
    problem: "As power grids, hospitals, water treatment plants, and financial systems connect to the cloud, cyber warfare, ransomware syndicates, and state-sponsored hackers pose existential threats.",
    impact: "Potential catastrophic power blackouts, hijacked hospital telemetry, theft of critical intellectual property, and hundreds of billions of dollars in annual economic losses.",
    solution: "Mandatory Zero-Trust architectural frameworks, post-quantum cryptographic encryption, autonomous AI threat-hunting agents, and air-gapped physical fail-safes on critical civic assets."
  },
  {
    id: "privacy-surveillance",
    title: "Privacy Erosion & Pervasive Surveillance",
    category: "Human Rights & Ethics",
    icon: "fa-eye",
    problem: "Omnipresent facial recognition, behavioral data harvesting, location tracking, and corporate surveillance models turn human behavior into a monetized commodity without true consent.",
    impact: "Loss of individual autonomy, predictive manipulation of elections and consumer habits, social credit profiling, and authoritarian surveillance states.",
    solution: "Enactment of strict Privacy-by-Design mandates, verifiable decentralized sovereign identity (DID), end-to-end data encryption by default, and punitive fines for non-consensual biometric harvesting."
  },
  {
    id: "digital-dependency",
    title: "Digital Dependency & Mental Health Crisis",
    category: "Wellbeing & Psychology",
    icon: "fa-mobile-screen-button",
    problem: "Hyper-optimized dopamine algorithms, infinite scrolling, social comparison loops, and 24/7 screen exposure erode attention spans and foster social isolation, particularly among youth.",
    impact: "Documented spikes in teenage depression, sleep deprivation, cognitive fragmentation, reduction in face-to-face social empathy, and workplace burnout.",
    solution: "Algorithmic wellness regulations prohibiting dark UX patterns, mandatory 'right to disconnect' labor laws, built-in device friction timers, and promoting digital detox lifestyle cultures."
  },
  {
    id: "digital-divide",
    title: "The Digital Divide & Global Inequality",
    category: "Social Equity",
    icon: "fa-globe",
    problem: "Over 2.6 billion people—predominantly in rural areas and developing nations—still lack reliable high-speed internet, cutting them off from the benefits of modern technology.",
    impact: "Widening economic and educational chasm between tech-empowered nations and marginalized communities, reinforcing generational poverty cycles.",
    solution: "Public-private investments in LEO satellite broadband constellations, universal subsidized hardware initiatives, solar-powered mesh networks, and multilingual open-source software."
  },
  {
    id: "ewaste-energy",
    title: "E-Waste & Data Center Energy Footprint",
    category: "Environment & Climate",
    icon: "fa-leaf",
    problem: "Massive computational demands of AI model training and hyper-scale cloud servers consume immense quantities of electricity and freshwater cooling, while discarded hardware generates toxic e-waste.",
    impact: "Increased carbon emissions, localized power grid strain, toxic heavy metal soil contamination, and resource depletion of rare earth minerals.",
    solution: "Mandating 100% renewable power for data centers, innovative subsea / liquid immersion cooling, energy-efficient neuromorphic computing chips, and circular right-to-repair recycling laws."
  }
];

const scenarioMetrics = [
  {
    level: 0,
    label: "0% - No IT (Manual World)",
    theme: "amber",
    description: "Complete absence of Information Technology. World operates strictly on paper, mechanical clocks, and physical couriers.",
    stats: {
      gdpSpeed: "15%",
      healthAccuracy: "35%",
      knowledgeAccess: "10%",
      supplyChainLatency: "60 Days",
      fatalAccidents: "High (100%)"
    },
    status: "Severe Global Stagnation"
  },
  {
    level: 25,
    label: "25% - Early Digital (1980s)",
    theme: "amber-alt",
    description: "Basic mainframes, physical floppy disks, analog landline phones, and early computerized record keeping.",
    stats: {
      gdpSpeed: "40%",
      healthAccuracy: "55%",
      knowledgeAccess: "30%",
      supplyChainLatency: "25 Days",
      fatalAccidents: "Moderate (75%)"
    },
    status: "Early Fragmented Automation"
  },
  {
    level: 50,
    label: "50% - Current Baseline (2026)",
    theme: "blue",
    description: "Cloud computing, smartphones, 5G networks, e-commerce, electric vehicles, and emerging generative AI tools.",
    stats: {
      gdpSpeed: "75%",
      healthAccuracy: "84%",
      knowledgeAccess: "70%",
      supplyChainLatency: "7 Days",
      fatalAccidents: "Moderate-Low (45%)"
    },
    status: "Hybrid Connected Civilization"
  },
  {
    level: 75,
    label: "75% - Advanced Smart Era (2035)",
    theme: "cyan",
    description: "Smart cities, widespread humanoid robotics, autonomous electric fleet networks, and AI personalized medicine.",
    stats: {
      gdpSpeed: "92%",
      healthAccuracy: "96%",
      knowledgeAccess: "90%",
      supplyChainLatency: "24 Hours",
      fatalAccidents: "Very Low (10%)"
    },
    status: "Intelligent Automated Society"
  },
  {
    level: 100,
    label: "100% - Hyper-Tech Synthesis (2050)",
    theme: "green",
    description: "Quantum networks, nanotech medicine, zero-fatality autonomous transport, clean energy AI grids, and universal education.",
    stats: {
      gdpSpeed: "99.9%",
      healthAccuracy: "99.8%",
      knowledgeAccess: "100%",
      supplyChainLatency: "< 1 Hour",
      fatalAccidents: "Near Zero (< 0.1%)"
    },
    status: "Harmonious Super-Abundance"
  }
];

const quizQuestions = [
  {
    question: "What would happen to global healthcare if Information Technology were completely removed?",
    options: [
      "Hospitals would function faster because doctors wouldn't have to type",
      "Medical records would be lost, diagnostic errors would surge, and remote consultations would collapse",
      "Only pharmaceutical companies would be affected, not everyday patients",
      "Life expectancy would automatically increase due to less screen time"
    ],
    correctAnswer: 1,
    explanation: "Without IT, emergency ERs lose access to electronic medical histories, lab results take weeks to process on paper, medical imaging cannot be digitally shared, and rural patients lose access to life-saving specialists."
  },
  {
    question: "How does the 'Future with IT' address global urban traffic and vehicle safety?",
    options: [
      "By building wider 16-lane highways for human drivers",
      "Through V2X (Vehicle-to-Everything) synchronized autonomous pods and smart grids eliminating human-error collisions",
      "By banning all public mass transit in favor of private cars",
      "By requiring drivers to manually honk at every intersection"
    ],
    correctAnswer: 1,
    explanation: "Vehicle-to-Everything (V2X) communication allows autonomous vehicles to coordinate speed and merge without stopping at traffic lights, dramatically reducing congestion and virtually eradicating the 1.3M annual traffic fatalities."
  },
  {
    question: "What is a practical solution to the challenge of 'Job Displacement from AI and Automation'?",
    options: [
      "Completely banning all computer hardware manufacturing",
      "Government-funded lifelong reskilling programs and transitioning workers to strategic/creative human-in-the-loop roles",
      "Replacing all human teachers with robots immediately",
      "Ignoring the problem because technology never affects jobs"
    ],
    correctAnswer: 1,
    explanation: "Historical technological transitions demonstrate that reskilling programs, human-AI collaborative workflows, and education adaptation allow workers to transition into higher-value, creative, and interpersonal professions."
  },
  {
    question: "In the context of 'Responsible IT for Humanity', what does 'Privacy-by-Design' mean?",
    options: [
      "Building software where privacy and data security are built into the architecture from day one, rather than added as an afterthought",
      "Making all user passwords publicly visible on the internet",
      "Letting companies sell user data without asking for permission",
      "Designing colorful login buttons for websites"
    ],
    correctAnswer: 0,
    explanation: "Privacy-by-Design requires software engineers and organizations to integrate data minimization, end-to-end encryption, and strict user consent directly into system architectures from the initial design phase."
  }
];

/* ==========================================================================
   Advanced Milestone Timeline: Evolution of IT (1950 - 2050)
   ========================================================================== */
const timelineMilestones = [
  {
    year: "1950s",
    title: "The Mainframe Genesis",
    icon: "fa-server",
    badge: "1st Generation",
    desc: "Vacuum tubes, magnetic drums, and punch cards. Computing was localized, slow, and restricted to military and university institutions."
  },
  {
    year: "1980s",
    title: "Personal Computing Dawn",
    icon: "fa-floppy-disk",
    badge: "Micro-Revolution",
    desc: "Silicon microprocessors, floppy disks, and command-line operating systems democratized computing for small businesses and households."
  },
  {
    year: "2000s",
    title: "Global Web Interconnection",
    icon: "fa-globe",
    badge: "Internet Era",
    desc: "World Wide Web, fiber optics, search engines, and early e-commerce linked human knowledge across borders in near real-time."
  },
  {
    year: "2026",
    title: "Cloud & Generative AI Era",
    icon: "fa-wand-magic-sparkles",
    badge: "Current Epoch",
    desc: "Hyper-scale cloud nodes, 5G mobility, deep neural networks, and generative AI co-piloting human engineering, art, and medicine."
  },
  {
    year: "2035",
    title: "Autonomous Swarms & Quantum Edge",
    icon: "fa-robot",
    badge: "Smart Transition",
    desc: "Pervasive humanoid robotics, zero-emission eVTOL networks, and commercial quantum key distribution securing critical grids."
  },
  {
    year: "2050",
    title: "Harmonious Planetary Synthesis",
    icon: "fa-atom",
    badge: "Super-Abundance",
    desc: "Post-scarcity fusion energy grids, nanotechnology medicine, eradicated genetic diseases, and universal spatial learning academies."
  }
];

/* ==========================================================================
   Advanced "Build Your 2050 Smart City" Simulation Parameters
   ========================================================================== */
const citySimulationPillars = [
  {
    id: "cleanEnergy",
    name: "Clean Fusion & Microgrids",
    icon: "fa-bolt-lightning",
    defaultVal: 20,
    impactCategory: "Carbon Offset",
    desc: "Decentralized AI-balanced solar, wind, and compact fusion reactors."
  },
  {
    id: "aiHealth",
    name: "Predictive Nano-Medicine",
    icon: "fa-heart-pulse",
    defaultVal: 20,
    impactCategory: "Life Expectancy",
    desc: "Wearable bio-telemetry and autonomous robotic emergency care."
  },
  {
    id: "autoTransit",
    name: "Autonomous Sky & Ground Pods",
    icon: "fa-car-tunnel",
    defaultVal: 20,
    impactCategory: "Safety & Speed",
    desc: "Intersection-free V2X autonomous traffic grids and eVTOL corridors."
  },
  {
    id: "quantumDefense",
    name: "Quantum Security & Privacy",
    icon: "fa-shield-halved",
    defaultVal: 20,
    impactCategory: "Civic Trust",
    desc: "Post-quantum encryption defending civic water, energy, and identity networks."
  },
  {
    id: "vrEducation",
    name: "Universal Immersive Academies",
    icon: "fa-graduation-cap",
    defaultVal: 20,
    impactCategory: "Human Capital",
    desc: "Spatial VR classrooms and personalized 1-on-1 AI mentorship for all citizens."
  }
];
