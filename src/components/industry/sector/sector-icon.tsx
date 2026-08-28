import {
  BarChart3,
  BookOpenCheck,
  Boxes,
  Building2,
  Camera,
  CheckCircle2,
  Cloud,
  Code2,
  CreditCard,
  Database,
  FileCheck2,
  FlaskConical,
  Gauge,
  GraduationCap,
  KeyRound,
  MapPinCheck,
  MessageSquare,
  Network,
  PackageSearch,
  Presentation,
  Route,
  Server,
  ShieldCheck,
  Truck,
  UsersRound,
  Warehouse,
} from "lucide-react";
import type { ComponentType, SVGProps } from "react";
import type { IndustryIconKey } from "@/components/industry/industry-page-types";

const sectorIcons: Record<
  IndustryIconKey,
  ComponentType<SVGProps<SVGSVGElement>>
> = {
  analytics: BarChart3,
  billing: CreditCard,
  book: BookOpenCheck,
  building: Building2,
  camera: Camera,
  check: CheckCircle2,
  cloud: Cloud,
  code: Code2,
  database: Database,
  file: FileCheck2,
  graduation: GraduationCap,
  hub: Boxes,
  key: KeyRound,
  "map-pin": MapPinCheck,
  message: MessageSquare,
  network: Network,
  package: PackageSearch,
  presentation: Presentation,
  research: FlaskConical,
  route: Route,
  server: Server,
  shield: ShieldCheck,
  telemetry: Gauge,
  truck: Truck,
  users: UsersRound,
  warehouse: Warehouse,
};

export function SectorIcon({
  name,
  className,
}: {
  name: IndustryIconKey;
  className?: string;
}) {
  const Icon = sectorIcons[name];
  return <Icon className={className} aria-hidden="true" />;
}
