import type { MetadataRoute } from 'next'

const siteUrl = 'https://nuphy-design-system.vercel.app'

/** 搜索引擎抓取规则 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  }
}
