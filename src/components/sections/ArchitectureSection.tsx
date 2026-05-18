import { motion } from 'framer-motion'
import { SectionBackground } from '@/components/effects/SectionBackground'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { images } from '@/lib/images'

const layers = [
  {
    title: 'Industrial Machines',
    color: 'border-orange-500/50',
    items: ['CNC · PLC · Sensors', 'Modbus · MQTT · HTTP', 'ESP32 Nodes'],
  },
  {
    title: 'AI Gateway Layer',
    color: 'border-blue-500/50',
    items: ['Node-RED Flows', 'Python AI Engine', 'MQTT Broker', 'OPC UA Server'],
  },
  {
    title: 'Storage Layer',
    color: 'border-purple-500/50',
    items: ['InfluxDB Time-Series', 'SQLite AI Cache', 'Protocol Mappings'],
  },
  {
    title: 'Dashboard & Analytics',
    color: 'border-cyan-500/50',
    items: ['Grafana Dashboard', 'Digital Twin UI', 'Predictive AI Analytics'],
  },
]

export function ArchitectureSection() {
  return (
    <SectionBackground image={images.architecture} id="architecture" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          badge="System Architecture"
          title="Four-Layer Industrial AI Stack"
          subtitle="From shop floor sensors to executive dashboards — one unified pipeline."
        />

        <div className="relative space-y-6">
          {layers.map((layer, i) => (
            <div key={layer.title}>
              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`glass rounded-2xl border-l-4 ${layer.color} p-6`}
              >
                <h3 className="mb-4 text-xl font-bold text-slate-900 dark:text-white">{layer.title}</h3>
                <motion.div className="flex flex-wrap gap-3">
                  {layer.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg bg-white/10 px-4 py-2 text-sm font-medium dark:bg-white/5"
                    >
                      {item}
                    </span>
                  ))}
                </motion.div>
              </motion.div>
              {i < layers.length - 1 && (
                <motion.div
                  className="mx-auto my-2 flex justify-center"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <div className="h-8 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500" />
                </motion.div>
              )}
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 overflow-hidden rounded-2xl"
        >
          <img
            src={images.controlRoom}
            alt="Architecture visualization"
            className="h-64 w-full object-cover opacity-90"
          />
        </motion.div>
      </div>
    </SectionBackground>
  )
}
