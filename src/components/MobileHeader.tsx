import { useState } from 'react'
import { NavigateFn, Page } from '../types'

type NavItem = { index: string; label: string; page: Page }

const NAV: NavItem[] = [
  { index: '01', label: 'Home', page: 'home' },
  { index: '02', label: 'Work', page: 'work' },
  { index: '03', label: 'AI Decode', page: 'ai-decode' },
  { index: '04', label: 'Writing', page: 'writing' },
  { index: '05', label: 'Profile', page: 'profile' },
  { index: '06', label: 'Contact', page: 'contact' },
]

type Props = { activePage: Page; navigate: NavigateFn }

export default function MobileHeader({ activePage, navigate }: Props) {
  const [open, setOpen] = useState(false)

  return (
    <header className="lg:hidden bg-paper border-b border-border sticky top-0 z-50">
      <div className="flex items-center justify-between px-5 py-4">
        <span className="font-sans font-semibold text-[20px] text-ink leading-none">GM</span>
        <button
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle navigation"
          className="font-sans font-semibold text-[11px] text-green flex items-center gap-2"
        >
          INDEX {open ? '×' : '≡'}
        </button>
      </div>
      {open && (
        <nav className="border-t border-border bg-paper">
          {NAV.map((item) => {
            const isActive = item.page === activePage || (activePage === 'article' && item.page === 'ai-decode')
            return (
              <button
                key={item.index}
                onClick={() => { navigate(item.page); setOpen(false) }}
                className={`flex gap-4 items-center w-full px-5 py-3 border-b border-border text-left ${
                  isActive ? 'text-green' : 'text-ink'
                }`}
              >
                <span className={`font-sans font-semibold text-[11px] ${isActive ? 'text-green' : 'text-ink-muted'}`}>
                  {item.index}
                </span>
                <span className={`font-sans text-[13px] ${isActive ? 'font-semibold text-green' : 'font-normal'}`}>
                  {item.label}
                </span>
              </button>
            )
          })}
          <div className="px-5 py-4 bg-sidebar">
            <p className="font-sans font-semibold text-[13px] text-light mb-1">Gaurav Malhotra</p>
            <p className="font-sans font-normal text-[11px] text-light">Enterprise software · Guidewire · AI-enabled engineering</p>
          </div>
        </nav>
      )}
    </header>
  )
}
