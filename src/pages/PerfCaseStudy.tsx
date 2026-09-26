import Sidebar from '../components/Sidebar'
import MobileHeader from '../components/MobileHeader'
import SectionLabel from '../components/SectionLabel'
import { NavigateFn } from '../types'

type Props = { navigate: NavigateFn }

export default function PerfCaseStudy({ navigate }: Props) {
  return (
    <div className="flex min-h-screen bg-paper">
      <Sidebar activePage="work" navigate={navigate} />
      <div className="flex flex-col flex-1 min-w-0">
        <MobileHeader activePage="work" navigate={navigate} />
        <main className="flex-1 flex flex-col gap-12 lg:gap-16 py-10 lg:py-12 px-5 sm:px-10 lg:px-18">

          {/* Breadcrumb */}
          <div className="flex items-center justify-between text-[12px]">
            <button
              onClick={() => navigate('work')}
              className="font-sans font-semibold text-green whitespace-nowrap hover:underline"
            >
              ← WORK / A3
            </button>
            <span className="font-sans font-normal text-ink-muted hidden sm:block">Performance &amp; observability</span>
          </div>

          {/* Article header */}
          <section className="flex flex-col gap-4">
            <SectionLabel label="WORK / PERFORMANCE &amp; OBSERVABILITY" />
            <h1 className="font-sans font-semibold text-ink leading-[1.1] text-[30px] sm:text-[40px] lg:text-[52px] max-w-4xl">
              Profiling submission initialization in Guidewire PolicyCenter.
            </h1>
            <p className="font-sans font-normal text-ink-muted leading-[1.5] text-[16px] lg:text-[18px] max-w-3xl">
              A targeted database-query optimization within enterprise P&C delivery.
            </p>
          </section>

          {/* Divider */}
          <div className="h-px bg-border" />

          {/* Scope note */}
          <div className="bg-green-soft border border-border flex flex-col gap-2 p-5 max-w-2xl">
            <p className="font-sans font-semibold text-[11px] text-green uppercase tracking-[0.04em]">SCOPE OF THIS ACCOUNT</p>
            <p className="font-sans font-normal text-ink text-[13px] lg:text-[14px] leading-[1.55]">
              Client and system details are omitted. The 500% figure refers to one targeted optimization, not the entire platform or submission flow. The résumé does not provide a baseline or a breakdown of the implementation.
            </p>
          </div>

          {/* Body */}
          <div className="flex gap-12 items-start">
            <div className="flex flex-col gap-10 flex-1 min-w-0 max-w-3xl">

              {/* Context */}
              <section className="flex flex-col gap-4">
                <p className="font-sans font-semibold text-[11px] text-green uppercase tracking-[0.04em]">CONTEXT</p>
                <div className="h-px bg-border" />
                <p className="font-sans font-normal text-ink text-[15px] lg:text-[16px] leading-[1.7]">
                  Submission initialization was the performance area addressed within Guidewire PolicyCenter. This account focuses on a single optimization in that area. Additional project context and client details are intentionally omitted.
                </p>
              </section>

              {/* Approach */}
              <section className="flex flex-col gap-4">
                <p className="font-sans font-semibold text-[11px] text-green uppercase tracking-[0.04em]">APPROACH</p>
                <div className="h-px bg-border" />
                <p className="font-sans font-normal text-ink text-[15px] lg:text-[16px] leading-[1.7]">
                  My work included database query profiling and targeted performance optimization. The available record does not specify the exact query, code change, or sequence of investigation, so this account does not attribute the result to a particular technical mechanism.
                </p>
              </section>

              {/* Verified result */}
              <section className="flex flex-col gap-5">
                <p className="font-sans font-semibold text-[11px] text-green uppercase tracking-[0.04em]">VERIFIED RESULT</p>
                <div className="h-px bg-border" />
                <p className="font-sans font-normal text-ink text-[15px] lg:text-[16px] leading-[1.7]">
                  My résumé records a 500% improvement in submission initialization performance on a targeted optimization. The figure is scoped to that optimization. It should not be read as an improvement across all PolicyCenter workflows.
                </p>
                <div className="bg-green-soft border border-border flex flex-col gap-1 p-6 max-w-xs">
                  <p className="font-sans font-semibold text-ink text-[48px] leading-[1.1]">500%</p>
                  <p className="font-sans font-normal text-ink-muted text-[13px] leading-[1.4]">
                    Submission-init improvement on a targeted optimization
                  </p>
                </div>
              </section>

              {/* What this illustrates */}
              <section className="flex flex-col gap-4">
                <p className="font-sans font-semibold text-[11px] text-green uppercase tracking-[0.04em]">WHAT THIS ILLUSTRATES</p>
                <div className="h-px bg-border" />
                <p className="font-sans font-normal text-ink text-[15px] lg:text-[16px] leading-[1.7]">
                  The useful lesson is to keep a performance claim as specific as its evidence. Profiling helps frame a measurable problem, and a targeted result is more meaningful when its scope is stated clearly. Separately, my broader observability experience includes Splunk and Datadog; I am not claiming those tools were used for this optimization.
                </p>
              </section>

            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-border" />

          {/* Footer */}
          <div className="bg-green-soft flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 lg:p-6">
            <p className="font-sans font-normal text-ink leading-[1.4] text-[14px] lg:text-[15px] max-w-xl">
              This is a factual experience note. Client and system details are omitted.
            </p>
            <button
              onClick={() => navigate('work')}
              className="font-sans font-semibold text-[13px] text-green leading-[1.25] whitespace-nowrap hover:underline"
            >
              ← Back to Work
            </button>
          </div>

        </main>
      </div>
    </div>
  )
}
