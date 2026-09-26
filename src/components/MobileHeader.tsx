import { useEffect, useState } from 'react'
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
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`lg:hidden bg-paper/90 backdrop-blur-md border-b border-border sticky top-0 z-50 transition-shadow duration-300 ${
        scrolled ? 'shadow-[0_2px_16px_rgba(0,0,0,0.06)]' : ''
      }`}
    >
      <div
        className={`flex items-center justify-between px-5 transition-all duration-300 ${
          scrolled ? 'py-2.5' : 'py-4'
        }`}
      >
        <span
          className={`font-sans font-semibold text-ink leading-none transition-all duration-300 ${
            scrolled ? 'text-[16px]' : 'text-[20px]'
          }`}
        >
          GM
        </span>
        <button
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle navigation"
          className="font-sans font-semibold text-[11px] text-green flex items-center gap-2"
        >
          INDEX
          <span
            className="inline-block text-[13px] leading-none transition-transform duration-300"
            style={{ transform: open ? 'rotate(90deg)' : 'rotate(0deg)' }}
          >
            {open ? '×' : '≡'}
          </span>
        </button>
      </div>
      {open && (
        <nav className="menu-panel border-t border-border bg-paper">
          {NAV.map((item, i) => {
            const isActive = item.page === activePage || (activePage === 'article' && item.page === 'ai-decode')
            return (
              <button
                key={item.index}
                onClick={() => { navigate(item.page); setOpen(false) }}
                aria-current={isActive ? 'page' : undefined}
                style={{ animationDelay: `${60 + i * 45}ms` }}
                className={`menu-row flex gap-4 items-center w-full px-5 py-3 border-b border-border text-left transition-colors hover:bg-green-soft active:bg-green-soft ${
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
