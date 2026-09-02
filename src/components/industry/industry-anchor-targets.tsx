export { getIndustryAnchorIds } from "@/components/industry/industry-anchor-ids";

export function IndustryAnchorTargets({ ids }: { ids: readonly string[] }) {
  if (ids.length === 0) return null;

  return (
    <div className="absolute inset-x-0 top-0 h-0" aria-hidden="true">
      {ids.map((id) => (
        <span key={id} id={id} className="block h-0 scroll-mt-24" />
      ))}
    </div>
  );
}
