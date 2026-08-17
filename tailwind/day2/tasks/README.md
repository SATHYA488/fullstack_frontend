# Enterprise IT MVC Learning Platform: Modern Technology & Society

An enterprise-grade educational web application built with a **Client-Side Model-View-Controller (MVC)** architecture, semantic **HTML5**, **Vanilla CSS3 (Design Tokens)**, **Bootstrap 5.3.3**, and **Tailwind CSS**.

Designed and curated for **Sakthi** to serve as a full course portal, exam revision repository, and interactive certification assessment hub on the topic: **"Modern Technology and Its Role in Daily Life"**.

---

## 🏛️ IT Company Standard MVC Architecture

```
d:/fullstack_frontend/tailwind/day2/tasks/
├── app/                                 # MVC Core Layer
│   ├── models/                          # Data Models & State Stores
│   │   ├── CourseModel.js               # Curriculum schema, module queries, filter engine
│   │   ├── ProgressModel.js             # User progress, completed modules, score persistence
│   │   └── QuizModel.js                 # Question bank, evaluation algorithms, explanations
│   └── controllers/                     # Controllers & Business Logic
│       ├── AppController.js             # Dark/Light theme, speech synthesis, font sizer, toast
│       ├── CourseController.js          # Module catalog filter, search, completion toggles, copy
│       └── AssessmentController.js      # Exam runner, grading engine, dynamic certificate generator
├── assets/                              # Static Asset Pipeline
│   ├── css/
│   │   ├── main.css                     # Root variables, dark/light themes, resets, typography
│   │   └── mvc-components.css           # Glass navbar, sidebars, cards, flashcards, certificate
│   ├── js/
│   │   └── core.js                      # Application bootstrapper and dependency injector
│   ├── data/
│   │   └── curriculum.json              # Centralized relational course database
│   └── images/                          # High-resolution vector SVGs
│       ├── tech-banner.svg              # Platform hero tech ecosystem diagram
│       ├── module-comm.svg              # Module 1: Communication vector graphic
│       ├── module-iot.svg               # Module 2: Home & Lifestyle vector graphic
│       ├── module-health.svg            # Module 3: Healthcare vector graphic
│       ├── module-edu.svg               # Module 4: Education vector graphic
│       ├── module-economy.svg           # Module 5: Work & Economy vector graphic
│       ├── module-media.svg             # Module 6: Entertainment vector graphic
│       └── module-security.svg          # Module 7: Cybersecurity vector graphic
├── pages/                               # Dedicated Course & Portal Views
│   ├── communication.html               # Module 1: Communication & Global Networks
│   ├── lifestyle-iot.html               # Module 2: Home Automation & IoT Ecosystems
│   ├── healthcare-tech.html             # Module 3: Telemedicine & AI Diagnostics
│   ├── education-tech.html              # Module 4: EdTech & Knowledge Democratization
│   ├── work-economy.html                # Module 5: Cloud Architecture & Digital Economy
│   ├── entertainment-media.html         # Module 6: Streaming, AI Media & XR
│   ├── cybersecurity-challenges.html    # Module 7: Cybersecurity Governance & Digital Ethics
│   ├── revision-notes.html              # 200-Word Exam Notes & 7-Pillar Recall Matrix
│   ├── assessment.html                  # Certification Exam & Dynamic Certificate Generator
│   └── syllabus.html                    # Complete Curriculum Blueprint & Learning Roadmap
├── index.html                           # Enterprise Portal Homepage & Course Catalog
└── README.md                            # Complete Project Architecture & Documentation
```

---

## 🌟 Core Technical Highlights

1. **Zero-Emoji Policy**:
   - 100% of raw emojis have been replaced with clean, scalable, semantic **Bootstrap 5 Icons (`bi-*`)** for a professional corporate IT company aesthetic.

2. **Client-Side MVC Pattern**:
   - **Model**: `CourseModel`, `ProgressModel`, `QuizModel` decouple business state and persistence from the UI.
   - **View**: Clean HTML5 views equipped with responsive Bootstrap 5 grids, custom design tokens, and breadcrumb navigation.
   - **Controller**: `AppController`, `CourseController`, and `AssessmentController` manage user interaction events, text-to-speech audio synthesis, search filtering, and grading.

3. **Interactive Features**:
   - 🌓 **Dark / Light Theme**: Instant toggling persisted across pages via `localStorage`.
   - 🎧 **Web Speech API Audio Lecture Reader**: Text-to-speech engine with live audio status bars, pause, and stop controls.
   - 🔍 **Real-Time Module Search & Category Filter**: Filter modules by *Social & Lifestyle*, *Healthcare & Education*, *Economy & Media*, or *Challenges & Ethics*.
   - 📋 **1-Click 200-Word Exam Note Copying**: Copies the verbatim 188-word TNPSC/Board exam essay with animated toast notification.
   - 📜 **Official Certificate of Achievement**: Instant scoring algorithm unlocks a dynamic, printable certificate of completion for candidate **Sakthi** upon scoring $\ge 75\%$.

---

## 🚀 How to Run Locally

Open any of the HTML files directly in your web browser:
- Main Portal: [`index.html`](file:///d:/fullstack_frontend/tailwind/day2/tasks/index.html)
- 200-Word Exam Notes: [`pages/revision-notes.html`](file:///d:/fullstack_frontend/tailwind/day2/tasks/pages/revision-notes.html)
- Certification Assessment: [`pages/assessment.html`](file:///d:/fullstack_frontend/tailwind/day2/tasks/pages/assessment.html)
- Curriculum Syllabus: [`pages/syllabus.html`](file:///d:/fullstack_frontend/tailwind/day2/tasks/pages/syllabus.html)
