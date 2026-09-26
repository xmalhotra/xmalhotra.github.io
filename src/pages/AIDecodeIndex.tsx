import { useState } from 'react'
import Sidebar from '../components/Sidebar'
import MobileHeader from '../components/MobileHeader'
import SectionLabel from '../components/SectionLabel'
import Chip from '../components/Chip'
import PreviewDialog from '../components/PreviewDialog'
import { NavigateFn } from '../types'

type ArticleRow = { index: string; title: string; subtitle: string; tag: string }
type Preview = { title: string; summary: string }

const PRACTICE_NOTES: ArticleRow[] = [
  {
    index: '01',
    title: 'Evaluation is a product capability',
    subtitle: 'Why teams need repeatable tests for quality, safety and task completion.',
    tag: 'EVALUATION · DRAFT',
  },
  {
    index: '02',
    title: 'Where retrieval helps—and where it does not',
    subtitle: 'A systems view of grounding, freshness, permissions and failure modes.',
    tag: 'RAG · DRAFT',
  },
  {
    index: '03',
    title: 'Coding copilots inside governed delivery',
    subtitle: 'How assistance changes when code review, compliance and release controls matter.',
    tag: 'WORKFLOW · DRAFT',
  },
  {
    index: '04',
    title: 'Model releases versus workflow change',
    subtitle: 'A filter for separating impressive demos from durable engineering advantage.',
    tag: 'SIGNAL · DRAFT',
  },
]

// The one article that has a full page in this prototype
const FLAGSHIP_TITLE = 'Context engineering for enterprise software teams.'

type ExplainerCard = { eyebrow: string; title: string; summary: string; meta: string }

const EXPLAINERS: ExplainerCard[] = [
  {
    eyebrow: 'AI DECODE / CONTEXT',
    title: FLAGSHIP_TITLE,
    summary: 'A practical framework for connecting models to the knowledge, tools, controls and review loops that real organizations already depend on. Covers the five layers of context, a design loop for enterprise teams, and why a fast answer is not automatically a better outcome.',
    meta: 'Editorial draft · 6 min read',
  },
  {
    eyebrow: 'AI DECODE / AGENTS',
    title: 'Agents need tools, memory and review—not just autonomy.',
    summary: 'A grounded way to reason about agent loops inside governed delivery environments.',
    meta: 'Editorial draft · 8 min read',
  },
]

type Props = { navigate: NavigateFn }

