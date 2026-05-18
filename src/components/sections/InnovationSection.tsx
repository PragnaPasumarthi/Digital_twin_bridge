import { motion } from 'framer-motion'
import { Brain, Database, Server, ArrowRight } from 'lucide-react'
import { SectionBackground } from '@/components/effects/SectionBackground'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { images } from '@/lib/images'

const pipeline = [
  { label: 'RAW MACHINE DATA', icon: Server, color: 'from-slate-500 to-slate-700' },
  { label: 'AI LLM PROTOCOL MAPPER', icon: Brain, color: 'from-blue-600 to-purple-600' },
  { label: 'OPC UA NORMALIZATION', icon: Database, color: 'from-cyan-500 to-blue-600' },
  { label: 'UNIFIED DIGITAL TWIN', icon: Server, color: 'from-orange-500 to-red-500' },
]

export function InnovationSection() {
  return (
    <SectionBackground image={images.ai} id="innovation" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          badge="AI Innovation"
          title="LLM-Powered Protocol Translation"
          subtitle="Claude/OpenAI maps unknown machine protocols automatically — cached in SQLite for zero recurring AI cost."
        />

        <div className="flex flex-col items-center gap-4 lg:flex-row lg:justify-center">
          {pipeline.map((step, i) => (
            <div key={step.label} className="flex items-center gap-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ scale: 1.05 }}
                className={`glass relative w-56 rounded-2xl bg-gradient-to-br ${step.color} p-6 text-center`}
              >
                <step.icon className="mx-auto mb-3 h-10 w-10 text-white" />
                <p className="text-xs font-bold tracking-wider text-white">{step.label}</p>
                {i === 1 && (
                  <motion.div
                    className="absolute inset-0 rounded-2xl border-2 border-blue-400"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                )}
              </motion.div>
              {i < pipeline.length - 1 && (
                <motion.div
                  animate={{ x: [0, 8, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="hidden lg:block"
                >
                  <ArrowRight className="h-8 w-8 text-blue-500" />
                </motion.div>
              )}
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid gap-8 lg:grid-cols-3"
        >
          <motion.div className="glass rounded-2xl p-6 text-center lg:col-span-1">
            <img src={images.sensors} alt="Raspberry Pi edge" className="mx-auto mb-4 h-40 rounded-xl object-cover" />
            <h3 className="font-bold text-slate-900 dark:text-white">Edge Gateway</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-gray-400">
              ESP32 + Raspberry Pi · Node-RED · On-premise protocol capture
            </p>
          </motion.div>
          <motion.div className="glass rounded-2xl p-6 lg:col-span-2">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-slate-900 dark:text-white">AI Engine + SQLite Cache</h3>
              <span className="rounded-full bg-green-500/20 px-3 py-1 text-xs font-bold text-green-400">
                Zero Recurring AI Cost
              </span>
            </div>
            <motion.div className="mt-4 space-y-3 font-mono text-sm">
              {['MQTT frame detected → LLM maps to OPC UA', 'Mapping cached in SQLite', 'Subsequent reads: 0 API calls', 'Grafana dashboard auto-updates'].map((line, i) => (
                <motion.p
                  key={line}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-lg bg-black/20 px-4 py-2 text-cyan-400 dark:bg-black/40"
                >
                  {'> '}{line}
                </motion.p>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </SectionBackground>
  )
}
