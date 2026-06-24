const LOCALES = [
  { code: "tc", label: "繁中", htmlLang: "zh-Hant", script: "cjk" },
  { code: "sc", label: "简中", htmlLang: "zh-Hans", script: "cjk" },
  { code: "hx", label: "火星文", htmlLang: "zh-Hant", script: "cjk" },
  { code: "wy", label: "文言文", htmlLang: "lzh", script: "cjk" },
  { code: "en", label: "EN", htmlLang: "en", script: "latin" },
  { code: "yue", label: "粵語", htmlLang: "yue", script: "cjk" },
  { code: "ja", label: "日本語", htmlLang: "ja", script: "cjk" }
];

const BUTTONS = [
  {
    title: "Schale Library",
    subtitle: "夏莱图书馆",
    domain: "www.bakivo.com",
    href: "https://www.bakivo.com",
    axis: "x"
  },
  {
    title: "EXAM KARA",
    subtitle: "卡拉测试",
    domain: "exam.kara251.com",
    href: "https://exam.kara251.com",
    axis: "x"
  },
  {
    title: "Turing Mirror",
    subtitle: "图灵镜",
    domain: "tmc.kara251.com",
    href: "https://tmc.kara251.com",
    axis: "x"
  },
  {
    title: "GitHub",
    subtitle: "Kara251",
    domain: "github.com/Kara251",
    href: "https://github.com/Kara251",
    axis: "x"
  },
  {
    title: "X",
    subtitle: "@karakara0251",
    domain: "x.com/karakara0251",
    href: "https://x.com/karakara0251",
    axis: "x"
  }
];

const SELF_EXCHANGE = {
  siteName: "Kara251 Landing Page",
  siteUrl: "https://www.kara251.com",
  siteDomain: "www.kara251.com",
  summary: "学园 × 青春 × 物语",
  contacts: [
    {
      label: "Email",
      text: "kara@bakivo.com",
      href: "mailto:kara@bakivo.com"
    },
    {
      label: "X",
      text: "@karakara0251",
      href: "https://x.com/karakara0251"
    }
  ]
};

const FRIEND_LINKS = [
  {
    title: "萤火虫之国",
    domain: "forum.hanakos.cc",
    href: "https://forum.hanakos.cc",
    description: "分享想法，探索音乐的ACG网站",
    logo: "https://forum.hanakos.cc/icons/icon-512.png"
  }
];

