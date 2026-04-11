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
          <Link href="/static/PROSKE-Resume-2026.pdf" download>
            Download resume as a PDF
          </Link>
        </p>

        <section id="resume">
          <h1 id="name">Max Proske</h1>

          <article id="summary" className="section">
            <h2 className="heading">Professional Statement</h2>
            <p className="description">
              Hands-on engineering leader and Docker Captain with 10+ years of experience scaling secure web apps for
              millions of users, and 5+ years building high-performing teams. Player-coach, passionate about driving
              dramatic growth within myself and my team 1% every day. Seeking an EM role to continue growing at a
              customer-obsessed, multi-product company.
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
                    <Link href="/work/six12creative/">Director of Software Engineering</Link>
                  </div>
                  <div className="place">SIX12</div>
                  <div className="location">New Westminster, BC</div>
                </div>
                <div className="line">
                  <ul className="list">
                    <li className="description">
                      Delivered a 2.0 loyalty platform from concept to 5 million users, securing a long-term partnership
                      with a Fortune 500 company, boosting ARR 240% from $1M to $3.4M.
                    </li>
                    <li className="description">
                      Eliminated 8 hours of manual work per week for 3 non-engineering staff by spearheading the
                      practice of reusable, Claude-driven workflows, through tailored 1:1 enablement sessions.
                    </li>
                    <li className="description">
                      Achieved operational autonomy within my fully remote team by establishing a culture of ownership,
                      through setting clear innovation and AI proactivity norms. Team size: 4 SDEs, 2 PMs.
                    </li>
                    <li className="description">
                      Enabled 15 concurrent project deliveries with zero incidents, through optimizing each
                      cross-functional phase of the software development life cycle.
                    </li>
                    <li className="description">
                      Ranked Top 20 Fastest-Growing companies in BC, by enabling the CEO to focus on business
                      development, through taking responsibility for all technical strategy. 2 new clients signed.
                    </li>
                  </ul>
                </div>
                <div className="row">
                  <div className="date">2021 – 2023</div>
                  <div className="position">
                    <Link href="/work/six12creative/">Software Engineering Manager</Link>
                  </div>
                  <div className="place">SIX12</div>
                  <div className="location">New Westminster, BC</div>
                </div>
                <div className="line">
                  <ul className="list">
                    <li className="description">
                      Hired and mentored 3 engineers from junior to senior roles with 0% attrition, by creating
                      personalized career plans aimed at rapid ownership progression and trust. Team size: 3 SDEs.
                    </li>
                    <li className="description">
                      Cut engineer onboarding by 6 weeks, through a streamlined security bootcamp and local-stack setup,
                      and enabled new hires to ship their first PR within 2 days.
                    </li>
                    <li className="description">
                      Designed and implemented incident response plan and multi-cloud redundancy to reduce operational
                      risk and ensure business continuity.
                    </li>
                  </ul>
                </div>
              </div>
              <div id="six12creative" className="job">
                <div className="row">
                  <div className="date">2020 – 2021</div>
                  <div className="position">
                    <Link href="/work/six12creative/">Senior Full Stack Engineer</Link>
                  </div>
                  <div className="place">SIX12</div>
                  <div className="location">New Westminster, BC</div>
                </div>
                <div className="line">
                  <ul className="list">
                    <li className="description">
                      Kept infrastructure costs below 1% of revenue while supporting 174% user growth YoY, by
                      establishing a competitive culture of lean service design and cloud resource monitoring.
                    </li>
                    <li className="description">
                      Accelerated project delivery by 2x through migrating all products from legacy PHP/JS to a unified
                      Next.js TypeScript stack with feature flags on managed cloud services.
                    </li>
                  </ul>
                </div>
              </div>
              <div id="six12creative" className="job">
                <div className="row">
                  <div className="date">2016 – 2020</div>
                  <div className="position">
                    <Link href="/work/six12creative/">Full Stack Engineer</Link>
                  </div>
                  <div className="place">SIX12</div>
                  <div className="location">New Westminster, BC</div>
                </div>
                <div className="line">
                  <ul className="list">
                    <li className="description">
                      Architected and built a high-throughput, resilient SMS API into a core monetization channel,
                      processing 100 million+ text messages with 99.995% availability over 10 years.
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
                      2nd recipient in Canada. Advise Docker product teams pre-GA. Conference speaker.
                    </li>
                  </ul>
                </div>
              </div>
              <div id="flashflashrevolution" className="job">
                <div className="row">
                  <div className="date">2012 – Present</div>
                  <div className="position">
                    <Link href="https://www.flashflashrevolution.com/" target="_blank">
                      Lead Maintainer
                    </Link>
                  </div>
                  <div className="place">Flash Flash Revolution</div>
                  <div className="location">flashflashrevolution.com</div>
                </div>
                <div className="line">
                  <ul className="list">
                    <li className="description">Longest running online rhythm game (2M users since 2002).</li>
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
                  <li className="description">Driving process change & org-wide adoption</li>
                  <li className="description">Talent retention & performance coaching</li>
                  <li className="description">Scaling Product-Design-Engineering triads</li>
                  <li className="description">
                    Turning technical visions into workback schedules using agile & waterfall
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
                  <li className="description">
                    <strong>Languages:</strong> TypeScript, React/Next.js, Go, PHP
                  </li>
                  <li className="description">
                    <strong>DevOps:</strong> Docker, Kubernetes, AWS (EKS, Lambda, RDS), DigitalOcean, CI/CD with GitHub
                    Actions, OpenTelemetry, Terraform
                  </li>
                  <li className="description">
                    <strong>Databases:</strong> Postgres, MySQL, MongoDB, Redis
                  </li>
                  <li className="description">
                    <strong>Security:</strong> Audits, cloud, web app, pen testing
                  </li>
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
