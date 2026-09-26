import { useState } from 'react'
import Sidebar from '../components/Sidebar'
import MobileHeader from '../components/MobileHeader'
import SectionLabel from '../components/SectionLabel'
import Chip from '../components/Chip'
import PreviewDialog from '../components/PreviewDialog'
import { NavigateFn } from '../types'

type Preview = { title: string; summary: string }

const CONTEXT_LAYERS = [
  {
    label: 'Knowledge',
    desc: 'The authoritative documents, system state and domain rules the model needs to reason correctly about the task. Not background reading — source-of-truth material with clear ownership, a known freshness policy and access controls that match the task\'s permission requirements.',
  },
  {
    label: 'Tools',
    desc: 'The APIs and controlled actions that let a workflow inspect or change the world. Read-only tools (query, lookup, summarize) should be wired up before write tools (update, submit, notify). Every tool should have a scope limit and a clear record of what it touched.',
  },
  {
    label: 'Memory',
    desc: 'The task history, user preferences and durable state that should persist across steps or sessions. Memory prevents a workflow from repeating itself, losing intermediate results, or ignoring context it already gathered earlier in the same job.',
  },
  {
    label: 'Evaluation',
    desc: 'Checks for correctness, completeness, safety and useful task outcomes — run before the result reaches a person or triggers downstream action. Evaluation is not a single pass at the end; it belongs at each stage where the workflow can produce a wrong or incomplete answer.',
  },
  {
    label: 'Human review',
    desc: 'Clear escalation points where a person applies judgment, gives approval or takes accountability. Review is not a fallback for when the model fails — it is a designed checkpoint for decisions that carry consequence, ambiguity or regulatory weight.',
  },
]

const LOOP_STEPS = [
  { num: '01', label: 'MAP', active: false },
  { num: '02', label: 'GROUND', active: false },
  { num: '03', label: 'ACT', active: true },
  { num: '04', label: 'CHECK', active: false },
  { num: '05', label: 'LEARN', active: false },
]

const LOOP_DETAIL = [
  {
    label: 'MAP',
    body: 'Where does the existing human workflow make a decision, and what does the decision-maker need to know? Define the success measure for the AI version before writing any code. A faster answer is not automatically a better outcome — define what better means.',
  },
  {
    label: 'GROUND',
    body: 'Which sources of context are permitted for this task? Pull from approved, owned sources only. Start with read access; write access comes after the read-only behavior is understood and tested against representative cases.',
  },
  {
    label: 'ACT',
    body: 'Wire up the smallest useful toolset and run the workflow against representative cases and known edge cases. Record where the model expresses uncertainty or hedges — those are signals, not noise to be suppressed.',
  },
  {
    label: 'CHECK',
    body: 'Run evaluation. Does the output match the success measure defined at the MAP stage? Are source links present and traceable? Would a domain expert sign off on this output without revision?',
  },
  {
    label: 'LEARN',
    body: 'Route consequential steps — anything that changes state, triggers downstream action or requires domain accountability — to a human checkpoint before they proceed. Compare the full loop against the existing human workflow on time and quality, not just speed.',
  },
]

const RELATED = [
  {
    eyebrow: 'AI DECODE / AGENTS',
    title: 'Agents need tools, memory and review—not just autonomy.',
    summary: 'A grounded model for agent loops in enterprise delivery.',
    meta: 'Editorial draft · 8 min read',
  },
  {
    eyebrow: 'AI DECODE / EVALUATION',
    title: 'Evaluation is a product capability.',
    summary: 'Building repeatable checks for AI-assisted work.',
    meta: 'Editorial draft · 7 min read',
  },
]

type Props = { navigate: NavigateFn }

