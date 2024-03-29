import Link from 'next/link'

export default function StyleGuide() {
  return (
    <>
      <Link href="#content" className="skip">
        Skip to content
      </Link>
      <main id="content" className="content">
        <div className="go-back">
          <Link href="/#">« Go back</Link>
        </div>

        <section id="style-guide">
          <h1 className="header">Style Guide</h1>
          <p className="description">
            This page is intended to codify the overall visual language of my portfolio. It also holds examples of
            reusable components in my front-end code.
          </p>
          <p className="description">
            GitHub:{' '}
            <Link href="https://github.com/maxproske/portfolio" target="_blank">
              https://github.com/maxproske/portfolio
            </Link>
          </p>

          <section id="table-of-contents" className="section">
            <h2 className="title">Table of contents</h2>
            <h3 className="table-of-contents-title">Brand Identity</h3>
            <ul>
              <li className="description">
                <Link href="#design-ethos">Design Ethos</Link>
              </li>
            </ul>
            <h3 className="table-of-contents-title">Interactive Elements</h3>
            <ul>
              <li className="description">
                <Link href="#in-text-links">In-Text Links</Link>
              </li>
            </ul>
            <h3 className="table-of-contents-title">Text Styling</h3>
            <ul>
              <li className="description">
                <Link href="#headings">Four Levels of Headings</Link>
              </li>
            </ul>
            <h3 className="table-of-contents-title">Combined Elements</h3>
            <ul>
              <li className="description">
                <Link href="#figures">Figures</Link>
              </li>
              <li className="description">
                <Link href="#projects">Projects</Link>
              </li>
            </ul>
          </section>

          <section id="design-ethos" className="section">
            <h2 className="title">Design Ethos</h2>
            <article>
              <h3>My Audience</h3>
              <p className="description">
                Recruiters looking for a full stack web developer, someone who can work on front-end and back-end code.
                I introduce myself as being based in Vancouver, because I am targetting local web development companies.
              </p>
            </article>
            <article>
              <h3>My Argument</h3>
              <p className="description">
                Showcase my process on work-related projects, and other projects completed in the SIAT program.
              </p>
            </article>
            <article>
              <h3>My Values</h3>
              <p className="description">
                I value continuous learning, through persistance and attention to detail. I am also highly organized, so
                I want to communicate my organization through the layout my portfolio and consistency across web pages.
              </p>
            </article>
          </section>

          <section id="interactive-elements" className="section">
            <h2 className="title">Interactive Elements</h2>

            <article id="in-text-links" className="example">
              <h3>In-Text Links</h3>
              <h4>CSS Selectors</h4>
              <p className="description">
                <code>a</code>
              </p>
              <h4>HTML</h4>
              <pre>
                <code>&lt;a href=&quot;#placeholder&quot;&gt;Download my resume&lt;/a&gt;</code>
              </pre>
              <h4>Rendered Element</h4>
              <p className="description">
                <Link href="#placeholder">Download my resume</Link>
              </p>
            </article>
          </section>

          <section id="text-styling" className="section">
            <h2 className="title">Text Styling</h2>

            <article id="headings" className="example">
              <h3>Four Levels of Headings</h3>
              <h4>CSS Selectors</h4>
              <p className="description">
                <code>.heading</code> <code>.header</code> <code>.title</code> <code>.name</code>
              </p>
              <h4>HTML</h4>
              <pre>
                <code>
                  &lt;h1 className=&quot;heading&quot;&gt;Heading 5rem&lt;/h1&gt;
                  <br />
                  &lt;h2 className=&quot;header&quot;&gt;Header 3.5rem&lt;/h2&gt;
                  <br />
                  &lt;h3 className=&quot;title&quot;&gt;Title 2rem&lt;/h3&gt;
                  <br />
                  &lt;h4 className=&quot;name&quot;&gt;Name 1rem&lt;/h4&gt;
                </code>
              </pre>
              <h4>Rendered Element</h4>
              <div className="heading">Heading 5rem</div>
              <div className="header">Header 3.5rem</div>
              <div className="title">Title 2rem</div>
              <div className="name">Name 1rem</div>
            </article>
          </section>

          <section id="combined-elements" className="section">
            <h2 className="title">Combined Elements</h2>

            <article id="figures" className="example">
              <h3>Figures</h3>
              <h4>CSS Selectors</h4>
              <p className="description">
                <code>.figure</code> <code>.image</code> <code>.caption</code>
                <br />
              </p>
              <h4>HTML</h4>
              <pre>
                <code>
                  &lt;figure className=&quot;figure&quot;&gt;
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&lt;img className=&quot;image&quot;
                  src=&quot;/img/six12/ftl4-website.jpg&quot;&gt;
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&lt;figcaption className=&quot;caption&quot;&gt;Flip The Lip 4
                  Promo&lt;/figcaption&gt;
                  <br />
                  &lt;/figure&gt;
                </code>
              </pre>
              <h4>Rendered Element</h4>
              <figure className="figure">
                <img className="image" src="/img/six12/ftl4-website.jpg" alt="Flip The Lip" />
                <figcaption className="caption">Flip The Lip 4 Promo</figcaption>
              </figure>
            </article>

            <article id="projects" className="example">
              <h3>Projects</h3>
              <h4>CSS Selectors</h4>
              <p className="description">
                <code>#sfu</code> <code>.link</code> <code>.item</code>
                <br />
                <code>.title</code> <code>.logo</code> <code>.description</code>
                <br />
                <code>.background-image</code>
              </p>
              <h4>HTML</h4>
              <pre>
                <code>
                  &lt;a href=&quot;work/sfu/&quot; className=&quot;link&quot; id=&quot;sfu&quot;&gt;
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&lt;article className=&quot;item&quot;&gt;
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h3 className=&quot;title&quot;&gt;First Year
                  Computing Science Representative&lt;/h3&gt;
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div className=&quot;logo&quot;&gt;
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;svg viewBox=&quot;0 16 108
                  40&quot;&gt;
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;path
                  d=&quot;m77.07 35.77c-0.56 0.07-0.99 0.09-1.28 0.09s-0.72-0.04-1.3-0.11c0.09 0.86 0.11 1.17 0.13
                  1.87v2.27l0.02 5.36c0 2.14 0.07 2.59 0.58 3.44 0.32 0.52 0.77 0.99 1.33 1.37 1.06 0.74 2.21 1.01 4.3
                  1.01 1.96 0 3.17-0.29 4.25-1.06 1.58-1.1 1.91-2.09 1.91-5.74l-0.01-3.52c0-0.29 0.02-1.06 0.04-2.3
                  0-0.94 0.02-1.62 0.05-1.98 0.02-0.16 0.04-0.38 0.07-0.7-0.52 0.05-0.9 0.09-1.15
                  0.09s-0.63-0.04-1.12-0.09c0.09 0.79 0.13 1.1 0.16 1.78 0.07 0.9 0.09 1.98 0.09 3.17v3.51c0 2.47-0.07
                  3.02-0.54 3.71-0.18 0.25-0.49 0.52-0.9 0.76-0.76 0.47-1.6 0.65-2.72 0.65-1.6
                  0-3.08-0.59-3.65-1.42-0.45-0.68-0.47-0.95-0.5-3.29v-4.59c0-0.25 0.02-0.68 0.04-1.24 0-0.56 0.02-0.92
                  0.02-1.06 0.05-0.76 0.07-1.1 0.18-1.98m-6.12 2.18c-0.04-0.47-0.07-0.83-0.07-1.08 0-0.32 0.02-0.56
                  0.11-1.13-0.88 0.11-1.19 0.11-1.71 0.11h-2.3l-2.66-0.02-1.53-0.05c0.09 1.78 0.11 2.5 0.16 3.63v6.16c0
                  1.62-0.02 2.68-0.04 3.2-0.05 0.45-0.09 1.17-0.18 2.09 0.52-0.04 0.9-0.07 1.17-0.07 0.32 0 0.79 0.02
                  1.42 0.09-0.16-1.96-0.16-2.3-0.16-5v-1.91h2.37c0.94 0 1.53 0.05 2.95
                  0.23-0.04-0.47-0.07-0.83-0.07-1.08 0-0.29 0.02-0.56 0.12-1.15-1.22 0.18-1.64 0.2-2.68
                  0.2h-2.66v-3.58l0.02-0.9h2.41c0.61 0 1.58 0.04 2.39 0.14 0.2 0.04 0.51 0.06 0.94 0.12m-12.74
                  0.41c0.11-0.49 0.16-0.65 0.31-1.13 0.14-0.38 0.18-0.49
                  0.41-0.9-0.67-0.25-0.95-0.34-1.46-0.45-0.72-0.16-1.42-0.25-2.16-0.25-1.6 0-2.68 0.38-3.53 1.24-0.76
                  0.76-1.22 1.85-1.22 2.99 0 1.33 0.49 2.3 1.55 3.04 0.54 0.38 0.97 0.61 2.12 1.13 1.17 0.54 1.51 0.7
                  2.02 1.06 0.79 0.54 1.17 1.17 1.17 1.91 0 1.53-1.24 2.57-3.04 2.57-0.79
                  0-1.6-0.18-2.34-0.56-0.52-0.25-0.83-0.47-1.55-1.08-0.18 1.06-0.27 1.37-0.68 2.25 1.06 0.52 1.49 0.65
                  2.59 0.81 0.56 0.09 1.04 0.13 1.51 0.13 2.03 0 3.53-0.65 4.5-1.91 0.65-0.88 0.97-1.78 0.97-2.74
                  0-0.72-0.18-1.44-0.52-1.96-0.43-0.68-1.08-1.17-2.59-1.91-2.11-1.06-2.43-1.22-2.93-1.6-0.56-0.45-0.88-1.06-0.88-1.73
                  0-1.31 0.92-2.16 2.32-2.16 0.38 0 0.97 0.11 1.44 0.25 0.75 0.24 1.14 0.42 1.99 1m31.81
                  15.49h-72v-36h72v36z&quot;/&gt;
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/svg&gt;
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p className=&quot;description&quot;&gt;Simon
                  Fraser University, 2013-2014.&lt;/p&gt;
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div
                  className=&quot;background-image&quot;&gt;&lt;/div&gt;
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&lt;/article&gt;
                  <br />
                  &lt;/a&gt;
                </code>
              </pre>
              <h4>Rendered Element</h4>
              <section id="projects-education">
                <div className="index-grid">
                  <Link href="/work/sfu" className="link" id="sfu">
                    <article className="item">
                      <h3 className="title">First Year Computing Science Representative</h3>
                      <div className="logo">
                        <svg viewBox="0 16 108 40">
                          <path
                            d="m77.07 35.77c-0.56 0.07-0.99 0.09-1.28 0.09s-0.72-0.04-1.3-0.11c0.09 0.86 0.11 1.17 0.13 1.87v2.27l0.02 5.36c0 2.14 0.07 2.59 0.58 3.44 0.32 0.52 0.77 0.99 1.33 1.37 1.06 0.74 2.21 1.01 4.3 1.01 1.96 0 3.17-0.29 4.25-1.06 1.58-1.1 1.91-2.09 1.91-5.74l-0.01-3.52c0-0.29 0.02-1.06 0.04-2.3 0-0.94 0.02-1.62 0.05-1.98 0.02-0.16 0.04-0.38 0.07-0.7-0.52 0.05-0.9 0.09-1.15 0.09s-0.63-0.04-1.12-0.09c0.09 0.79 0.13 1.1 0.16 1.78 0.07 0.9 0.09 1.98 0.09 3.17v3.51c0 2.47-0.07 3.02-0.54 3.71-0.18 0.25-0.49 0.52-0.9 0.76-0.76 0.47-1.6 0.65-2.72 0.65-1.6 0-3.08-0.59-3.65-1.42-0.45-0.68-0.47-0.95-0.5-3.29v-4.59c0-0.25 0.02-0.68 0.04-1.24 0-0.56 0.02-0.92 0.02-1.06 0.05-0.76 0.07-1.1 0.18-1.98m-6.12 2.18c-0.04-0.47-0.07-0.83-0.07-1.08 0-0.32 0.02-0.56 0.11-1.13-0.88 0.11-1.19 0.11-1.71 0.11h-2.3l-2.66-0.02-1.53-0.05c0.09 1.78 0.11 2.5 0.16 3.63v6.16c0 1.62-0.02 2.68-0.04 3.2-0.05 0.45-0.09 1.17-0.18 2.09 0.52-0.04 0.9-0.07 1.17-0.07 0.32 0 0.79 0.02 1.42 0.09-0.16-1.96-0.16-2.3-0.16-5v-1.91h2.37c0.94 0 1.53 0.05 2.95 0.23-0.04-0.47-0.07-0.83-0.07-1.08 0-0.29 0.02-0.56 0.12-1.15-1.22 0.18-1.64 0.2-2.68 0.2h-2.66v-3.58l0.02-0.9h2.41c0.61 0 1.58 0.04 2.39 0.14 0.2 0.04 0.51 0.06 0.94 0.12m-12.74 0.41c0.11-0.49 0.16-0.65 0.31-1.13 0.14-0.38 0.18-0.49 0.41-0.9-0.67-0.25-0.95-0.34-1.46-0.45-0.72-0.16-1.42-0.25-2.16-0.25-1.6 0-2.68 0.38-3.53 1.24-0.76 0.76-1.22 1.85-1.22 2.99 0 1.33 0.49 2.3 1.55 3.04 0.54 0.38 0.97 0.61 2.12 1.13 1.17 0.54 1.51 0.7 2.02 1.06 0.79 0.54 1.17 1.17 1.17 1.91 0 1.53-1.24 2.57-3.04 2.57-0.79 0-1.6-0.18-2.34-0.56-0.52-0.25-0.83-0.47-1.55-1.08-0.18 1.06-0.27 1.37-0.68 2.25 1.06 0.52 1.49 0.65 2.59 0.81 0.56 0.09 1.04 0.13 1.51 0.13 2.03 0 3.53-0.65 4.5-1.91 0.65-0.88 0.97-1.78 0.97-2.74 0-0.72-0.18-1.44-0.52-1.96-0.43-0.68-1.08-1.17-2.59-1.91-2.11-1.06-2.43-1.22-2.93-1.6-0.56-0.45-0.88-1.06-0.88-1.73 0-1.31 0.92-2.16 2.32-2.16 0.38 0 0.97 0.11 1.44 0.25 0.75 0.24 1.14 0.42 1.99 1m31.81 15.49h-72v-36h72v36z"
                            style={{ fill: 'white' }}
                          />
                        </svg>
                      </div>
                      <p className="description">Simon Fraser University, 2013-2014.</p>
                      <div className="background-image" />
                    </article>
                  </Link>
                </div>
              </section>
            </article>
          </section>
        </section>
        <div className="back-to-top">
          <Link href="#">Back to top</Link>
        </div>
        <div className="go-back">
          <Link href="/#my-work">« Go back</Link>
        </div>
      </main>
      <footer id="footer">&nbsp;</footer>
    </>
  )
}
