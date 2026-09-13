# 🎬 Trending Movies App

A modern, responsive movie discovery web application built with **React 19**, **TypeScript**, **Vite**, and **Tailwind CSS v4**. Explore popular trending movies, search for your favorite titles in real-time, and curate your personal favorites list with local storage persistence.

---

## ✨ Features

- 🌟 **Trending & Popular Movies:** Automatically fetches and displays the latest trending and popular movies from The Movie Database (TMDB).
- 🔍 **Live Search:** Fast, interactive search functionality to find movies by title as you type.
- ❤️ **Favorites System:** Add or remove movies to your favorites with a single click.
- 💾 **Persistent Storage:** Favorites are saved to browser `localStorage`, ensuring your list remains across sessions.
- 🎨 **Modern Dark UI:** Sleek glass-and-dark aesthetic styled with Tailwind CSS v4 and smooth hover effects.
- ⚡ **Lightning Fast:** Built with Vite for rapid development and optimized production builds.
- 📱 **Responsive Design:** Fully responsive layout optimized for mobile, tablet, and desktop viewports.

---

## 🛠️ Tech Stack

- **Frontend Library:** [React 19](https://react.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Build Tool:** [Vite 8](https://vitejs.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Routing:** [React Router DOM v6](https://reactrouter.com/)
- **API:** [The Movie Database (TMDB) API](https://www.themoviedb.org/documentation/api)

---

## 📁 Project Structure

```text
practice/
├── public/                 # Static assets
├── src/
│   ├── assets/             # Images and design assets
│   ├── contexts/
│   │   └── MovieContext.tsx # Context provider for favorites & persistent state
│   ├── ApiCall.ts          # TMDB API service functions (popular movies, search)
│   ├── App.tsx             # Root layout and route configuration
│   ├── Home.tsx            # Main page with search bar & movie grid
│   ├── MovieCard.tsx       # Reusable movie card component with favorite toggle
│   ├── NavBar.tsx          # Navigation bar with route links
│   ├── favorite.tsx        # Saved favorites view
│   ├── index.css           # Global Tailwind and animation styles
│   └── main.tsx            # Application entry point
├── package.json            # Project dependencies and npm scripts
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts          # Vite configuration
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have Node.js (version 18 or higher recommended) and npm installed:

```bash
node -v
npm -v
```

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/UL2IMATE/Trending-Movies-App.git
   cd Trending-Movies-App
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Open [http://localhost:5173](http://localhost:5173) in your browser to view the app.

---

## 🔑 TMDB API Configuration

This application communicates with TMDB API via `src/ApiCall.ts`.

> [!NOTE]
> To use your own API key:
> 1. Sign up for a free account at [The Movie Database (TMDB)](https://www.themoviedb.org/).
> 2. Generate an API Key under **Settings > API**.
> 3. Update the `API_KEY` constant in `src/ApiCall.ts` (or migrate to an `.env` file using `VITE_TMDB_API_KEY`).

---

## 📜 Available Scripts

In the project directory, you can run:

| Command | Description |
| :--- | :--- |
| `npm run dev` | Runs the app in development mode with HMR |
| `npm run build` | Compiles TypeScript and builds the production bundle in `dist/` |
| `npm run preview` | Locally previews the production build |
| `npm run lint` | Runs ESLint to check for code issues |

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/UL2IMATE/Trending-Movies-App/issues).

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).