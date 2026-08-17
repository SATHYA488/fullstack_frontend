/**
 * Modern Technology and Its Role in Daily Life
 * Interactive Application Logic
 * Curated for Sakthi
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initReadingProgress();
  initFontSizeAdjuster();
  initAudioReader();
  initCopySummary();
  initCategoryFilter();
  initExamQuiz();
  initSmoothScroll();
});

/* --------------------------------------------------------------------------
   1. Theme Switcher (Dark / Light Mode)
   -------------------------------------------------------------------------- */
function initTheme() {
  const themeToggleBtn = document.getElementById('theme-toggle');
  const savedTheme = localStorage.getItem('moderntech_theme') || 
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

  document.documentElement.setAttribute('data-theme', savedTheme);
  if (savedTheme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
  updateThemeIcon(savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      
      document.documentElement.setAttribute('data-theme', newTheme);
      if (newTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      localStorage.setItem('moderntech_theme', newTheme);
      updateThemeIcon(newTheme);
    });
  }
}

function updateThemeIcon(theme) {
  const darkIcon = document.getElementById('theme-icon-dark');
  const lightIcon = document.getElementById('theme-icon-light');
  if (darkIcon && lightIcon) {
    if (theme === 'dark') {
      darkIcon.classList.remove('hidden');
      lightIcon.classList.add('hidden');
    } else {
      darkIcon.classList.add('hidden');
      lightIcon.classList.remove('hidden');
    }
  }
}

/* --------------------------------------------------------------------------
   2. Reading Progress Indicator
   -------------------------------------------------------------------------- */
function initReadingProgress() {
  const progressBar = document.getElementById('reading-progress');
  if (!progressBar) return;

  window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (totalHeight > 0) {
      const progress = (window.scrollY / totalHeight) * 100;
      progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
    }
  }, { passive: true });
}

/* --------------------------------------------------------------------------
   3. Font Size Adjuster
   -------------------------------------------------------------------------- */
function initFontSizeAdjuster() {
  const increaseBtn = document.getElementById('font-increase');
  const decreaseBtn = document.getElementById('font-decrease');
  const resetBtn = document.getElementById('font-reset');
  const articleContent = document.getElementById('main-article-content');

  if (!articleContent) return;

  let currentSize = 100; // in percentage

  if (increaseBtn) {
    increaseBtn.addEventListener('click', () => {
      if (currentSize < 135) {
        currentSize += 10;
        articleContent.style.fontSize = `${currentSize}%`;
        showToast(`Text size increased to ${currentSize}%`);
      }
    });
  }

  if (decreaseBtn) {
    decreaseBtn.addEventListener('click', () => {
      if (currentSize > 85) {
        currentSize -= 10;
        articleContent.style.fontSize = `${currentSize}%`;
        showToast(`Text size decreased to ${currentSize}%`);
      }
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      currentSize = 100;
      articleContent.style.fontSize = '100%';
      showToast('Text size reset to default (100%)');
    });
  }
}

/* --------------------------------------------------------------------------
   4. Text-To-Speech Audio Reader (Web Speech API)
   -------------------------------------------------------------------------- */
let speechSynth = window.speechSynthesis;
let currentUtterance = null;
let isSpeaking = false;

function initAudioReader() {
  const playBtn = document.getElementById('audio-play-btn');
  const stopBtn = document.getElementById('audio-stop-btn');
  const statusBar = document.getElementById('audio-status-bar');
  const statusLabel = document.getElementById('audio-status');

  if (!playBtn || !('speechSynthesis' in window)) {
    if (playBtn) playBtn.style.display = 'none';
    return;
  }

  playBtn.addEventListener('click', () => {
    if (!isSpeaking) {
      const textToRead = document.getElementById('main-article-content')?.innerText || '';
      if (!textToRead) return;

      speechSynth.cancel();
      currentUtterance = new SpeechSynthesisUtterance(textToRead);
      currentUtterance.rate = 1.0;
      currentUtterance.pitch = 1.0;

      currentUtterance.onstart = () => {
        isSpeaking = true;
        playBtn.innerHTML = `<i class="bi bi-pause-fill"></i> <span class="hidden md:inline">Pause</span>`;
        if (statusBar) statusBar.classList.remove('hidden');
        if (statusLabel) statusLabel.textContent = '🔊 Reading essay aloud...';
        if (stopBtn) stopBtn.classList.remove('hidden');
      };

      currentUtterance.onend = () => {
        isSpeaking = false;
        playBtn.innerHTML = `<i class="bi bi-volume-up-fill"></i> <span class="hidden md:inline">Listen</span>`;
        if (statusBar) statusBar.classList.add('hidden');
        if (stopBtn) stopBtn.classList.add('hidden');
      };

      currentUtterance.onerror = () => {
        isSpeaking = false;
        playBtn.innerHTML = `<i class="bi bi-volume-up-fill"></i> <span class="hidden md:inline">Listen</span>`;
        if (statusBar) statusBar.classList.add('hidden');
        if (stopBtn) stopBtn.classList.add('hidden');
      };

      speechSynth.speak(currentUtterance);
    } else if (speechSynth.paused) {
      speechSynth.resume();
      playBtn.innerHTML = `<i class="bi bi-pause-fill"></i> <span class="hidden md:inline">Pause</span>`;
      if (statusLabel) statusLabel.textContent = '🔊 Reading essay aloud...';
    } else {
      speechSynth.pause();
      playBtn.innerHTML = `<i class="bi bi-play-fill"></i> <span class="hidden md:inline">Resume</span>`;
      if (statusLabel) statusLabel.textContent = '⏸ Audio paused';
    }
  });

  if (stopBtn) {
    stopBtn.addEventListener('click', () => {
      speechSynth.cancel();
      isSpeaking = false;
      playBtn.innerHTML = `<i class="bi bi-volume-up-fill"></i> <span class="hidden md:inline">Listen</span>`;
      if (statusBar) statusBar.classList.add('hidden');
      stopBtn.classList.add('hidden');
    });
  }
}

