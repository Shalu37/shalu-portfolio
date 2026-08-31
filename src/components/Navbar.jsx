import { useEffect, useState } from "react";

const links = [
  ["experience", "Experience"],
  ["projects", "Projects"],
  ["skills", "Skills"],
  ["education", "Education"],
];

export default function Navbar() {
  const [active, setActive] = useState("experience");

  useEffect(() => {
    const observers = links.map(([id]) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const observer = new IntersectionObserver(
        ([entry]) => entry.isIntersecting && setActive(id),
        { rootMargin: "-40% 0px -50% 0px" }
      );
      observer.observe(el);
      return observer;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  return (
    <nav>
      <a className="nav-brand" href="#home" aria-label="Go to home">
        <span className="dot" />
        Shalu Jawla
      </a>
      <ul className="nav-links">
        {links.map(([id, label]) => (
          <li key={id}>
            <a className={active === id ? "active" : ""} href={`#${id}`}>
              {label}
            </a>
          </li>
        ))}
        <li><a className="nav-cta" href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}