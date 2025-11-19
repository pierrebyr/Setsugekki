# 雪月花 Setsugekka Trio - Official Website

> Site web officiel du trio de jazz contemporain japonais Setsugekka.

![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue)
![React](https://img.shields.io/badge/React-19.2-blue)
![Accessibility](https://img.shields.io/badge/a11y-WCAG%20AA-green)

## 🎵 À propos

Site web one-page élégant et accessible pour le Setsugekka Trio, explorant l'esthétique japonaise de l'impermanence à travers le jazz contemporain.

## ✨ Fonctionnalités

- ✅ **Performance optimisée** : Code splitting, lazy loading, images optimisées
- ✅ **Accessibilité WCAG AA** : ARIA labels, navigation clavier, respect des préférences utilisateur
- ✅ **SEO complet** : Meta tags, Open Graph, Twitter Cards, JSON-LD, sitemap
- ✅ **Responsive** : Design adaptatif mobile-first
- ✅ **TypeScript strict** : Type safety complet
- ✅ **Animations fluides** : Framer Motion avec respect de `prefers-reduced-motion`
- ✅ **Curseur personnalisé** : Optionnel et accessible (desktop uniquement)
- ✅ **Formulaire de contact** : Validation complète côté client
- ✅ **Build optimisé** : Bundle size minimal avec Vite

## 🚀 Démarrage rapide

### Prérequis

- Node.js 18+ 
- npm ou yarn

### Installation

```bash
# Cloner le repository
git clone https://github.com/pierrebyr/Setsugekki.git
cd Setsugekki

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Le site sera accessible sur `http://localhost:5173`

### Scripts disponibles

```bash
npm run dev      # Serveur de développement
npm run build    # Build de production
npm run preview  # Preview du build
npm run lint     # Linting avec ESLint
npm run format   # Formatage avec Prettier
```

## 📁 Structure du projet

```
Setsugekki/
├── components/          # Composants React
│   ├── About.tsx
│   ├── Contact.tsx      # Formulaire avec validation
│   ├── CustomCursor.tsx # Curseur personnalisé accessible
│   ├── Discography.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Modal.tsx        # Composant modal réutilisable
│   ├── Navigation.tsx
│   ├── OptimizedImage.tsx # Images avec lazy loading
│   ├── Philosophy.tsx
│   ├── Preloader.tsx
│   ├── Press.tsx
│   └── TourDates.tsx
├── animations.ts        # Variants d'animation réutilisables
├── constants.ts         # Données statiques (albums, dates, etc.)
├── types.ts            # Définitions TypeScript
├── utils.ts            # Utilitaires (cn pour classes)
├── App.tsx             # Composant principal avec lazy loading
├── index.tsx           # Point d'entrée
├── index.html          # HTML avec SEO meta tags
├── src/
│   └── index.css       # Styles Tailwind + custom
├── public/
│   ├── robots.txt      # Configuration pour les crawlers
│   └── sitemap.xml     # Plan du site
├── tailwind.config.js  # Configuration Tailwind
├── tsconfig.json       # Configuration TypeScript (strict mode)
├── vite.config.ts      # Configuration Vite
└── .eslintrc.cjs       # Règles ESLint
```

## 🎨 Stack technique

- **Framework** : React 19.2 (avec nouvelle transformation JSX)
- **Build** : Vite 6.2
- **TypeScript** : 5.8 (strict mode)
- **Styling** : Tailwind CSS 3.4
- **Animations** : Framer Motion 12
- **Icons** : Lucide React
- **Linting** : ESLint + Prettier

## ♿ Accessibilité

Le site respecte les normes WCAG 2.1 niveau AA :

- ✅ Navigation au clavier complète
- ✅ ARIA labels sur tous les éléments interactifs
- ✅ Ratio de contraste conforme
- ✅ Focus visible sur tous les éléments
- ✅ Respect de `prefers-reduced-motion`
- ✅ Curseur personnalisé optionnel (desktop uniquement)
- ✅ Labels de formulaire associés correctement
- ✅ Messages d'erreur explicites

## 🔒 Sécurité

- ✅ Pas de dépendances CDN externes
- ✅ Validation des formulaires côté client
- ✅ Protection XSS basique
- ✅ Headers de sécurité (à configurer côté serveur)
- ✅ HTTPS obligatoire en production

## 📊 Performance

### Bundle size

```
CSS  : 33.76 kB (gzip: 6.34 kB)
JS   : 360.53 kB (gzip: 115.62 kB)
```

### Optimisations

- Code splitting automatique
- Lazy loading des composants lourds
- Images avec loading="lazy"
- Tree shaking activé
- Minification CSS/JS
- Gzip compression

## 🌐 SEO

- ✅ Meta tags complets (title, description, keywords)
- ✅ Open Graph pour Facebook/LinkedIn
- ✅ Twitter Cards
- ✅ JSON-LD structured data (MusicGroup)
- ✅ Sitemap XML
- ✅ Robots.txt
- ✅ URLs propres et descriptives

## 🔧 Configuration

### Variables d'environnement

Copier `.env.example` vers `.env` et configurer :

```bash
# API (quand disponible)
VITE_API_URL=https://api.setsugekka.jp

# Analytics (optionnel)
VITE_GA_TRACKING_ID=G-XXXXXXXXXX
```

### Liens sociaux

Mettre à jour les URLs dans `constants.ts` :

```typescript
export const SOCIAL_LINKS = {
  instagram: "https://instagram.com/setsugekkatrio",
  spotify: "https://open.spotify.com/artist/...",
  // etc.
};
```

## 📝 TODO Backend

Le site est actuellement frontend-only. Pour le rendre complètement fonctionnel :

1. **API Contact** : Connecter le formulaire à un backend
   - Suggestions : EmailJS, Formspree, ou API custom
   - Fichier concerné : `components/Contact.tsx`

2. **CMS** (optionnel) : Pour gérer le contenu dynamiquement
   - Suggestions : Strapi, Sanity, Contentful
   - Fichiers concernés : `constants.ts`

3. **Analytics** : Ajouter un service d'analytics
   - Suggestions : Google Analytics, Plausible, Fathom

## 🐛 Problèmes connus

Aucun problème critique connu. Le build passe tous les tests TypeScript en mode strict.

## 📄 License

© 2025 Setsugekka Trio. Tous droits réservés.

## 🤝 Contribution

Ce projet est privé. Pour toute question, contactez : contact@setsugekka.jp

---

**Construit avec ❤️ pour Setsugekka Trio**
