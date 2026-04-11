import Head from 'next/head'
import Link from 'next/link'
import { getAllPosts } from 'src/lib/blog'

export default function BlogIndex({ posts }) {
  return (
    <>
      <Head>
        <title>Blog – Max Proske</title>
        <meta name="description" content="Writing by Max Proske on software engineering and leadership." />
        <link rel="alternate" type="application/rss+xml" title="Max Proske – Blog" href="/rss.xml" />
      </Head>
      <Link href="#content" className="skip">
        Skip to content
      </Link>
      <main id="content" className="content">
        <div className="go-back">
          <Link href="/#">« Go back</Link>
        </div>
        <section id="blog">
          <h1 className="header">Blog</h1>
          {posts.length === 0 ? (
            <p className="description">No posts yet. Check back soon.</p>
          ) : (
            <ul className="blog-list">
              {posts.map(({ slug, frontmatter, readingTime }) => (
                <li key={slug}>
                  <h2 className="title">
                    <Link href={`/blog/${slug}`}>{frontmatter.title}</Link>
                  </h2>
                  <p className="blog-post-meta">
                    <time dateTime={frontmatter.date}>{formatDate(frontmatter.date)}</time> · {readingTime} min read
                  </p>
                </li>
              ))}
            </ul>
          )}
        </section>
        <div className="back-to-top">
          <Link href="#">Back to top</Link>
        </div>
      </main>
      <footer id="footer">&nbsp;</footer>
    </>
  )
}

function formatDate(iso) {
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return iso
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export async function getStaticProps() {
  const posts = getAllPosts()
  return { props: { posts } }
}
