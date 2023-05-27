import Link from 'next/link'

export default function Resume() {
  return <>
    <Link href="#content" className="skip">
      Skip to content
    </Link>
    <main id="content" className="content">
      <div className="go-back">
        <Link href="/#contact">
          Go back
        </Link>
      </div>
      <p className="description">
        <Link href="/static/MaxProskeResume.pdf" download>
          Download resume as a PDF
        </Link>
      </p>

      <section id="resume">
        <h1 id="name">Max Proske</h1>

        <article id="summary" className="section">
          <h2 className="heading">Summary</h2>
          <p className="description">
          As a Docker Captain, I am a recognized software industry leader. I lead with a relentless drive to continuously learn and foster growth within my teams. I have successfully steered my company through reinventions every 2 years, transforming our business model from brochure web design to a full-service software agency. As a result, I am a Director of a Top 100 Fastest-Growing and Top 100 Most Profitable business in BC.
          </p>
        </article>

        <article id="key-skills-profile" className="section">
          <h2 className="heading">Key Skills Profile</h2>
          <h3 className="list-heading">Core Skills Complement:</h3>
          <ul className="list">
            <li className="description">
              Strong understanding of hybrid static and server-side rendering frameworks
            </li>
            <li className="description">
              Experienced in configuring Docker microservices, load balancers, and managed databases
            </li>
            <li className="description">Skilled at writing concise documentation and estimates</li>
            <li className="description">
              Fluent translating between developer and business speak, written and verbal
            </li>
            <li className="description">Project management tool power user</li>
          </ul>
          <h3 className="list-heading">Personal Skills:</h3>
          <ul className="list">
            <li className="description">
              Self-motivated team player with strong communication and interpersonal skills
            </li>
            <li className="description">Capable, confident and personable demeanour</li>
            <li className="description">Eager to quickly and continuously learn and grow</li>
          </ul>
        </article>

        <article id="education" className="section">
          <h2 className="heading">Education</h2>
          <div className="resume-grid">
            <div id="siat" className="row">
              <div className="date">2013 – 2018</div>
              <div className="position">Bachelor of Science in Interactive Systems</div>
              <div className="place">Simon Fraser University</div>
              <div className="location">Burnaby, BC</div>
            </div>
          </div>
        </article>

        <article id="employment" className="section">
          <h2 className="heading">Employment</h2>
          <div className="resume-grid">
            <div id="six12creative" className="job">
              <div className="row">
                <div className="date">2021 – Present</div>
                <div className="position">
                  <Link href="/work/six12creative/">
                    Development Team Lead
                  </Link>
                </div>
                <div className="place">SIX12 Creative</div>
                <div className="location">New Westminster, BC</div>
              </div>
              <div className="line">
                <ul className="list">
                  <li className="description">
                    Led the development of over 40 major gamification projects, aimed at driving foot traffic to brick
                    and mortar convenience store locations across North America
                  </li>
                  <li className="description">
                    Onboarded and mentored high-potential developers with extremely low turnover
                  </li>
                </ul>
              </div>
            </div>
            <div id="six12creative" className="job">
              <div className="row">
                <div className="date">2016-2021</div>
                <div className="position">
                  <Link href="/work/six12creative/">
                    Full Stack Web Developer
                  </Link>
                </div>
                <div className="place">SIX12 Creative</div>
                <div className="location">New Westminster, BC</div>
              </div>
              <div className="line">
                <ul className="list">
                  <li className="description">
                    Built robust and secure REST APIs for high volume shortcode services (100,000 SMS/day)
                  </li>
                  <li className="description">
                    Responsible for upholding information security policies, remediated third-party pen testing
                  </li>
                  <li className="description">
                    Championed new frameworks and tools that significantly improved internal workflows
                  </li>
                </ul>
              </div>
            </div>
            <div id="flashflashrevolution" className="job">
              <div className="row">
                <div className="date">2012-Present</div>
                <div className="position">
                  <Link href="/projects/flashflashrevolution">
                    Administrator, Open Source Maintainer
                  </Link>
                </div>
                <div className="place">Flash Flash Revolution</div>
                <div className="location">flashflashrevolution.com</div>
              </div>
              <div className="line">
                <ul className="list">
                  <li className="description">
                    Leadership of an online multiplayer game with 1,000 daily active players
                  </li>
                  <li className="description">
                    Continuously developing site and game features to improve overall user experience
                  </li>
                  <li className="description">
                    Review pull requests and build releases for the open source game engine
                  </li>
                </ul>
              </div>
            </div>
            <div id="ivizlab" className="job">
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
            </div>
          </div>
        </article>
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
  </>;
}
