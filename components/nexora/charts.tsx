export function MiniLine({ positive = true, id }: { positive?: boolean; id: string }) {
  const stroke = positive ? "#46e6a7" : "#ff647c";
  const gradientId = `mini-${id.replace(/[^a-zA-Z0-9]/g, "")}`;
  const path = positive
    ? "M2 34 L16 28 L28 30 L41 18 L54 24 L69 10 L82 18 L96 8 L110 12"
    : "M2 15 L17 10 L31 19 L45 13 L60 26 L75 21 L91 32 L110 29";

  return (
    <svg viewBox="0 0 112 40" className="mini-line" aria-hidden="true">
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={stroke} stopOpacity=".32" />
          <stop offset="1" stopColor={stroke} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={path} fill="none" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d={`${path} L110 40 L2 40Z`} fill={`url(#${gradientId})`} />
    </svg>
  );
}

export function GrowthChart({ id = "hero", large = false }: { id?: string; large?: boolean }) {
  const areaId = `area-${id}`;
  const lineId = `line-${id}`;

  return (
    <svg className={`growth-chart${large ? " large" : ""}`} viewBox="0 0 520 180" preserveAspectRatio="none" aria-label="Portfolio growth chart">
      <defs>
        <linearGradient id={areaId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#7d66ff" stopOpacity=".42" />
          <stop offset=".58" stopColor="#6047ff" stopOpacity=".1" />
          <stop offset="1" stopColor="#6047ff" stopOpacity="0" />
        </linearGradient>
        <linearGradient id={lineId} x1="0" x2="1">
          <stop stopColor="#9b8aff" />
          <stop offset="1" stopColor="#50d7ff" />
        </linearGradient>
        <filter id={`glow-${id}`} x="-20%" y="-50%" width="140%" height="200%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <path className="chart-area" d="M0 148 C42 136 58 106 101 112 C139 118 151 87 194 94 C235 101 243 54 287 68 C331 82 348 42 389 53 C432 64 450 22 520 16 L520 180 L0 180Z" fill={`url(#${areaId})`} />
      <path className="chart-line" d="M0 148 C42 136 58 106 101 112 C139 118 151 87 194 94 C235 101 243 54 287 68 C331 82 348 42 389 53 C432 64 450 22 520 16" fill="none" stroke={`url(#${lineId})`} strokeWidth="4" strokeLinecap="round" filter={`url(#glow-${id})`} />
    </svg>
  );
}
