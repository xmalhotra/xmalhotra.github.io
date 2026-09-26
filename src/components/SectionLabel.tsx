type Props = { label: string; className?: string }

export default function SectionLabel({ label, className }: Props) {
  return (
    <div className={`flex items-center gap-2 ${className ?? ''}`}>
      <img src="/assets/e14f6.svg" alt="" className="w-[6px] h-[6px] shrink-0" />
      <span className="font-sans font-semibold text-[11px] text-green leading-none tracking-[0.04em] uppercase whitespace-nowrap">
        {label}
      </span>
    </div>
  )
}
