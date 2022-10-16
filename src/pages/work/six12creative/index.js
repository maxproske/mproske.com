import Link from 'next/link'
import Image from 'next/image'

export default function SIX12() {
  return (
    <>
      <Link href="#content">
        <a className="skip">Skip to content</a>
      </Link>
      <main id="content" className="content">
        <div className="go-back">
          <Link href="/#my-work">
            <a>Go back</a>
          </Link>
        </div>

        <section id="work">
          <h1 className="header">SIX12 Creative</h1>

          <div className="awards">
            <div className="award">
              <div className="award-icon">
                <Image src="/img/icons/icons8-laurel-wreath-90.png" width="90" height="90" alt="Award" />
              </div>
              <div className="award-description">
                <strong>Top 100</strong>
                <br /> Fastest-Growing Companies in BC <br />
                2022
              </div>
            </div>
            <div className="award">
              <div className="award-icon">
                <Image src="/img/icons/icons8-laurel-wreath-90.png" width="90" height="90" alt="Award" />
              </div>
              <div className="award-description">
                <strong>Top 100</strong>
                <br /> Fastest-Growing Companies in BC <br />
                2021
              </div>
            </div>
            <div className="award">
              <div className="award-icon">
                <Image src="/img/icons/icons8-laurel-wreath-90.png" width="90" height="90" alt="Award" />
              </div>
              <div className="award-description">
                <strong>Top 100</strong>
                <br /> Fastest-Growing Companies in BC <br />
                2020
              </div>
            </div>
            <div className="award">
              <div className="award-icon">
                <Image src="/img/icons/icons8-laurel-wreath-90.png" width="90" height="90" alt="Award" />
              </div>
              <div className="award-description">
                <strong>Top 100</strong>
                <br /> Most Profitable Companies in BC <br />
                2020
              </div>
            </div>
            <div className="award">
              <div className="award-icon">
                <Image src="/img/icons/icons8-laurel-wreath-90.png" width="90" height="90" alt="Award" />
              </div>
              <div className="award-description">
                <strong>Top 100</strong>
                <br /> Fastest-Growing Companies in BC <br />
                2019
              </div>
            </div>
          </div>
          <p className="description">
            In my capacity as Development Team Lead at{' '}
            <Link href="https://six12creative.com">
              <a target="_blank">SIX12 Creative</a>
            </Link>
            , I have led the development of over 80 major gamification projects, aimed at driving foot traffic to brick
            and mortar convenience store locations across North America.
          </p>
          <p className="description">
            I have built promotional websites using static and server-side rendering React frameworks, high volume SMS
            shortcode services, and robust and secure REST APIs.
          </p>
          <p className="description">
            Key clients: Circle K, Couche-Tard, Holiday Stationstores, NFL, NHL, NBA, Pepsi, Coke, Nestle, Unilever,
            GURU Energy, Redbull, Monster Energy, Modelez, Hershey
          </p>

          {/* <article className="project">
            <h2 className="title">Under construction</h2>
          </article> */}
        </section>
      </main>
      <footer id="footer">&nbsp;</footer>
    </>
  )
}
