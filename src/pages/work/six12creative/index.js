import Link from 'next/link'
import Image from 'next/image'
import { Tile } from '../../../components/Tile'
import { Awards } from '../../../components/Awards'

export default function SIX12() {
  return <>
    <Link href="#content" className="skip">
      Skip to content
    </Link>
    <main id="content" className="content">
      <div className="go-back">
        <Link href="/#my-work">
          Go back
        </Link>
      </div>

      <section id="work">
        <h1 className="header">SIX12</h1>

        <div className="project">
          <p className="description">
            In my capacity as <strong>Team Lead</strong> and <strong>Full Stack Web Developer</strong>, I have led the
            development of over 80 major projects from start to finish. Through having hired promising talent and
            mentored using a <em>senior growth mindset</em>, I have quickly produced and retained top contributors.
          </p>

          <p className="description">
            As a member of the <strong>Senior Leadership Team</strong>, I have advocated for business decisions backed
            by emerging web technologies, such as SMS shortcode messaging reward programs. These decisions have
            influenced the company to reinvent itself and drive extraordinary growth.
          </p>

          {/* <Awards /> */}
        

          <p className="description">
            <Link href="https://six12creative.com" target="_blank">
              SIX12
            </Link>{' '}
            is a full service agency that primarily serves retail and convenience store chains, including{' '}
            <Link href="https://www.circlek.com" target="_blank">
              Circle K
            </Link>{' '}
            and{' '}
            <Link href="https://www.couche-tard.com" target="_blank">
              Couche-Tard
            </Link>
            , by driving foot traffic to brick and mortar locations across North America and Europe through web-based
            contests and games.
          </p>

          <p className="description">
            <strong>Vendors:</strong> Coca-Cola, Pepsi, Nestlé, Unilever, Mondelēz, Hershey, Bungie, Ubisoft, GURU,
            Red Bull, Monster Energy, FIFA, NHL, NFL, NBA.
          </p>

          <h2 className="m-0 mt-16 pb-4 pt-8 text-5xl font-black" id="projects">
            Key Projects
          </h2>

          <div className="grid grid-cols-3 gap-4 text-center">
            <Tile
              promotionName=""
              imgSrc={`/img/six12/circlekgames-RPP6B-contest-open.png`}
              technologies={[]}
              href="/work/six12creative/rock-paper-prizes"
            />
            <Tile
              promotionName=""
              imgSrc={`/img/six12/fc_EN-FuelRunner-ckgames-open.png`}
              technologies={[]}
              href="/work/six12creative/fuel-runner"
            />
            <Tile
              promotionName=""
              imgSrc={`/img/six12/circlekgames-31dock-open.png`}
              technologies={[]}
              href="/work/six12creative/31-days"
            />
            {/* <Tile
              promotionName=""
              imgSrc={`/img/six12/DSS2-circlekgames-open.png`}
              technologies={[]}
              href="/work/six12creative/drink-snack-score"
            /> */}
          </div>
        </div>
      </section>

      <div className="back-to-top">
        <Link href="#">
          Back to top
        </Link>
      </div>
      <div className="go-back">
        <Link href="/#my-work">
          Go back
        </Link>
      </div>
    </main>
    <footer id="footer">&nbsp;</footer>
  </>
}
