import { ArrowRight } from 'lucide-react'

export function FinalCta() {
  return (
    <section
      id="contacto"
      className="relative overflow-hidden bg-gradient-to-b from-paper to-cream"
    >
      <div className="mx-auto w-full max-w-6xl px-6 py-28 text-center md:py-36">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand">
          O próximo passo
        </p>
        <h2 className="mx-auto mt-4 max-w-3xl font-display text-[clamp(2.4rem,5vw,4.2rem)] font-light leading-[1.0] tracking-[-0.02em] text-ink">
          A tua empresa online começa agora.
        </h2>
        <p className="mt-6 text-lg text-ink/60">
          Profissional. Simples. Sem complicações.
        </p>
        <div className="mt-10">
          <a
            href="#preco"
            className="group inline-flex items-center gap-2.5 rounded-full bg-brand px-8 py-4 text-[15px] font-semibold text-white shadow-lg shadow-brand/25 transition-all hover:bg-brand-hover hover:shadow-xl hover:shadow-brand/30"
          >
            Quero a minha empresa online
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  )
}
