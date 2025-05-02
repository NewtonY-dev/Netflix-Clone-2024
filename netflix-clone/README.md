# Netflix Clone 

## Description

A web application built using React that clones the basic user interface and Browse features of Netflix. It fetches movie data from The Movie Database (TMDB) API and allows users to view movie trailers using react-youtube.

## Features

* Displays movie categories like Trending, Originals, Top Rated, etc..
* Fetches and displays movie posters.
* Shows a banner with a featured movie.
* Allows playing movie trailers directly within the app using YouTube.
* Built with functional components and React Hooks (`useState`, `useEffect`).
* Uses Axios for making HTTP requests to the TMDB API.
* Includes basic components like Header, Footer, Banner, and Rows.

## Technology Stack

* **[React](https://react.dev/learn)**: A JavaScript library for building user interfaces.
* **[Axios](https://www.npmjs.com/package/axios)**: Promise-based HTTP client for the browser and Node.js.
* **[Material UI (MUI)](https://mui.com/material-ui/getting-started/learn/)**: React component library for faster and simpler web development. Used for Icons.
* **[react-youtube](https://www.npmjs.com/package/react-youtube)**: Simple React component acting as a thin layer over the YouTube IFrame Player API.
* **[movie-trailer](https://www.npmjs.com/package/movie-trailer)**: Module to find YouTube trailers for movies and TV shows.
* **[The Movie Database (TMDB) API](https://developer.themoviedb.org/v4/reference/intro/getting-started)**: Used to fetch movie data.

## Directory Structure

```
netflix-clone/
├── README.md                   # Original README from Create React App
├── package-lock.json           # Exact dependency versions
├── package.json                # Project dependencies and scripts
├── .gitignore                  # Files ignored by Git
├── public/                     # Public assets
│   ├── index.html              # Main HTML file
│   ├── manifest.json           # Web app manifest
│   └── robots.txt              # Instructions for web crawlers
└── src/                        # Main application source code
├── App.css                 # Main App component styles
├── App.js                  # Root React component
├── index.css               # Global styles
├── index.js                # Application entry point
├── assets/                 # Static assets like images
│   └── images/             # Image files (e.g., NetflixLogo.png)
├── components/             # Reusable UI components
│   ├── Banner/             # Banner component for featured content
│   │   ├── banner.css      #
│   │   └── Banner.js       #
│   ├── Footer/             # Footer component
│   │   ├── footer.css      #
│   │   └── Footer.js       #
│   ├── Header/             # Header/Navigation component
│   │   ├── header.css      #
│   │   └── Header.js       #
│   └── Rows/               # Components for displaying movie rows
│       ├── Row/            # Single movie row component
│       │   ├── row.css     #
│       │   └── Row.js      #
│       └── RowList/        # Component to display multiple rows
│           └── RowList.js  #
├── pages/                  # Page-level components
│   └── Home/               # Home page component
│       └── Home.js         #
└── utils/                  # Utility functions/modules
├── axios.js            # Axios instance configuration
└── requests.js         # TMDB API request URLs
```

## Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/NewtonY-dev/Netflix-Clone-2024.git
    ```
2.  Navigate to the project directory:
    ```bash
    cd netflix-clone
    ```
3.  Install dependencies:
    ```bash
    npm install
    ```
   

## Usage

* **Run in Development Mode:**
    ```bash
    npm start
    ```
   
    This will open the app at [http://localhost:3000](http://localhost:3000) in your browser. The page reloads when you make edits.

* **Build for Production:**
    ```bash
    npm run build
    ```
   
    This bundles the app into the `build` folder, optimized for production.

* **Run Tests:**
    ```bash
    npm test
    ```
   
    Launches the test runner in interactive watch mode.

## API Reference

* This project uses **[The Movie Database (TMDB) API](https://developer.themoviedb.org/v4/reference/intro/getting-started)** to fetch movie and TV show data.
* An API key from TMDB is required. It should be stored in a `.env` file in the project root with the variable name `REACT_APP_API_KEY`.


MIT License

Copyright (c) 2025 Newton Yetsedaw

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software 
without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit
persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT
OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.