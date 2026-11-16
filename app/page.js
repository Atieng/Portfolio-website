import { site } from "../data/site";
import { projects, experience, community } from "../data/projects";

const isTodo = (v) => !v || (typeof v === "string" && v.startsWith("TODO"));

function T({ children }) {
  if (!isTodo(children)) return <>{children}</>;
  const text = String(children || "").replace(/^TODO:?\s*/, "");
  return <span className="ph">{text ? "add: " + text : "add this"}</span>;
}

function L({ label, href }) {
  if (isTodo(href)) return <span className="ph">add {label} link</span>;
  return <a href={href}>{label}</a>;
}

function Entry({ item, children }) {
  return (
    <article className="entry">
      <h3><T>{item.title}</T></h3>
      {item.role && <p className="role"><T>{item.role}</T></p>}
      {(item.date || item.note) && (
        <p className="date"><T>{item.date || item.note}</T></p>
      )}
      {(item.body || []).map((p, i) => (
        <p key={i}><T>{p}</T></p>
      ))}
      {children}
      {item.tools && <p className="tools">{item.tools}</p>}
      {item.images && item.images.length > 0 && (
        <div className="shots">
          {item.images.map((src) => (
            <img key={src} src={src} alt="" loading="lazy" />
          ))}
        </div>
      )}
    </article>
  );
}

export default function Home() {
  const sorted = [...projects].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
  return (
    <>
      <div className="wrap">
        <header className="top">
          <span className="prompt">ivy@portfolio:~$</span>
          <nav aria-label="Main">
            <a href="#projects">projects</a>
            <a href="#experience">experience</a>
            <a href="#about">about</a>
            <a href="#community">community</a>
            <a href="#contact">contact</a>
          </nav>
        </header>

        <div className="hero">
          <p className="cmd">whoami</p>
          <h1>{site.name}</h1>
          <p className="role" style={{ margin: 0 }}>{site.headline}</p>
          <p>{site.intro}</p>
          <div className="btns">
            <a className="btn" href="#projects">view projects</a>
            <a className="btn" href={site.github}>github</a>
            {isTodo(site.resume) ? (
              <span className="ph">add resume</span>
            ) : (
              <a className="btn" href={site.resume}>my resume</a>
            )}
          </div>
        </div>

        <h2 id="projects">My Projects</h2>
        {sorted.map((p) => (
          <Entry key={p.title} item={p}>
            {p.results && (
              <pre>
                {p.results.map(([k, v]) => (
                  <span key={k}>
                    <span className="k">{k.padEnd(15)}</span>
                    {v}
                    {"\n"}
                  </span>
                ))}
              </pre>
            )}
            {p.links && (
              <p className="links">
                {p.links.map((l) => (
                  <L key={l.label} {...l} />
                ))}
              </p>
            )}
          </Entry>
        ))}

        <h2 id="experience">My Experience</h2>
        {experience.map((e) => (
          <Entry key={e.role + e.title} item={e} />
        ))}

        <h2 id="about">About Me</h2>
        <article className="entry">
          <p className="role">Currently: <T>{site.currently}</T></p>
          {site.about.map((p, i) => (
            <p key={i}><T>{p}</T></p>
          ))}
        </article>

        <h2 id="community">Community Involvement</h2>
        {community.map((c) => (
          <Entry key={c.title} item={c} />
        ))}

        <h2>Tech Stack</h2>
        <p className="stack">{site.stack.join(" · ")}</p>
      </div>

      <footer id="contact">
        <div className="wrap">
          <h2 style={{ marginTop: "1rem" }}>Reach Out</h2>
          <p>
            {isTodo(site.email) ? <span className="ph">add email</span> : <a href={"mailto:" + site.email}>{site.email}</a>}
            {" · "}
            <a href={site.github}>github</a>
            {" · "}
            {isTodo(site.linkedin) ? <span className="ph">add linkedin</span> : <a href={site.linkedin}>linkedin</a>}
            {" · "}
            <a href={site.x}>x</a>
          </p>
        </div>
      </footer>
    </>
  );
}