export default function ArticleDetail({ navigate }: Props) {
  const [preview, setPreview] = useState<Preview | null>(null)

  return (
    <div className="flex min-h-screen bg-paper">
      <Sidebar activePage="ai-decode" navigate={navigate} />
      <div className="flex flex-col flex-1 min-w-0">
        <MobileHeader activePage="ai-decode" navigate={navigate} />
        <main className="flex-1 flex flex-col gap-12 lg:gap-16 py-10 lg:py-12 px-5 sm:px-10 lg:px-18">

          {/* Top breadcrumb */}
          <div className="flex items-center justify-between text-[12px]">
            <button
              onClick={() => navigate('ai-decode')}
              className="font-sans font-semibold text-green whitespace-nowrap hover:underline"
            >
              AI DECODE / ARTICLE
            </button>
            <span className="font-sans font-normal text-ink-muted hidden sm:block">Selected work · About · Contact</span>
          </div>

          {/* Article header */}
          <section className="flex flex-col gap-5">
            <SectionLabel label="AI DECODE / CONTEXT ENGINEERING" />
            <h1 className="font-sans font-semibold text-ink leading-[1.08] text-[34px] sm:text-[44px] lg:text-[58px] max-w-4xl">
              Context engineering for enterprise software teams.
            </h1>
            <p className="font-sans font-normal text-ink-muted leading-[1.5] text-[16px] lg:text-[18px] max-w-3xl">
              A practical framework for connecting models to the knowledge, tools, controls and review loops that real organizations already depend on.
            </p>
            <div className="flex flex-wrap gap-3">
              <Chip label="Editorial draft" />
              <Chip label="6 min read" />
              <Chip label="Gaurav Malhotra" />
              <Chip label="Enterprise AI" />
            </div>
          </section>

          {/* Divider */}
          <div className="h-px bg-border" />

          {/* Article body */}
          <div className="flex gap-12 items-start">
            {/* TOC — desktop only */}
            <aside className="hidden lg:flex flex-col gap-3 bg-card border border-border p-5 shrink-0 w-[240px] sticky top-8">
              <p className="font-sans font-semibold text-[11px] text-green leading-[1.25] uppercase tracking-[0.04em]">ON THIS PAGE</p>
              {[
                '01  Context is architecture',
                '02  The five layers',
                '03  A practical loop',
                '04  Where to begin',
              ].map((item) => (
                <p key={item} className="font-sans font-normal text-ink text-[12px] leading-[1.45]">{item}</p>
              ))}
            </aside>

            {/* Long-form content */}
            <div className="flex flex-col gap-6 flex-1 min-w-0 max-w-3xl">

              {/* Opening */}
              <p className="font-serif text-ink text-[18px] lg:text-[20px] leading-[1.55]">
                Enterprise systems already run on context. Product models define what can be written. Policy rules constrain what is allowed. Integration contracts specify what external systems expect. Operational history records what happened and when. Permissions determine who may act. Experienced engineers carry the judgment to know where the edge cases live. All of that exists before any AI workflow enters the picture.
              </p>
              <p className="font-sans font-normal text-ink text-[15px] lg:text-[17px] leading-[1.7]">
                A capable model with no access to that accumulated context can still produce a polished-looking answer. It will cite plausible patterns, reason in fluent prose, and arrive at a conclusion with apparent confidence. The answer may also be wrong in ways that are hard to catch without domain knowledge — wrong about which rules apply, which system owns a field, which approval is required. The model is not broken. The context is missing.
              </p>
              <p className="font-sans font-normal text-ink text-[15px] lg:text-[17px] leading-[1.7]">
                When teams add AI to enterprise delivery, the tempting move is to focus on the model: which one to use, how to prompt it, which benchmark it scores highest on. In practice, the harder engineering work sits around the model. The system has to decide what the model can see, which tools it may call, how its outputs are checked, and when a person must take over. That surrounding work is context engineering.
              </p>

              <h2 className="font-sans font-semibold text-ink text-[22px] lg:text-[28px] leading-[1.16] mt-2">
                01 · Context is part of the architecture
              </h2>
              <p className="font-serif text-ink text-[18px] lg:text-[20px] leading-[1.55]">
                Context engineering means deliberately designing what an AI workflow can retrieve, remember, call and hand off. It is an orchestration problem, not a prompting problem. The model is one participant inside a wider system of sources, services, policies and feedback loops.
              </p>
              <p className="font-sans font-normal text-ink text-[15px] lg:text-[17px] leading-[1.7]">
                Treating context as an architectural concern makes the work concrete. Each source raises real design questions: Who owns this data? How fresh does it need to be for this task? Who is permitted to read it? Can the workflow trace which sources shaped a given output? There is also a meaningful distinction between source-of-truth material — the product rule that governs coverage, the integration contract that specifies a field — and background material that provides orientation without being authoritative. Collapsing that distinction produces workflows that treat convenient documentation as equivalent to governing policy. The outputs look reasonable but cannot be trusted when it matters.
              </p>

              {/* Pull quote */}
              <div className="bg-sidebar flex flex-col gap-4 p-6 lg:p-[30px]">
                <p className="font-sans font-semibold text-light leading-[1.35] text-[20px] lg:text-[25px]">
                  "The quality of an enterprise AI workflow is often limited by the quality of the context assembled around it."
                </p>
                <p className="font-sans font-semibold text-light-muted text-[11px] leading-[1.25] uppercase tracking-[0.04em]">
                  WORKING PRINCIPLE
                </p>
              </div>

              <h2 className="font-sans font-semibold text-ink text-[22px] lg:text-[28px] leading-[1.16] mt-2">
                02 · The five layers
              </h2>
              <p className="font-sans font-normal text-ink text-[15px] lg:text-[17px] leading-[1.7]">
                I find it useful to think of context as five distinct layers. Each has a different design surface — different owners, failure modes and governance requirements.
              </p>
              <div className="flex flex-col gap-0">
                {CONTEXT_LAYERS.map((layer) => (
                  <div
                    key={layer.label}
                    className="border border-border flex flex-col sm:flex-row gap-3 sm:gap-4 items-start p-4 -mt-px first:mt-0 text-[14px] lg:text-[15px]"
                  >
                    <p className="font-sans font-semibold text-green leading-[1.25] sm:w-[130px] shrink-0">{layer.label}</p>
                    <p className="font-sans font-normal text-ink leading-[1.55]">{layer.desc}</p>
                  </div>
                ))}
              </div>
              <p className="font-sans font-normal text-ink text-[15px] lg:text-[17px] leading-[1.7]">
                These layers are not independent. A workflow with good knowledge but no evaluation layer will produce confident wrong answers with no mechanism to catch them. A workflow with capable tools but no human review layer will take consequential actions without a natural checkpoint. The layers work together, and gaps in any one of them propagate into the final output.
              </p>

              <h2 className="font-sans font-semibold text-ink text-[22px] lg:text-[28px] leading-[1.16] mt-2">
                03 · A practical loop
              </h2>
              <p className="font-serif text-ink text-[18px] lg:text-[20px] leading-[1.55]">
                The most reliable way to start is to pick one recurring workflow — a real task with a real owner — and trace it before building anything. Abstract ambitions produce architectures optimized for demos. A specific workflow produces requirements.
              </p>
              <p className="font-sans font-normal text-ink text-[15px] lg:text-[17px] leading-[1.7]">
                Once you have a workflow, five questions help structure the design:
              </p>

              {/* Loop steps */}
              <div className="flex gap-2 sm:gap-3">
                {LOOP_STEPS.map((step) => (
                  <div
                    key={step.num}
                    className={`flex flex-col gap-2 flex-1 p-3 lg:p-[14px] ${
                      step.active ? 'bg-green text-light' : 'bg-green-soft'
                    }`}
                  >
                    <p className={`font-sans font-semibold text-[11px] leading-[1.25] ${step.active ? 'text-light' : 'text-green'}`}>
                      {step.num}
                    </p>
                    <p className={`font-sans font-semibold text-[11px] lg:text-[12px] leading-[1.25] ${step.active ? 'text-light' : 'text-ink'}`}>
                      {step.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-5">
                {LOOP_DETAIL.map((s) => (
                  <div key={s.label} className="flex gap-4 items-start">
                    <span className="font-sans font-semibold text-green text-[12px] w-[64px] shrink-0 pt-[2px]">{s.label}</span>
                    <p className="font-sans font-normal text-ink text-[14px] lg:text-[15px] leading-[1.65]">{s.body}</p>
                  </div>
                ))}
              </div>

              <h2 className="font-sans font-semibold text-ink text-[22px] lg:text-[28px] leading-[1.16] mt-2">
                04 · Where to begin
              </h2>
              <p className="font-serif text-ink text-[18px] lg:text-[20px] leading-[1.55]">
                Choose a workflow with visible friction, bounded risk and an outcome the team can verify. For enterprise engineers, candidates include preparing a change-impact summary, tracing an integration failure, or assembling evidence for a release gate. A narrow loop teaches more than a sweeping platform promise.
              </p>
              <p className="font-sans font-normal text-ink text-[15px] lg:text-[17px] leading-[1.7]">
                To make this concrete: consider, as an illustrative design exercise, what it might look like to prepare a change-impact summary for a Guidewire PolicyCenter configuration change. A workflow designed along these lines could read approved product rules and integration contracts — sources with clear ownership — identify areas that warrant engineer inspection based on detected dependencies, and return those areas with source links so a reviewer can follow the reasoning. It should not autonomously approve a change, update production configuration, or present a recommendation without a domain engineer in the loop.
              </p>
              <p className="font-sans font-normal text-ink text-[15px] lg:text-[17px] leading-[1.7]">
                Evaluation for a workflow like this would check: Are the cited sources the governed documents, not general documentation? Does the output flag dependency areas rather than assert safe/unsafe verdicts? Is there a clear path for a reviewer to override or expand the output? Answering those questions concretely before building shapes a more trustworthy workflow than answering them after the fact.
              </p>
              <p className="font-sans font-normal text-ink-muted text-[13px] lg:text-[14px] leading-[1.6] italic border-l-2 border-border pl-4">
                The scenario above is an illustrative design exercise, not a description of a delivered project. It is intended to show how the framework applies to a domain-specific workflow.
              </p>

              {/* Checklist */}
              <div className="bg-green-soft flex flex-col gap-2 p-5 lg:p-[22px]">
                <p className="font-sans font-semibold text-[12px] text-green leading-[1.25] uppercase tracking-[0.04em] mb-1">
                  A GOOD FIRST WORKFLOW HAS:
                </p>
                {[
                  '✓  A real owner and a recurring task',
                  '✓  Known, permitted sources of context',
                  '✓  A small, read-first tool surface',
                  '✓  Observable outputs with traceable sources',
                  '✓  A human review checkpoint for consequential steps',
                  '✓  A baseline — time or quality — to compare against',
                ].map((item) => (
                  <p key={item} className="font-sans font-normal text-ink text-[13px] lg:text-[14px] leading-[1.45]">{item}</p>
                ))}
              </div>

              {/* Takeaway */}
              <p className="font-sans font-normal text-ink text-[15px] lg:text-[17px] leading-[1.7]">
                The value of thinking carefully about context is not that it unlocks more powerful AI. It is that it makes AI workflows auditable, bounded and useful to engineers who need to trust what the system produces. Context makes the reasoning visible. It keeps the scope limited to what is permitted. It gives reviewers the information they need to catch errors before they propagate. Starting with one workflow and gathering evidence is a more reliable path than starting with a platform promise and measuring sentiment.
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-border" />

          {/* Related articles */}
          <section className="flex flex-col gap-4">
            <SectionLabel label="CONTINUE READING" />
            <h2 className="font-sans font-semibold text-ink leading-[1.12] text-[28px] lg:text-[38px] max-w-xl">
              Related AI Decode notes.
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {RELATED.map((card) => (
                <button
                  key={card.title}
                  onClick={() => setPreview({ title: card.title, summary: card.summary })}
                  className="bg-card border border-border flex flex-col gap-3 p-6 rounded-lg text-left hover:bg-green-soft transition-colors"
                >
                  <p className="font-sans font-semibold text-[11px] text-green">{card.eyebrow}</p>
                  <p className="font-serif text-ink text-[22px] lg:text-[27px] leading-[1.35]">{card.title}</p>
                  <p className="font-sans font-normal text-ink-muted text-[13px] lg:text-[14px] leading-[1.35]">{card.summary}</p>
                  <p className="font-sans font-normal text-ink-muted text-[12px] leading-[1.35] mt-auto">{card.meta}</p>
                </button>
              ))}
            </div>
          </section>
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
