import Portfolio from "../component/Portfolio";
import Section from "../component/Section";

export default function PortfolioPage() {
  return (
    <div>
      <Section SecTitle1="Portafolio" SecTitle2="Trabajos Recientes" />
      <Portfolio />
    </div>
  );
}
