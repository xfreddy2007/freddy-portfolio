module.exports = {
  purge: {
    content: [
      './src/index.html',
      './src/index.js,',
      './src/vendor.js'],
    options: {
      keyframes: true,
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans':['Merriweather'],
      'serif':['Nunito'],
      'code':['Source Code Pro']
    },
    fontSize: {
      'xs':['8px','150%'],
      'sm':['16px','150%'],
      'md':['20px','150%'],
      'lg':['24px','150%'],
      'xl':['28px','150%'],
      '2xl':['32px','150%'],
      '3xl':['36px','150%'],
      '4xl':['40px','150%'],
      '5xl':['44px','150%'],
      '6xl':['48px','150%'],
      '7xl':['52px','150%'],
      '8xl':['56px','150%'],
      '9xl':['60px','150%'],
    },
    screens: {
      'sm':'576px',
      'md':'768px',
      'lg':'992px',
      'xl':'1200px',
      '2xl':'1536px'
    },
    height: {
      '8': '2rem',
      '12': '3rem',
      '16': '4rem',
      '20': '5rem',
      '75': '75px',
      '100': '100px',
      '1/2': '50%',
      '1/5': '20%',
      '2/5': '40%',
      '3/5': '60%',
      '4/5': '80%',
      sm:'480px',
      md:'550px',
      lg:'650px',
      xl:'750px',
      '2xl': '2000px',
      full: '100%'
    },
    minHeight: {
      '0': '0',
      'full': '100%',
      'screen': '100vh',
      'xl': '1200px'
    },
    zIndex: {
      'auto': 'auto',
      '0': 0,
      '10': 10,
      '20': 20,
      '30': 30,
      '40': 40,
    },
    boxShadow: {
      sm: '0 1px 2px 1px rgba(0, 0, 0, 0.05)',
      DEFAULT: '0 1px 3px 1px rgba(0, 0, 0, 0.5), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px 1px rgba(0, 0, 0, 0.5), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px 1px rgba(0, 0, 0, 0.5), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px 1px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
     '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.5)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.5)',
      none: 'none',
    },
    extend: {
      zIndex: {
        '-20': -20,
        '-10': -10,
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
