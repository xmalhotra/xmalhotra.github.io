import { useState } from 'react'
import Sidebar from '../components/Sidebar'
import MobileHeader from '../components/MobileHeader'
import SectionLabel from '../components/SectionLabel'
import Chip from '../components/Chip'
import PreviewDialog from '../components/PreviewDialog'
import ContextFlow from '../components/ContextFlow'
import CityBand from '../components/CityBand'
import { NavigateFn } from '../types'

type Preview = { title: string; summary: string }

const TOOLS = ['OpenAI', 'Claude', 'Cursor', 'Figma', 'GitHub', 'Next.js', 'Datadog', 'Guidewire', 'REST APIs', 'Automation']

const WORK_ROWS = [
  {
    index: 'A1',
    title: 'Guidewire Cloud modernization',
    description: 'Refactoring, product-model work, batch stabilization and production readiness.',
  },
  {
    index: 'A2',
    title: 'Document integrations',
    description: 'SmartComm / LenderDoc integrations with large payload reductions and cleaner downstream flows.',
  },
  {
    index: 'A3',
    title: 'Performance & observability',
    description: 'Database profiling, submission-start improvements, Splunk / Datadog and system-health work.',
  },
  {
    index: 'A4',
    title: 'Delivery leadership',
    description: 'Client-facing scoping, offshore leadership, mentoring and turning ambiguity into shippable plans.',
  },
]

type Props = { navigate: NavigateFn }

