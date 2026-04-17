export default function Footer() {
  return (
    <footer className="bg-white py-10 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-5">

        {/* Logo */}
        <div>
          <p className="text-2xl font-black text-ink tracking-tight">
            drin<span className="text-orange">Z</span>
            <span className="ml-1.5 inline-block w-2 h-2 rounded-full bg-teal" />
          </p>
          <p className="text-xs text-muted mt-1">Full-Stack .NET Developer · Angono, Rizal, PH</p>
        </div>

        <p className="text-xs text-muted text-center">
          © {new Date().getFullYear()} Aldrin Anthony Calatrava. Built with React & Tailwind.
        </p>

        {/* Social */}
        <div className="flex gap-3">
          {[
            { label:'Email',    href:'mailto:xizershivas@gmail.com', icon:'✉️' },
            { label:'LinkedIn', href:'#', icon:'💼' },
            { label:'GitHub',   href:'#', icon:'🐙' },
          ].map(s => (
            <a key={s.label} href={s.href} title={s.label}
              className="w-9 h-9 flex items-center justify-center rounded-full text-base bg-gray-50 border border-gray-200 transition-all duration-200 hover:scale-110 hover:border-orange hover:bg-orange/5"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
