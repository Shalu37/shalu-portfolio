import { useEffect, useState } from "react";
import { ArrowUpRight, Mail, Phone, Download } from "lucide-react";
import Navbar from "./components/Navbar";
import ArchitectureDiagram from "./components/ArchitectureDiagram";
import Terminal from "./components/Terminal";
import {
  profile, metrics, stack, experience, projects, skillLayers, skillBars, education
} from "./data/portfolio";

function Reveal({ children, className = "" }) {
  return <div className={`reveal ${className}`}>{children}</div>;
}

function SectionHeader({ index, title, subtitle }) {
  return (
    <div className="route-header reveal">
      <span className="section-index">{index}</span>
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-sub">{subtitle}</p>}
    </div>
  );
}

function App() {
  const [filter, setFilter] = useState("all");
  const [copied, setCopied] = useState(false);
  const [activeNode, setActiveNode] = useState(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const revealEls = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -60px 0px" });
    revealEls.forEach((el, i) => {
      el.style.transitionDelay = `${(i % 5) * 55}ms`;
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const update = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setProgress(max > 0 ? (h.scrollTop / max) * 100 : 0);
    };
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem("portfolio-filter");
    if (saved) setFilter(saved);
  }, []);

  const changeFilter = (value) => {
    setFilter(value);
    localStorage.setItem("portfolio-filter", value);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  const filteredProjects = projects.filter((p) =>
    filter === "all" || p.tags.includes(filter)
  );

  return (
    <>
      <div className="progress-bar" style={{ width: `${progress}%` }} />
      <Navbar />

      <main>
        <header className="hero" id="home">
          <div className="hero-top">
            <div>
              <div className="status-pill"><span className="live-dot" /> open to Software Developer roles</div>
              <h1>Backend systems that <span className="grad">scale, ship,<br/>and stay up</span> in production.</h1>
              <p className="lede">{profile.summary}</p>
              <div className="cta-row">
                <a className="btn btn-primary" href="#contact">Let's talk <ArrowUpRight size={17}/></a>
                <a className="btn btn-ghost" href="#projects">See the work</a>
              </div>
              <div className="metric-row">
                {metrics.map(([value, label]) => <div className="metric" key={label}><b>{value}</b><span>{label}</span></div>)}
              </div>
            </div>
            <ArchitectureDiagram />
          </div>

          <div className="stack-strip reveal">
            <div className="stack-track">
              {[...stack, ...stack].map((item, i) => {
                const [name, detail] = item.split(" · ");
                return <span key={`${item}-${i}`}><b>{name}</b>{detail}</span>;
              })}
            </div>
          </div>
        </header>

        <section id="experience">
          <SectionHeader index="Career log" title="Experience" subtitle="Three roles, one thread: ship reliable backend systems, then extend them further up and out the stack." />
          <div className="timeline">
            {experience.map((item, i) => {
              const highlighted = !activeNode || item.nodes.includes(activeNode);
              return (
                <div
                  className={`tl-item ${i === 0 ? "current" : ""} reveal`}
                  key={item.role}
                  style={{ opacity: highlighted ? 1 : 0.3 }}
                >
                  <div className="tl-head">
                    <span className="tl-role">{item.role}</span>
                    <span className="tl-org">{item.org}</span>
                  </div>
                  <div className="tl-meta">{item.meta}</div>
                  <ul>{item.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
                  <div className="tl-tags">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                </div>
              );
            })}
          </div>
        </section>

        <section id="projects">
          <SectionHeader index="Selected work" title="Projects" subtitle="A mix of full-stack products and focused backend systems — filter by the layer you care about." />
          <div className="filter-row reveal">
            {["all", "backend", "frontend", "cloud"].map((value) => (
              <button key={value} className={`filter-btn ${filter === value ? "active" : ""}`} onClick={() => changeFilter(value)}>
                {value === "all" ? "All" : value === "cloud" ? "Cloud / DevOps" : value[0].toUpperCase() + value.slice(1)}
              </button>
            ))}
          </div>
          <div className="project-grid">
            {filteredProjects.map((project, i) => (
              <Reveal key={project.title}>
                <article className="project-card">
                  <div className="pc-top"><h3>{project.title}</h3><span className="pc-index">{String(i + 1).padStart(2, "0")}</span></div>
                  <p>{project.description}</p>
                  <div className="project-fields">
                    <div className="pf-row"><span className="pf-key">stack</span><span className="pf-val">{project.stack}</span></div>
                    <div className="pf-row"><span className="pf-key">focus</span><span className="pf-val">{project.focus}</span></div>
                  </div>
                  <div className="pc-tags">{project.chips.map((chip) => <span key={chip}>{chip}</span>)}</div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="skills">
          <SectionHeader index="Toolkit" title="Skills" subtitle="Organized the way the systems are — by layer." />
          <div className="skills-layout">
            <div className="layer-block reveal">
              {skillLayers.map(([number, title, items]) => (
                <div className="layer-row" key={title}>
                  <div className="layer-head"><span className="tag">{number}</span><b>{title}</b></div>
                  <div className="layer-items">{items.map((item) => <span key={item}>{item}</span>)}</div>
                </div>
              ))}
            </div>
            <div className="bars-block reveal">
              {skillBars.map(([name, pct]) => (
                <SkillBar key={name} name={name} pct={pct} />
              ))}
              <Terminal />
            </div>
          </div>
        </section>

        <section id="education">
          <SectionHeader index="Background" title="Education" />
          <div className="edu-grid">
            {education.map(([year, title, school]) => (
              <Reveal key={year}>
                <article className="edu-card">
                  <span className="edu-year mono">{year}</span>
                  <h3>{title}</h3>
                  <p>{school}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="contact">
          <div className="contact-panel reveal">
            <h2>Let's build something reliable.</h2>
            <p>Open to backend and full-stack Software Developer roles. Reach out directly — happy to talk stacks, systems, or your next hire.</p>
            <div className="contact-links">
              <button className="btn btn-primary" onClick={copyEmail}><Mail size={16}/>{profile.email}</button>
              <a className="btn btn-ghost" href={`tel:${profile.phone}`}><Phone size={16}/>{profile.phone}</a>
              <a className="btn btn-ghost" href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={15}/></a>
              <a className="btn btn-ghost" href={profile.hackerRank} target="_blank" rel="noopener noreferrer">HackerRank <ArrowUpRight size={15}/></a>
            </div>
          </div>
        </section>
      </main>

      <footer>{profile.location} · Built with React + Vite by Shalu Jawla</footer>

      {copied && <div className="copy-toast show" role="status">Email copied to clipboard</div>}
    </>
  );
}

function SkillBar({ name, pct }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 250);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="bar-row">
      <div className="bar-label"><span>{name}</span><span className="pct">{pct}%</span></div>
      <div className="bar-track"><div className="bar-fill" style={{ width: visible ? `${pct}%` : "0%" }} /></div>
    </div>
  );
}

export default App;