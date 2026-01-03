# FADY — Landing Page (Cursor Instructions)

## 0) Objectif global
Créer une landing page **professionnelle, moderne et premium** pour **FADY**, découpée en **4 pages distinctes** :

1. Home
2. User App
3. Pro App
4. Contact

FADY est une application qui connecte :
- Les **clients** avec des **coiffeurs / barbers**
- Les **coiffeurs rookies (apprentis / amateurs)** et les **coiffeurs diplômés**
- Réservation en salon ou **à domicile**
- Disponibilités immédiates (ex : **dans 10 minutes**)

La landing doit :
- Donner envie de télécharger l’app
- Expliquer clairement la différence **User App / Pro App**
- Respecter strictement la **DA violette FADY**
- Être responsive, rapide et orientée conversion

---

## 1) Stack technique imposée
- Framework : **Next.js (App Router)**
- Langage : **TypeScript**
- Styling : **Tailwind CSS**
- Animations : légères (CSS ou Framer Motion si utile)
- Aucune dépendance inutile
- Code clair, composants bien séparés

### Fichiers attendus
- `app/page.tsx` (Home)
- `app/user/page.tsx` (User App)
- `app/pro/page.tsx` (Pro App)
- `app/contact/page.tsx` (Contact)
- `app/layout.tsx`
- `app/globals.css`
- `components/*`
- `tailwind.config.ts`
- `README.md`

---

## 2) Branding — DA officielle FADY (OBLIGATOIRE)

### Palette principale
- Purple Fady (Primary) : `#BC31FC`
- Purple Light : `#E4C8FF`
- Purple Dark : `#5B1899`

### Couleurs neutres
- White : `#FFFFFF`
- Black soft : `#0F0F14`
- Gray text : `#6B6B7A`
- Gray light : `#F6F6FA`

### Règles de design
- Les CTA principaux utilisent `#BC31FC`
- Les hover utilisent `#5B1899`
- Les backgrounds utilisent blanc ou `#E4C8FF`
- Les textes longs ne sont JAMAIS violets
- Design aéré, premium, minimal
- Pas d’effet néon, pas de surcharge visuelle

---

## 3) Navigation globale
Header sticky présent sur toutes les pages avec :
- Logo texte : **FADY**
- Liens :
  - Home
  - User App
  - Pro App
  - Contact
- CTA principal : **Télécharger l’app**

Footer simple :
- © FADY
- Instagram (placeholder)
- WhatsApp (placeholder)
- Email (placeholder)

---

## 4) Structure des pages

---

# PAGE 1 — HOME

### Objectif
Présenter FADY globalement et rediriger vers User App ou Pro App.

### Sections obligatoires

#### Hero
- H1 fort
- Sous-titre clair
- 2 CTA :
  - Télécharger l’app
  - Découvrir User / Pro
- Visuel mockup (placeholder)

#### Blocs de présentation (réutilisés ailleurs)
- Réservation rapide
- Coiffeurs vérifiés
- Salon ou domicile
- Nouvelle génération de coiffeurs

#### Redirection
- Card “Tu es client ?” → User App
- Card “Tu es coiffeur ?” → Pro App

---

# PAGE 2 — USER APP

### Objectif
Expliquer les fonctionnalités **côté client**

### Sections obligatoires

#### Hero User
- “Trouve un coiffeur quand tu veux, où tu veux”

#### Fonctionnalités User App
Présenter clairement sous forme de cards :

- Réservation classique
- Réservation **dans 10 minutes**
- Coupe à domicile
- Filtres (ville, prix, dispo, type de coupe)
- Carte interactive (map)

#### CTA
- Télécharger l’app
- Trouver un coiffeur maintenant

---

# PAGE 3 — PRO APP

### Objectif
Convaincre les coiffeurs de rejoindre FADY

### Sections obligatoires

#### Hero Pro
- “Développe ta clientèle avec Fady”

#### Lien vers l’app
- Bouton clair : Télécharger Fady Pro

#### Fonctionnalités coiffeurs
Cards avec icônes :

- Profil coiffeur (photos, vidéos, bio)
- Datas (réservations, visibilité, stats)
- Paiements
- Coupes à domicile
- Gestion des disponibilités

#### Coiffeurs partenaires
- Section témoignages / partenaires
- Badges “Coiffeur partenaire FADY”
- Mention “Bêta / lancement” si nécessaire

#### CTA final
- Rejoindre Fady Pro
- Être contacté

---

# PAGE 4 — CONTACT

### Objectif
Permettre un contact rapide et simple

### Contenu unique
- Texte court
- Email de contact
- Numéro WhatsApp
- Lien Instagram
- Aucun formulaire complexe

---

## 5) SEO & Metadata
Dans `layout.tsx` :
- Title : `FADY — L’app pour coiffeurs & barbers nouvelle génération`
- Meta description claire et honnête
- OpenGraph basique

Utiliser des balises :
- h1 unique par page
- h2 / h3 structurés
- Texte indexable (pas tout en image)

---

## 6) Qualité attendue
- Mobile-first
- Chargement rapide
- Animations discrètes
- Aucun lorem ipsum
- Aucun faux chiffre
- Texte clair, humain, génération nouvelle mais pro

---

## 7) Instructions finales pour Cursor
1. Créer l’architecture complète des pages
2. Implémenter le design selon la DA FADY
3. Rendre chaque page cohérente et lisible seule
4. Vérifier responsive desktop / mobile
5. Finaliser avec un README clair

FIN.