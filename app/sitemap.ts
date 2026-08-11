import type { MetadataRoute } from 'next'

const siteUrl = 'https://nuphy-design-system.vercel.app'

/** 站点地图 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ]
}
