import { PartnerCapacitySection } from "@/components/legal-partners/partner-capacity-section";

const capacityContent = {
  pill: "Capacidade comprovada",
  title: "Experiência para simplificar a LGPD",
  accent: "e colocar as mudanças em prática.",
  text: "A TOGETHER reúne especialistas, processos e tecnologia para organizar o trabalho desde o mapeamento dos dados até o acompanhamento das mudanças.",
  proofs: [
    { value: "+200", label: "tipos de atividade e entrega que podem fazer parte do projeto" },
    { value: "+5 anos", label: "de atuação em privacidade e LGPD" },
    { value: "Especialistas", label: "com certificações internacionais e experiência prática" },
    { value: "Plataformas", label: "experiência prática com tecnologias de privacidade" },
    { value: "Internacional", label: "experiência com GDPR e PDPL" },
    { value: "Execução", label: "trabalho dividido em etapas, com responsáveis e acompanhamento" },
  ],
};

export function HigherEducationCapacitySection() {
  return <PartnerCapacitySection content={capacityContent} layout="open" />;
}
