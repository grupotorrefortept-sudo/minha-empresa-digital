import { Zap, Sparkles, Smartphone, Globe } from 'lucide-react'

const items = [
  {
    icon: Zap,
    title: 'Rápido e simples',
    detail: 'Sem complicações',
  },
  {
    icon: Sparkles,
    title: 'Design profissional',
    detail: 'Moderno e clean',
  },
  {
    icon: Smartphone,
    title: '100% responsivo',
    detail: 'Feito para todos os dispositivos',
  },
  {
    icon: Globe,
    title: 'Domínio próprio',
    detail: 'A tua marca, o teu endereço',
  },
]

export function TrustBar() {
  return (
    <section className="border-y border-hairline bg-cream">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-2 px-6 md:grid-cols-4">
        {items.map((item, i) => (
          <div
            key={item.title}
            className={`flex items-start gap-3 py-6 md:py-7 ${
              i % 2 === 0 ? 'pr-4' : 'pr-4'
            } ${i < 2 ? 'border-b md:border-b-0' : ''} ${
              i !== 3 ? 'md:border-r' : ''
            } ${i === 0 || i === 2 ? 'md:pl-0' : 'pl-4 md:pl-6'} border-hairline`}
          >
            <item.icon className="mt-0.5 size-4.5 shrink-0 text-brand" />
            <div>
              <p className="text-[13.5px] font-semibold text-ink">
                {item.title}
              </p>
              <p className="mt-0.5 text-[12px] text-ink/50">{item.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
