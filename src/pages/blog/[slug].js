import Head from 'next/head'
import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import rehypeShiki from '@shikijs/rehype'
import { getPostBySlug, getPostSlugs } from 'src/lib/blog'

export default function BlogPost({ mdxSource, frontmatter, readingTime }) {
  return (
    <>
      <Head>
        <title>{`${frontmatter.title} – Max Proske`}</title>
        <meta name="description" content={frontmatter.description} />
        <meta property="og:title" content={frontmatter.title} />
        <meta property="og:description" content={frontmatter.description} />
        <meta property="og:type" content="article" />
      </Head>
      <Link href="#content" className="skip">
        Skip to content
      </Link>
      <main id="content" className="content">
        <div className="go-back">
          <Link href="/blog">« All posts</Link>
        </div>
        <section id="blog">
          <article>
            <header>
              <h1 className="header">{frontmatter.title}</h1>
              <p className="blog-post-meta">
                <time dateTime={frontmatter.date}>{formatDate(frontmatter.date)}</time> · {readingTime} min read
              </p>
            </header>
            <div className="blog-body">
              <MDXRemote {...mdxSource} />
            </div>
          </article>
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

export async function getStaticPaths() {
  return {
    paths: getPostSlugs().map((slug) => ({ params: { slug } })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const { content, frontmatter, readingTime } = getPostBySlug(params.slug)
  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        [
          rehypeShiki,
          {
            themes: {
              light: 'github-light',
              dark: 'github-dark',
            },
          },
        ],
      ],
    },
  })
  return { props: { mdxSource, frontmatter, readingTime } }
}
