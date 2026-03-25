function getTypeBadgeClass(type) {
  const map = {
    "weekly-race": "type-weekly",
    "special-event": "type-special",
    "practice-session": "type-practice",
  };
  return map[type] || "";
}

function getTypeLabel(type) {
  const map = {
    "weekly-race": "Weekly Race",
    "special-event": "Special Event",
    "practice-session": "Practice Session",
  };
  return map[type] || type || "Event";
}

export default function EventCard({ event }) {
  return (
    <div className="event-card">
      <div className="d-flex justify-content-between align-items-start gap-3 flex-wrap">
        <div>
          <div className={`badge-soft ${getTypeBadgeClass(event.type)}`}>
            {getTypeLabel(event.type)}
          </div>
          <div className="event-title">{event.title || "-"}</div>
          <p className="mb-0">{event.description || ""}</p>
        </div>
        <div className="text-md-end">
          <div className="fw-bold text-white">{event.day || "-"}</div>
          <div className="muted-text">{event.time || "-"}</div>
        </div>
      </div>

      <div className="event-meta">
        {event.track ? <span>{event.track}</span> : null}
        {event.platform ? <span>{event.platform}</span> : null}
        {event.server ? <span>{event.server}</span> : null}
        {event.format ? <span>{event.format}</span> : null}
      </div>
    </div>
  );
}
