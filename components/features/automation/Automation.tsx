import AutomationIntro from "./AutomationIntro";
import AutomationSteps from "./AutomationSteps";
import BotTry from "./BotTry";
import FlowLab from "./FlowLab";
import UseCases from "./UseCases";

// `automation` only carries the 3D robot's colors (motion CSS); the dark look is `on-deep`.

/** The AI and automation section. `dev` shows the technical version with tools and the flow demo. */
export default function Automation({ dev = false }: { dev?: boolean }) {
  return (
    <section
      id={dev ? "dev-ai" : "automation"}
      className="section automation on-deep"
      aria-labelledby="automation-title"
    >
      <div className="container">
        <AutomationIntro dev={dev} />
        <BotTry dev={dev} />
        <UseCases dev={dev} />
        {dev && <FlowLab />}
        <AutomationSteps dev={dev} />
      </div>
    </section>
  );
}
