import { ArrowRight, Star } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-gradient-to-b from-cream to-paper"
      />
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 px-6 pb-20 pt-16 md:pb-28 md:pt-24 lg:grid-cols-[1.02fr_1fr] lg:gap-16">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-hairline bg-white/60 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-ink/55">
            Presença digital para pequenas empresas
          </div>

          <h1 className="mt-6 font-display text-[clamp(2.9rem,6vw,4.9rem)] font-light leading-[0.98] tracking-[-0.02em] text-ink">
            A tua empresa merece estar{' '}
            <span className="relative whitespace-nowrap italic text-brand">
              online.
            </span>
          </h1>

          <p className="mt-6 max-w-md text-lg leading-relaxed text-ink/60">
            Uma presença digital profissional, simples e moderna para a tua
            empresa.
          </p>

          <div className="mt-8 flex items-center gap-5">
            <div className="flex items-baseline gap-1.5">
              <span className="font-display text-4xl font-semibold tracking-tight text-ink">
                97€
              </span>
            </div>
            <div className="border-l border-hairline pl-5 text-[13px] leading-tight text-ink/55">
              Preço de
              <br />
              lançamento
            </div>
          </div>

          <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <a
              href="#preco"
              className="group inline-flex items-center gap-2.5 rounded-full bg-brand px-7 py-4 text-[15px] font-semibold text-white shadow-lg shadow-brand/25 transition-all hover:bg-brand-hover hover:shadow-xl hover:shadow-brand/30"
            >
              Quero a minha empresa online
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <p className="mt-5 text-[13px] text-ink/50">
            Sem complicações. Nós tratamos da criação.
          </p>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-3xl border border-hairline/80 bg-white shadow-[0_40px_80px_-30px_rgba(14,17,22,0.35)]">
            <img
              src="/images/hero-device.png"
              alt="Exemplo de uma empresa apresentada numa landing page profissional em computador e telemóvel"
              className="block h-auto w-full"
            />
          </div>

          <div className="absolute -left-4 bottom-8 hidden rounded-2xl border border-hairline bg-white/95 px-4 py-3 shadow-xl backdrop-blur sm:block">
            <div className="flex items-center gap-0.5 text-brand">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-3.5 fill-current" />
              ))}
            </div>
            <p className="mt-1 text-[12px] font-medium text-ink/70">
              Design profissional, pronto a usar
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
