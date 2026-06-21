/* Interwoven-arrow knot motif echoing the BATIVILLE logo mark.
   Shared brand signature used across sections. */
export default function BrandMotif({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <g
        stroke="currentColor"
        className="text-olive"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M40 130 C40 90 70 70 100 90 C130 110 160 90 160 60" />
        <path d="M40 70 C40 110 70 130 100 110 C130 90 160 110 160 140" />
      </g>
      <g
        stroke="currentColor"
        className="text-gold"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M70 150 L150 50" />
        <path d="M120 50 L150 50 L150 80" />
      </g>
    </svg>
  );
}
