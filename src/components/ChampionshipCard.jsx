function getStatusClass(status) {
  const normalized = (status || "").toLowerCase();
  if (
    normalized.includes("live") ||
    normalized.includes("active") ||
    normalized.includes("berlangsung")
  ) {
    return "status-live";
  }
  if (
    normalized.includes("upcoming") ||
    normalized.includes("soon") ||
    normalized.includes("coming")
  ) {
    return "status-upcoming";
  }
  if (
    normalized.includes("completed") ||
    normalized.includes("finished") ||
    normalized.includes("ended")
  ) {
    return "status-completed";
  }
  return "";
}

export default function ChampionshipCard({ item }) {
  const meta = [item.platform, item.format, item.season]
    .filter(Boolean)
    .map((value) => <span key={value}>{value}</span>);

  return (
    <div className="champ-card">
      <div className="d-flex justify-content-between align-items-start gap-3 flex-wrap mb-2">
        <div>
          <div className="badge-soft">{item.category || "Championship"}</div>
          <div className="card-title-main">{item.name || "-"}</div>
        </div>
        <div className={`status-pill ${getStatusClass(item.status)}`}>
          {item.status || "Unknown"}
        </div>
      </div>

      <p className="mb-3">{item.description || ""}</p>
      <div className="meta-pills">{meta}</div>

      <div className="class-list">
        {(item.classes || []).map((cls) => (
          <div className="class-item" key={cls}>
            {cls}
          </div>
        ))}
      </div>
    </div>
  );
}
