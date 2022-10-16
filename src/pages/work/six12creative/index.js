import Link from 'next/link'
import Image from 'next/image'
import { Tile } from '../../../components/Tile'

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

          <div className="project">
            <p className="description">
              In my capacity as <strong>Team Lead</strong> and <strong>Full Stack Web Developer</strong>, I have led the
              development and launch of over 80 major projects. Through having hired promising talent and mentored using
              a <em>senior growth mindset</em>, I have quickly produced and retained several top contributors.
            </p>

            <p className="description">
              As a member of the <strong>Senior Leadership Team</strong>, I have been incredibly successful in
              advocating for business decisions backed by emerging technologies, such as SMS shortcodebased reward
              programs, that has influenced the company to reinvent itself and drive extraordinary growth.
            </p>

            <div className="awards">
              <div className="award">
                <div className="award-icon">
                  <Image src="/img/icons/icons8-laurel-wreath-90.png" width="90" height="90" alt="Award" />
                </div>
                <div className="award-description">
                  <strong>
                    Top 100
                    <br /> Fastest-Growing
                  </strong>{' '}
                  Companies in BC <br />
                  <em>2022</em>
                </div>
              </div>
              <div className="award">
                <div className="award-icon">
                  <Image src="/img/icons/icons8-laurel-wreath-90.png" width="90" height="90" alt="Award" />
                </div>
                <div className="award-description">
                  <strong>
                    Top 100
                    <br /> Fastest-Growing
                  </strong>{' '}
                  Companies in BC <br />
                  <em>2021</em>
                </div>
              </div>
              <div className="award">
                <div className="award-icon">
                  <Image src="/img/icons/icons8-laurel-wreath-90.png" width="90" height="90" alt="Award" />
                </div>
                <div className="award-description">
                  <strong>
                    Top 100
                    <br /> Fastest-Growing
                  </strong>{' '}
                  Companies in BC <br />
                  <em>2020</em>
                </div>
              </div>
              <div className="award">
                <div className="award-icon">
                  <Image src="/img/icons/icons8-laurel-wreath-90.png" width="90" height="90" alt="Award" />
                </div>
                <div className="award-description">
                  <strong>
                    Top 100
                    <br /> Most Profitable
                  </strong>{' '}
                  Companies in BC <br />
                  <em>2020</em>
                </div>
              </div>
              <div className="award">
                <div className="award-icon">
                  <Image src="/img/icons/icons8-laurel-wreath-90.png" width="90" height="90" alt="Award" />
                </div>
                <div className="award-description">
                  <strong>
                    Top 100
                    <br /> Fastest-Growing
                  </strong>{' '}
                  Companies in BC <br />
                  <em>2019</em>
                </div>
              </div>
            </div>

            <p className="description">
              <Link href="https://six12creative.com">
                <a target="_blank">SIX12 Creative</a>
              </Link>{' '}
              is a full service agency that primarily serves retail and convenience store chains, including{' '}
              <Link href="https://www.circlek.com">
                <a target="_blank">Circle K</a>
              </Link>{' '}
              and{' '}
              <Link href="https://www.couche-tard.com">
                <a target="_blank">Couche-Tard</a>
              </Link>
              , by driving foot traffic to brick and mortar locations across North America and Europe through web-based
              contests and games.
            </p>

            <p className="description">
              <strong>Key clients:</strong> Coca-Cola, Pepsi, Nestlé, Unilever, Mondelēz, Hershey, Bungie, Ubisoft,
              GURU, Red Bull, Monster Energy, FIFA, NHL, NFL, NBA.
            </p>

            <h2 className="m-0 mt-16 pb-4 pt-8 text-[3.5rem] font-black ">Key Projects</h2>
            <p className="mb-4 text-2xl">Coming Soon...</p>
            <div className="grid auto-rows-[12rem] grid-cols-2 gap-4 text-center">
              <Tile promotionName="Rock Paper Prizes" color="red" />
              <Tile promotionName="Fuel Runner" color="red" />
              <Tile promotionName="31 Days of Circle K" color="red" />
              <Tile promotionName="Drink Snack Score" color="red" />
            </div>
          </div>
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
