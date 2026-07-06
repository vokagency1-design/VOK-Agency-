export default function Seal({ size = 96 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      className="animate-seal-rotate"
      aria-hidden="true"
    >
      <circle cx="60" cy="60" r="58" fill="none" stroke="#C9A227" strokeWidth="0.75" opacity="0.5" />
      <circle cx="60" cy="60" r="50" fill="none" stroke="#C9A227" strokeWidth="0.5" opacity="0.35" />
      <defs>
        <path id="seal-arc" d="M 60,60 m -42,0 a 42,42 0 1,1 84,0 a 42,42 0 1,1 -84,0" />
      </defs>
      <text fill="#C9A227" fontSize="9" letterSpacing="4" opacity="0.85">
        <textPath href="#seal-arc" startOffset="0%">
          VOK LEGAL AGENCY · ERBIL · KURDISTAN · VOK LEGAL AGENCY · ERBIL · KURDISTAN ·
        </textPath>
      </text>
    </svg>
  );
}
