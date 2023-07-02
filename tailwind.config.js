module.exports = {
  content: [
    './apps/website/public/**/*.html',
    './apps/website/src/**/*.{astro,md,js,jsx,svelte,ts,tsx,vue}',
    './libs/**/*.{astro,md,js,jsx,svelte,ts,tsx,vue}',
  ],
  theme: {
    colors: {
      secondary: '#275263',
      primary: '#07364a',
      white: '#ffffff',
      black: '#000000',
    },
    extend: {},
  },
};
// module.exports = {
//   content: [
//     './pages/**/*.{js,ts,jsx,tsx}',
//     './components/**/*.{js,ts,jsx,tsx}',
//     './app/**/*.{js,ts,jsx,tsx}',
//   ],
//   theme: { extend: {} },
//   plugins: [],
// };
