/**
 * ENTERPRISE IT MVC PLATFORM - CORE BOOTSTRAPPER
 * Initializes Models, Views, and Controllers across all enterprise pages.
 */

// Embedded fallback database for local offline file:// execution
const DEFAULT_FALLBACK_CURRICULUM = {
  "curriculumTitle": "Modern Technology and Its Role in Daily Life",
  "organization": "Enterprise Tech Academy",
  "curator": "Sakthi",
  "totalModules": 7,
  "examSummary": {
    "wordCount": 188,
    "verbatimText": "Modern technology has become the cornerstone of everyday human life and societal growth. In communication, smartphones and video conferencing provide instant worldwide connectivity. Within households, smart appliances, automated IoT systems, and seamless digital payments simplify routines and enhance convenience. Healthcare is transformed through telemedicine, wearable biometric devices, and AI diagnostics that enable personalized and preventative care. Education has been democratized via digital learning platforms, virtual classrooms, and interactive augmented reality tools. In the workplace, cloud computing, automation, and big data empower remote work and accelerate global commerce. Meanwhile, AI-driven streaming and virtual reality redefine modern leisure. However, significant challenges persist, including digital addiction, cybersecurity vulnerabilities, personal privacy threats, and the digital divide separating privileged and underserved populations. To maximize technological advantages, society must foster responsible, ethical, and inclusive innovation that uplifts all individuals equally."
  },
  "quizBank": [
    {
      "id": "q1",
      "question": "Which technology infrastructure has fundamentally enabled global knowledge democratization and self-paced learning in modern society?",
      "options": [
        "Digital learning platforms, cloud LMS, and interactive AR simulations",
        "Standalone physical archives with closed paper distribution",
        "Isolated intranet mainframes without internet access",
        "Analog magnetic audio tapes and broadcast radios"
      ],
      "correctIndex": 0,
      "explanation": "Cloud-based digital learning platforms, virtual classrooms, and augmented reality tools allow students worldwide to learn flexibly at their own pace."
    },
    {
      "id": "q2",
      "question": "In what primary way has modern technology transformed healthcare delivery from a societal perspective?",
      "options": [
        "By replacing all human medical doctors with mechanical robots",
        "Through telemedicine consultations, wearable biometric trackers, and AI-assisted diagnostics",
        "By prohibiting remote consultations and requiring all paper prescriptions",
        "By disconnecting hospitals from internet communication systems"
      ],
      "correctIndex": 1,
      "explanation": "Telemedicine, AI diagnostic models, and wearable sensors provide continuous physiological monitoring and remote doctor access."
    },
    {
      "id": "q3",
      "question": "Which set of issues constitutes the most critical societal challenge arising from pervasive technology adoption?",
      "options": [
        "Inability to manufacture sufficient computer microchips",
        "Too rapid postal mail delivery times",
        "Cybersecurity threats, digital addiction, privacy vulnerabilities, and the digital divide",
        "Overabundance of handwritten documentation in offices"
      ],
      "correctIndex": 2,
      "explanation": "Cyber threats, personal data privacy erosion, screen addiction, and inequality in technological access (the digital divide) represent the core challenges."
    },
    {
      "id": "q4",
      "question": "What is the primary operational advantage of IoT-driven smart home systems and unified digital payment platforms?",
      "options": [
        "They simplify everyday household routines, bolster security, and save substantial time and manual effort",
        "They prevent users from engaging in online commercial transactions",
        "They mandate manual paperwork for all household electricity usage",
        "They disable automated voice recognition systems"
      ],
      "correctIndex": 0,
      "explanation": "Smart home automation and seamless digital payments streamline everyday tasks and enhance domestic safety and convenience."
    },
    {
      "id": "q5",
      "question": "How does cloud computing and big data analytics primarily empower the modern enterprise workplace?",
      "options": [
        "By restricting employees to physical office locations only",
        "By facilitating agile remote work, automated workflows, and data-driven corporate decision making",
        "By eliminating the need for corporate software licenses entirely",
        "By replacing digital marketing with physical billboards only"
      ],
      "correctIndex": 1,
      "explanation": "Cloud computing enables distributed hybrid collaboration while big data analytics optimizes business operations and predictive strategic planning."
    }
  ]
};

document.addEventListener('DOMContentLoaded', async () => {
  let curriculumData = DEFAULT_FALLBACK_CURRICULUM;

  // Determine root path offset depending on whether we are in /pages/ or /
  const isInPagesDir = window.location.pathname.includes('/pages/');
  const dataPath = isInPagesDir ? '../assets/data/curriculum.json' : 'assets/data/curriculum.json';

  try {
    const response = await fetch(dataPath);
    if (response.ok) {
      curriculumData = await response.json();
    }
  } catch (err) {
    console.info('Running with local embedded curriculum schema (offline mode enabled)');
  }

  // 1. Initialize Models
  const courseModel = new CourseModel(curriculumData);
  const progressModel = new ProgressModel();
  const quizModel = new QuizModel(curriculumData.quizBank || DEFAULT_FALLBACK_CURRICULUM.quizBank);

  // 2. Initialize Controllers
  const appController = new AppController();
  const courseController = new CourseController(courseModel, progressModel, appController);
  const assessmentController = new AssessmentController(quizModel, progressModel, appController);

  // 3. Boot Applications
  appController.init();
  courseController.init();
  assessmentController.init();

  // Expose global app instance for debugging and extension
  window.__EnterpriseApp = {
    models: { courseModel, progressModel, quizModel },
    controllers: { appController, courseController, assessmentController }
  };
});