const COPY = {
  tc: {
    pageTitle: "www.kara251.com",
    metaDescription: "Dr.Huang, aka Kara251",
    gateKicker: "LANGUAGE INDEX",
    gateTitle: "先選擇語言",
    gateSubtitle: "每次進站都會先停在這裡，請先選擇語言再進入首頁。",
    gateNote: "這個首頁不保留 cookie，也不記住語言偏好。",
    heroKicker: "PERSONAL INDEX",
    heroRoute: "www.kara251.com",
    heroLines: ["森羅萬象，", "海納百川。"],
    heroNote: "Dr.Huang, aka Kara251",
    openNewTab: "於新分頁開啟",
    friendSectionTitle: "友情链接",
    friendSelfTitle: "我的交換友鏈資訊",
    friendLinksTitle: "友情链接",
    friendNameLabel: "網站名稱",
    friendUrlLabel: "網站地址",
    friendSummaryLabel: "網站簡介",
    friendLogoLabel: "LOGO",
    friendContactLabel: "聯絡方式",
    friendLogoEmpty: "暫無",
    visitWebsite: "前往網站",
    openFriendLink: "開啟友鏈"
  },
  sc: {
    pageTitle: "www.kara251.com",
    metaDescription: "Dr.Huang, aka Kara251",
    gateKicker: "LANGUAGE INDEX",
    gateTitle: "先选择语言",
    gateSubtitle: "每次进站都会先停在这里，请先选择语言再进入首页。",
    gateNote: "这个首页不保留 cookie，也不记住语言偏好。",
    heroKicker: "PERSONAL INDEX",
    heroRoute: "www.kara251.com",
    heroLines: ["森罗万象，", "海纳百川。"],
    heroNote: "Dr.Huang, aka Kara251",
    openNewTab: "于新标签页打开",
    friendSectionTitle: "友情链接",
    friendSelfTitle: "我的交换友链信息",
    friendLinksTitle: "友情链接",
    friendNameLabel: "网站名称",
    friendUrlLabel: "网站地址",
    friendSummaryLabel: "网站简介",
    friendLogoLabel: "LOGO",
    friendContactLabel: "联系方式",
    friendLogoEmpty: "暂无",
    visitWebsite: "访问网站",
    openFriendLink: "打开友链"
  },
  hx: {
    pageTitle: "www.kara251.com",
    metaDescription: "Dr.Huang, aka Kara251",
    gateKicker: "LANGUAGE INDEX",
    gateTitle: "先揀語言版本",
    gateSubtitle: "每次進站都會先卡喺呢度，揀完語言先正式進首頁。",
    gateNote: "呢個首頁卟留 cookie，也卟記語言偏好。",
    heroKicker: "PERSONAL INDEX",
    heroRoute: "www.kara251.com",
    heroLines: ["森羅萬象，", "海納百川。"],
    heroNote: "Dr.Huang, aka Kara251",
    openNewTab: "新分頁打開",
    friendSectionTitle: "友情鏈接",
    friendSelfTitle: "我的交換友鏈資料",
    friendLinksTitle: "友情鏈接",
    friendNameLabel: "網站名稱",
    friendUrlLabel: "網站地址",
    friendSummaryLabel: "網站簡介",
    friendLogoLabel: "LOGO",
    friendContactLabel: "聯繫方式",
    friendLogoEmpty: "暫無",
    visitWebsite: "去網站",
    openFriendLink: "打開友鏈"
  },
  wy: {
    pageTitle: "www.kara251.com",
    metaDescription: "Dr.Huang, aka Kara251",
    gateKicker: "LANGUAGE INDEX",
    gateTitle: "請先擇其言",
    gateSubtitle: "每次入站，皆先止於此；擇其言，而後入首頁。",
    gateNote: "此頁不留 cookie，亦不記汝前所擇之語。",
    heroKicker: "PERSONAL INDEX",
    heroRoute: "www.kara251.com",
    heroLines: ["森羅萬象，", "海納百川。"],
    heroNote: "Dr.Huang, aka Kara251",
    openNewTab: "新頁開之",
    friendSectionTitle: "友鏈",
    friendSelfTitle: "吾站交換友鏈之資訊",
    friendLinksTitle: "友鏈",
    friendNameLabel: "網站之名",
    friendUrlLabel: "網站之址",
    friendSummaryLabel: "網站之介",
    friendLogoLabel: "LOGO",
    friendContactLabel: "聯絡之法",
    friendLogoEmpty: "暫無",
    visitWebsite: "往其站",
    openFriendLink: "開友鏈"
  },
  en: {
    pageTitle: "www.kara251.com",
    metaDescription: "Dr.Huang, aka Kara251",
    gateKicker: "LANGUAGE INDEX",
    gateTitle: "Choose a language first",
    gateSubtitle: "Every visit stops here first. Pick a language, then enter the site.",
    gateNote: "This page keeps no cookies and does not remember language choices.",
    heroKicker: "PERSONAL INDEX",
    heroRoute: "www.kara251.com",
    heroLines: ["森羅萬象，", "海納百川。"],
    heroNote: "Dr.Huang, aka Kara251",
    openNewTab: "Open in a new tab",
    friendSectionTitle: "Friend Links",
    friendSelfTitle: "My Link Exchange Info",
    friendLinksTitle: "Friend Links",
    friendNameLabel: "Site Name",
    friendUrlLabel: "Site URL",
    friendSummaryLabel: "Description",
    friendLogoLabel: "Logo",
    friendContactLabel: "Contact",
    friendLogoEmpty: "None yet",
    visitWebsite: "Visit site",
    openFriendLink: "Open friend link"
  },
  yue: {
    pageTitle: "www.kara251.com",
    metaDescription: "Dr.Huang, aka Kara251",
    gateKicker: "LANGUAGE INDEX",
    gateTitle: "先揀語言",
    gateSubtitle: "每次入站都會先停喺呢度，揀好語言先入首頁。",
    gateNote: "呢個首頁唔留 cookie，亦都唔會記住語言偏好。",
    heroKicker: "PERSONAL INDEX",
    heroRoute: "www.kara251.com",
    heroLines: ["森羅萬象，", "海納百川。"],
    heroNote: "Dr.Huang, aka Kara251",
    openNewTab: "用新分頁打開",
    friendSectionTitle: "友情連結",
    friendSelfTitle: "我嘅交換友鏈資料",
    friendLinksTitle: "友情連結",
    friendNameLabel: "網站名稱",
    friendUrlLabel: "網站地址",
    friendSummaryLabel: "網站簡介",
    friendLogoLabel: "LOGO",
    friendContactLabel: "聯絡方式",
    friendLogoEmpty: "暫時未有",
    visitWebsite: "前往網站",
    openFriendLink: "打開友鏈"
  },
  ja: {
    pageTitle: "www.kara251.com",
    metaDescription: "Dr.Huang, aka Kara251",
    gateKicker: "LANGUAGE INDEX",
    gateTitle: "先に言語を選んでください",
    gateSubtitle: "このページは毎回ここから始まります。言語を選んでからトップへ入ってください。",
    gateNote: "このページは cookie を保持せず、言語設定も保存しません。",
    heroKicker: "PERSONAL INDEX",
    heroRoute: "www.kara251.com",
    heroLines: ["森羅萬象，", "海納百川。"],
    heroNote: "Dr.Huang, aka Kara251",
    openNewTab: "新しいタブで開く",
    friendSectionTitle: "リンク交換",
    friendSelfTitle: "こちらのリンク交換情報",
    friendLinksTitle: "フレンドリンク",
    friendNameLabel: "サイト名",
    friendUrlLabel: "サイトURL",
    friendSummaryLabel: "サイト紹介",
    friendLogoLabel: "LOGO",
    friendContactLabel: "連絡先",
    friendLogoEmpty: "未設定",
    visitWebsite: "サイトへ",
    openFriendLink: "友鏈を開く"
  }
};

