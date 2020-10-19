import Link from 'next/link'

export default function () {
  return (
    <>
      <Link href="#content">
        <a class="skip">Skip to content</a>
      </Link>
      <main id="content" class="content">
        <div class="go-back">
          <Link href="/#contact">
            <a>Go back</a>
          </Link>
        </div>
        <p class="description">
          <Link href="/static/MaxProskeResume.pdf">
            <a download>Download resume as a PDF</a>
          </Link>
        </p>

        <section id="resume">
          <h1 id="name">Max Proske</h1>

          <article id="summary" class="section">
            <h2 class="heading">Summary</h2>
            <p class="description">
              Full stack web developer specializing in building end-to-end web applications. Strong background
              developing customer-facing websites in a fast-paced commercial agency setting.
            </p>
          </article>

          <article id="key-skills-profile" class="section">
            <h2 class="heading">Key Skills Profile</h2>
            <h3 class="list-heading">Core Skills Complement:</h3>
            <ul class="list">
              <li class="description">Strong understanding of server-side programming and object-oriented languages</li>
              <li class="description">Skilled at writing concise development documentation and estimates</li>
              <li class="description">Familiar with configuring Linux servers and containerized microservices</li>
              <li class="description">Power user of project management tools</li>
            </ul>
            <h3 class="list-heading">Personal Skills:</h3>
            <ul class="list">
              <li class="description">Self-motivated team player with strong communication and interpersonal skills</li>
              <li class="description">Capable, confident and personable demeanour</li>
              <li class="description">Eager to quickly and continuously learn and grow</li>
            </ul>
          </article>

          <article id="education" class="section">
            <h2 class="heading">Education</h2>
            <div class="resume-grid">
              <div id="siat" class="row">
                <div class="date">2013–2018</div>
                <div class="position">Bachelor of Science in Interactive Systems</div>
                <div class="place">Simon Fraser University</div>
                <div class="location">Burnaby, BC</div>
              </div>
            </div>
          </article>

          <article id="employment" class="section">
            <h2 class="heading">Employment</h2>
            <div class="resume-grid">
              <div id="six12creative" class="job">
                <div class="row">
                  <div class="date">2016-Present</div>
                  <div class="position">
                    <Link href="/work/six12creative/">
                      <a>Full Stack Web Developer</a>
                    </Link>
                  </div>
                  <div class="place">SIX12 Creative</div>
                  <div class="location">New Westminster, BC</div>
                </div>
                <div class="line">
                  <ul class="list">
                    <li class="description">
                      Responsible for building marketing campaign, contest, and e-commerce websites
                    </li>
                    <li class="description">
                      Developed SMS messaging services, REST API endpoints, and automated UI testing
                    </li>
                  </ul>
                </div>
              </div>
              <div id="flashflashrevolution" class="job">
                <div class="row">
                  <div class="date">2012-Present</div>
                  <div class="position">
                    <Link href="/projects/flashflashrevolution">
                      <a>Lead Web and Game Developer</a>
                    </Link>
                  </div>
                  <div class="place">Flash Flash Revolution</div>
                  <div class="location">flashflashrevolution.com</div>
                </div>
                <div class="line">
                  <ul class="list">
                    <li class="description">Running an online game with over 1,000 daily active players</li>
                    <li class="description">
                      Continuously developing site and game features to improve overall user experience
                    </li>
                    <li class="description">
                      Server-side programming, game engine development, and CentOS administration
                    </li>
                  </ul>
                </div>
              </div>
              <div id="ivizlab" class="job">
                <div class="row">
                  <div class="date">2016</div>
                  <div class="position">
                    <Link href="/work/ivizlab">
                      <a>Undergraduate Research Assistant</a>
                    </Link>
                  </div>
                  <div class="place">iVizLab</div>
                  <div class="location">Surrey, BC</div>
                </div>
                <div class="line">
                  <ul class="list">
                    <li class="description">
                      Improved the emotional realism of a deep learning painterly rendering system
                    </li>
                    <li class="description">
                      Designed a web interface which saved a gallery of deep learning model recipes
                    </li>
                  </ul>
                </div>
              </div>
              <div id="sfu" class="job">
                <div class="row">
                  <div class="date">2013-2014</div>
                  <div class="position">
                    <Link href="/work/sfu">
                      <a>First Year Computing Science Representative</a>
                    </Link>
                  </div>
                  <div class="place">Simon Fraser University</div>
                  <div class="location">Burnaby, BC</div>
                </div>
                <div class="line">
                  <ul class="list">
                    <li class="description">
                      Engaged the first year student body and hosted social events throughout the year
                    </li>
                    <li class="description">Represented the interests of computing science majors to council</li>
                  </ul>
                </div>
              </div>
              <div id="young-technology" class="job">
                <div class="row">
                  <div class="date">2008-2011</div>
                  <div class="position">Programming Camp Instructor</div>
                  <div class="place">Young Technology</div>
                  <div class="location">Langley, BC</div>
                </div>
                <div class="line">
                  <ul class="list">
                    <li class="description">
                      Instructed elementary students in game scripting and animation using Adobe Flash
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </article>
        </section>

        <div class="back-to-top">
          <Link href="#">
            <a>Back to top</a>
          </Link>
        </div>
        <div class="go-back">
          <Link href="/#my-work">
            <a>Go back</a>
          </Link>
        </div>
      </main>
      <footer id="footer">&nbsp;</footer>
    </>
  )
}
