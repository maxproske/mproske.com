import { Feed } from 'feed'
import { getAllPosts } from 'src/lib/blog'

const SITE_URL = 'https://mproske.com'

export default function Rss() {
  return null
}

export async function getServerSideProps({ res }) {
  const posts = getAllPosts()

  const feed = new Feed({
    title: 'Max Proske – Blog',
    description: 'Writing by Max Proske on software engineering and leadership.',
    id: SITE_URL,
    link: SITE_URL,
    language: 'en',
    copyright: `All rights reserved ${new Date().getFullYear()}, Max Proske`,
    updated: posts[0] ? new Date(posts[0].frontmatter.date) : new Date(),
    feedLinks: {
      rss: `${SITE_URL}/rss.xml`,
    },
    author: {
      name: 'Max Proske',
      email: 'max@mproske.com',
      link: SITE_URL,
    },
  })

  for (const { slug, frontmatter } of posts) {
    const url = `${SITE_URL}/blog/${slug}`
    feed.addItem({
      title: frontmatter.title,
      id: url,
      link: url,
      description: frontmatter.description,
      date: new Date(frontmatter.date),
    })
  }

  res.setHeader('Content-Type', 'application/xml; charset=utf-8')
  res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate')
  res.write(feed.rss2())
  res.end()

  return { props: {} }
}