/* --------------------------------------------------------------------------
   5. Copy Revision Summary to Clipboard
   -------------------------------------------------------------------------- */
function initCopySummary() {
  const copyBtn = document.getElementById('copy-summary-btn');
  const summaryBox = document.getElementById('revision-summary-text');

  if (copyBtn && summaryBox) {
    copyBtn.addEventListener('click', () => {
      const text = summaryBox.innerText;
      navigator.clipboard.writeText(text).then(() => {
        showToast('📋 200-Word Exam Notes copied to clipboard!');
      }).catch(() => {
        showToast('Unable to access clipboard.');
      });
    });
  }
}

function showToast(message) {
  let toast = document.getElementById('toast-notification');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast-notification';
    toast.className = 'toast-msg';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<i class="bi bi-check2-circle text-lg"></i> <span>${message}</span>`;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}

/* --------------------------------------------------------------------------
   6. Category Filter for Cards
   -------------------------------------------------------------------------- */
function initCategoryFilter() {
  const filterBtns = document.querySelectorAll('#category-filter-buttons .filter-btn');
  const topicCards = document.querySelectorAll('.topic-card');

  if (!filterBtns.length || !topicCards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('active', 'bg-blue-600', 'text-white');
        b.classList.add('bg-white', 'dark:bg-slate-800', 'text-slate-700', 'dark:text-slate-300');
      });

      btn.classList.add('active', 'bg-blue-600', 'text-white');
      btn.classList.remove('bg-white', 'dark:bg-slate-800', 'text-slate-700', 'dark:text-slate-300');

      const filterValue = btn.getAttribute('data-filter');

      topicCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'block';
          card.classList.remove('opacity-0', 'scale-95');
          card.classList.add('opacity-100', 'scale-100');
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* --------------------------------------------------------------------------
   7. Exam Practice Quiz
   -------------------------------------------------------------------------- */
const quizData = [
  {
    q: "1. Which technology has fundamentally democratized access to education in modern society?",
    options: [
      "Digital learning platforms, virtual classrooms, and AR tools",
      "Traditional paper-only archives",
      "Isolated offline mainframe servers",
      "Analog magnetic cassette tapes"
    ],
    correct: 0,
    explanation: "Digital platforms, online courses, and interactive virtual tools allow self-paced and democratic learning."
  },
  {
    q: "2. How does modern technology improve healthcare delivery according to the article?",
    options: [
      "By replacing all hospitals with robot factories",
      "Through telemedicine, wearable fitness trackers, and AI-based diagnostics",
      "By restricting remote medical consultations",
      "By eliminating digital health records"
    ],
    correct: 1,
    explanation: "Telemedicine, AI diagnostics, and wearable biometric monitors provide remote, personalized care."
  },
  {
    q: "3. What are key social challenges resulting from modern technology?",
    options: [
      "Lack of digital devices across the world",
      "Excessive reliance on postal mail",
      "Digital addiction, privacy concerns, cybersecurity threats, and the digital divide",
      "Decreased speed of global communication"
    ],
    correct: 2,
    explanation: "Cybersecurity risks, digital divide inequality, privacy threats, and addiction are central challenges."
  },
  {
    q: "4. What role do smart home technologies and digital payments play in everyday lifestyle?",
    options: [
      "They simplify routines, enhance safety, and save everyday time and effort",
      "They completely stop people from shopping online",
      "They increase physical paperwork for banking",
      "They restrict household voice automation"
    ],
    correct: 0,
    explanation: "Smart home IoT systems and online payments streamline daily chores and household operations."
  }
];

function initExamQuiz() {
  const quizContainer = document.getElementById('quiz-questions-container');
  const submitBtn = document.getElementById('submit-quiz-btn');
  const resultBox = document.getElementById('quiz-result');

  if (!quizContainer || !submitBtn) return;

  quizContainer.innerHTML = quizData.map((item, qIdx) => `
    <div class="p-4 sm:p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 mb-4 transition-all">
      <p class="font-bold text-sm sm:text-base text-slate-900 dark:text-white mb-3 flex items-start gap-2">
        <span class="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-cyan-400 text-xs flex items-center justify-center shrink-0 mt-0.5">${qIdx + 1}</span>
        <span>${item.q.replace(/^\d+\.\s*/, '')}</span>
      </p>
      <div class="space-y-2">
        ${item.options.map((opt, oIdx) => `
          <label class="flex items-center gap-3 p-3 rounded-xl border border-slate-200 dark:border-slate-700/80 bg-white dark:bg-slate-900 hover:border-blue-500 dark:hover:border-cyan-500 cursor-pointer transition">
            <input type="radio" name="quiz_q${qIdx}" value="${oIdx}" class="form-check-input text-blue-600 focus:ring-blue-500">
            <span class="text-xs sm:text-sm text-slate-700 dark:text-slate-200 font-medium">${opt}</span>
          </label>
        `).join('')}
      </div>
      <div id="quiz-feedback-${qIdx}" class="mt-3 text-xs p-3 rounded-lg hidden font-medium"></div>
    </div>
  `).join('');

  submitBtn.addEventListener('click', () => {
    let score = 0;
    let answeredAll = true;

    quizData.forEach((item, qIdx) => {
      const selected = document.querySelector(`input[name="quiz_q${qIdx}"]:checked`);
      const feedback = document.getElementById(`quiz-feedback-${qIdx}`);
      
      if (!selected) {
        answeredAll = false;
        if (feedback) {
          feedback.className = 'mt-3 text-xs p-2.5 rounded-lg bg-amber-50 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800 font-medium block';
          feedback.innerHTML = '<i class="bi bi-exclamation-circle me-1"></i> Please select an answer for this question.';
        }
        return;
      }

      const val = parseInt(selected.value, 10);
      if (val === item.correct) {
        score++;
        feedback.className = 'mt-3 text-xs p-2.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 font-medium block';
        feedback.innerHTML = `<i class="bi bi-check-circle-fill me-1"></i> <strong>Correct!</strong> ${item.explanation}`;
      } else {
        feedback.className = 'mt-3 text-xs p-2.5 rounded-lg bg-rose-50 dark:bg-rose-950/60 text-rose-800 dark:text-rose-300 border border-rose-200 dark:border-rose-800 font-medium block';
        feedback.innerHTML = `<i class="bi bi-x-circle-fill me-1"></i> <strong>Incorrect.</strong> ${item.explanation}`;
      }
    });

    if (resultBox) {
      resultBox.classList.remove('hidden');
      const pct = Math.round((score / quizData.length) * 100);
      const isPerfect = score === quizData.length;

      resultBox.innerHTML = `
        <div class="p-5 rounded-2xl border ${isPerfect ? 'bg-emerald-50 border-emerald-200 text-emerald-900 dark:bg-emerald-950/80 dark:border-emerald-800 dark:text-emerald-200' : 'bg-blue-50 border-blue-200 text-blue-900 dark:bg-blue-950/80 dark:border-blue-800 dark:text-blue-200'}">
          <div class="flex items-center justify-between">
            <div>
              <h4 class="font-bold text-base md:text-lg mb-1 flex items-center gap-2">
                ${isPerfect ? '<i class="bi bi-trophy-fill text-amber-500"></i> Outstanding Score!' : '<i class="bi bi-mortarboard-fill"></i> Quiz Results'}
              </h4>
              <p class="text-xs md:text-sm opacity-90">
                You scored <strong>${score} out of ${quizData.length}</strong> (${pct}%). ${isPerfect ? 'You have completely mastered all key points of this essay!' : 'Review the notes above to strengthen your exam revision.'}
              </p>
            </div>
            <div class="text-2xl md:text-3xl font-extrabold font-display ${isPerfect ? 'text-emerald-600 dark:text-emerald-400' : 'text-blue-600 dark:text-cyan-400'}">
              ${pct}%
            </div>
          </div>
        </div>
      `;
    }
  });
}

/* --------------------------------------------------------------------------
   8. Smooth Anchor Scrolling
   -------------------------------------------------------------------------- */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}