const dom = {
  gate: document.getElementById("lang-gate"),
  gateKicker: document.getElementById("lang-gate-kicker"),
  gateTitle: document.getElementById("lang-gate-title"),
  gateSubtitle: document.getElementById("lang-gate-subtitle"),
  gateNote: document.getElementById("lang-gate-note"),
  gateOptions: document.getElementById("lang-gate-options"),
  languageControl: document.getElementById("language-control"),
  langSelect: document.getElementById("lang-select"),
  heroKicker: document.getElementById("hero-kicker"),
  heroRoute: document.getElementById("hero-route"),
  heroLine1: document.getElementById("hero-line-1"),
  heroLine2: document.getElementById("hero-line-2"),
  heroNote: document.getElementById("hero-note"),
  linkGrid: document.getElementById("link-grid"),
  friendShell: document.getElementById("friend-shell"),
  friendTitle: document.getElementById("friend-title"),
  friendSelfCard: document.getElementById("friend-self-card"),
  friendGrid: document.getElementById("friend-grid"),
  pageDescription: document.querySelector('meta[name="description"]'),
  ogDescription: document.querySelector('meta[property="og:description"]')
};

let currentLocale = "tc";
let typeTimer = 0;
let typeSequenceToken = 0;
let initialSequencePlayed = false;
let friendObserver = null;
let friendCardsActivated = false;
const prefersReducedMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function getCopy(locale = currentLocale) {
  return COPY[locale] || COPY.tc;
}

function segmentText(text) {
  if (window.Intl && typeof window.Intl.Segmenter === "function") {
    return Array.from(
      new window.Intl.Segmenter(undefined, { granularity: "grapheme" }).segment(text),
      (part) => part.segment
    );
  }

  return Array.from(text);
}

async function clearRuntimeState() {
  const cookieEntries = document.cookie ? document.cookie.split(";") : [];

  for (const cookieEntry of cookieEntries) {
    const key = cookieEntry.split("=")[0].trim();

    if (!key) {
      continue;
    }

    document.cookie = `${key}=; Max-Age=0; path=/; SameSite=Lax`;
  }

  try {
    window.localStorage.clear();
    window.sessionStorage.clear();
  } catch {}

  if ("serviceWorker" in navigator && navigator.serviceWorker.getRegistrations) {
    try {
      const registrations = await navigator.serviceWorker.getRegistrations();
      await Promise.all(registrations.map((registration) => registration.unregister()));
    } catch {}
  }

  if ("caches" in window && window.caches.keys) {
    try {
      const keys = await window.caches.keys();
      await Promise.all(keys.map((key) => window.caches.delete(key)));
    } catch {}
  }
}

