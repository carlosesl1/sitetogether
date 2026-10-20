/** Static PNGs also work with crawlers that do not execute JavaScript. */
function socialImage(name: string, alt: string) {
  return {
    url: `/images/social/${name}-v1.png`,
    width: 1200,
    height: 630,
    type: "image/png",
    alt,
  };
}

export const socialImages = {
  home: socialImage("together", "TOGETHER — Privacidade, tecnologia e confiança"),
  blog: socialImage("blog", "Blog TOGETHER — Conhecimento para proteger e transformar"),
  contato: socialImage("contato", "Fale com a TOGETHER — Vamos cuidar da sua privacidade"),
  dpo: socialImage("dpo-as-a-service", "TOGETHER — DPO as a Service para empresas"),
  consultoria: socialImage("consultoria-adequacao", "TOGETHER — Adequação à LGPD, do plano à prática"),
  mentoria: socialImage("mentoria-e-cultura", "TOGETHER — Cultura de privacidade começa com pessoas"),
  advocacia: socialImage("escritorios-de-advocacia", "TOGETHER — Parceria LGPD para escritórios de advocacia"),
};
