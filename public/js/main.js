const services = [
  {
    number: "01",
    title: "Strategy & Content Planning",
    image: "assets/service-red-pyramid.png",
    copy: [
      "I develop <strong>tailored social media strategies</strong> that align with your <strong>brand goals</strong> and speak directly to your <strong>target audience</strong>.",
      "From in-depth <strong>audience insights</strong> to structured <strong>content planning</strong>, I create a clear roadmap that ensures <strong>consistency</strong>, <strong>relevance</strong>, and <strong>long-term growth</strong>. <span class=\"desktop-extra\">Every piece of content is strategically designed to strengthen your <strong>brand presence</strong> and maximize <strong>engagement</strong> across platforms.</span>",
    ],
  },
  {
    number: "02",
    title: "Short-Form Content",
    image: "assets/service-blue-cube.png",
    copy: [
      "I create high-quality short-form content including Reels, TikToks, and carousel posts, designed to capture attention and drive engagement.",
      "Combined with engaging captions and strong storytelling, each piece of content is crafted to strengthen your brand presence and deliver measurable results.",
    ],
  },
  {
    number: "03",
    title: "Publishing & Optimization",
    image: "assets/service-green-cylinder.png",
    copy: [
      "I ensure consistent publishing across all platforms with optimized timing and platform-specific adjustments to maximize reach and visibility.",
      "By aligning content with the right timing and format, I help improve performance, increase engagement, and maintain a strong and active presence.",
    ],
  },
  {
    number: "04",
    title: "Community Management",
    image: "assets/service-orange-sphere.png",
    copy: [
      "I actively manage and engage with your audience through comments and messages to build trust, strengthen relationships, and create a loyal community around your brand.",
      "By maintaining consistent interaction, I help increase engagement, improve brand perception, and turn followers into long-term customers.",
    ],
  },
  {
    number: "05",
    title: "Analytics & Reporting",
    image: "assets/service-purple-circle.png",
    copy: [
      "I track and analyze key performance metrics to gain actionable insights and continuously optimize your content strategy.",
      "Through data-driven decisions, I improve reach, increase engagement, and drive sustainable growth for your brand.",
    ],
  },
  {
    number: "06",
    title: "Paid Campaigns",
    image: "assets/service-yellow-heart.png",
    copy: [
      "I create and manage highly targeted ad campaigns designed to increase visibility, drive qualified traffic, and generate measurable conversions.",
      "Through continuous testing, audience refinement, and performance optimization, I ensure your budget delivers maximum ROI.",
    ],
  },
  {
    number: "07",
    title: "Brand Identity",
    image: "assets/service-orange-star.png",
    copy: [
      "I combine aesthetic design with strategic thinking to build strong, memorable brand identities.",
      "From visuals to messaging, every element is crafted to ensure consistency, recognition, and alignment with your business goals.",
    ],
  },
  {
    number: "08",
    title: "Long-Form Video Editing",
    image: "assets/service-blue-gem.png",
    copy: [
      "From raw footage to polished content, I create high-quality long-form videos designed for retention and impact.",
      "With strategic thumbnails and optimized storytelling, I increase clicks, improve watch time, and support consistent channel growth.",
    ],
  },
  {
    number: "09",
    title: "Website Design",
    image: "assets/service-lime-cube.png",
    copy: [
      "I design clean, modern websites that reflect your brand and provide a clear, user-friendly experience.",
      "I also support with ongoing updates, content changes, and maintenance to keep your website aligned with your brand and up to date.",
    ],
  },
  {
    number: "10",
    title: "Visual Content",
    image: "assets/service-yellow-pill.png",
    copy: [
      "I create high-quality visual content that aligns with your brand and enhances your overall online presence.",
      "From social media graphics to marketing assets, I design visuals that are consistent, engaging, and tailored to your audience.",
    ],
  },
];

