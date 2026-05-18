import { motion } from 'framer-motion'
import { Check, X } from 'lucide-react'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from 'recharts'
import { SectionBackground } from '@/components/effects/SectionBackground'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { images } from '@/lib/images'
import { useTheme } from '@/contexts/ThemeContext'

const marketData = [
  { year: '2022', global: 12, india: 2.1 },
  { year: '2023', global: 18, india: 3.4 },
  { year: '2024', global: 26, india: 5.2 },
  { year: '2025', global: 35, india: 8.1 },
  { year: '2026', global: 49, india: 12.5 },
]

const cagrData = [
  { segment: 'Digital Twin', value: 31 },
  { segment: 'IIoT Platform', value: 24 },
  { segment: 'Predictive Maint.', value: 28 },
  { segment: 'Edge AI', value: 35 },
]

const competitors = [
  { name: 'Siemens MindSphere', ai: false, neutral: false, protocol: false },
  { name: 'Honeywell Forge', ai: false, neutral: false, protocol: true },
  { name: 'AWS IoT SiteWise', ai: true, neutral: false, protocol: true },
  { name: 'Litmus Edge', ai: false, neutral: true, protocol: true },
  { name: 'Digital Twin Bridge', ai: true, neutral: true, protocol: true, highlight: true },
]

export function MarketSection() {
  const { theme } = useTheme()
  const gridColor = theme === 'dark' ? '#334155' : '#e2e8f0'
  const textColor = theme === 'dark' ? '#94a3b8' : '#64748b'

  return (
    <SectionBackground image={images.market} id="market" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          badge="Market Research"
          title="$49B Digital Twin Market by 2026"
          subtitle="31% CAGR · India IIoT growing 40%+ YoY · Massive integration gap = our opportunity"
        />

        <div className="mb-12 grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-6"
          >
            <h3 className="mb-4 font-bold text-slate-900 dark:text-white">Global Market Growth ($B)</h3>
            <ResponsiveContainer width="100%" height={260}>
              <AreaChart data={marketData}>
                <defs>
                  <linearGradient id="glow" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.4} />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
                <XAxis dataKey="year" stroke={textColor} />
                <YAxis stroke={textColor} />
                <Tooltip
                  contentStyle={{
                    background: theme === 'dark' ? '#1e293b' : '#fff',
                    border: '1px solid #3b82f6',
                    borderRadius: 8,
                  }}
                />
                <Area type="monotone" dataKey="global" stroke="#3b82f6" fill="url(#glow)" strokeWidth={2} />
                <Area type="monotone" dataKey="india" stroke="#f97316" fill="transparent" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-6"
          >
            <h3 className="mb-4 font-bold text-slate-900 dark:text-white">CAGR by Segment (%)</h3>
            <ResponsiveContainer width="100%" height={260}>
              <BarChart data={cagrData}>
                <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
                <XAxis dataKey="segment" stroke={textColor} tick={{ fontSize: 11 }} />
                <YAxis stroke={textColor} />
                <Tooltip />
                <Bar dataKey="value" fill="#a855f7" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {competitors.map((c) => (
            <motion.div
              key={c.name}
              whileHover={{ y: -4 }}
              className={`glass rounded-xl p-5 ${c.highlight ? 'ring-2 ring-blue-500 glow-blue' : ''}`}
            >
              <h4 className={`font-bold ${c.highlight ? 'text-blue-400' : 'text-slate-900 dark:text-white'}`}>
                {c.name}
              </h4>
              <ul className="mt-3 space-y-2 text-sm">
                {[
                  ['AI Auto Mapping', c.ai],
                  ['Vendor Neutral', c.neutral],
                  ['Universal Protocol', c.protocol],
                ].map(([label, ok]) => (
                  <li key={String(label)} className="flex items-center gap-2">
                    {ok ? <Check className="h-4 w-4 text-green-500" /> : <X className="h-4 w-4 text-red-500" />}
                    <span className="text-slate-600 dark:text-gray-400">{label}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionBackground>
  )
}
