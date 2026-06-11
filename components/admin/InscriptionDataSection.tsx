import { entriesFromData } from '@/lib/inscription-labels'

export function InscriptionDataSection({
  title,
  step,
  data,
}: {
  title: string
  step: number
  data: unknown
}) {
  const rows = entriesFromData(data)

  return (
    <section className="rounded-xl border bg-card overflow-hidden">
      <div className="flex items-center gap-3 border-b bg-muted/40 px-4 py-3">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
          {step}
        </span>
        <h2 className="text-sm font-semibold text-foreground">{title}</h2>
      </div>
      <dl className="divide-y">
        {rows.map(([label, value]) => (
          <div key={label} className="grid gap-1 px-4 py-3 sm:grid-cols-[minmax(140px,38%)_1fr] sm:gap-4">
            <dt className="text-xs font-medium uppercase tracking-wide text-muted-foreground">{label}</dt>
            <dd className="text-sm text-foreground whitespace-pre-wrap break-words">{value}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
