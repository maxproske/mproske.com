import Link from 'next/link'

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
              </Link>
              , I am a recognized software industry leader. I lead with a relentless drive to continuously learn and
              foster growth within my teams. I have successfully steered my company through reinventions every 2 years,
              transforming our business model from brochure web design to a full-service software agency. As a result, I
              am a Director of a Top 100 Fastest-Growing and Top 100 Most Profitable business in BC.
            </p>
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
                  <div className="place">SIX12 Creative</div>
                  <div className="location">New Westminster, BC</div>
                </div>
                <div className="line">
                  <ul className="list">
                    <li className="description">
                      Pioneered innovative online gamification and loyalty programs as the director of a diverse team of
                      marketing, engineering, and design specialists.
                    </li>
                    <li className="description">
                      Successfully executed over 100 major initiatives, less than half on the cookie-cutter side.
                    </li>
                  </ul>
                </div>
                <div className="row">
                  <div className="date">2021 – 2023</div>
                  <div className="position">
                    <Link href="/work/six12creative/">Team Lead, Software Engineering</Link>
                  </div>
                  <div className="place">SIX12 Creative</div>
                  <div className="location">New Westminster, BC</div>
                </div>
                <div className="line">
                  <ul className="list">
                    <li className="description">
                      Shaped a culture of psychological safety and autonomy within my team, by continuously defining
                      behavior norms.
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
                  <div className="date">2016 – 2021</div>
                  <div className="position">
                    <Link href="/work/six12creative/">Full Stack Web Developer</Link>
                  </div>
                  <div className="place">SIX12 Creative</div>
                  <div className="location">New Westminster, BC</div>
                </div>
                <div className="line">
                  <ul className="list">
                    <li className="description">
                      Championed new frameworks and tools, significantly widening our scope of services, technological
                      capabilities, and processes, resulting in 240% 5-year revenue growth.
                    </li>
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
            <div id="young-technology" className="job">
              <div className="row">
                <div className="date">2008-2011</div>
                <div className="position">Programming Camp Instructor</div>
                <div className="place">Young Technology</div>
                <div className="location">Langley, BC</div>
              </div>
              <div className="line">
                <ul className="list">
                  <li className="description">
                    Instructed elementary students in game scripting and animation using Adobe Flash
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
                  </ul>
                </div>
              </div>
              <div id="flashflashrevolution" className="job">
                <div className="row">
                  <div className="date">2012 – Present</div>
                  <div className="position">
                    <Link href="/projects/flashflashrevolution">Open Source Maintainer</Link>
                  </div>
                  <div className="place">Flash Flash Revolution</div>
                  <div className="location">flashflashrevolution.com</div>
                </div>
                <div className="line">
                  <ul className="list">
                    <li className="description">
                      10+ year leadership of a multiplayer game with 1,000 daily active users. Maintain the open source
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
              <li className="description">Skilled at writing concise documentation and estimates</li>
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
