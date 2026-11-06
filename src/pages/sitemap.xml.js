import { getAllPosts } from 'src/lib/blog'

const SITE_URL = 'https://mproske.com'

const STATIC_PATHS = [
  '/',
  '/resume',
  '/blog',
  '/work/six12creative',
  '/work/six12creative/31-days',
  '/work/six12creative/drink-snack-score',
  '/work/six12creative/fuel-runner',
  '/work/six12creative/rock-paper-prizes',
]

export default function Sitemap() {
  return null
}

export async function getServerSideProps({ res }) {
  const paths = [...STATIC_PATHS, ...getAllPosts().map(({ slug }) => `/blog/${slug}`)]
  const urls = paths.map((path) => `  <url><loc>${SITE_URL}${path}</loc></url>`).join('\n')

  res.setHeader('Content-Type', 'application/xml; charset=utf-8')
  res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate')
  res.write(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
  )
  res.end()

  return { props: {} }
}
