import Link from 'next/link'

export default function () {
  return (
    <>
      <Link href="#content">
        <a class="skip">Skip to content</a>
      </Link>
      <main id="content" class="content">
        <div class="go-back">
          <Link href="/#my-work">
            <a>Go back</a>
          </Link>
        </div>

        <section id="work">
          <h1 class="header">SIX12 Creative</h1>
          <p class="description">
            In my capacity as full stack web developer at{' '}
            <Link href="https://six12creative.com">
              <a target="_blank">SIX12 Creative</a>
            </Link>
            , I have built commercial websites for national and international clients, across retail, industrial, and
            food industries. I have a skilled understanding of developing PHP web applications from start to finish,
            including sites backed by Wordpress and Drupal.
          </p>
          <p class="description">
            I enjoy continuously improving internal development processes, reading and writing documentation, as well as
            researching and sharing new technologies that could apply in our workflow.
          </p>

          <article class="project">
            <h2 class="title">Flip The Lip Contest</h2>
            <p class="description">Tools: Drupal 8, PHP, MySQL.</p>
            <p class="description">
              <Link href="https://flipthelip.ca/">
                <a target="_blank">Flip The Lip</a>
              </Link>{' '}
              is run twice per year in association with Circle K and Mac’s Convenience Stores. Contest website, product
              design, and prize fulfillment by SIX12 Creative.
            </p>

            <figure>
              <img
                src="/img/six12/ftl4-website_lowres.jpg"
                data-src="/img/six12/ftl4-website.jpg"
                class="lazyload blur image"
                alt="Flip The Lip 4 Promo"
              />
              <noscript>
                <img src="/img/six12/ftl4-website.jpg" alt="Flip The Lip 4 Promo" />
              </noscript>
              <figcaption>Flip The Lip 4 Contest Website & Product</figcaption>
            </figure>
          </article>

          <article class="project">
            <h2 class="title">Destiny 2 + Rockstar Promotion</h2>
            <p class="description">Tools: Facebook Apps, PHP, MySQL.</p>
            <p class="description">
              This contest offered daily sweepstakes for the chance to win a copy of Destiny 2 and other physical game
              swag. Contestants entered via Facebook or the Circle K mobile app. Contest website and prize fulfillment
              by SIX12 Creative.
            </p>

            <figure>
              <img
                src="/img/six12/destiny2-full_lowres.jpg"
                data-src="/img/six12/destiny2-full.png"
                class="lazyload blur image"
                alt="Destiny 2 Rockstar Contest Banner"
              />
              <noscript>
                <img src="/img/six12/destiny2-full.png" alt="Destiny 2 Rockstar Contest Banner" />
              </noscript>
              <figcaption>Destiny 2 Rockstar Contest Website</figcaption>
            </figure>
          </article>

          <article class="project">
            <h2 class="title">Vancity Plating</h2>
            <p class="description">Tools: WordPress, PHP, MySQL.</p>
            <p class="description">
              <Link href="http://vancityplating.com/">
                <a target="_blank">Vancity Plating</a>
              </Link>{' '}
              has over 30 years experience in the chrome plating industry.
            </p>

            <figure>
              <img
                src="/img/six12/vancityplating-gallery_lowres.jpg"
                data-src="/img/six12/vancityplating-gallery.png"
                class="lazyload blur image"
                alt="Vancity Plating Gallery"
              />
              <noscript>
                <img src="/img/six12/vancityplating-gallery.png" alt="Vancity Plating Gallery" />
              </noscript>
              <figcaption>Vancity Plating Instagram Gallery</figcaption>
            </figure>
          </article>

          <article class="project">
            <h2 class="title">AIMS</h2>
            <p class="description">Tools: Drupal 7, PHP, MySQL.</p>
            <p class="description">
              AIMS is a web-based checklist and reporting system for health and safety regulations, in-store
              merchandising, and other procedure checks. The system has expanded to thousands of convenience stores
              across North America.
            </p>
            <p class="description">
              This real time operations management tool is built with Drupal 7. It is designed for easy use on mobile
              devices and tablets, and is fully customizable by client admins.
            </p>

            <figure>
              <picture>
                <source media="(max-width: 45rem)" srcSet="/img/six12/aims-zoom.png" />
                <img
                  src="/img/six12/aims_lowres.jpg"
                  data-src="/img/six12/aims.jpg"
                  class="lazyload blur image"
                  alt="AIMS"
                />
              </picture>
              <noscript>
                <picture>
                  <source media="(max-width: 45rem)" srcSet="/img/six12/aims-zoom.png" />
                  <img src="/img/six12/aims.jpg" alt="AIMS" />
                </picture>
              </noscript>
              <figcaption>AIMS Checklisting System</figcaption>
            </figure>
          </article>
        </section>
      </main>
      <footer id="footer">&nbsp;</footer>
    </>
  )
}
