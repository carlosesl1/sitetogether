import { PartnerCapacitySection } from "@/roads-release/components/legal-partners/partner-capacity-section";
import { lawFirmLgpdContent } from "@/components/legal-partners/law-firm-lgpd-content";

const capacityContent = {
  ...lawFirmLgpdContent.capacity,
  title: "Capacidade para sustentar",
  accent: "seu projeto",
  text: "A TOGETHER reúne pessoas, processos e tecnologia para colocar cada projeto em prática.",
};

export function IndustryCapacitySection() {
  return <PartnerCapacitySection content={capacityContent} layout="open" />;
}
