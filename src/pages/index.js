import Link from 'next/link'
import Image from 'next/image'
import { Awards } from '../components/Awards'

// Images
import me from '../../public/img/me.jpg'

export default function Home() {
  return (
    <>
      <Link href="#content" className="skip">
        Skip to content
      </Link>
      <main id="content" className="content">
        <section id="intro">
          <h1 className="heading">Max Proske</h1>
          <p className="description">
            {`I'm`} a <Link href="/work/six12creative/">Director, Development</Link> and{' '}
            <Link href="https://www.docker.com/captains/max-proske" target="_blank">
              Docker Captain
            </Link>{' '}
            based in Vancouver, Canada.
          </p>
          {/* <p className="description">
          <Link href="#about">
            Learn more about me or get in touch
          </Link>
          .
        </p> */}
        </section>

        <section id="my-work">
          <h2 className="header">My Work</h2>
          <div className="index-grid">
            <Link href="/work/six12creative/" className="link" id="six12creative">
              <article className="item">
                <h3 className="title">Director, Development</h3>
                <div className="logo">
                  <svg className="mx-auto my-0" viewBox="0 40 500 180" fill="white">
                    <path d="m104.94 200.88c-33.23 0-49.19-12.07-51.24-38.61-0.19-2.41-0.19-5.2 0-7.8l37.13-4.83c-0.37 3.9-0.37 7.8 0.19 11.14 1.49 9.84 5.75 16.34 16.34 16.34 9.84 0 14.67-5.2 14.67-15.41 0-12.99-2.23-17.82-19.12-25.25-4.46-1.11-8.54-3.16-13.18-4.64-24.32-7.61-33.97-18.01-33.97-38.61 0-24.32 15.41-37.5 47.89-37.5 31.56 0 43.63 16.89 46.41 37.31 0.19 1.11 0.37 2.41 0.56 3.71l-33.97 4.83c-0.19-1.49-0.56-10.95-1.11-12.44-1.67-5.2-5.01-10.02-13.18-10.02-9.1 0-13.18 4.64-13.18 12.62 0 9.1 3.34 13.55 18.93 18.56 3.53 1.11 7.61 2.97 10.95 4.27 26.17 9.47 37.5 19.49 37.5 42.51-0.02 28.6-13.2 43.82-51.62 43.82z" />
                    <path d="M168.98,199.96V57.02h32.67v142.94H168.98z" />
                    <path d="m280.37 199.96l-16.15-46.41-17.27 46.41h-34.16l34.34-73.14-33.04-69.8h36.01l15.78 41.95 16.52-41.95h33.23l-32.67 68.5 33.6 74.44h-36.19z" />
                    <path d="m340.58 57.02c-3.63 8.47-11.89 16.08-22.98 20.61v16.82c6.31-1.71 15.19-5.7 17.63-9.84v81.98h24.65v-109.57h-19.3z" />
                    <path d="m438.18 115.55c6.8-6.91 9.25-15.8 9.25-28.63 0-20.35-13.33-31.38-37.26-31.38-20.92 0-35.11 8.74-36.83 32.96-0.29 3.58 0.14 7.16 0.57 11.18l25.79-4.01c-0.14-4.01-0.43-6.59-0.14-9.17 0.72-9.31 4.58-11.46 11.18-11.46 6.02 0 9.74 2.44 9.74 12.75 0 12.32-2.29 15.33-18.06 27.23-19.49 14.62-29.23 27.66-29.38 51.59h73.65v-19.92h-40.09c2.64-15.08 24.34-22.7 31.58-31.14z" />
                    <rect x="335.05" y="178.57" width="111.67" height="21.34" />
                  </svg>
                </div>
                <p className="description">SIX12, 2016 – Present</p>
                <div className="background-image" />
              </article>
            </Link>
          </div>

          <Awards />
        </section>

        <section id="about">
          <h1 className="header">About Me</h1>
          <figure className="portrait">
            <Image src={me} width={550} height={550} alt="Me" placeholder="blur" />
            <figcaption>{`Hi, I'm Max!`}</figcaption>
          </figure>
          <p className="description">
            I graduated from{' '}
            <Link href="https://www.sfu.ca" target="_blank">
              Simon Fraser University
            </Link>{' '}
            with a Bachelor of Science in Interactive Systems.
          </p>
          <p className="description">
            My hobbies are mainly centered around playing In The Groove and creating personal Google Sheets.
          </p>
        </section>

        <section id="contact">
          <h2 className="header">Contact</h2>
          <p className="description">
            <Link href="mailto:max@mproske.com">max@mproske.com</Link>
          </p>
          <p className="description">{`I'd love to chat about job opportunities or projects I’ve worked on.`}</p>
          <p className="description">
            For more information, please <Link href="/resume">view my resume</Link>. {`I'm also active on`}{' '}
            <Link href="https://github.com/maxproske" target="_blank">
              GitHub
            </Link>{' '}
            and{' '}
            <Link href="https://www.linkedin.com/in/maxproske" target="_blank">
              LinkedIn
            </Link>
            .
          </p>
        </section>

        {/* <section id="projects-education">
        <h2 className="header">Projects & Education</h2>
        <div className="index-grid">
          <Link href="/projects/flashflashrevolution">
            <a className="link" id="flashflashrevolution">
              <article className="item">
                <h3 className="title">Back-End Developer</h3>
                <div className="logo">
                  <img className="my-0 mx-auto" src="img/ffr-logo.png" alt="Flash Flash Revolution" />
                </div>
                <p className="description">Flash Flash Revolution, 2012 – Present</p>
                <div className="background-image" />
              </article>
            </a>
          </Link>

          <Link href="/work/sfu">
            <a className="link" id="sfu">
              <article className="item">
                <h3 className="title">First Year Computing Science Representative</h3>
                <div className="logo">
                  <svg className="my-0 mx-auto" viewBox="0 16 108 40" fill="white">
                    <path d="m77.07 35.77c-0.56 0.07-0.99 0.09-1.28 0.09s-0.72-0.04-1.3-0.11c0.09 0.86 0.11 1.17 0.13 1.87v2.27l0.02 5.36c0 2.14 0.07 2.59 0.58 3.44 0.32 0.52 0.77 0.99 1.33 1.37 1.06 0.74 2.21 1.01 4.3 1.01 1.96 0 3.17-0.29 4.25-1.06 1.58-1.1 1.91-2.09 1.91-5.74l-0.01-3.52c0-0.29 0.02-1.06 0.04-2.3 0-0.94 0.02-1.62 0.05-1.98 0.02-0.16 0.04-0.38 0.07-0.7-0.52 0.05-0.9 0.09-1.15 0.09s-0.63-0.04-1.12-0.09c0.09 0.79 0.13 1.1 0.16 1.78 0.07 0.9 0.09 1.98 0.09 3.17v3.51c0 2.47-0.07 3.02-0.54 3.71-0.18 0.25-0.49 0.52-0.9 0.76-0.76 0.47-1.6 0.65-2.72 0.65-1.6 0-3.08-0.59-3.65-1.42-0.45-0.68-0.47-0.95-0.5-3.29v-4.59c0-0.25 0.02-0.68 0.04-1.24 0-0.56 0.02-0.92 0.02-1.06 0.05-0.76 0.07-1.1 0.18-1.98m-6.12 2.18c-0.04-0.47-0.07-0.83-0.07-1.08 0-0.32 0.02-0.56 0.11-1.13-0.88 0.11-1.19 0.11-1.71 0.11h-2.3l-2.66-0.02-1.53-0.05c0.09 1.78 0.11 2.5 0.16 3.63v6.16c0 1.62-0.02 2.68-0.04 3.2-0.05 0.45-0.09 1.17-0.18 2.09 0.52-0.04 0.9-0.07 1.17-0.07 0.32 0 0.79 0.02 1.42 0.09-0.16-1.96-0.16-2.3-0.16-5v-1.91h2.37c0.94 0 1.53 0.05 2.95 0.23-0.04-0.47-0.07-0.83-0.07-1.08 0-0.29 0.02-0.56 0.12-1.15-1.22 0.18-1.64 0.2-2.68 0.2h-2.66v-3.58l0.02-0.9h2.41c0.61 0 1.58 0.04 2.39 0.14 0.2 0.04 0.51 0.06 0.94 0.12m-12.74 0.41c0.11-0.49 0.16-0.65 0.31-1.13 0.14-0.38 0.18-0.49 0.41-0.9-0.67-0.25-0.95-0.34-1.46-0.45-0.72-0.16-1.42-0.25-2.16-0.25-1.6 0-2.68 0.38-3.53 1.24-0.76 0.76-1.22 1.85-1.22 2.99 0 1.33 0.49 2.3 1.55 3.04 0.54 0.38 0.97 0.61 2.12 1.13 1.17 0.54 1.51 0.7 2.02 1.06 0.79 0.54 1.17 1.17 1.17 1.91 0 1.53-1.24 2.57-3.04 2.57-0.79 0-1.6-0.18-2.34-0.56-0.52-0.25-0.83-0.47-1.55-1.08-0.18 1.06-0.27 1.37-0.68 2.25 1.06 0.52 1.49 0.65 2.59 0.81 0.56 0.09 1.04 0.13 1.51 0.13 2.03 0 3.53-0.65 4.5-1.91 0.65-0.88 0.97-1.78 0.97-2.74 0-0.72-0.18-1.44-0.52-1.96-0.43-0.68-1.08-1.17-2.59-1.91-2.11-1.06-2.43-1.22-2.93-1.6-0.56-0.45-0.88-1.06-0.88-1.73 0-1.31 0.92-2.16 2.32-2.16 0.38 0 0.97 0.11 1.44 0.25 0.75 0.24 1.14 0.42 1.99 1m31.81 15.49h-72v-36h72v36z" />
                  </svg>
                </div>
                <p className="description">Simon Fraser University, 2013 – 2014</p>
                <div className="background-image" />
              </article>
            </a>
          </Link>

          <Link href="/work/ivizlab">
            <a className="link" id="ivizlab">
              <article className="item">
                <h3 className="title">Undergraduate Research Assistant</h3>
                <div className="logo">
                  <img className="my-0 mx-auto" src="img/ivizlab-logo.png" alt="iVizLab" />
                </div>
                <p className="description">iVizLab, 2016</p>
                <div className="background-image" />
              </article>
            </a>
          </Link>
        </div>
      </section> */}

        <div className="back-to-top">
          <Link href="#">Back to top</Link>
        </div>
      </main>
      <footer id="footer">&nbsp;</footer>
    </>
  )
}
