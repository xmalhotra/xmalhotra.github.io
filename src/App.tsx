import { useLayoutEffect, useState } from 'react'
import type { AnimationEvent } from 'react'
import { Page, NavigateFn } from './types'
import Home from './pages/Home'
import Work from './pages/Work'
import AIDecodeIndex from './pages/AIDecodeIndex'
import WritingIndex from './pages/WritingIndex'
import Profile from './pages/Profile'
import Contact from './pages/Contact'
import ArticleDetail from './pages/ArticleDetail'
import PerfCaseStudy from './pages/PerfCaseStudy'
import Loader from './components/Loader'

export default function App() {
  const [page, setPage] = useState<Page>('home')
  const [pending, setPending] = useState<Page | null>(null)
  const [showLoader, setShowLoader] = useState(true)

  const navigate: NavigateFn = (p) => {
    if (p === page || pending) return
    setPending(p) // triggers exit animation on the current page
  }

  // When the exit animation completes, swap to the pending page at the top.
  const handleAnimEnd = (e: AnimationEvent<HTMLDivElement>) => {
    if (e.target !== e.currentTarget) return // ignore bubbling child animations
    if (pending) {
      window.scrollTo({ top: 0 })
      setPage(pending)
      setPending(null)
    }
  }

  // Hero word-by-word reveal + mobile staggered scroll-reveal, per page.
  useLayoutEffect(() => {
    if (typeof window === 'undefined') return
    if (pending) return // don't rig reveals on the outgoing page
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) return
    const isMobile = window.matchMedia('(max-width: 1023px)').matches

    // Word-by-word reveal on the primary heading (all viewports).
    const h1 = document.querySelector<HTMLHeadingElement>('.page-enter main h1')
    if (h1 && !h1.dataset.split && h1.textContent) {
      h1.dataset.split = '1'
      const words = h1.textContent.split(/(\s+)/)
      h1.textContent = ''
      words.forEach((w) => {
        if (/^\s+$/.test(w)) {
          h1.appendChild(document.createTextNode(w))
          return
        }
        const span = document.createElement('span')
        span.className = 'word-reveal'
        span.textContent = w
        h1.appendChild(span)
      })
      h1.querySelectorAll<HTMLElement>('.word-reveal').forEach((el, i) => {
        el.style.animationDelay = `${100 + i * 42}ms`
      })
    }

    if (!isMobile) return

    // Block-level scroll-reveal for sections (skip the hero — it has word reveal).
    const els = Array.from(
      document.querySelectorAll<HTMLElement>('.page-enter main > *'),
    ).filter((el) => !el.querySelector('h1'))
    if (els.length === 0) return
    els.forEach((el) => el.classList.add('reveal-init'))

    const io = new IntersectionObserver(
      (entries, obs) => {
        entries
          .filter((e) => e.isIntersecting)
          .forEach((entry, i) => {
            const el = entry.target as HTMLElement
            el.style.animationDelay = `${Math.min(i, 6) * 70}ms`
            el.classList.remove('reveal-init')
            el.classList.add('reveal-in')
            obs.unobserve(el)
          })
      },
      { threshold: 0.06, rootMargin: '0px 0px -6% 0px' },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [page, pending])

  const pageEl = (() => {
    switch (page) {
      case 'home':           return <Home navigate={navigate} />
      case 'work':           return <Work navigate={navigate} />
      case 'ai-decode':      return <AIDecodeIndex navigate={navigate} />
      case 'writing':        return <WritingIndex navigate={navigate} />
      case 'profile':        return <Profile navigate={navigate} />
      case 'contact':        return <Contact navigate={navigate} />
      case 'article':        return <ArticleDetail navigate={navigate} />
      case 'perf-case-study': return <PerfCaseStudy navigate={navigate} />
    }
  })()

  return (
    <>
      {showLoader && <Loader onDone={() => setShowLoader(false)} />}
      <div
        key={page}
        className={pending ? 'page-exit' : 'page-enter'}
        onAnimationEnd={handleAnimEnd}
      >
        {pageEl}
      </div>
    </>
  )
}
