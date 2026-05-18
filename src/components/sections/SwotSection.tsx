import { motion } from 'framer-motion'
import { Shield, AlertCircle, TrendingUp, CloudRain } from 'lucide-react'
import { SectionHeader } from '@/components/shared/SectionHeader'

const swot = [
  {
    type: 'Strengths',
    icon: Shield,
    gradient: 'from-green-500/20 to-emerald-600/10',
    border: 'border-green-500/40',
    items: ['AI auto-mapping', '₹8K prototype cost', 'Vendor neutral', 'Zero recurring AI cost'],
  },
  {
    type: 'Weaknesses',
    icon: AlertCircle,
    gradient: 'from-yellow-500/20 to-orange-600/10',
    border: 'border-yellow-500/40',
    items: ['Early-stage product', 'Limited enterprise references', 'Depends on LLM APIs initially'],
  },
  {
    type: 'Opportunities',
    icon: TrendingUp,
    gradient: 'from-blue-500/20 to-cyan-600/10',
    border: 'border-blue-500/40',
    items: ['$49B market by 2026', 'India Make in India push', '75% IIoT integration failures', 'PLI manufacturing incentives'],
  },
  {
    type: 'Threats',
    icon: CloudRain,
    gradient: 'from-red-500/20 to-purple-600/10',
    border: 'border-red-500/40',
    items: ['Siemens/Honeywell incumbents', 'AWS price competition', 'Cybersecurity regulations'],
  },
]

export function SwotSection() {
  return (
    <section id="swot" className="bg-slate-100 py-24 dark:bg-[#030712]">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader badge="SWOT Analysis" title="Strategic Position" subtitle="Honest assessment for investors and judges." />

        <div className="grid gap-6 md:grid-cols-2">
          {swot.map((card, i) => (
            <motion.div
              key={card.type}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={`glass rounded-2xl border bg-gradient-to-br p-6 ${card.gradient} ${card.border}`}
            >
              <card.icon className="mb-4 h-10 w-10 text-slate-700 dark:text-white" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">{card.type}</h3>
              <ul className="mt-4 space-y-2">
                {card.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-600 dark:text-gray-300">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