const body = document.body;
const navToggle = document.querySelector(".nav-toggle");
const navLinks = [...document.querySelectorAll(".nav-link")];
const localNavLinks = navLinks.filter((link) => link.getAttribute("href")?.startsWith("#"));
const sections = localNavLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const finePointer = window.matchMedia("(pointer: fine)");
const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

const getMaxScroll = () => Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
const canUseInertia = () => false;
const isEditableTarget = (target) => target?.closest?.("input, textarea, select, [contenteditable='true']");
const hasLocalScroll = (target) => {
  let node = target instanceof Element ? target : null;
  while (node && node !== document.body && node !== document.documentElement) {
    const style = window.getComputedStyle(node);
    if (/(auto|scroll)/.test(style.overflowY) && node.scrollHeight > node.clientHeight + 1) return true;
    node = node.parentElement;
  }
  return false;
};

let targetScrollY = window.scrollY;
let currentScrollY = window.scrollY;
let scrollFrame = 0;

window.requestAnimationFrame(() => body.classList.add("is-ready"));

const updateChromeState = () => {
  body.classList.toggle("is-scrolled", window.scrollY > 24);
};

window.addEventListener("scroll", updateChromeState, { passive: true });
window.addEventListener("resize", updateChromeState);
updateChromeState();

const animateInertiaScroll = () => {
  const distance = targetScrollY - currentScrollY;
  currentScrollY += distance * 0.105;

  if (Math.abs(distance) < 0.55) {
    currentScrollY = targetScrollY;
    window.scrollTo({ top: currentScrollY, behavior: "auto" });
    scrollFrame = 0;
    return;
  }

  window.scrollTo({ top: currentScrollY, behavior: "auto" });
  scrollFrame = window.requestAnimationFrame(animateInertiaScroll);
};

const glideTo = (top) => {
  targetScrollY = clamp(top, 0, getMaxScroll());
  if (!canUseInertia()) {
    window.scrollTo({ top: targetScrollY, behavior: prefersReducedMotion.matches ? "auto" : "smooth" });
    return;
  }

  if (!scrollFrame) {
    currentScrollY = window.scrollY;
    scrollFrame = window.requestAnimationFrame(animateInertiaScroll);
  }
};

window.addEventListener(
  "wheel",
  (event) => {
    if (!canUseInertia() || event.ctrlKey || event.metaKey || event.shiftKey || hasLocalScroll(event.target)) return;

    event.preventDefault();
    const deltaUnit = event.deltaMode === 1 ? 34 : event.deltaMode === 2 ? window.innerHeight : 1;
    const nextDelta = clamp(event.deltaY * deltaUnit, -920, 920);
    glideTo(targetScrollY + nextDelta * 0.92);
  },
  { passive: false }
);

window.addEventListener("keydown", (event) => {
  if (!canUseInertia() || event.defaultPrevented || isEditableTarget(event.target)) return;

  const keySteps = {
    ArrowDown: 92,
    ArrowUp: -92,
    PageDown: window.innerHeight * 0.82,
    PageUp: -window.innerHeight * 0.82,
  };
  let destination = null;

  if (event.key in keySteps) destination = targetScrollY + keySteps[event.key];
  if (event.key === " ") destination = targetScrollY + window.innerHeight * (event.shiftKey ? -0.82 : 0.82);
  if (event.key === "Home") destination = 0;
  if (event.key === "End") destination = getMaxScroll();

  if (destination !== null) {
    event.preventDefault();
    glideTo(destination);
  }
});

document.querySelectorAll("a[href^='#']").forEach((link) => {
  link.addEventListener("click", (event) => {
    const id = link.getAttribute("href");
    if (!id || id === "#") return;
    const target = document.querySelector(id);
    if (!target) return;

    event.preventDefault();
    body.classList.remove("nav-open");
    navToggle?.setAttribute("aria-expanded", "false");
    window.history.pushState(null, "", id);
    glideTo(target.offsetTop);
  });
});

