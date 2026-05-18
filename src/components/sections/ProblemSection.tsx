import { motion } from 'framer-motion'
import { AlertTriangle, Layers, Lock, Clock, BarChart3, Users, Bot } from 'lucide-react'
import { SectionBackground } from '@/components/effects/SectionBackground'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { images } from '@/lib/images'

const protocols = ['MQTT', 'Modbus', 'HTTP', 'OPC UA', 'Proprietary']
const painPoints = [
  { icon: Layers, title: 'Multiple Dashboards', desc: 'Every vendor ships its own siloed UI' },
  { icon: BarChart3, title: 'Expensive Integration', desc: 'Custom connectors cost lakhs per machine' },
  { icon: AlertTriangle, title: 'No Fault Correlation', desc: 'Alerts never cross system boundaries' },
  { icon: Clock, title: 'Engineer Time Wasted', desc: '70% spent on data prep, not insights' },
  { icon: Lock, title: 'Vendor Lock-in', desc: 'Proprietary protocols trap factories' },
  { icon: Users, title: 'Slow Onboarding', desc: 'Weeks to connect a single new machine' },
  { icon: Bot, title: 'Impossible Autonomous AI', desc: 'Fragmented data blocks ML at scale' },
]

export function ProblemSection() {
  return (
    <SectionBackground image={images.problem} id="problem" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          badge="Industry Problem"
          title="Factories Are Drowning in Data Silos"
          subtitle="Disconnected machines, incompatible protocols, and fragmented dashboards block the Industry 4.0 vision."
        />

        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {protocols.map((p, i) => (
            <motion.span
              key={p}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-lg border border-red-500/40 bg-red-500/10 px-4 py-2 font-mono text-sm text-red-400"
            >
              {p}
            </motion.span>
          ))}
        </div>

        <div className="mb-16 grid gap-6 md:grid-cols-3">
          {[1, 2, 3].map((n) => (
            <motion.div
              key={n}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              viewport={{ once: true }}
              className="glass relative overflow-hidden rounded-2xl border border-red-500/20 p-6"
            >
              <div className="absolute right-2 top-2 h-3 w-3 animate-pulse rounded-full bg-red-500 shadow-[0_0_12px_red]" />
              <img
                src={images.factory}
                alt="Isolated machine"
                className="mb-4 h-32 w-full rounded-lg object-cover opacity-80"
              />
              <p className="font-semibold text-slate-900 dark:text-white">Machine Silo #{n}</p>
              <p className="text-sm text-slate-500 dark:text-gray-400">Incompatible protocol · No cross-talk</p>
            </motion.div>
          ))}
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {painPoints.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(239,68,68,0.2)' }}
              className="glass rounded-xl p-5"
            >
              <point.icon className="mb-3 h-8 w-8 text-red-500" />
              <h3 className="font-bold text-slate-900 dark:text-white">{point.title}</h3>
              <p className="mt-1 text-sm text-slate-600 dark:text-gray-400">{point.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionBackground>
  )
}
