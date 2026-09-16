import {
  Check,
  LayoutTemplate,
  Globe,
  Rocket,
  Building2,
  MessageCircle,
  Share2,
  MapPin,
  Smartphone,
} from 'lucide-react'

const highlights = [
  {
    icon: LayoutTemplate,
    title: 'Landing page profissional',
    text: 'Design moderno e responsável, com a cara da tua empresa.',
  },
  {
    icon: Globe,
    title: 'Domínio próprio',
    text: 'O teu endereço na internet, incluído na oferta.',
  },
  {
    icon: Rocket,
    title: 'Publicação e alojamento',
    text: 'Tratamos de colocar a página online e acessível.',
  },
  {
    icon: Building2,
    title: 'Apresentação da empresa',
    text: 'Os teus serviços e/ou produtos apresentados com clareza.',
  },
  {
    icon: MessageCircle,
    title: 'Contactos diretos',
    text: 'WhatsApp, telefone e email ligados à tua página.',
  },
  {
    icon: Share2,
    title: 'Redes sociais',
    text: 'Ligações às tuas redes para os clientes te seguirem.',
  },
]

const checklist = [
  'Landing page profissional',
  'Design moderno e responsivo',
  'Domínio próprio',
  'Publicação e alojamento da página',
  'Apresentação da empresa',
  'Serviços e/ou produtos',
  'Logo e imagens fornecidos pelo cliente',
  'WhatsApp',
  'Telefone e email',
  'Redes sociais',
  'Localização/mapa, quando aplicável',
  'Página adaptada a telemóvel, tablet e computador',
  'Página publicada e acessível online',
]

export function WhatsIncluded() {
  return (
    <section
      id="incluido"
      className="mx-auto w-full max-w-6xl px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand">
          O que está incluído
        </p>
        <h2 className="mt-4 font-display text-[clamp(2.2rem,4vw,3.4rem)] font-light leading-[1.02] tracking-[-0.02em] text-ink">
          Tudo o que recebes por 97€.
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-ink/60">
          Uma página completa e pronta a usar. Sem surpresas, sem letras
          pequenas.
        </p>
      </div>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {highlights.map((item) => (
          <article
            key={item.title}
            className="flex flex-col rounded-3xl border border-hairline bg-cream p-7"
          >
            <span className="flex size-11 items-center justify-center rounded-xl bg-white text-brand ring-1 ring-hairline">
              <item.icon className="size-5" />
            </span>
            <h3 className="mt-6 text-lg font-semibold tracking-tight text-ink">
              {item.title}
            </h3>
            <p className="mt-2 text-[14.5px] leading-relaxed text-ink/55">
              {item.text}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-6 rounded-3xl border border-hairline bg-white p-8 md:p-10">
        <div className="flex items-center gap-3">
          <Smartphone className="size-4.5 text-brand" />
          <MapPin className="size-4.5 text-brand" />
          <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-ink/55">
            Lista completa
          </p>
        </div>
        <ul className="mt-6 grid grid-cols-1 gap-x-8 gap-y-3.5 sm:grid-cols-2">
          {checklist.map((item) => (
            <li
              key={item}
              className="flex items-center gap-3 text-[14.5px] text-ink/75"
            >
              <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-brand/10">
                <Check className="size-3 text-brand" />
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
