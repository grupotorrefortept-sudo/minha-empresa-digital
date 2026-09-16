import { Plus } from 'lucide-react'

const faqs = [
  {
    q: 'Preciso de perceber de tecnologia?',
    a: 'Não. O objetivo é tornar o processo simples para qualquer empresa.',
  },
  {
    q: 'A página funciona no telemóvel?',
    a: 'Sim. A página é pensada para computador, tablet e smartphone.',
  },
  {
    q: 'O domínio está incluído?',
    a: 'Sim, o domínio próprio faz parte da oferta.',
  },
]

export function Faq() {
  return (
    <section id="faq" className="border-t border-hairline bg-cream">
      <div className="mx-auto w-full max-w-3xl px-6 py-24 md:py-28">
        <div className="text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand">
            FAQ
          </p>
          <h2 className="mt-4 font-display text-[clamp(2rem,3.6vw,3rem)] font-light leading-[1.05] tracking-[-0.02em] text-ink">
            Perguntas simples.
          </h2>
        </div>

        <div className="mt-12 divide-y divide-hairline border-y border-hairline">
          {faqs.map((faq) => (
            <details key={faq.q} className="group py-5">
              <summary className="flex cursor-pointer items-center justify-between gap-4 text-[15.5px] font-semibold text-ink [&::-webkit-details-marker]:hidden">
                {faq.q}
                <Plus className="size-4 shrink-0 text-ink/40 transition-transform duration-300 group-open:rotate-45" />
              </summary>
              <p className="mt-3 max-w-xl text-[14.5px] leading-relaxed text-ink/55">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