navToggle?.addEventListener("click", () => {
  const isOpen = body.classList.toggle("nav-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    body.classList.remove("nav-open");
    navToggle?.setAttribute("aria-expanded", "false");
  });
});

const activateNav = () => {
  if (sections.length < 2) return;

  const probe = window.scrollY + window.innerHeight * 0.38;
  let current = sections[0]?.id;

  for (const section of sections) {
    if (section.offsetTop <= probe) current = section.id;
  }

  localNavLinks.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
  });
};

window.addEventListener("scroll", activateNav, { passive: true });
window.addEventListener("resize", activateNav);
activateNav();

const roleRotator = document.querySelector(".role-rotator");
const roles = roleRotator ? [...roleRotator.querySelectorAll("span")] : [];
let roleIndex = 0;

if (roles.length) {
  roleRotator.classList.add("ready");
  roles[0].classList.add("active");
}

const statementCards = [...document.querySelectorAll(".statement-card")];
let statementIndex = 0;

if (statementCards.length > 1) {
  window.setInterval(() => {
    statementCards[statementIndex].classList.remove("active");
    statementIndex = (statementIndex + 1) % statementCards.length;
    statementCards[statementIndex].classList.add("active");
  }, 4600);
}

const testimonialCards = [...document.querySelectorAll(".testimonial-card")];
const dots = [...document.querySelectorAll(".dot")];
let testimonialIndex = 0;
let testimonialTimer = null;

const showTestimonial = (nextIndex) => {
  testimonialCards[testimonialIndex]?.classList.remove("active");
  dots[testimonialIndex]?.classList.remove("active");
  testimonialIndex = nextIndex;
  testimonialCards[testimonialIndex]?.classList.add("active");
  dots[testimonialIndex]?.classList.add("active");
};

const restartTestimonials = () => {
  window.clearInterval(testimonialTimer);
  testimonialTimer = window.setInterval(() => {
    showTestimonial((testimonialIndex + 1) % testimonialCards.length);
  }, 5200);
};

if (testimonialCards.length) {
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      showTestimonial(index);
      restartTestimonials();
    });
  });
  restartTestimonials();
}

document.querySelectorAll("[data-flip-card]").forEach((card) => {
  card.setAttribute("aria-pressed", "false");
  card.addEventListener("click", () => {
    const isFlipped = card.classList.toggle("is-flipped");
    card.setAttribute("aria-pressed", String(isFlipped));
  });
});

const servicePanel = document.querySelector("[data-service-panel]");
const serviceTabs = [...document.querySelectorAll("[data-service-tab]")];
let activeService = 0;

const renderService = (index) => {
  const service = services[index];
  if (!service || !servicePanel) return;

  activeService = index;
  serviceTabs.forEach((tab, tabIndex) => {
    tab.classList.toggle("active", tabIndex === index);
    tab.setAttribute("aria-pressed", String(tabIndex === index));
  });
  const activeTab = serviceTabs[index];
  const tabList = activeTab?.parentElement;
  if (activeTab && tabList && tabList.scrollWidth > tabList.clientWidth) {
    activeTab.scrollIntoView({
      behavior: prefersReducedMotion.matches ? "auto" : "smooth",
      block: "nearest",
      inline: "center",
    });
  }

  servicePanel.classList.remove("updating");
  servicePanel.querySelector(".service-number").textContent = service.number;
  const content = servicePanel.querySelector(".service-number + div");
  const image = servicePanel.querySelector("img");

  content.innerHTML = `
    <h3>${service.title}</h3>
    ${service.copy.map((paragraph) => `<p>${paragraph}</p>`).join("")}
  `;

  if (image) {
    image.src = service.image;
    image.alt = "";
  }

  servicePanel.classList.remove("service-enter");
  void servicePanel.offsetWidth;
  servicePanel.classList.add("service-enter");
};

serviceTabs.forEach((tab, index) => {
  tab.setAttribute("aria-pressed", String(index === 0));
  tab.addEventListener("click", () => renderService(index));
});

