/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Ensure this is present
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontSize: {
        'sm-md': '0.9375rem', // This is 15px
      },
      textShadow: {
        'default': '2px 2px 2px rgba(0, 0, 0, 0.1)',  // Subtle shadow
        'lg': '4px 4px 5px rgba(0, 0, 0, 0.2)',        // Larger shadow
      },
      keyframes: {
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
      },
      animation: {
        slideInLeft: 'slideInLeft 1.5s ease-out',
        slideInRight: 'slideInRight 1.5s ease-out',
      },
      colors: {
        customPurple: '#333159',
        customPink: '#c897d8',
        customPurpleLight: '#3a3769',
        customPinkLight: '#e9bcf7',
        customPinkMedium: '#d4a3e3',
        cssBlue: "#1c6aa3",
        htmlOrange: '#dc593c',
        javascriptYellow: '#e2cc39',
        typescriptBlue: '#417ec1',
        reactTurquoise: '#6cd5f0',
        tailwindTurquoise: '#1ea5be',
        reduxPurple: '#7551b3',
        nodeGreen: '#3f953f',
        expressBlack: '#020202',
        postgresBlue: "#366890",
        gitOrange: '#e35540',
        githubBlack: '#1f1e1e',
        herokuPurple: '#4e2199',
        netlifyGreen: '#2bc1b3',
        vscodeBlue: '#1f7ec3',
        postmanOrange: '#f6744d',
        webpackBlue: '#8fcfec',
        jestRed: '#b0182a',
        postbirdBlue: '#2b4890',
        customBlue: '#2d92d2',
        customDarkPurple: '#151414',
      },
    },
  },
  plugins: [],
}

