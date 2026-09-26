import { useState } from 'react'
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
  const [showLoader, setShowLoader] = useState(true)

  const navigate: NavigateFn = (p) => {
    setPage(p)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

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
      <div key={page} className="page-enter">
        {pageEl}
      </div>
    </>
  )
}
