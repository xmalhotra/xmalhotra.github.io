import { useEffect, useRef } from 'react'

type Props = {
  title: string
  summary: string
  onClose: () => void
}

export default function PreviewDialog({ title, summary, onClose }: Props) {
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    closeRef.current?.focus()
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/40"
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
      role="presentation"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="preview-title"
        className="bg-paper border border-border w-full max-w-lg flex flex-col gap-5 p-7 shadow-lg"
      >
        {/* Label row */}
        <div className="flex items-center justify-between">
          <span className="font-sans font-semibold text-[11px] text-green uppercase tracking-[0.04em]">
            Editorial draft
          </span>
          <button
            ref={closeRef}
            onClick={onClose}
            aria-label="Close preview"
            className="font-sans font-normal text-ink-muted text-[20px] leading-none hover:text-ink transition-colors"
          >
            ×
          </button>
        </div>

        {/* Divider */}
        <div className="h-px bg-border" />

        {/* Title */}
        <p
          id="preview-title"
          className="font-sans font-semibold text-ink leading-[1.15] text-[22px] sm:text-[26px]"
        >
          {title}
        </p>

        {/* Summary */}
        <p className="font-sans font-normal text-ink-muted leading-[1.5] text-[15px]">
          {summary}
        </p>

        {/* Close action */}
        <div className="flex justify-end pt-1">
          <button
            onClick={onClose}
            className="font-sans font-semibold text-[13px] text-green hover:underline leading-[1.25]"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}