function buildGate() {
  dom.gateOptions.innerHTML = "";

  for (const locale of LOCALES) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "lang-gate-option";
    button.dataset.locale = locale.code;
    button.innerHTML = `
      <span class="lang-gate-option-label">${locale.label}</span>
      <span class="lang-gate-option-meta">${locale.htmlLang}</span>
    `;
    button.addEventListener("click", () => {
      setLocale(locale.code);
      closeGateAndStart();
    });
    dom.gateOptions.append(button);
  }
}

function buildSelect() {
  dom.langSelect.innerHTML = "";

  for (const locale of LOCALES) {
    const option = document.createElement("option");
    option.value = locale.code;
    option.textContent = locale.label;
    dom.langSelect.append(option);
  }

  dom.langSelect.addEventListener("change", (event) => {
    setLocale(event.target.value);
    playHeroSequence({ replayButtons: false });
  });
}

function buildButtons() {
  dom.linkGrid.innerHTML = "";

  BUTTONS.forEach((buttonConfig, index) => {
    const button = document.createElement("button");
    const copy = getCopy();
    button.type = "button";
    button.className = "portal-button";
    button.dataset.axis = buttonConfig.axis;
    button.dataset.href = buttonConfig.href;
    button.setAttribute(
      "aria-label",
      `${buttonConfig.title} ${buttonConfig.subtitle} ${buttonConfig.domain}. ${copy.openNewTab}.`
    );
    button.innerHTML = `
      <span class="portal-button-reveal"></span>
      <span class="portal-button-line"></span>
      <span class="portal-button-trail"></span>
      <span class="portal-button-copy">
        <span class="portal-button-title">${buttonConfig.title}</span>
        <span class="portal-button-subtitle">${buttonConfig.subtitle}</span>
        <span class="portal-button-domain">${buttonConfig.domain}</span>
      </span>
    `;
    button.addEventListener("click", () => openButtonTarget(button));
    button.style.setProperty("--boot-delay", `${index * 110}ms`);
    dom.linkGrid.append(button);
  });
}

function buildFriendSection() {
  const copy = getCopy();

  dom.friendTitle.textContent = copy.friendSectionTitle;
  dom.friendShell.setAttribute("aria-label", copy.friendSectionTitle);
  dom.friendGrid.setAttribute("aria-label", copy.friendLinksTitle);

  dom.friendSelfCard.className = "friend-card portal-button";
  dom.friendSelfCard.dataset.axis = "x";
  dom.friendSelfCard.removeAttribute("data-href");
  dom.friendSelfCard.innerHTML = `
    <span class="portal-button-reveal"></span>
    <span class="portal-button-line"></span>
    <span class="portal-button-trail"></span>
    <div class="portal-button-copy friend-card-copy">
      <div class="friend-card-header">
        <div>
          <p class="friend-card-kicker">${copy.friendSelfTitle}</p>
          <h3 class="friend-card-name">${SELF_EXCHANGE.siteName}</h3>
        </div>
        <div class="friend-logo-box" aria-label="${copy.friendLogoLabel}: ${copy.friendLogoEmpty}">
          <span class="friend-logo-placeholder">${copy.friendLogoEmpty}</span>
        </div>
      </div>
      <div class="friend-info-grid">
        <div class="friend-info-item">
          <span class="friend-info-label">${copy.friendNameLabel}</span>
          <span class="friend-info-value">${SELF_EXCHANGE.siteName}</span>
        </div>
        <div class="friend-info-item">
          <span class="friend-info-label">${copy.friendUrlLabel}</span>
          <a class="friend-inline-link" href="${SELF_EXCHANGE.siteUrl}" target="_blank" rel="noopener noreferrer">${SELF_EXCHANGE.siteDomain}</a>
        </div>
        <div class="friend-info-item">
          <span class="friend-info-label">${copy.friendSummaryLabel}</span>
          <span class="friend-info-value">${SELF_EXCHANGE.summary}</span>
        </div>
        <div class="friend-info-item">
          <span class="friend-info-label">${copy.friendLogoLabel}</span>
          <span class="friend-info-value">${copy.friendLogoEmpty}</span>
        </div>
      </div>
      <div class="friend-contact-block">
        <span class="friend-info-label">${copy.friendContactLabel}</span>
        <div class="friend-action-row">
          <a class="friend-action-link" href="${SELF_EXCHANGE.siteUrl}" target="_blank" rel="noopener noreferrer">${copy.visitWebsite}</a>
          <a class="friend-action-link" href="${SELF_EXCHANGE.contacts[0].href}">${SELF_EXCHANGE.contacts[0].label} = ${SELF_EXCHANGE.contacts[0].text}</a>
          <a class="friend-action-link" href="${SELF_EXCHANGE.contacts[1].href}" target="_blank" rel="noopener noreferrer">${SELF_EXCHANGE.contacts[1].label}${SELF_EXCHANGE.contacts[1].text}</a>
        </div>
      </div>
    </div>
  `;

  dom.friendGrid.innerHTML = "";

  FRIEND_LINKS.forEach((friendLink) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "friend-card portal-button friend-link-card";
    button.dataset.axis = "x";
    button.dataset.href = friendLink.href;
    button.setAttribute(
      "aria-label",
      `${friendLink.title} ${friendLink.domain}. ${friendLink.description}. ${copy.openFriendLink}.`
    );
    button.innerHTML = `
      <span class="portal-button-reveal"></span>
      <span class="portal-button-line"></span>
      <span class="portal-button-trail"></span>
      <span class="portal-button-copy friend-card-copy">
        <span class="friend-link-logo-shell">
          <img
            class="friend-link-logo"
            src="${friendLink.logo}"
            alt="${friendLink.title} logo"
            loading="lazy"
            decoding="async"
          >
        </span>
        <span class="friend-link-body">
          <span class="friend-card-kicker">${copy.friendLinksTitle}</span>
          <span class="friend-card-name">${friendLink.title}</span>
          <span class="friend-card-domain">${friendLink.domain}</span>
          <span class="friend-card-description">${friendLink.description}</span>
        </span>
      </span>
    `;
    button.addEventListener("click", () => openButtonTarget(button));
    dom.friendGrid.append(button);
  });

  if (friendCardsActivated || prefersReducedMotion) {
    setFriendCardsFinalState();
  } else {
    setupFriendObserver();
  }
}

