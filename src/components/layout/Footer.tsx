import { Mail, Share2, Globe } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-slate-200/50 bg-white/90 py-12 dark:border-white/10 dark:bg-[#030712]/90">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <p className="text-lg font-bold text-slate-900 dark:text-white">Digital Twin Bridge</p>
            <p className="mt-1 text-sm text-slate-500 dark:text-gray-400">
              AI-powered Industrial IoT middleware · Hackathon 2026
            </p>
          </div>
          <div className="flex gap-4">
            {[Mail, Share2, Globe].map((Icon, i) => (
              <a
                key={i}
                href="#contact"
                className="flex h-10 w-10 items-center justify-center rounded-lg glass text-slate-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
        <p className="mt-8 text-center text-xs text-slate-500 dark:text-gray-500">
          © 2026 Digital Twin Bridge. Breaking industrial data silos forever.
        </p>
      </div>
    </footer>
  )
}
