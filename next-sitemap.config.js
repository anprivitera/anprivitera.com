module.exports = {
  siteUrl: 'https://anprivitera.com',
  output: 'export',
  changeFrenq: 'monthly',
  transform: async (config, path) => {
    if (path.includes('/blog')) {
      return {
        loc: path,
        priority: 0.7,
        lastMod: new Date().toISOString()
      }
    }
    return {
      loc: path,
      priority: 1,
      lastMod: new Date().toISOString()
    }
  },
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: 'Amazonbot', disallow: '/' },
      { userAgent: 'anthropic-ai', disallow: '/' },
      { userAgent: 'Applebot-Extended', disallow: '/' },
      { userAgent: 'Bytespider', disallow: '/' },
      { userAgent: 'CCBot', disallow: '/' },
      { userAgent: 'ChatGPT-User', disallow: '/' },
      { userAgent: 'ClaudeBot', disallow: '/' },
      { userAgent: 'Claude-Web', disallow: '/' },
      { userAgent: 'cohere-ai', disallow: '/' },
      { userAgent: 'Diffbot', disallow: '/' },
      { userAgent: 'FacebookBot', disallow: '/' },
      { userAgent: 'FriendlyCrawler', disallow: '/' },
      { userAgent: 'Google-Extended', disallow: '/' },
      { userAgent: 'GoogleOther', disallow: '/' },
      { userAgent: 'GoogleOther-Image', disallow: '/' },
      { userAgent: 'GoogleOther-Video', disallow: '/' },
      { userAgent: 'GPTBot', disallow: '/' },
      { userAgent: 'ImagesiftBot', disallow: '/' },
      { userAgent: 'img2dataset', disallow: '/' },
      { userAgent: 'OAI-SearchBot', disallow: '/' },
      { userAgent: 'omgili', disallow: '/' },
      { userAgent: 'omgilibot', disallow: '/' },
      { userAgent: 'PerplexityBot', disallow: '/' },
      { userAgent: 'YouBot', disallow: '/' },
      { userAgent: '*', disallow: '/assets' },
    ],
  },
}
