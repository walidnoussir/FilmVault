# 🎬 FilmVault

A React-based movie browsing and management application built with Vite and Tailwind CSS.

## Tech Stack

- **React 19** — UI library
- **Vite 8** — build tool with HMR
- **Tailwind CSS 4** — utility-first styling
- **Lucide React** — icon library
- **ESLint** — code linting

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm

### Installation

```bash
git clone https://github.com/your-username/filmvault.git
cd filmvault
npm install
```

### Running the App

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint the codebase
npm run lint
```

## Project Structure

```
filmvault/
├── public/
│   ├── favicon.svg
│   ├── icons.svg
│   └── shawshank.jpg
├── src/
│   ├── assets/
│   │   ├── hero.png
│   │   ├── react.svg
│   │   └── vite.svg
│   ├── components/
│   │   ├── FilmDetails.jsx
│   │   ├── FilterMovies.jsx
│   │   ├── Hero.jsx
│   │   ├── Logo.jsx
│   │   ├── MovieCard.jsx
│   │   ├── MovieDetails.jsx
│   │   ├── MovieLists.jsx
│   │   ├── Navbar.jsx
│   │   ├── NewFilm.jsx
│   │   └── TopMovies.jsx
│   ├── data/
│   │   └── movies.js
│   ├── ui/
│   │   ├── Button.jsx
│   │   ├── FilmImage.jsx
│   │   ├── FormRow.jsx
│   │   ├── Heading.jsx
│   │   ├── Modal.jsx
│   │   ├── Select.jsx
│   │   └── Wrapper.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
└── vite.config.js
```

### Key Directories

- **`src/components/`** — feature-level components such as the hero banner, navbar, movie cards, lists, filters, and forms for adding new films
- **`src/ui/`** — reusable, generic UI primitives (Button, Modal, Select, Heading, etc.)
- **`src/data/`** — local movie data used to populate the app
- **`public/`** — static assets served directly, including images

## Features

- Browse a curated list of movies
- View detailed information about individual films
- Filter and sort movies by various criteria
- Add new films to the vault
- Highlights a top movies section
- Hero banner for featured content

## ESLint

The project uses ESLint with the `eslint-plugin-react-hooks` and `eslint-plugin-react-refresh` plugins. For production-grade projects, consider migrating to TypeScript and enabling type-aware lint rules with [`typescript-eslint`](https://typescript-eslint.io).

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add your feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

## License

This project is private and not licensed for public distribution.
