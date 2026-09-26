import Sidebar from '../components/Sidebar'
import MobileHeader from '../components/MobileHeader'
import SectionLabel from '../components/SectionLabel'
import { NavigateFn } from '../types'

type Props = { navigate: NavigateFn }

export default function Profile({ navigate }: Props) {
  return (
    <div className="flex min-h-screen bg-paper">
      <Sidebar activePage="profile" navigate={navigate} />
      <div className="flex flex-col flex-1 min-w-0">
        <MobileHeader activePage="profile" navigate={navigate} />
        <main className="flex-1 flex flex-col gap-12 lg:gap-16 py-10 lg:py-12 px-5 sm:px-10 lg:px-18">

          {/* Breadcrumb */}
          <div className="flex items-center justify-between text-[12px]">
            <span className="font-sans font-semibold text-green">PROFILE</span>
            <span className="font-sans font-normal text-ink-muted hidden sm:block">Gaurav Malhotra · Hyderabad</span>
          </div>

          {/* Hero */}
          <section className="flex flex-col gap-5">
            <SectionLabel label="PROFILE" />
            <h1 className="font-sans font-semibold text-ink leading-[1.08] text-[34px] sm:text-[44px] lg:text-[52px] max-w-3xl">
              Tech Lead building enterprise software — and an evolving body of work on AI-enabled engineering.
            </h1>
            <p className="font-sans font-normal text-ink-muted leading-[1.5] text-[16px] lg:text-[18px] max-w-2xl">
              Writing, experiments and practical notes for engineers trying to understand where AI fits into real systems.
            </p>
          </section>

          <div className="h-px bg-border" />

          {/* Core position */}
          <section className="flex flex-col gap-4 max-w-2xl">
            <p className="font-sans font-semibold text-[11px] text-green uppercase tracking-[0.04em]">CURRENT ROLE</p>
            <h2 className="font-sans font-semibold text-ink text-[22px] lg:text-[26px] leading-[1.25]">
              Guidewire PolicyCenter Technical Lead
            </h2>
            <p className="font-sans font-normal text-ink text-[15px] lg:text-[16px] leading-[1.6]">
              Seven years in enterprise P&C insurance software, working across four lines of business and multi-state Guidewire implementations. Day-to-day work spans PolicyCenter configuration and product-model design, integration architecture, performance investigation, and collaboration with client stakeholders and offshore teams.
            </p>
          </section>

          {/* Capability areas */}
          <section className="flex flex-col gap-6">
            <p className="font-sans font-semibold text-[11px] text-green uppercase tracking-[0.04em]">CAPABILITY AREAS</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  title: 'Configuration & integrations',
                  body: 'PolicyCenter product-model configuration, SmartComm and LenderDoc document generation, REST and SOAP integration patterns, and downstream dependency management.',
                },
                {
                  title: 'Performance & observability',
                  body: 'Database and batch profiling, Guidewire submission-workflow optimization, Splunk and Datadog instrumentation, and building measurable system health into delivery.',
                },
                {
                  title: 'Team & delivery leadership',
                  body: 'Client-facing technical scoping, offshore coordination, engineering mentorship, and translating ambiguous requirements into shippable, release-safe increments.',
                },
                {
                  title: 'AI-enabled engineering',
                  body: 'Exploring how context, tools, evaluation and review loops change what AI workflows can reliably do inside governed enterprise delivery environments.',
                },
              ].map((area) => (
                <div key={area.title} className="bg-card border border-border flex flex-col gap-3 p-5">
                  <p className="font-sans font-semibold text-ink text-[16px] leading-[1.25]">{area.title}</p>
                  <p className="font-sans font-normal text-ink-muted text-[14px] leading-[1.5]">{area.body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* AI exploration */}
          <section className="bg-sidebar flex flex-col gap-5 p-7 lg:p-10">
            <p className="font-sans font-semibold text-[11px] text-green uppercase tracking-[0.04em]">CURRENT EXPLORATION</p>
            <h2 className="font-sans font-semibold text-light text-[20px] lg:text-[24px] leading-[1.25] max-w-xl">
              AI-enabled engineering, studied from inside real delivery.
            </h2>
            <p className="font-sans font-normal text-light text-[15px] leading-[1.5] max-w-2xl">
              The focus isn't on AI as a product — it's on how context, tools, evaluation and review loops determine whether AI workflows are actually useful in production. Writing and experiments live in AI Decode and Writing.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={() => navigate('ai-decode')}
                className="font-sans font-semibold text-[13px] text-green hover:underline"
              >
                AI Decode →
              </button>
              <button
                onClick={() => navigate('writing')}
                className="font-sans font-semibold text-[13px] text-green hover:underline"
              >
                Writing →
              </button>
            </div>
          </section>

          {/* Internal nav links */}
          <section className="flex flex-col gap-4">
            <p className="font-sans font-semibold text-[11px] text-green uppercase tracking-[0.04em]">EXPLORE</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { label: 'Selected Work', desc: 'Four practice areas from seven years in enterprise software.', page: 'work' as const },
                { label: 'Writing', desc: 'Field notes on Guidewire delivery, performance and engineering habits.', page: 'writing' as const },
                { label: 'Contact', desc: 'LinkedIn for enterprise systems, AI workflows, or consulting.', page: 'contact' as const },
              ].map((link) => (
                <button
                  key={link.label}
                  onClick={() => navigate(link.page)}
                  className="bg-card border border-border flex flex-col gap-2 p-5 text-left hover:bg-green-soft transition-colors"
                >
                  <p className="font-sans font-semibold text-ink text-[15px] leading-[1.25]">{link.label} →</p>
                  <p className="font-sans font-normal text-ink-muted text-[13px] leading-[1.4]">{link.desc}</p>
                </button>
              ))}
            </div>
          </section>

        </main>
      </div>
    </div>
  )
}
