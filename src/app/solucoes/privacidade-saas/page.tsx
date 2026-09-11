import { SaasPageShell } from "@/components/industry/saas/saas-page-shell";
import { SaasContactSection } from "@/components/industry/saas/saas-contact-section";
import { saasContactForm } from "@/content/saas-contact-form";
import { SaasNarrative } from "@/components/industry/narratives/saas-narrative";
import { saasIndustryContent } from "@/content/industries/saas";

export default function PrivacidadeSaasPage() {
  return (
    <SaasPageShell
      content={saasIndustryContent}
      finalCta={
        <SaasContactSection
          content={saasIndustryContent.finalCta}
          form={saasContactForm}
        />
      }
    >
      <SaasNarrative content={saasIndustryContent} />
    </SaasPageShell>
  );
}
