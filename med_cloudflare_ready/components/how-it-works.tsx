const steps = [
  {
    n: '01',
    title: 'Fazes a compra',
    text: 'Garantes a tua página com o preço de lançamento de 97€.',
  },
  {
    n: '02',
    title: 'Envias os dados',
    text: 'Preenches um formulário simples com as informações da tua empresa.',
  },
  {
    n: '03',
    title: 'Criamos a página',
    text: 'Organizamos tudo num modelo profissional e moderno.',
  },
  {
    n: '04',
    title: 'Publicamos online',
    text: 'A tua página fica publicada, com domínio próprio, pronta a partilhar.',
  },
]

const formItems = [
  'Dados da empresa',
  'Contactos',
  'Serviços/produtos',
  'Logo',
  'Fotografias',
  'Redes sociais',
  'Textos existentes',
]

export function HowItWorks() {
  return (
    <section
      id="processo"
      className="mx-auto w-full max-w-6xl px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand">
          Como funciona
        </p>
        <h2 className="mt-4 font-display text-[clamp(2.2rem,4vw,3.4rem)] font-light leading-[1.02] tracking-[-0.02em] text-ink">
          Quatro passos. Só isso.
        </h2>
      </div>

      <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step) => (
          <div key={step.n} className="flex flex-col bg-cream p-8 md:p-9">
            <span className="font-display text-5xl font-light text-brand/25">
              {step.n}
            </span>
            <h3 className="mt-8 text-lg font-semibold tracking-tight text-ink">
              {step.title}
            </h3>
            <p className="mt-2 text-[14px] leading-relaxed text-ink/55">
              {step.text}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6 grid gap-8 rounded-3xl border border-hairline bg-cream p-8 md:grid-cols-[1fr_1.1fr] md:p-10">
        <div>
          <h3 className="text-lg font-semibold tracking-tight text-ink">
            Depois da compra, é simples.
          </h3>
          <p className="mt-3 max-w-sm text-[14.5px] leading-relaxed text-ink/55">
            Recebes um formulário para enviares tudo o que precisamos para criar
            a tua página. A produção começa após o pagamento e a receção de
            todos os dados e materiais necessários.
          </p>
        </div>
        <div className="flex flex-wrap content-start gap-2.5">
          {formItems.map((item) => (
            <span
              key={item}
              className="rounded-full border border-hairline bg-white px-4 py-2 text-[13px] font-medium text-ink/70"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
