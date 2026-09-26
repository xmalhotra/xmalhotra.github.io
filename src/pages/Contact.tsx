import Sidebar from '../components/Sidebar'
import MobileHeader from '../components/MobileHeader'
import SectionLabel from '../components/SectionLabel'
import { NavigateFn } from '../types'

type Props = { navigate: NavigateFn }

export default function Contact({ navigate }: Props) {
  return (
    <div className="flex min-h-screen bg-paper">
      <Sidebar activePage="contact" navigate={navigate} />
      <div className="flex flex-col flex-1 min-w-0">
        <MobileHeader activePage="contact" navigate={navigate} />
        <main className="flex-1 flex flex-col">

          {/* Top content area */}
          <div className="flex flex-col lg:flex-row flex-1">

            {/* Left: context */}
            <div className="flex flex-col gap-6 px-7 lg:px-12 py-12 lg:py-16 flex-1">
              <SectionLabel label="CONTACT" />
              <h1 className="font-sans font-semibold text-ink leading-[1.15] text-[34px] sm:text-[44px] lg:text-[52px] max-w-xl">
                Let's talk enterprise systems, AI workflows, or technical consulting.
              </h1>
              <p className="font-sans font-normal text-ink-muted leading-[1.5] text-[16px] lg:text-[17px] max-w-lg">
                Gaurav Malhotra · Hyderabad, IST. Guidewire PolicyCenter Technical Lead, exploring AI-enabled engineering.
              </p>

              {/* Contact links */}
              <div className="flex flex-col gap-4 pt-2">
                <div className="flex flex-col gap-1">
                  <a
                    href="https://www.linkedin.com/in/gaurmalhotra"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-green text-light font-sans font-semibold text-[14px] px-5 py-3 hover:opacity-90 transition-opacity w-fit"
                  >
                    LinkedIn →
                  </a>
                  <p className="font-sans font-normal text-ink-muted text-[12px]">
                    linkedin.com/in/gaurmalhotra
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <a
                    href="mailto:gaurav.malhotra.w@gmail.com"
                    className="inline-flex items-center gap-2 bg-paper border border-border text-ink font-sans font-semibold text-[14px] px-5 py-3 hover:bg-green-soft transition-colors w-fit"
                  >
                    Email →
                  </a>
                  <p className="font-sans font-normal text-ink-muted text-[12px]">
                    gaurav.malhotra.w@gmail.com
                  </p>
                </div>
              </div>
            </div>

            {/* Right: green panel */}
            <div className="bg-green flex flex-col gap-6 px-7 lg:px-12 py-12 lg:py-16 lg:w-[440px] shrink-0">
              <p className="font-sans font-semibold text-[11px] text-light uppercase tracking-[0.04em]">WHAT TO REACH OUT ABOUT</p>
              <div className="flex flex-col gap-5">
                {[
                  {
                    heading: 'Guidewire consulting',
                    body: 'PolicyCenter configuration, cloud readiness, integrations, performance, or delivery processes.',
                  },
                  {
                    heading: 'AI-enabled engineering',
                    body: 'Context architecture, evaluation frameworks, agent workflows, or how AI fits inside governed delivery.',
                  },
                  {
                    heading: 'Technical leadership',
                    body: 'Scoping complex programs, offshore coordination, or building reliable incremental delivery.',
                  },
                ].map((item) => (
                  <div key={item.heading} className="border-t border-[#2d8a5f] pt-4">
                    <p className="font-sans font-semibold text-light text-[15px] leading-[1.25] mb-1">{item.heading}</p>
                    <p className="font-sans font-normal text-light text-[14px] leading-[1.5] opacity-90">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Bottom strip */}
          <div className="bg-green-soft flex flex-col sm:flex-row items-start sm:items-center justify-end gap-4 px-7 lg:px-12 py-6">
            <div className="flex gap-5">
              <button
                onClick={() => navigate('work')}
                className="font-sans font-semibold text-[13px] text-green hover:underline"
              >
                Work
              </button>
              <button
                onClick={() => navigate('writing')}
                className="font-sans font-semibold text-[13px] text-green hover:underline"
              >
                Writing
              </button>
              <button
                onClick={() => navigate('ai-decode')}
                className="font-sans font-semibold text-[13px] text-green hover:underline"
              >
                AI Decode
              </button>
            </div>
          </div>

        </main>
      </div>
    </div>
  )
}
