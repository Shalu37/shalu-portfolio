import { useRef, useState } from "react";
import { terminalResponses } from "../data/portfolio";

export default function Terminal() {
  const [lines, setLines] = useState([]);
  const [input, setInput] = useState("");
  const bodyRef = useRef(null);

  const runCommand = (raw) => {
    const cmd = raw.trim().toLowerCase();
    if (!cmd) return;
    if (cmd === "clear") {
      setLines([]);
      return;
    }
    const output = Object.prototype.hasOwnProperty.call(terminalResponses, cmd)
      ? terminalResponses[cmd]
      : `command not found: '${raw}' — try 'help'`;
    setLines((current) => [...current, { cmd: raw, output }]);
    requestAnimationFrame(() => {
      if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    });
  };

  return (
    <div className="terminal">
      <div className="t-top">
        <span className="file mono">shalu@portfolio: ~</span>
        <div className="dots"><span/><span/><span/></div>
      </div>
      <div className="term-body" ref={bodyRef}>
        <div className="term-line">
          <span className="prompt">$</span> help
          <span className="out">Try: <span className="hl">whoami</span>, <span className="hl">skills</span>, <span className="hl">experience</span>, <span className="hl">contact</span>, <span className="hl">clear</span></span>
        </div>
        {lines.map((line, i) => (
          <div className="term-line" key={`${line.cmd}-${i}`}>
            <span className="prompt">$</span> {line.cmd}
            <span className="out">{line.output}</span>
          </div>
        ))}
      </div>
      <div className="term-chips">
        {["whoami", "skills", "experience", "contact"].map((cmd) => (
          <button className="term-chip" key={cmd} onClick={() => runCommand(cmd)}>{cmd}</button>
        ))}
      </div>
      <form className="term-input-row" onSubmit={(e) => { e.preventDefault(); runCommand(input); setInput(""); }}>
        <span className="prompt">$</span>
        <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="type a command…" autoComplete="off" spellCheck="false" aria-label="Terminal command" />
      </form>
    </div>
  );
}