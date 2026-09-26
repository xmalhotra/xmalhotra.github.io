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

export default function Sidebar({ activePage, navigate }: Props) {
  return (
    <aside className="bg-sidebar hidden lg:flex flex-col gap-[18px] h-screen items-start p-7 shrink-0 w-[280px] sticky top-0 overflow-y-auto">
      <div className="flex flex-col gap-1 text-light w-full">
        <p className="font-sans font-semibold text-[24px] leading-[1.25] whitespace-nowrap">GM</p>
        <p className="font-sans font-semibold text-[13px] leading-[1.25] whitespace-nowrap">Gaurav Malhotra</p>
        <p className="font-sans font-normal text-[11px] leading-[1.4] w-[210px]">
          Enterprise software · Guidewire · AI-enabled engineering
        </p>
      </div>
      <nav className="flex flex-col gap-2 w-full">
        {NAV.map((item) => {
          const isActive = item.page === activePage || (activePage === 'article' && item.page === 'ai-decode')
          return (
            <button
              key={item.index}
              onClick={() => navigate(item.page)}
              aria-current={isActive ? 'page' : undefined}
              className={`relative flex gap-3 h-10 items-center px-3 py-2 rounded-lg w-full text-left bg-paper transition-colors active:scale-[0.98] ${
                isActive ? '' : 'hover:bg-green-soft'
              }`}
            >
              <span
                aria-hidden="true"
                className={`absolute left-0 top-1/2 -translate-y-1/2 w-[3px] rounded-full bg-green transition-all duration-300 ${
                  isActive ? 'h-5 opacity-100' : 'h-0 opacity-0'
                }`}
              />
              <span className={`font-sans font-semibold text-[11px] ${isActive ? 'text-green' : 'text-ink-muted'}`}>
                {item.index}
              </span>
              <span className={`font-sans text-[12px] ${isActive ? 'font-semibold text-green' : 'font-normal text-ink'}`}>
                {item.label}
              </span>
            </button>
          )
        })}
      </nav>
      <div className="flex-1" />
      <p className="font-sans font-normal text-[11px] text-light leading-[1.25] whitespace-nowrap">Hyderabad · IST</p>
      <p className="font-sans font-normal text-[11px] text-light leading-[1.45] w-[210px]">
        A working journal on enterprise systems and AI practice.
      </p>
    </aside>
  )
}
