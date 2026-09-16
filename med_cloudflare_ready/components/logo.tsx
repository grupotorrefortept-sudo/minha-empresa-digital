import { cn } from '@/lib/utils'

const SPOKES = 8
const RINGS = [8, 17, 26, 35]
const CENTER = 50
const OUTER = 40

function polar(radius: number, index: number) {
  const angle = (Math.PI * 2 * index) / SPOKES - Math.PI / 2
  return {
    x: CENTER + radius * Math.cos(angle),
    y: CENTER + radius * Math.sin(angle),
  }
}

/**
 * Recreation of the "Minha Empresa Digital" web mark: a radial spider-web
 * drawn programmatically so it stays crisp at any size and can be recolored
 * with currentColor.
 */
export function LogoMark({ className }: { className?: string }) {
  const spokes = Array.from({ length: SPOKES }, (_, i) => {
    const end = polar(OUTER, i)
    return { x2: end.x, y2: end.y, key: `spoke-${i}` }
  })

  const strands = RINGS.map((radius) => {
    const points = Array.from({ length: SPOKES }, (_, i) => {
      const p = polar(radius, i)
      return `${p.x.toFixed(2)},${p.y.toFixed(2)}`
    })
    return { key: `ring-${radius}`, points: points.join(' ') }
  })

  return (
    <svg
      viewBox="0 0 100 100"
      className={cn('size-full', className)}
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="4"
        y="4"
        width="92"
        height="92"
        rx="22"
        className="fill-ink"
      />
      <rect
        x="4.75"
        y="4.75"
        width="90.5"
        height="90.5"
        rx="21.25"
        fill="none"
        stroke="var(--color-brand)"
        strokeWidth="1.5"
        opacity="0.9"
      />
      <g
        stroke="var(--color-gold)"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {spokes.map((s) => (
          <line key={s.key} x1={CENTER} y1={CENTER} x2={s.x2} y2={s.y2} />
        ))}
        {strands.map((s) => (
          <polygon key={s.key} points={s.points} fill="none" />
        ))}
      </g>
      <circle cx={CENTER} cy={CENTER} r="2.4" fill="var(--color-gold-soft)" />
    </svg>
  )
}

export function Logo({
  className,
  showTagline = true,
}: {
  className?: string
  showTagline?: boolean
}) {
  return (
    <span className={cn('flex items-center gap-2.5', className)}>
      <span className="block size-9 shrink-0">
        <LogoMark />
      </span>
      <span className="leading-none">
        <span className="block text-[15px] font-semibold tracking-tight text-ink">
          Minha Empresa Digital
        </span>
        {showTagline && (
          <span className="mt-1 block text-[9px] font-semibold uppercase tracking-[0.22em] text-ink/45">
            Presença online
          </span>
        )}
      </span>
    </span>
  )
}
