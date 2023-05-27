import Link from 'next/link'

export default function Days31() {
  return <>
    <Link href="#content" className="skip">
      Skip to content
    </Link>
    <main id="content" className="content">
      <div className="go-back">
        <Link href="/work/six12creative#projects">
          Go back
        </Link>
      </div>

      <section id="work">
        <h1 className="header">31 Days of Circle K</h1>
        <p className="description">Coming Soon!</p>
      </section>

      <div className="back-to-top">
        <Link href="#">
          Back to top
        </Link>
      </div>
      <div className="go-back">
        <Link href="/work/six12creative#projects">
          Go back
        </Link>
      </div>
    </main>
    <footer id="footer">&nbsp;</footer>
  </>;
}
