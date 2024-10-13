const siteMetadata = {
  title: 'Ajay Edupuganti',
  author: 'Ajay Edupuganti',
  headerTitle: 'ajayEdupuganti',
  description: 'Software Developer',
  language: 'en-us',
  theme: 'dark', // system, dark or light
  siteUrl: 'https://ajayedupuganti.com',
  siteRepo: 'https://github.com/AJAYKE/Portfolio',
  siteLogo: 'https://github.com/AJAYKE.png',
  image: 'https://github.com/AJAYKE.png',
  socialBanner: '/static/images/twitter-card.png',
  email: 'ajayedupuganti18@gmail.com',
  github: 'https://github.com/AJAYKE',
  twitter: 'https://x.com/AjayEdupuganti',
  facebook: 'https://www.facebook.com/ajaykedupuganti/',
  linkedin: 'https://www.linkedin.com/in/ajayedupuganti/',
  locale: 'en-US',
  comment: {
    provider: 'giscus',
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO || '',
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID || '',
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY || '',
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID || '',
      mapping: 'pathname',
      reactions: '1',
      metadata: '0',
      theme: 'light',
      darkTheme: 'transparent_dark',
      themeURL: '',
    },
  },
};

module.exports = siteMetadata;
