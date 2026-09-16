import { ArrowRight } from 'lucide-react'
import { Logo } from '@/components/logo'

const links = [
  { href: '#solucao', label: 'A solução' },
  { href: '#exemplos', label: 'Exemplos' },
  { href: '#processo', label: 'Como funciona' },
  { href: '#preco', label: 'Preço' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-hairline/70 bg-paper/80 backdrop-blur-xl">
      <div className="mx-auto flex h-18 w-full max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="group flex items-center">
          <Logo />
        </a>

        <nav className="hidden items-center gap-9 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13.5px] font-medium text-ink/60 transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#preco"
          className="group inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-[13px] font-semibold text-white transition-colors hover:bg-black"
        >
          Começar agora
          <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
        </a>
      </div>
    </header>
  )
}