const servicesSection = document.querySelector("#services");
if (servicesSection) {
  const viewportsPerService = 1.42;
  servicesSection.style.setProperty("--service-scroll-span", (services.length * viewportsPerService + 1).toFixed(2));
  const smoothstep = (value) => value * value * (3 - 2 * value);

  const updateServiceFromScroll = () => {
    const start = servicesSection.offsetTop;
    const scrollable = Math.max(1, servicesSection.offsetHeight - window.innerHeight);
    const offset = window.scrollY - start;
    const isWithinServices = offset >= 0 && offset <= scrollable;
    servicesSection.classList.toggle("is-service-fixed", isWithinServices);
    servicesSection.classList.toggle("is-service-after", offset > scrollable);

    const entryDistance = Math.min(window.innerHeight * 0.45, 520);
    const exitDistance = Math.min(window.innerHeight * 0.62, 560);
    const entryProgress = smoothstep(clamp((offset + entryDistance) / entryDistance, 0, 1));
    const exitProgress = smoothstep(clamp((scrollable + exitDistance - offset) / exitDistance, 0, 1));
    const stageOpacity = prefersReducedMotion.matches ? 1 : entryProgress * exitProgress;
    const stageY = prefersReducedMotion.matches ? 0 : (1 - entryProgress) * 22 - (1 - exitProgress) * 30;

    servicesSection.style.setProperty("--service-stage-opacity", stageOpacity.toFixed(3));
    servicesSection.style.setProperty("--service-stage-y", `${stageY.toFixed(2)}px`);

    const progress = Math.min(0.999, Math.max(0, offset / scrollable));
    const index = Math.min(services.length - 1, Math.floor(progress * services.length));
    if (index !== activeService) renderService(index);
  };

  window.addEventListener("scroll", updateServiceFromScroll, { passive: true });
  window.addEventListener("resize", updateServiceFromScroll);
  updateServiceFromScroll();
}

const parallaxTargets = [...document.querySelectorAll(".float-shape, .about-shape, .stack-bg")].map((element, index) => ({
  element,
  depth: element.classList.contains("stack-bg") ? -0.045 : element.classList.contains("about-shape") ? -0.035 : -0.018 - (index % 3) * 0.01,
}));

const updateScrollEffects = () => {
  if (prefersReducedMotion.matches) return;

  const viewportCenter = window.scrollY + window.innerHeight * 0.5;
  parallaxTargets.forEach(({ element, depth }) => {
    const elementTop = element.getBoundingClientRect().top + window.scrollY;
    const elementCenter = elementTop + element.offsetHeight * 0.5;
    const drift = clamp((viewportCenter - elementCenter) * depth, -72, 72);
    element.style.setProperty("--parallax-y", `${drift.toFixed(2)}px`);
  });
};

let effectsFrame = 0;
const scheduleScrollEffects = () => {
  if (!scrollFrame) {
    currentScrollY = window.scrollY;
    targetScrollY = window.scrollY;
  }

  if (effectsFrame) return;
  effectsFrame = window.requestAnimationFrame(() => {
    effectsFrame = 0;
    updateScrollEffects();
  });
};

window.addEventListener("scroll", scheduleScrollEffects, { passive: true });
window.addEventListener("resize", () => {
  targetScrollY = window.scrollY;
  currentScrollY = window.scrollY;
  updateScrollEffects();
});
updateScrollEffects();

const motionTargets = [
  ...document.querySelectorAll(
    ".nav-link, .nav-toggle, .big-cta, .small-pill, .stack-card, .service-tab, .project-card, .case-back, .case-visual-strip figure, .related-grid a"
  ),
];

