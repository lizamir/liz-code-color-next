"use client";

export default function PrintButton() {
  return (
    <button type="button" className="btn btn-ink btn-sm" onClick={() => window.print()}>
      הדפסה או שמירה כ‑PDF
    </button>
  );
}
