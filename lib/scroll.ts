/** Scrolls smoothly to a section, through the smooth-scroll library when it is on. */
export function scrollToHash(hash: string) {
  const lenis = window.__lenis;
  if (lenis) {
    lenis.start();
    lenis.scrollTo(hash, { offset: -96 });
  } else {
    document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
  }
}
