import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main" className="nf">
      <p className="eyebrow">404</p>
      <h1 className="title">
        הדף הזה <em>הלך לאיבוד.</em>
      </h1>
      <p className="lead">אולי הקישור ישן, ואולי הקלדה קטנה. הנה הדרך חזרה.</p>
      <div className="nf-actions">
        <Link className="btn btn-lime" href="/">
          לדף הבית
        </Link>
        <Link className="btn btn-ghost" href="/#work">
          <span>לעבודות</span>
        </Link>
      </div>
    </main>
  );
}
