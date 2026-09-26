import Sidebar from '../components/Sidebar'
import MobileHeader from '../components/MobileHeader'
import SectionLabel from '../components/SectionLabel'
import { NavigateFn, Page } from '../types'

type Area = {
  index: string
  title: string
  subtitle: string
  body: string
  metric?: { value: string; label: string }
  caseStudy?: Page
}

const AREAS: Area[] = [
  {
    index: 'A1',
    title: 'Guidewire Cloud modernization',
    subtitle: 'PolicyCenter configuration and cloud readiness across four P&C lines.',
    body: 'PolicyCenter configuration, product-model work, and refactoring to Guidewire Cloud recommendations. Included batch stabilization and improving production readiness for multi-state P&C delivery.',
  },
  {
    index: 'A2',
    title: 'SmartComm / LenderDoc document integrations',
    subtitle: 'Large-payload document generation pipelines with measurable size reductions.',
    body: 'SmartComm and LenderDoc integration and document-generation flows, connecting Guidewire policy data to external generation engines. Payload sizes reduced by up to 80% on document requests.',
    metric: { value: 'Up to 80%', label: 'Payload size reduction on document requests' },
  },
  {
    index: 'A3',
    title: 'Performance & observability',
    subtitle: 'Profiling, measurement, and system-health instrumentation.',
    body: 'Database query profiling and submission initialization performance work. A specific optimization improved submission-init performance by 500%. Observability instrumented with Splunk and Datadog.',
    metric: { value: '500%', label: 'Submission-init improvement on a targeted optimization' },
    caseStudy: 'perf-case-study' as Page,
  },
  {
    index: 'A4',
    title: 'Delivery leadership',
    subtitle: 'Scoping, offshore coordination, and turning ambiguity into shippable plans.',
    body: 'Client-facing requirements and scope/timeline estimation, offshore delivery leadership, mentoring, and translating requirements into releasable increments.',
  },
]

type Props = { navigate: NavigateFn }

export default function Work({ navigate }: Props) {
  return (
    <div className="flex min-h-screen bg-paper">
      <Sidebar activePage="work" navigate={navigate} />
      <div className="flex flex-col flex-1 min-w-0">
        <MobileHeader activePage="work" navigate={navigate} />
        <main className="flex-1 flex flex-col gap-12 lg:gap-16 py-10 lg:py-12 px-5 sm:px-10 lg:px-18">

          {/* Breadcrumb */}
          <div className="flex items-center justify-between text-[12px]">
            <span className="font-sans font-semibold text-green">WORK / SELECTED EXPERIENCE</span>
            <span className="font-sans font-normal text-ink-muted hidden sm:block">Enterprise software · Guidewire · AI</span>
          </div>

          {/* Hero */}
          <section className="flex flex-col gap-5">
            <SectionLabel label="SELECTED WORK" />
            <h1 className="font-sans font-semibold text-ink leading-[1.08] text-[34px] sm:text-[44px] lg:text-[52px] max-w-3xl">
              Enterprise systems, expressed as problems solved.
            </h1>
            <p className="font-sans font-normal text-ink-muted leading-[1.5] text-[16px] lg:text-[18px] max-w-2xl">
              Seven years in enterprise P&C software across Guidewire configuration, integrations, performance and delivery leadership. Four practice areas, each with a concrete engineering focus.
            </p>
          </section>

          {/* Practice areas */}
          <div className="flex flex-col gap-0">
            {AREAS.map((area, i) => (
              <div
                key={area.index}
                className={`border-t border-border py-10 lg:py-12 flex flex-col lg:flex-row gap-6 lg:gap-12 ${
                  i === AREAS.length - 1 ? 'border-b' : ''
                }`}
              >
                {/* Left: index + title */}
                <div className="flex flex-col gap-2 lg:w-[280px] shrink-0">
                  <span className="font-sans font-semibold text-[12px] text-green">{area.index}</span>
                  <h2 className="font-sans font-semibold text-ink text-[20px] lg:text-[23px] leading-[1.25]">
                    {area.title}
                  </h2>
                  <p className="font-sans font-normal text-ink-muted text-[13px] leading-[1.4]">
                    {area.subtitle}
                  </p>
                </div>
                {/* Right: body + optional metric */}
                <div className="flex flex-col gap-5 flex-1 min-w-0">
                  <p className="font-sans font-normal text-ink text-[15px] lg:text-[16px] leading-[1.6]">
                    {area.body}
                  </p>
                  {area.metric && (
                    <div className="bg-green-soft border border-border flex flex-col gap-1 p-4 max-w-xs">
                      <p className="font-sans font-semibold text-ink text-[36px] leading-[1.2]">{area.metric.value}</p>
                      <p className="font-sans font-normal text-ink-muted text-[13px] leading-[1.4]">{area.metric.label}</p>
                    </div>
                  )}
                  {area.caseStudy && (
                    <button
                      onClick={() => navigate(area.caseStudy!)}
                      className="font-sans font-semibold text-[13px] text-green hover:underline text-left"
                    >
                      Read the detailed account →
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Footer CTA */}
          <div className="bg-green-soft flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 lg:p-6">
            <p className="font-sans font-normal text-ink leading-[1.4] text-[14px] lg:text-[15px] max-w-xl">
              This is selected experience, not a complete history. The underlying disciplines apply across Guidewire implementations and complex integrations.
            </p>
            <button
              onClick={() => navigate('contact')}
              className="font-sans font-semibold text-[13px] text-green leading-[1.25] whitespace-nowrap hover:underline"
            >
              Get in touch →
            </button>
          </div>

        </main>
      </div>
    </div>
  )
}
