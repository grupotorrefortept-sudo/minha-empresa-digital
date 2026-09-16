import { Logo } from '@/components/logo'

export function SiteFooter() {
  return (
    <footer className="border-t border-hairline bg-paper">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <Logo showTagline={false} />
        <p className="text-[12px] text-ink/45">
          © {new Date().getFullYear()} Minha Empresa Digital
        </p>
      </div>
    </footer>
  )
}
