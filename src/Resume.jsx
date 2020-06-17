import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

function Resume(props) {
  let pageClass = props.path;
  pageClass = pageClass.replace('/', '');

  return (
      <div id="page" className={`normal-text ${pageClass}`}>
        <div className="col-container">
          <div className="header1">
            <span className="title">
              Yuri Mataev
            </span>
          </div>

          <div className="header2">
            <div>yuri@mataev.com</div>
            <div>(607) 287-1942</div>
          </div>

          <div className="header3">
            <div>Norwich, NY 13815</div>
            <div>www.github.com/yurimataev</div>
          </div>
        </div>

        <TransitionGroup className="intro-transition-group">
          <CSSTransition
            timeout={{ enter: 400, exit: 400 }}
            classNames="TransitionPage"
            key={props.introMode}
          >
            <Intro mode={props.introMode} role={props.role} />
          </CSSTransition>
        </TransitionGroup>

        <div className="col-container">
          <div className="left">
            <h1>Professional Experience</h1>
            <div className="job_heading">
              <h2>
                <span className="bold">Knitting Patterns Galore</span>
                {' '}
                &mdash;
                {' '}
                <span className="italic">Full Stack Developer, Remote</span>
              </h2>
              <h3>September 2018 - Present</h3>
            </div>
            <ul>
              <li>
                Increased website performance by 60% by leading an initiative to refactor a legacy codebase into a modern development stack.
              </li>
              <li>
                Collaborated closely with the content team to streamline their workflow and increase efficiency, ultimately resulting in an 80% reduction in time devoted to routine tasks.
              </li>
            </ul>
            <div className="job_heading">
              <h2>
                <span className="bold">Russian Doska Network</span>
                {' '}
                &mdash;
                <span className="italic">Full Stack Developer, Remote</span>
              </h2>
              <h3>
                November 2011 - August 2018
              </h3>
            </div>
            <ul>
              <li>
                Accelerated company's rise to dominance (5-6x greater traffic than nearest competitor) by refactoring software to modern coding and application design standards, with a particular focus on mobile compatibility.
              </li>
              <li>
                Organized the transition to a CI / CD development approach, reducing the time between feature roll-outs 75%.
              </li>
              <li>
                Reduced response time by 50% and increased customer satisfaction by engineering and deploying a mobile alerting system for incidents.
              </li>
            </ul>
            <div className="job_heading">
              <h2>
                <span className="bold">Advanced Embroidery Designs</span>
                {' '}
                &mdash;
                <span className="italic">PHP Developer &amp; Server Admin</span>
              </h2>
              <h3>
                May 2005 - November 2011
              </h3>
            </div>
            <ul>
              <li>
                Pro-actively revised old code, developed new features and facilitated 99.5%+ up-time for all services.
              </li>
              <li>
                Trained non-technical co-workers in SEO and web marketing best practices.
              </li>
              <li>
                Delivered a 30% increase in revenue, thanks to increased web traffic, conversion rates and customer satisfaction.
              </li>
            </ul>
            <div className="job_heading">
              <h2>
                <span className="bold">Ariana RPG (voin.net)</span>
                {' '}
                &mdash;
                <span className="italic">PHP Developer, Remote</span>
              </h2>
              <h3>
                April 2003 - May 2005
              </h3>
            </div>
            <ul>
              <li>
                Delivered the codebase that enabled the start-up's growth from launch to an active user base of 15,000 players, as part of a distributed engineering team.
              </li>
              <li>
                Collaborated closely with customer support, marketing and content teams in an Agile-like development approach, to plan, implement, test and deploy new features on a weekly to bi-weekly basis.
              </li>
            </ul>
            <div className="job_heading">
              <h2>
                <span className="bold">Freelance Work</span>
                {' '}
                &mdash;
                <span className="italic">Full Stack Developer &amp; Technology Consultant</span>
              </h2>
              <h3>
                2003 - 2019
              </h3>
            </div>
            <ul>
              <li>
                Guided small businesses and individuals seeking to create or improve their web presence.
              </li>
              <li>
                Juggled competing priorities (budget vs time, marketing vs technical, etc) to deliver best value.
              </li>
              <li>
                Mastered and applied new technical skills regularly, and on tight deadlines.
              </li>
            </ul>

            {/* <h1>Personal Projects</h1>
        <div className="col-container">
          <div className="col1 bold">
            Developer Blog
          </div>
          <div className="col2">
            React, Jekyll, Ruby
          </div>
          <div className="col3">
            https://www.mataev.com
          </div>
        </div>
        <div className="col-container">
          <div className="col1 bold">
            CI / CD Proof-of-Concept
          </div>
          <div className="col2 reduced-text">
            Docker, PHP / Laravel, Plesk
          </div>
          <div className="col3 reduced-text">
            https://github.com/yurimataev/laravel-docker-cicd
          </div>
        </div>
        <div className="col-container">
          <div className="col1 bold">
            This Resume
          </div>
          <div className="col2 reduced-text">
            HTML, React, SCSS
          </div>
          <div className="col3 reduced-text">
            https://github.com/yurimataev/resume
          </div>
        </div> */}

            <div className="right">
              <h1>Skills</h1>
              <h2>
                <span className="bold">Languages &amp; Frameworks</span>
              </h2>
              <ul>
                <li>
                  PHP (
                  <span className="italic">Laravel, Wordpress</span>
                  )
                </li>
                <li>
                  JavaScript (
                  <span className="italic">React, Angular, Vue, NodeJS</span>
                  )
                </li>
                <li>Python</li>
                <li>
                  Ruby (
                  <span className="italic">Rails, Jekyll</span>
                  )
                </li>
                <li>Java</li>
                <li>HTML5 / CSS3</li>
                <li>SASS, SCSS</li>
                <li>
                  SQL (
                  <span className="italic">MySQL, PostgreSQL</span>
                  )
                </li>
                <li>Perl</li>
                <li>Bash</li>
                <li>PowerShell</li>
                <li>Markdown</li>
              </ul>
              <h2>
                <span className="bold">Infrastructure &amp; Tools</span>
              </h2>
              <ul>
                <li>Git</li>
                <li>GitHub Actions</li>
                <li>GitLab CI</li>
                <li>Docker</li>
                <li>Vagrant</li>
                <li>Selenium</li>
                <li>Apache</li>
                <li>nginx</li>
                <li>
                  Linux (
                  <span className="italic">RHEL, Ubuntu Server</span>
                  )
                </li>
              </ul>
              <h2 className="hide-trad-disabled">
                <span className="bold">Concepts & Principles</span>
              </h2>
              <ul className="hide-trad-disabled">
                <li>DevOps</li>
                <li>CI / CD</li>
                <li>Microservice Architecture</li>
                <li>RESTful API</li>
                <li>Agile Methodologies</li>
              </ul>
              <h2 className="hide-trad">
                <span className="bold">Natural Languages</span>
              </h2>
              <ul className="hide-trad">
                <li>
                  English (
                  <span className="italic">native/bilingual</span>
                  )
                </li>
                <li>
                  Russian (
                  <span className="italic">native/bilingual</span>
                  )
                </li>
                <li>
                  French (
                  <span className="italic">advanced</span>
                  )
                </li>
                <li>
                  German (
                  <span className="italic">intermediate</span>
                  )
                </li>
              </ul>
            </div>

            <h1>Education</h1>
            <h2>
              <span className="bold">Hartwick College, Oneonta, NY</span>
              {' '}
              &mdash;
              <span className="italic nobr">Bachelor of Arts (Biology)</span>
            </h2>

            <h1 className="hide-twocol">Personal Interests</h1>
            <p className="hide-twocol">
              Brazilian Jiu Jitsu. Physical and mental aspects of athletic performance. Coaching.
              <br />
              Sci fi and fantasy literature. Biology. History and archaeology. Gaming.
            </p>

          </div>

        </div>

      </div>
  );
}

function Intro (props){
  if (props.mode === 'objective'){
    return (
      <div>
        <p className="outdent">
          <span className="bold">Objective:</span>
      &nbsp;To apply the technical and soft skills accumulated over 17 years as a full stack web developer, Linux server administrator and open source contributor, in pivoting to a {props.role} career.
        </p>
      </div>
    );
  } else {
    return (
      <div>
        <p className="outdent">
          <span className="bold">Summary:</span>
          &nbsp;Full stack web developer, Linux server administrator and open source contributor, with a wide range of technical and soft skills accumulated over a 17-year-long career.
        </p>
      </div>
    );
  }
}

export default Resume;
