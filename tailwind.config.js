module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      pulse: "pulse 10s ease-in-out infinite",
      keyframes: {

        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-100px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-out-down": {
          from: {
            opacity: "1",
            transform: "translateY(0px)",
          },
          to: {
            opacity: "0",
            transform: "translateY(10px)",
          },
        },
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(100px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in-1": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        "fade-in-2": {
          "0%": {
            opacity: "0",
            transform: "translateY(100px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-out-up": {
          from: {
            opacity: "1",
            transform: "translateY(0px)",
          },
          to: {
            opacity: "0",
            transform: "translateY(10px)",
          },
        },
        "fade-in-right": {
          from: {
            opacity: "0",
            transform: "translateX(100px)",
          },
          to: {
            opacity: "0.9",
            transform: "translateX(0px)",
          },
        }, 
         "fade-in-left": {
          from: {
            opacity: "0",
            transform: "translateX(-150px)",
          },
          to: {
            opacity: "1",
            transform: "translateX(0px)",
          },
        }, 
        "staff-two": {
         from: {
           opacity: "0",
           transform: "translateY(200px)",
         },
         to: {
           opacity: "1",
           transform: "translateY(0px)",
         },
       },
      },
      animation: {
        "fade-in-down": "fade-in-down 1s ease-out",
        "fade-out-down": "fade-out-down 0.5s ease-out",
        "fade-in-up": "fade-in-up 1s ease-out",
        "fade-in-1": "fade-in-1 2s ease-out",
        "fade-in-2": "fade-in-1 2s ease-out",
        "fade-out-up": "fade-out-up 0.5s ease-out",
        "fade-in-right": "fade-in-right 1.35s ease-out",
        "fade-in-left": "fade-in-left 1.75s ease-out",
        "staff-two": "staff-two 7s ease-out",
      },
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
