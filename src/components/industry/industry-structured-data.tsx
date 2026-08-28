import type { SectorIndustryContent } from "@/components/industry/industry-page-types";

const siteUrl = "https://togetherprivacy.tech";

export function IndustryStructuredData({
  content,
}: {
  content: SectorIndustryContent;
}) {
  const pageUrl = `${siteUrl}${content.metadata.canonical}`;
  const payload = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: content.metadata.title,
        description: content.metadata.description,
        url: pageUrl,
        areaServed: { "@type": "Country", name: "Brasil" },
        provider: {
          "@type": "Organization",
          name: "TOGETHER Privacy & Tech",
          url: siteUrl,
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        mainEntity: content.faq.items.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(payload).replace(/</g, "\\u003c"),
      }}
    />
  );
}
