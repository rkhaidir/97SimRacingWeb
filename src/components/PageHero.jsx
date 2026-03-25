export default function PageHero({
  id = "home",
  className = "",
  eyebrow,
  title,
  lead,
  actions,
  stats,
}) {
  return (
    <header className={`page-hero ${className}`.trim()} id={id}>
      <div className="container">
        <div className="row g-4 align-items-end">
          <div className="col-lg-8">
            {eyebrow && <div className="eyebrow">{eyebrow}</div>}
            <h1>{title}</h1>
            {lead && <p className="lead">{lead}</p>}
            {actions ? (
              <div className="d-flex flex-wrap gap-3">{actions}</div>
            ) : null}
          </div>
          {stats ? (
            <div className="col-lg-4">
              <div className="row g-3">{stats}</div>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
}
