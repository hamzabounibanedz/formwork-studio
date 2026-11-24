import { ProjectBoard } from './project-board';

export default function HomePage() {
  return (
    <main className="fw">
      <section className="fw-hero">
        <div>
          <p className="fw-kicker">Studio project management</p>
          <h1>From brief<br />to <em>handover.</em></h1>
          <p className="fw-intro">A project board for small design studios. Open a brief, track the work, and see what’s ready to hand over.</p>
          <a className="fw-button" href="#project">Open the sample board <span aria-hidden="true">↓</span></a>
        </div>
        <figure className="fw-print">
          <div className="fw-plan" aria-hidden="true">
            <div className="fw-court" /><div className="fw-gallery" /><div className="fw-steps" />
          </div>
          <figcaption><b>Courtyard House</b><span>Ground floor study</span></figcaption>
        </figure>
      </section>
      <ProjectBoard />
      <footer className="fw-foot">Formwork Studio <a href="#top">Back to top ↑</a></footer>
    </main>
  );
}
