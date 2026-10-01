// Edit the content below; the layout updates automatically.
const tools = ["Python", "C++", "HTML", "CSS", "Tableau", "Streamlit"];

const services = [
  { title: "Data analysis", text: "Cleaning, exploring and making sense of messy data with Python." },
  { title: "Machine learning and NLP", text: "Models that detect fraud and read sentiment in text." },
  { title: "Dashboards and demos", text: "Tableau dashboards and Streamlit apps that make results easy to explore." },
];

const projects = [
  {
    title: "Fraud Detection",
    text: "A machine learning system that flags procurement fraud such as bribery, bid rigging, collusion and inflated invoices by spotting unusual patterns in transaction data.",
    type: "Machine learning", tools: "Python, data analysis",
    links: [["View code", "https://github.com/AI-Hackathons/Fraud-Detection-Machine-Learning"]],
  },
  {
    title: "Paris 2024 Olympics Sentiment",
    text: "A sentiment model that reads social media posts to show how the public felt about the Paris 2024 Olympics.",
    type: "Sentiment analysis", tools: "Python, Tableau", flip: true,
    links: [
      ["View code", "https://github.com/Atieng/sentiment-analysis-2024-olympics"],
      ["Open dashboard", "https://public.tableau.com/app/profile/ivy.atieng/viz/2024PARISOLYMPICSVISUALIZATIONS/Dashboard2"],
    ],
  },
  {
    title: "SentimentFlow",
    text: "An NLP tool that analyzes sentiment in text to support decision-making, deployed as a live app.",
    type: "NLP", tools: "Python, Streamlit",
    links: [
      ["View code", "https://github.com/Misfit911/SentimentFlow.git"],
      ["Open app", "https://sentimentflow-nlp-project.streamlit.app/"],
    ],
  },
];

const steps = [
  ["Understand the problem", "Agree on the question before touching the data."],
  ["Clean the data", "Fix gaps and errors so the results can be trusted."],
  ["Build and test", "Train a model and check how well it really performs."],
  ["Share the results", "Present findings in a dashboard or app anyone can read."],
];

const EMAIL = "atiengivylisa@gmail.com";
const LINKEDIN = "https://linkedin.com/in/ivy-atieng-a5a52b350";
const GITHUB = "https://github.com/Atieng";
const TWITTER = "https://x.com/vylee_ai";
const RESUME = "IVY.pdf"; // put IVY.pdf in the /public folder

// Deterministic scatter points, so server and browser render the same thing.
function makePoints() {
  let s = 7;
  const rand = () => ((s = (s * 9301 + 49297) % 233280) / 233280);
  return Array.from({ length: 40 }, (_, i) => {
    const y = Math.max(30, Math.min(260, 250 - i * 5 + (rand() - 0.5) * 60));
    return { x: +(45 + i * 8.4).toFixed(1), y: +y.toFixed(1), alt: i % 3 === 0 };
  });
}

function Plot() {
  return (
    <figure className="plot">
      <svg viewBox="0 0 400 300" role="img" aria-label="Scatter plot of data points with a fitted trend line">
        <line x1="30" y1="270" x2="380" y2="270" stroke="var(--line)" strokeWidth="2" />
        <line x1="30" y1="20" x2="30" y2="270" stroke="var(--line)" strokeWidth="2" />
        {makePoints().map((p, i) => (
          <circle key={i} className={p.alt ? "dot alt" : "dot"} style={{ "--i": i }} cx={p.x} cy={p.y} r="5" />
        ))}
        <path className="fit" d="M45 250 L380 52" />
      </svg>
      <small>Fitted trend line: raw data in, a clear pattern out.</small>
    </figure>
  );
}

export default function Home() {
  return (
    <>
      <div className="wrap">
        <nav aria-label="Main">
          <strong>Ivy Atieng</strong>
          <div className="links"><a href="#what">What I do</a><a href="#work">Projects</a><a href="#about">About</a></div>
          <a className="btn main" href="#contact">Contact me</a>
        </nav>

        <header className="hero">
          <div>
            <h1><span>Data scientist</span><span>turning data into</span><span>decisions.</span></h1>
            <p>I&apos;m Ivy Atieng. I study Computer Science at JKUAT and build machine learning projects in Python, with the goal of becoming an AI software developer.</p>
            <div className="btns">
              <a className="btn main" href="#work">View my work</a>
              <a className="btn" href={RESUME}>Download resume</a>
            </div>
          </div>
          <Plot />
        </header>
      </div>

      <div className="tools"><div className="wrap"><b>Tools I use</b>{tools.map((t) => <span key={t}>{t}</span>)}</div></div>

      <section id="what"><div className="wrap">
        <h2>What I do</h2>
        <p className="sub">If you have data and a question, I can help you find the answer.</p>
        <div className="three">
          {services.map((s) => <div className="svc" key={s.title}><h3>{s.title}</h3><p>{s.text}</p></div>)}
        </div>
      </div></section>

      <section id="work" style={{ paddingTop: 0 }}><div className="wrap">
        <h2>Selected projects</h2>
        <p className="sub">Machine learning and analysis work, built in Python.</p>
        <div className="projects">
          {projects.map((p) => (
            <article className="card" key={p.title}>
              <div className="art" aria-hidden="true" style={p.flip ? { background: "linear-gradient(135deg,var(--mint),var(--blue))" } : undefined} />
              <h3>{p.title}</h3>
              <p>{p.text}</p>
              <dl><dt>Type</dt><dd>{p.type}</dd><dt>Tools</dt><dd>{p.tools}</dd></dl>
              <div className="btns">{p.links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</div>
            </article>
          ))}
        </div>
      </div></section>

      <section style={{ paddingTop: 0 }}><div className="wrap">
        <h2>How I approach a data project</h2>
        <p className="sub">The same four steps, every time.</p>
        <ol className="steps">
          {steps.map(([t, d], i) => <li key={t}><i>{i + 1}</i><h3>{t}</h3><p>{d}</p></li>)}
        </ol>
      </div></section>

      <section id="about" style={{ paddingTop: 0 }}><div className="wrap">
        <div className="about">
          <div>
            <h2>About me</h2>
            <p>I&apos;m a data scientist with strong Python skills, studying for a BSc in Computer Science at Jomo Kenyatta University of Agriculture and Technology.</p>
            <p>I also completed a Data Science certificate at Moringa School, covering data analysis, machine learning, statistics and visualization. I&apos;m now moving toward software engineering to build AI products.</p>
          </div>
          <div className="stats">
            <div className="stat"><b>{projects.length}</b><span>Projects built</span></div>
            <div className="stat"><b>2</b><span>Education programs</span></div>
          </div>
        </div>
      </div></section>

      <section id="contact" style={{ paddingTop: 0 }}><div className="wrap">
        <div className="cta">
          <h2>Have a data project in mind?</h2>
          <p>Reach out for collaborations, or just to say hello.</p>
          <div className="btns">
            <a className="btn main" href={`mailto:${EMAIL}`}>{EMAIL}</a>
            <a className="btn" href={LINKEDIN}>LinkedIn</a>
            <a className="btn" href={GITHUB}>GitHub</a>
          </div>
        </div>
      </div></section>

      <footer><div className="wrap">
        <span>© 2025 Ivy Atieng</span>
        <span><a href={TWITTER}>Twitter</a><a href={GITHUB}>GitHub</a><a href={LINKEDIN}>LinkedIn</a></span>
      </div></footer>
    </>
  );
}
