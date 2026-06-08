/**
 * BLUESKY HEALTH LTD — Site Data Layer
 * Admin edits are stored in localStorage and override these defaults.
 * Keys: bsky_banners, bsky_contact, bsky_doctors, bsky_packages, bsky_services
 */

const DATA_VERSION = "2"; // bump when DEFAULT_DATA shape changes

const DEFAULT_DATA = {
  // Optional homepage banners (popup). Empty array = no popup.
  banners: [],

  // Contact information (both Bangla and English where applicable)
  contact: {
    phones: ["0191 8000 1000", "0191 8000 2000", "0191 8000 3000"],
    addressBn: "৪২/৮/সি, গ্রিন রোড (কেন্দ্রীয় বাসস্ট্যান্ড), ঢাকা-১২১৫",
    addressEn: "42/8C Green Road (Central Bus Stand), Dhaka-1215",
    hoursBn: "সকাল ৮টা — রাত ১০টা | সপ্তাহের ৭ দিন",
    hoursEn: "8:00 AM – 10:00 PM | 7 days a week",
    website: "www.blueskyhealthltd.com",
    email: "info@blueskyhealthltd.com"
  },

  /* ─────────────── DOCTORS ─────────────── */
  doctors: [
    {
      id: "d1",
      name: "ডা. এ.কে.এম. কামরুল হুদা",
      nameEn: "Associate Prof. Dr. AKM Kamrul Huda",
      specialty: "Diabetes, Thyroid & Hormone Diseases Specialist",
      specialtyEn: "Diabetes, Thyroid & Hormone Diseases Specialist",
      specialtyBn: "ডায়াবেটিস, থাইরয়েড ও হরমোন রোগ বিশেষজ্ঞ",
      degrees: "MBBS (DMC), DEM (BIRDEM)",
      institution: "Associate Professor, Endocrinology; Director, NHN, Mohammadpur, Dhaka",
      image: "/images/doctors/d20.jpg",
      category: "endocrinology"
    },
    {
      id: "d2",
      name: "প্রফেসর ডা. এস.এম. আনিসুর রহমান",
      nameEn: "Prof. Dr. S M Anisur Rahman",
      specialty: "Cancer Specialist",
      specialtyEn: "Cancer Specialist",
      specialtyBn: "ক্যান্সার বিশেষজ্ঞ",
      degrees: "MBBS, DIH, DMRT",
      institution: "Professor & Former Head; Department of Radiation Oncology; National Institute of Cancer Research & Hospital",
      image: "/images/doctors/d1.jpg",
      category: "cancer"
    },
    {
      id: "d3",
      name: "ডা. মুহাম্মদ শাহরিয়ার কবির",
      nameEn: "Dr. Muhammad Shahriar Kabir",
      specialty: "Cancer Specialist",
      specialtyEn: "Cancer Specialist",
      specialtyBn: "ক্যান্সার বিশেষজ্ঞ",
      degrees: "MBBS, BCS (Health); MD (Medical Oncology)",
      institution: "Assistant Professor; National Institute of Cancer Research & Hospital",
      image: "/images/doctors/d22.jpeg",
      category: "cancer"
    },
    {
      id: "d4",
      name: "ডা. মোঃ শাহীন কবির",
      nameEn: "Associate Prof. Dr. Mohammed Shaheen Kabir",
      specialty: "Cardiologist & Medicine Specialist",
      specialtyEn: "Cardiologist & Medicine Specialist",
      specialtyBn: "হৃদরোগ ও মেডিসিন বিশেষজ্ঞ",
      degrees: "MBBS, D-Card (BSMMU); MD (Cardiology)",
      institution: "Associate Professor of Cardiology; National Institute of Cardio Vascular Diseases & Hospital",
      image: "/images/doctors/d21.jpeg",
      category: "cardiology"
    },
    {
      id: "d5",
      name: "ডা. এ.কে.এম. জোবায়ের",
      nameEn: "Dr. AKM Jobayer",
      specialty: "Medicine & Liver Specialist",
      specialtyEn: "Medicine & Liver Specialist",
      specialtyBn: "মেডিসিন ও লিভার বিশেষজ্ঞ",
      degrees: "MBBS, BCS (Health), MD (Gastroenterology)",
      institution: "Assistant Professor; National Gastroliver Institute & Hospital",
      image: "/images/doctors/placeholder.svg",
      category: "medicine"
    },
    {
      id: "d6",
      name: "ডা. মোঃ শাহিদুর রহমান (মিলন)",
      nameEn: "Dr. Md. Shahidur Rahman (Milon)",
      specialty: "Medicine & Gastroliver Diseases Specialist",
      specialtyEn: "Medicine & Gastroliver Diseases Specialist",
      specialtyBn: "পাকস্থলী ও লিভার রোগ বিশেষজ্ঞ",
      degrees: "MBBS, BCS (Health), FCPS (Medicine); FCPS (Gastroenterology), MACP (USA)",
      institution: "National Gastroliver Institute & Hospital",
      image: "/images/doctors/placeholder.svg",
      category: "medicine"
    },
    {
      id: "d7",
      name: "ডা. ফৌজিয়া আবুল ফয়েজ",
      nameEn: "Dr. Fowzia Abul Fayez",
      specialty: "Gynecologist & Obstetrician",
      specialtyEn: "Gynecologist & Obstetrician",
      specialtyBn: "গাইনী ও প্রসূতি রোগ বিশেষজ্ঞ",
      degrees: "MBBS, BCS (Health), DGO (DU); FCPS (Gynae & OBS)",
      institution: "Assistant Professor; Dhaka Medical College & Hospital",
      image: "/images/doctors/d11.jpg",
      category: "gynecology"
    },
    {
      id: "d8",
      name: "ডা. বুশরা নূর আল চৌধুরী",
      nameEn: "Dr. Bushra Noor Al Chowdhury",
      specialty: "Breast Surgeon & Cancer Surgery Specialist",
      specialtyEn: "Breast Surgeon & Cancer Surgery Specialist",
      specialtyBn: "স্তন সার্জন ও ক্যান্সার সার্জারি বিশেষজ্ঞ",
      degrees: "MBBS, BCS (Health), MS (Surgical Oncology)",
      institution: "Assistant Professor; National Institute of Cancer Research & Hospital",
      image: "/images/doctors/placeholder.svg",
      category: "cancer"
    },
    {
      id: "d9",
      name: "ডা. শমল কুমার রায়",
      nameEn: "Dr. Shamol Kumar Roy",
      specialty: "General & Laparoscopic Surgeon",
      specialtyEn: "General & Laparoscopic Surgeon",
      specialtyBn: "জেনারেল ও ল্যাপারোস্কোপিক সার্জন",
      degrees: "MBBS, BCS (Health), MS (Surgery)",
      institution: "Registrar, Causality Surgery Dept; Dhaka Medical College & Hospital",
      image: "/images/doctors/placeholder.svg",
      category: "medicine"
    },
    {
      id: "d10",
      name: "ডা. এ. বি. এম. ফারুকুল ইসলাম",
      nameEn: "Dr. A. B. M Farukul Islam",
      specialty: "Medicine, Asthma, Allergy & Chest Disease Specialist",
      specialtyEn: "Medicine, Asthma, Allergy & Chest Disease Specialist",
      specialtyBn: "মেডিসিন, অ্যাজমা, অ্যালার্জি ও ফুসফুস রোগ বিশেষজ্ঞ",
      degrees: "MBBS (Dhaka), PGT (Chest Disease), MPH",
      institution: "National Institute of Disease of the Chest and Hospital",
      image: "/images/doctors/placeholder.svg",
      category: "medicine"
    },
    {
      id: "d11",
      name: "ডা. আফরোজা আক্তার",
      nameEn: "Dr. Afroza Akter",
      specialty: "Psychiatrist",
      specialtyEn: "Psychiatrist",
      specialtyBn: "মনোরোগ বিশেষজ্ঞ",
      degrees: "MBBS, MD (Psychiatry)",
      institution: "Assistant Professor; National Institute of Mental Health",
      image: "/images/doctors/placeholder.svg",
      category: "psychiatry"
    },
    {
      id: "d12",
      name: "ডা. চৌধুরী সামির শওকত",
      nameEn: "Dr. Chowdhury Samir Shawakat",
      specialty: "ENT Specialist & Head-Neck Surgeon",
      specialtyEn: "ENT Specialist & Head-Neck Surgeon",
      specialtyBn: "নাক-কান-গলা বিশেষজ্ঞ ও হেড-নেক সার্জন",
      degrees: "MBBS (Dhaka), DLO (BSMMU); FCPS (ENT & Head-Neck Surgery) (Final Part); MRCS (ENT) (UK), DOHNS (ENT) (UK)",
      institution: "",
      image: "/images/doctors/placeholder.svg",
      category: "ent"
    },
    {
      id: "d13",
      name: "ডা. আসিফ ইকবাল",
      nameEn: "Dr. Asif Iqbal",
      specialty: "General Physician",
      specialtyEn: "General Physician",
      specialtyBn: "সাধারণ চিকিৎসক",
      degrees: "MBBS, BCS (Health)",
      institution: "Assistant Director, DGHS, Dhaka; Specialized Training on Medicine & Cardiology",
      image: "/images/doctors/d19.jpeg",
      category: "medicine"
    },
    {
      id: "d14",
      name: "ডা. ফারিয়া আল কাফি",
      nameEn: "Dr. Faria Al Kafi",
      specialty: "Dermatologist & Veneriologist",
      specialtyEn: "Dermatologist & Veneriologist",
      specialtyBn: "চর্মরোগ ও যৌনরোগ বিশেষজ্ঞ",
      degrees: "MBBS, DDV (BSMMU); Advance Training in Aesthetic Medicine",
      institution: "",
      image: "/images/doctors/placeholder.svg",
      category: "dermatology"
    },
    {
      id: "d15",
      name: "অ্যাসোসিয়েট প্রফেসর ডা. আসিফুর রহমান (বিজু)",
      nameEn: "Associate Prof. Dr. Asifur Rahman (Bijou)",
      specialty: "Brain & Spine Surgeon",
      specialtyEn: "Brain & Spine Surgeon",
      specialtyBn: "মস্তিষ্ক ও মেরুদন্ড সার্জন",
      degrees: "MBBS, MS (Neurosurgery); Trained in Micro-neurosurgery (Turkey, Germany & India)",
      institution: "Associate Professor; Bangabandhu Sheikh Mujib Medical University",
      image: "/images/doctors/placeholder.svg",
      category: "neurology"
    },
    {
      id: "d16",
      name: "প্রফেসর ডা. সামিউল ইসলাম সাদি",
      nameEn: "Professor Dr. Samiul Islam Sadi",
      specialty: "Histopathologist & Cytopathologist",
      specialtyEn: "Histopathologist & Cytopathologist",
      specialtyBn: "হিস্টোপ্যাথলজিস্ট ও সাইটোপ্যাথলজিস্ট",
      degrees: "MBBS, M. Phil",
      institution: "Former Professor; Mugda Medical College; Director, Administration, DG Health",
      image: "/images/doctors/placeholder.svg",
      category: "all"
    },
    {
      id: "d17",
      name: "অ্যাসোসিয়েট প্রফেসর ডা. মুস্তাক আহমেদ জালালী",
      nameEn: "Associate Prof. Dr. Mustak Ahmed Jalali",
      specialty: "Radiology & Imaging Specialist",
      specialtyEn: "Radiology & Imaging Specialist",
      specialtyBn: "রেডিওলজি ও ইমেজিং বিশেষজ্ঞ",
      degrees: "MBBS, FCPS (Radiology & Imaging)",
      institution: "Associate Professor & Ex Department Head; National Institute of Cancer Research & Hospital",
      image: "/images/doctors/placeholder.svg",
      category: "radiology"
    },
    {
      id: "d18",
      name: "প্রফেসর ডা. মাহফুজ আরা ফেরদৌসি",
      nameEn: "Professor Dr. Mahfuz Ara Ferdousi",
      specialty: "Radiology & Imaging Specialist",
      specialtyEn: "Radiology & Imaging Specialist",
      specialtyBn: "রেডিওলজি ও ইমেজিং বিশেষজ্ঞ",
      degrees: "MBBS, FCPS (Radiology & Imaging)",
      institution: "Professor; BIRDEM",
      image: "/images/doctors/placeholder.svg",
      category: "radiology"
    }
  ],

  /* ─────────────── DOCTOR CATEGORIES ─────────────── */
  doctorCategories: [
    { id: "all",          label: "সকল বিশেষজ্ঞ", labelEn: "All Specialists" },
    { id: "cancer",       label: "ক্যান্সার", labelEn: "Cancer" },
    { id: "cardiology",   label: "হৃদরোগ", labelEn: "Cardiology" },
    { id: "medicine",     label: "মেডিসিন", labelEn: "Medicine" },
    { id: "pediatrics",   label: "শিশু রোগ", labelEn: "Pediatrics" },
    { id: "gynecology",   label: "গাইনী", labelEn: "Gynecology" },
    { id: "orthopedics",  label: "অর্থোপেডিক", labelEn: "Orthopedics" },
    { id: "neurology",    label: "নিউরোলজি", labelEn: "Neurology" },
    { id: "dermatology",  label: "চর্মরোগ", labelEn: "Dermatology" },
    { id: "ent",          label: "নাক-কান-গলা", labelEn: "ENT" },
    { id: "radiology",    label: "রেডিওলজি", labelEn: "Radiology" },
    { id: "psychiatry",   label: "মনোরোগ", labelEn: "Psychiatry" },
    { id: "endocrinology", label: "ডায়াবেটিস ও হরমোন", labelEn: "Endocrinology" }
  ],

  /* ─────────────── TEST PACKAGES ─────────────── */
  packages: [
    {
      id: "pkg1",
      nameEn: "Standard Health Package",
      nameBn: "স্ট্যান্ডার্ড স্বাস্থ্য পরীক্ষা প্যাকেজ",
      price: "৳ ৩,০০০/-",
      priceEn: "৳ 3,000/-",
      category: "general",
      color: "#1565C0",
      groups: [
        { title: "Complete Blood Count", tests: ["CBC & ESR"] },
        { title: "ডায়াবেটিস পরীক্ষা", titleEn: "Diabetes Tests", tests: ["Fasting Blood Sugar (FBS)", "2 Hours after ABF"] },
        { title: "Fasting Lipid Profile", tests: ["Triglycerides", "HDL", "LDL", "Total Cholesterol"] },
        { title: "লিভার পরীক্ষা", titleEn: "Liver Function Tests", tests: ["SGPT", "SGOT", "HBsAg", "Anti HCV"] },
        { title: "কিডনি পরীক্ষা", titleEn: "Kidney Function Tests", tests: ["Serum Creatinine", "Uric Acid", "eGFR", "BUN"] },
        { title: "কার্ডিয়াক পরীক্ষা", titleEn: "Cardiac Tests", tests: ["ECG", "Echocardiogram", "X-Ray Chest P/A View"] },
        { title: "অন্যান্য", titleEn: "Others", tests: ["USG of Whole Abdomen"] }
      ]
    },
    {
      id: "pkg2",
      nameEn: "Menstruation Health Package",
      nameBn: "মহিলাদের মাসিক স্বাস্থ্য পরীক্ষা প্যাকেজ",
      price: "৳ ৩,০০০/-",
      priceEn: "৳ 3,000/-",
      category: "women",
      color: "#AD1457",
      groups: [
        { title: "Complete Blood Count", tests: ["CBC & ESR", "RBS", "VDRL", "TPHA", "HBsAg"] },
        { title: "হরমোন প্যানেল", titleEn: "Hormone Panel", tests: ["Prolactin", "Testosterone", "FSH", "LH", "Cortisol"] },
        { title: "অন্যান্য", titleEn: "Others", tests: ["USG of Whole Abdomen"] }
      ]
    },
    {
      id: "pkg3",
      nameEn: "Wellness Package for Woman",
      nameBn: "মহিলাদের জন্য সম্পূর্ণ ওয়েলনেস প্যাকেজ",
      price: "৳ ১৮,০০০/-",
      priceEn: "৳ 18,000/-",
      category: "women",
      color: "#C2185B",
      groups: [
        { title: "Complete Blood Count", tests: ["CBC & ESR"] },
        { title: "ডায়াবেটিস পরীক্ষা", titleEn: "Diabetes Tests", tests: ["Fasting Blood Sugar (FBS)", "2 Hours after ABF", "HbA1c"] },
        { title: "Fasting Lipid Profile", tests: ["Triglycerides", "HDL", "LDL", "Total Cholesterol"] },
        { title: "লিভার পরীক্ষা", titleEn: "Liver Function Tests", tests: ["SGPT", "SGOT", "HBsAg", "Anti HCV"] },
        { title: "কিডনি পরীক্ষা", titleEn: "Kidney Function Tests", tests: ["Serum Creatinine", "Uric Acid", "eGFR", "BUN"] },
        { title: "থাইরয়েড পরীক্ষা", titleEn: "Thyroid Tests", tests: ["T3", "T4", "TSH"] },
        { title: "কার্ডিয়াক পরীক্ষা", titleEn: "Cardiac Tests", tests: ["ECG", "Echocardiogram"] },
        { title: "অন্যান্য", titleEn: "Others", tests: ["PAP Smear", "X-Ray Chest P/A View", "USG of Whole Abdomen", "USG of Both Breast"] }
      ]
    },
    {
      id: "pkg4",
      nameEn: "Wellness Cardiac Check Up",
      nameBn: "কার্ডিয়াক চেক আপ প্যাকেজ",
      price: "৳ ৬,০০০/-",
      priceEn: "৳ 6,000/-",
      category: "cardiac",
      color: "#B71C1C",
      groups: [
        { title: "কার্ডিয়াক পরীক্ষা", titleEn: "Cardiac Tests", tests: ["Troponin-I", "ECG", "X-Ray Chest P/A View", "Echo Color Doppler"] }
      ]
    },
    {
      id: "pkg5",
      nameEn: "Couple Fertility Health Package",
      nameBn: "দম্পতির জন্য ফার্টিলিটি স্বাস্থ্য প্যাকেজ",
      price: "৳ ১২,৫০০/-",
      priceEn: "৳ 12,500/-",
      category: "fertility",
      color: "#6A1B9A",
      groups: [
        { title: "সম্পূর্ণ পরীক্ষা তালিকা", titleEn: "Complete Test List", tests: [
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
      priceEn: "৳ 3,000/-",
      category: "general",
      color: "#00695C",
      groups: [
        { title: "সম্পূর্ণ পরীক্ষা তালিকা", titleEn: "Complete Test List", tests: [
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
      priceEn: "৳ 4,000/-",
      category: "infection",
      color: "#E65100",
      groups: [
        { title: "স্ক্রিনিং পরীক্ষা", titleEn: "Screening Tests", tests: [
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
      priceEn: "৳ 7,000/-",
      category: "hormone",
      color: "#0277BD",
      groups: [
        { title: "থাইরয়েড পরীক্ষা সমূহ", titleEn: "Thyroid Tests", tests: [
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
      priceEn: "৳ 6,000/-",
      category: "general",
      color: "#1A237E",
      groups: [
        { title: "Complete Blood Count", tests: ["CBC & ESR"] },
        { title: "ডায়াবেটিস পরীক্ষা", titleEn: "Diabetes Tests", tests: ["Fasting Blood Sugar (FBS)"] },
        { title: "Fasting Lipid Profile", tests: ["Triglycerides", "Total Cholesterol", "HDL", "LDL"] },
        { title: "লিভার পরীক্ষা", titleEn: "Liver Function Tests", tests: ["SGPT", "SGOT", "HBsAg"] },
        { title: "কিডনি পরীক্ষা", titleEn: "Kidney Function Tests", tests: ["Serum Creatinine"] },
        { title: "কার্ডিয়াক পরীক্ষা", titleEn: "Cardiac Tests", tests: ["ECG", "Echocardiogram", "X-Ray Chest P/A View"] },
        { title: "অন্যান্য", titleEn: "Others", tests: ["USG of Whole Abdomen"] }
      ]
    },
    {
      id: "pkg10",
      nameEn: "Whole Body Health Package",
      nameBn: "সম্পূর্ণ শরীর স্বাস্থ্য পরীক্ষা প্যাকেজ",
      price: "৳ ১৩,০০০/- (পুরুষ) | ৳ ১৫,০০০/- (মহিলা)",
      priceEn: "৳ 13,000/- (Male) | ৳ 15,000/- (Female)",
      category: "comprehensive",
      color: "#0B3D91",
      groups: [
        { title: "Complete Blood Count", tests: ["CBC & ESR"] },
        { title: "ডায়াবেটিস পরীক্ষা", titleEn: "Diabetes Tests", tests: ["Fasting Blood Sugar (FBS)", "2 Hours after ABF", "HbA1c"] },
        { title: "Fasting Lipid Profile", tests: ["Triglycerides", "HDL", "LDL", "Total Cholesterol"] },
        { title: "লিভার পরীক্ষা", titleEn: "Liver Function Tests", tests: ["SGPT", "SGOT", "HBsAg"] },
        { title: "কিডনি পরীক্ষা", titleEn: "Kidney Function Tests", tests: ["Serum Creatinine", "BUN", "Uric Acid", "eGFR"] },
        { title: "থাইরয়েড পরীক্ষা", titleEn: "Thyroid Tests", tests: ["T3", "T4", "TSH", "FT4"] },
        { title: "কার্ডিয়াক পরীক্ষা", titleEn: "Cardiac Tests", tests: ["ECG", "Echocardiogram"] },
        { title: "অন্যান্য", titleEn: "Others", tests: [
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
      priceEn: "৳ 5,000/-",
      category: "cardiac",
      color: "#C62828",
      groups: [
        { title: "হাইপারটেনশন স্ক্রিনিং", titleEn: "Hypertension Screening", tests: [
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
    { id: "all",           label: "সকল প্যাকেজ", labelEn: "All Packages" },
    { id: "general",       label: "জেনারেল", labelEn: "General" },
    { id: "women",         label: "মহিলা", labelEn: "Women" },
    { id: "cardiac",       label: "হার্ট ও রক্ত", labelEn: "Cardiac" },
    { id: "comprehensive", label: "সম্পূর্ণ পরীক্ষা", labelEn: "Comprehensive" },
    { id: "hormone",       label: "হরমোন", labelEn: "Hormone" },
    { id: "infection",     label: "সংক্রমণ", labelEn: "Infection" },
    { id: "fertility",     label: "ফার্টিলিটি", labelEn: "Fertility" }
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
    { value: "২৪+",    label: "বিশেষজ্ঞ চিকিৎসক",        labelEn: "Specialist Doctors" },
    { value: "৯৯.৯৯%", label: "পরীক্ষার নির্ভুলতা",        labelEn: "Test Accuracy" },
    { value: "২৫+",    label: "বছরের অভিজ্ঞতা",          labelEn: "Years of Experience" },
    { value: "১০,০০০", label: "বর্গফুট প্রিমিসেস",       labelEn: "Premises (sqft)" }
  ]
};

/* ───────── Runtime loader (merges localStorage overrides) ───────── */
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
