const examples = [
  {
    src: '/images/example-restaurante.png',
    tag: 'Restauração',
    alt: 'Exemplo de landing page para restaurante',
    className: 'lg:col-span-3 lg:row-span-2',
  },
  {
    src: '/images/example-beleza.png',
    tag: 'Beleza & bem-estar',
    alt: 'Exemplo de landing page para salão de beleza',
    className: 'lg:col-span-2',
  },
  {
    src: '/images/example-servicos.png',
    tag: 'Serviços',
    alt: 'Exemplo de landing page para empresa de serviços',
    className: 'lg:col-span-2',
  },
]

function BrowserFrame({
  src,
  alt,
  tag,
}: {
  src: string
  alt: string
  tag: string
}) {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] shadow-2xl">
      <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.04] px-4 py-3">
        <span className="size-2.5 rounded-full bg-white/20" />
        <span className="size-2.5 rounded-full bg-white/20" />
        <span className="size-2.5 rounded-full bg-white/20" />
        <span className="ml-3 rounded-md bg-white/[0.06] px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-white/40">
          {tag}
        </span>
      </div>
      <div className="relative flex-1 overflow-hidden">
        <img
          src={src || '/placeholder.svg'}
          alt={alt}
          className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
        />
      </div>
    </div>
  )
}

export function Showcase() {
  return (
    <section id="exemplos" className="bg-ink text-white">
      <div className="mx-auto w-full max-w-6xl px-6 py-24 md:py-32">
        <div className="max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/45">
            Exemplos
          </p>
          <h2 className="mt-4 font-display text-[clamp(2.2rem,4vw,3.4rem)] font-light leading-[1.02] tracking-[-0.02em]">
            Uma página com a cara do teu negócio.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-white/60">
            Usamos modelos profissionais e adaptamos o conteúdo à tua empresa.
          </p>
        </div>

        <div className="mt-14 grid auto-rows-[220px] gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {examples.map((ex) => (
            <div key={ex.src} className={ex.className}>
              <BrowserFrame src={ex.src} alt={ex.alt} tag={ex.tag} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
