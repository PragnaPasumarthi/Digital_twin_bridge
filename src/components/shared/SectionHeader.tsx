import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface SectionHeaderProps {
  badge?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeader({
  badge,
  title,
  subtitle,
  align = 'center',
  className,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={cn(
        'mb-16 glass rounded-3xl p-8 md:p-12',
        align === 'center' ? 'mx-auto max-w-3xl text-center flex flex-col items-center' : 'max-w-3xl',
        className,
      )}
    >
      {badge && (
        <span className="mb-4 inline-block rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-blue-500 dark:text-blue-400">
          {badge}
        </span>
      )}
      <h2 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-slate-600 dark:text-gray-400">{subtitle}</p>
      )}
    </motion.div>
  )
}
