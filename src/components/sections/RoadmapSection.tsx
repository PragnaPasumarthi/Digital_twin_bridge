import { motion } from 'framer-motion'
import { SectionBackground } from '@/components/effects/SectionBackground'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { images } from '@/lib/images'

const milestones = [
  { year: '2026', title: 'Prototype', desc: 'Hackathon MVP · ESP32 + Raspberry Pi · AI protocol mapper' },
  { year: '2027', title: 'Pilot Deployments', desc: '3–5 factory pilots across India' },
  { year: '2028', title: 'Enterprise Expansion', desc: 'SaaS platform · Multi-site dashboards' },
  { year: '2029', title: 'Autonomous AI Factories', desc: 'Self-healing production lines' },
  { year: '2030', title: 'Global Industrial Platform', desc: 'International IIoT middleware leader' },
]

export function RoadmapSection() {
  return (
    <SectionBackground image={images.roadmap} id="roadmap" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader badge="Roadmap" title="Path to Global Industrial Platform" subtitle="From hackathon prototype to Industry 4.0 standard." />

        <div className="relative">
          <div className="absolute left-1/2 top-0 hidden h-full w-0.5 -translate-x-1/2 bg-gradient-to-b from-blue-500 via-purple-500 to-orange-500 md:block" />
          <div className="space-y-8">
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`flex flex-col gap-4 md:flex-row md:items-center ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className={`md:w-1/2 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <span className="text-3xl font-bold text-gradient">{m.year}</span>
                  <h3 className="mt-1 text-xl font-bold text-slate-900 dark:text-white">{m.title}</h3>
                  <p className="mt-2 text-slate-600 dark:text-gray-400">{m.desc}</p>
                </div>
                <div className="relative z-10 mx-auto hidden h-4 w-4 rounded-full bg-blue-500 shadow-[0_0_20px_#3b82f6] md:block" />
                <div className="md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionBackground>
  )
}
