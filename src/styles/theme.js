const theme = {
  grid: {
    breakpoints: {
      sm: 480,
      md: 768,
      lg: 992,
      xl: 1280
    },
    maxWidth: 1440,
    gutter: {
      edge: {
        xs: 40,
        lg: 176
      },
      col: {
        xs: 8,
        lg: 22
      }
    }
  },
  verticalRhythm: 24,
  colors: {
    mainBrand: '#547369',
    accentLight: '#90bbb6',
    accentDark: '#205263',
    shadeLight: '#e6cfa6',
    shadeDark: '#202b2a'
  },
  type: {
    body: {
      fontStack: '"Source Sans Pro", sans-serif',
      fontWeight: 400 // regular
    },
    headings: {
      fontStack: '"Barlow Condensed", sans-serif',
      fontWeight: 600, // semibold
      h1: {
        fontSize: { xs: 40, lg: 80 }
      },
      h2: {
        fontSize: { xs: 25, lg: 50 }
      },
      h3: {
        fontSize: { xs: 25, lg: 50 }
      },
      h4: {
        fontSize: { xs: 23, lg: 40 }
      },
      h5: {
        fontSize: { xs: 20, lg: 30 }
      },
      h6: {
        fontSize: { xs: 16, lg: 24 }
      }
    }
  },
  elements: {
    sidebar: {
      width: 240
    }
  }
};

export default theme;
