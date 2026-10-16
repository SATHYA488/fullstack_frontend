/**
 * Future Without IT vs Future With IT
 * Advanced Application Controller, Neural Canvas, Presentation Deck & Simulation Engine
 */

document.addEventListener("DOMContentLoaded", () => {
  initNeuralCanvas();
  initTheme();
  initSoundFX();
  initNavbar();
  initHeroStatsCounter();
  initSplitSlider();
  initComparisonSection();
  initFutureWithITSection();
  initFutureWithoutITSection();
  initImpactSolutionsSection();
  initTimelineSection();
  initCityBuilderSimulator();
  initScenarioSimulator();
  initPresentationQuiz();
  initSpeechSynthesis();
  initPresentationSlideDeck();
  initSearchModal();
  initSummaryModal();
});

/* ==========================================================================
   1. Neural Particle Constellation Canvas (60 FPS Ambient Background)
   ========================================================================== */
function initNeuralCanvas() {
  const canvas = document.getElementById("neuralCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particles = [];
  const particleCount = Math.min(Math.floor((width * height) / 18000), 65);

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.8;
      this.vy = (Math.random() - 0.5) * 0.8;
      this.radius = Math.random() * 2 + 1;
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;
      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(0, 242, 254, 0.6)";
      ctx.fill();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();

      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 130) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(0, 242, 254, ${0.25 * (1 - dist / 130)})`;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(animate);
  }

  animate();
}

/* ==========================================================================
   2. Web Audio API Sci-Fi Sound FX Engine
   ========================================================================== */
let audioCtx = null;
let soundMuted = false;

function initSoundFX() {
  const soundToggleBtn = document.getElementById("soundToggleBtn");

  function playTone(freq, type = "sine", duration = 0.08) {
    if (soundMuted) return;
    try {
      if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      if (audioCtx.state === "suspended") audioCtx.resume();

      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

      gain.gain.setValueAtTime(0.04, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start();
      osc.stop(audioCtx.currentTime + duration);
    } catch (e) {
      // AudioContext fallback
    }
  }

  window.playSciFiSound = (type = "click") => {
    if (type === "click") playTone(880, "sine", 0.05);
    else if (type === "success") { playTone(587, "triangle", 0.08); setTimeout(() => playTone(880, "sine", 0.12), 80); }
    else if (type === "slide") playTone(440, "sine", 0.03);
  };

  if (soundToggleBtn) {
    soundToggleBtn.addEventListener("click", () => {
      soundMuted = !soundMuted;
      soundToggleBtn.innerHTML = soundMuted ? `<i class="fa-solid fa-volume-xmark"></i>` : `<i class="fa-solid fa-volume-high"></i>`;
      if (!soundMuted) window.playSciFiSound("click");
    });
  }
}

/* ==========================================================================
   3. Theme Management (Dark / Light Mode)
   ========================================================================== */
function initTheme() {
  const themeToggleBtn = document.getElementById("themeToggleBtn");
  const savedTheme = localStorage.getItem("tech_theme") || "dark";
  document.documentElement.setAttribute("data-theme", savedTheme);
  updateThemeIcon(savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      const currentTheme = document.documentElement.getAttribute("data-theme");
      const newTheme = currentTheme === "light" ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", newTheme);
      localStorage.setItem("tech_theme", newTheme);
      updateThemeIcon(newTheme);
      if (window.playSciFiSound) window.playSciFiSound("click");
    });
  }
}

function updateThemeIcon(theme) {
  const icon = document.querySelector("#themeToggleBtn i");
  if (icon) {
    icon.className = theme === "light" ? "fa-solid fa-moon" : "fa-solid fa-sun";
  }
}

/* ==========================================================================
   4. Navbar Navigation & ScrollSpy (Exactly 3 Main Links)
   ========================================================================== */
function initNavbar() {
  const navToggle = document.getElementById("navToggle");
  const navMenu = document.getElementById("navMenu");
  const navLinks = document.querySelectorAll(".nav-link");

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
      const icon = navToggle.querySelector("i");
      if (icon) {
        icon.classList.toggle("fa-bars");
        icon.classList.toggle("fa-xmark");
      }
      if (window.playSciFiSound) window.playSciFiSound("click");
    });

    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        const icon = navToggle.querySelector("i");
        if (icon) {
          icon.classList.add("fa-bars");
          icon.classList.remove("fa-xmark");
        }
        if (window.playSciFiSound) window.playSciFiSound("click");
      });
    });
  }

  const sections = document.querySelectorAll("section[id]");
  window.addEventListener("scroll", () => {
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute("id");
      const matchingLink = document.querySelector(`.nav-link[href*="${sectionId}"]`);

      if (matchingLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          matchingLink.classList.add("active");
        } else {
          matchingLink.classList.remove("active");
        }
      }
    });
  });
}

/* ==========================================================================
   5. Interactive 50/50 Before/After Visual Drag Slider
   ========================================================================== */
function initSplitSlider() {
  const container = document.getElementById("splitSliderContainer");
  const handle = document.getElementById("splitSliderHandle");
  const withoutPane = document.getElementById("paneWithoutIT");

  if (!container || !handle || !withoutPane) return;

  let isDragging = false;

  function updateSlider(clientX) {
    const rect = container.getBoundingClientRect();
    let offsetX = clientX - rect.left;
    if (offsetX < 0) offsetX = 0;
    if (offsetX > rect.width) offsetX = rect.width;

    const percentage = (offsetX / rect.width) * 100;
    handle.style.left = `${percentage}%`;
    withoutPane.style.clipPath = `polygon(0 0, ${percentage}% 0, ${percentage}% 100%, 0 100%)`;
  }

  container.addEventListener("mousedown", (e) => {
    isDragging = true;
    updateSlider(e.clientX);
    if (window.playSciFiSound) window.playSciFiSound("slide");
  });

  window.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    updateSlider(e.clientX);
  });

  window.addEventListener("mouseup", () => {
    isDragging = false;
  });

  // Touch Support
  container.addEventListener("touchstart", (e) => {
    isDragging = true;
    updateSlider(e.touches[0].clientX);
  }, { passive: true });

  window.addEventListener("touchmove", (e) => {
    if (!isDragging) return;
    updateSlider(e.touches[0].clientX);
  }, { passive: true });

  window.addEventListener("touchend", () => {
    isDragging = false;
  });
}

/* ==========================================================================
   6. Hero Animated Number Counters
   ========================================================================== */
function initHeroStatsCounter() {
  const statElements = document.querySelectorAll(".counter-number");
  let animated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        statElements.forEach(el => {
          const target = parseFloat(el.getAttribute("data-target"));
          const suffix = el.getAttribute("data-suffix") || "";
          const isDecimal = el.getAttribute("data-decimal") === "true";
          const duration = 1800;
          const frameDuration = 1000 / 60;
          const totalFrames = Math.round(duration / frameDuration);
          let frame = 0;

          const counter = setInterval(() => {
            frame++;
            const progress = frame / totalFrames;
            const currentVal = target * Math.sin(progress * (Math.PI / 2));

            if (isDecimal) {
              el.textContent = currentVal.toFixed(1) + suffix;
            } else {
              el.textContent = Math.round(currentVal) + suffix;
            }

            if (frame === totalFrames) {
              clearInterval(counter);
              el.textContent = (isDecimal ? target.toFixed(1) : target) + suffix;
            }
          }, frameDuration);
        });
      }
    });
  }, { threshold: 0.3 });

  const statsSection = document.querySelector(".hero-stats-grid");
  if (statsSection) observer.observe(statsSection);
}

/* ==========================================================================
   7. Core Feature: Dynamic 5-Stage Comparison Engine
   ========================================================================== */
let activeAreaId = "education";

function initComparisonSection() {
  renderAreaTabs();
  renderComparisonContent(activeAreaId);
}

function renderAreaTabs() {
  const tabsContainer = document.getElementById("comparisonTabsContainer");
  if (!tabsContainer || !comparisonData) return;

  tabsContainer.innerHTML = comparisonData.map(area => `
    <button class="area-tab-btn ${area.id === activeAreaId ? 'active' : ''}" data-id="${area.id}">
      <i class="fa-solid ${area.icon}"></i>
      <span>${area.name}</span>
    </button>
  `).join("");

  const tabButtons = tabsContainer.querySelectorAll(".area-tab-btn");
  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const selectedId = btn.getAttribute("data-id");
      if (selectedId === activeAreaId) return;

      tabButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeAreaId = selectedId;
      renderComparisonContent(activeAreaId);
      if (window.playSciFiSound) window.playSciFiSound("click");
    });
  });
}

function renderComparisonContent(areaId) {
  const area = comparisonData.find(item => item.id === areaId);
  const container = document.getElementById("comparisonFlowContainer");
  const areaBadge = document.getElementById("currentAreaBadge");

  if (!area || !container) return;

  if (areaBadge) {
    areaBadge.innerHTML = `<i class="fa-solid ${area.icon}" style="color: var(--it-cyan);"></i> ${area.name} &bull; <span style="font-size: 0.95rem; font-weight: 500; color: var(--text-muted);">${area.tagline}</span>`;
  }

  container.innerHTML = `
    <!-- STAGE 1: Current Baseline (2026) -->
    <div class="stage-card-baseline">
      <div>
        <span class="stage-step-tag step-tag-baseline">
          <i class="fa-solid fa-clock-rotate-left"></i> Stage 1: Current Situation (2026)
        </span>
        <h3 style="font-size: 1.35rem; margin-bottom: 8px;">${area.currentSituation.title}</h3>
        <p style="font-size: 0.95rem;">${area.currentSituation.summary}</p>
      </div>
      <div class="baseline-metrics-list">
        ${area.currentSituation.metrics.map(m => `
          <div class="metric-pill">
            <div class="metric-pill-label">${m.label}</div>
            <div class="metric-pill-value">${m.value}</div>
          </div>
        `).join("")}
      </div>
    </div>

    <!-- STAGES 2 & 3: Side-by-Side Dual Comparison -->
    <div class="stage-split-comparison">
      <!-- Future With IT -->
      <div class="compare-card card-with-it">
        <div>
          <div class="compare-card-header">
            <span class="stage-step-tag step-tag-with-it">
              <i class="fa-solid fa-microchip"></i> Stage 2: Future With IT (2050)
            </span>
            <h3 class="compare-card-title" style="color: var(--it-cyan);">${area.futureWithIT.title}</h3>
            <p class="compare-card-summary">${area.futureWithIT.summary}</p>
          </div>
          <div class="feature-check-list">
            ${area.futureWithIT.features.map(f => `
              <div class="feature-item">
                <i class="fa-solid fa-circle-check"></i>
                <span>${f}</span>
              </div>
            `).join("")}
          </div>
        </div>
        <div class="card-footer-badge">
          <span class="badge-metric-green"><i class="fa-solid fa-bolt"></i> ${area.futureWithIT.efficiencyScore}</span>
          <span style="color: var(--it-cyan);"><i class="fa-solid fa-circle-nodes"></i> ${area.futureWithIT.badge}</span>
        </div>
      </div>

      <!-- Future Without IT -->
      <div class="compare-card card-without-it">
        <div>
          <div class="compare-card-header">
            <span class="stage-step-tag step-tag-no-it">
              <i class="fa-solid fa-ban"></i> Stage 3: Future Without IT
            </span>
            <h3 class="compare-card-title" style="color: var(--no-it-crimson);">${area.futureWithoutIT.title}</h3>
            <p class="compare-card-summary">${area.futureWithoutIT.summary}</p>
          </div>
          <div class="limitation-cross-list">
            ${area.futureWithoutIT.limitations.map(l => `
              <div class="limitation-item">
                <i class="fa-solid fa-triangle-exclamation"></i>
                <span>${l}</span>
              </div>
            `).join("")}
          </div>
        </div>
        <div class="card-footer-badge">
          <span class="badge-metric-red"><i class="fa-solid fa-triangle-exclamation"></i> ${area.futureWithoutIT.severity}</span>
          <span style="color: var(--no-it-crimson);"><i class="fa-solid fa-lock"></i> ${area.futureWithoutIT.badge}</span>
        </div>
      </div>
    </div>

    <!-- STAGES 4 & 5: Bottom Split -->
    <div class="stage-split-bottom">
      <div class="impact-summary-card">
        <span class="stage-step-tag step-tag-impact">
          <i class="fa-solid fa-scale-balanced"></i> Stage 4: Comparative Impact
        </span>
        <h3 style="font-size: 1.25rem; margin: 8px 0 10px 0; color: var(--sol-purple);">${area.impact.title}</h3>
        <p style="font-size: 0.92rem;">${area.impact.summary}</p>
        <div class="impact-contrast-box">
          <i class="fa-solid fa-arrows-split-up-and-left" style="color: var(--sol-purple); margin-right: 6px;"></i>
          <strong>Core Divergence:</strong> ${area.impact.keyContrast}
        </div>
      </div>

      <div class="solution-summary-card">
        <span class="stage-step-tag step-tag-solution">
          <i class="fa-solid fa-lightbulb"></i> Stage 5: Strategic Solution Roadmap
        </span>
        <h3 style="font-size: 1.25rem; margin: 8px 0 10px 0; color: var(--it-emerald);">${area.solution.title}</h3>
        <p style="font-size: 0.92rem;">${area.solution.summary}</p>
        <div class="action-steps-list">
          ${area.solution.actionSteps.map(step => `
            <div class="action-step-item">
              <i class="fa-solid fa-check"></i>
              <span>${step}</span>
            </div>
          `).join("")}
        </div>
      </div>
    </div>
  `;
}

/* ==========================================================================
   8. Section 1: Future With IT Cards
   ========================================================================== */
function initFutureWithITSection() {
  const container = document.getElementById("futureWithITGrid");
  if (!container || !futureWithITCards) return;

  container.innerHTML = futureWithITCards.map(card => `
    <div class="domain-card" style="border-top: 3px solid ${card.color};">
      <div>
        <div class="domain-card-icon-box" style="color: ${card.color}; border: 1px solid ${card.color}40; background: ${card.color}15;">
          <i class="fa-solid ${card.icon}"></i>
        </div>
        <h3 class="domain-card-title">${card.title}</h3>
        <p class="domain-card-desc">${card.summary}</p>
        <div class="domain-card-features">
          ${card.keyFeatures.map(feat => `
            <div class="domain-card-feature-item">
              <i class="fa-solid fa-circle-dot" style="color: ${card.color};"></i>
              <span>${feat}</span>
            </div>
          `).join("")}
        </div>
      </div>
      <div class="domain-card-footer">
        <span class="footer-metric" style="color: ${card.color};"><i class="fa-solid fa-chart-line"></i> ${card.metric}</span>
        <span class="footer-badge">${card.badge}</span>
      </div>
    </div>
  `).join("");
}

/* ==========================================================================
   9. Section 2: Future Without IT Cards
   ========================================================================== */
function initFutureWithoutITSection() {
  const container = document.getElementById("futureWithoutITGrid");
  if (!container || !futureWithoutITCards) return;

  container.innerHTML = futureWithoutITCards.map(card => `
    <div class="danger-domain-card">
      <div>
        <div class="danger-icon-box">
          <i class="fa-solid ${card.icon}"></i>
        </div>
        <h3 class="danger-card-title" style="color: #fca5a5;">${card.title}</h3>
        <p class="danger-card-desc">${card.summary}</p>
        <div class="danger-difficulties-list">
          ${card.difficulties.map(diff => `
            <div class="danger-difficulty-item">
              <i class="fa-solid fa-circle-xmark"></i>
              <span>${diff}</span>
            </div>
          `).join("")}
        </div>
      </div>
      <div class="danger-card-footer">
        <span class="severity-pill"><i class="fa-solid fa-shield-halved"></i> ${card.severity}</span>
        <span class="risk-tag">${card.riskTag}</span>
      </div>
    </div>
  `).join("");
}

/* ==========================================================================
   10. Section 3: Impact & Solutions Problem-Impact-Solution Matrix
   ========================================================================== */
function initImpactSolutionsSection() {
  const container = document.getElementById("matrixGridContainer");
  const filterButtons = document.querySelectorAll(".matrix-filter-btn");

  if (!container || !problemImpactSolutions) return;

  function renderMatrix(filterCategory = "all") {
    const filtered = filterCategory === "all"
      ? problemImpactSolutions
      : problemImpactSolutions.filter(item => item.category.toLowerCase().includes(filterCategory.toLowerCase()));

    container.innerHTML = filtered.map(item => `
      <div class="matrix-row-card">
        <div class="matrix-col-problem">
          <div class="matrix-col-label"><i class="fa-solid fa-triangle-exclamation"></i> Problem</div>
          <div class="matrix-col-title"><i class="fa-solid ${item.icon}" style="color: var(--no-it-amber); margin-right: 6px;"></i>${item.title}</div>
          <div class="matrix-col-desc">${item.problem}</div>
        </div>

        <div class="matrix-col-impact">
          <div class="matrix-col-label"><i class="fa-solid fa-radiation"></i> Direct Impact</div>
          <div class="matrix-col-title" style="color: #fca5a5;">Consequences & Risks</div>
          <div class="matrix-col-desc">${item.impact}</div>
        </div>

        <div class="matrix-col-solution">
          <div class="matrix-col-label"><i class="fa-solid fa-shield-check"></i> Solution</div>
          <div class="matrix-col-title" style="color: #6ee7b7;">Mitigation & Policy</div>
          <div class="matrix-col-desc">${item.solution}</div>
        </div>
      </div>
    `).join("");
  }

  renderMatrix("all");

  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const category = btn.getAttribute("data-category");
      renderMatrix(category);
      if (window.playSciFiSound) window.playSciFiSound("click");
    });
  });
}

/* ==========================================================================
   11. Advanced Feature: Evolution Timeline (1950 - 2050)
   ========================================================================== */
function initTimelineSection() {
  const track = document.getElementById("timelineTrack");
  if (!track || !timelineMilestones) return;

  track.innerHTML = timelineMilestones.map(node => `
    <div class="timeline-node">
      <div>
        <div class="timeline-year">${node.year}</div>
        <div class="stage-step-tag step-tag-with-it" style="font-size: 0.7rem; padding: 2px 8px; margin-bottom: 6px;">
          ${node.badge}
        </div>
        <h4 class="timeline-title">${node.title}</h4>
        <p class="timeline-desc">${node.desc}</p>
      </div>
    </div>
  `).join("");
}

/* ==========================================================================
   12. Advanced Feature: Build Your 2050 Smart City Simulator Game
   ========================================================================== */
function initCityBuilderSimulator() {
  const container = document.getElementById("citySlidersContainer");
  const happinessVal = document.getElementById("cityHappinessVal");
  const carbonVal = document.getElementById("cityCarbonVal");
  const safetyVal = document.getElementById("citySafetyVal");
  const budgetCounter = document.getElementById("budgetRemainingCounter");

  if (!container || !citySimulationPillars) return;

  const pillarValues = {
    cleanEnergy: 20,
    aiHealth: 20,
    autoTransit: 20,
    quantumDefense: 20,
    vrEducation: 20
  };

  function renderCitySliders() {
    container.innerHTML = citySimulationPillars.map(p => `
      <div class="city-slider-item">
        <div class="city-slider-header">
          <span><i class="fa-solid ${p.icon}" style="color: var(--it-cyan); margin-right: 6px;"></i> ${p.name}</span>
          <span id="label_${p.id}">${pillarValues[p.id]} Credits</span>
        </div>
        <input type="range" min="0" max="50" value="${pillarValues[p.id]}" class="city-slider-range" data-id="${p.id}">
      </div>
    `).join("");

    const ranges = container.querySelectorAll(".city-slider-range");
    ranges.forEach(range => {
      range.addEventListener("input", (e) => {
        const id = e.target.getAttribute("data-id");
        pillarValues[id] = parseInt(e.target.value);
        document.getElementById(`label_${id}`).textContent = `${pillarValues[id]} Credits`;
        updateCityCalculations();
      });
    });

    updateCityCalculations();
  }

  function updateCityCalculations() {
    const totalAllocated = Object.values(pillarValues).reduce((a, b) => a + b, 0);
    if (budgetCounter) budgetCounter.textContent = `${100 - totalAllocated} Credits Left`;

    // Calculate dynamic scores
    const happiness = Math.min(Math.round((pillarValues.vrEducation * 1.1 + pillarValues.aiHealth * 1.2 + pillarValues.autoTransit * 0.7)), 99);
    const carbonOffset = Math.min(Math.round((pillarValues.cleanEnergy * 1.5 + pillarValues.autoTransit * 0.8)), 100);
    const safety = Math.min(Math.round((pillarValues.quantumDefense * 1.3 + pillarValues.autoTransit * 0.9)), 99);

    if (happinessVal) happinessVal.textContent = `${happiness}%`;
    if (carbonVal) carbonVal.textContent = `${carbonOffset}%`;
    if (safetyVal) safetyVal.textContent = `${safety}%`;
  }

  renderCitySliders();
}

/* ==========================================================================
   13. Scenario Simulator (0% - 100% IT Level)
   ========================================================================== */
function initScenarioSimulator() {
  const slider = document.getElementById("techLevelSlider");
  const statusTitle = document.getElementById("simStatusTitle");
  const statusDesc = document.getElementById("simStatusDesc");

  const gdpFill = document.getElementById("simGdpFill");
  const gdpVal = document.getElementById("simGdpVal");

  const healthFill = document.getElementById("simHealthFill");
  const healthVal = document.getElementById("simHealthVal");

  const knowFill = document.getElementById("simKnowFill");
  const knowVal = document.getElementById("simKnowVal");

  const latencyVal = document.getElementById("simLatencyVal");
  const accidentsVal = document.getElementById("simAccidentsVal");

  if (!slider || !scenarioMetrics) return;

  function updateSimulation(val) {
    const parsedVal = parseInt(val);
    let matched = scenarioMetrics[0];
    let minDiff = 1000;

    scenarioMetrics.forEach(m => {
      const diff = Math.abs(m.level - parsedVal);
      if (diff < minDiff) {
        minDiff = diff;
        matched = m;
      }
    });

    if (statusTitle) statusTitle.textContent = `${matched.label}: ${matched.status}`;
    if (statusDesc) statusDesc.textContent = matched.description;

    if (gdpFill) gdpFill.style.width = matched.stats.gdpSpeed;
    if (gdpVal) gdpVal.textContent = matched.stats.gdpSpeed;

    if (healthFill) healthFill.style.width = matched.stats.healthAccuracy;
    if (healthVal) healthVal.textContent = matched.stats.healthAccuracy;

    if (knowFill) knowFill.style.width = matched.stats.knowledgeAccess;
    if (knowVal) knowVal.textContent = matched.stats.knowledgeAccess;

    if (latencyVal) latencyVal.textContent = matched.stats.supplyChainLatency;
    if (accidentsVal) accidentsVal.textContent = matched.stats.fatalAccidents;
  }

  slider.addEventListener("input", (e) => {
    updateSimulation(e.target.value);
    if (window.playSciFiSound) window.playSciFiSound("slide");
  });

  updateSimulation(slider.value);
}

/* ==========================================================================
   14. Audience Quiz Engine
   ========================================================================== */
let currentQuestionIndex = 0;
let quizScore = 0;

function initPresentationQuiz() {
  const questionEl = document.getElementById("quizQuestion");
  const optionsContainer = document.getElementById("quizOptions");
  const indicatorEl = document.getElementById("quizStepIndicator");
  const scoreBadge = document.getElementById("quizScoreBadge");
  const feedbackBox = document.getElementById("quizFeedbackBox");
  const explanationEl = document.getElementById("quizExplanation");
  const nextBtn = document.getElementById("quizNextBtn");

  if (!questionEl || !optionsContainer || !quizQuestions) return;

  function renderQuestion(index) {
    if (index >= quizQuestions.length) {
      renderQuizSummary();
      return;
    }

    const q = quizQuestions[index];
    if (indicatorEl) indicatorEl.textContent = `Question ${index + 1} of ${quizQuestions.length}`;
    if (scoreBadge) scoreBadge.textContent = `Score: ${quizScore} / ${quizQuestions.length}`;
    questionEl.textContent = q.question;

    if (feedbackBox) feedbackBox.classList.remove("active");
    if (nextBtn) {
      nextBtn.style.display = "none";
      nextBtn.textContent = index === quizQuestions.length - 1 ? "Finish Quiz" : "Next Question";
    }

    optionsContainer.innerHTML = q.options.map((opt, optIndex) => `
      <button class="quiz-option-btn" data-index="${optIndex}">
        <i class="fa-regular fa-circle"></i>
        <span>${opt}</span>
      </button>
    `).join("");

    const optionButtons = optionsContainer.querySelectorAll(".quiz-option-btn");
    optionButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        const selectedIdx = parseInt(btn.getAttribute("data-index"));
        handleAnswer(selectedIdx, q.correctAnswer, q.explanation, optionButtons);
      });
    });
  }

  function handleAnswer(selectedIdx, correctIdx, explanation, optionButtons) {
    optionButtons.forEach((btn, idx) => {
      btn.disabled = true;
      if (idx === correctIdx) {
        btn.classList.add("correct");
        btn.querySelector("i").className = "fa-solid fa-circle-check";
      } else if (idx === selectedIdx) {
        btn.classList.add("wrong");
        btn.querySelector("i").className = "fa-solid fa-circle-xmark";
      }
    });

    if (selectedIdx === correctIdx) {
      quizScore++;
      if (scoreBadge) scoreBadge.textContent = `Score: ${quizScore} / ${quizQuestions.length}`;
      if (window.playSciFiSound) window.playSciFiSound("success");
    } else {
      if (window.playSciFiSound) window.playSciFiSound("click");
    }

    if (explanationEl) explanationEl.textContent = explanation;
    if (feedbackBox) feedbackBox.classList.add("active");
    if (nextBtn) nextBtn.style.display = "inline-flex";
  }

  function renderQuizSummary() {
    indicatorEl.textContent = "Quiz Completed!";
    questionEl.textContent = `Presentation Quiz Score: ${quizScore} out of ${quizQuestions.length} Correct (${Math.round((quizScore/quizQuestions.length)*100)}%)`;

    let remark = quizScore >= 3 
      ? "Outstanding! You have mastered the comparative analysis of Information Technology."
      : "Great presentation review! Check out the sector comparison above to explore more details.";

    optionsContainer.innerHTML = `
      <div style="background: rgba(0, 242, 254, 0.08); border: 1px solid rgba(0, 242, 254, 0.25); padding: 24px; border-radius: 12px; margin-bottom: 20px;">
        <p style="font-size: 1.05rem; color: var(--text-main); margin-bottom: 8px;">${remark}</p>
        <p style="font-size: 0.9rem; color: var(--text-muted);">Thank you for participating in the interactive demonstration.</p>
      </div>
    `;

    if (feedbackBox) feedbackBox.classList.remove("active");
    if (nextBtn) {
      nextBtn.textContent = "Restart Quiz";
      nextBtn.style.display = "inline-flex";
      nextBtn.onclick = () => {
        currentQuestionIndex = 0;
        quizScore = 0;
        renderQuestion(currentQuestionIndex);
      };
    }
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      if (currentQuestionIndex < quizQuestions.length) {
        currentQuestionIndex++;
        renderQuestion(currentQuestionIndex);
        if (window.playSciFiSound) window.playSciFiSound("click");
      }
    });
  }

  renderQuestion(0);
}

/* ==========================================================================
   15. AI Voice Narration (Web Speech API)
   ========================================================================== */
function initSpeechSynthesis() {
  const narrateBtns = document.querySelectorAll(".audio-narrate-btn");
  if (!('speechSynthesis' in window)) {
    narrateBtns.forEach(btn => btn.style.display = "none");
    return;
  }

  narrateBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const text = btn.getAttribute("data-text");
      if (!text) return;

      if (window.speechSynthesis.speaking) {
        window.speechSynthesis.cancel();
        document.querySelectorAll(".audio-narrate-btn").forEach(b => b.classList.remove("playing"));
        return;
      }

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 1.0;
      utterance.pitch = 1.0;

      btn.classList.add("playing");

      utterance.onend = () => {
        btn.classList.remove("playing");
      };

      utterance.onerror = () => {
        btn.classList.remove("playing");
      };

      window.speechSynthesis.speak(utterance);
    });
  });
}

/* ==========================================================================
   16. Full-Screen Presentation Slide Deck Mode (for College Projector)
   ========================================================================== */
function initPresentationSlideDeck() {
  const deckOverlay = document.getElementById("presentationDeckOverlay");
  const openDeckBtn = document.getElementById("openPresentationModeBtn");
  const closeDeckBtn = document.getElementById("closeDeckBtn");
  const prevSlideBtn = document.getElementById("prevSlideBtn");
  const nextSlideBtn = document.getElementById("nextSlideBtn");
  const slideContent = document.getElementById("deckSlideContent");
  const slideIndicator = document.getElementById("deckSlideIndicator");

  if (!deckOverlay) return;

  const slides = [
    {
      title: "The Future of IT: With vs Without Technology",
      subtitle: "College Final-Year Project Presentation & Technical Evaluation",
      content: `
        <div style="font-size: 1.15rem; line-height: 1.8; color: var(--text-muted);">
          <p><strong style="color: var(--it-cyan);">Core Thesis:</strong> Information Technology is the nervous system of modern civilization. This project contrasts the hyper-connected, sustainable future powered by IT against the catastrophic regression of a world without IT.</p>
          <div style="margin-top: 24px; display: flex; gap: 16px;">
            <div style="flex:1; background: rgba(0,242,254,0.1); padding: 16px; border-radius: 10px; border: 1px solid var(--it-cyan);">
              <h4 style="color: var(--it-cyan);">With IT (2050)</h4>
              <p style="font-size: 0.9rem;">Predictive medicine, autonomous zero-accident mobility, and clean AI grids.</p>
            </div>
            <div style="flex:1; background: rgba(239,68,68,0.1); padding: 16px; border-radius: 10px; border: 1px solid var(--no-it-crimson);">
              <h4 style="color: var(--no-it-crimson);">Without IT</h4>
              <p style="font-size: 0.9rem;">Medical delays, 70%+ GDP loss, knowledge isolation, and manual gridlocks.</p>
            </div>
          </div>
        </div>
      `
    },
    {
      title: "Pillar 1: Future With IT",
      subtitle: "Hyper-Connectivity & Technological Abundance",
      content: `
        <ul style="display: flex; flex-direction: column; gap: 14px; font-size: 1.05rem; color: var(--text-muted);">
          <li><i class="fa-solid fa-circle-check" style="color: var(--it-emerald); margin-right: 8px;"></i> <strong>Healthcare & Biotech:</strong> Nanomedicine & AI pathology boosting life expectancy to 90+ years.</li>
          <li><i class="fa-solid fa-circle-check" style="color: var(--it-emerald); margin-right: 8px;"></i> <strong>Smart Mobility:</strong> V2X swarm transit eliminating 1.3M annual traffic fatalities.</li>
          <li><i class="fa-solid fa-circle-check" style="color: var(--it-emerald); margin-right: 8px;"></i> <strong>Adaptive Learning:</strong> Personalized 1-on-1 AI mentors democratizing global education.</li>
        </ul>
      `
    },
    {
      title: "Pillar 2: Future Without IT",
      subtitle: "Systemic Vulnerability, Blindness & Collapse",
      content: `
        <ul style="display: flex; flex-direction: column; gap: 14px; font-size: 1.05rem; color: var(--text-muted);">
          <li><i class="fa-solid fa-triangle-exclamation" style="color: var(--no-it-crimson); margin-right: 8px;"></i> <strong>Medical Blindness:</strong> Lost paper records, no remote triage, massive preventable mortality.</li>
          <li><i class="fa-solid fa-triangle-exclamation" style="color: var(--no-it-crimson); margin-right: 8px;"></i> <strong>Economic Paralysis:</strong> Cash shortages, ledger accounting, and 70%+ collapse in trade speed.</li>
          <li><i class="fa-solid fa-triangle-exclamation" style="color: var(--no-it-crimson); margin-right: 8px;"></i> <strong>Information Blackout:</strong> Disconnected communities, loss of warning systems for natural disasters.</li>
        </ul>
      `
    },
    {
      title: "Pillar 3: Impact & Ethical Solutions",
      subtitle: "Responsible IT for Humanity Manifesto",
      content: `
        <div style="font-size: 1.05rem; line-height: 1.8; color: var(--text-muted);">
          <p><strong>1. Privacy-by-Design:</strong> Zero-trust encryption and decentralized sovereign digital identity.</p>
          <p><strong>2. Human-in-the-Loop:</strong> Retaining human moral veto over medical and judicial algorithms.</p>
          <p><strong>3. Green Computing:</strong> Powering global data centers with 100% renewable fusion and solar grids.</p>
          <p><strong>4. Universal Inclusion:</strong> Satellite broadband guaranteeing digital literacy as a fundamental human right.</p>
        </div>
      `
    }
  ];

  let currentSlide = 0;

  function renderSlide(index) {
    const s = slides[index];
    slideIndicator.textContent = `Slide ${index + 1} of ${slides.length}`;
    slideContent.innerHTML = `
      <div class="deck-slide-card">
        <span class="stage-step-tag step-tag-with-it" style="margin-bottom: 12px;">TechHorizon Presentation Deck</span>
        <h2 style="font-size: 2.2rem; margin-bottom: 6px; color: var(--text-main);">${s.title}</h2>
        <h4 style="font-size: 1.1rem; color: var(--it-cyan); margin-bottom: 24px;">${s.subtitle}</h4>
        <div>${s.content}</div>
      </div>
    `;
  }

  if (openDeckBtn) {
    openDeckBtn.addEventListener("click", () => {
      deckOverlay.classList.add("active");
      currentSlide = 0;
      renderSlide(currentSlide);
      if (window.playSciFiSound) window.playSciFiSound("click");
    });
  }

  if (closeDeckBtn) {
    closeDeckBtn.addEventListener("click", () => {
      deckOverlay.classList.remove("active");
    });
  }

  if (prevSlideBtn) {
    prevSlideBtn.addEventListener("click", () => {
      if (currentSlide > 0) {
        currentSlide--;
        renderSlide(currentSlide);
        if (window.playSciFiSound) window.playSciFiSound("slide");
      }
    });
  }

  if (nextSlideBtn) {
    nextSlideBtn.addEventListener("click", () => {
      if (currentSlide < slides.length - 1) {
        currentSlide++;
        renderSlide(currentSlide);
        if (window.playSciFiSound) window.playSciFiSound("slide");
      }
    });
  }

  // Keyboard navigation for presentation slide deck
  window.addEventListener("keydown", (e) => {
    if (e.key === "f" || e.key === "F") {
      // Toggle presentation mode if not typing in input
      if (document.activeElement.tagName !== "INPUT") {
        deckOverlay.classList.toggle("active");
        if (deckOverlay.classList.contains("active")) {
          currentSlide = 0;
          renderSlide(currentSlide);
        }
      }
    }
    if (!deckOverlay.classList.contains("active")) return;
    if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") {
      if (currentSlide < slides.length - 1) { currentSlide++; renderSlide(currentSlide); }
    } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
      if (currentSlide > 0) { currentSlide--; renderSlide(currentSlide); }
    } else if (e.key === "Escape") {
      deckOverlay.classList.remove("active");
    }
  });
}

/* ==========================================================================
   17. Global Search Modal (Ctrl + K)
   ========================================================================== */
function initSearchModal() {
  const searchModal = document.getElementById("searchModal");
  const searchInput = document.getElementById("globalSearchInput");
  const searchResults = document.getElementById("searchResultsContainer");
  const searchTriggerBtn = document.getElementById("openSearchModalBtn");

  if (!searchModal || !searchInput) return;

  const searchableItems = [
    { title: "Education & Learning (Comparison)", target: "#comparison-engine", badge: "Sector" },
    { title: "Healthcare & Medicine (Comparison)", target: "#comparison-engine", badge: "Sector" },
    { title: "Banking & Finance (Comparison)", target: "#comparison-engine", badge: "Sector" },
    { title: "Transportation & Mobility (Comparison)", target: "#comparison-engine", badge: "Sector" },
    { title: "AI & Generative Machine Learning", target: "#future-with-it", badge: "Future With IT" },
    { title: "Smart Cities & Urban IoT", target: "#future-with-it", badge: "Future With IT" },
    { title: "Autonomous Transit & eVTOL", target: "#future-with-it", badge: "Future With IT" },
    { title: "Education & Knowledge Scarcity Pitfalls", target: "#future-without-it", badge: "Future Without IT" },
    { title: "Medical Paralysis Without IT", target: "#future-without-it", badge: "Future Without IT" },
    { title: "Job Displacement & Automation Anxiety", target: "#impact-solutions", badge: "Impact & Solution" },
    { title: "Cybersecurity & Quantum Defense", target: "#impact-solutions", badge: "Impact & Solution" },
    { title: "Privacy Erosion & Surveillance", target: "#impact-solutions", badge: "Impact & Solution" },
    { title: "2050 Smart City Simulator", target: "#city-builder", badge: "Interactive Tool" },
    { title: "Evolution Timeline (1950-2050)", target: "#timeline-section", badge: "Interactive Tool" }
  ];

  function openSearch() {
    searchModal.classList.add("active");
    searchInput.value = "";
    searchInput.focus();
    renderSearchResults("");
  }

  function closeSearch() {
    searchModal.classList.remove("active");
  }

  function renderSearchResults(query) {
    const q = query.toLowerCase().trim();
    const filtered = q === "" 
      ? searchableItems.slice(0, 6) 
      : searchableItems.filter(item => item.title.toLowerCase().includes(q) || item.badge.toLowerCase().includes(q));

    searchResults.innerHTML = filtered.map(item => `
      <div class="search-result-item" data-target="${item.target}">
        <span style="font-weight: 600; font-size: 0.95rem;">${item.title}</span>
        <span class="stage-step-tag step-tag-with-it" style="font-size: 0.72rem; margin: 0;">${item.badge}</span>
      </div>
    `).join("");

    searchResults.querySelectorAll(".search-result-item").forEach(item => {
      item.addEventListener("click", () => {
        const target = item.getAttribute("data-target");
        closeSearch();
        const el = document.querySelector(target);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      });
    });
  }

  if (searchTriggerBtn) searchTriggerBtn.addEventListener("click", openSearch);

  searchInput.addEventListener("input", (e) => {
    renderSearchResults(e.target.value);
  });

  searchModal.addEventListener("click", (e) => {
    if (e.target === searchModal) closeSearch();
  });

  window.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === "k") {
      e.preventDefault();
      openSearch();
    }
    if (e.key === "Escape" && searchModal.classList.contains("active")) {
      closeSearch();
    }
  });
}

/* ==========================================================================
   18. Presentation Summary Dossier Modal
   ========================================================================== */
function initSummaryModal() {
  const modalOverlay = document.getElementById("summaryModal");
  const openModalBtn = document.getElementById("openSummaryBtn");
  const closeModalBtn = document.getElementById("closeSummaryBtn");
  const printBtn = document.getElementById("printSummaryBtn");

  if (openModalBtn && modalOverlay) {
    openModalBtn.addEventListener("click", () => {
      modalOverlay.classList.add("active");
      if (window.playSciFiSound) window.playSciFiSound("click");
    });
  }

  if (closeModalBtn && modalOverlay) {
    closeModalBtn.addEventListener("click", () => {
      modalOverlay.classList.remove("active");
    });
  }

  if (modalOverlay) {
    modalOverlay.addEventListener("click", (e) => {
      if (e.target === modalOverlay) modalOverlay.classList.remove("active");
    });
  }

  if (printBtn) {
    printBtn.addEventListener("click", () => {
      window.print();
    });
  }
}
