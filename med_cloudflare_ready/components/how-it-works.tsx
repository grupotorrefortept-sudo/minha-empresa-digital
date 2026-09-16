const steps = [
  {
    n: '01',
    title: 'Envias os dados',
    text: 'Informações, contactos, serviços e imagens da tua empresa.',
  },
  {
    n: '02',
    title: 'Criamos a página',
    text: 'Organizamos tudo num modelo profissional e moderno.',
  },
  {
    n: '03',
    title: 'Fica online',
    text: 'Recebes a tua página pronta para partilhar.',
  },
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
          Três passos. Só isso.
        </h2>
      </div>

      <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-hairline bg-hairline md:grid-cols-3">
        {steps.map((step) => (
          <div key={step.n} className="flex flex-col bg-cream p-8 md:p-10">
            <span className="font-display text-5xl font-light text-brand/25">
              {step.n}
            </span>
            <h3 className="mt-8 text-xl font-semibold tracking-tight text-ink">
              {step.title}
            </h3>
            <p className="mt-2 text-[14.5px] leading-relaxed text-ink/55">
              {step.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
