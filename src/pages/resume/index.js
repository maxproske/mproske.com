import Link from 'next/link'
import { Awards } from 'src/components/Awards'

export default function Resume() {
  return (
    <>
      <Link href="#content" className="skip">
        Skip to content
      </Link>
      <main id="content" className="content">
        <div className="go-back">
          <Link href="/#contact">« Go back</Link>
        </div>
        <p className="description">
          <Link href="/static/MaxProskeResume.pdf" download>
            Download resume as a PDF
          </Link>
        </p>

        <section id="resume">
          <h1 id="name">Max Proske</h1>

          <article id="summary" className="section">
            <h2 className="heading">Professional Statement</h2>
            <p className="description">
              As a{' '}
              <Link href="https://www.docker.com/captains/max-proske" target="_blank">
                Docker Captain
              </Link>{' '}
              with 7+ years of software development experience, I am a recognized technical leader. I have steered my
              company through reinventions every two years, resulting in a dramatic expansion of our scope of services.
              As a result, I am a Director of a full-service software agency that has been listed in the Top 100
              Fastest-Growing Companies in BC for five consecutive years (2019 – 2023).
            </p>
            <Awards />
          </article>

          <article id="employment" className="section">
            <h2 className="heading">Work Experience</h2>
            <div className="resume-grid">
              <div id="six12creative" className="job">
                <div className="row">
                  <div className="date">2023 – Present</div>
                  <div className="position">
                    <Link href="/work/six12creative/">Director, Software Development</Link>
                  </div>
                  <div className="place">SIX12</div>
                  <div className="location">New Westminster, BC</div>
                </div>
                <div className="line">
                  <ul className="list">
                    <li className="description">
                      Pioneered over 100 major customer loyalty programs, less than half on the cookie-cutter side.
                    </li>
                    <li className="description">Grew revenue from $1 million in 2017 to $2.8 million in 2022.</li>
                    <li className="description">
                      Key clients: Circle K, Couche-Tard, Big Brother, Bungie, Coca-Cola, FIFA, GURU, Hershey, Holiday
                      Stationstores, Irving Oil, Marvel, McDonald's, Mondelēz, Monster Energy, NBA, Nestlé, NFL, NHL,
                      Pepsi, Red Bull, Ubisoft, Unilever
                    </li>
                  </ul>
                </div>
                <div className="row">
                  <div className="date">2021 – 2023</div>
                  <div className="position">
                    <Link href="/work/six12creative/">Team Lead, Software Development</Link>
                  </div>
                  <div className="place">SIX12</div>
                  <div className="location">New Westminster, BC</div>
                </div>
                <div className="line">
                  <ul className="list">
                    <li className="description">
                      Shaped a culture of autonomy within my team, by continuously defining behaviour norms.
                    </li>
                    <li className="description">
                      Created robust career development plans aimed at fostering swift internal progression and
                      maintaining high retention rates.
                    </li>
                  </ul>
                </div>
              </div>
              <div id="six12creative" className="job">
                <div className="row">
                  <div className="date">2020 – 2021</div>
                  <div className="position">
                    <Link href="/work/six12creative/">Senior Full Stack Developer</Link>
                  </div>
                  <div className="place">SIX12</div>
                  <div className="location">New Westminster, BC</div>
                </div>
                <div className="line">
                  <ul className="list">
                    <li className="description">
                      Championed new frameworks and tools, significantly widening our scope of services, technological
                      capabilities, and processes, resulting in 240% 5-year revenue growth.
                    </li>
                  </ul>
                </div>
              </div>
              <div id="six12creative" className="job">
                <div className="row">
                  <div className="date">2016 – 2020</div>
                  <div className="position">
                    <Link href="/work/six12creative/">Full Stack Developer</Link>
                  </div>
                  <div className="place">SIX12</div>
                  <div className="location">New Westminster, BC</div>
                </div>
                <div className="line">
                  <ul className="list">
                    <li className="description">
                      Developed a secure, high-volume SMS shortcode service from scratch, now responsible for managing
                      between 100k-1m inbound and outbound messages daily.
                    </li>
                  </ul>
                </div>
              </div>
              {/* <div id="ivizlab" className="job">
              <div className="row">
                <div className="date">2016</div>
                <div className="position">
                  <Link href="/work/ivizlab">
                    Undergraduate Research Assistant
                  </Link>
                </div>
                <div className="place">iVizLab</div>
                <div className="location">Surrey, BC</div>
              </div>
              <div className="line">
                <ul className="list">
                  <li className="description">
                    Improved the emotional realism of a deep learning painterly rendering system
                  </li>
                  <li className="description">
                    Built a web app which saved a database of deep learning models recipes and allowed for backwards
                    compatibility
                  </li>
                </ul>
              </div>
            </div>
            <div id="sfu" className="job">
              <div className="row">
                <div className="date">2013-2014</div>
                <div className="position">
                  <Link href="/work/sfu">
                    First Year Computing Science Representative
                  </Link>
                </div>
                <div className="place">Simon Fraser University</div>
                <div className="location">Burnaby, BC</div>
              </div>
              <div className="line">
                <ul className="list">
                  <li className="description">
                    Engaged the first year student body and hosted social events throughout the year
                  </li>
                  <li className="description">Represented the interests of computing science majors to council</li>
                </ul>
              </div>
            </div>
             */}
              <div id="young-technology" className="job">
                <div className="row">
                  <div className="date">2008 – 2011</div>
                  <div className="position">Programming Camp Instructor</div>
                  <div className="place">Young Technology</div>
                  <div className="location">Langley, BC</div>
                </div>
                <div className="line">
                  <ul className="list">
                    <li className="description">
                      Instructed elementary grade students in game scripting and animation using Adobe Flash and
                      ActionScript 3.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </article>

          <article id="education" className="section">
            <h2 className="heading">Education</h2>
            <div className="resume-grid">
              <div id="siat" className="row">
                <div className="date">2013 – 2018</div>
                <div className="position">B.Sc., Interactive Systems</div>
                <div className="place">Simon Fraser University</div>
                <div className="location">Burnaby, BC</div>
              </div>
            </div>
          </article>

          <article id="volunteering-and-awards" className="section">
            <h2 className="heading">Volunteering & Awards</h2>
            <div className="resume-grid">
              <div id="docker" className="job">
                <div className="row">
                  <div className="date">2023 – Present</div>
                  <div className="position">
                    <Link href="https://www.docker.com/captains/max-proske" target="_blank">
                      Docker Captain
                    </Link>
                  </div>
                  <div className="place">Docker</div>
                  <div className="location">docker.com</div>
                </div>
                <div className="line">
                  <ul className="list">
                    <li className="description">
                      An industry-recognized distinction, awarded to experts who are passionate about sharing their
                      knowledge of containers. Second recipient of this award in Canada.
                    </li>
                    <li className="description">
                      Actively engaged in helping Docker's Product team shape both significant and minor changes.
                    </li>
                  </ul>
                </div>
              </div>
              <div id="flashflashrevolution" className="job">
                <div className="row">
                  <div className="date">2012 – Present</div>
                  <div className="position">
                    <Link href="https://www.flashflashrevolution.com/" target="_blank">
                      Lead Developer
                    </Link>
                  </div>
                  <div className="place">Flash Flash Revolution</div>
                  <div className="location">flashflashrevolution.com</div>
                </div>
                <div className="line">
                  <ul className="list">
                    <li className="description">
                      11+ year leadership of a multiplayer game with 1,000 daily active users. Maintain the open source
                      game engine, and release updates which improve player experience.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </article>

          <article id="key-skills-profile" className="section">
            <h2 className="heading">Skills</h2>
            <h3 className="list-heading"> </h3>
            <ul className="list">
              <li className="description">
                Proven track record of turning visions into detailed plans, and adept at executing within constraints.
              </li>
              <li className="description">
                Fluent in translating between developer and business speak, written and verbal.
              </li>
              <li className="description">Skilled at writing concise documentation and estimates.</li>
              <li className="description">
                Proficient in ensuring the security and information security protocols of applications and
                infrastructure.
              </li>
              <li className="description">
                Capable, confident and personable demeanor, with strong interpersonal skills.{' '}
              </li>
              <li className="description">Eager to continuously learn and grow.</li>
            </ul>
          </article>
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
