# Carousel

This project is a simple carousel component using the **Swiper** library. It uses **Vite** for development and building, and supports **Sass** for styling.

## Table of Contents

- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Dependencies](#dependencies)
- [Development](#development)
- [Building for Production](#building-for-production)

## Getting Started

To get started with this project, first clone the repository and install the necessary dependencies:

```bash
git clone <repository-url>
cd carousel
npm install
```

### Prerequisites

- **Node.js**: Ensure you have Node.js installed (version 14 or higher).
- **npm**: This project uses npm to manage dependencies.

## Available Scripts

In the project directory, you can run the following scripts:

### `npm run dev`

Runs the app in development mode.Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.

### `npm run build`

Builds the app for production. The output will be located in the `dist/` directory.

### `npm run preview`

Serves the built project locally, allowing you to preview the production build.

## Dependencies

- **[Swiper](https://swiperjs.com/)**: Swiper is a modern touch slider used for building carousels.
- **[Sass](https://sass-lang.com/)**: Sass is a CSS preprocessor for more dynamic and organized stylesheets.

### Dev Dependencies

- **[Vite](https://vitejs.dev/)**: Vite is a fast build tool and development server optimized for modern JavaScript frameworks.

## Development

To start working on the project, run the development server:

```bash
npm run dev
```

This will open a local development environment where you can see changes live as you edit the code.

### Using Sass

This project includes Sass for styling. You can use `.scss` files in your components to write styles.

## Building for Production

To create a production build, run:

```bash
npm run build
```

This will bundle the application and output the static files in the `dist/` directory. You can serve these files on any static hosting platform or server.
