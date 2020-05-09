import React from 'react';

function Resume() {
  return (
<div id="page" class="normal-text">
  <div class="col-container">
    <div class="header1">
      <span class="title">
        Yuri Mataev
      </span>
    </div>

    <div class="header2">
      <div>yuri@mataev.com</div>
      <div>(607) 287-1942</div>
    </div>

    <div class="header3">
      <div>Norwich, NY 13815</div>
      <div>www.github.com/yurimataev</div>
    </div>
  </div>

  <div>
    <p class="outdent">
      <span class="bold">Objective:</span>
      &nbsp;I am seeking to apply the technical and soft skills accumulated over 17 years as a full stack web developer, Linux server administrator and open source contributor, in pivoting to a Support Engineer career.
      {/* &nbsp;I am seeking to apply the technical and soft skills accumulated over a 17-year long career as a full stack web developer, Linux server administrator and open source contributor, to the Support Engineer role. */}
    </p>
  </div>

  <div class="col-container">
    <div class="left">
      <h1>Professional Experience</h1>
      <div class="job_heading">
        <h2><span class="bold">Knitting Patterns Galore</span> &mdash; <span class="italic">Full Stack Developer, Remote</span></h2>
        <h3>September 2018 - Present</h3>
      </div>
      <ul>
        <li>
          Refactored legacy CGI / Perl code to a modern PHP / Javascript stack, substantially increasing website performance.
        </li>
        <li>
          Worked closely with the content team to streamline their workflow, automating many routine tasks to save time and increase efficiency.
        </li>
      </ul>
      <div class="job_heading">
        <h2>
          <span class="bold">Russian Doska Network</span> &mdash; <span class="italic">Full Stack Developer, Remote</span>
        </h2>
        <h3>
          November 2011 - August 2018
        </h3>
      </div>
      <ul>
        <li>
          Refactored legacy code base (PHP / HTML-CSS / Vanilla JS stack) to modern coding and application design standards. Re-designed UX with a mobile-first approach. My work was a key part of the company's rise to leadership in its niche.
        </li>
        <li>
          Implemented CI / CD environment to streamline development and deployment.
        </li>
        <li>
          Created a notification system for team members to receive alerts regarding high priority issues directly to their phones, using Java, Python and RESTful API.
        </li>
      </ul>
      <div class="job_heading">
        <h2>
          <span class="bold">Advanced Embroidery Designs</span> &mdash; <span class="italic">PHP Developer &amp; Server Admin</span>
        </h2>
        <h3>
          May 2005 - November 2011
        </h3>
      </div>
      <ul>
        <li>
          Refactored old code and shipped new features. Ensured reliable up-time for all services.
        </li>
        <li>
          Communicated technical information to non-technical co-workers in an accessible way.
        </li>
        <li>
          Improved website UX, code efficiency and SEO, increasing both traffic and revenue.
        </li>
      </ul>
      <div class="job_heading">
        <h2>
          <span class="bold">Ariana RPG (voin.net)</span> &mdash; <span class="italic">PHP Developer, Remote</span>
        </h2>
        <h3>
          April 2003 - May 2005
        </h3>
      </div>
      <ul>
        <li>
          Worked remotely as part of a distributed team, in a dynamic startup environment.
        </li>
        <li>
          Collaborated closely with customer support, marketing and content teams in an Agile-like development approach, to deliver features quickly.
        </li>
      </ul>
      <div class="job_heading">
        <h2>
          <span class="bold">Freelance Work</span> &mdash; <span class="italic">Full Stack Developer &amp; &ldquo;Tech Handyman&rdquo;</span>
        </h2>
        <h3>
          2002 - 2019
        </h3>
      </div>
      <ul>
        <li>
          Helped small businesses and individuals achieve or improve their web presence.
        </li>
        <li>
          Juggled competing priorities (budget vs time, marketing vs technical, etc) to deliver best value.
        </li>
        <li>
          Regularly learned and applied new technical skills on tight deadlines.
        </li>
      </ul>

      {/*<h1>Personal Projects</h1>
      <div class="col-container">
        <div class="col1 bold">
          Developer Blog
        </div>
        <div class="col2">
          React, Jekyll, Ruby
        </div>
        <div class="col3">
          https://www.mataev.com
        </div>
      </div>
      <div class="col-container">
        <div class="col1 bold">
          CI / CD Proof-of-Concept
        </div>
        <div class="col2 reduced-text">
          Docker, PHP / Laravel, Plesk
        </div>
        <div class="col3 reduced-text">
          https://github.com/yurimataev/laravel-docker-cicd
        </div>
      </div>
      <div class="col-container">
        <div class="col1 bold">
          This Resume
        </div>
        <div class="col2 reduced-text">
          HTML, React, SCSS
        </div>
        <div class="col3 reduced-text">
          https://github.com/yurimataev/resume
        </div>
      </div>*/}

      <div class="right">
        <h1>Skills</h1>
        <h2>
          <span class="bold">Languages &amp; Frameworks</span>
        </h2>
        <ul>
          <li>PHP (<span class="italic">Laravel, Wordpress</span>)</li>
          <li>JavaScript (<span class="italic">React, Angular, Vue, NodeJS</span>)</li>
          <li>Python</li>
          <li>Ruby (<span class="italic">Rails, Jekyll</span>)</li>
          <li>Java</li>
          <li>HTML5 / CSS3</li>
          <li>SASS, SCSS</li>
          <li>SQL (<span class="italic">MySQL, PostgreSQL</span>)</li>
          <li>Perl</li>
          <li>Bash</li>
          <li>PowerShell</li>
          <li>Markdown</li>
        </ul>
        <h2>
          <span class="bold">Infrastructure &amp; Tools</span>
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
          <li>Linux (<span class="italic">RHEL, Ubuntu Server</span>)</li>
        </ul>
        <h2 class="hide-trad-disabled">
          <span class="bold">Human Languages</span>
        </h2>
        <ul class="hide-trad-disabled">
          <li>English (fluent)</li>
          <li>Russian (fluent)</li>
          <li>French (intermediate)</li>
          <li>German (intermediate)</li>
        </ul>
      </div>

      <h1>Education</h1>
      <h2>
        <span class="bold">Hartwick College, Oneonta, NY</span> &mdash; <span class="italic nobr">Bachelor of Arts (Biology)</span>
      </h2>

      <h1>Personal Interests</h1>
      <p>
        Brazilian Jiu Jitsu. Physical and mental aspects of athletic performance. How to coach.<br />
        Sci fi and fantasy literature. Biology. History and archaeology. Gaming.
      </p>

    </div>

  </div>

</div>
  );
}

export default Resume;
