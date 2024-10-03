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
          <Link href="/static/PROSKE-Resume-2024_r8.pdf" download>
            Download resume as a PDF
          </Link>
        </p>

        <section id="resume">
          <h1 id="name">Max Proske</h1>

          <article id="summary" className="section">
            <h2 className="heading">Professional Statement</h2>
            <p className="description">
              Highly technical and service-oriented leader, with 8 years of diverse experience building web-based
              applications at scale. Have led teams through 3x business growth periods, by excelling at change
              management, talent retention, and driving dramatic growth within myself and my team. Seeking a Software
              Manager role to continue growing at a global, transformative, high growth company.
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
                    <Link href="/work/six12creative/">Director, Software Engineering</Link>
                  </div>
                  <div className="place">SIX12</div>
                  <div className="location">New Westminster, BC</div>
                </div>
                <div className="line">
                  <ul className="list">
                    <li className="description">
                      Achieved operational autonomy within my distributed team, by establishing a strong culture of
                      ownership, through leading by example and setting clear proactivity norms. Team size: 7.
                    </li>
                    <li className="description">
                      Enabled the execution of over 20 projects simultaneously, without sacrificing quality, through
                      building effective cross-functional structures, and meticulously optimizing each project phase.
                    </li>
                    <li className="description">
                      Ranked Top 20 Fastest-Growing Company in BC, by enabling the CEO to focus on business growth and
                      external challenges, through taking responsibility for internal and technical strategy.
                    </li>
                  </ul>
                </div>
                <div className="row">
                  <div className="date">2021 – 2023</div>
                  <div className="position">
                    <Link href="/work/six12creative/">Manager, Software Engineering</Link>
                  </div>
                  <div className="place">SIX12</div>
                  <div className="location">New Westminster, BC</div>
                </div>
                <div className="line">
                  <ul className="list">
                    <li className="description">
                      Hired and mentored 3 engineers to senior roles, by creating personalized career plans aimed at
                      rapid internal progression through regular 1-on-1s and targeted assignments. Team size: 4.
                    </li>
                    <li className="description">
                      Delivered a key project in less than six weeks that kick-started a long-term relationship, drove
                      market competitiveness, and resulted in 240% revenue growth from $1M to $3.4M ARR.
                    </li>
                    <li className="description">
                      Established and matured processes in hiring, QA, performance reviews, and operational readiness
                      for safely launching new products and features.
                    </li>
                    <li className="description">
                      Introduced an incident response plan as Information Security Lead, matured postmortem processes,
                      and established cloud redundancy to ensure business continuity during outages.
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
                      Kept infrastructure cost under 1% of revenue, by carefully monitoring and designing lean services.
                    </li>
                    <li className="description">
                      Increased project delivery speed by 98% and eliminated siloing, by migrating all products from
                      PHP/JavaScript to a unified, cloud-native TypeScript stack on managed DigitalOcean services.
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
                      Led the development of a high-volume SMS shortcode API crucial for customer engagement; managing
                      100K-1M daily text messages, and achieved near 100% uptime over 8 years.
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
              {/* <div id="young-technology" className="job">
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
              </div> */}
            </div>
          </article>

          <article id="education" className="section">
            <h2 className="heading">Education</h2>
            <div className="resume-grid">
              <div id="siat" className="row">
                <div className="date">2018</div>
                <div className="position">B.Sc. Interactive Systems</div>
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
                      Awarded for community expertise in containerization and conference speaking; 2nd recipient in
                      Canada. Actively helping Docker Product teams shape products prior to general availability.
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
                      Leading an open sourced a long-term, multiplayer game project with 1K daily active players.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </article>

          <article id="key-skills-profile" className="section">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div>
                <h3 className="heading">Leadership Skills</h3>
                <br />
                <ul className="list">
                  <li className="description">Talent retention, Performance coaching</li>
                  <li className="description">Process building and optimization</li>
                  <li className="description">Scaling Product-Design-Engineering triads</li>
                  <li className="description">
                    Turning technical visions into detailed plans using Agile and Waterfall methodologies
                  </li>
                  <li className="description">
                    Capable, confident and personable demeanor, with strong interpersonal skills
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="heading">Engineering Skills</h3>
                <br />
                <ul className="list">
                  <li className="description">TypeScript, JavaScript, React, Next.js, Node.js, PHP, Golang</li>
                  <li className="description">Docker, Compose, Kubernetes</li>
                  <li className="description">DevOps best practices, GitHub Actions</li>
                  <li className="description">Postgres, MySQL, Redis</li>
                  <li className="description">Code review, Tech debt management</li>
                  <li className="description">Cloud & Web Application Security</li>
                </ul>
              </div>
            </div>
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
