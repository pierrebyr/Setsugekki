import { Member, Album, TimelineEvent, TourDate, PressQuote, NewsItem } from './types';

export const MEMBERS: Member[] = [
  {
    name: "Misaki Horiguchi",
    role: "Piano",
    description: "Compositrice principale, elle insuffle l'âme mélodique du groupe. Elle compose souvent à l'aube dans le temple familial.",
    image: "https://images.unsplash.com/photo-1552422535-c45813c61732?q=80&w=1000&auto=format&fit=crop"
  },
  {
    name: "Kenta Tanaka",
    role: "Contrebasse",
    description: "L'ancre rythmique. Kenta est connu pour accorder son instrument différemment selon l'humidité de l'air.",
    image: "https://images.unsplash.com/photo-1568226292321-dd67ed88fd6d?q=80&w=1000&auto=format&fit=crop"
  },
  {
    name: "Reina Yamashita",
    role: "Batterie",
    description: "Disciple du silence, elle médite avant chaque performance pour garantir une intégrité rythmique absolue.",
    image: "https://images.unsplash.com/photo-1524230659092-07f99a75c013?q=80&w=1000&auto=format&fit=crop"
  }
];

export const ALBUMS: Album[] = [
  {
    title: "都会の静けさ (Tokai no Shizukesa)",
    year: "2020",
    label: "Autoproduction",
    description: "EP 'Urban Silence'. Enregistré en une journée. Une introduction brute et intime.",
    trackCount: 4,
    cover: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1000&auto=format&fit=crop", // Cinematic city
    tracklist: [
      { title: "Midnight Crossing", duration: "4:12" },
      { title: "Neon Rain", duration: "5:45" },
      { title: "Temple Bell", duration: "3:30" },
      { title: "Silence (Outro)", duration: "2:15" }
    ]
  },
  {
    title: "春の記憶 (Haru no Kioku)",
    year: "2023",
    label: "Emarcy/Universal",
    description: "#3 Jazz Japan Charts. Une exploration de la mémoire printanière et du renouveau.",
    trackCount: 9,
    cover: "https://images.unsplash.com/photo-1490750967868-58cb75062ed0?q=80&w=1000&auto=format&fit=crop", // Spring abstract
    tracklist: [
      { title: "Melting Snow", duration: "6:10" },
      { title: "First Breeze", duration: "4:55" },
      { title: "Cherry Blossom Fall", duration: "5:30" },
      { title: "Green Tea Morning", duration: "3:45" },
      { title: "River Walk", duration: "7:12" },
      { title: "Nostalgia", duration: "4:20" },
      { title: "Kichijoji Streets", duration: "5:05" },
      { title: "Spring Storm", duration: "6:45" },
      { title: "Renewal", duration: "3:55" }
    ]
  },
  {
    title: "冬の調べ (Fuyu no Shirabe)",
    year: "Nov 2025",
    label: "Emarcy/Universal",
    description: "Album conceptuel à venir sur la fin d'année japonaise et le passage spirituel du temps.",
    trackCount: 8,
    cover: "https://images.unsplash.com/photo-1483664852095-d6cc6870702d?q=80&w=1000&auto=format&fit=crop", // Winter texture
    tracklist: [
      { title: "First Frost", duration: "5:15" },
      { title: "Hearth", duration: "4:30" },
      { title: "Joya no Kane", duration: "8:00" },
      { title: "Snow Moon", duration: "6:20" },
      { title: "Kotatsu Dreams", duration: "4:10" },
      { title: "Winter Solstice", duration: "7:45" },
      { title: "New Year's Morning", duration: "5:30" },
      { title: "Eternal Cycle", duration: "3:45" }
    ]
  }
];

export const HISTORY: TimelineEvent[] = [
  {
    year: "2018",
    title: "Hiver",
    description: "Rencontre fortuite au Blue Note Tokyo. Jam session jusqu'à 4h du matin sous la première neige."
  },
  {
    year: "2019",
    title: "Débuts",
    description: "Répétitions dans le sous-sol d'un temple à Kichijoji. Premier concert au Jazz Spot Intro."
  },
  {
    year: "2020",
    title: "Silence",
    description: "La pandémie consolide leur identité. Sortie de l'EP 'Tokai no Shizukesa'."
  },
  {
    year: "2022",
    title: "Cotton Club",
    description: "Résidence mensuelle légendaire à Marunouchi. Reconnaissance par la scène internationale."
  },
  {
    year: "2024",
    title: "Ascension",
    description: "Performance au Tokyo Jazz Festival. Préparation de l'album hivernal."
  }
];

export const TOUR_DATES: TourDate[] = [
  { date: "04 Nov 2025", venue: "Cotton Club", city: "Tokyo", country: "Japan", status: "Sold Out" },
  { date: "15 Nov 2025", venue: "Release Party @ Blue Note", city: "Tokyo", country: "Japan", status: "Few Tickets" },
  { date: "02 Dec 2025", venue: "Billboard Live", city: "Osaka", country: "Japan", status: "Available" },
  { date: "24 Dec 2025", venue: "Kyoto Concert Hall", city: "Kyoto", country: "Japan", status: "Available" },
  { date: "15 Jan 2026", venue: "Lotte Concert Hall", city: "Seoul", country: "Korea", status: "Available" },
];

export const PRESS_QUOTES: PressQuote[] = [
  {
    source: "Jazz Japan Magazine",
    quote: "Le trio le plus excitant à émerger de la scène jazz tokyoïte depuis une décennie.",
    rating: "Best New Artist"
  },
  {
    source: "DownBeat Magazine",
    quote: "Une modernité qui respecte la tradition sans jamais s'y enfermer.",
    rating: "★★★★"
  },
  {
    source: "The Japan Times",
    quote: "Ils jouent le silence aussi bien que les notes.",
  }
];

export const NEWS_ITEMS: NewsItem[] = [
  {
    date: "DEC 2025",
    category: "Collaboration",
    title: "Kyoto Philharmonic x Setsugekka",
    content: "Performance unique confirmée au Kyoto Concert Hall. Une rencontre entre le jazz minimaliste et la grandeur orchestrale.",
    image: "https://images.unsplash.com/photo-1516280440614-6697288d5d38?q=80&w=1000&auto=format&fit=crop"
  },
  {
    date: "JUL 2025",
    category: "Festival",
    title: "Montreux Jazz Festival",
    content: "Setsugekka Trio est officiellement invité à jouer sur la scène du Lab au légendaire festival suisse.",
    image: "https://images.unsplash.com/photo-1533174072545-e8d4aa97edf9?q=80&w=1000&auto=format&fit=crop"
  }
];
// Social Links
export const SOCIAL_LINKS = {
  instagram: "https://instagram.com/setsugekkatrio",
  spotify: "https://open.spotify.com/artist/setsugekkatrio",
  appleMusic: "https://music.apple.com/artist/setsugekkatrio",
  bandcamp: "https://setsugekkatrio.bandcamp.com",
  youtube: "https://youtube.com/@setsugekkatrio",
  email: "mailto:contact@setsugekka.jp"
};
