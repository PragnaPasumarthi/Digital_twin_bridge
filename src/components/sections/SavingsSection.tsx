import { motion } from 'framer-motion'
import { useInView } from '@/hooks/useInView'
import { useCountUp } from '@/hooks/useCountUp'
import { SectionBackground } from '@/components/effects/SectionBackground'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { images } from '@/lib/images'

function MetricCard({
  label,
  value,
  suffix,
  decimals = 0,
}: {
  label: string
  value: number
  suffix?: string
  decimals?: number
}) {
  const { ref, inView } = useInView()
  const count = useCountUp(value, 2000, inView, decimals)

  return (
    <div ref={ref} className="glass rounded-2xl p-8 text-center">
      <p className="text-4xl font-bold text-gradient md:text-5xl">
        {count}
        {suffix}
      </p>
      <p className="mt-2 text-sm text-slate-600 dark:text-gray-400">{label}</p>
    </div>
  )
}

const kpis = [
  { label: 'Reduced Downtime', pct: 45 },
  { label: 'Faster Onboarding', pct: 80 },
  { label: 'Predictive Maint. Efficiency', pct: 65 },
]

export function SavingsSection() {
  return (
    <SectionBackground image={images.savings} id="savings" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          badge="Savings & Impact"
          title="Transformative ROI for Smart Factories"
          subtitle="Measurable outcomes from day one of deployment."
        />

        <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <MetricCard label="Annual Savings (₹ Crore)" value={2.5} suffix=" Cr" decimals={1} />
          <MetricCard label="Data Prep Reduction (%)" value={75} suffix="%" />
          <MetricCard label="Integration Cost Cut (%)" value={70} suffix="%" />
          <MetricCard label="Time to First Insight (days)" value={3} suffix=" days" />
        </div>

        <motion.div className="grid gap-6 md:grid-cols-3">
          {kpis.map((kpi, i) => (
            <motion.div
              key={kpi.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass flex flex-col items-center rounded-2xl p-8"
            >
              <div className="relative h-32 w-32">
                <svg className="h-full w-full -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="42" fill="none" stroke="currentColor" className="text-white/10" strokeWidth="8" />
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="42"
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeDasharray={`${kpi.pct * 2.64} 264`}
                    initial={{ strokeDashoffset: 264 }}
                    whileInView={{ strokeDashoffset: 264 - kpi.pct * 2.64 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: i * 0.2 }}
                  />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-slate-900 dark:text-white">
                  {kpi.pct}%
                </span>
              </div>
              <p className="mt-4 font-semibold text-slate-800 dark:text-white">{kpi.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionBackground>
  )
}
