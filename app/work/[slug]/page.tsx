import type { Metadata } from "next";
import Devices from "@/components/ui/Devices";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Reveal from "@/components/motion/Reveal";
import ScrollProgress from "@/components/layout/ScrollProgress";
import { PROJECTS } from "@/content";
import CaseCta from "@/components/case-study/CaseCta";
import CaseHero from "@/components/case-study/CaseHero";
import CaseNext from "@/components/case-study/CaseNext";
import CaseStory from "@/components/case-study/CaseStory";
import CaseTech from "@/components/case-study/CaseTech";

type Props = { params: Promise<{ slug: string }> };

/** Every project gets its own static page. */
export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

/** Title, description and link preview of a project page. */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = PROJECTS.find((x) => x.slug === slug);
  if (!p) return {};
  const title = `${p.title}: ${p.kicker}`;
  return {
    title,
    description: p.summary,
    alternates: { canonical: `/work/${p.slug}/` },
    openGraph: {
      title,
      description: p.summary,
      url: `/work/${p.slug}/`,
      images: [{ url: p.cover, width: 1600, height: 1000, alt: p.coverAlt }],
    },
  };
}

/** A project page: story first, technical details folded at the end. */
export default async function CaseStudy({ params }: Props) {
  const { slug } = await params;
  const i = PROJECTS.findIndex((x) => x.slug === slug);
  if (i < 0) notFound();
  const p = PROJECTS[i];
  const next = PROJECTS[(i + 1) % PROJECTS.length];
  // the story links up top; the code link sits with the technical details at the end
  const code = p.links.find((l) => l.href.includes("github.com"));
  const links = p.links.filter((l) => l !== code);

  return (
    <>
      <ScrollProgress />
      <Header home={false} />
      <main id="main">
        <CaseHero p={p} links={links} />

        <div className="container pb-10">
          <figure className="reveal relative z-2 [margin:-90px_0_40px] overflow-visible rounded-[32px] px-[4%] [box-shadow:none] [background:none] [border:0]">
            <Devices mock={p.mock} alt={p.coverAlt} priority className="mx-auto max-w-[1000px]" />
          </figure>

          <CaseStory p={p} />

          <CaseTech stack={p.stack} code={code} />

          <CaseNext next={next} />
        </div>

        <CaseCta />
      </main>
      <Footer home={false} />
      <Reveal />
    </>
  );
}
