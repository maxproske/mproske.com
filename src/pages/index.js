import Link from 'next/link'
import Image from 'next/image'
import { Awards } from '../components/Awards'
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
            {`I'm`} a <Link href="/work/six12creative/">Director of Software Engineering</Link> and{' '}
            <Link href="https://www.docker.com/captains/max-proske" target="_blank">
              Docker Captain
            </Link>{' '}
            based in Vancouver, Canada.
          </p>
        </section>

        <section id="my-work">
          <h2 className="header">My Work</h2>
          <Awards />
          <div className="index-grid">
            <Link href="/work/six12creative/" className="link" id="six12creative">
              <article className="item">
                <h3 className="title">Director of Software Engineering</h3>
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
        </section>

        <section id="about">
          <h1 className="header">About Me</h1>
          <figure className="portrait">
            <Image src={me} width={550} height={550} alt="Me" placeholder="blur" />
            <figcaption>{`Hi, I'm Max!`}</figcaption>
          </figure>
          <p className="description">
            {`I've`} spent 10+ years building secure web apps for millions of users, and 5+ years leading
            high-performing engineering teams. Player-coach at heart, passionate about driving dramatic growth within
            myself and my team 1% every day.
          </p>
          <p className="description">
            My hobbies are mainly centered around playing{' '}
            <Link href="https://www.youtube.com/watch?v=aZuBCUQjUj8" target="_blank">
              In The Groove
            </Link>{' '}
            and creating personal Google Sheets.
          </p>
          <p className="description">
            For more information, please <Link href="/resume">view my resume</Link>.
          </p>
        </section>

        <section id="contact">
          <h2 className="header">Contact</h2>
          <p className="description">
            <Link href="mailto:max@mproske.com">max@mproske.com</Link>
          </p>
          <p className="description">{`I'd love to chat about job opportunities or projects I’ve worked on.`}</p>
          <p className="description">
            {`I'm also active on`}{' '}
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

        <div className="back-to-top">
          <Link href="#">Back to top</Link>
        </div>
      </main>
      <footer id="footer">&nbsp;</footer>
    </>
  )
}
