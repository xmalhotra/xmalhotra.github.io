import { useState } from 'react'
import Sidebar from '../components/Sidebar'
import MobileHeader from '../components/MobileHeader'
import SectionLabel from '../components/SectionLabel'
import Chip from '../components/Chip'
import PreviewDialog from '../components/PreviewDialog'
import { NavigateFn } from '../types'

type ArticleRow = { index: string; title: string; subtitle: string; tag: string }
type Preview = { title: string; summary: string }

const ARTICLES: ArticleRow[] = [
  {
    index: '01',
    title: 'Modernizing Guidewire without losing delivery momentum',
    subtitle: 'A field note on sequencing platform change while keeping teams and releases moving.',
    tag: 'FIELD NOTE · DRAFT',
  },
  {
    index: '02',
    title: 'Performance work starts with better questions',
    subtitle: 'How profiling, observability and disciplined measurement turn slow systems into tractable problems.',
    tag: 'ENGINEERING · DRAFT',
  },
  {
    index: '03',
    title: 'Document integrations are architecture, not plumbing',
    subtitle: 'What large payloads, generated documents and downstream dependencies reveal about system design.',
    tag: 'INTEGRATIONS · DRAFT',
  },
  {
    index: '04',
    title: 'Leading distributed teams through ambiguity',
    subtitle: 'Ways to turn uncertain scope into decisions, ownership and shippable increments.',
    tag: 'LEADERSHIP · DRAFT',
  },
]

type Props = { navigate: NavigateFn }

export default function WritingIndex({ navigate }: Props) {
  const [preview, setPreview] = useState<Preview | null>(null)

  return (
    <div className="flex min-h-screen bg-paper">
      <Sidebar activePage="writing" navigate={navigate} />
      <div className="flex flex-col flex-1 min-w-0">
        <MobileHeader activePage="writing" navigate={navigate} />
        <main className="flex-1 flex flex-col gap-12 lg:gap-16 py-10 lg:py-12 px-5 sm:px-10 lg:px-18">

          {/* Top breadcrumb */}
          <div className="flex items-center justify-between text-[12px]">
            <span className="font-sans font-semibold text-green whitespace-nowrap">WRITING / FIELD NOTES</span>
            <span className="font-sans font-normal text-ink-muted hidden sm:block">Selected work · About · Contact</span>
          </div>

          {/* Hero */}
          <section className="flex flex-col gap-5">
            <SectionLabel label="WRITING" />
            <h1 className="font-sans font-semibold text-ink leading-[1.08] text-[38px] sm:text-[48px] lg:text-[58px] max-w-4xl">
              Notes from building and leading enterprise software.
            </h1>
            <p className="font-sans font-normal text-ink-muted leading-[1.5] text-[16px] lg:text-[18px] max-w-3xl">
              Practical essays on Guidewire delivery, performance, integrations, observability and the engineering habits that make complex systems easier to change.
            </p>
            <div className="flex flex-wrap gap-2">
              <Chip label="Enterprise systems" />
              <Chip label="Guidewire" />
              <Chip label="Performance" />
              <Chip label="Delivery leadership" />
            </div>
          </section>

          {/* Featured story — opens preview dialog */}
          <button
            className="bg-sidebar flex flex-col lg:flex-row gap-8 lg:gap-11 items-start p-8 lg:p-11 w-full text-left hover:opacity-95 transition-opacity"
            onClick={() =>
              setPreview({
                title: 'What enterprise engineering taught me about adopting AI responsibly.',
                summary:
                  'The strongest AI workflows begin with the same disciplines as reliable platforms: clear boundaries, observable behavior, useful context and human review.',
              })
            }
          >
            <div className="flex flex-col gap-4 flex-1 min-w-0">
              <p className="font-sans font-semibold text-[11px] text-light-muted leading-[1.25] uppercase tracking-[0.04em]">
                FEATURED FIELD NOTE
              </p>
              <h2 className="font-sans font-semibold text-light leading-[1.15] text-[28px] lg:text-[38px] max-w-lg">
                What enterprise engineering taught me about adopting AI responsibly.
              </h2>
              <p className="font-sans font-normal text-light leading-[1.55] text-[15px] max-w-lg">
                The strongest AI workflows begin with the same disciplines as reliable platforms: clear boundaries, observable behavior, useful context and human review.
              </p>
              <p className="font-sans font-semibold text-[12px] text-light-muted leading-[1.25]">
                Editorial draft · 9 min read
              </p>
            </div>
            <div className="bg-green flex flex-col gap-3 p-5 lg:p-[22px] shrink-0 w-full lg:w-[240px] lg:h-[220px]">
              <p className="font-sans font-semibold text-[11px] text-light leading-[1.25]">ISSUE 01</p>
              <p className="font-sans font-semibold text-light leading-none text-[64px] lg:text-[72px]">01</p>
              <p className="font-sans font-semibold text-[11px] text-light leading-[1.25]">SYSTEMS → PRACTICE</p>
            </div>
          </button>

          {/* Recent writing */}
          <section className="flex flex-col gap-4">
            <SectionLabel label="RECENT WRITING" />
            <h2 className="font-sans font-semibold text-ink leading-[1.12] text-[28px] lg:text-[38px] max-w-3xl">
              Engineering lessons, written while they are still useful.
            </h2>
            <div className="flex flex-col gap-0">
              {ARTICLES.map((a) => (
                <button
                  key={a.index}
                  onClick={() => setPreview({ title: a.title, summary: a.subtitle })}
                  className="bg-card border border-border flex gap-4 lg:gap-6 items-center p-4 lg:p-[22px] w-full text-left hover:bg-green-soft transition-colors -mt-px first:mt-0"
                >
                  <span className="font-sans font-semibold text-[12px] text-green leading-[1.25] w-8 lg:w-10 shrink-0">
                    {a.index}
                  </span>
                  <div className="flex flex-col gap-1 flex-1 min-w-0">
                    <p className="font-sans font-semibold text-ink leading-[1.22] text-[15px] lg:text-[21px]">
                      {a.title}
                    </p>
                    <p className="font-sans font-normal text-ink-muted leading-[1.5] text-[12px] lg:text-[13px]">
                      {a.subtitle}
                    </p>
                  </div>
                  <span className="font-sans font-semibold text-[11px] text-ink-muted leading-[1.3] hidden sm:block shrink-0 w-[130px] text-right">
                    {a.tag}
                  </span>
                  <span className="font-sans font-normal text-ink text-[18px] leading-[1.25] shrink-0">↗</span>
                </button>
              ))}
            </div>
          </section>

          {/* Footer CTA */}
          <div className="bg-green-soft flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 lg:p-6">
            <p className="font-sans font-normal text-ink leading-[1.4] text-[14px] lg:text-[15px] max-w-xl">
              Writing connects day-to-day delivery with the deeper patterns behind it.
            </p>
            <button
              onClick={() => navigate('ai-decode')}
              className="font-sans font-semibold text-[13px] text-green leading-[1.25] whitespace-nowrap hover:underline"
            >
              Explore AI Decode →
            </button>
          </div>
        </main>
      </div>

      {preview && (
        <PreviewDialog
          title={preview.title}
          summary={preview.summary}
          onClose={() => setPreview(null)}
        />
      )}
    </div>
  )
}
