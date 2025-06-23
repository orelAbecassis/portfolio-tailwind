# 💼 Mon Portfolio - Vue 3 + Tailwind CSS

Bienvenue sur mon portfolio personnel, développé avec **Vue 3**, **Vite** et **Tailwind CSS**.  
Il présente mes projets, compétences et me permet de rester créative sur le web. ✨

---

## 🚀 Technologies utilisées

- ⚡ [Vite](https://vitejs.dev/) — build ultra rapide
- 🧩 [Vue 3](https://vuejs.org/) — framework JavaScript progressif
- 🎨 [Tailwind CSS](https://tailwindcss.com/) — framework CSS utilitaire
- 🛠️ TypeScript — typage statique pour plus de fiabilité

---

## 📦 Installation du projet

### 1. Clone ce dépôt

git clone https://github.com/tonpseudo/monportfolio.git
cd monportfolio
### 2. Installe les dépendances
npm install

### 3. Si Tailwind CSS n'est pas installé, ajoute-le (optionnel si déjà prêt)

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

### 4. Assure-toi que ces fichiers sont bien configurés :
🔸 tailwind.config.js

```js
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
} 

🔸 postcss.config.js
```js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
🔸 src/style.css. Attention ne rien rajouter dans ce doc !!
@tailwind base;
@tailwind components;
@tailwind utilities;

🔸 src/main.ts

import './style.css'

### 5. Lance le serveur de développement
npm run dev
👉 Accède à http://localhost:5173 dans ton navigateur








