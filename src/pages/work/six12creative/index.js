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
          « Go back
        </Link>
      </div>

      <section id="work">
        <h1 className="header">SIX12</h1>

        <div className="project">

          <p className="description">
          SIX12 delivers highly customized web-based solutions for well-known brands throughout North America. As a Director, I lead an agency of talented individuals who specialize in a full range of marketing, engineering, and design services. We combine great strategy, design, and technology to pioneer innovative online gamification and loyalty initiatives.
          </p>

          <p className="description">
          By continuously defining behaviour norms, I prioritize a company culture that fosters trust and psychological safety, which are crucial components for innovation and growth. I've led a subculture within my development team that's centered around adopting a senior growth mindset, constantly challenging and empowering them to accelerate their career growth just as I have.
          </p>

          <p className="description">
            <strong>Key Clients:</strong> Big Brother, Bungie, Circle K, Coca-Cola, Couche-Tard, FIFA, GURU, Hershey, Marvel, McDonald's, Mondelēz, Monster Energy, NBA, Nestlé, NFL, NHL, Pepsi, Red Bull, Ubisoft, and Unilever.
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
          « Go back
        </Link>
      </div>
    </main>
    <footer id="footer">&nbsp;</footer>
  </>
}
