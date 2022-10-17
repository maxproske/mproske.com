import Link from 'next/link'

export default function RPP() {
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
          <h1 className="header">Rock Paper Prizes</h1>
          {/* <p className="description">
            Rock Paper Prizes is an original web-based game, where users can play rock-paper-scissors against a video
            recorded Circle K employee, for chances to win thousands of daily instant prizes, to redeem in-store within
            10 days.
          </p> */}
          <p className="description">FPO</p>
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
