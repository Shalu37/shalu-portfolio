import { useState } from "react";

const nodes = [
  ["client", "React Client", 170, 20, 120, 36],
  ["spring", "Spring Boot API", 50, 106, 120, 44],
  ["node", "Node.js / NestJS", 170, 106, 120, 44],
  ["docker", "Docker Runtime", 290, 106, 120, 44],
  ["mongo", "MongoDB", 50, 201, 120, 44],
  ["mysql", "MySQL", 170, 201, 120, 44],
  ["aws", "AWS S3 / EC2", 290, 201, 120, 44],
  ["auth", "JWT Auth", 50, 296, 120, 40],
  ["ci", "GitHub Actions", 170, 296, 120, 40],
  ["rest", "REST APIs", 290, 296, 120, 40],
];

const paths = [
  [230, 55, 230, 100], [110, 150, 110, 195], [230, 150, 230, 195],
  [350, 150, 350, 195], [230, 105, 110, 145], [230, 105, 350, 145],
  [110, 245, 110, 290], [230, 245, 230, 290], [350, 245, 350, 290],
];

export default function ArchitectureDiagram() {
  const [active, setActive] = useState(null);
  const toggle = (name) => setActive((current) => current === name ? null : name);

  return (
    <div className="diagram-card reveal">
      <div className="dc-top">
        <span className="label mono">system_overview.svg</span>
        <div className="dots"><span/><span/><span/></div>
      </div>
      <svg className="arch-diagram" viewBox="0 0 460 360" role="img" aria-label="Software architecture overview">
        {paths.map(([x1,y1,x2,y2], i) => (
          <g key={i}>
            <path className="flow-line" d={`M${x1} ${y1} L${x2} ${y2}`} />
            <path className="flow-dash" style={{ animationDelay: `${i * .1}s` }} d={`M${x1} ${y1} L${x2} ${y2}`} />
          </g>
        ))}
        {nodes.map(([id, label, x, y, w, h]) => (
          <g key={id} onClick={() => toggle(id)} className="diagram-node" tabIndex="0"
             onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && toggle(id)}>
            <rect className={`node-rect ${active === id ? "active" : ""}`} x={x} y={y} width={w} height={h} rx="8" />
            <text className={`node-label ${active === id ? "active" : ""}`} x={x + w/2} y={y + h/2 + 4} textAnchor="middle">{label}</text>
          </g>
        ))}
      </svg>
      <div className="diagram-hint">click a node to highlight related experience</div>
    </div>
  );
}