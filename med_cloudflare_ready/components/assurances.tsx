import { CalendarCheck, Unlock } from 'lucide-react'

export function Assurances() {
  return (
    <section id="garantias" className="border-y border-hairline bg-cream">
      <div className="mx-auto grid w-full max-w-6xl gap-6 px-6 py-24 md:py-28 lg:grid-cols-2">
        <div className="flex flex-col justify-between rounded-3xl border border-hairline bg-ink p-8 text-white md:p-10">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-gold">
              <Unlock className="size-3.5" />
              Sem fidelização
            </span>
            <h2 className="mt-6 font-display text-[clamp(1.8rem,3vw,2.6rem)] font-light leading-[1.05] tracking-[-0.02em]">
              Não estás preso a nada.
            </h2>
          </div>
          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-white/65">
            Não estás preso a um contrato de fidelização. Após o período inicial
            de 12 meses, podes decidir se queres continuar com o serviço.
          </p>
        </div>

        <div className="flex flex-col rounded-3xl border border-hairline bg-white p-8 md:p-10">
          <span className="flex size-11 items-center justify-center rounded-xl bg-cream text-brand ring-1 ring-hairline">
            <CalendarCheck className="size-5" />
          </span>
          <h2 className="mt-6 font-display text-[clamp(1.8rem,3vw,2.6rem)] font-light leading-[1.05] tracking-[-0.02em] text-ink">
            Os primeiros 12 meses incluídos.
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-ink/60">
            Domínio próprio e publicação incluídos durante os primeiros 12
            meses.
          </p>
          <p className="mt-4 text-[14px] leading-relaxed text-ink/50">
            Após os primeiros 12 meses, a continuidade do serviço e a renovação
            do domínio ficam sujeitas às condições e preços de renovação em
            vigor, comunicados previamente.
          </p>
        </div>
      </div>
    </section>
  )
}
