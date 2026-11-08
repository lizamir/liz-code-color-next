import Link from "next/link";

/** The 404 page. */
export default function NotFound() {
  return (
    <main
      id="main"
      className="grid min-h-[100vh] place-content-center justify-items-center gap-[22px] bg-deep px-5 py-10 text-center text-white"
    >
      <p className="eyebrow">404</p>
      <h1 className="display">
        הדף הזה <em className="text-accent-light not-italic">הלך לאיבוד.</em>
      </h1>
      <p className="lead text-on-deep-2">אולי הקישור ישן, ואולי הקלדה קטנה. הנה הדרך חזרה.</p>
      <div className="flex flex-wrap justify-center gap-3">
        <Link className="btn btn-lime" href="/">
          לדף הבית
        </Link>
        <Link className="btn btn-ghost text-white hover:bg-white [&:hover>span]:text-deep" href="/#work">
          <span>לעבודות</span>
        </Link>
      </div>
    </main>
  );
}
