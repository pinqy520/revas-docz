export default {
  title: 'Revas',
  src: 'src',
  description: 'Use React and CSS to build UI interfaces on canvas',
  menu: [{ name: 'Getting Started', menu: ['Introduction', 'Quick Start', 'Examples'] }, 'Components', 'API'],
  typescript: true,
  themeConfig: {
    showDarkModeSwitch: false,
    useLocalStorage: false,
    colors: {
      text: '#333',
      background: '#fff',
      primary: '#9254DE',
      secondary: 'khaki',
      muted: '#F5F6F7',
      header: {
        bg: '#fff',
        // text: '#000',
        border: '#9254DE',
      },
      sidebar: {
        navLinkActive: '#9254DE',
      },
      blockquote: {
        border: '#9254DE',
      },
    },
    fonts: {
      body:
        "Avenir, -apple-system,'BlinkMacSystemFont','Segoe UI','Roboto','Helvetica Neue','Arial','Noto Sans',sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji'",
      heading: 'Skia, Didot',
    },
    fontSizes: [12, 14, 16, 18, 22, 28, 42, 60, 90],
    styles: {
      blockquote: {
        py: 2,
        px: 3,
      },
      table: {
        width: '100%',
        my: 4,
        borderCollapse: 'separate',
        borderSpacing: 0,
        background: '#fbfbfb',
        [['th', 'td']]: {
          textAlign: 'left',
          py: 2,
          pr: 2,
          pl: 2,
          borderColor: 'muted',
          borderBottomStyle: 'solid',
          ':first-child': {
            pl: 3,
          },
        },
      },
      th: {
        bg: 'muted',
      },
    },
  },
};
