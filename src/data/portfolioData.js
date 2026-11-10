/**
 * =========================================================================
 * BAGAS PORTFOLIO DATA CONFIGURATION
 * =========================================================================
 * Pusat konfigurasi seluruh data personal, hobi, skill, dan proyek.
 */

export const personalData = {
  // [NAMA]
  name: "Bagas",
  fullName: "Bagas Chandra Nirvana",
  title: "Junior Web Developer",
  tagline: "Creating digital experiences through code, design, and technology.",
  location: "Indonesia",
  
  // Status availability
  availability: {
    status: "Available for Projects & Opportunities",
    isAvailable: true,
  },

  // [FOTO] - Path avatar profil
  avatar: "/assets/profile-photo.jpg", 
  avatarFallback: "B",

  // [PROFIL] - Deskripsi singkat untuk Hero Section & About Section
  heroSummary: "A passionate developer specialized in building modern web applications, scalable backend architectures, and delightful interactive user experiences.",
  
  about: {
    story: "Saya adalah seorang developer yang berfokus pada pembangunan produk digital modern, performa, dan estetika. Menggabungkan ketelitian logika pemrograman dengan kepekaan desain antarmuka, saya selalu berupaya menciptakan solusi teknologi yang tidak hanya berfungsi dengan baik, tetapi juga memberikan pengalaman terbaik bagi pengguna.",
    philosophy: "Saya percaya bahwa kode yang bersih, arsitektur yang kokoh, dan desain yang terarah adalah kunci dari setiap produk digital yang bernilai tinggi.",
    
    // Background Pendidikan & Info Personal
    education: [
      {
        degree: "SMKN 20 JAKARTA", 
        institution: "Rekayasa Perangkat Lunak",
        period: "2024 — 2027",
        description: "Fokus pada Software Engineering, Algoritma, Basis Data, dan Pengembangan Aplikasi Berbasis Web & Mobile."
      }
    ],

    focusAreas: [
      {
        title: "Modern Web Architecture",
        description: "Membangun frontend reaktif dengan performa kilat dan arsitektur komponen yang mudah dipelihara."
      },
      {
        title: "Robust Backend & APIs",
        description: "Merancang RESTful API, otentikasi aman, dan manajemen basis data relasional yang skalabel."
      },
      {
        title: "UI/UX & Micro-Interactions",
        description: "Menghidupkan antarmuka dengan interaksi halus, aksesibilitas tinggi, dan sentuhan visual digital yang elegan."
      }
    ],

    metrics: [
      { label: "Years Experience", value: "2+" },
      { label: "Projects Completed", value: "3+" },
      { label: "Tech Stacks Mastered", value: "10+" },
      { label: "Client Satisfaction", value: "100%" }
    ]
  },

  // [HOBI] - My Hobbies Section dengan data interaktif
  hobbies: [
    {
      id: "gaming",
      title: "Gaming",
      subtitle: "Tactical & Esports Enthusiast",
      description: "Menikmati permainan strategi dan aksi kompetitif yang mengasah kecepatan respon, konsentrasi tingkat tinggi, serta analisis taktis.",
      icon: "Gamepad2",
      badge: "Strategy & Reflex",
      color: "from-blue-500/20 to-indigo-500/10",
      accent: "#6366f1",
      actionType: "page",
      games: [
        {
          id: "free-fire",
          name: "Garena Free Fire",
          genre: "Tactical Battle Royale",
          badge: "Fast APM & Clutch Focus",
          description: "Game battle royale dinamis dengan tempo cepat yang melatih koordinasi tim, pengambilan keputusan sepersekian detik, ketahanan mental di zona kritis, dan positioning taktis dalam arena kompetitif.",
          highlights: ["Refleks dan Micro-Decision Cepat", "Spatial Awareness & Positioning", "Komunikasi & Koordinasi Tim"],
          photos: [
            "/assets/hobbies/gaming-ff-1.jpeg",
            "/assets/hobbies/gaming-ff-2.jpeg"
          ]
        },
        {
          id: "efootball",
          name: "eFootball",
          genre: "Tactical Football Simulation",
          badge: "Vision & Execution",
          description: "Simulasi sepak bola taktis tingkat tinggi dengan penekanan pada build-up serangan terstruktur, manajemen formasi adaptif, membaca ruang passing lawan, dan presisi eksekusi timing.",
          highlights: ["Penguasaan Tempo Permainan", "Formasi Adaptif & Mind Game", "Presisi Timing & Ball Control"],
          photos: [
            "/assets/hobbies/gaming-efootball-1.jpeg",
            "/assets/hobbies/gaming-efootball-2.jpeg"
          ]
        }
      ]
    },
    {
      id: "coding",
      title: "Creative Coding",
      subtitle: "Side Projects & Experiments",
      description: "Mengeksplorasi teknologi baru, membangun utilitas kecil, dan bereksperimen dengan animasi web modern, WebGL shaders, serta algoritma kreatif.",
      icon: "Code2",
      badge: "Continuous Learning",
      color: "from-cyan-500/20 to-teal-500/10",
      accent: "#06b6d4",
      actionType: "page",
      details: {
        intro: "Eksplorasi tanpa batas di balik layar kode. Ruang bagi ide-ide eksperimental, antarmuka visual dinamis, animasi interaktif, dan arsitektur kode modern yang memadukan estetika desain dengan efisiensi logika teknis.",
        highlights: [
          "Eksperimen Animasi & Canvas/WebGL Rendering",
          "Membangun Prototip UI Futuristik & Responsif",
          "Optimasi Kinerja Kode & Modularitas Komponen"
        ],
        photos: [
          "/assets/hobbies/coding-1.png",
          "/assets/hobbies/coding-2.png",
          "/assets/hobbies/coding-3.png"
        ]
      }
    },
    {
      id: "content-creation",
      title: "Content Creation",
      subtitle: "Tech Insights & Knowledge Sharing",
      description: "Berbagi wawasan seputar tips pemrograman, video kreatif, setup developer, dan review tools produktivitas untuk komunitas digital.",
      icon: "Video",
      badge: "Knowledge Sharing",
      color: "from-rose-500/20 to-pink-500/10",
      accent: "#f43f5e",
      actionType: "popup-platforms",
      links: {
        youtube: "https://youtube.com/@x.fc.m?si=WrxOVqMlG-Wh2vWe",
        tiktok: "https://www.tiktok.com/@bgfcm2?_r=1&_t=ZS-990eDAXL5Iw"
      }
    },
    {
      id: "photography",
      title: "Photography",
      subtitle: "Urban & Minimalist Frames",
      description: "Menangkap komposisi visual, pencahayaan dramatis, dan estetika minimalis melalui sudut pandang lensa kamera.",
      icon: "Camera",
      badge: "Visual Sense",
      color: "from-amber-500/20 to-orange-500/10",
      accent: "#f59e0b",
      actionType: "popup-gallery",
      photos: [
        { src: "/assets/hobbies/photo-1.jpeg", title: "Frame 01", tag: "Atmospheric" },
        { src: "/assets/hobbies/photo-2.jpeg", title: "Frame 02", tag: "Composition" },
        { src: "/assets/hobbies/photo-3.jpeg", title: "Frame 03", tag: "Perspective" },
        { src: "/assets/hobbies/photo-4.jpeg", title: "Frame 04", tag: "Light & Tone" },
        { src: "/assets/hobbies/photo-5.jpeg", title: "Frame 05", tag: "Detail Focus" },
        { src: "/assets/hobbies/photo-6.jpeg", title: "Frame 06", tag: "Minimalism" },
        { src: "/assets/hobbies/photo-7.jpeg", title: "Frame 07", tag: "Shadows" }
      ]
    },
    {
      id: "music",
      title: "Music & Audio",
      subtitle: "Lo-Fi & Deep Work Beats",
      description: "Mendengarkan aransemen musik instrumen untuk menjaga konsentrasi mendalam (deep work) saat membangun arsitektur kode.",
      icon: "Headphones",
      badge: "Deep Work Flow",
      color: "from-violet-500/20 to-purple-500/10",
      accent: "#8b5cf6",
      actionType: "link",
      link: "https://youtu.be/mjO1yZyi6bM?si=TCu7sYVDb0edY8eN"
    }
  ],

  // [PROJECT] - Featured & Secondary Projects
  projects: [
    {
      id: "github-profile",
      isFeatured: true,
      title: "GitHub — Bagas Chandra Nirvana",
      tagline: "Lihat profil dan proyek-proyek saya di GitHub",
      shortDescription: "Jelajahi repositori, proyek, dan aktivitas coding saya di GitHub.",
      thumbnail: "/assets/github-profile.png",
      tags: ["GitHub", "Repositories", "Web Development"],
      role: "GitHub Profile",
      year: "bgazz442",
      githubUrl: "https://github.com/bgazz442",
    },
    {
      id: "bank-nusantara-syariah",
      isFeatured: false,
      title: "Website Bank Nusantara Syariah (BNS)",
      tagline: "Platform Perbankan Syariah Digital Modern, Amanah & Transparan",
      shortDescription: "Website perbankan syariah modern dengan informasi produk simpanan, pembiayaan mudharabah, simulasi kalkulator profit, dan akses e-banking terintegrasi.",
      thumbnail: "/assets/project-bns.png",
      tags: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Vercel"],
      role: "Frontend Developer",
      year: "2025",
      liveUrl: "https://bank-nusantara-syariah-25.vercel.app/",
      githubUrl: "https://github.com/bgazz442/bank-nusantara-syariah",
      details: {
        overview: "Website resmi Bank Nusantara Syariah (BNS) dibangun untuk menghadirkan pengalaman perbankan syariah modern yang transparan, mudah diakses, dan sesuai dengan prinsip-prinsip syariat Islam di era digital.",
        problem: "Kebutuhan nasabah akan informasi layanan finansial syariah yang jelas, simulasi perhitungan bagi hasil yang transparan, serta navigasi digital yang intuitif dan cepat.",
        solution: "Mengembangkan antarmuka web berperforma tinggi dengan desain elegan bernuansa hijau zamrud & emas, dilengkapi kalkulator simulasi pembiayaan interaktif dan akses cepat ke layanan nasabah.",
        features: [
          "Katalog lengkap produk tabungan Wadiah & investasi Mudharabah",
          "Kalkulator simulasi bagi hasil dan pembiayaan interaktif",
          "Akses cepat ke portal E-Banking dan panduan pembukaan rekening",
          "Desain responsif optimal untuk perangkat mobile, tablet, dan desktop",
          "Keamanan standar perbankan dengan arsitektur web modern"
        ],
        contribution: "Membangun antarmuka frontend dengan React dan Tailwind CSS, mendesain UI/UX perbankan modern, serta mengoptimalkan performa web di platform Vercel."
      }
    },
    {
      id: "selarasa-gudskul",
      isFeatured: false,
      title: "Selarasa Gudskul",
      tagline: "Sensasi Rasa Otentik dengan Sentuhan Kreatif & Estetika Modern",
      shortDescription: "Website profil dan showcase kuliner artisanal Selarasa Gudskul yang menampilkan menu istimewa, kisah di balik setiap hidangan, dan pemesanan online.",
      thumbnail: "/assets/project-selarasa.png",
      tags: ["React", "Vite", "Tailwind CSS", "Modern UI", "Vercel"],
      role: "Frontend & UI/UX Designer",
      year: "2025",
      liveUrl: "https://rasaaa.vercel.app/",
      githubUrl: "https://github.com/bgazz442/rasaaa",
      details: {
        overview: "Selarasa Gudskul adalah platform digital untuk brand kuliner yang mengedepankan cita rasa otentik dengan presentasi modern dan sentuhan visual yang menggugah selera.",
        problem: "Banyak bisnis kuliner kesulitan mengkomunikasikan keunikan rasa dan atmosfer cafe/resto mereka melalui platform web yang seringkali kaku dan kurang interaktif.",
        solution: "Merancang web showcase dengan palet warna hangat (warm coffee & terracotta), tipografi artisanal berkarakter, serta sistem katalog menu dinamis yang memudahkan eksplorasi pengunjung.",
        features: [
          "Showcase visual hidangan signature dengan deskripsi dan harga transparan",
          "Katalog menu terstruktur (makanan utama, camilan artisanal, racikan minuman kopi & teh)",
          "Integrasi tombol pemesanan langsung dan peta lokasi",
          "Desain mikro-interaksi yang halus untuk pengalaman berselancar yang memikat"
        ],
        contribution: "Merancang konsep visual UI/UX dari awal, mengimplementasikan kode frontend yang ringan dan responsif, serta mendeploy web ke server produksi Vercel."
      }
    },
    {
      id: "catatin",
      isFeatured: false,
      title: "CatatIN — Catatan Belajar Digital",
      tagline: "Catat, Pahami, Raih Prestasi",
      shortDescription: "Aplikasi catatan belajar digital untuk siswa SMK RPL, dengan pengelolaan materi berdasarkan kategori, pencarian, dan fitur favorit.",
      thumbnail: "/assets/project-catatin.png",
      tags: ["Laravel", "PHP", "Blade", "Tailwind CSS", "MySQL"],
      role: "Full-Stack Developer",
      year: "2026",
      githubUrl: "https://github.com/bgazz442/CatatIN",
      details: {
        overview: "CatatIN adalah aplikasi catatan belajar digital yang dirancang untuk membantu siswa SMK, khususnya jurusan Rekayasa Perangkat Lunak, menyimpan dan mengelola materi pelajaran dengan lebih teratur.",
        problem: "Materi belajar yang tersebar di berbagai catatan membuatnya sulit untuk ditata dan ditemukan kembali saat dibutuhkan.",
        solution: "Menyediakan ruang catatan terpusat dengan kategori pelajaran, pencarian, dan penanda favorit agar materi lebih mudah dikelola dan diakses.",
        features: [
          "Membuat, melihat, mengubah, dan menghapus catatan belajar",
          "Mengelompokkan materi berdasarkan kategori atau mata pelajaran",
          "Mencari dan menyaring catatan, termasuk daftar khusus favorit",
          "Dashboard dengan statistik dan catatan terbaru",
          "Autentikasi pengguna untuk mengelola catatan secara personal"
        ],
        contribution: "Mengembangkan aplikasi full-stack menggunakan Laravel dan Blade, termasuk pengelolaan catatan, pencarian dan filter, autentikasi, serta antarmuka responsif dengan Tailwind CSS."
      }
    }
  ],

  // [EMAIL], [GITHUB], [LINKEDIN] & Social Links
  contact: {
    email: "bagasmnoy@gmail.com",
    github: "https://github.com/bgazz442",
    linkedin: "https://www.linkedin.com/in/bagas-chandra-n-73b64a38a?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    instagram: "https://www.instagram.com/not.thegas?igsi=NmV6YXNqd201MjM4",
    locationDisplay: "Indonesia (Open to Worldwide Remote & On-site)",
    ctaHeading: "Have a project in mind?",
    ctaSubheading: "Let's build something meaningful together. Whether it's a fullstack web app, custom software system, or professional engineering collaboration.",
  },

  // Footer Info
  footer: {
    copyrightName: "Bagas",
    currentYear: "2026",
    tagline: "Designed with modern digital aesthetics & crafted for performance."
  }
};
