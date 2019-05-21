export default {
  // Folders / files.
  indexHtml: './public/index.html',
  public: './public',
  src: './src',

  // Meta.
  title: 'Formal',
  description: 'Elegant form management primitives for the react hooks era.',
  repository: 'https://github.com/kevinwolfcr/formal',

  // Menu order.

  menu: [
    'Home',
    {
      name: 'Quick start',
      menu: ['React Web'],
    },
    {
      name: 'Tutorial',
      menu: [
        'Intro',
        'Installation',
        'Creating a form',
        'Adding validation',
        'Reducing boilerplate',
      ],
    },
    { name: 'API Reference', menu: ['Core', 'Web', 'Native'] },
    'Contributing',
  ],

  // Theme.
  themeConfig: {
    colors: {
      primary: '#4CA0D3',
    },
    logo: {
      src: '/public/images/banner.png',
      width: 200,
    },
  },
}
