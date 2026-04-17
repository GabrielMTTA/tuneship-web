interface TuneShipLogoProps {
  className?: string;
}

export function TuneShipLogo({ className }: TuneShipLogoProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="TuneShip logo"
    >
      {/* Chaminé */}
      <rect
        x="7" y="4" width="4" height="5" rx="1"
        stroke="currentColor" strokeWidth="1.5" fill="none"
      />

      {/* Cabine */}
      <rect
        x="4" y="9" width="16" height="6" rx="1.5"
        stroke="currentColor" strokeWidth="1.5" fill="none"
      />

      {/* Casco */}
      <path
        d="M1 15 H31 L29 20 Q16 24 3 20 Z"
        stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="none"
      />

      {/* Onda 1 */}
      <path
        d="M1 26Q5 22.5 9 26Q13 29.5 17 25.5Q21 21.5 25 25Q28 27 31 22"
        stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" fill="none"
      />

      {/* Onda 2 */}
      <path
        d="M3 30Q7 27 11 30Q15 33 19 29Q23 25.5 27 28"
        stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" fill="none"
        opacity="0.6"
      />
    </svg>
  );
}
