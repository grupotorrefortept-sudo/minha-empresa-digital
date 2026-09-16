import { LayoutTemplate, MessageCircle, Images } from 'lucide-react'

const cards = [
  {
    n: '01',
    icon: LayoutTemplate,
    title: 'Apresenta',
    text: 'A tua empresa e os teus principais serviços.',
  },
  {
    n: '02',
    icon: MessageCircle,
    title: 'Conecta',
    text: 'WhatsApp, telefone, email e redes sociais.',
  },
  {
    n: '03',
    icon: Images,
    title: 'Mostra',
    text: 'Imagens, trabalhos, produtos e informação relevante.',
  },
]

export function Solution() {
  return (
    <section id="solucao" className="mx-auto w-full max-w-6xl px-6 py-24 md:py-32">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand">
          A solução
        </p>
        <h2 className="mt-4 font-display text-[clamp(2.2rem,4vw,3.4rem)] font-light leading-[1.02] tracking-[-0.02em] text-ink">
          O teu negócio, à distância de um clique.
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-ink/60">
          Uma landing page profissional para mostrar o que fazes e tornar mais
          fácil para os teus clientes entrarem em contacto.
        </p>
      </div>

      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {cards.map((card) => (
          <article
            key={card.n}
            className="group relative flex flex-col rounded-3xl border border-hairline bg-cream p-8 transition-colors hover:border-ink/20"
          >
            <div className="flex items-center justify-between">
              <span className="flex size-11 items-center justify-center rounded-xl bg-white text-brand ring-1 ring-hairline">
                <card.icon className="size-5" />
              </span>
              <span className="font-display text-sm text-ink/30">{card.n}</span>
            </div>
            <h3 className="mt-8 text-xl font-semibold tracking-tight text-ink">
              {card.title}
            </h3>
            <p className="mt-2 text-[14.5px] leading-relaxed text-ink/55">
              {card.text}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
