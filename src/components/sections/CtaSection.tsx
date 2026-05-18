import { motion } from 'framer-motion'
import { ArrowRight, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Particles } from '@/components/effects/Particles'
import { images } from '@/lib/images'
import { useTheme } from '@/contexts/ThemeContext'
import { cn } from '@/lib/utils'

export function CtaSection() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <section id="contact" className="relative min-h-[80vh] overflow-hidden">
      <div className="absolute inset-0">
        <img src={images.cta} alt="Smart factory" className="h-full w-full object-cover" />
        <div className={cn('absolute inset-0', isDark ? 'section-overlay-dark' : 'section-overlay-light')} />
        <Particles count={30} />
      </div>

      <div className="relative z-10 flex min-h-[80vh] flex-col items-center justify-center px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-400"
        >
          Ready to unify your factory?
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="max-w-4xl text-4xl font-bold text-slate-900 dark:text-white md:text-6xl"
        >
          Breaking Industrial Data Silos{' '}
          <span className="text-gradient">Forever</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-6 max-w-xl text-lg text-slate-600 dark:text-gray-300"
        >
          Join the next generation of smart manufacturing. Request a live demo of Digital Twin Bridge today.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <Button size="lg" variant="glow">
            Request Demo
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline">
            <Mail className="h-4 w-4" />
            Contact Team
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
