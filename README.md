# FADY — Landing Page

Landing page professionnelle et moderne pour **FADY**, une application qui connecte les clients avec des coiffeurs et barbers, permettant des réservations en salon ou à domicile avec des disponibilités immédiates.

## 🎯 Vue d'ensemble

Cette landing page est composée de **4 pages distinctes** :

1. **Home** — Page d'accueil présentant FADY globalement
2. **User App** — Page dédiée aux fonctionnalités côté client
3. **Pro App** — Page dédiée aux coiffeurs et barbers
4. **Contact** — Page de contact simple et efficace

## 🛠️ Stack technique

- **Framework** : Next.js 14 (App Router)
- **Langage** : TypeScript
- **Styling** : Tailwind CSS
- **Animations** : CSS transitions légères
- **Responsive** : Mobile-first design

## 🎨 Branding FADY

### Palette de couleurs

- **Purple Primary** : `#BC31FC` — Couleur principale pour les CTA
- **Purple Light** : `#E4C8FF` — Backgrounds et accents
- **Purple Dark** : `#5B1899` — Hover states
- **Black Soft** : `#0F0F14` — Textes principaux
- **Gray Text** : `#6B6B7A` — Textes secondaires
- **Gray Light** : `#F6F6FA` — Backgrounds alternatifs
- **White** : `#FFFFFF` — Backgrounds principaux

### Règles de design

- Les CTA principaux utilisent `#BC31FC`
- Les hover utilisent `#5B1899`
- Les backgrounds utilisent blanc ou `#E4C8FF`
- Les textes longs ne sont jamais violets
- Design aéré, premium, minimal
- Pas d'effet néon, pas de surcharge visuelle

## 📁 Structure du projet

```
├── app/
│   ├── layout.tsx          # Layout principal avec Header et Footer
│   ├── page.tsx            # Page Home
│   ├── user/
│   │   └── page.tsx        # Page User App
│   ├── pro/
│   │   └── page.tsx        # Page Pro App
│   ├── contact/
│   │   └── page.tsx        # Page Contact
│   └── globals.css         # Styles globaux Tailwind
├── components/
│   ├── Header.tsx          # Navigation sticky avec menu mobile
│   ├── Footer.tsx          # Footer avec liens sociaux
│   ├── FeatureCard.tsx     # Composant card réutilisable
│   └── CTASection.tsx      # Section CTA réutilisable
├── tailwind.config.ts      # Configuration Tailwind avec couleurs FADY
├── package.json
└── README.md
```

## 🚀 Installation et démarrage

### Prérequis

- Node.js 18+ 
- npm ou yarn

### Installation

```bash
# Installer les dépendances
npm install
```

### Développement

```bash
# Lancer le serveur de développement
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000) dans votre navigateur.

### Build de production

```bash
# Créer un build de production
npm run build

# Lancer le serveur de production
npm start
```

## 📱 Fonctionnalités

### Navigation

- Header sticky présent sur toutes les pages
- Menu mobile responsive avec hamburger
- Navigation active highlightée
- CTA "Télécharger l'app" visible partout

### Pages

#### Home (`/`)
- Hero section avec titre accrocheur
- 4 blocs de présentation (réservation rapide, coiffeurs vérifiés, salon/domicile, nouvelle génération)
- 2 cards de redirection (Client / Coiffeur)
- Mockup placeholder pour l'app

#### User App (`/user`)
- Hero expliquant les fonctionnalités côté client
- 6 fonctionnalités détaillées :
  - Réservation classique
  - Réservation dans 10 minutes
  - Coupe à domicile
  - Filtres avancés
  - Carte interactive
  - Notifications en temps réel
- Section CTA finale

#### Pro App (`/pro`)
- Hero pour convaincre les coiffeurs
- 6 fonctionnalités détaillées :
  - Profil coiffeur
  - Datas & Statistiques
  - Paiements
  - Coupes à domicile
  - Gestion des disponibilités
  - Notifications clients
- Section témoignages / partenaires
- Badge "Bêta — Lancement prochain"
- Section CTA finale

#### Contact (`/contact`)
- Page simple et épurée
- Email de contact
- Numéro WhatsApp
- Lien Instagram
- Aucun formulaire complexe

## 🎨 Composants réutilisables

### `FeatureCard`
Card réutilisable pour afficher des fonctionnalités avec icône, titre et description.

### `CTASection`
Section CTA réutilisable avec titre, description et boutons primaires/secondaires.

### `Header`
Navigation sticky avec menu mobile responsive.

### `Footer`
Footer simple avec copyright et liens sociaux.

## 📝 SEO & Metadata

- Title optimisé : "FADY — L'app pour coiffeurs & barbers nouvelle génération"
- Meta description claire et honnête
- OpenGraph basique configuré
- Structure HTML sémantique (h1 unique par page, h2/h3 structurés)
- Texte indexable (pas tout en image)

## ✅ Qualité

- ✅ Mobile-first design
- ✅ Chargement rapide
- ✅ Animations discrètes (CSS transitions)
- ✅ Aucun lorem ipsum
- ✅ Aucun faux chiffre
- ✅ Texte clair, humain, génération nouvelle mais pro
- ✅ 100% en français (titles, texts, buttons, navigation, README)
- ✅ Design premium et responsive

## 📄 Licence

Ce projet est privé et propriété de FADY.

## 📧 Contact

Pour toute question ou suggestion concernant cette landing page, contactez l'équipe FADY.

---

**FADY** — La nouvelle génération de coiffeurs