export default function Home({ navigate }: Props) {
  const [preview, setPreview] = useState<Preview | null>(null)

  return (
    <div className="flex min-h-screen bg-paper">
      <Sidebar activePage="home" navigate={navigate} />
      <div className="flex flex-col flex-1 min-w-0">
        <MobileHeader activePage="home" navigate={navigate} />

        <main className="flex-1 flex flex-col">

          {/* ── Top bar ── */}
          <div className="flex items-center justify-between px-7 lg:px-12 py-5 border-b border-border">
            <span className="font-sans font-semibold text-[12px] text-ink tracking-[0.04em]">ENTERPRISE ENGINEERING × AI</span>
            <span className="font-sans font-normal text-[12px] text-ink-muted hidden sm:block">
              Selected writing · Current experiments · About
            </span>
          </div>

          {/* ── Hero ── */}
          <section className="flex flex-col gap-5 px-7 lg:px-12 py-12 lg:py-14 bg-paper">
            <SectionLabel label="WELCOME" />
            <h1 className="font-sans font-semibold text-ink leading-[1.25] text-[36px] sm:text-[48px] lg:text-[58px] max-w-5xl">
              I build large enterprise systems — and study how AI changes the way we build them.
            </h1>
            <p className="font-sans font-normal text-ink-muted leading-[1.5] text-[16px] lg:text-[18px] max-w-4xl">
              Seven years across Guidewire, cloud integrations, performance and delivery leadership. Now I'm documenting the shift from traditional software work to AI-enabled engineering: tools, workflows, context, evaluation and what actually matters in production.
            </p>
            <div className="flex flex-wrap gap-6 pt-1">
              <button
                onClick={() => navigate('work')}
                className="font-sans font-semibold text-[13px] text-green leading-[1.25] hover:underline"
              >
                View selected work →
              </button>
              <button
                onClick={() => navigate('ai-decode')}
                className="font-sans font-semibold text-[13px] text-green leading-[1.25] hover:underline"
              >
                Read AI Decode →
              </button>
              <button
                onClick={() => navigate('profile')}
                className="font-sans font-semibold text-[13px] text-green leading-[1.25] hover:underline"
              >
                About me →
              </button>
            </div>
          </section>

          {/* ── City Band ── */}
          <CityBand />

          {/* ── Live Workbench ── */}
          <section className="bg-sidebar flex flex-col lg:flex-row min-h-[340px]">
            {/* Intro column */}
            <div className="flex flex-col gap-5 px-7 lg:px-10 py-10 lg:py-12 lg:w-[380px] shrink-0">
              <p className="font-sans font-semibold text-[11px] text-green uppercase tracking-[0.04em]">WORKSPACE · LIVE</p>
              <h2 className="font-sans font-semibold text-light leading-[1.25] text-[28px] lg:text-[34px] max-w-xs">
                What I'm testing right now.
              </h2>
              <p className="font-sans font-normal text-light leading-[1.5] text-[14px] max-w-xs">
                A living workbench for prompts, architecture notes, enterprise patterns and agent workflows.
              </p>
            </div>
            {/* Console column */}
            <div className="flex flex-col gap-4 px-7 lg:px-10 py-10 lg:py-12 flex-1 min-w-0">
              <p className="font-sans font-semibold text-[12px] text-green font-mono">$ current-focus</p>
              <p className="font-sans font-semibold text-light text-[18px] lg:text-[20px]">
                Context engineering for enterprise teams
              </p>
              <div className="flex flex-col gap-2">
                {[
                  '01  Map a real delivery workflow',
                  '02  Identify where models need tools, memory and review',
                  '03  Prototype the smallest useful agent loop',
                  '04  Measure whether it actually removes work',
                ].map((line) => (
                  <p key={line} className="font-sans font-normal text-light text-[13px]">{line}</p>
                ))}
              </div>
              <p className="font-sans font-semibold text-[12px] text-green">status: exploring / writing / building</p>
              <button
                onClick={() =>
                  setPreview({
                    title: 'Why enterprise AI needs better context, not just bigger models.',
                    summary: 'An exploration of how context architecture — not model scale — determines whether AI workflows are actually useful in enterprise settings.',
                  })
                }
                className="font-sans font-normal text-light text-[14px] text-left hover:text-green-soft transition-colors"
              >
                Next note → Why enterprise AI needs better context, not just bigger models.
              </button>
            </div>
          </section>

          {/* ── Three focus tracks ── */}
          <section className="flex flex-col gap-6 px-7 lg:px-12 py-12 lg:py-14 bg-paper">
            <SectionLabel label="PRIMARILY FOCUSED ON" />
            <h2 className="font-sans font-semibold text-ink leading-[1.25] text-[28px] lg:text-[38px]">
              Three tracks that sharpen each other.
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {
                  num: '01',
                  title: 'Enterprise Engineering',
                  body: 'Guidewire, integrations, performance, observability and delivery at scale.',
                  action: () => navigate('work'),
                },
                {
                  num: '02',
                  title: 'AI Decode',
                  body: 'Filtering fast-moving AI developments into practical context for working engineers.',
                  action: () => navigate('ai-decode'),
                },
                {
                  num: '03',
                  title: 'Experiments',
                  body: 'Small prototypes that test how agents, tools and new workflows behave in real software work.',
                  action: () =>
                    setPreview({
                      title: 'Experiments',
                      summary: 'Small prototypes testing agents, tools and new workflows in real software contexts. Currently exploring context engineering for enterprise delivery.',
                    }),
                },
              ].map((track) => (
                <button
                  key={track.num}
                  onClick={track.action}
                  className="bg-card border border-border flex flex-col gap-3 p-5 text-left hover:bg-green-soft transition-colors"
                >
                  <p className="font-sans font-semibold text-[12px] text-green">{track.num}</p>
                  <p className="font-sans font-semibold text-ink text-[20px] lg:text-[23px] leading-[1.25]">{track.title}</p>
                  <p className="font-sans font-normal text-ink-muted text-[14px] leading-[1.5]">{track.body}</p>
                </button>
              ))}
            </div>
          </section>

          {/* ── Metrics ── */}
          <section className="flex flex-col gap-6 px-7 lg:px-12 py-12 lg:py-14 bg-green-soft">
            <SectionLabel label="BY THE NUMBERS" />
            <h2 className="font-sans font-semibold text-ink leading-[1.25] text-[28px] lg:text-[36px]">
              The work, counted instead of over-described.
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { value: '7+', desc: 'Years in enterprise software' },
                { value: '4', desc: 'P&C lines / multi-state delivery' },
                { value: '500%', desc: 'Submission-init improvement on a key optimization' },
                { value: '1', desc: 'Current obsession: AI-enabled engineering' },
              ].map((m) => (
                <div key={m.value} className="bg-paper border border-border flex flex-col gap-2 p-4">
                  <p className="font-sans font-semibold text-ink text-[36px] lg:text-[44px] leading-[1.2]">{m.value}</p>
                  <p className="font-sans font-normal text-ink-muted text-[13px] leading-[1.4]">{m.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── Selected Work ── */}
          <section className="flex flex-col gap-5 px-7 lg:px-12 py-12 lg:py-14 bg-paper">
            <SectionLabel label="SELECTED WORK" />
            <h2 className="font-sans font-semibold text-ink leading-[1.25] text-[28px] lg:text-[38px]">
              Enterprise systems, expressed as problems solved.
            </h2>
            <div className="flex flex-col gap-0">
              {WORK_ROWS.map((row) => (
                <button
                  key={row.index}
                  onClick={() => navigate('work')}
                  className="border-t border-border flex gap-4 lg:gap-6 items-center px-3 py-4 lg:py-5 w-full text-left hover:bg-green-soft transition-colors last:border-b"
                >
                  <span className="font-sans font-semibold text-[12px] text-green w-8 shrink-0">{row.index}</span>
                  <div className="flex flex-col gap-1 flex-1 min-w-0">
                    <p className="font-sans font-semibold text-ink text-[17px] lg:text-[20px] leading-[1.25]">{row.title}</p>
                    <p className="font-sans font-normal text-ink-muted text-[13px] leading-[1.35]">{row.description}</p>
                  </div>
                  <span className="font-sans font-normal text-ink text-[18px] shrink-0">↗</span>
                </button>
              ))}
            </div>
          </section>

          {/* ── AI Practice ── */}
          <section className="bg-sidebar flex flex-col gap-6 px-7 lg:px-12 py-12 lg:py-14">
            <SectionLabel label="AI IS PART OF HOW I WORK" />
            <h2 className="font-sans font-semibold text-light leading-[1.25] text-[28px] lg:text-[38px] max-w-4xl">
              Not a novelty. A daily engineering practice.
            </h2>
            <p className="font-sans font-normal text-light leading-[1.5] text-[15px] max-w-3xl">
              Models are only one layer. The useful part is how they connect to context, tools, evaluation and existing systems.
            </p>
            <div className="py-1">
              <ContextFlow inverted />
            </div>
            <div className="flex flex-wrap gap-2">
              {TOOLS.map((tool) => (
                <Chip key={tool} label={tool} variant="dark" />
              ))}
            </div>

            {/* Latest AI Decode */}
            <p className="font-sans font-semibold text-[11px] text-green uppercase tracking-[0.04em] mt-2">LATEST AI DECODE</p>
            <button
              onClick={() =>
                setPreview({
                  title: 'AI coding agents are changing what it means to be a senior engineer.',
                  summary: 'What changes when implementation becomes cheaper and directing systems becomes more important.',
                })
              }
              className="bg-card border border-border flex flex-col gap-3 p-6 rounded-lg text-left max-w-md hover:bg-green-soft transition-colors"
            >
              <p className="font-sans font-semibold text-[11px] text-green">AI DECODE / EXPLORATION</p>
              <p className="font-serif text-ink text-[20px] lg:text-[24px] leading-[1.35]">
                AI coding agents are changing what it means to be a senior engineer.
              </p>
              <p className="font-sans font-normal text-ink-muted text-[14px] leading-[1.35]">
                What changes when implementation becomes cheaper and directing systems becomes more important.
              </p>
              <p className="font-sans font-normal text-ink-muted text-[12px]">Editorial draft · Exploration</p>
            </button>
          </section>

          {/* ── Profile + Contact split ── */}
          <div className="flex flex-col lg:flex-row">
            {/* Profile */}
            <section className="flex flex-col gap-4 px-7 lg:px-12 py-12 lg:py-14 bg-paper flex-1">
              <SectionLabel label="PROFILE" />
              <h2 className="font-sans font-semibold text-ink leading-[1.25] text-[24px] lg:text-[31px] max-w-lg">
                Tech Lead building enterprise software — and an evolving body of work on AI-enabled engineering.
              </h2>
              <p className="font-sans font-normal text-ink-muted leading-[1.5] text-[14px] max-w-md">
                Writing, experiments and practical notes for engineers trying to understand where AI fits into real systems.
              </p>
              <button
                onClick={() => navigate('profile')}
                className="font-sans font-semibold text-[13px] text-green leading-[1.25] hover:underline text-left mt-2"
              >
                Full profile →
              </button>
            </section>

            {/* Contact */}
            <section className="bg-green flex flex-col gap-4 px-7 lg:px-12 py-12 lg:py-14 lg:w-[480px] shrink-0">
              <p className="font-sans font-semibold text-[11px] text-light uppercase tracking-[0.04em]">CONTACT</p>
              <h2 className="font-sans font-semibold text-light leading-[1.25] text-[22px] lg:text-[28px] max-w-sm">
                Let's talk enterprise systems, AI workflows, or technical consulting.
              </h2>
              <a
                href="https://www.linkedin.com/in/gaurmalhotra"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans font-medium text-light text-[14px] hover:underline"
              >
                LinkedIn →
              </a>
            </section>
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
