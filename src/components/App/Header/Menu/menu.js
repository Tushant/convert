export default [
  {
    name   : 'account',
    subMenu: [
      { name: 'User Settings', link: '/' },
      { name: 'Edit Account', link: '/' },
      { name: 'Help Center', link: '/' }
    ]
  },
  {
    name   : 'manage',
    subMenu: [
      { name: 'Admin', link: '/', forAdmin: true },
      { name: 'System Settings', link: '/', forAdmin: true },
      { name: 'Listings', link: '/' }
    ]
  }
];
