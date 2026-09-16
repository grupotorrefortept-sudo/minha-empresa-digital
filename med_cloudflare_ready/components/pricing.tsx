import { ArrowRight, Check, ShieldCheck } from 'lucide-react'
import { CHECKOUT_URL, CTA_LABEL } from '@/lib/site'

const included = [
  'Landing page',
  'Domínio próprio',
  'Design responsivo',
  'WhatsApp e contactos',
  'Redes sociais',
  'Publicação online',
]

export function Pricing() {
  return (
    <section id="preco" className="mx-auto w-full max-w-6xl px-6 py-24 md:py-32">
      <div className="relative mx-auto max-w-3xl overflow-hidden rounded-[2rem] border border-hairline bg-ink px-6 py-14 text-center text-white shadow-2xl md:px-14 md:py-16">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 left-1/2 size-72 -translate-x-1/2 rounded-full bg-brand/25 blur-3xl"
        />
        <div className="relative">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/50">
            Oferta de lançamento
          </p>
          <h2 className="mx-auto mt-4 max-w-xl font-display text-[clamp(2rem,3.6vw,3rem)] font-light leading-[1.05] tracking-[-0.02em]">
            Uma presença online profissional, sem complicações.
          </h2>

          <div className="mt-9 flex flex-col items-center">
            <span className="font-display text-2xl font-light text-white/40 line-through decoration-white/30">
              297€
            </span>
            <span className="mt-1 font-display text-7xl font-semibold tracking-[-0.03em] md:text-8xl">
              97€
            </span>
            <p className="mt-3 text-[13px] font-medium uppercase tracking-[0.14em] text-white/60">
              Preço de lançamento
            </p>
          </div>

          <ul className="mx-auto mt-9 grid max-w-lg grid-cols-1 gap-x-6 gap-y-3 text-left sm:grid-cols-2">
            {included.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2.5 text-[14.5px] text-white/85"
              >
                <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-brand">
                  <Check className="size-3 text-white" />
                </span>
                {item}
              </li>
            ))}
          </ul>

          <a
            href={CHECKOUT_URL}
            className="group mt-11 inline-flex items-center gap-2.5 rounded-full bg-brand px-8 py-4 text-[15px] font-semibold text-white shadow-lg shadow-brand/30 transition-all hover:bg-brand-hover"
          >
            {CTA_LABEL}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </a>

          <div className="mx-auto mt-8 flex max-w-md flex-col gap-2.5 text-[13px] leading-relaxed text-white/55">
            <p className="flex items-start justify-center gap-2">
              <ShieldCheck className="mt-0.5 size-4 shrink-0 text-gold" />
              <span>
                Domínio próprio e publicação incluídos durante os primeiros 12
                meses.
              </span>
            </p>
            <p>
              Sem fidelização. Após os 12 meses, decides livremente se queres
              continuar.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
