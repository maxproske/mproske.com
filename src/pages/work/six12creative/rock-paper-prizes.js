import Link from 'next/link'

export default function RPP() {
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
        <h1 className="header">Rock Paper Prizes</h1>
        {/* <p className="description">
          Rock Paper Prizes is an original web-based game, where users can play rock-paper-scissors against a video
          recorded Circle K employee, for chances to win thousands of daily instant prizes, to redeem in-store within
          10 days.
        </p> */}
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
