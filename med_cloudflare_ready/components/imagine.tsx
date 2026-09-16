export function Imagine() {
  return (
    <section className="border-y border-hairline bg-cream">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-6 py-24 md:py-28 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="relative overflow-hidden rounded-3xl border border-hairline bg-white shadow-[0_40px_80px_-40px_rgba(14,17,22,0.3)]">
          <div className="flex items-center gap-2 border-b border-hairline bg-cream px-4 py-3">
            <span className="size-2.5 rounded-full bg-ink/10" />
            <span className="size-2.5 rounded-full bg-ink/10" />
            <span className="size-2.5 rounded-full bg-ink/10" />
          </div>
          <img
            src="/images/example-restaurante.png"
            alt="Landing page profissional apresentada como exemplo"
            className="block h-auto w-full"
          />
        </div>

        <div className="lg:pl-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand">
            O teu negócio online
          </p>
          <h2 className="mt-4 font-display text-[clamp(2.2rem,4vw,3.4rem)] font-light leading-[1.02] tracking-[-0.02em] text-ink">
            Imagina a tua empresa assim.
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-ink/60">
            Uma presença digital moderna, pensada para apresentar o teu negócio
            e facilitar o contacto.
          </p>
        </div>
      </div>
    </section>
  )
}
