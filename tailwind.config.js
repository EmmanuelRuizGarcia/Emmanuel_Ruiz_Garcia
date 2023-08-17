/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        backgroundMenu: "#434E85", 
        primaryMenu: "#3E82FC",
        hrFooter: "#434E85",
        backgroundScrollBar: "#19255A",
        backgroundScrollBarTrack: "rgb(77, 86, 136)",
      },
      backgroundImage: {
        HeroImage:"url('assets/heroImage.jpg')",
      }
    },
  },
  plugins: [],
}

