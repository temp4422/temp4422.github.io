/** @type {import('tailwindcss').Config} */
module.exports = {
  // The `content` section is where you configure the paths to all of your HTML templates, JS components, and any other files that contain Tailwind class names.
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
