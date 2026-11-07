import Link from "next/link";
import { FaAmazon, FaApple, FaMicrosoft } from "react-icons/fa6";
import { SiNvidia, SiTesla } from "react-icons/si";
import type { IconType } from "react-icons";

const companyIcons: Record<string, IconType> = {
  NVDA: SiNvidia,
  AAPL: FaApple,
  MSFT: FaMicrosoft,
  TSLA: SiTesla,
  AMZN: FaAmazon,
};

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="#top" className={`brand-logo${compact ? " compact" : ""}`} aria-label="Nexora home">
      <span className="brand-mark" aria-hidden="true">N</span>
      <span className="brand-word">Nexora</span>
    </Link>
  );
}

export function CompanyLogo({
  symbol,
  color,
  compact = false,
}: {
  symbol: string;
  color: string;
  compact?: boolean;
}) {
  const Icon = companyIcons[symbol];

  return (
    <i className={`company-logo${compact ? " compact" : ""}`} style={{ color }} aria-hidden="true">
      {Icon ? <Icon /> : symbol.slice(0, 2)}
    </i>
  );
}
