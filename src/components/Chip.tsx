type Props = {
  label: string
  variant?: 'outline' | 'soft' | 'dark'
}

export default function Chip({ label, variant = 'outline' }: Props) {
  if (variant === 'soft') {
    return (
      <div className="bg-green-soft flex items-center px-3 py-2 rounded-full">
        <span className="font-sans font-medium text-[12px] text-green leading-none whitespace-nowrap">
          {label}
        </span>
      </div>
    )
  }
  if (variant === 'dark') {
    return (
      <div className="bg-sidebar border border-[#2a3330] flex items-center px-3 py-2 rounded-full">
        <span className="font-sans font-medium text-[12px] text-light leading-none whitespace-nowrap">
          {label}
        </span>
      </div>
    )
  }
  return (
    <div className="bg-paper border border-border flex items-center px-3 py-2 rounded-full">
      <span className="font-sans font-medium text-[12px] text-ink leading-none whitespace-nowrap">
        {label}
      </span>
    </div>
  )
}