function refreshButtonLabels() {
  const copy = getCopy();

  dom.linkGrid.querySelectorAll(".portal-button").forEach((button, index) => {
    const config = BUTTONS[index];

    if (!config) {
      return;
    }

    button.setAttribute(
      "aria-label",
      `${config.title} ${config.subtitle} ${config.domain}. ${copy.openNewTab}.`
    );
  });
}

function setLocale(locale) {
  currentLocale = COPY[locale] ? locale : "tc";
  const localeConfig = LOCALES.find((item) => item.code === currentLocale) || LOCALES[0];
  const copy = getCopy();

  document.documentElement.lang = localeConfig.htmlLang;
  document.title = copy.pageTitle;

  if (dom.pageDescription) {
    dom.pageDescription.setAttribute("content", copy.metaDescription);
  }

  if (dom.ogDescription) {
    dom.ogDescription.setAttribute("content", copy.metaDescription);
  }

  dom.gateKicker.textContent = copy.gateKicker;
  dom.gateTitle.textContent = copy.gateTitle;
  dom.gateSubtitle.textContent = copy.gateSubtitle;
  dom.gateNote.textContent = copy.gateNote;
  dom.heroKicker.textContent = copy.heroKicker;
  dom.heroRoute.textContent = copy.heroRoute;
  dom.heroNote.textContent = copy.heroNote;
  dom.langSelect.value = currentLocale;
  refreshButtonLabels();
  buildFriendSection();
}

function clearTypeTimers() {
  window.clearTimeout(typeTimer);
  typeTimer = 0;
}

function resetHeroLines() {
  dom.heroLine1.textContent = "";
  dom.heroLine2.textContent = "";
  dom.heroLine1.classList.remove("is-active");
  dom.heroLine2.classList.remove("is-active");
  dom.heroNote.classList.remove("is-visible");
}

function typeLine(node, text, speed, token) {
  const segments = segmentText(text);
  let index = 0;

  node.textContent = "";
  node.classList.add("is-active");

  return new Promise((resolve) => {
    function step() {
      if (token !== typeSequenceToken) {
        resolve(false);
        return;
      }

      node.textContent = segments.slice(0, index + 1).join("");
      index += 1;

      if (index >= segments.length) {
        node.classList.remove("is-active");
        resolve(true);
        return;
      }

      typeTimer = window.setTimeout(step, speed);
    }

    step();
  });
}

