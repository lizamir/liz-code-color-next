/** The mark: an L written like a line of code, ending in a colored cursor that follows the chosen theme. */
export default function Logo({ onDark = false }: { onDark?: boolean }) {
  return (
    <span className={`logo${onDark ? " logo--dark" : ""}`}>
      <svg className="logo-mark" viewBox="0 0 40 40" width="38" height="38" aria-hidden="true" focusable="false">
        <rect className="logo-bg" width="40" height="40" rx="11" />
        <path className="logo-l" d="M13 9v22h12" fill="none" strokeWidth="4.6" strokeLinecap="round" strokeLinejoin="round" />
        <rect className="logo-cursor" x="27" y="26.4" width="6.4" height="9.2" rx="1.6" />
      </svg>
      <span className="logo-text">
        <b>Liz</b>
        <small>CODE &amp; COLOR</small>
      </span>
    </span>
  );
}
