import Link from 'next/link'

export default function () {
  return (
    <>
      <Link href="#content">
        <a class="skip">Skip to content</a>
      </Link>
      <main id="content" class="content">
        <div class="go-back">
          <Link href="/#projects-education">
            <a>Go back</a>
          </Link>
        </div>

        <section id="work">
          <h1 class="header">SFU</h1>
          <p class="description">
            Engaged the first year student body of Simon Fraser University. Presented the concerns of first year
            Computer Science majors to council, and coordinated several events including Frosh week.
          </p>

          <article class="project">
            <h2 class="title">An Hour With Mozilla</h2>
            <figure>
              <img
                src="/img/sfu/mozilla_lowres.jpg"
                data-src="/img/sfu/mozilla.jpg"
                class="lazyload blur image"
                alt="An Hour With Mozilla"
              />
              <noscript>
                <img src="/img/sfu/mozilla.jpg" alt="An Hour With Mozilla" />
              </noscript>
              <figcaption>An Hour With Mozilla</figcaption>
            </figure>
            <p class="description">
              I wanted to host an event that would showcase a distinguished software engineer's beginnings in Computing
              Science. With the research assistance of my colleagues in the Computer Science Student Society, I was able
              to arrange a keynote talk with a member of the Mozilla Firefox development team.
            </p>
            <p class="description">
              Dethe Elza spoke about his origins in software engineering, as well as his involvement in the development
              of a security add-on for Firefox called Lightbeam.
            </p>
          </article>
        </section>

        <div class="back-to-top">
          <Link href="#">
            <a>Back to top</a>
          </Link>
        </div>
        <div class="go-back">
          <Link href="/#my-work">
            <a>Go back</a>
          </Link>
        </div>
      </main>
      <footer id="footer">&nbsp;</footer>
    </>
  )
}