function setButtonsFinalState() {
  dom.linkGrid.classList.add("is-visible");

  dom.linkGrid.querySelectorAll(".portal-button").forEach((button) => {
    button.classList.remove("is-booting");
    button.classList.add("is-armed");
  });
}

function setFriendCardsFinalState() {
  dom.friendShell.classList.add("is-visible");

  dom.friendShell.querySelectorAll(".friend-card").forEach((card) => {
    card.classList.remove("is-booting");
    card.classList.add("is-armed");
  });
}

function bootButtons() {
  dom.linkGrid.classList.add("is-visible");

  dom.linkGrid.querySelectorAll(".portal-button").forEach((button, index) => {
    const delay = index * 140;

    button.classList.remove("is-armed", "is-leaving");
    window.setTimeout(() => {
      button.classList.add("is-booting");
    }, delay);

    window.setTimeout(() => {
      button.classList.remove("is-booting");
      button.classList.add("is-armed");
    }, delay + 1550);
  });
}

function bootFriendCards() {
  if (friendCardsActivated) {
    return;
  }

  friendCardsActivated = true;
  dom.friendShell.classList.add("is-visible");

  dom.friendShell.querySelectorAll(".friend-card").forEach((card, index) => {
    const delay = index * 150;

    card.classList.remove("is-armed", "is-leaving");
    window.setTimeout(() => {
      card.classList.add("is-booting");
    }, delay);

    window.setTimeout(() => {
      card.classList.remove("is-booting");
      card.classList.add("is-armed");
    }, delay + 1550);
  });
}

function setupFriendObserver() {
  if (friendObserver) {
    friendObserver.disconnect();
  }

  if (prefersReducedMotion) {
    setFriendCardsFinalState();
    friendCardsActivated = true;
    return;
  }

  friendObserver = new IntersectionObserver(
    (entries) => {
      if (!entries.some((entry) => entry.isIntersecting)) {
        return;
      }

      bootFriendCards();
      friendObserver.disconnect();
    },
    {
      threshold: 0.26,
      rootMargin: "0px 0px -12% 0px"
    }
  );

  friendObserver.observe(dom.friendShell);
}

async function playHeroSequence({ replayButtons }) {
  const copy = getCopy();

  typeSequenceToken += 1;
  clearTypeTimers();
  resetHeroLines();

  if (prefersReducedMotion) {
    dom.heroLine1.textContent = copy.heroLines[0];
    dom.heroLine2.textContent = copy.heroLines[1];
    dom.heroNote.classList.add("is-visible");

    if (replayButtons) {
      setButtonsFinalState();
    }

    return;
  }

  const token = typeSequenceToken;
  const firstDone = await typeLine(dom.heroLine1, copy.heroLines[0], 96, token);

  if (!firstDone) {
    return;
  }

  typeTimer = window.setTimeout(async () => {
    const secondDone = await typeLine(dom.heroLine2, copy.heroLines[1], 96, token);

    if (!secondDone || token !== typeSequenceToken) {
      return;
    }

    dom.heroNote.classList.add("is-visible");

    if (replayButtons) {
      window.setTimeout(() => bootButtons(), 170);
    }
  }, 160);
}

function closeGateAndStart() {
  document.body.classList.remove("is-gate-open");
  document.body.classList.add("is-started");
  dom.gate.classList.add("is-hidden");
  dom.languageControl.hidden = false;

  if (!friendCardsActivated) {
    setupFriendObserver();
  }

  if (!initialSequencePlayed) {
    initialSequencePlayed = true;
    playHeroSequence({ replayButtons: true });
  } else {
    playHeroSequence({ replayButtons: false });
  }
}

function openButtonTarget(button) {
  const href = button.dataset.href;

  if (!href) {
    return;
  }

  button.classList.add("is-leaving");

  window.setTimeout(() => {
    const newTab = window.open(href, "_blank", "noopener,noreferrer");

    if (newTab) {
      newTab.opener = null;
    }

    button.classList.remove("is-leaving");
  }, prefersReducedMotion ? 20 : 150);
}

async function init() {
  document.body.classList.add("is-gate-open");

  buildGate();
  buildSelect();
  buildButtons();
  setLocale("tc");
  clearRuntimeState();
}

init();
