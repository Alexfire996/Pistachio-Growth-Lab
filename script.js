const revealElements = document.querySelectorAll(".reveal");
const translatableElements = document.querySelectorAll("[data-i18n]");
const languageButtons = document.querySelectorAll("[data-lang]");
const siteHeader = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelectorAll(".nav-links a");

const copy = {
  en: {},
  zh: {
    navAudience: "适合谁",
    navPhilosophy: "理念",
    navDiagnosis: "诊断",
    navOffers: "服务",
    navEdge: "优势",
    navBudget: "预算",
    navStart: "开始",
    heroKicker: "Pistachios Growth Lab",
    heroTitle: "以扎实节奏增长",
    heroText: "我们帮助年轻品牌更勇敢地测试、更清晰地表达，并在投入更大合作前找到下一步增长动作",
    heroPrimary: "预约 30 分钟电话",
    heroSecondary: "了解流程",
    growthCardLabel: "本阶段",
    growthCardTitle: "30 分钟诊断",
    growthCardText: "定位、渠道、预算与下一步",
    audienceKicker: "适合谁",
    audienceTitle: "适合谁",
    audience1Title: "产品已经有基础的创始人",
    audience1Text: "你的产品是真实有价值的，但信息表达、渠道选择和下一步增长动作还需要更清晰",
    audience2Title: "准备行动的小团队",
    audience2Text: "你需要创作者营销、广告、SEO/AEO 和顾问支持，但暂时不想组建庞大团队",
    audience3Title: "进入新阶段的品牌",
    audience3Text: "你正在发布、重新定位，或希望把早期 traction 变成可重复的增长节奏",
    philosophyKicker: "我们的理念",
    philosophyTitle: "增长应该聚焦、有用，也要有人味",
    philosophyText: "Pistachios Growth Lab 帮助品牌从产品定位、创作者需求、付费获客、搜索、AI 答案可见度、用户上手、激活和实用顾问支持中找到增长；增长不只是渠道问题，也是产品、信息表达和客户旅程问题",
    diagnosisKicker: "我们如何帮助",
    diagnosisTitle: "预约 30 分钟增长诊断",
    diagnosisText1: "我们不期待一个团队刚来到网站就直接购买大型服务包；第一步是一次聚焦的付费咨询，我们会理解你的产品、当前渠道、预算和最大的增长阻塞点",
    diagnosisText2: "通话结束后，你应该更清楚优先修复什么、哪些渠道现实可行，以及是否存在进一步合作的路径",
    diagnosisStep1Title: "带上真实情况",
    diagnosisStep1Text: "产品、漏斗、当前渠道、预算、团队执行能力，以及你现在最难判断的增长问题",
    diagnosisStep2Title: "获得更清晰判断",
    diagnosisStep2Text: "我们会判断阻塞点来自定位、上手、激活、渠道策略、预算，还是执行方式",
    diagnosisStep3Title: "决定下一步",
    diagnosisStep3Text: "先从付费咨询开始；如果匹配度高，我们可以进一步讨论顾问合作或长期增长项目",
    offersKicker: "我们提供什么",
    offersTitle: "为想建立增长势能的品牌提供直接、清晰的增长支持",
    offer1Title: "Influencer Marketing",
    offer1Text: "找到合适创作者，设计合作结构，管理触达，并把合作转化为有用内容",
    offer2Title: "Ads",
    offer2Text: "规划、撰写、上线并优化适合你受众的付费广告活动",
    offer3Title: "SEO/AEO",
    offer3Text: "通过更清晰的页面、更强的实体信号和实用搜索覆盖，提升自然搜索与 AI 答案可见度",
    offer4Title: "Advisory",
    offer4Text: "为筛选后的团队提供公司级增长顾问支持，覆盖产品、漏斗、渠道和决策",
    edgeKicker: "我们的优势",
    edgeTitle: "我们不只做获客",
    edge1Title: "全漏斗增长视角",
    edge1Text: "产品定位、用户上手和激活都会影响增长；我们不会只停留在流量层面",
    edge2Title: "AI 与科技公司的实战经验",
    edge2Text: "我们在领先 AI 与科技公司中做过创作者营销、广告、SEO/AEO 和顾问相关增长工作",
    edge3Title: "尊重预算现实",
    edge3Text: "我们会根据预算、产品阶段和执行能力帮助团队选择渠道，让每个渠道都有足够空间跑出有效信号",
    budgetKicker: "预算门槛",
    budgetTitle: "适合预算明确的团队",
    budget1Title: "Influencer marketing",
    budget1Text: "更适合能为创作者营销单独准备至少 <strong>$30,000 USD for influencer marketing</strong> 的公司",
    budget2Title: "Ads",
    budget2Text: "付费广告建议至少准备 <strong>$30,000 USD for ads</strong>，让测试、创意和优化有足够空间",
    budget3Title: "SEO/AEO",
    budget3Text: "标准项目通常在 <strong>$2,000–$10,000 USD</strong> 之间，取决于范围、页面和答案覆盖需求",
    budget4Title: "Advisory",
    budget4Text: "筛选后的公司顾问服务从 <strong>$400 USD per hour</strong> 起；长期顾问关系按具体情况评估",
    contactKicker: "下一步",
    contactTitle: "预约 30 分钟增长诊断",
    contactText: "付费咨询；带上你的产品、增长情况、预算和最大阻塞点；我们会帮助你判断优先修复什么，以及是否适合进一步合作",
    contactButton: "预约 30 分钟电话",
    footerBrand: "Pistachios Growth Lab",
    footerText: "为勇敢的年轻品牌提供扎实、健康的增长支持",
  },
};

for (const element of translatableElements) {
  copy.en[element.dataset.i18n] = element.innerHTML;
}

const setLanguage = (language) => {
  const dictionary = copy[language] || copy.en;

  for (const element of translatableElements) {
    const value = dictionary[element.dataset.i18n];
    if (value) {
      element.innerHTML = value;
    }
  }

  document.documentElement.lang = language === "zh" ? "zh-Hans" : "en";
  document.documentElement.dataset.language = language;

  for (const button of languageButtons) {
    const isActive = button.dataset.lang === language;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  }
};

const setMenuOpen = (isOpen) => {
  if (!siteHeader || !menuToggle) {
    return;
  }

  siteHeader.classList.toggle("is-menu-open", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
};

menuToggle?.addEventListener("click", () => {
  setMenuOpen(!siteHeader?.classList.contains("is-menu-open"));
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => setMenuOpen(false));
});

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.lang);
    setMenuOpen(false);
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setMenuOpen(false);
  }
});

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.18 }
  );

  revealElements.forEach((element) => observer.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("is-visible"));
}
