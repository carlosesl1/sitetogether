import type { IndustryFinalCtaContent } from "@/roads-release/components/industry/industry-page-types";
import { IndustryContactSection } from "@/roads-release/components/industry/industry-contact-section";
import { industryContactForms } from "@/roads-release/content/industry-contact-forms";

export function RoadsContactSection({
  content,
}: {
  readonly content: IndustryFinalCtaContent;
}) {
  return <IndustryContactSection content={content} form={industryContactForms.roads} />;
}
