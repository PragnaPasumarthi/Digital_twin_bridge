import { motion } from 'framer-motion'
import { ArrowRight, Cpu, TrendingUp, AlertTriangle, IndianRupee, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Particles } from '@/components/effects/Particles'
import { AnimatedLines } from '@/components/effects/AnimatedLines'
import { images } from '@/lib/images'
import { useTheme } from '@/contexts/ThemeContext'
import { cn } from '@/lib/utils'

const stats = [
  { icon: IndianRupee, label: '₹8K Prototype Cost', color: 'text-green-400' },
  { icon: TrendingUp, label: '$49B Market by 2026', color: 'text-blue-400' },
  { icon: AlertTriangle, label: '75% IIoT Integration Failures', color: 'text-orange-400' },
  { icon: IndianRupee, label: '₹2Cr Annual Savings', color: 'text-purple-400' },
  { icon: Zap, label: '31% CAGR Growth', color: 'text-cyan-400' },
]

export function HeroSection() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <motion.img
          src={images.hero}
          alt="Smart factory"
          className="h-full w-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1.15 }}
          transition={{ duration: 25, repeat: Infinity, repeatType: 'reverse' }}
        />
        <div className={cn('absolute inset-0', isDark ? 'section-overlay-dark' : 'section-overlay-light')} />
        <Particles count={50} />
        <AnimatedLines />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pt-28 pb-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/40 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-400">
              <Cpu className="h-3.5 w-3.5" />
              Industrial AI Middleware
            </span>
            <h1 className="text-5xl font-bold leading-[1.1] tracking-tight text-slate-900 dark:text-white md:text-6xl lg:text-7xl">
              Digital Twin{' '}
              <span className="text-gradient">Bridge</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-slate-600 dark:text-gray-300 md:text-xl">
              AI-powered cross-vendor Industrial IoT middleware that unifies machine
              communication into a single intelligent Digital Twin ecosystem.
            </p>
            <motion.div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#architecture"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#architecture')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                <Button size="lg">
                  Explore Architecture
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </a>
              <a
                href="#innovation"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#innovation')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                <Button size="lg" variant="outline">
                  View Demo
                </Button>
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="glass glow-blue relative overflow-hidden rounded-2xl p-1">
              <img
                src={images.dashboard}
                alt="Digital twin dashboard"
                className="rounded-xl"
              />
              <motion.div
                className="absolute -right-4 -top-4 h-24 w-24 rounded-full border border-blue-500/50 bg-blue-500/20 blur-xl"
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </div>
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -left-8 bottom-8 glass rounded-xl p-4"
            >
              <p className="text-xs text-gray-400">Live OPC UA Stream</p>
              <p className="font-mono text-lg font-bold text-green-400">● 2,847 tags/s</p>
            </motion.div>
          </motion.div>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.1 }}
              whileHover={{ scale: 1.03, y: -4 }}
              className="glass rounded-xl p-4 text-center"
            >
              <stat.icon className={cn('mx-auto mb-2 h-6 w-6', stat.color)} />
              <p className="text-sm font-semibold text-slate-800 dark:text-white">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
