@import "tailwindcss";

@theme {
  --color-sapin: #12382b;
  --color-signal: #ff5a1f;
  --color-papier: #f6f2e8;
  --color-encre: #1c1f1d;
  --color-trait: #d9d3c4;
  --font-titre: var(--font-bricolage), system-ui, sans-serif;
  --font-texte: var(--font-instrument), system-ui, sans-serif;
}

body { background: var(--color-papier); color: var(--color-encre); font-family: var(--font-texte); }

.rayures {
  background-image: repeating-linear-gradient(135deg, transparent 0 6px, rgba(18,56,43,.18) 6px 8px);
}
.remplit { transform-origin: left; animation: remplit 1.1s .6s cubic-bezier(.3,.7,.2,1) both; }
@keyframes remplit { from { transform: scaleX(0); } to { transform: scaleX(1); } }
@media (prefers-reduced-motion: reduce) { .remplit { animation: none; } }
