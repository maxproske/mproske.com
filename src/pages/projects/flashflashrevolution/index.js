import Link from 'next/link'

export default function () {
  return (
    <>
      <Link href="#content">
        <a className="skip">Skip to content</a>
      </Link>
      <main id="content" className="content">
        <div className="go-back">
          <Link href="/#projects-education">
            <a>Go back</a>
          </Link>
        </div>

        <section id="work">
          <h1 className="header">Flash Flash Revolution</h1>
          <p className="description">
            <Link href="http://www.flashflashrevolution.com/FFR_the_Game.php">
              <a target="_blank">Flash Flash Revolution</a>
            </Link>{' '}
            is a free online rhythm game, that was first released in 2002. The name is a tribute to Dance Dance
            Revolution, but is meant to be played using your keyboard.
          </p>
          <p className="description">
            I am responsible for posting monthly updates, server-side programming (PHP, MySQL), and engine development
            (Haxe, AS3). I aim to represent the interests of the community, and implemented new and improved features
            which improve overall user experience.
          </p>
          <p className="description">
            Today, the game still maintains over 1,000 daily players and 15,000 monthly active players.
          </p>

          <figure>
            <img
              src="/img/ffr/ffr-multiplayer_lowres.jpg"
              data-src="/img/ffr/ffr-multiplayer.png"
              className="lazyload blur image"
              alt="Multiplayer Gameplay"
            />
            <noscript>
              <img src="/img/ffr/ffr-multiplayer.png" alt="Multiplayer Gameplay" />
            </noscript>
            <figcaption>Multiplayer Gameplay</figcaption>
          </figure>

          <article className="project">
            <h2 className="title">Website Redesign</h2>
            <p className="description">Tools: PHP, HTML5, CSS3, JavaScript, MySQL, Golang.</p>
            <p className="description">
              I'm currently working on a complete semantic rewrite from the ground up. The current design from 2009 is
              not effective to navigate, and is barring new players from accessing our content. I am analyzing each
              feature and determining what pages should be adapted or excluded.
            </p>

            <div className="side-by-side">
              <figure>
                <img
                  src="/img/ffr/ffr-live-site_lowres.jpg"
                  data-src="/img/ffr/ffr-live-site.png"
                  className="lazyload blur image"
                  alt="Old Homepage Design"
                />
                <noscript>
                  <img src="/img/ffr/ffr-live-site.png" alt="Old Homepage Design" />
                </noscript>
                <figcaption>Old Homepage Design</figcaption>
              </figure>
              <figure>
                <img
                  src="/img/ffr/ffr-dev-site_lowres.jpg"
                  data-src="/img/ffr/ffr-dev-site.png"
                  className="lazyload blur image"
                  alt="New Homepage Design"
                />
                <noscript>
                  <img src="/img/ffr/ffr-dev-site.png" alt="New Homepage Design" />
                </noscript>
                <figcaption>New Homepage Design</figcaption>
              </figure>
            </div>
          </article>

          <article className="project">
            <h2 className="title">R^3 Air Edition</h2>
            <p className="description">Tools: AIR SDK, PHP, MySQL.</p>

            <p className="description">
              R^3 Air Edition is the same great game,{' '}
              <a
                href="https://www.bemanistyle.com/flash-flash-revolution-ditches-flash-brand-new-update/"
                target="_blank"
              >
                built entirely without Flash
              </a>
              .
            </p>
            <p className="description">
              Up until 2017, Flash Flash Revolution could only be played through Adobe Flash Player and an Internet
              browser. With degrading performance on modern systems, and{' '}
              <Link href="https://www.reuters.com/article/us-adobe-systems-flash-idUSKBN1AA22R">
                <a target="_blank">the end of Flash in 2020</a>
              </Link>
              , something needed to be done.
            </p>
            <p className="description">
              I helped develop a new engine build for Adobe AIR, with additional features including a desktop
              application, hardware acceleration, vsync, auto offset calibration, and a built-in patcher.
            </p>

            <figure>
              <img
                src="/img/ffr/ffr-menu_lowres.jpg"
                data-src="/img/ffr/ffr-menu.png"
                className="lazyload blur image"
                alt="Song Selection Screen"
              />
              <noscript>
                <img src="/img/ffr/ffr-menu.png" alt="Song Selection Screen" />
              </noscript>
              <figcaption>Song Selection Screen</figcaption>
            </figure>
          </article>
        </section>

        <div className="back-to-top">
          <Link href="#">
            <a>Back to top</a>
          </Link>
        </div>
        <div className="go-back">
          <Link href="/#my-work">
            <a>Go back</a>
          </Link>
        </div>
      </main>
      <footer id="footer">&nbsp;</footer>
    </>
  )
}
