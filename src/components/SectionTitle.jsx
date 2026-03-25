export default function SectionTitle({ small, title, text, center = false }) {
  return (
    <div className={`section-title ${center ? "text-center" : ""}`}>
      <small>{small}</small>
      <h2>{title}</h2>
      <p className={center ? "mx-auto" : ""}>{text}</p>
    </div>
  );
}
