import { useEffect } from 'react'

type Props = { onDone: () => void }

export default function Loader({ onDone }: Props) {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const t = setTimeout(onDone, reduced ? 0 : 480)
    return () => clearTimeout(t)
  }, [onDone])

  const reduced =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduced) return null

  return (
    <div className="loader-overlay" role="status" aria-label="Portfolio loading">
      <div className="flex flex-col items-center gap-4">
        <span
          className="loader-gm font-sans font-semibold text-ink"
          style={{ fontSize: 38, lineHeight: 1, letterSpacing: '-0.02em' }}
          aria-hidden="true"
        >
          GM
        </span>
        <svg width="64" height="2" viewBox="0 0 64 2" aria-hidden="true" focusable="false">
          <line
            x1="0" y1="1" x2="64" y2="1"
            stroke="#1e6b47"
            strokeWidth="2"
            strokeLinecap="round"
            className="loader-line-stroke"
          />
        </svg>
      </div>
    </div>
  )
}
