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
          <h1 class="header">iVizLab</h1>

          <article class="project">
            <h2 class="title">Batch Management System</h2>
            <p class="description">Tools: PHP, MySQL, Axure.</p>
            <p class="description">
              As part of a directed study with{' '}
              <Link href="https://www.dipaola.org">
                <a target="_blank">Steve DiPaola</a>
              </Link>
              , past Director of Cognitive Science at{' '}
              <Link href="https://www.sfu.ca">
                <a target="_blank">Simon Fraser University</a>
              </Link>
              , I proposed a solution that would improve scheduling, replace a very long e-mail chain, and eliminate the
              need to remote-in with TeamViewer. I designed a PHP web application, that could send any image processing
              requests to iVizLab's rendering workstation.
            </p>

            <figure class="preview">
              <img
                src="/img/ivizlab/gallery_lowres.jpg"
                data-src="/img/ivizlab/gallery.png"
                class="lazyload blur image"
                alt="Gallery page"
              />
              <noscript>
                <img src="/img/ivizlab/gallery.png" alt="Gallery page" />
              </noscript>
              <figcaption>Wireframe of the gallery page, with 3 finished renders</figcaption>
            </figure>
            <p class="description">
              Users could upload any source image, select their desired parameters, and browse a gallery of existing
              recipes. By allowing users to select what output image they liked, ask what recipe was used to make it,
              and understand what parameters could be tweaked, researchers could more easily understand the landscape in
              which they are involved.
            </p>

            <figure class="preview">
              <img
                src="/img/ivizlab/create_lowres.jpg"
                data-src="/img/ivizlab/create.png"
                class="lazyload blur image"
                alt="Selection screen"
              />
              <noscript>
                <img src="/img/ivizlab/create.png" alt="Selection screen" />
              </noscript>
              <figcaption>
                Wireframe of the deep learning model selection screen, after uploading a source image.
              </figcaption>
            </figure>
            <p class="description">
              My application was designed to improve the efficiency of researchers, and eliminate the issue of wait time
              for access to the rendering workstation.
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
