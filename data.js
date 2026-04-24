/**
 * BLUESKY HEALTH LTD — Site Data Layer
 * Admin edits are stored in localStorage and override these defaults.
 * Keys: bsky_banners, bsky_contact, bsky_doctors, bsky_packages, bsky_services
 *
 * DATA_VERSION: bump this string whenever DEFAULT_DATA structure changes
 * (e.g. new image fields, renamed keys). On mismatch all localStorage is
 * cleared automatically so stale cached data never hides new content.
 */
const DATA_VERSION = "2";

const DEFAULT_DATA = {

  /* ─────────────── BANNERS ─────────────── */
  banners: [
    {
      id: "b1",
      src: "/images/banners/dr-anisur-banner.jpeg",
      alt: "প্রফেসর ডা. এস.এম. আনিসুর রহমান — ক্যান্সার বিশেষজ্ঞ",
      link: "doctors.html",
      active: true
    },
    {
      id: "b2",
      src: "/images/banners/dr-asif-banner.jpeg",
      alt: "ডা. আসিফ ইকবাল — জেনারেল ফিজিশিয়ান",
      link: "doctors.html",
      active: true
    },
    {
      id: "b3",
      src: "/images/banners/dr-fouzia-banner.jpeg",
      alt: "ডা. ফৌজিয়া আবুল ফয়েজ — গাইনী ও প্রসূতি বিশেষজ্ঞ",
      link: "doctors.html",
      active: true
    },
    {
      id: "b4",
      src: "/images/banners/dr-kamruzzaman-banner.jpeg",
      alt: "ডা. কামরুজ্জামান — বিশেষজ্ঞ চিকিৎসক",
      link: "doctors.html",
      active: true
    },
    {
      id: "b5",
      src: "/images/banners/dr-sahin-banner.jpeg",
      alt: "ডা. মোঃ শাহীন কবির — কার্ডিওলজি বিশেষজ্ঞ",
      link: "doctors.html",
      active: true
    },
    {
      id: "b6",
      src: "/images/banners/dr-sahriar-banner.jpeg",
      alt: "ডা. মোঃ সাহরিয়ার কবির — ক্যান্সার মেডিসিন বিশেষজ্ঞ",
      link: "doctors.html",
      active: true
    }
  ],

  /* ─────────────── CONTACT ─────────────── */
  contact: {
    phones: [
      "01918 000 1000",
      "01918 000 2000",
      "01918 000 3000",
      "01918 400 3000",
      "01918 400 2000"
    ],
    address: "Mohakhali TB Gate (Opposite of BRAC Center), Dhaka",
    addressBn: "মহাখালি টিবি গেট (ব্র্যাক সেন্টারের বিপরীতে), ঢাকা",
    hours: "সকাল ৮টা — রাত ৯টা (শনি–বৃহস্পতি)",
    email: "info@blueskyhealth.com.bd",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.7509059819213!2d90.40198!3d23.7794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c702f9f7e041%3A0x7dce7cd6f2f5b7a0!2sMohakhali%20TB%20Gate%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd"
  },

  /* ─────────────── DOCTORS ─────────────── */
  doctors: [
    {
      id: "d1",
      name: "প্রফেসর ডা. এস.এম. আনিসুর রহমান",
      specialty: "ক্যান্সার বিশেষজ্ঞ",
      specialtyEn: "Cancer Specialist",
      degrees: "এমবিবিএস, বিসিএস (স্বাস্থ্য), এমডি (রেডিওথেরাপি)",
      institution: "সাবেক বিভাগীয় প্রধান ও সিনিয়র অধ্যাপক, জাতীয় ক্যান্সার গবেষণা ইনস্টিটিউট",
      image: "/images/doctors/d1.jpg",
      category: "cancer"
    },
    {
      id: "d2",
      name: "ডা. মোঃ শাহিদুল করিম",
      specialty: "ক্যান্সার বিশেষজ্ঞ",
      specialtyEn: "Cancer Specialist",
      degrees: "এমবিবিএস, বিসিএস (স্বাস্থ্য), এমডি (রেডিওথেরাপি)",
      institution: "জাতীয় ক্যান্সার গবেষণা ইনস্টিটিউট ও হাসপাতাল, ঢাকা",
      image: "/images/doctors/placeholder.svg",
      category: "cancer"
    },
    {
      id: "d3",
      name: "ডা. মোহাম্মদ মাহিন করিম",
      specialty: "মেডিসিন ও হৃদরোগ বিশেষজ্ঞ",
      specialtyEn: "Medicine & Cardiology",
      degrees: "এমবিবিএস, বিসিএস (স্বাস্থ্য), এমডি (কার্ডিওলজি)",
      institution: "",
      image: "/images/doctors/placeholder.svg",
      category: "cardiology"
    },
    {
      id: "d4",
      name: "ডা. মোঃ গোলাম মোস্তফা",
      specialty: "মেডিসিন ও হৃদরোগ বিশেষজ্ঞ",
      specialtyEn: "Medicine & Cardiology",
      degrees: "এমবিবিএস, এমডি (মেডিসিন), এফসিপিএস (মেডিসিন)",
      institution: "সহকারী অধ্যাপক",
      image: "/images/doctors/placeholder.svg",
      category: "medicine"
    },
    {
      id: "d5",
      name: "ডা. তাসলিম জাহান",
      specialty: "নবজাতক ও শিশু রোগ বিশেষজ্ঞ",
      specialtyEn: "Neonatology & Pediatrics",
      degrees: "এমবিবিএস, বিসিএস (স্বাস্থ্য), এমডি (শিশু রোগ)",
      institution: "",
      image: "/images/doctors/placeholder.svg",
      category: "pediatrics"
    },
    {
      id: "d6",
      name: "অধ্যাপক ডা. কুদ্দুস আলম বাদল",
      specialty: "অর্থোপেডিক সার্জন",
      specialtyEn: "Orthopedic Surgeon",
      degrees: "এমবিবিএস, এমএস (অর্থোপেডিকস)",
      institution: "",
      image: "/images/doctors/placeholder.svg",
      category: "orthopedics"
    },
    {
      id: "d7",
      name: "ডা. গোলাম হোসেন তৌহিদ",
      specialty: "মেডিসিন বিশেষজ্ঞ",
      specialtyEn: "Medicine Specialist",
      degrees: "এমবিবিএস, এফসিপিএস (মেডিসিন)",
      institution: "",
      image: "/images/doctors/placeholder.svg",
      category: "medicine"
    },
    {
      id: "d8",
      name: "ডা. মোঃ খালিদ মাহমুদ",
      specialty: "নাক, কান, গলা রোগ বিশেষজ্ঞ",
      specialtyEn: "ENT Specialist",
      degrees: "এমবিবিএস, এফসিপিএস (ইএনটি), এমসিপিএস (ইএনটি)",
      institution: "",
      image: "/images/doctors/placeholder.svg",
      category: "ent"
    },
    {
      id: "d9",
      name: "ডা. আতিকুর রহমান নিতু",
      specialty: "কার্ডিওলজি বিশেষজ্ঞ",
      specialtyEn: "Cardiologist",
      degrees: "এমবিবিএস, এমডি (কার্ডিওলজি)",
      institution: "",
      image: "/images/doctors/placeholder.svg",
      category: "cardiology"
    },
    {
      id: "d10",
      name: "ডা. শরিফুল আল কাদির",
      specialty: "চর্ম ও যৌন রোগ বিশেষজ্ঞ",
      specialtyEn: "Dermatology & Venereology",
      degrees: "এমবিবিএস, বিসিএস (স্বাস্থ্য), এমডি (ডার্মাটোলজি)",
      institution: "",
      image: "/images/doctors/placeholder.svg",
      category: "dermatology"
    },
    {
      id: "d11",
      name: "ডা. ফৌজিয়া আবুল ফয়েজ",
      specialty: "গাইনী ও প্রসূতি রোগ বিশেষজ্ঞ",
      specialtyEn: "Gynecology & Obstetrics",
      degrees: "এমবিবিএস, এমসিপিএস (গাইনী), এফসিপিএস (গাইনী)",
      institution: "সহকারী অধ্যাপক, গাইনী ও প্রসূতিবিদ্যা",
      image: "/images/doctors/d11.jpg",
      category: "gynecology"
    },
    {
      id: "d12",
      name: "ডা. রাশিদা বেগম",
      specialty: "গাইনী ও প্রসূতি রোগ বিশেষজ্ঞ",
      specialtyEn: "Gynecology & Obstetrics",
      degrees: "এমবিবিএস, এমসিপিএস (গাইনী)",
      institution: "",
      image: "/images/doctors/placeholder.svg",
      category: "gynecology"
    },
    {
      id: "d13",
      name: "ডা. এ.কে.এম মোবারক",
      specialty: "চক্ষু, ডায়াবেটিস ও মেডিসিন বিশেষজ্ঞ",
      specialtyEn: "Eye, Diabetes & Medicine",
      degrees: "এমবিবিএস, বিসিএস (স্বাস্থ্য)",
      institution: "",
      image: "/images/doctors/placeholder.svg",
      category: "medicine"
    },
    {
      id: "d14",
      name: "ডা. সৈয়দুর রহমান",
      specialty: "জেনারেল ফিজিশিয়ান",
      specialtyEn: "General Physician",
      degrees: "এমবিবিএস",
      institution: "",
      image: "/images/doctors/placeholder.svg",
      category: "medicine"
    },
    {
      id: "d15",
      name: "ডা. আনোয়ারুল ইসলাম সানি",
      specialty: "নিউরোলজি বিশেষজ্ঞ",
      specialtyEn: "Neurologist",
      degrees: "এমবিবিএস, এমডি (নিউরোলজি)",
      institution: "",
      image: "/images/doctors/placeholder.svg",
      category: "neurology"
    },
    {
      id: "d16",
      name: "ডা. মোস্তাফিজুর রহমান",
      specialty: "রেডিওলজি এন্ড ইমেজিং",
      specialtyEn: "Radiology & Imaging",
      degrees: "এমবিবিএস, এমডি (রেডিওলজি)",
      institution: "",
      image: "/images/doctors/placeholder.svg",
      category: "radiology"
    },
    {
      id: "d17",
      name: "ডা. আনোয়ারা বেগম",
      specialty: "মনোরোগ বিশেষজ্ঞ",
      specialtyEn: "Psychiatrist",
      degrees: "এমবিবিএস, এমফিল (সাইকিয়াট্রি)",
      institution: "",
      image: "/images/doctors/placeholder.svg",
      category: "psychiatry"
    },
    {
      id: "d18",
      name: "ডা. তাসলিমা হক",
      specialty: "ইন্টারনাল মেডিসিন বিশেষজ্ঞ",
      specialtyEn: "Internal Medicine",
      degrees: "এমবিবিএস, এমডি (মেডিসিন)",
      institution: "",
      image: "/images/doctors/placeholder.svg",
      category: "medicine"
    },
    {
      id: "d19",
      name: "ডা. আসিফ ইকবাল",
      specialty: "জেনারেল ফিজিশিয়ান",
      specialtyEn: "General Physician",
      degrees: "এমবিবিএস",
      institution: "সহকারী পরিচালক, স্বাস্থ্য অধিদপ্তর",
      image: "/images/doctors/d19.jpeg",
      category: "medicine"
    },
    {
      id: "d20",
      name: "ডা. এ.কে.এম. কামরুল হুদা",
      specialty: "ডায়াবেটিস, থাইরয়েড ও হরমোনাল রোগ বিশেষজ্ঞ",
      specialtyEn: "Diabetes, Thyroid & Hormonal Diseases",
      degrees: "এমবিবিএস (ডিএমসি), এমডি (বারডেম)",
      institution: "পরিচালক, ন্যাশনাল হেলথকেয়ার নেটওয়ার্ক (বারডেম); সহযোগী অধ্যাপক, এন্ডোক্রিনোলজি",
      image: "/images/doctors/d20.jpg",
      category: "endocrinology"
    },
    {
      id: "d21",
      name: "ডা. মোঃ শাহীন কবির",
      specialty: "কার্ডিওলজি (হৃদরোগ) বিশেষজ্ঞ",
      specialtyEn: "Cardiologist (Heart Specialist)",
      degrees: "এমবিবিএস",
      institution: "সহযোগী অধ্যাপক, জাতীয় হৃদরোগ ইনস্টিটিউট",
      image: "/images/doctors/d21.jpeg",
      category: "cardiology"
    },
    {
      id: "d22",
      name: "ডা. মোঃ সাহরিয়ার কবির",
      specialty: "ক্যান্সার মেডিসিন বিশেষজ্ঞ",
      specialtyEn: "Cancer Medicine Specialist",
      degrees: "এমবিবিএস, বিসিএস (স্বাস্থ্য), এমডি (মেডিকেল অনকোলজি)",
      institution: "সহকারী অধ্যাপক, জাতীয় ক্যান্সার গবেষণা ইনস্টিটিউট",
      image: "/images/doctors/d22.jpeg",
      category: "cancer"
    }
  ],

  /* ─────────────── DOCTOR CATEGORIES ─────────────── */
  doctorCategories: [
    { id: "all",          label: "সকল বিশেষজ্ঞ" },
    { id: "cancer",       label: "ক্যান্সার" },
    { id: "cardiology",   label: "হৃদরোগ" },
    { id: "medicine",     label: "মেডিসিন" },
    { id: "pediatrics",   label: "শিশু রোগ" },
    { id: "gynecology",   label: "গাইনী" },
    { id: "orthopedics",  label: "অর্থোপেডিক" },
    { id: "neurology",    label: "নিউরোলজি" },
    { id: "dermatology",  label: "চর্মরোগ" },
    { id: "ent",          label: "নাক-কান-গলা" },
    { id: "radiology",    label: "রেডিওলজি" },
    { id: "psychiatry",   label: "মনোরোগ" },
    { id: "endocrinology", label: "ডায়াবেটিস ও হরমোন" }
  ],

  /* ─────────────── TEST PACKAGES ─────────────── */
  packages: [
    {
      id: "pkg1",
      nameEn: "Standard Health Package",
      nameBn: "স্ট্যান্ডার্ড স্বাস্থ্য পরীক্ষা প্যাকেজ",
      price: "৳ ৩,০০০/-",
      category: "general",
      color: "#1565C0",
      groups: [
        { title: "Complete Blood Count", tests: ["CBC & ESR"] },
        { title: "ডায়াবেটিস পরীক্ষা", tests: ["Fasting Blood Sugar (FBS)", "2 Hours after ABF"] },
        { title: "Fasting Lipid Profile", tests: ["Triglycerides", "HDL", "LDL", "Total Cholesterol"] },
        { title: "লিভার পরীক্ষা", tests: ["SGPT", "SGOT", "HBsAg", "Anti HCV"] },
        { title: "কিডনি পরীক্ষা", tests: ["Serum Creatinine", "Uric Acid", "eGFR", "BUN"] },
        { title: "কার্ডিয়াক পরীক্ষা", tests: ["ECG", "Echocardiogram", "X-Ray Chest P/A View"] },
        { title: "অন্যান্য", tests: ["USG of Whole Abdomen"] }
      ]
    },
    {
      id: "pkg2",
      nameEn: "Menstruation Health Package",
      nameBn: "মহিলাদের মাসিক স্বাস্থ্য পরীক্ষা প্যাকেজ",
      price: "৳ ৩,০০০/-",
      category: "women",
      color: "#AD1457",
      groups: [
        { title: "Complete Blood Count", tests: ["CBC & ESR", "RBS", "VDRL", "TPHA", "HBsAg"] },
        { title: "হরমোন প্যানেল", tests: ["Prolactin", "Testosterone", "FSH", "LH", "Cortisol"] },
        { title: "অন্যান্য", tests: ["USG of Whole Abdomen"] }
      ]
    },
    {
      id: "pkg3",
      nameEn: "Wellness Package for Woman",
      nameBn: "মহিলাদের জন্য সম্পূর্ণ ওয়েলনেস প্যাকেজ",
      price: "৳ ১৮,০০০/-",
      category: "women",
      color: "#C2185B",
      groups: [
        { title: "Complete Blood Count", tests: ["CBC & ESR"] },
        { title: "ডায়াবেটিস পরীক্ষা", tests: ["Fasting Blood Sugar (FBS)", "2 Hours after ABF", "HbA1c"] },
        { title: "Fasting Lipid Profile", tests: ["Triglycerides", "HDL", "LDL", "Total Cholesterol"] },
        { title: "লিভার পরীক্ষা", tests: ["SGPT", "SGOT", "HBsAg", "Anti HCV"] },
        { title: "কিডনি পরীক্ষা", tests: ["Serum Creatinine", "Uric Acid", "eGFR", "BUN"] },
        { title: "থাইরয়েড পরীক্ষা", tests: ["T3", "T4", "TSH"] },
        { title: "কার্ডিয়াক পরীক্ষা", tests: ["ECG", "Echocardiogram"] },
        { title: "অন্যান্য", tests: ["PAP Smear", "X-Ray Chest P/A View", "USG of Whole Abdomen", "USG of Both Breast"] }
      ]
    },
    {
      id: "pkg4",
      nameEn: "Wellness Cardiac Check Up",
      nameBn: "কার্ডিয়াক চেক আপ প্যাকেজ",
      price: "৳ ৬,০০০/-",
      category: "cardiac",
      color: "#B71C1C",
      groups: [
        { title: "কার্ডিয়াক পরীক্ষা", tests: ["Troponin-I", "ECG", "X-Ray Chest P/A View", "Echo Color Doppler"] }
      ]
    },
    {
      id: "pkg5",
      nameEn: "Couple Fertility Health Package",
      nameBn: "দম্পতির জন্য ফার্টিলিটি স্বাস্থ্য প্যাকেজ",
      price: "৳ ১২,৫০০/-",
      category: "fertility",
      color: "#6A1B9A",
      groups: [
        { title: "সম্পূর্ণ পরীক্ষা তালিকা", tests: [
          "Complete Blood Count (CBC) & ESR",
          "RBS", "VDRL", "TPHA", "HBsAg",
          "Prolactin", "Progesterone", "Testosterone",
          "TSH", "T3", "T4", "FT4",
          "AMH, FSH & LH (মাসিকের ২য় দিনে)",
          "USG of Whole Abdomen"
        ]}
      ]
    },
    {
      id: "pkg6",
      nameEn: "Pre-Marital Counselling Health Package",
      nameBn: "বিবাহ পূর্ব স্বাস্থ্য পরীক্ষা প্যাকেজ",
      price: "৳ ৩,০০০/-",
      category: "general",
      color: "#00695C",
      groups: [
        { title: "সম্পূর্ণ পরীক্ষা তালিকা", tests: [
          "Complete Blood Count (CBC) & ESR",
          "Blood Grouping", "RBS", "VDRL", "TPHA", "HBsAg",
          "Prolactin", "TSH", "FT4",
          "USG of Whole Abdomen"
        ]}
      ]
    },
    {
      id: "pkg7",
      nameEn: "Dengue & Chikungunya Screening",
      nameBn: "ডেঙ্গু এবং চিকুনগুনিয়া স্ক্রিনিং প্যাকেজ",
      price: "৳ ৪,০০০/-",
      category: "infection",
      color: "#E65100",
      groups: [
        { title: "স্ক্রিনিং পরীক্ষা", tests: [
          "Complete Blood Count (CBC) & ESR",
          "Dengue NS1Ag",
          "Dengue Antibody IgM & IgG (ICT)",
          "Chikungunya IgM (ICT)",
          "Consultation"
        ]}
      ]
    },
    {
      id: "pkg8",
      nameEn: "Thyroid Package",
      nameBn: "থাইরয়েড পরীক্ষা প্যাকেজ",
      price: "৳ ৭,০০০/-",
      category: "hormone",
      color: "#0277BD",
      groups: [
        { title: "থাইরয়েড পরীক্ষা সমূহ", tests: [
          "Complete Blood Count (CBC & ESR)",
          "T3", "T4", "TSH", "FT3", "FT4",
          "Anti-Thyroid Antibody",
          "USG of Thyroid Gland"
        ]}
      ]
    },
    {
      id: "pkg9",
      nameEn: "Executive Health Package",
      nameBn: "এক্সিকিউটিভ স্বাস্থ্য পরীক্ষা প্যাকেজ",
      price: "৳ ৬,০০০/-",
      category: "general",
      color: "#1A237E",
      groups: [
        { title: "Complete Blood Count", tests: ["CBC & ESR"] },
        { title: "ডায়াবেটিস পরীক্ষা", tests: ["Fasting Blood Sugar (FBS)"] },
        { title: "Fasting Lipid Profile", tests: ["Triglycerides", "Total Cholesterol", "HDL", "LDL"] },
        { title: "লিভার পরীক্ষা", tests: ["SGPT", "SGOT", "HBsAg"] },
        { title: "কিডনি পরীক্ষা", tests: ["Serum Creatinine"] },
        { title: "কার্ডিয়াক পরীক্ষা", tests: ["ECG", "Echocardiogram", "X-Ray Chest P/A View"] },
        { title: "অন্যান্য", tests: ["USG of Whole Abdomen"] }
      ]
    },
    {
      id: "pkg10",
      nameEn: "Whole Body Health Package",
      nameBn: "সম্পূর্ণ শরীর স্বাস্থ্য পরীক্ষা প্যাকেজ",
      price: "৳ ১৩,০০০/- (পুরুষ) | ৳ ১৫,০০০/- (মহিলা)",
      category: "comprehensive",
      color: "#0B3D91",
      groups: [
        { title: "Complete Blood Count", tests: ["CBC & ESR"] },
        { title: "ডায়াবেটিস পরীক্ষা", tests: ["Fasting Blood Sugar (FBS)", "2 Hours after ABF", "HbA1c"] },
        { title: "Fasting Lipid Profile", tests: ["Triglycerides", "HDL", "LDL", "Total Cholesterol"] },
        { title: "লিভার পরীক্ষা", tests: ["SGPT", "SGOT", "HBsAg"] },
        { title: "কিডনি পরীক্ষা", tests: ["Serum Creatinine", "BUN", "Uric Acid", "eGFR"] },
        { title: "থাইরয়েড পরীক্ষা", tests: ["T3", "T4", "TSH", "FT4"] },
        { title: "কার্ডিয়াক পরীক্ষা", tests: ["ECG", "Echocardiogram"] },
        { title: "অন্যান্য", tests: [
          "Serum Calcium", "Vitamin D3 (OH)", "Serum Electrolytes",
          "PSA / PAP Smear", "Urine R/E", "Stool R/E",
          "X-Ray Chest P/A View",
          "USG of Whole Abdomen with PVR",
          "Prostate USG / USG of Female Both Breast"
        ]}
      ]
    },
    {
      id: "pkg11",
      nameEn: "Hypertension Package",
      nameBn: "উচ্চ রক্তচাপ পরীক্ষা প্যাকেজ",
      price: "৳ ৫,০০০/-",
      category: "cardiac",
      color: "#C62828",
      groups: [
        { title: "হাইপারটেনশন স্ক্রিনিং", tests: [
          "Complete Blood Count (CBC & ESR)",
          "Fasting Blood Sugar (FBS)",
          "Serum Creatinine",
          "Fasting Lipid Profile",
          "Serum Electrolytes",
          "Urine R/E",
          "ECG"
        ]}
      ]
    }
  ],

  /* ─────────────── PACKAGE CATEGORIES ─────────────── */
  packageCategories: [
    { id: "all",           label: "সকল প্যাকেজ" },
    { id: "general",       label: "জেনারেল" },
    { id: "women",         label: "মহিলা" },
    { id: "cardiac",       label: "হার্ট ও রক্ত" },
    { id: "comprehensive", label: "সম্পূর্ণ পরীক্ষা" },
    { id: "hormone",       label: "হরমোন" },
    { id: "infection",     label: "সংক্রমণ" },
    { id: "fertility",     label: "ফার্টিলিটি" }
  ],

  /* ─────────────── SERVICES / DEPARTMENTS ─────────────── */
  services: [
    {
      id: "s1",
      icon: "🔬",
      titleEn: "Pathology",
      titleBn: "প্যাথলজি",
      items: [
        "ক্লিনিক্যাল প্যাথলজি", "হেমাটোলজি", "মাইক্রোবায়োলজি",
        "বায়ো-কেমিস্ট্রি", "ইমিউনোলজি", "সেরোলজি",
        "হিস্টোপ্যাথলজি", "সাইটোপ্যাথলজি"
      ]
    },
    {
      id: "s2",
      icon: "🩻",
      titleEn: "Radiology & Imaging",
      titleBn: "রেডিওলজি এন্ড ইমেজিং",
      items: [
        "জাপানি মেশিন সিটি স্ক্যান (80 Slice)",
        "500mA ডিজিটাল এক্স-রে",
        "কালার ডপলার স্টাডি",
        "আল্ট্রাসনোগ্রাফি (2D & 4D)",
        "ম্যামোগ্রাফি"
      ]
    },
    {
      id: "s3",
      icon: "🫀",
      titleEn: "Cardiac Tests",
      titleBn: "কার্ডিয়াক টেস্ট",
      items: [
        "ইসিজি (24 Channel)",
        "ইকোকার্ডিওগ্রাফি (2D & 4D)",
        "কালার ডপলার স্টাডি",
        "পালমোনারি ফাংশন টেস্ট (PFT)"
      ]
    },
    {
      id: "s4",
      icon: "🎥",
      titleEn: "Video Endoscopic Procedures",
      titleBn: "ভিডিও এন্ডোস্কোপিক প্রসিডিউর",
      items: [
        "জিআই এন্ডোস্কোপি",
        "কোলনোস্কোপি",
        "ব্রংকোস্কোপি",
        "ল্যারিংগোস্কোপি"
      ],
      note: "Japanese Fujifilm 350 HD"
    },
    {
      id: "s5",
      icon: "🧬",
      titleEn: "Specialized Diagnostics",
      titleBn: "বিশেষায়িত পরীক্ষা",
      items: [
        "CT Guided Core Biopsy",
        "CT Guided FNAC",
        "DNA Test",
        "RT-PCR Test",
        "স্পাইরোমেট্রি",
        "অডিওমেট্রি"
      ]
    },
    {
      id: "s6",
      icon: "🩺",
      titleEn: "Consultancy",
      titleBn: "বিশেষজ্ঞ পরামর্শ সেবা",
      items: [
        "বিশেষজ্ঞ ডাক্তারদের চেম্বার",
        "হেলথ চেক-আপ",
        "ভ্যাকসিনেশন",
        "অনলাইন ও অফলাইন অ্যাপয়েন্টমেন্ট"
      ]
    }
  ],

  /* ─────────────── EQUIPMENT ─────────────── */
  equipment: [
    {
      id: "eq1",
      name: "CT Scan Machine",
      brand: "Toshiba / Canon (Japan)",
      detail: "80-Slice জাপানি সিটি স্ক্যান মেশিন — ক্যান্সার ও জটিল রোগ নির্ণয়ে বাংলাদেশের সেরা",
      image: "/images/equipment/ct-scan.jpg"
    },
    {
      id: "eq2",
      name: "Digital X-Ray",
      brand: "Radieleia — Spain",
      detail: "500mA ডিজিটাল এক্স-রে মেশিন — স্পেন থেকে আনা উন্নতমানের রেডিওলজি যন্ত্রপাতি",
      image: "/images/equipment/xray.jpg"
    },
    {
      id: "eq3",
      name: "Ultrasonography (2D & 4D)",
      brand: "Philips",
      detail: "Philips-এর আধুনিক 2D ও 4D আল্ট্রাসনোগ্রাফি মেশিন",
      image: "/images/equipment/usg.jpg"
    },
    {
      id: "eq4",
      name: "Echocardiography (2D & 4D)",
      brand: "—",
      detail: "হৃদযন্ত্রের গভীর পরীক্ষার জন্য আধুনিক ইকোকার্ডিওগ্রাফি",
      image: "/images/equipment/echo.jpg"
    },
    {
      id: "eq5",
      name: "Bio-Chemistry Analyser",
      brand: "Pentra",
      detail: "Pentra বায়ো-কেমিস্ট্রি অ্যানালাইজার — নির্ভুল রক্ত পরীক্ষার গ্যারান্টি",
      image: "/images/equipment/biochemistry.jpg"
    },
    {
      id: "eq6",
      name: "Haematology Analyser",
      brand: "Yumarin",
      detail: "Yumarin হেমাটোলজি অ্যানালাইজার — CBC ও রক্তের বিস্তারিত পরীক্ষা",
      image: "/images/equipment/haematology.jpg"
    },
    {
      id: "eq7",
      name: "Video Endoscope",
      brand: "Fujifilm 350 HD (Japan)",
      detail: "জাপানি Fujifilm 350 HD ভিডিও এন্ডোস্কোপ — পাকস্থলী ও অন্ত্রের পরীক্ষায় সর্বোচ্চ স্পষ্টতা",
      image: "/images/equipment/endoscope.jpg"
    }
  ],

  /* ─────────────── STATS ─────────────── */
  stats: [
    { value: "২৪+",    label: "বিশেষজ্ঞ চিকিৎসক" },
    { value: "৯৯.৯৯%", label: "পরীক্ষার নির্ভুলতা" },
    { value: "২৫+",    label: "বছরের অভিজ্ঞতা" },
    { value: "১০,০০০", label: "বর্গফুট প্রিমিসেস" }
  ]
};

/* ───────── Runtime loader (merges localStorage overrides) ───────── */
function getSiteData() {
  const keys = ["banners", "contact", "doctors", "packages", "services", "equipment", "stats"];

  // Version guard: if DEFAULT_DATA structure changed, wipe all stale localStorage
  // so old cached records (e.g. equipment without image paths) never block new content.
  try {
    if (localStorage.getItem("bsky_data_version") !== DATA_VERSION) {
      keys.forEach(k => localStorage.removeItem("bsky_" + k));
      localStorage.setItem("bsky_data_version", DATA_VERSION);
    }
  } catch (_) {}

  const data = JSON.parse(JSON.stringify(DEFAULT_DATA)); // deep clone
  keys.forEach(k => {
    try {
      const stored = localStorage.getItem("bsky_" + k);
      if (stored) data[k] = JSON.parse(stored);
    } catch (_) {}
  });
  return data;
}
