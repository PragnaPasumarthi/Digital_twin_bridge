import { motion } from 'framer-motion'
import {
  Languages,
  Activity,
  Wrench,
  Plug,
  Cpu,
  GitBranch,
  Globe,
  LayoutDashboard,
  Wallet,
} from 'lucide-react'
import { SectionBackground } from '@/components/effects/SectionBackground'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { images } from '@/lib/images'

const features = [
  { icon: Languages, title: 'AI Protocol Translation', desc: 'LLM auto-maps any machine protocol to OPC UA' },
  { icon: Activity, title: 'Real-Time Monitoring', desc: 'Live digital twin with sub-second updates' },
  { icon: Wrench, title: 'Predictive Maintenance', desc: 'ML-driven fault prediction across all machines' },
  { icon: Plug, title: 'Plug-and-Play Integration', desc: 'Connect new machines in hours, not weeks' },
  { icon: Cpu, title: 'Edge Computing', desc: 'On-premise gateway — no cloud dependency' },
  { icon: GitBranch, title: 'Fault Correlation', desc: 'Cross-vendor alert correlation engine' },
  { icon: Globe, title: 'Universal Compatibility', desc: 'MQTT, Modbus, HTTP, OPC UA, proprietary' },
  { icon: LayoutDashboard, title: 'Unified Dashboard', desc: 'Single Grafana view for entire factory' },
  { icon: Wallet, title: 'Low-Cost Deployment', desc: '₹8K prototype — enterprise at fraction of cost' },
]

export function FeaturesSection() {
  return (
    <SectionBackground image={images.features} id="features" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          badge="Platform Features"
          title="Everything Factories Need to Unify IIoT"
          subtitle="Nine core capabilities that eliminate integration pain."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{
                y: -8,
                boxShadow: '0 0 40px rgba(59,130,246,0.25)',
              }}
              className="glass group overflow-hidden rounded-2xl p-6"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 transition-transform group-hover:scale-110">
                <f.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-gray-400">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionBackground>
  )
}
