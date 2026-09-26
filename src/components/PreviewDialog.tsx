import { useEffect, useRef } from 'react'

type Props = {
  title: string
  summary: string
  onClose: () => void
}

export default function PreviewDialog({ title, summary, onClose }: Props) {
  const closeRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Lock body scroll so the sheet is the sole focus while open.
    const prevOverflow = document.body.style.overflow
    const prevActive = document.activeElement as HTMLElement | null
    document.body.style.overflow = 'hidden'

    closeRef.current?.focus()

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
        return
      }
      if (e.key !== 'Tab') return
      // Trap focus within the dialog.
      const focusable = panelRef.current?.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      )
      if (!focusable || focusable.length === 0) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      const active = document.activeElement
      if (e.shiftKey && active === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && active === last) {
        e.preventDefault()
        first.focus()
      }
    }
    document.addEventListener('keydown', handleKey)
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = prevOverflow
      prevActive?.focus?.() // restore focus to the trigger
    }
  }, [onClose])

  return (
    <div
      className="sheet-backdrop fixed inset-0 z-[60] flex items-end justify-center bg-ink/50 sm:items-center sm:p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
      role="presentation"
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="preview-title"
        className="sheet-panel bg-paper border-t border-border sm:border w-full max-w-lg max-h-[88vh] overflow-y-auto flex flex-col gap-5 rounded-t-2xl sm:rounded-none p-6 pt-4 sm:p-7 shadow-[0_-8px_40px_rgba(0,0,0,0.18)] sm:shadow-lg"
      >
        {/* Grab handle — mobile affordance */}
        <div className="sm:hidden flex justify-center -mb-1" aria-hidden="true">
          <span className="h-1 w-10 rounded-full bg-border" />
        </div>

        {/* Label row */}
        <div className="flex items-center justify-between">
          <span className="font-sans font-semibold text-[11px] text-green uppercase tracking-[0.04em]">
            Editorial draft
          </span>
          <button
            ref={closeRef}
            onClick={onClose}
            aria-label="Close preview"
            className="font-sans font-normal text-ink-muted text-[22px] leading-none hover:text-ink hover:rotate-90 transition-transform"
          >
            ×
          </button>
        </div>

        {/* Divider */}
        <div className="h-px bg-border" />

        {/* Title */}
        <h2
          id="preview-title"
          className="font-sans font-semibold text-ink leading-[1.15] text-[22px] sm:text-[26px]"
        >
          {title}
        </h2>

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