motionTargets.forEach((target) => {
  target.addEventListener("pointermove", (event) => {
    if (!finePointer.matches || prefersReducedMotion.matches) return;

    const rect = target.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const nx = x / rect.width - 0.5;
    const ny = y / rect.height - 0.5;
    const isLargeCard =
      target.classList.contains("stack-card") ||
      target.classList.contains("project-card") ||
      target.closest(".case-visual-strip");
    const strength = isLargeCard ? 7 : 3.2;
    const tiltStrength = isLargeCard ? 3 : 1;

    target.style.setProperty("--pointer-x", `${(x / rect.width) * 100}%`);
    target.style.setProperty("--pointer-y", `${(y / rect.height) * 100}%`);
    target.style.setProperty("--motion-x", `${(nx * strength).toFixed(2)}px`);
    target.style.setProperty("--motion-y", `${(ny * strength).toFixed(2)}px`);
    target.style.setProperty("--tilt-x", `${(-ny * tiltStrength).toFixed(2)}deg`);
    target.style.setProperty("--tilt-y", `${(nx * tiltStrength).toFixed(2)}deg`);
  });

  target.addEventListener("pointerleave", () => {
    target.style.setProperty("--motion-x", "0px");
    target.style.setProperty("--motion-y", "0px");
    target.style.setProperty("--tilt-x", "0deg");
    target.style.setProperty("--tilt-y", "0deg");
    target.style.setProperty("--pointer-x", "50%");
    target.style.setProperty("--pointer-y", "50%");
    target.classList.remove("is-pressed");
  });

  target.addEventListener("pointerdown", () => target.classList.add("is-pressed"));
  target.addEventListener("pointerup", () => target.classList.remove("is-pressed"));
  target.addEventListener("pointercancel", () => target.classList.remove("is-pressed"));
});

const revealTargets = document.querySelectorAll(
  ".statement-stage, .testimonial-frame, .stack-card, .service-shell, .pricing-card, .project-card, .footer-grid, .case-original-title, .case-meta-plain, .case-visual-strip figure, .case-original-copy, .case-source-card, .case-hero-grid, .case-overview, .process-grid article, .case-gallery-grid figure, .case-impact, .related-grid a"
);

revealTargets.forEach((target, index) => {
  target.classList.add("reveal");
  target.style.setProperty("--reveal-delay", `${Math.min((index % 6) * 55, 220)}ms`);
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { rootMargin: "0px 0px 14% 0px", threshold: 0.08 }
);

revealTargets.forEach((target) => revealObserver.observe(target));

/* ===== Case Slider ===== */
document.querySelectorAll('[data-case-slider]').forEach((root) => {
  const track = root.querySelector('.case-track');
  const slides = Array.from(track.querySelectorAll('.case-slide'));
  const prev = root.querySelector('[data-slider-prev]');
  const next = root.querySelector('[data-slider-next]');
  const dotsWrap = root.querySelector('.case-dots');
  if (!track || slides.length === 0) return;

  slides.forEach((_, i) => {
    const b = document.createElement('button');
    b.className = 'case-dot';
    b.type = 'button';
    b.setAttribute('aria-label', `Go to case ${i + 1}`);
    b.addEventListener('click', () => {
      slides[i].scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
    });
    dotsWrap && dotsWrap.appendChild(b);
  });

  const dots = dotsWrap ? Array.from(dotsWrap.querySelectorAll('.case-dot')) : [];

  const update = () => {
    const x = track.scrollLeft;
    const w = track.clientWidth;
    const idx = Math.round(x / w);
    dots.forEach((d, i) => d.setAttribute('aria-current', i === idx ? 'true' : 'false'));
    if (prev) prev.disabled = idx <= 0;
    if (next) next.disabled = idx >= slides.length - 1;
  };

  prev && prev.addEventListener('click', () => {
    track.scrollBy({ left: -track.clientWidth, behavior: 'smooth' });
  });
  next && next.addEventListener('click', () => {
    track.scrollBy({ left: track.clientWidth, behavior: 'smooth' });
  });
  track.addEventListener('scroll', () => requestAnimationFrame(update), { passive: true });
  window.addEventListener('resize', update);
  update();
});
