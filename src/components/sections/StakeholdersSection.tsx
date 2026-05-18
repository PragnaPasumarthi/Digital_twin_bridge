import { motion } from 'framer-motion'
import { Factory, Wrench, BarChart3, Network, Building2, Rocket } from 'lucide-react'
import { SectionBackground } from '@/components/effects/SectionBackground'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { images } from '@/lib/images'

const stakeholders = [
  { icon: Factory, role: 'Factory Owners', impact: '₹2Cr+ annual savings', img: images.factory },
  { icon: Wrench, role: 'Maintenance Engineers', impact: '80% less data prep time', img: images.robot },
  { icon: BarChart3, role: 'Plant Managers', impact: 'Unified KPI dashboard', img: images.dashboard },
  { icon: Network, role: 'IoT Integrators', impact: '10x faster deployments', img: images.sensors },
  { icon: Building2, role: 'Manufacturing Enterprises', impact: 'Vendor-neutral stack', img: images.controlRoom },
  { icon: Rocket, role: 'Smart Factory Startups', impact: '₹8K MVP to market', img: images.hero },
]

export function StakeholdersSection() {
  return (
    <SectionBackground image={images.stakeholders} id="stakeholders" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          badge="Stakeholders"
          title="Built for Every Factory Decision-Maker"
          subtitle="From shop floor to boardroom — measurable impact for every role."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {stakeholders.map((s, i) => (
            <motion.div
              key={s.role}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ scale: 1.02 }}
              className="glass overflow-hidden rounded-2xl"
            >
              <div className="relative h-40 overflow-hidden">
                <img
                  src={s.img}
                  alt={s.role}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <motion.div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <s.icon className="absolute bottom-3 left-4 h-8 w-8 text-blue-400" />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-slate-900 dark:text-white">{s.role}</h3>
                <p className="mt-1 text-sm font-semibold text-blue-500 dark:text-blue-400">{s.impact}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionBackground>
  )
}
