import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

const POSTS_DIR = path.join(process.cwd(), 'content/blog')

export function getPostSlugs() {
  if (!fs.existsSync(POSTS_DIR)) return []
  return fs
    .readdirSync(POSTS_DIR)
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => file.replace(/\.mdx$/, ''))
}

export function getPostBySlug(slug) {
  const fullPath = path.join(POSTS_DIR, `${slug}.mdx`)
  const raw = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(raw)

  const date = data.date instanceof Date ? data.date.toISOString() : String(data.date ?? '')

  return {
    slug,
    content,
    frontmatter: {
      title: data.title ?? slug,
      date,
      description: data.description ?? '',
      cover: data.cover ?? null,
    },
    readingTime: Math.max(1, Math.round(readingTime(content).minutes)),
  }
}

export function getAllPosts() {
  return getPostSlugs()
    .map((slug) => {
      const post = getPostBySlug(slug)
      return {
        slug: post.slug,
        frontmatter: post.frontmatter,
        readingTime: post.readingTime,
      }
    })
    .sort((a, b) => (a.frontmatter.date < b.frontmatter.date ? 1 : -1))
}
