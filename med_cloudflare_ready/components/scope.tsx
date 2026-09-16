import { Minus } from 'lucide-react'

const notIncluded = [
  'Loja online / e-commerce',
  'Sistemas de reservas complexos',
  'Área de cliente',
  'Funcionalidades específicas desenvolvidas à medida',
  'Criação de identidade visual completa',
  'Produção profissional de fotografias ou vídeos',
  'Gestão de redes sociais',
  'Campanhas de publicidade',
]

export function Scope() {
  return (
    <section id="ambito" className="mx-auto w-full max-w-6xl px-6 py-24 md:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink/45">
          Transparência
        </p>
        <h2 className="mt-4 font-display text-[clamp(2rem,3.6vw,3rem)] font-light leading-[1.05] tracking-[-0.02em] text-ink">
          O que não está incluído.
        </h2>
        <p className="mt-5 text-[15px] leading-relaxed text-ink/55">
          Para o âmbito da oferta ficar claro, estes pontos não fazem parte dos
          97€.
        </p>
      </div>

      <div className="mx-auto mt-12 max-w-3xl rounded-3xl border border-hairline bg-cream p-8 md:p-10">
        <ul className="grid grid-cols-1 gap-x-8 gap-y-3.5 sm:grid-cols-2">
          {notIncluded.map((item) => (
            <li
              key={item}
              className="flex items-center gap-3 text-[14.5px] text-ink/65"
            >
              <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-ink/5">
                <Minus className="size-3 text-ink/40" />
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="mx-auto mt-6 grid max-w-3xl gap-4 sm:grid-cols-2">
        <div className="rounded-3xl border border-hairline bg-white p-7">
          <h3 className="text-[15px] font-semibold text-ink">
            Alterações e limites
          </h3>
          <p className="mt-3 text-[13.5px] leading-relaxed text-ink/55">
            A página é criada com base nas informações e materiais fornecidos
            pelo cliente. Pequenos ajustes de conteúdo e apresentação
            necessários à conclusão da página estão incluídos. Novas
            funcionalidades, alterações estruturais ou trabalhos fora do âmbito
            da oferta poderão ser orçamentados separadamente.
          </p>
        </div>
        <div className="rounded-3xl border border-hairline bg-white p-7">
          <h3 className="text-[15px] font-semibold text-ink">
            Responsabilidade pelos conteúdos
          </h3>
          <p className="mt-3 text-[13.5px] leading-relaxed text-ink/55">
            O cliente é responsável por garantir que possui os direitos
            necessários para utilizar os textos, imagens, logótipos e restantes
            materiais fornecidos para publicação.
          </p>
        </div>
      </div>
    </section>
  )
}
