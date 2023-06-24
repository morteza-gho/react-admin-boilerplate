/** @type {import('tailwindcss').Config} */
module.exports = {
  // important: true,
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {

    extend: {
      fontWeight: {
        regular: 400, // equal to medium in tailwind - because other guys use this weight, I need to extend this here
        heavy: 800, // equal to extrabold in tailwind 
      },
      colors: {
        back: '#333',
        snowy: {
          main: 'var(--snowy-main)'
        },
        dark: {
          main: 'var(--dark-main)'
        }, 
        black: {
          main: 'var(--black-main)', // most of title color
        },
        gray: {
          main: 'var(--gray-main)', // most of text color
          light: 'var(--gray-light)', // color of outline light button
          lighter: 'var(--gray-lighter)', // light button
          lightest: 'var(--gray-lightest)'
        },
        blue: {
          main: 'var(--blue-main)', // main blue color
          light: 'var(--blue-light)', // some button border color
          lighter: 'var(--blue-lighter)', // some button baclgroundcolor
          lightest: 'var(--blue-lightest)', // some box backgound
        },
        red: {
          main: 'var(--red-main)',
          lighter: 'var(--red-lighter)'
        },
        yellow: {
          main: 'var(--yellow-main)',
        },
        orange: {
          main: 'var(--orange-main)',
        },
        green: {
          main: 'var(--green-main)',
          secondary: 'var(--green-secondary)',
          light: 'var(--green-light)',
          lighter: 'var(--green-lighter)',
        }
      }, // colors

      lineHeight: {
        0: 0,
        1: '0.25rem',
        2: '0.5rem',
        12: '3rem',
        14: '3.5rem',
        16: '4rem',
        18: '4.5rem',
        20: '5rem',
        22: '5.5rem',
        24: '6rem',
        26: '6.6rem',
        28: '7rem',
        30: '7.5rem',
        32: '8rem'
      }
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('children', '& > *');
    },
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
  safelist: [
    { pattern: /(text)-(xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl|8xl|9xl)/ },
    { pattern: /(font)-(thin|light|extralight|regular|medium|semibold|bold|extrabold|black)/ },
    { pattern: /(bg|text|border)-(black-main|snowy-main|dark-main|gray-main|gray-light|gray-lighter|gray-lightest|blue-main|red-main|yellow-main|orange-main|green-main)/ },
    { pattern: /(leading)-(0|1|2|3|4|5|6|7|8|9|10|12|14|16|18|20|22|24|26|28|30|32)/ },
    { pattern: /(w)-(0|1|2|3|4|5|6|7|8|9|10)/ },
  ]
};


