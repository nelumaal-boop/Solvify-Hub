/**
 * SolvifyHub — Universal Bilingual Knowledge & Solution Engine
 * Complete dual-language support: English & Hindi (हिन्दी)
 * Real-time bilingual search, interactive step completion, and markdown export.
 */

(function () {
  'use strict';

  // --- Translation Dictionary for UI Strings ---
  const I18N = {
    en: {
      siteTagline: "Pro Solutions",
      savedBtn: "Saved",
      addBtn: "Add Solution",
      heroPill: "100% Tested & Verified Universal Solutions",
      heroTitle1: "Every Hard Human Problem,",
      heroTitle2: "Engineered With Exhaustive Detail.",
      heroSubtitle: "Evidence-based protocols for anxiety, insomnia, debt, chronic pain, relationship friction, and algorithmic trading systems.",
      searchPlaceholder: "Search any human problem or error (e.g. 'panic attack', 'अनिद्रा', 'debt', 'कमर दर्द', 'gold bot', 'sleep')...",
      trending: "Trending:",
      stat1Title: "100% Actionable",
      stat1Desc: "Exact protocols & zero fluff",
      stat2Title: "Interactive Steps",
      stat2Desc: "Checklist progress tracking",
      stat3Title: "Forensic Fixes",
      stat3Desc: "Root causes & verified solutions",
      stat4Title: "Export Ready",
      stat4Desc: "Markdown & PDF export",
      diffLabel: "Difficulty:",
      sortLabel: "Sort by:",
      allDiff: "All Difficulties",
      diffBeginner: "Beginner / Immediate",
      diffIntermediate: "Intermediate",
      diffAdvanced: "Advanced",
      sortPopular: "Most Popular",
      sortRated: "Highest Success Rate",
      sortQuickest: "Quickest (< 15 mins)",
      sortNewest: "Most Upvoted",
      viewSolution: "View Solution",
      backToSolutions: "Back to all solutions",
      overviewScope: "Overview & Scope",
      prereqTitle: "Prerequisites & Environment Requirements",
      prereqDesc: "Verify readiness before executing:",
      stepsTitle: "Step-by-Step Implementation Instructions",
      stepComplete: "Mark Complete",
      stepDone: "Step Completed",
      troubleTitle: "Troubleshooting & Common Pitfalls",
      troubleDesc: "Click any issue to view root cause and verified resolution:",
      verifyTitle: "Verification & Health Check",
      verifyDesc: "Confirm your progress or test result:",
      faqTitle: "Frequently Asked Questions",
      feedbackTitle: "Was this solution helpful?",
      feedbackDesc: "Your feedback improves our verified technical and life guides.",
      feedbackYes: "Yes, it helped! 👍",
      feedbackNo: "Needs improvement 👎",
      feedbackDone: "Thank you for your feedback!",
      bookmarkBtn: "Bookmark Solution",
      savedBookmarkBtn: "Saved to Bookmarks",
      downloadMd: "Download .md",
      printPdf: "Print / PDF",
      shareLink: "Share Link",
      noResults: "No exact solutions found",
      noResultsDesc: "Try adjusting your search keywords or select a different category.",
      clearFilters: "Clear All Filters",
      minsToImplement: "mins to implement",
      verified: "Verified",
      successRate: "Success Rate",
      footerAll: "All Solutions",
      footerSaved: "Saved Bookmarks",
      footerAbout: "About Us",
      footerContact: "Contact Us",
      footerDisclaimer: "Legal Disclaimer",
      footerLang: "Language: English / हिन्दी",
      footerDisclaimerTitle: "Essential Legal, Clinical & Safety Notice",
      footerDisclaimerText: "SolvifyHub publishes evidence-based technical protocols, mechanical diagnostics, and educational workflows. Solutions are not a substitute for professional medical care, licensed clinical therapy, certified financial advisory, or legal counsel. For medical or mental crises, call emergency services immediately (112 / 14416 in India, 988 in USA).",
      footerDisclaimerReadMore: "Read Full Legal Disclaimer →",
      footerTagline: "Engineered with exact instructions in English and हिन्दी for the hardest challenges humans encounter.",
      aboutModalTitle: "About SolvifyHub",
      disclaimerModalTitle: "Legal & Safety Disclaimer",
      contactModalTitle: "Contact Us",
      copyEmailBtn: "Copy Email"
    },
    hi: {
      siteTagline: "सटीक समाधान",
      savedBtn: "सहेजे गए",
      addBtn: "समाधान जोड़ें",
      heroPill: "100% परीक्षित और वैज्ञानिक रूप से प्रमाणित समाधान",
      heroTitle1: "मानव जीवन की हर कठिन समस्या,",
      heroTitle2: "सटीक और विस्तृत समाधान के साथ।",
      heroSubtitle: "पैनिक अटैक, अनिद्रा, गंभीर कर्ज, कमर दर्द, मानसिक भटकाव, जहरीले रिश्तों और ट्रेडिंग से जुड़े सत्यापित समाधान।",
      searchPlaceholder: "किसी भी समस्या या बीमारी को खोजें (उदा. 'पैनिक अटैक', 'अनिद्रा', 'कमर दर्द', 'कर्ज', 'सोना', 'depression', 'sleep')...",
      trending: "लोकप्रिय विषय:",
      stat1Title: "100% व्यावहारिक",
      stat1Desc: "सटीक वैज्ञानिक नियम, शून्य दिखावा",
      stat2Title: "इंटरैक्टिव स्टेप्स",
      stat2Desc: "कदम-दर-कदम चेकलिस्ट ट्रैकिंग",
      stat3Title: "जड़ से इलाज",
      stat3Desc: "मूल कारण और प्रमाणित समाधान",
      stat4Title: "डाउनलोड सुविधा",
      stat4Desc: "मार्कडाउन और PDF में सेव करें",
      diffLabel: "कठिनाई:",
      sortLabel: "क्रमबद्ध करें:",
      allDiff: "सभी स्तर",
      diffBeginner: "सरल / शुरुआती",
      diffIntermediate: "मध्यम",
      diffAdvanced: "उन्नत / गहरा",
      sortPopular: "सर्वाधिक लोकप्रिय",
      sortRated: "उच्चतम सफलता दर",
      sortQuickest: "सबसे तेज (< 15 मिनट)",
      sortNewest: "सबसे ज्यादा पसंद किए गए",
      viewSolution: "पूरा समाधान देखें",
      backToSolutions: "सभी समाधानों पर वापस जाएं",
      overviewScope: "अवलोकन और कार्यक्षेत्र",
      prereqTitle: "पूर्व-शर्तें और तैयारी",
      prereqDesc: "शुरू करने से पहले अपनी तैयारी की जांच करें:",
      stepsTitle: "कदम-दर-कदम संपूर्ण समाधान",
      stepComplete: "पूर्ण चिह्नित करें",
      stepDone: "चरण पूरा हुआ ✓",
      troubleTitle: "समस्या निवारण और सावधानियां",
      troubleDesc: "मूल कारण और प्रमाणित समाधान देखने के लिए किसी भी बिंदु पर क्लिक करें:",
      verifyTitle: "सफलता की पुष्टि (Verification)",
      verifyDesc: "अपने सुधार या परिणाम की पुष्टि करें:",
      faqTitle: "अक्सर पूछे जाने वाले सवाल (FAQs)",
      feedbackTitle: "क्या यह समाधान आपके काम आया?",
      feedbackDesc: "आपकी प्रतिक्रिया हमारे जीवन और तकनीकी गाइड को और बेहतर बनाती है।",
      feedbackYes: "हाँ, बहुत मदद मिली! 👍",
      feedbackNo: "सुधार की आवश्यकता है 👎",
      feedbackDone: "प्रतिक्रिया देने के लिए आपका धन्यवाद!",
      bookmarkBtn: "समाधान सहेजें (Bookmark)",
      savedBookmarkBtn: "सहेजा गया (Bookmarked)",
      downloadMd: "डाउनलोड .md",
      printPdf: "प्रिंट / PDF",
      shareLink: "लिंक साझा करें",
      noResults: "कोई सटीक समाधान नहीं मिला",
      noResultsDesc: "कृपया अलग शब्द लिखकर खोजें या अन्य श्रेणी का चयन करें।",
      clearFilters: "सभी फ़िल्टर हटाएं",
      minsToImplement: "मिनट की प्रक्रिया",
      verified: "प्रमाणित",
      successRate: "सफलता दर",
      footerAll: "सभी समाधान",
      footerSaved: "सहेजे गए समाधान",
      footerAbout: "हमारे बारे में",
      footerContact: "संपर्क करें",
      footerDisclaimer: "कानूनी अस्वीकरण (Disclaimer)",
      footerLang: "भाषा: English / हिन्दी",
      footerDisclaimerTitle: "महत्वपूर्ण विधिक, नैदानिक व सुरक्षा अस्वीकरण",
      footerDisclaimerText: "SolvifyHub पर प्रकाशित सभी गाइड, कोड व निर्देश केवल शैक्षणिक व तकनीकी संदर्भ के लिए हैं। यह किसी योग्य डॉक्टर, मनोचिकित्सक, सेबी पंजीकृत वित्तीय सलाहकार या वकील की सलाह का विकल्प नहीं है। किसी भी चिकित्सीय या मानसिक आपात स्थिति में तुरंत आपातकालीन हेल्पलाइन (112 / टेली-मानस 14416) पर संपर्क करें।",
      footerDisclaimerReadMore: "संपूर्ण कानूनी डिस्क्लेमर पढ़ें →",
      footerTagline: "मानव जीवन की सबसे कठिन चुनौतियों के लिए अंग्रेजी और हिन्दी में सटीक वैज्ञानिक समाधान।",
      aboutModalTitle: "SolvifyHub के बारे में",
      disclaimerModalTitle: "विधिक, नैदानिक व सुरक्षा अस्वीकरण",
      contactModalTitle: "संपर्क करें (Contact Us)",
      copyEmailBtn: "ईमेल कॉपी करें"
    }
  };

  // --- State Initialization ---
  const state = {
    allGuides: [],
    filteredGuides: [],
    currentGuide: null,
    currentGuideLang: localStorage.getItem('howto_lang') || 'en',
    lang: localStorage.getItem('howto_lang') || 'en', // 'en' or 'hi'
    activeCategory: 'all',
    searchQuery: '',
    difficultyFilter: 'all',
    sortBy: 'popular',
    viewMode: 'grid',
    theme: 'light', // Default to clean white/light theme
    bookmarks: JSON.parse(localStorage.getItem('howto_bookmarks') || '[]'),
    completedSteps: JSON.parse(localStorage.getItem('howto_completed_steps') || '{}'),
    customGuides: JSON.parse(localStorage.getItem('howto_custom_guides') || '[]'),
    feedbackMap: JSON.parse(localStorage.getItem('howto_feedback') || '{}')
  };

  // --- DOM Element References ---
  const elements = {
    body: document.body,
    themeToggleBtn: document.getElementById('themeToggleBtn'),
    langToggleBtn: document.getElementById('langToggleBtn'),
    searchInput: document.getElementById('searchInput'),
    searchClearBtn: document.getElementById('searchClearBtn'),
    categoryTabsContainer: document.getElementById('categoryTabsContainer'),
    difficultySelect: document.getElementById('difficultySelect'),
    sortSelect: document.getElementById('sortSelect'),
    viewGridBtn: document.getElementById('viewGridBtn'),
    viewListBtn: document.getElementById('viewListBtn'),
    solutionsGrid: document.getElementById('solutionsGrid'),
    activeResultsCount: document.getElementById('activeResultsCount'),
    bookmarkCountBadge: document.getElementById('bookmarkCountBadge'),
    headerBookmarksBtn: document.getElementById('headerBookmarksBtn'),
    
    // Detail View
    detailViewOverlay: document.getElementById('detailViewOverlay'),
    detailViewContainer: document.getElementById('detailViewContainer'),
    detailProgressBar: document.getElementById('detailProgressBar'),
    closeDetailBtn: document.getElementById('closeDetailBtn'),
    detailCategoryBadge: document.getElementById('detailCategoryBadge'),
    detailTitle: document.getElementById('detailTitle'),
    detailDifficulty: document.getElementById('detailDifficulty'),
    detailTime: document.getElementById('detailTime'),
    detailVerified: document.getElementById('detailVerified'),
    detailSuccessRate: document.getElementById('detailSuccessRate'),
    detailSummaryText: document.getElementById('detailSummaryText'),
    detailPrereqList: document.getElementById('detailPrereqList'),
    detailStepsList: document.getElementById('detailStepsList'),
    detailTroubleshootList: document.getElementById('detailTroubleshootList'),
    detailVerificationBox: document.getElementById('detailVerificationBox'),
    detailFaqList: document.getElementById('detailFaqList'),
    detailBookmarkBtn: document.getElementById('detailBookmarkBtn'),
    detailLangSwitchEn: document.getElementById('detailLangSwitchEn'),
    detailLangSwitchHi: document.getElementById('detailLangSwitchHi'),
    btnDownloadMd: document.getElementById('btnDownloadMd'),
    btnPrintPdf: document.getElementById('btnPrintPdf'),
    btnShareLink: document.getElementById('btnShareLink'),
    feedbackYesBtn: document.getElementById('feedbackYesBtn'),
    feedbackNoBtn: document.getElementById('feedbackNoBtn'),
    feedbackThanksMsg: document.getElementById('feedbackThanksMsg'),
    
    // Toast Container
    toastContainer: document.getElementById('toastContainer'),
    
    // About Us Modal
    aboutModal: document.getElementById('aboutModal'),
    footerAboutLink: document.getElementById('footerAboutLink'),
    closeAboutBtn: document.getElementById('closeAboutBtn'),
    aboutModalBody: document.getElementById('aboutModalBody'),
    
    // Legal & Safety Disclaimer Modal
    disclaimerModal: document.getElementById('disclaimerModal'),
    footerDisclaimerLink: document.getElementById('footerDisclaimerLink'),
    closeDisclaimerBtn: document.getElementById('closeDisclaimerBtn'),
    disclaimerModalBody: document.getElementById('disclaimerModalBody'),

    // Contact Us Modal & Link
    contactModal: document.getElementById('contactModal'),
    footerContactLink: document.getElementById('footerContactLink'),
    closeContactBtn: document.getElementById('closeContactBtn'),
    btnCopyContactEmail: document.getElementById('btnCopyContactEmail')
  };

  // --- Category SVG Fallback Generator (guarantees every card always has an image) ---
  function getCategoryFallback(cat) {
    const map = {
      hardware: { g1: '#1e1b4b', g2: '#3b82f6', icon: '⚡ Hardware & Engineering' },
      software: { g1: '#082f49', g2: '#0284c7', icon: '💻 Software, OS & Tech' },
      creator: { g1: '#4c0519', g2: '#e11d48', icon: '🎬 Creator, Video & Ads' },
      lifestyle: { g1: '#451a03', g2: '#d97706', icon: '🎯 Life, Study & Productivity' },
      health: { g1: '#022c22', g2: '#10b981', icon: '🩺 Health & Clinical Science' },
      psychology: { g1: '#2e1065', g2: '#8b5cf6', icon: '🧠 Psychology & Mind' },
      finance: { g1: '#451a03', g2: '#f59e0b', icon: '🛡️ Finance & Wealth Security' },
      trading: { g1: '#0f172a', g2: '#06b6d4', icon: '📈 Algorithmic Trading & Quant' },
      relationships: { g1: '#4c0519', g2: '#f43f5e', icon: '💬 Relationships & Life' },
      devops: { g1: '#0f172a', g2: '#6366f1', icon: '☁️ Cloud & DevOps Infrastructure' }
    };
    const c = map[cat] || { g1: '#0f172a', g2: '#3b82f6', icon: '💡 SolvifyHub Solution' };
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="800" height="450">
      <defs>
        <linearGradient id="g_${cat || 'def'}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${c.g1}"/>
          <stop offset="100%" stop-color="${c.g2}"/>
        </linearGradient>
        <pattern id="grid_${cat || 'def'}" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.07)" stroke-width="1"/>
        </pattern>
      </defs>
      <rect width="800" height="450" fill="url(#g_${cat || 'def'})"/>
      <rect width="800" height="450" fill="url(#grid_${cat || 'def'})"/>
      <circle cx="400" cy="225" r="90" fill="rgba(255,255,255,0.08)"/>
      <text x="400" y="235" font-family="-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif" font-size="28" font-weight="700" fill="#ffffff" text-anchor="middle" letter-spacing="1">${c.icon}</text>
    </svg>`;
    return 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
  }
  window.getCategoryFallback = getCategoryFallback;

  // --- Initial Setup ---
  function init() {
    // Enforce crisp white background as requested
    if (!localStorage.getItem('howto_theme_white_v1')) {
      localStorage.setItem('howto_theme', 'light');
      localStorage.setItem('howto_theme_white_v1', '1');
    }
    const savedTheme = localStorage.getItem('howto_theme') || 'light';
    applyTheme(savedTheme);
    applyLanguage(state.lang);

    const builtIn = window.HOWTO_GUIDES || [];
    state.allGuides = [...builtIn, ...state.customGuides];

    updateBookmarkBadge();
    bindEvents();
    renderCategoryTabs();
    applyFilters();

    // Check URL hash for direct guide routing
    if (window.location.hash) {
      const targetId = window.location.hash.substring(1);
      const match = state.allGuides.find(g => g.id === targetId);
      if (match) {
        setTimeout(() => openGuideDetail(match), 100);
      }
    }
  }

  // --- Theme Controller ---
  function applyTheme(theme) {
    state.theme = theme;
    localStorage.setItem('howto_theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
    if (elements.themeToggleBtn) {
      elements.themeToggleBtn.innerHTML = theme === 'dark' 
        ? '<i class="fas fa-sun"></i>' 
        : '<i class="fas fa-moon"></i>';
    }
  }

  function toggleTheme() {
    applyTheme(state.theme === 'dark' ? 'light' : 'dark');
    showToast(`Switched to ${state.theme} mode`);
  }

  // --- Language Controller ---
  function applyLanguage(lang) {
    state.lang = lang;
    state.currentGuideLang = lang;
    localStorage.setItem('howto_lang', lang);

    if (elements.langToggleBtn) {
      elements.langToggleBtn.innerHTML = lang === 'en'
        ? '<i class="fas fa-language"></i> हिन्दी'
        : '<i class="fas fa-language"></i> English';
    }

    // Translate static UI elements
    const t = I18N[lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (t[key]) el.textContent = t[key];
    });

    if (elements.searchInput) {
      elements.searchInput.placeholder = t.searchPlaceholder;
    }

    // Translate filter labels and dropdowns
    const diffLabel = document.querySelector('label[for="difficultySelect"]');
    if (diffLabel) diffLabel.textContent = lang === 'hi' ? 'कठिनाई:' : 'Difficulty:';
    const sortLabel = document.querySelector('label[for="sortSelect"]');
    if (sortLabel) sortLabel.textContent = lang === 'hi' ? 'क्रम:' : 'Sort by:';

    if (elements.difficultySelect && elements.difficultySelect.options.length >= 4) {
      elements.difficultySelect.options[0].text = lang === 'hi' ? 'सभी स्तर' : 'All Difficulties';
      elements.difficultySelect.options[1].text = lang === 'hi' ? 'शुरुआती / त्वरित' : 'Beginner / Immediate';
      elements.difficultySelect.options[2].text = lang === 'hi' ? 'मध्यम' : 'Intermediate';
      elements.difficultySelect.options[3].text = lang === 'hi' ? 'उन्नत' : 'Advanced';
    }

    if (elements.sortSelect && elements.sortSelect.options.length >= 4) {
      elements.sortSelect.options[0].text = lang === 'hi' ? 'सर्वाधिक लोकप्रिय' : 'Most Popular';
      elements.sortSelect.options[1].text = lang === 'hi' ? 'उच्चतम सफलता दर' : 'Highest Success Rate';
      elements.sortSelect.options[2].text = lang === 'hi' ? 'सबसे तेज (< 15 मिनट)' : 'Quickest (< 15 mins)';
      elements.sortSelect.options[3].text = lang === 'hi' ? 'सबसे ज्यादा पसंद किए गए' : 'Most Upvoted';
    }

    renderQuickTrendingTags(lang);
    renderCategoryTabs();
    renderAboutContent(lang);
    renderDisclaimerContent(lang);
    applyFilters();

    if (state.currentGuide) {
      renderCurrentGuideContent();
    }
  }

  function renderQuickTrendingTags(lang) {
    const container = document.getElementById('quickTagsContainer');
    if (!container) return;
    container.style.display = 'none';
    container.innerHTML = '';
  }

  function toggleLanguage() {
    const newLang = state.lang === 'en' ? 'hi' : 'en';
    applyLanguage(newLang);
    showToast(newLang === 'hi' ? 'भाषा बदलकर हिन्दी कर दी गई है' : 'Switched to English');
  }

  // --- About & Disclaimer Modals Content Generators ---
  function renderAboutContent(lang) {
    const isHi = lang === 'hi';
    const body = document.getElementById('aboutModalBody');
    if (!body) return;

    if (isHi) {
      body.innerHTML = `
        <div class="info-section">
          <div class="info-section-title">
            <i class="fas fa-bullseye" style="color: var(--accent-primary);"></i> हमारा उद्देश्य (Mission)
          </div>
          <p class="info-section-text">
            SolvifyHub का निर्माण इंटरनेट पर मौजूद अधूरी, भ्रामक और सतही जानकारी को समाप्त करने के लिए किया गया है। जब कोई व्यक्ति किसी गंभीर तकनीकी, शारीरिक, वित्तीय या मानसिक संकट में होता है—जैसे फोन का डेड बूटलूप, इनवर्टर बैटरी में खराबी, गंभीर पैनिक अटैक, इनकम टैक्स का डिफेक्टिव नोटिस, या ट्रेडिंग में पूंजी सुरक्षा—तो आधी-अधूरी जानकारी खतरनाक साबित हो सकती है। हम सटीक वैज्ञानिक नियमों, स्पष्ट सुरक्षा चेतावनियों और काम करने वाले कोड के साथ संपूर्ण चरणबद्ध समाधान प्रदान करते हैं।
          </p>
        </div>

        <div class="info-section">
          <div class="info-section-title">
            <i class="fas fa-cubes" style="color: var(--accent-emerald);"></i> हमारे 4 प्रमुख वैज्ञानिक सिद्धांत
          </div>
          <div class="info-highlight-box" style="margin-bottom: 0.5rem;">
            <strong>1. शून्य दिखावा, 100% व्यावहारिक (Zero Fluff):</strong> कोई खोखले भाषण नहीं। केवल सटीक फॉर्मूले, टर्मिनल कमांड्स, दवाओं/सप्लीमेंट्स के वैज्ञानिक अनुपात और वास्तविक कार्यप्रणाली।
          </div>
          <div class="info-highlight-box" style="margin-bottom: 0.5rem;">
            <strong>2. पूर्ण द्विभाषी समानता (Bilingual Parity):</strong> हर गाइड को अंग्रेजी और शुद्ध/सरल देवनागरी हिन्दी दोनों में समान गहराई और संपूर्ण विवरण के साथ लिखा गया है।
          </div>
          <div class="info-highlight-box" style="margin-bottom: 0.5rem;">
            <strong>3. सुरक्षा सर्वप्रथम (Safety & Damage Inoculation):</strong> उच्च वोल्टेज, विस्फोटक हाइड्रोजन गैस, सल्फ्यूरिक एसिड, लिथियम आग और वित्तीय नुकसान से बचाने वाली सख्त चेतावनियां।
          </div>
          <div class="info-highlight-box">
            <strong>4. इंटरैक्टिव ट्रैकिंग (Interactive Checklists):</strong> हर कदम को पूरा चिह्नित करने की सुविधा, कोड कॉपी बटन, डार्क/लाइट मोड और मार्कडाउन व PDF में सेव करने की सुविधा।
          </div>
        </div>

        <div class="info-section">
          <div class="info-section-title">
            <i class="fas fa-layer-group" style="color: var(--accent-violet);"></i> 67 व्यापक समाधान क्षेत्र
          </div>
          <p class="info-section-text">
            हमारा ज्ञानकोष हार्डवेयर, पीसी रिपेयर, ग्राफिक्स कार्ड, ईवी स्कूटर, इन्वर्टर बैटरी, इनकम टैक्स (ITR), मनी मैनेजमेंट, एथिकल हैकिंग, लिनक्स और विंडोज सिस्टम, ऐप्पल आईफोन, यूट्यूब और गूगल एडसेंस, क्रिकेट डेटा साइंस, और ट्रेडिंग (केवल फॉरेक्स, बिटकॉइन और गोल्ड) सहित मानसिक व शारीरिक स्वास्थ्य के सभी क्षेत्रों को कवर करता है।
          </p>
        </div>
      `;
    } else {
      body.innerHTML = `
        <div class="info-section">
          <div class="info-section-title">
            <i class="fas fa-bullseye" style="color: var(--accent-primary);"></i> Our Mission
          </div>
          <p class="info-section-text">
            SolvifyHub was engineered to eliminate vague, surface-level internet advice. When individuals encounter high-stakes crises—a hard-bricked smartphone, an overheating car engine, acute panic attacks, a defective tax return notice, or algorithmic trading risk—incomplete instructions are physically, financially, and medically dangerous. We engineer exhaustive, forensically detailed, step-by-step master guides backed by root-cause analysis, pre-execution safety tests, and exact code.
          </p>
        </div>

        <div class="info-section">
          <div class="info-section-title">
            <i class="fas fa-cubes" style="color: var(--accent-emerald);"></i> The 4 Forensic Pillars
          </div>
          <div class="info-highlight-box" style="margin-bottom: 0.5rem;">
            <strong>1. Zero Fluff, 100% Actionable:</strong> No filler commentary. Only exact formulas, shell commands, verified clinical protocols, and precise calibration parameters.
          </div>
          <div class="info-highlight-box" style="margin-bottom: 0.5rem;">
            <strong>2. True Bilingual Parity:</strong> Every solution is crafted with identical forensic depth in both English and Devanagari Hindi.
          </div>
          <div class="info-highlight-box" style="margin-bottom: 0.5rem;">
            <strong>3. Safety First & Damage Inoculation:</strong> Explicit, uncompromising warnings regarding mains AC voltage, explosive battery hydrogen, sulfuric acid, and capital drawdowns.
          </div>
          <div class="info-highlight-box">
            <strong>4. Interactive Execution:</strong> Step-by-step progress tracking, one-click code copy, reading progress bars, and clean Markdown/PDF export for offline reference.
          </div>
        </div>

        <div class="info-section">
          <div class="info-section-title">
            <i class="fas fa-layer-group" style="color: var(--accent-violet);"></i> 67 Comprehensive Solution Domains
          </div>
          <p class="info-section-text">
            Spanning hardware engineering, PC repair, GPU thermal fixes, EV battery management, inverter desulfation, income tax compliance, algorithmic trading (strictly Forex currency pairs, Bitcoin, and Gold), cybersecurity auditing, and evidence-based mental and physical health protocols.
          </p>
        </div>
      `;
    }
  }

  function renderDisclaimerContent(lang) {
    const isHi = lang === 'hi';
    const body = document.getElementById('disclaimerModalBody');
    if (!body) return;

    if (isHi) {
      body.innerHTML = `
        <div class="info-section">
          <div class="info-section-title">
            <i class="fas fa-circle-exclamation" style="color: var(--accent-amber);"></i> 1. सामान्य शैक्षणिक व सूचनात्मक दायरा
          </div>
          <p class="info-section-text">
            SolvifyHub पर प्रकाशित सभी लेख, कोड स्निपेट्स, डायग्नोस्टिक स्टेप्स और समाधान केवल शैक्षणिक, सूचनात्मक और व्यक्तिगत सहायता के उद्देश्य से उपलब्ध कराए गए हैं। यद्यपि प्रत्येक समाधान को गहन इंजीनियरिंग व वैज्ञानिक मानकों पर तैयार किया गया है, तथापि इन निर्देशों को लागू करने से होने वाले किसी भी प्रत्यक्ष या अप्रत्यक्ष परिणाम के लिए उपयोगकर्ता स्वयं जिम्मेदार होगा।
          </p>
        </div>

        <div class="info-section">
          <div class="info-section-title">
            <i class="fas fa-heart-pulse" style="color: var(--accent-rose);"></i> 2. चिकित्सा एवं मानसिक स्वास्थ्य अस्वीकरण (Medical Disclaimer)
          </div>
          <p class="info-section-text">
            SolvifyHub कोई प्रमाणित चिकित्सालय या चिकित्सक नहीं है। पैनिक अटैक, अवसाद, एसिडिटी, माइग्रेन, उच्च रक्तचाप, रीढ़ की हड्डी के दर्द अथवा यौन स्वास्थ्य से जुड़े प्रोटोकॉल केवल पूरक जानकारी हैं और किसी भी स्थिति में योग्य डॉक्टर के परामर्श, निदान या उपचार का विकल्प नहीं हैं।
          </p>
          <div class="info-highlight-box" style="border-left: 3px solid var(--accent-rose);">
            <strong>आपातकालीन स्थिति में तुरंत संपर्क करें:</strong><br>
            • भारत: राष्ट्रीय आपातकालीन सेवा <strong>112</strong> या टेली-मानस मानसिक स्वास्थ्य हेल्पलाइन <strong>14416</strong> / 1800-599-0019 (24 घंटे मुफ्त)।<br>
            • अमेरिका / कनाडा: राष्ट्रीय संकट हेल्पलाइन <strong>988</strong> या 911।
          </div>
        </div>

        <div class="info-section">
          <div class="info-section-title">
            <i class="fas fa-chart-line" style="color: var(--accent-cyan);"></i> 3. वित्तीय एवं ट्रेडिंग जोखिम अस्वीकरण (Financial Risk)
          </div>
          <p class="info-section-text">
            वित्तीय बाजारों में ट्रेडिंग करना—विशेषकर फॉरेक्स (करेंसी पेयर्स), बिटकॉइन (BTC) और सोना (XAU/USD)—अत्यधिक जोखिमपूर्ण है और इसमें आपकी पूरी पूंजी डूबने का वास्तविक खतरा होता है। प्रदान किए गए पायथन ट्रेडिंग बॉट्स और सांख्यिकीय रणनीतियां केवल शैक्षणिक शोध के लिए हैं। SolvifyHub सेबी (SEBI) या SEC पंजीकृत वित्तीय सलाहकार नहीं है। कभी भी उस पूंजी से ट्रेड न करें जिसे खोना आप बर्दाश्त नहीं कर सकते।
          </p>
        </div>

        <div class="info-section">
          <div class="info-section-title">
            <i class="fas fa-bolt" style="color: var(--accent-amber);"></i> 4. हार्डवेयर, बिजली, ऑटोमोबाइल व रासायनिक सुरक्षा
          </div>
          <p class="info-section-text">
            इन्वर्टर की लेड-एसिड बैटरी से विस्फोटक हाइड्रोजन गैस निकलती है और उसमें सांद्र सल्फ्यूरिक एसिड होता है। कंप्यूटर पावर सप्लाई में 230 वोल्ट का जानलेवा करंट रहता है। इलेक्ट्रिक वाहनों की 48V-72V लिथियम बैटरी में आग लगने का खतरा होता है और गर्म कार के रेडिएटर से खौलता पानी चेहरे को जला सकता है। हमेशा सुरक्षा चश्मा, रबर के दस्ताने पहनें और जोखिम भरे काम पेशेवर मैकेनिक या इलेक्ट्रीशियन से ही कराएं।
          </p>
        </div>

        <div class="info-section">
          <div class="info-section-title">
            <i class="fas fa-user-shield" style="color: var(--accent-emerald);"></i> 5. साइबर सुरक्षा एवं आईटी कानूनी अनुपालन (Cybersecurity Law)
          </div>
          <p class="info-section-text">
            एथिकल हैकिंग टूल्स (Nmap, Wireshark, Burp Suite) का उपयोग केवल उन्हीं नेटवर्क्स पर करें जहां आपके पास नेटवर्क स्वामी की स्पष्ट, लिखित और हस्ताक्षरित अनुमति हो। बिना अनुमति के किसी भी कंप्यूटर या वाई-फाई को स्कैन करना भारतीय आईटी अधिनियम (IT Act धारा 66) और अंतरराष्ट्रीय साइबर कानूनों के तहत एक गैर-जमानती अपराध है।
          </p>
        </div>
      `;
    } else {
      body.innerHTML = `
        <div class="info-section">
          <div class="info-section-title">
            <i class="fas fa-circle-exclamation" style="color: var(--accent-amber);"></i> 1. General Educational & Informational Scope
          </div>
          <p class="info-section-text">
            All documentation, diagnostic trees, code snippets, and procedural guides published on SolvifyHub are intended exclusively for educational, technical reference, and self-help informational purposes. While every protocol is researched to rigorous engineering and clinical standards, you assume full personal liability and responsibility for your implementation and actions.
          </p>
        </div>

        <div class="info-section">
          <div class="info-section-title">
            <i class="fas fa-heart-pulse" style="color: var(--accent-rose);"></i> 2. Clinical, Medical & Mental Health Disclaimer
          </div>
          <p class="info-section-text">
            SolvifyHub is not a licensed healthcare provider, medical facility, or psychotherapy clinic. Protocols covering panic attacks, major depression, insomnia, GERD, chronic hypertension, migraines, and sexual health are adjunctive educational frameworks and must not replace professional medical diagnosis, clinical advice, or individualized treatment plans.
          </p>
          <div class="info-highlight-box" style="border-left: 3px solid var(--accent-rose);">
            <strong>In a Medical or Psychiatric Emergency:</strong><br>
            • India: Call national emergency <strong>112</strong> or Tele-MANAS Mental Health Lifeline <strong>14416</strong> / 1800-599-0019 (24/7 toll-free).<br>
            • US / Canada: Call Suicide & Crisis Lifeline <strong>988</strong> or emergency 911.
          </div>
        </div>

        <div class="info-section">
          <div class="info-section-title">
            <i class="fas fa-chart-line" style="color: var(--accent-cyan);"></i> 3. Financial & Algorithmic Trading Risk
          </div>
          <p class="info-section-text">
            Trading financial instruments—strictly restricted under our system to Forex currency pairs, Bitcoin (BTC), and Gold (XAU/USD)—involves extreme market volatility and the risk of losing 100% of your invested capital. Algorithmic bot scripts, backtests, and statistical models are presented for academic data science purposes only. SolvifyHub is not a SEBI or SEC-registered investment advisor. Never trade with capital you cannot afford to lose.
          </p>
        </div>

        <div class="info-section">
          <div class="info-section-title">
            <i class="fas fa-bolt" style="color: var(--accent-amber);"></i> 4. Hardware, Electrical & Chemical Hazard Warnings
          </div>
          <p class="info-section-text">
            Lead-acid tubular batteries vent explosive stoichiometric hydrogen gas and contain corrosive sulfuric acid. Computer power supplies store lethal 400V DC capacitor charges. Electric scooter lithium batteries carry catastrophic thermal runaway combustion hazards. Pressurized vehicle cooling systems erupt boiling steam. Always wear personal protective equipment (ANSI-rated splash goggles, insulated gloves) or engage certified technicians.
          </p>
        </div>

        <div class="info-section">
          <div class="info-section-title">
            <i class="fas fa-user-shield" style="color: var(--accent-emerald);"></i> 5. Cybersecurity & Legal Compliance Mandate
          </div>
          <p class="info-section-text">
            Security assessment tools (Nmap, Wireshark, Burp Suite) must be deployed exclusively against networks, hosts, and IP ranges where you have obtained prior written and legally binding Rules of Engagement (RoE) authorization. Unauthorized scanning or penetration testing violates Section 66 of the Information Technology Act and the US Computer Fraud and Abuse Act (CFAA).
          </p>
        </div>
      `;
    }
  }

  function openAboutModal() {
    if (elements.aboutModal) {
      renderAboutContent(state.lang);
      elements.aboutModal.classList.add('active');
    }
  }

  function closeAboutModal() {
    if (elements.aboutModal) elements.aboutModal.classList.remove('active');
  }

  function openDisclaimerModal() {
    if (elements.disclaimerModal) {
      renderDisclaimerContent(state.lang);
      elements.disclaimerModal.classList.add('active');
    }
  }

  function closeDisclaimerModal() {
    if (elements.disclaimerModal) elements.disclaimerModal.classList.remove('active');
  }

  function openContactModal() {
    if (elements.contactModal) {
      elements.contactModal.classList.add('active');
    }
  }

  function closeContactModal() {
    if (elements.contactModal) {
      elements.contactModal.classList.remove('active');
    }
  }

  // --- Category & Filter Handling ---
  function renderCategoryTabs() {
    const isHi = state.lang === 'hi';
    const categories = [
      { id: 'all', label: isHi ? 'सभी समाधान' : 'All Solutions', icon: 'fas fa-th-large' },
      { id: 'hardware', label: isHi ? 'हार्डवेयर व ऑटो' : 'Hardware & Auto', icon: 'fas fa-microchip' },
      { id: 'software', label: isHi ? 'ओएस, लिनक्स व टेक' : 'OS, Software & Tech', icon: 'fas fa-laptop-code' },
      { id: 'creator', label: isHi ? 'डिजिटल, यूट्यूब व ऐड्स' : 'Creator, Ads & Web', icon: 'fas fa-video' },
      { id: 'lifestyle', label: isHi ? 'जीवन, टैक्स व पढ़ाई' : 'Life, Tax & Study', icon: 'fas fa-graduation-cap' },
      { id: 'health', label: isHi ? 'स्वास्थ्य व शरीर' : 'Health & Wellness', icon: 'fas fa-heartbeat' },
      { id: 'psychology', label: isHi ? 'मन और मनोविज्ञान' : 'Mind & Psychology', icon: 'fas fa-brain' },
      { id: 'finance', label: isHi ? 'वित्त और धन सुरक्षा' : 'Finance & Survival', icon: 'fas fa-shield-halved' },
      { id: 'trading', label: isHi ? 'ट्रेडिंग व एनालिटिक्स' : 'Trading & Quant', icon: 'fas fa-chart-line' },
      { id: 'relationships', label: isHi ? 'रिश्ते और संवाद' : 'Relationships & Life', icon: 'fas fa-comments' },
      { id: 'devops', label: isHi ? 'डेवऑप्स और क्लाउड' : 'DevOps & Tech', icon: 'fas fa-server' },
      { id: 'bookmarked', label: isHi ? 'सहेजे गए' : 'Saved Bookmarks', icon: 'fas fa-bookmark' }
    ];

    elements.categoryTabsContainer.innerHTML = categories.map(cat => {
      const count = getCategoryCount(cat.id);
      return `
        <button class="cat-tab ${state.activeCategory === cat.id ? 'active' : ''}" data-category="${cat.id}">
          <i class="${cat.icon}"></i>
          <span>${cat.label}</span>
          <span class="badge-counter">${count}</span>
        </button>
      `;
    }).join('');

    elements.categoryTabsContainer.querySelectorAll('.cat-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        setCategory(tab.dataset.category);
      });
    });
  }

  function getCategoryCount(catId) {
    if (catId === 'all') return state.allGuides.length;
    if (catId === 'bookmarked') return state.bookmarks.length;
    return state.allGuides.filter(g => g.category === catId).length;
  }

  function setCategory(catId) {
    state.activeCategory = catId;
    elements.categoryTabsContainer.querySelectorAll('.cat-tab').forEach(t => {
      t.classList.toggle('active', t.dataset.category === catId);
    });
    applyFilters();
  }

  function applyFilters() {
    let result = [...state.allGuides];

    // Filter by Category
    if (state.activeCategory === 'bookmarked') {
      result = result.filter(g => state.bookmarks.includes(g.id));
    } else if (state.activeCategory !== 'all') {
      result = result.filter(g => g.category === state.activeCategory);
    }

    // Filter by Difficulty
    if (state.difficultyFilter !== 'all') {
      result = result.filter(g => {
        const diffEn = (g.difficulty && (g.difficulty.en || g.difficulty)) || '';
        return diffEn.toLowerCase().includes(state.difficultyFilter.toLowerCase());
      });
    }

    // Filter by Search Query (BILINGUAL SEARCH across both English and Hindi fields)
    if (state.searchQuery) {
      const q = state.searchQuery;
      result = result.filter(g => {
        const enData = g.en || g;
        const hiData = g.hi || {};

        const inTitleEn = (enData.title || '').toLowerCase().includes(q);
        const inTitleHi = (hiData.title || '').toLowerCase().includes(q);
        const inDescEn = (enData.shortDesc || '').toLowerCase().includes(q);
        const inDescHi = (hiData.shortDesc || '').toLowerCase().includes(q);
        
        const tagsEn = (g.tags && (g.tags.en || g.tags)) || [];
        const tagsHi = (g.tags && g.tags.hi) || [];
        const inTags = tagsEn.some(t => t.toLowerCase().includes(q)) || tagsHi.some(t => t.toLowerCase().includes(q));

        return inTitleEn || inTitleHi || inDescEn || inDescHi || inTags;
      });
    }

    // Sorting
    if (state.sortBy === 'popular') {
      result.sort((a, b) => (b.views || 0) - (a.views || 0));
    } else if (state.sortBy === 'highest-rated') {
      result.sort((a, b) => parseFloat(b.successRate || 0) - parseFloat(a.successRate || 0));
    } else if (state.sortBy === 'quickest') {
      result.sort((a, b) => (a.estimatedMinutes || 0) - (b.estimatedMinutes || 0));
    } else if (state.sortBy === 'newest') {
      result.sort((a, b) => (b.likes || 0) - (a.likes || 0));
    }

    state.filteredGuides = result;
    const isHi = state.lang === 'hi';
    elements.activeResultsCount.textContent = isHi 
      ? `${result.length} समाधान उपलब्ध हैं`
      : `${result.length} solution${result.length === 1 ? '' : 's'} available`;
    renderGuides();
  }

  // --- Render Guides Grid / List ---
  function renderGuides() {
    const isHi = state.lang === 'hi';
    const t = I18N[state.lang];

    if (state.filteredGuides.length === 0) {
      elements.solutionsGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem;">
          <i class="fas fa-search" style="font-size: 3rem; color: var(--text-dim); margin-bottom: 1rem;"></i>
          <h3 style="font-size: 1.5rem; margin-bottom: 0.5rem;">${t.noResults}</h3>
          <p style="color: var(--text-muted); margin-bottom: 1.5rem;">${t.noResultsDesc}</p>
          <button class="btn btn-secondary" onclick="document.getElementById('searchInput').value=''; window.resetFilters();">${t.clearFilters}</button>
        </div>
      `;
      return;
    }

    elements.solutionsGrid.className = state.viewMode === 'grid' 
      ? 'solutions-grid' 
      : 'solutions-grid list-mode';

    elements.solutionsGrid.innerHTML = state.filteredGuides.map(guide => {
      const isBookmarked = state.bookmarks.includes(guide.id);
      const catClass = `cat-${guide.category || 'psychology'}`;
      
      // Determine language content
      const content = (isHi && guide.hi) ? guide.hi : (guide.en || guide);
      const catLabel = (guide.categoryLabel && (guide.categoryLabel[state.lang] || guide.categoryLabel.en)) || guide.category;
      const diffLabel = (guide.difficulty && (guide.difficulty[state.lang] || guide.difficulty.en)) || guide.difficulty;
      const tagsList = (guide.tags && (guide.tags[state.lang] || guide.tags.en || guide.tags)) || [];

      const completedStepsCount = (state.completedSteps[guide.id] || []).length;
      const totalSteps = content.steps ? content.steps.length : 0;
      const isComplete = totalSteps > 0 && completedStepsCount === totalSteps;
      const imgSrc = guide.image || getCategoryFallback(guide.category);

      return `
        <div class="solution-card" data-id="${guide.id}">
          <div class="card-image-box">
            <img src="${imgSrc}" alt="${escapeHtml(content.title)}" class="card-img" loading="lazy" onerror="this.onerror=null; this.src=getCategoryFallback('${guide.category}');">
            <div class="card-img-overlay"></div>
            <span class="card-category-badge ${catClass}">
              <i class="${getCategoryIcon(guide.category)}"></i> ${catLabel}
            </span>
            <button class="btn-bookmark ${isBookmarked ? 'bookmarked' : ''}" data-id="${guide.id}" title="${isBookmarked ? 'Remove Bookmark' : 'Save Solution'}">
              <i class="${isBookmarked ? 'fas' : 'far'} fa-heart"></i>
            </button>
            ${isComplete ? `<span class="completion-badge"><i class="fas fa-check-double"></i> ${t.stepDone}</span>` : ''}
          </div>
          
          <div class="card-body-content">
            <h3 class="card-title">${highlightMatch(content.title, state.searchQuery)}</h3>
            <p class="card-desc">${highlightMatch(content.shortDesc, state.searchQuery)}</p>
            
            <div class="card-tags">
              ${tagsList.slice(0, 4).map(tg => `<span class="card-tag">#${tg}</span>`).join('')}
            </div>
            
            <div class="card-footer">
              <div style="display: flex; gap: 0.75rem; align-items: center;">
                <span class="card-meta-pill"><i class="far fa-clock"></i> ${guide.estimatedMinutes}m</span>
                <span class="card-meta-pill"><i class="fas fa-signal"></i> ${diffLabel}</span>
                <span class="card-meta-pill" style="color: var(--accent-emerald);"><i class="fas fa-shield-alt"></i> ${guide.successRate || '99%'}</span>
              </div>
              <span class="btn-read-more">${t.viewSolution} <i class="fas fa-arrow-right"></i></span>
            </div>
          </div>
        </div>
      `;
    }).join('');

    // Attach click events
    elements.solutionsGrid.querySelectorAll('.solution-card').forEach(card => {
      card.addEventListener('click', (e) => {
        if (e.target.closest('.btn-bookmark')) return;
        const guide = state.allGuides.find(g => g.id === card.dataset.id);
        if (guide) openGuideDetail(guide);
      });
    });

    elements.solutionsGrid.querySelectorAll('.btn-bookmark').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleBookmark(btn.dataset.id);
      });
    });
  }

  function getCategoryIcon(cat) {
    const map = {
      psychology: 'fas fa-brain',
      health: 'fas fa-heartbeat',
      hardware: 'fas fa-microchip',
      software: 'fas fa-laptop-code',
      creator: 'fas fa-video',
      lifestyle: 'fas fa-graduation-cap',
      finance: 'fas fa-shield-halved',
      relationships: 'fas fa-comments',
      trading: 'fas fa-chart-line',
      devops: 'fas fa-server',
      development: 'fas fa-code',
      custom: 'fas fa-pen-nib'
    };
    return map[cat] || 'fas fa-book-open';
  }

  function highlightMatch(text, query) {
    if (!text) return '';
    if (typeof text !== 'string') {
      if (typeof text === 'object') {
        text = text[state.lang] || text.en || text.hi || '';
      }
      text = String(text || '');
    }
    if (!query) return text;
    const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    return text.replace(regex, '<mark style="background: rgba(245, 158, 11, 0.35); color: inherit; padding: 0 2px; border-radius: 2px;">$1</mark>');
  }

  // --- Bookmark Management ---
  function toggleBookmark(guideId) {
    const index = state.bookmarks.indexOf(guideId);
    if (index > -1) {
      state.bookmarks.splice(index, 1);
      showToast(state.lang === 'hi' ? 'सहेजे गए समाधानों से हटाया गया' : 'Removed from bookmarks');
    } else {
      state.bookmarks.push(guideId);
      showToast(state.lang === 'hi' ? 'समाधान बुकमार्क में सहेज लिया गया!' : 'Solution saved to bookmarks!');
    }
    localStorage.setItem('howto_bookmarks', JSON.stringify(state.bookmarks));
    updateBookmarkBadge();
    renderCategoryTabs();
    applyFilters();
    
    if (state.currentGuide && state.currentGuide.id === guideId) {
      updateDetailBookmarkBtn();
    }
  }

  function updateBookmarkBadge() {
    if (elements.bookmarkCountBadge) {
      elements.bookmarkCountBadge.textContent = state.bookmarks.length;
    }
  }

  // --- Step Completion Tracking ---
  function toggleStepCompleted(guideId, stepNumber) {
    if (!state.completedSteps[guideId]) {
      state.completedSteps[guideId] = [];
    }
    const list = state.completedSteps[guideId];
    const idx = list.indexOf(stepNumber);
    if (idx > -1) {
      list.splice(idx, 1);
    } else {
      list.push(stepNumber);
    }
    localStorage.setItem('howto_completed_steps', JSON.stringify(state.completedSteps));
    updateStepsUI();
    renderGuides();
  }

  // --- Solution Detail View Modal ---
  function openGuideDetail(guide) {
    state.currentGuide = guide;
    state.currentGuideLang = state.lang; // Default to active language
    window.location.hash = guide.id;

    renderCurrentGuideContent();

    elements.detailViewOverlay.classList.add('active');
    elements.detailViewOverlay.scrollTop = 0;
    elements.body.style.overflow = 'hidden';
    updateReadingProgress();
  }

  function renderCurrentGuideContent() {
    const guide = state.currentGuide;
    if (!guide) return;

    const gLang = state.currentGuideLang;
    const content = (gLang === 'hi' && guide.hi) ? guide.hi : (guide.en || guide);
    const t = I18N[gLang];

    // Language pills active state
    if (elements.detailLangSwitchEn && elements.detailLangSwitchHi) {
      elements.detailLangSwitchEn.className = `btn btn-sm ${gLang === 'en' ? 'btn-primary' : 'btn-secondary'}`;
      elements.detailLangSwitchHi.className = `btn btn-sm ${gLang === 'hi' ? 'btn-primary' : 'btn-secondary'}`;
    }

    const catLabel = (guide.categoryLabel && (guide.categoryLabel[gLang] || guide.categoryLabel.en)) || guide.category;
    const diffLabel = (guide.difficulty && (guide.difficulty[gLang] || guide.difficulty.en)) || guide.difficulty;

    elements.detailCategoryBadge.className = `card-category-badge cat-${guide.category || 'psychology'}`;
    elements.detailCategoryBadge.innerHTML = `<i class="${getCategoryIcon(guide.category)}"></i> ${catLabel}`;
    elements.detailTitle.textContent = content.title;

    // Featured Hero Banner Image
    const heroBanner = document.getElementById('detailHeroBanner');
    const heroImg = document.getElementById('detailHeroImg');
    if (heroBanner && heroImg) {
      heroImg.onerror = function() {
        this.onerror = null;
        this.src = getCategoryFallback(guide.category);
      };
      heroImg.src = guide.image || getCategoryFallback(guide.category);
      heroImg.alt = content.title;
      heroBanner.style.display = 'block';
    }

    elements.detailDifficulty.innerHTML = `<i class="fas fa-signal"></i> <strong>${diffLabel}</strong>`;
    elements.detailTime.innerHTML = `<i class="far fa-clock"></i> <strong>${guide.estimatedMinutes} ${t.minsToImplement}</strong>`;
    elements.detailVerified.innerHTML = `<i class="fas fa-calendar-check"></i> ${t.verified}: <strong>${guide.lastVerified || '2026'}</strong>`;
    elements.detailSuccessRate.innerHTML = `<i class="fas fa-check-circle" style="color: var(--accent-emerald);"></i> <strong>${guide.successRate || '99%'} ${t.successRate}</strong>`;
    elements.detailSummaryText.textContent = content.summary;

    updateDetailBookmarkBtn();

    // Prerequisites
    elements.detailPrereqList.innerHTML = (content.prerequisites || []).map((prereq, index) => `
      <li class="prereq-item">
        <input type="checkbox" id="prereq-${index}" class="prereq-checkbox">
        <label for="prereq-${index}" style="cursor: pointer;">${prereq}</label>
      </li>
    `).join('');

    // Steps
    renderStepsList(guide, content, t);

    // Troubleshooting
    if (content.troubleshooting && content.troubleshooting.length > 0) {
      elements.detailTroubleshootList.innerHTML = content.troubleshooting.map((item, i) => `
        <div class="troubleshoot-card" id="trouble-${i}">
          <div class="troubleshoot-header">
            <span><i class="fas fa-exclamation-triangle" style="color: var(--accent-amber); margin-right: 0.5rem;"></i> ${item.problem}</span>
            <i class="fas fa-chevron-down accordion-icon"></i>
          </div>
          <div class="troubleshoot-body">
            <p style="margin-bottom: 0.5rem;"><strong>${gLang === 'hi' ? 'मूल कारण (Root Cause):' : 'Root Cause:'}</strong> ${item.cause}</p>
            <p><strong>${gLang === 'hi' ? 'प्रमाणित समाधान (Fix):' : 'Verified Resolution:'}</strong> ${item.solution}</p>
          </div>
        </div>
      `).join('');

      elements.detailTroubleshootList.querySelectorAll('.troubleshoot-header').forEach(hdr => {
        hdr.addEventListener('click', () => {
          hdr.parentElement.classList.toggle('open');
        });
      });
      document.getElementById('troubleshootingSection').style.display = 'block';
    } else {
      document.getElementById('troubleshootingSection').style.display = 'none';
    }

    // Verification
    if (content.verification) {
      elements.detailVerificationBox.innerHTML = `
        <div class="code-block-wrapper">
          <div class="code-block-header">
            <span>${gLang === 'hi' ? 'पुष्टि आदेश / चेक' : 'VERIFICATION CHECK'}</span>
            <button class="btn-copy-code" data-code="${escapeHtml(content.verification.command)}"><i class="far fa-copy"></i> ${gLang === 'hi' ? 'कॉपी' : 'Copy'}</button>
          </div>
          <pre><code>${escapeHtml(content.verification.command)}</code></pre>
        </div>
        <p style="font-size: 0.9rem; color: var(--text-muted); margin-top: 0.5rem;">
          <i class="fas fa-arrow-alt-circle-right" style="color: var(--accent-emerald);"></i> <strong>${gLang === 'hi' ? 'अपेक्षित परिणाम (Expected Result):' : 'Expected Output:'}</strong> <code>${escapeHtml(content.verification.expectedOutput)}</code>
        </p>
      `;
      document.getElementById('verificationSection').style.display = 'block';
    } else {
      document.getElementById('verificationSection').style.display = 'none';
    }

    // FAQs (Supporting both q/a and question/answer keys seamlessly)
    const faqsList = (content.faqs || []).map(faq => {
      const q = faq.q || faq.question || '';
      const a = faq.a || faq.answer || '';
      return { q, a };
    }).filter(faq => faq.q && faq.a);

    if (faqsList.length > 0) {
      elements.detailFaqList.innerHTML = faqsList.map(faq => `
        <div class="faq-card">
          <div class="faq-question">
            <span>${escapeHtml(faq.q)}</span>
            <i class="fas fa-chevron-down accordion-icon"></i>
          </div>
          <div class="faq-answer">${escapeHtml(faq.a)}</div>
        </div>
      `).join('');

      elements.detailFaqList.querySelectorAll('.faq-question').forEach(q => {
        q.addEventListener('click', () => {
          q.parentElement.classList.toggle('open');
        });
      });
      document.getElementById('faqSection').style.display = 'block';
    } else {
      document.getElementById('faqSection').style.display = 'none';
    }

    // Reset feedback display
    elements.feedbackThanksMsg.style.display = 'none';
    const existingFeedback = state.feedbackMap[guide.id];
    if (existingFeedback) {
      elements.feedbackThanksMsg.style.display = 'block';
      elements.feedbackThanksMsg.textContent = existingFeedback === 'like' ? t.feedbackDone : t.feedbackDone;
    }

    bindDynamicCodeCopyButtons();
  }

  function renderStepsList(guide, content, t) {
    const completed = state.completedSteps[guide.id] || [];
    const isHi = state.currentGuideLang === 'hi';

    elements.detailStepsList.innerHTML = (content.steps || []).map(step => {
      const isDone = completed.includes(step.stepNumber);
      const desc = step.description || step.instructions || '';
      const calloutHtml = step.callout ? `
        <div class="callout callout-${step.callout.type || 'tip'}">
          <i class="${step.callout.type === 'warning' ? 'fas fa-exclamation-triangle' : step.callout.type === 'important' ? 'fas fa-exclamation-circle' : 'fas fa-lightbulb'}"></i>
          <div><strong>${(step.callout.type || 'tip').toUpperCase()}:</strong> ${step.callout.text}</div>
        </div>
      ` : '';

      const codeText = step.code || step.command || '';
      const codeHtml = codeText ? `
        <div class="code-block-wrapper">
          <div class="code-block-header">
            <span>${(step.language || 'text').toUpperCase()}</span>
            <button class="btn-copy-code" data-code="${escapeHtml(codeText)}">
              <i class="far fa-copy"></i> ${isHi ? 'कॉपी' : 'Copy'}
            </button>
          </div>
          <pre><code class="language-${step.language || 'text'}">${escapeHtml(codeText)}</code></pre>
        </div>
      ` : '';

      return `
        <div class="step-card" id="step-card-${step.stepNumber}">
          <div class="step-header">
            <div class="step-title-wrapper">
              <div class="step-number-badge">${step.stepNumber}</div>
              <h4 class="step-title">${step.title}</h4>
            </div>
            <button class="btn-step-complete ${isDone ? 'completed' : ''}" data-step="${step.stepNumber}">
              <i class="${isDone ? 'fas fa-check-circle' : 'far fa-circle'}"></i>
              <span>${isDone ? t.stepDone : t.stepComplete}</span>
            </button>
          </div>
          
          <p class="step-description">${desc}</p>
          ${codeHtml}
          ${step.explanation ? `<div class="step-explanation">${step.explanation}</div>` : ''}
          ${calloutHtml}
        </div>
      `;
    }).join('');

    elements.detailStepsList.querySelectorAll('.btn-step-complete').forEach(btn => {
      btn.addEventListener('click', () => {
        const stepNum = parseInt(btn.dataset.step, 10);
        toggleStepCompleted(guide.id, stepNum);
      });
    });
  }

  function updateStepsUI() {
    if (!state.currentGuide) return;
    const completed = state.completedSteps[state.currentGuide.id] || [];
    const t = I18N[state.currentGuideLang];

    elements.detailStepsList.querySelectorAll('.btn-step-complete').forEach(btn => {
      const stepNum = parseInt(btn.dataset.step, 10);
      const isDone = completed.includes(stepNum);
      btn.className = `btn-step-complete ${isDone ? 'completed' : ''}`;
      btn.innerHTML = `<i class="${isDone ? 'fas fa-check-circle' : 'far fa-circle'}"></i> <span>${isDone ? t.stepDone : t.stepComplete}</span>`;
    });
  }

  function updateDetailBookmarkBtn() {
    if (!state.currentGuide) return;
    const isBookmarked = state.bookmarks.includes(state.currentGuide.id);
    const t = I18N[state.currentGuideLang];
    elements.detailBookmarkBtn.innerHTML = isBookmarked
      ? `<i class="fas fa-heart" style="color: var(--accent-rose);"></i> ${t.savedBookmarkBtn}`
      : `<i class="far fa-heart"></i> ${t.bookmarkBtn}`;
  }

  function closeGuideDetail() {
    elements.detailViewOverlay.classList.remove('active');
    elements.body.style.overflow = '';
    state.currentGuide = null;
    history.pushState("", document.title, window.location.pathname + window.location.search);
  }

  function updateReadingProgress() {
    const el = elements.detailViewOverlay;
    const scrollTop = el.scrollTop;
    const scrollHeight = el.scrollHeight - el.clientHeight;
    const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
    elements.detailProgressBar.style.width = `${progress}%`;
  }

  // --- Copy Code to Clipboard ---
  function bindDynamicCodeCopyButtons() {
    document.querySelectorAll('.btn-copy-code').forEach(btn => {
      btn.addEventListener('click', () => {
        const codeText = btn.dataset.code;
        if (!codeText) return;
        navigator.clipboard.writeText(codeText).then(() => {
          const original = btn.innerHTML;
          btn.innerHTML = '<i class="fas fa-check" style="color: var(--accent-emerald);"></i> Copied!';
          showToast(state.lang === 'hi' ? 'क्लिपबोर्ड में कॉपी किया गया' : 'Copied to clipboard');
          setTimeout(() => { btn.innerHTML = original; }, 2000);
        }).catch(err => {
          showToast('Failed to copy: ' + err);
        });
      });
    });
  }

  // --- Download Markdown & Share ---
  function downloadCurrentGuideMarkdown() {
    if (!state.currentGuide) return;
    const g = state.currentGuide;
    const gLang = state.currentGuideLang;
    const c = (gLang === 'hi' && g.hi) ? g.hi : (g.en || g);
    const catLabel = (g.categoryLabel && (g.categoryLabel[gLang] || g.categoryLabel.en)) || g.category;
    const diffLabel = (g.difficulty && (g.difficulty[gLang] || g.difficulty.en)) || g.difficulty;

    let md = `# ${c.title}\n\n`;
    md += `> **Category:** ${catLabel} | **Difficulty:** ${diffLabel} | **Est. Time:** ${g.estimatedMinutes} mins | **Verified:** ${g.lastVerified}\n\n`;
    md += `## Overview\n${c.summary}\n\n`;
    
    if (c.prerequisites && c.prerequisites.length) {
      md += `## Prerequisites\n`;
      c.prerequisites.forEach(p => md += `- [ ] ${p}\n`);
      md += `\n`;
    }

    if (c.steps && c.steps.length) {
      md += `## Step-by-Step Instructions\n\n`;
      c.steps.forEach(s => {
        md += `### Step ${s.stepNumber}: ${s.title}\n${s.description}\n\n`;
        if (s.code) {
          md += `\`\`\`${s.language || 'text'}\n${s.code}\n\`\`\`\n\n`;
        }
        if (s.explanation) md += `*Explanation:* ${s.explanation}\n\n`;
      });
    }

    if (c.troubleshooting && c.troubleshooting.length) {
      md += `## Troubleshooting & Common Pitfalls\n\n`;
      c.troubleshooting.forEach(item => {
        md += `**Problem:** ${item.problem}\n- **Cause:** ${item.cause}\n- **Solution:** ${item.solution}\n\n`;
      });
    }

    if (c.verification) {
      md += `## Verification\n\`\`\`text\n${c.verification.command}\n\`\`\`\n*Expected Result:* \`${c.verification.expectedOutput}\`\n\n`;
    }

    if (c.faqs && c.faqs.length) {
      md += `## Frequently Asked Questions\n\n`;
      c.faqs.forEach(f => {
        const q = f.q || f.question || '';
        const a = f.a || f.answer || '';
        if (q && a) {
          md += `**Q: ${q}**\n\n${a}\n\n`;
        }
      });
    }

    const blob = new Blob([md], { type: 'text/markdown;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${g.id}-${gLang}-guide.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast(gLang === 'hi' ? 'गाइड मार्कडाउन (.md) फाइल में डाउनलोड हो गई' : 'Guide downloaded as Markdown (.md)');
  }

  function shareCurrentGuideLink() {
    if (!state.currentGuide) return;
    const url = `${window.location.origin}${window.location.pathname}#${state.currentGuide.id}`;
    navigator.clipboard.writeText(url).then(() => {
      showToast(state.lang === 'hi' ? 'समाधान का लिंक कॉपी कर लिया गया!' : 'Solution link copied to clipboard!');
    });
  }

  function recordFeedback(type) {
    if (!state.currentGuide) return;
    state.feedbackMap[state.currentGuide.id] = type;
    localStorage.setItem('howto_feedback', JSON.stringify(state.feedbackMap));
    const t = I18N[state.currentGuideLang];
    elements.feedbackThanksMsg.style.display = 'block';
    elements.feedbackThanksMsg.textContent = t.feedbackDone;
    showToast('Feedback submitted');
  }

  // --- Event Bindings ---
  function bindEvents() {
    elements.themeToggleBtn.addEventListener('click', toggleTheme);
    if (elements.langToggleBtn) {
      elements.langToggleBtn.addEventListener('click', toggleLanguage);
    }

    // Detail Language Switches (Inside modal)
    if (elements.detailLangSwitchEn) {
      elements.detailLangSwitchEn.addEventListener('click', () => {
        state.currentGuideLang = 'en';
        renderCurrentGuideContent();
      });
    }
    if (elements.detailLangSwitchHi) {
      elements.detailLangSwitchHi.addEventListener('click', () => {
        state.currentGuideLang = 'hi';
        renderCurrentGuideContent();
      });
    }

    // Category Horizontal Scroll Buttons (Left/Right)
    const catScrollLeftBtn = document.getElementById('catScrollLeftBtn');
    const catScrollRightBtn = document.getElementById('catScrollRightBtn');
    if (catScrollLeftBtn && elements.categoryTabsContainer) {
      catScrollLeftBtn.addEventListener('click', () => {
        elements.categoryTabsContainer.scrollBy({ left: -260, behavior: 'smooth' });
      });
    }
    if (catScrollRightBtn && elements.categoryTabsContainer) {
      catScrollRightBtn.addEventListener('click', () => {
        elements.categoryTabsContainer.scrollBy({ left: 260, behavior: 'smooth' });
      });
    }

    // About Us Modal Events (Footer link & modal close)
    if (elements.footerAboutLink) elements.footerAboutLink.addEventListener('click', (e) => { e.preventDefault(); openAboutModal(); });
    if (elements.closeAboutBtn) elements.closeAboutBtn.addEventListener('click', closeAboutModal);
    if (elements.aboutModal) {
      elements.aboutModal.addEventListener('click', (e) => {
        if (e.target === elements.aboutModal) closeAboutModal();
      });
    }

    // Disclaimer Modal Events (Footer link & modal close)
    if (elements.footerDisclaimerLink) elements.footerDisclaimerLink.addEventListener('click', (e) => { e.preventDefault(); openDisclaimerModal(); });
    if (elements.closeDisclaimerBtn) elements.closeDisclaimerBtn.addEventListener('click', closeDisclaimerModal);
    if (elements.disclaimerModal) {
      elements.disclaimerModal.addEventListener('click', (e) => {
        if (e.target === elements.disclaimerModal) closeDisclaimerModal();
      });
    }

    // Contact Us Modal Events
    if (elements.footerContactLink) {
      elements.footerContactLink.addEventListener('click', (e) => {
        e.preventDefault();
        openContactModal();
      });
    }
    if (elements.closeContactBtn) {
      elements.closeContactBtn.addEventListener('click', closeContactModal);
    }
    if (elements.contactModal) {
      elements.contactModal.addEventListener('click', (e) => {
        if (e.target === elements.contactModal) closeContactModal();
      });
    }
    if (elements.btnCopyContactEmail) {
      elements.btnCopyContactEmail.addEventListener('click', () => {
        navigator.clipboard.writeText('rprrpf1@gmail.com').then(() => {
          showToast(state.lang === 'hi' ? 'ईमेल कॉपी किया गया: rprrpf1@gmail.com' : 'Email copied to clipboard: rprrpf1@gmail.com');
          const orig = elements.btnCopyContactEmail.innerHTML;
          elements.btnCopyContactEmail.innerHTML = '<i class="fas fa-check" style="color: var(--accent-emerald);"></i>';
          setTimeout(() => { elements.btnCopyContactEmail.innerHTML = orig; }, 2000);
        }).catch(() => {
          showToast('rprrpf1@gmail.com');
        });
      });
    }

    // Search input with debounce & clear button toggle
    let searchDebounce;
    elements.searchInput.addEventListener('input', (e) => {
      const val = e.target.value;
      if (elements.searchClearBtn) {
        elements.searchClearBtn.style.display = val.trim() ? 'flex' : 'none';
      }
      clearTimeout(searchDebounce);
      searchDebounce = setTimeout(() => {
        state.searchQuery = val.trim().toLowerCase();
        applyFilters();
      }, 150);
    });

    if (elements.searchClearBtn) {
      elements.searchClearBtn.addEventListener('click', () => {
        elements.searchInput.value = '';
        state.searchQuery = '';
        elements.searchClearBtn.style.display = 'none';
        elements.searchInput.focus();
        applyFilters();
      });
    }

    // Shortcuts
    window.addEventListener('keydown', (e) => {
      if ((e.key === '/' || (e.ctrlKey && e.key.toLowerCase() === 'k')) && document.activeElement !== elements.searchInput) {
        e.preventDefault();
        elements.searchInput.focus();
        elements.searchInput.select();
      }
      if (e.key === 'Escape') {
        closeAllModals();
      }
    });

    // Hash routing for direct linking, address bar navigation & browser back/forward
    window.addEventListener('hashchange', () => {
      const hash = window.location.hash.substring(1);
      if (!hash) {
        if (state.currentGuide) closeGuideDetail();
      } else {
        const match = state.allGuides.find(g => g.id === hash);
        if (match && (!state.currentGuide || state.currentGuide.id !== hash)) {
          openGuideDetail(match);
        }
      }
    });

    elements.difficultySelect.addEventListener('change', (e) => {
      state.difficultyFilter = e.target.value;
      applyFilters();
    });

    elements.sortSelect.addEventListener('change', (e) => {
      state.sortBy = e.target.value;
      applyFilters();
    });

    elements.viewGridBtn.addEventListener('click', () => {
      state.viewMode = 'grid';
      elements.viewGridBtn.classList.add('active');
      elements.viewListBtn.classList.remove('active');
      renderGuides();
    });

    elements.viewListBtn.addEventListener('click', () => {
      state.viewMode = 'list';
      elements.viewListBtn.classList.add('active');
      elements.viewGridBtn.classList.remove('active');
      renderGuides();
    });

    elements.headerBookmarksBtn.addEventListener('click', () => {
      setCategory('bookmarked');
    });

    elements.closeDetailBtn.addEventListener('click', closeGuideDetail);
    elements.detailViewOverlay.addEventListener('click', (e) => {
      if (e.target === elements.detailViewOverlay) closeGuideDetail();
    });

    elements.detailViewOverlay.addEventListener('scroll', updateReadingProgress);

    elements.detailBookmarkBtn.addEventListener('click', () => {
      if (state.currentGuide) toggleBookmark(state.currentGuide.id);
    });

    elements.btnDownloadMd.addEventListener('click', downloadCurrentGuideMarkdown);
    elements.btnPrintPdf.addEventListener('click', () => window.print());
    elements.btnShareLink.addEventListener('click', shareCurrentGuideLink);

    elements.feedbackYesBtn.addEventListener('click', () => recordFeedback('like'));
    elements.feedbackNoBtn.addEventListener('click', () => recordFeedback('dislike'));

    // Trending chips
    document.querySelectorAll('.chip[data-tag]').forEach(chip => {
      chip.addEventListener('click', (e) => {
        e.preventDefault();
        elements.searchInput.value = chip.dataset.tag;
        state.searchQuery = chip.dataset.tag.toLowerCase();
        applyFilters();
        elements.solutionsGrid.scrollIntoView({ behavior: 'smooth' });
      });
    });
  }

  function closeAllModals() {
    if (elements.detailViewOverlay && elements.detailViewOverlay.classList.contains('active')) closeGuideDetail();
    if (elements.aboutModal && elements.aboutModal.classList.contains('active')) closeAboutModal();
    if (elements.disclaimerModal && elements.disclaimerModal.classList.contains('active')) closeDisclaimerModal();
    if (elements.contactModal && elements.contactModal.classList.contains('active')) closeContactModal();
  }

  function showToast(message) {
    if (!elements.toastContainer) return;
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i class="fas fa-info-circle" style="color: var(--accent-primary);"></i> <span>${escapeHtml(message)}</span>`;
    elements.toastContainer.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.2s ease';
      setTimeout(() => toast.remove(), 200);
    }, 2800);
  }

  function escapeHtml(str) {
    if (!str) return '';
    if (typeof str !== 'string') {
      if (typeof str === 'object') {
        const val = str[state.lang] || str.en || str.hi || '';
        return escapeHtml(String(val));
      }
      str = String(str);
    }
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  window.resetFilters = function () {
    state.activeCategory = 'all';
    state.searchQuery = '';
    state.difficultyFilter = 'all';
    state.sortBy = 'popular';
    elements.searchInput.value = '';
    elements.difficultySelect.value = 'all';
    elements.sortSelect.value = 'popular';
    elements.categoryTabsContainer.querySelectorAll('.cat-tab').forEach(t => {
      t.classList.toggle('active', t.dataset.category === 'all');
    });
    applyFilters();
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
