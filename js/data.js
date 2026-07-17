// ============================================
// ANIME STREAM - Data Layer
// Complete anime database with legal sources
// ============================================

const animeData = {
    // Hero Slides
    heroSlides: [
        {
            id: 1,
            title: "هجوم العمالقة",
            titleEn: "Attack on Titan",
            titleJp: "進撃の巨人",
            description: "في عالم حيث البشرية محاصرة داخل جدران ضخمة لحمايتها من عملاقة آكلة للبشر، يكتشف إرين ييغر قوة تيتان داخل نفسه ويقرر محاربة هذه المخلوقات.",
            image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=1920&h=1080&fit=crop",
            rating: 9.1,
            year: 2023,
            duration: "24 دقيقة",
            episodes: 87,
            status: "مكتمل",
            type: "TV Series",
            genres: ["أكشن", "خيال علمي", "دراما"],
            source: "Crunchyroll",
            sourceUrl: "https://www.crunchyroll.com/attack-on-titan"
        },
        {
            id: 2,
            title: "قاتل الشياطين",
            titleEn: "Demon Slayer",
            titleJp: "鬼滅の刃",
            description: "بعد مقتل عائلته على يد شيطان، ينضم تانجيرو كامادو إلى فيلق قتال الشياطين لينتقم ويحول أخته نيزوكو من شيطان إلى إنسان.",
            image: "https://images.unsplash.com/photo-1541562232579-512a21360020?w=1920&h=1080&fit=crop",
            rating: 8.7,
            year: 2023,
            duration: "24 دقيقة",
            episodes: 55,
            status: "مستمر",
            type: "TV Series",
            genres: ["أكشن", "خيال", "مغامرات"],
            source: "Crunchyroll",
            sourceUrl: "https://www.crunchyroll.com/demon-slayer-kimetsu-no-yaiba"
        },
        {
            id: 3,
            title: "جوجوتسو كايسن",
            titleEn: "Jujutsu Kaisen",
            titleJp: "呪術廻戦",
            description: "يتابع الطالب يوجي إيتادوري مغامراته في عالم الشامانين بعد ابتلاعه إصبعاً ملعوناً ليصبح vessel لأقوى لعنة.",
            image: "https://images.unsplash.com/photo-1618336753974-aae8e04506aa?w=1920&h=1080&fit=crop",
            rating: 8.6,
            year: 2023,
            duration: "24 دقيقة",
            episodes: 47,
            status: "مستمر",
            type: "TV Series",
            genres: ["أكشن", "خارق للطبيعة", "مدرسي"],
            source: "Crunchyroll",
            sourceUrl: "https://www.crunchyroll.com/jujutsu-kaisen"
        },
        {
            id: 4,
            title: "ون بيس",
            titleEn: "One Piece",
            titleJp: "ワンピース",
            description: "مغامرات القرصان مونكي دي لوفي وطاقمه في رحلة للعثور على كنز ون بيس الأسطوري وتحقيق حلم لوفي بأن يصبح ملك القراصنة.",
            image: "https://images.unsplash.com/photo-1560972550-aba3456b5564?w=1920&h=1080&fit=crop",
            rating: 8.9,
            year: 2024,
            duration: "24 دقيقة",
            episodes: 1100,
            status: "مستمر",
            type: "TV Series",
            genres: ["مغامرات", "كوميدي", "خيال"],
            source: "Crunchyroll",
            sourceUrl: "https://www.crunchyroll.com/one-piece"
        },
        {
            id: 5,
            title: "ناروتو",
            titleEn: "Naruto",
            titleJp: "ナルト",
            description: "قصة النينجا الشاب ناروتو أوزوماكي الذي يحلم بأن يصبح هوكاجي (زعيم القرية) رغم كراهية القرية له بسبب الثعلب الملعون بداخله.",
            image: "https://images.unsplash.com/photo-1607604276583-eef5a0ad5078?w=1920&h=1080&fit=crop",
            rating: 8.3,
            year: 2024,
            duration: "24 دقيقة",
            episodes: 720,
            status: "مكتمل",
            type: "TV Series",
            genres: ["أكشن", "مغامرات", "نينجا"],
            source: "Crunchyroll",
            sourceUrl: "https://www.crunchyroll.com/naruto"
        }
    ],

    // Trending Anime
    trending: [
        {
            id: 101,
            title: "Solo Leveling",
            titleEn: "Solo Leveling",
            titleJp: "俺だけレベルアップな件",
            image: "https://images.unsplash.com/photo-1613376023733-0a73315d9b06?w=400&h=600&fit=crop",
            rating: 8.8,
            year: 2024,
            episodes: 12,
            type: "TV",
            status: "موسم 1",
            genres: ["أكشن", "خيال"],
            source: "Crunchyroll"
        },
        {
            id: 102,
            title: "Frieren: Beyond Journey's End",
            titleEn: "Frieren",
            titleJp: "葬送のフリーレン",
            image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=400&h=600&fit=crop",
            rating: 9.2,
            year: 2023,
            episodes: 28,
            type: "TV",
            status: "مستمر",
            genres: ["مغامرات", "دراما", "خيال"],
            source: "Crunchyroll"
        },
        {
            id: 103,
            title: "Spy x Family",
            titleEn: "Spy x Family",
            titleJp: "スパイファミリー",
            image: "https://images.unsplash.com/photo-1560167016-022b78a0258e?w=400&h=600&fit=crop",
            rating: 8.5,
            year: 2023,
            episodes: 25,
            type: "TV",
            status: "موسم 2",
            genres: ["كوميدي", "أكشن", "عائلي"],
            source: "Crunchyroll"
        },
        {
            id: 104,
            title: "Chainsaw Man",
            titleEn: "Chainsaw Man",
            titleJp: "チェンソーマン",
            image: "https://images.unsplash.com/photo-1601850494422-3cf14624b0b3?w=400&h=600&fit=crop",
            rating: 8.6,
            year: 2022,
            episodes: 12,
            type: "TV",
            status: "موسم 1",
            genres: ["أكشن", "رعب", "خارق"],
            source: "Crunchyroll"
        },
        {
            id: 105,
            title: "Blue Lock",
            titleEn: "Blue Lock",
            titleJp: "ブルーロック",
            image: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=400&h=600&fit=crop",
            rating: 8.2,
            year: 2023,
            episodes: 24,
            type: "TV",
            status: "موسم 2",
            genres: ["رياضي", "دراما"],
            source: "Crunchyroll"
        },
        {
            id: 106,
            title: "Vinland Saga",
            titleEn: "Vinland Saga",
            titleJp: "ヴィンランド・サガ",
            image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400&h=600&fit=crop",
            rating: 8.8,
            year: 2023,
            episodes: 24,
            type: "TV",
            status: "موسم 2",
            genres: ["أكشن", "تاريخي", "دراما"],
            source: "Crunchyroll"
        },
        {
            id: 107,
            title: "Oshi no Ko",
            titleEn: "Oshi no Ko",
            titleJp: "【推しの子】",
            image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=400&h=600&fit=crop",
            rating: 8.7,
            year: 2023,
            episodes: 11,
            type: "TV",
            status: "موسم 2",
            genres: ["دراما", "غموض", "خارق"],
            source: "Crunchyroll"
        },
        {
            id: 108,
            title: "Mashle",
            titleEn: "Mashle: Magic and Muscles",
            titleJp: "マッシュル-MASHLE-",
            image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=600&fit=crop",
            rating: 7.8,
            year: 2023,
            episodes: 12,
            type: "TV",
            status: "موسم 2",
            genres: ["كوميدي", "أكشن", "خيال"],
            source: "Crunchyroll"
        }
    ],

    // New Episodes
    newEpisodes: [
        {
            id: 201,
            title: "Solo Leveling",
            episode: "الحلقة 12",
            episodeNum: 12,
            image: "https://images.unsplash.com/photo-1613376023733-0a73315d9b06?w=400&h=225&fit=crop",
            duration: "23:45",
            date: "منذ 2 ساعة",
            source: "Crunchyroll"
        },
        {
            id: 202,
            title: "Frieren: Beyond Journey's End",
            episode: "الحلقة 28",
            episodeNum: 28,
            image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=400&h=225&fit=crop",
            duration: "24:10",
            date: "منذ 5 ساعات",
            source: "Crunchyroll"
        },
        {
            id: 203,
            title: "Spy x Family",
            episode: "الحلقة 25",
            episodeNum: 25,
            image: "https://images.unsplash.com/photo-1560167016-022b78a0258e?w=400&h=225&fit=crop",
            duration: "23:30",
            date: "منذ يوم",
            source: "Crunchyroll"
        },
        {
            id: 204,
            title: "Blue Lock",
            episode: "الحلقة 24",
            episodeNum: 24,
            image: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=400&h=225&fit=crop",
            duration: "23:55",
            date: "منذ يومين",
            source: "Crunchyroll"
        },
        {
            id: 205,
            title: "Vinland Saga",
            episode: "الحلقة 24",
            episodeNum: 24,
            image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400&h=225&fit=crop",
            duration: "24:00",
            date: "منذ 3 أيام",
            source: "Crunchyroll"
        },
        {
            id: 206,
            title: "Oshi no Ko",
            episode: "الحلقة 11",
            episodeNum: 11,
            image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=400&h=225&fit=crop",
            duration: "23:40",
            date: "منذ 4 أيام",
            source: "Crunchyroll"
        }
    ],

    // Top Rated
    topRated: [
        {
            id: 301,
            title: "Fullmetal Alchemist: Brotherhood",
            titleEn: "Fullmetal Alchemist: Brotherhood",
            titleJp: "鋼の錬金術師 FULLMETAL ALCHEMIST",
            image: "https://images.unsplash.com/photo-1541562232579-512a21360020?w=400&h=600&fit=crop",
            rating: 9.1,
            year: 2009,
            episodes: 64,
            type: "TV",
            genres: ["أكشن", "مغامرات", "خيال"],
            source: "Crunchyroll"
        },
        {
            id: 302,
            title: "Steins;Gate",
            titleEn: "Steins;Gate",
            titleJp: "シュタインズ・ゲート",
            image: "https://images.unsplash.com/photo-1607604276583-eef5a0ad5078?w=400&h=600&fit=crop",
            rating: 9.1,
            year: 2011,
            episodes: 24,
            type: "TV",
            genres: ["خيال علمي", "دراما", "نفسي"],
            source: "Crunchyroll"
        },
        {
            id: 303,
            title: "Hunter x Hunter",
            titleEn: "Hunter x Hunter",
            titleJp: "ハンター×ハンター",
            image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=400&h=600&fit=crop",
            rating: 9.0,
            year: 2011,
            episodes: 148,
            type: "TV",
            genres: ["أكشن", "مغامرات", "خيال"],
            source: "Crunchyroll"
        },
        {
            id: 304,
            title: "Gintama",
            titleEn: "Gintama",
            titleJp: "銀魂",
            image: "https://images.unsplash.com/photo-1618336753974-aae8e04506aa?w=400&h=600&fit=crop",
            rating: 9.0,
            year: 2006,
            episodes: 367,
            type: "TV",
            genres: ["كوميدي", "أكشن", "خيال"],
            source: "Crunchyroll"
        },
        {
            id: 305,
            title: "Death Note",
            titleEn: "Death Note",
            titleJp: "デスノート",
            image: "https://images.unsplash.com/photo-1560972550-aba3456b5564?w=400&h=600&fit=crop",
            rating: 8.9,
            year: 2006,
            episodes: 37,
            type: "TV",
            genres: ["غموض", "نفسي", "خارق"],
            source: "Crunchyroll"
        },
        {
            id: 306,
            title: "Code Geass",
            titleEn: "Code Geass",
            titleJp: "コードギアス",
            image: "https://images.unsplash.com/photo-1601850494422-3cf14624b0b3?w=400&h=600&fit=crop",
            rating: 8.7,
            year: 2006,
            episodes: 50,
            type: "TV",
            genres: ["خيال علمي", "أكشن", "دراما"],
            source: "Crunchyroll"
        },
        {
            id: 307,
            title: "One Punch Man",
            titleEn: "One Punch Man",
            titleJp: "ワンパンマン",
            image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=600&fit=crop",
            rating: 8.5,
            year: 2015,
            episodes: 24,
            type: "TV",
            genres: ["أكشن", "كوميدي", "خارق"],
            source: "Crunchyroll"
        },
        {
            id: 308,
            title: "Cowboy Bebop",
            titleEn: "Cowboy Bebop",
            titleJp: "カウボーイビバップ",
            image: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=400&h=600&fit=crop",
            rating: 8.8,
            year: 1998,
            episodes: 26,
            type: "TV",
            genres: ["خيال علمي", "أكشن", "مغامرات"],
            source: "Crunchyroll"
        }
    ],

    // Korean Drama
    kdrama: [
        {
            id: 401,
            title: "Squid Game",
            titleEn: "Squid Game",
            titleKo: "오징어 게임",
            image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=600&fit=crop",
            rating: 8.0,
            year: 2021,
            episodes: 9,
            type: "TV",
            genres: ["إثارة", "دراما", "بقاء"],
            source: "Netflix"
        },
        {
            id: 402,
            title: "All of Us Are Dead",
            titleEn: "All of Us Are Dead",
            titleKo: "지금 우리 학교는",
            image: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=400&h=600&fit=crop",
            rating: 7.5,
            year: 2022,
            episodes: 12,
            type: "TV",
            genres: ["رعب", "إثارة", "زومبي"],
            source: "Netflix"
        },
        {
            id: 403,
            title: "Kingdom",
            titleEn: "Kingdom",
            titleKo: "킹덤",
            image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&h=600&fit=crop",
            rating: 8.3,
            year: 2019,
            episodes: 12,
            type: "TV",
            genres: ["تاريخي", "رعب", "زومبي"],
            source: "Netflix"
        },
        {
            id: 404,
            title: "Sweet Home",
            titleEn: "Sweet Home",
            titleKo: "스위트홈",
            image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=600&fit=crop",
            rating: 7.4,
            year: 2020,
            episodes: 10,
            type: "TV",
            genres: ["رعب", "خيال", "إثارة"],
            source: "Netflix"
        },
        {
            id: 405,
            title: "Hellbound",
            titleEn: "Hellbound",
            titleKo: "지옥",
            image: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=400&h=600&fit=crop",
            rating: 6.7,
            year: 2021,
            episodes: 6,
            type: "TV",
            genres: ["خارق", "دراما", "إثارة"],
            source: "Netflix"
        },
        {
            id: 406,
            title: "The Silent Sea",
            titleEn: "The Silent Sea",
            titleKo: "고요의 바다",
            image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=400&h=600&fit=crop",
            rating: 6.9,
            year: 2021,
            episodes: 8,
            type: "TV",
            genres: ["خيال علمي", "إثارة", "غموض"],
            source: "Netflix"
        }
    ],

    // Chinese Animation (Donghua)
    chinese: [
        {
            id: 501,
            title: "The King's Avatar",
            titleEn: "The King's Avatar",
            titleZh: "全职高手",
            image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=600&fit=crop",
            rating: 8.1,
            year: 2017,
            episodes: 24,
            type: "TV",
            genres: ["أكشن", "رياضي", "ألعاب"],
            source: "Bilibili"
        },
        {
            id: 502,
            title: "Mo Dao Zu Shi",
            titleEn: "Mo Dao Zu Shi",
            titleZh: "魔道祖师",
            image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&h=600&fit=crop",
            rating: 8.4,
            year: 2018,
            episodes: 35,
            type: "TV",
            genres: ["خيال", "خارق", "دراما"],
            source: "Bilibili"
        },
        {
            id: 503,
            title: "Soul Land",
            titleEn: "Soul Land",
            titleZh: "斗罗大陆",
            image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=400&h=600&fit=crop",
            rating: 8.0,
            year: 2018,
            episodes: 264,
            type: "TV",
            genres: ["أكشن", "مغامرات", "خيال"],
            source: "Bilibili"
        },
        {
            id: 504,
            title: "Link Click",
            titleEn: "Link Click",
            titleZh: "时光代理人",
            image: "https://images.unsplash.com/photo-1607604276583-eef5a0ad5078?w=400&h=600&fit=crop",
            rating: 8.5,
            year: 2021,
            episodes: 12,
            type: "TV",
            genres: ["خارق", "دراما", "غموض"],
            source: "Bilibili"
        },
        {
            id: 505,
            title: "Scissor Seven",
            titleEn: "Scissor Seven",
            titleZh: "刺客伍六七",
            image: "https://images.unsplash.com/photo-1560972550-aba3456b5564?w=400&h=600&fit=crop",
            rating: 8.1,
            year: 2018,
            episodes: 30,
            type: "TV",
            genres: ["أكشن", "كوميدي", "مغامرات"],
            source: "Netflix"
        },
        {
            id: 506,
            title: "Heaven Official's Blessing",
            titleEn: "Heaven Official's Blessing",
            titleZh: "天官赐福",
            image: "https://images.unsplash.com/photo-1618336753974-aae8e04506aa?w=400&h=600&fit=crop",
            rating: 8.3,
            year: 2020,
            episodes: 11,
            type: "TV",
            genres: ["خيال", "خارق", "دراما"],
            source: "Bilibili"
        }
    ],

    // Movies
    movies: [
        {
            id: 601,
            title: "Your Name",
            titleEn: "Your Name",
            titleJp: "君の名は。",
            image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=400&h=600&fit=crop",
            rating: 8.9,
            year: 2016,
            duration: "106 دقيقة",
            type: "Movie",
            genres: ["رومانسي", "خيال", "دراما"],
            source: "Crunchyroll"
        },
        {
            id: 602,
            title: "Spirited Away",
            titleEn: "Spirited Away",
            titleJp: "千と千尋の神隠し",
            image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=400&h=600&fit=crop",
            rating: 8.8,
            year: 2001,
            duration: "125 دقيقة",
            type: "Movie",
            genres: ["مغامرات", "خيال", "عائلي"],
            source: "Netflix"
        },
        {
            id: 603,
            title: "Demon Slayer: Mugen Train",
            titleEn: "Demon Slayer: Mugen Train",
            titleJp: "鬼滅の刃 無限列車編",
            image: "https://images.unsplash.com/photo-1541562232579-512a21360020?w=400&h=600&fit=crop",
            rating: 8.7,
            year: 2020,
            duration: "117 دقيقة",
            type: "Movie",
            genres: ["أكشن", "خيال", "مغامرات"],
            source: "Crunchyroll"
        },
        {
            id: 604,
            title: "A Silent Voice",
            titleEn: "A Silent Voice",
            titleJp: "聲の形",
            image: "https://images.unsplash.com/photo-1560167016-022b78a0258e?w=400&h=600&fit=crop",
            rating: 8.9,
            year: 2016,
            duration: "130 دقيقة",
            type: "Movie",
            genres: ["دراما", "رومانسي", "مدرسي"],
            source: "Netflix"
        },
        {
            id: 605,
            title: "Jujutsu Kaisen 0",
            titleEn: "Jujutsu Kaisen 0",
            titleJp: "劇場版 呪術廻戦 0",
            image: "https://images.unsplash.com/photo-1601850494422-3cf14624b0b3?w=400&h=600&fit=crop",
            rating: 8.2,
            year: 2021,
            duration: "105 دقيقة",
            type: "Movie",
            genres: ["أكشن", "خارق", "مدرسي"],
            source: "Crunchyroll"
        },
        {
            id: 606,
            title: "Weathering With You",
            titleEn: "Weathering With You",
            titleJp: "天気の子",
            image: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=400&h=600&fit=crop",
            rating: 8.3,
            year: 2019,
            duration: "112 دقيقة",
            type: "Movie",
            genres: ["رومانسي", "خيال", "دراما"],
            source: "Crunchyroll"
        },
        {
            id: 607,
            title: "Suzume",
            titleEn: "Suzume",
            titleJp: "すずめの戸締まり",
            image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=600&fit=crop",
            rating: 8.0,
            year: 2022,
            duration: "122 دقيقة",
            type: "Movie",
            genres: ["مغامرات", "خيال", "دراما"],
            source: "Crunchyroll"
        },
        {
            id: 608,
            title: "The Boy and the Heron",
            titleEn: "The Boy and the Heron",
            titleJp: "君たちはどう生きるか",
            image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400&h=600&fit=crop",
            rating: 7.9,
            year: 2023,
            duration: "124 دقيقة",
            type: "Movie",
            genres: ["مغامرات", "خيال", "دراما"],
            source: "Netflix"
        }
    ],

    // Genres
    genres: [
        { id: 1, name: "أكشن", nameEn: "Action", icon: "fa-fist-raised", count: 2450 },
        { id: 2, name: "مغامرات", nameEn: "Adventure", icon: "fa-compass", count: 1890 },
        { id: 3, name: "كوميدي", nameEn: "Comedy", icon: "fa-laugh-beam", count: 2100 },
        { id: 4, name: "دراما", nameEn: "Drama", icon: "fa-theater-masks", count: 1650 },
        { id: 5, name: "خيال", nameEn: "Fantasy", icon: "fa-dragon", count: 1780 },
        { id: 6, name: "خيال علمي", nameEn: "Sci-Fi", icon: "fa-rocket", count: 980 },
        { id: 7, name: "رومانسي", nameEn: "Romance", icon: "fa-heart", count: 1340 },
        { id: 8, name: "رعب", nameEn: "Horror", icon: "fa-ghost", count: 560 },
        { id: 9, name: "غموض", nameEn: "Mystery", icon: "fa-search", count: 720 },
        { id: 10, name: "رياضي", nameEn: "Sports", icon: "fa-running", count: 430 },
        { id: 11, name: "خارق للطبيعة", nameEn: "Supernatural", icon: "fa-magic", count: 890 },
        { id: 12, name: "نفسي", nameEn: "Psychological", icon: "fa-brain", count: 340 }
    ],

    // Legal Sources
    sources: [
        {
            name: "Crunchyroll",
            url: "https://www.crunchyroll.com",
            logo: "crunchyroll",
            free: true,
            arabic: true,
            description: "أكبر منصة أنمي قانونية في العالم مع ترجمة عربية"
        },
        {
            name: "Netflix",
            url: "https://www.netflix.com",
            logo: "netflix",
            free: false,
            arabic: true,
            description: "منصة عالمية تحتوي على مكتبة ضخمة من الأنمي"
        },
        {
            name: "Tubi TV",
            url: "https://tubitv.com",
            logo: "tubi",
            free: true,
            arabic: false,
            description: "منصة مجانية قانونية مع إعلانات"
        },
        {
            name: "RetroCrush",
            url: "https://www.retrocrush.tv",
            logo: "retrocrush",
            free: true,
            arabic: false,
            description: "منصة مجانية متخصصة في الأنمي الكلاسيكي"
        },
        {
            name: "Bilibili",
            url: "https://www.bilibili.tv",
            logo: "bilibili",
            free: true,
            arabic: false,
            description: "منصة صينية رائدة للأنمي والدونغوا"
        },
        {
            name: "Pluto TV",
            url: "https://pluto.tv",
            logo: "pluto",
            free: true,
            arabic: false,
            description: "منصة تلفزيونية مجانية مع قنوات أنمي"
        }
    ]
};

// Export for use in app.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = animeData;
}