export default function AIDecodeIndex({ navigate }: Props) {
  const [preview, setPreview] = useState<Preview | null>(null)

  return (
    <div className="flex min-h-screen bg-paper">
      <Sidebar activePage="ai-decode" navigate={navigate} />
      <div className="flex flex-col flex-1 min-w-0">
        <MobileHeader activePage="ai-decode" navigate={navigate} />
        <main className="flex-1 flex flex-col gap-12 lg:gap-16 py-10 lg:py-12 px-5 sm:px-10 lg:px-18">

          {/* Top breadcrumb */}
          <div className="flex items-center justify-between text-[12px]">
            <span className="font-sans font-semibold text-green whitespace-nowrap">AI DECODE / WORKING ENGINEER'S FILTER</span>
            <span className="font-sans font-normal text-ink-muted hidden sm:block">Selected work · About · Contact</span>
          </div>

          {/* Hero */}
          <section className="flex flex-col gap-5">
            <SectionLabel label="AI DECODE" />
            <h1 className="font-sans font-semibold text-ink leading-[1.08] text-[38px] sm:text-[48px] lg:text-[58px] max-w-4xl">
              Making fast-moving AI useful for enterprise engineers.
            </h1>
            <p className="font-sans font-normal text-ink-muted leading-[1.5] text-[16px] lg:text-[18px] max-w-3xl">
              Explanations, signals and practice notes on models, agents, context, tools and evaluation—viewed through the constraints of real software delivery.
            </p>
            <div className="flex flex-wrap gap-2">
              <Chip label="Explain" variant="soft" />
              <Chip label="Evaluate" variant="soft" />
              <Chip label="Apply" variant="soft" />
              <Chip label="Govern" variant="soft" />
            </div>
          </section>

          {/* Current signal — opens preview dialog (not the flagship article) */}
          <button
            className="bg-sidebar flex flex-col lg:flex-row gap-8 items-start p-8 lg:p-[38px] w-full text-left hover:opacity-95 transition-opacity"
            onClick={() =>
              setPreview({
                title: 'Context is becoming part of the software architecture.',
                summary:
                  'Useful enterprise AI depends less on a single model choice and more on how knowledge, tools, permissions, memory and review are assembled around it.',
              })
            }
          >
            <div className="flex flex-col gap-4 flex-1 min-w-0">
              <p className="font-sans font-semibold text-[11px] text-light-muted leading-[1.25] uppercase tracking-[0.04em]">
                CURRENT SIGNAL / 01
              </p>
              <h2 className="font-sans font-semibold text-light leading-[1.15] text-[28px] lg:text-[36px] max-w-xl">
                Context is becoming part of the software architecture.
              </h2>
              <p className="font-sans font-normal text-light leading-[1.5] text-[15px] max-w-xl">
                Useful enterprise AI depends less on a single model choice and more on how knowledge, tools, permissions, memory and review are assembled around it.
              </p>
            </div>
            <div className="bg-green flex flex-col gap-2 p-4 lg:p-[18px] shrink-0 w-full lg:w-[256px]">
              {['01  KNOWLEDGE', '02  TOOLS', '03  MEMORY', '04  EVALUATION', '05  HUMAN REVIEW'].map((item) => (
                <p key={item} className="font-sans font-semibold text-[12px] text-light leading-[1.4]">{item}</p>
              ))}
            </div>
          </button>

          {/* Explainers */}
          <section className="flex flex-col gap-4">
            <SectionLabel label="EXPLAINERS" />
            <h2 className="font-sans font-semibold text-ink leading-[1.12] text-[28px] lg:text-[38px] max-w-3xl">
              Start with the concept. End with the engineering consequence.
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {EXPLAINERS.map((card) => {
                const isFlagship = card.title === FLAGSHIP_TITLE
                return (
                  <button
                    key={card.title}
                    onClick={() =>
                      isFlagship
                        ? navigate('article')
                        : setPreview({ title: card.title, summary: card.summary })
                    }
                    className="bg-card border border-border flex flex-col gap-3 p-6 rounded-lg text-left hover:bg-green-soft transition-colors"
                  >
                    <p className="font-sans font-semibold text-[11px] text-green">{card.eyebrow}</p>
                    <p className="font-serif text-ink text-[22px] lg:text-[27px] leading-[1.35]">{card.title}</p>
                    <p className="font-sans font-normal text-ink-muted text-[13px] lg:text-[14px] leading-[1.35]">{card.summary}</p>
                    <p className="font-sans font-normal text-ink-muted text-[12px] leading-[1.35] mt-auto">{card.meta}</p>
                  </button>
                )
              })}
            </div>
          </section>

          {/* Practice notes */}
          <section className="flex flex-col gap-4">
            <SectionLabel label="PRACTICE NOTES" />
            <div className="flex flex-col gap-0">
              {PRACTICE_NOTES.map((a) => (
                <button
                  key={a.index}
                  onClick={() => setPreview({ title: a.title, summary: a.subtitle })}
                  className="bg-card border border-border flex gap-4 lg:gap-6 items-center p-4 lg:p-[22px] w-full text-left hover:bg-green-soft transition-colors -mt-px first:mt-0"
                >
                  <span className="font-sans font-semibold text-[12px] text-green leading-[1.25] w-8 lg:w-10 shrink-0">
                    {a.index}
                  </span>
                  <div className="flex flex-col gap-1 flex-1 min-w-0">
                    <p className="font-sans font-semibold text-ink leading-[1.22] text-[15px] lg:text-[21px]">{a.title}</p>
                    <p className="font-sans font-normal text-ink-muted leading-[1.5] text-[12px] lg:text-[13px]">{a.subtitle}</p>
                  </div>
                  <span className="font-sans font-semibold text-[11px] text-ink-muted leading-[1.3] hidden sm:block shrink-0 w-[130px] text-right">
                    {a.tag}
                  </span>
                  <span className="font-sans font-normal text-ink text-[18px] leading-[1.25] shrink-0">↗</span>
                </button>
              ))}
            </div>
          </section>

          {/* Footer CTA — explicit "flagship article" link navigates to Article Detail */}
          <div className="bg-green-soft flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 lg:p-6">
            <p className="font-sans font-semibold text-ink leading-[1.35] text-[15px] lg:text-[17px] max-w-xl">
              Decode the release. Map the system impact. Test the workflow.
            </p>
            <button
              onClick={() => navigate('article')}
              className="font-sans font-semibold text-[13px] text-green leading-[1.25] whitespace-nowrap hover:underline"
            >
              Read the flagship article →
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
