'use client';

import { useEffect, useState } from 'react';

const briefs = [
  { title: 'Courtyard House', phase: 'Design development', detail: 'A light-filled home organized around a planted courtyard.', tasks: ['Approve the site survey', 'Review the courtyard elevation', 'Issue the lighting plan'] },
  { title: 'Canal Workshop', phase: 'Concept design', detail: 'A former boat shed becomes a shared workshop with flexible benches and a riverside entrance.', tasks: ['Document the existing structure', 'Compare the two entry schemes', 'Review the material samples'] },
  { title: 'Elm Street Rooms', phase: 'Handover', detail: 'Three quiet guest rooms above a neighborhood bookshop, finished in oak and limewash.', tasks: ['Inspect the built-in joinery', 'Review the finish schedule', 'Deliver the care manual'] },
];
const storageKey = 'formwork.board.v1';
const initial = [[true, false, false], [true, false, false], [true, true, false]];

export function ProjectBoard() {
  const [selected, setSelected] = useState(0);
  const [checks, setChecks] = useState(initial);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    try {
      const saved: unknown = JSON.parse(localStorage.getItem(storageKey) || 'null');
      if (Array.isArray(saved) && saved.length === briefs.length && saved.every((row, i) =>
        Array.isArray(row) && row.length === briefs[i].tasks.length && row.every(v => typeof v === 'boolean'))) setChecks(saved);
    } catch { /* Private browsing still supports the board in memory. */ }
    setReady(true);
  }, []);
  useEffect(() => {
    if (ready) {
      try { localStorage.setItem(storageKey, JSON.stringify(checks)); } catch { /* Keep changes in memory. */ }
    }
  }, [checks, ready]);
  const brief = briefs[selected];
  return (
    <section id="project" className="fw-board">
      <h2>Studio board</h2>
      <p>Explore three sample briefs. Checklist changes stay in this browser.</p>
      <div className="fw-workspace">
        <div className="fw-projects" role="group" aria-label="Choose a project">
          {briefs.map((item, i) => <button key={item.title} type="button" aria-pressed={i === selected} onClick={() => setSelected(i)}><strong>{item.title}</strong><small>{item.phase}</small></button>)}
        </div>
        <article>
          <h3>{brief.title}</h3><p>{brief.detail}</p>
          <p className="fw-progress" aria-live="polite">{checks[selected].filter(Boolean).length} of {brief.tasks.length} complete</p>
          {brief.tasks.map((task, index) => <label key={task}><input type="checkbox" checked={checks[selected][index]} onChange={() => setChecks(previous => previous.map((row, i) => i === selected ? row.map((v, j) => j === index ? !v : v) : row))} />{task}</label>)}
        </article>
      </div>
    </section>
  );
}
