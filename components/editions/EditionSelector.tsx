'use client'

import Link from 'next/link'

type Edition = {
  numero: number
  titre: string
  estCourante: boolean
}

export default function EditionSelector({
  editions,
  selectedNumero,
}: {
  editions: Edition[]
  selectedNumero: number
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {editions.map((edition) => {
        const active = edition.numero === selectedNumero
        return (
          <Link
            key={edition.numero}
            href={`/editions?edition=${edition.numero}`}
            className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
              active
                ? 'bg-primary text-primary-foreground'
                : 'border text-muted-foreground hover:text-foreground hover:bg-muted'
            }`}
          >
            Édition {edition.numero}
            {edition.estCourante ? ' (Dernière)' : ''}
          </Link>
        )
      })}
    </div>
  )
}
