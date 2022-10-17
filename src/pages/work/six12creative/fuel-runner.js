import Link from 'next/link'

export default function FR() {
  return (
    <>
      <Link href="#content">
        <a className="skip">Skip to content</a>
      </Link>
      <main id="content" className="content">
        <div className="go-back">
          <Link href="/work/six12creative#projects">
            <a>Go back</a>
          </Link>
        </div>

        <section id="work">
          <h1 className="header">Fuel Runner</h1>
          <p className="description">Coming Soon!</p>
        </section>

        <div className="back-to-top">
          <Link href="#">
            <a>Back to top</a>
          </Link>
        </div>
        <div className="go-back">
          <Link href="/work/six12creative#projects">
            <a>Go back</a>
          </Link>
        </div>
      </main>
      <footer id="footer">&nbsp;</footer>
    </>
  )
}
