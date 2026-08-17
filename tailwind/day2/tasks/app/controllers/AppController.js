/**
 * ENTERPRISE IT MVC PLATFORM - APP CONTROLLER
 * Global Application Controller: Dark/Light Mode, Speech Reader, Font Sizer, Toast System.
 */

class AppController {
  constructor() {
    this.speechSynth = 'speechSynthesis' in window ? window.speechSynthesis : null;
    this.currentUtterance = null;
    this.isSpeaking = false;
    this.currentFontSize = 100;
  }

  init() {
    this.initTheme();
    this.initReadingProgress();
    this.initFontSizeControls();
    this.initAudioReader();
    this.initSmoothScroll();
    this.initGlobalTooltips();
  }

  /* Theme Management */
  initTheme() {
    const savedTheme = localStorage.getItem('enterprise_tech_theme') || 
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

    this.setTheme(savedTheme);

    const toggleBtn = document.getElementById('theme-toggle');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        this.setTheme(newTheme);
      });
    }
  }

  setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('enterprise_tech_theme', theme);
    this.updateThemeIcons(theme);
  }

  updateThemeIcons(theme) {
    const lightIcon = document.getElementById('theme-icon-light');
    const darkIcon = document.getElementById('theme-icon-dark');
    if (lightIcon && darkIcon) {
      if (theme === 'dark') {
        lightIcon.classList.add('hidden');
        darkIcon.classList.remove('hidden');
      } else {
        lightIcon.classList.remove('hidden');
        darkIcon.classList.add('hidden');
      }
    }
  }

  /* Reading Progress */
  initReadingProgress() {
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

  /* Font Resizer */
  initFontSizeControls() {
    const increaseBtn = document.getElementById('font-increase');
    const decreaseBtn = document.getElementById('font-decrease');
    const resetBtn = document.getElementById('font-reset');
    const content = document.getElementById('main-lecture-content') || document.getElementById('main-article-content');

    if (!content) return;

    if (increaseBtn) {
      increaseBtn.addEventListener('click', () => {
        if (this.currentFontSize < 135) {
          this.currentFontSize += 10;
          content.style.fontSize = `${this.currentFontSize}%`;
          this.showToast(`<i class="bi bi-fonts"></i> Font size: ${this.currentFontSize}%`);
        }
      });
    }

    if (decreaseBtn) {
      decreaseBtn.addEventListener('click', () => {
        if (this.currentFontSize > 85) {
          this.currentFontSize -= 10;
          content.style.fontSize = `${this.currentFontSize}%`;
          this.showToast(`<i class="bi bi-fonts"></i> Font size: ${this.currentFontSize}%`);
        }
      });
    }

    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        this.currentFontSize = 100;
        content.style.fontSize = '100%';
        this.showToast('<i class="bi bi-arrow-counterclockwise"></i> Font size reset (100%)');
      });
    }
  }

  /* Web Speech API Reader */
  initAudioReader() {
    const playBtn = document.getElementById('audio-play-btn');
    const stopBtn = document.getElementById('audio-stop-btn');
    const statusBar = document.getElementById('audio-status-bar');
    const statusLabel = document.getElementById('audio-status');

    if (!playBtn || !this.speechSynth) {
      if (playBtn && !this.speechSynth) playBtn.style.display = 'none';
      return;
    }

    playBtn.addEventListener('click', () => {
      if (!this.isSpeaking) {
        const textTarget = document.getElementById('main-lecture-content') || document.getElementById('main-article-content');
        const textToRead = textTarget ? textTarget.innerText : '';
        if (!textToRead) return;

        this.speechSynth.cancel();
        this.currentUtterance = new SpeechSynthesisUtterance(textToRead);
        this.currentUtterance.rate = 1.0;
        this.currentUtterance.pitch = 1.0;

        this.currentUtterance.onstart = () => {
          this.isSpeaking = true;
          playBtn.innerHTML = `<i class="bi bi-pause-fill"></i> <span class="d-none d-md-inline">Pause</span>`;
          if (statusBar) statusBar.classList.remove('d-none');
          if (statusLabel) statusLabel.innerHTML = '<i class="bi bi-volume-up-fill me-1"></i> Audio Lecture In Progress...';
          if (stopBtn) stopBtn.classList.remove('d-none');
        };

        this.currentUtterance.onend = () => {
          this.isSpeaking = false;
          playBtn.innerHTML = `<i class="bi bi-volume-up-fill"></i> <span class="d-none d-md-inline">Listen</span>`;
          if (statusBar) statusBar.classList.add('d-none');
          if (stopBtn) stopBtn.classList.add('d-none');
        };

        this.currentUtterance.onerror = () => {
          this.isSpeaking = false;
          playBtn.innerHTML = `<i class="bi bi-volume-up-fill"></i> <span class="d-none d-md-inline">Listen</span>`;
          if (statusBar) statusBar.classList.add('d-none');
          if (stopBtn) stopBtn.classList.add('d-none');
        };

        this.speechSynth.speak(this.currentUtterance);
      } else if (this.speechSynth.paused) {
        this.speechSynth.resume();
        playBtn.innerHTML = `<i class="bi bi-pause-fill"></i> <span class="d-none d-md-inline">Pause</span>`;
        if (statusLabel) statusLabel.innerHTML = '<i class="bi bi-volume-up-fill me-1"></i> Audio Lecture Resumed...';
      } else {
        this.speechSynth.pause();
        playBtn.innerHTML = `<i class="bi bi-play-fill"></i> <span class="d-none d-md-inline">Resume</span>`;
        if (statusLabel) statusLabel.innerHTML = '<i class="bi bi-pause-circle me-1"></i> Audio Lecture Paused';
      }
    });

    if (stopBtn) {
      stopBtn.addEventListener('click', () => {
        if (this.speechSynth) {
          this.speechSynth.cancel();
          this.isSpeaking = false;
          playBtn.innerHTML = `<i class="bi bi-volume-up-fill"></i> <span class="d-none d-md-inline">Listen</span>`;
          if (statusBar) statusBar.classList.add('d-none');
          stopBtn.classList.add('d-none');
        }
      });
    }
  }

  /* Global Toast System */
  showToast(messageHtml) {
    let toast = document.getElementById('toast-notification');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'toast-notification';
      toast.className = 'toast-msg';
      document.body.appendChild(toast);
    }
    toast.innerHTML = messageHtml;
    toast.classList.add('show');
    clearTimeout(this.toastTimer);
    this.toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 3500);
  }

  /* Smooth Scrolling */
  initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#' || !targetId) return;
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

  initGlobalTooltips() {
    // Bootstrap tooltip initialization if available
    if (window.bootstrap && window.bootstrap.Tooltip) {
      const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
      tooltipTriggerList.map(tooltipTriggerEl => new window.bootstrap.Tooltip(tooltipTriggerEl));
    }
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = AppController;
} else {
  window.AppController = AppController;
}
