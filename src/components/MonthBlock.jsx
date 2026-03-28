import EventCard from "./EventCard";

export default function MonthBlock({ month, events }) {
  return (
    <div className="month-block">
      <div className="month-title mb-2">{month}</div>
      <div className="calendar-stack">
        {events.map((event, index) => (
          <EventCard key={`${event.title}-${index}`} event={event} />
        ))}
      </div>
    </div>
  );
}
