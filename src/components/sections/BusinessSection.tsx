import { motion } from 'framer-motion'
import { DollarSign, Server, Building, Brain, Users } from 'lucide-react'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts'
import { SectionBackground } from '@/components/effects/SectionBackground'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { images } from '@/lib/images'
import { useTheme } from '@/contexts/ThemeContext'

const revenueStreams = [
  { icon: DollarSign, title: 'SaaS Subscriptions', desc: 'Per-machine monthly analytics tier' },
  { icon: Server, title: 'Edge Gateway Sales', desc: 'Hardware + setup packages' },
  { icon: Building, title: 'Enterprise Licensing', desc: 'Unlimited factory deployments' },
  { icon: Brain, title: 'AI Analytics Subscription', desc: 'Predictive maintenance modules' },
  { icon: Users, title: 'Industrial Consulting', desc: 'Integration & digital twin strategy' },
]

const pieData = [
  { name: 'SaaS', value: 35 },
  { name: 'Hardware', value: 25 },
  { name: 'Enterprise', value: 20 },
  { name: 'AI Analytics', value: 15 },
  { name: 'Consulting', value: 5 },
]

const COLORS = ['#3b82f6', '#f97316', '#a855f7', '#06b6d4', '#22c55e']

export function BusinessSection() {
  const { theme } = useTheme()

  return (
    <SectionBackground image={images.business} id="business" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          badge="Business Model"
          title="Multiple Revenue Streams"
          subtitle="Scalable B2B industrial SaaS with hardware attach."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            {revenueStreams.map((stream, i) => (
              <motion.div
                key={stream.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass flex items-start gap-4 rounded-xl p-5"
              >
                <stream.icon className="h-8 w-8 shrink-0 text-blue-500" />
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">{stream.title}</h4>
                  <p className="text-sm text-slate-600 dark:text-gray-400">{stream.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-6"
          >
            <h3 className="mb-4 text-center font-bold text-slate-900 dark:text-white">Revenue Mix (Y3 Projection)</h3>
            <ResponsiveContainer width="100%" height={280}>
              <PieChart>
                <Pie data={pieData} cx="50%" cy="50%" innerRadius={60} outerRadius={100} paddingAngle={4} dataKey="value">
                  {pieData.map((_, i) => (
                    <Cell key={i} fill={COLORS[i % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    background: theme === 'dark' ? '#1e293b' : '#fff',
                    borderRadius: 8,
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </motion.div>
        </div>
      </div>
    </SectionBackground>
  )
}
