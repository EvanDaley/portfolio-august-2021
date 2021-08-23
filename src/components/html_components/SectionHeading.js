export default function SectionHeading({ prefix, label }) {
  return (
    <h2 className="section-label">
      <span className="highlight">{prefix}. </span>
      <span>{label}</span>
    </h2>
  )
}
