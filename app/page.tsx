import { awards, caseStudies, earlier, otherRoles, profile, receipt, skills } from "@/lib/content"

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Work />
        <Also />
        <BeforeCollege />
        <About />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}

function SiteHeader() {
  return (
    <header className="site-header">
      <div className="wrap">
        <a className="wordmark" href="#top">
          Sara Jain
        </a>
        <nav className="site-nav" aria-label="Main">
          <a href="#work">Work</a>
          <a className="hide-sm" href="#about">
            About
          </a>
          <a className="hide-sm" href="#contact">
            Contact
          </a>
          <a className="resume-link" href={profile.resume} target="_blank" rel="noopener noreferrer">
            Résumé
          </a>
        </nav>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap">
        <div>
          <div className="hero-intro">
            <img src={profile.photo} alt="" />
            <p>
              <strong>Sara Jain</strong>
              Product and program management, UC Santa Cruz
            </p>
          </div>
          <h1>I find the tedious part of a workflow and make it disappear.</h1>
          <p className="lede">
            I study <b>Technology Information Management</b> and <b>Cognitive Science</b>. I interview the people
            doing the work, write down what they actually need, and build AI tools that take the manual steps out.
          </p>
          <div className="actions">
            <a className="btn btn-solid" href="#work">
              See my work
            </a>
            <a className="btn btn-line" href={profile.resume} target="_blank" rel="noopener noreferrer">
              Download résumé
            </a>
          </div>
        </div>

        <div className="receipt-stage">
          <article className="receipt" aria-label="A receipt tallying Sara's work so far">
            <header>
              <strong>SARA JAIN</strong>
              <span>UC Santa Cruz, class of 2028</span>
            </header>
            <hr />
            <dl>
              {receipt.lines.map((l) => (
                <div className="row" key={l.label}>
                  <dt>{l.label}</dt>
                  <dd>{l.value}</dd>
                </div>
              ))}
            </dl>
            <hr />
            <dl>
              {receipt.extra.map((l) => (
                <div className="row" key={l.label}>
                  <dt>{l.label}</dt>
                  <dd>{l.value}</dd>
                </div>
              ))}
            </dl>
            <hr />
            <dl>
              <div className="row total">
                <dt>Status</dt>
                <dd>Open to Summer 2027</dd>
              </div>
            </dl>
            <footer>
              Thanks for stopping by
              <div className="barcode" aria-hidden="true" />
            </footer>
          </article>
        </div>
      </div>
    </section>
  )
}

function Work() {
  return (
    <section className="section" id="work">
      <div className="wrap">
        <div className="section-head">
          <h2>Selected work</h2>
          <p>
            Four projects from the last year. Each started with someone stuck on a manual, frustrating task and ended
            with something they could use.
          </p>
        </div>

        {caseStudies.map((c, i) => (
          <article className={`case${i % 2 === 1 ? " flip" : ""}`} key={c.id} id={c.id}>
            <figure className="case-media">
              <img src={c.image} alt={c.imageAlt} width={1200} height={800} loading={i === 0 ? "eager" : "lazy"} />
              <figcaption>{c.caption}</figcaption>
            </figure>
            <div>
              {c.award && <span className="award">{c.award}</span>}
              <h3>{c.title}</h3>
              <p className="meta">{c.meta}</p>
              <dl>
                <div>
                  <dt>The problem</dt>
                  <dd>{c.problem}</dd>
                </div>
                <div>
                  <dt>What I did</dt>
                  <dd>{c.did}</dd>
                </div>
              </dl>
              <div className="result">
                <strong>{c.result.value}</strong>
                <span>{c.result.label}</span>
              </div>
              {c.links && (
                <div className="links">
                  {c.links.map((l) => (
                    <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer">
                      {l.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function Ledger({ items }: { items: { title: string; role: string; summary: string; when: string }[] }) {
  return (
    <ul className="ledger">
      {items.map((it) => (
        <li key={it.title}>
          <h3>
            {it.title}
            <span className="role">{it.role}</span>
          </h3>
          <p>{it.summary}</p>
          <time>{it.when}</time>
        </li>
      ))}
    </ul>
  )
}

function Also() {
  return (
    <section className="section" id="also">
      <div className="wrap">
        <div className="section-head">
          <h2>Also at UCSC</h2>
          <p>Teaching, budgets, and the communities I spend the rest of my week with.</p>
        </div>
        <Ledger items={otherRoles} />
      </div>
    </section>
  )
}

function BeforeCollege() {
  return (
    <section className="section" id="earlier">
      <div className="wrap">
        <div className="section-head">
          <h2>Before college</h2>
          <p>Where I first learned to start things, lead people, and teach.</p>
        </div>
        <Ledger items={earlier} />
        <div className="awards">
          <h3>Awards</h3>
          {awards.map((a) => (
            <p key={a.name}>
              {a.name} <span>{a.year}</span>
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="section" id="about">
      <div className="wrap about">
        <figure className="about-photo">
          <img src={profile.photo} alt="Sara Jain" />
        </figure>
        <div className="about-copy">
          <h2>About me</h2>
          <p>
            I'm a student at UC Santa Cruz, double majoring in Technology Information Management and Cognitive Science.
            The combination is the point: one half is how systems and software get built, the other is how people
            think, decide, and get frustrated.
          </p>
          <p>
            Most of my work starts the same way. I talk to the people doing a task, map where it breaks down, and
            write requirements that an engineering team can build from. More and more, the fix involves an AI agent
            doing the repetitive part. I'm looking for a Summer 2027 internship in product or program management.
          </p>
          <div className="skills">
            {skills.map((s) => (
              <div key={s.group}>
                <h3>{s.group}</h3>
                <ul>
                  {s.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="wrap">
        <h2>Let's work on something together.</h2>
        <p>I'm looking for Summer 2027 product and program management internships. Email is the fastest way to reach me.</p>
        <a className="email" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
        <div className="contact-links">
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href={profile.resume} target="_blank" rel="noopener noreferrer">
            Résumé (PDF)
          </a>
        </div>
      </div>
    </section>
  )
}

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <span>© {new Date().getFullYear()} Sara Jain</span>
        <span>Santa Cruz, California</span>
      </div>
    </footer>
  )
}
