import React from 'react'

const GROUND = 78

function genWins(bx: number, bw: number, bh: number, cols: number, rows: number) {
  const ww = 5
  const gap = 3
  const totalW = cols * ww + (cols - 1) * gap
  const sx = bx + Math.floor((bw - totalW) / 2)
  const sy = GROUND - bh + 6
  const wins: { x: number; y: number; green: boolean }[] = []
  let idx = 0
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      wins.push({ x: sx + c * (ww + gap), y: sy + r * 8, green: (idx * 3 + r * 7 + c * 11) % 17 === 0 })
      idx++
    }
  }
  return wins
}

const BUILDINGS: [number, number, number][] = [
  [0,    76,  48], [78,   30,  62], [111,  52,  42], [166,  24,  68],
  [193,  60,  38], [255,  42,  54], [308,  34,  34], [344,  70,  48],
  [418,  28,  44], [448,  56,  58], [506,  42,  36], [554,  80,  50],
  [637,  36,  60], [676,  52,  42], [730,  66,  64], [800,  32,  36],
  [840,  46,  48], [890,  60,  54], [954,  42,  44], [1000, 50,  60],
  [1054, 38,  40], [1096, 104, 46],
]

const WINS = [
  ...genWins(78,   30, 62, 2, 7),
  ...genWins(166,  24, 68, 1, 8),
  ...genWins(255,  42, 54, 3, 5),
  ...genWins(448,  56, 58, 4, 6),
  ...genWins(554,  80, 50, 5, 5),
  ...genWins(637,  36, 60, 2, 7),
  ...genWins(730,  66, 64, 5, 7),
  ...genWins(890,  60, 54, 4, 5),
  ...genWins(1000, 50, 60, 4, 7),
]

const TREES: [number, number, number, number][] = [
  [330, 62, 7, 9],
  [510, 62, 8, 9],
  [806, 62, 6, 8],
]

// SMIL element aliases — @types/react SVG animation typings are incomplete for these
type AnimXfProps = {
  attributeName: string; type: string; values: string; keyTimes?: string;
  dur: string; repeatCount: string; calcMode?: string; additive?: string;
}
const AnimXf = 'animateTransform' as unknown as React.FC<AnimXfProps>

type AnimProps = {
  attributeName: string; values: string; keyTimes: string;
  dur: string; repeatCount: string; calcMode?: string;
}
const Anim = 'animate' as unknown as React.FC<AnimProps>

export default function CityBand() {
  const reduced =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  return (
    <svg
      viewBox="0 0 1200 90"
      preserveAspectRatio="none"
      role="img"
      aria-labelledby="cb-title"
      className="city-band-svg"
      focusable="false"
    >
      <title id="cb-title">Illustrated city skyline with a small walking figure</title>

      {/* Sky */}
      <rect x={0} y={0} width={1200} height={GROUND} fill="#f3f4ef" aria-hidden="true" />

      {/* Buildings */}
      {BUILDINGS.map(([x, w, h], i) => (
        <rect key={i} x={x} y={GROUND - h} width={w} height={h}
          fill="#f5f6f3" stroke="#bec5bd" strokeWidth="0.75" aria-hidden="true" />
      ))}

      {/* Windows */}
      {WINS.map((win, i) => (
        <rect key={`w${i}`} x={win.x} y={win.y} width={5} height={3}
          fill={win.green ? '#cfe0d5' : '#e2e7e0'} aria-hidden="true" />
      ))}

      {/* Trees */}
      {TREES.map(([tx, cy, rx, ry], i) => (
        <g key={`t${i}`} aria-hidden="true">
          <line x1={tx} y1={cy + ry - 2} x2={tx} y2={GROUND}
            stroke="#aab3a8" strokeWidth="1.5" strokeLinecap="round" />
          <ellipse cx={tx} cy={cy} rx={rx} ry={ry}
            fill="#e6efe4" stroke="#aab3a8" strokeWidth="0.75" />
        </g>
      ))}

      {/* Streetlamp */}
      <g aria-hidden="true">
        <line x1={303} y1={52} x2={303} y2={GROUND} stroke="#bec5bd" strokeWidth="1.25" strokeLinecap="round" />
        <path d="M 303 52 C 301 49 297 47 294 46" fill="none" stroke="#bec5bd" strokeWidth="1" />
        <circle cx={294} cy={45} r={2.5} fill="#eef0ec" stroke="#bec5bd" strokeWidth="0.75" />
        <line x1={294} y1={47.5} x2={294} y2={51} stroke="#d4e0d2" strokeWidth="0.75" strokeDasharray="1 2" />
      </g>

      {/* Sidewalk */}
      <rect x={0} y={GROUND} width={1200} height={12} fill="#e4e8e2" aria-hidden="true" />
      <line x1={0} y1={GROUND} x2={1200} y2={GROUND} stroke="#bec5bd" strokeWidth="0.5" aria-hidden="true" />
      <line x1={0} y1={GROUND + 2} x2={1200} y2={GROUND + 2}
        stroke="#bec5bd" strokeWidth="0.25" strokeDasharray="8 6" aria-hidden="true" />

      {/* ── Walking figure ──
          Position:  x=20 (left edge) → x=1180 (right edge), both within viewBox.
          The jump from 1180 → 20 happens at keyTime 0.9101 ≈ 0.91 (gap ≈ 22 ms),
          and opacity is 0 throughout that window, so no flash is visible.
          Fade-out: 0.88–0.91 (≈0.66 s)  Fade-in: 0.9101–0.96 (≈1.1 s)
          Reduced-motion: no SMIL, figure sits statically at x=200.
      ── */}
      <g
        transform={reduced ? 'translate(200, 0)' : 'translate(20, 0)'}
        aria-hidden="true"
      >
        {/* Horizontal travel */}
        {!reduced && (
          <AnimXf
            attributeName="transform"
            type="translate"
            values="20 0; 20 0; 1180 0; 1180 0; 20 0; 20 0"
            keyTimes="0; 0.05; 0.90; 0.91; 0.9101; 1"
            dur="22s"
            repeatCount="indefinite"
            calcMode="linear"
          />
        )}
        {/* Opacity — fades out at right, jumps back invisible, fades in at left */}
        {!reduced && (
          <Anim
            attributeName="opacity"
            values="1; 1; 1; 0; 0; 1; 1"
            keyTimes="0; 0.05; 0.88; 0.91; 0.9101; 0.96; 1"
            dur="22s"
            repeatCount="indefinite"
            calcMode="linear"
          />
        )}

        {/* Inner group: walking bob */}
        <g>
          {!reduced && (
            <AnimXf
              attributeName="transform"
              type="translate"
              values="0 0; 0 -0.7; 0 0; 0 -0.7; 0 0"
              keyTimes="0; 0.25; 0.5; 0.75; 1"
              dur="0.52s"
              repeatCount="indefinite"
              calcMode="linear"
              additive="sum"
            />
          )}
          {/* Head — r enlarged and darkened for mobile legibility */}
          <circle cx={0} cy={67} r={3.5} fill="#3c4440" />
          {/* Body */}
          <line x1={0} y1={70.5} x2={0} y2={75.5}
            stroke="#3c4440" strokeWidth="1.5" strokeLinecap="round" />
          {/* Legs */}
          <line x1={0} y1={75.5} x2={-3} y2={79.5}
            stroke="#3c4440" strokeWidth="1.5" strokeLinecap="round" />
          <line x1={0} y1={75.5} x2={3} y2={79.5}
            stroke="#3c4440" strokeWidth="1.5" strokeLinecap="round" />
          {/* Arms */}
          <line x1={0} y1={72} x2={-3.5} y2={74.5}
            stroke="#3c4440" strokeWidth="1.2" strokeLinecap="round" />
          <line x1={0} y1={72} x2={3.5} y2={74.5}
            stroke="#3c4440" strokeWidth="1.2" strokeLinecap="round" />
        </g>
      </g>
    </svg>
  )
}
