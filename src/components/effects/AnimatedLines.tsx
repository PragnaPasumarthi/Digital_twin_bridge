import { motion } from 'framer-motion'
import { useTheme } from '@/contexts/ThemeContext'

export function AnimatedLines() {
  const { theme } = useTheme()
  const stroke = theme === 'dark' ? '#3b82f6' : '#2563eb'

  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none opacity-30"
      preserveAspectRatio="none"
    >
      <motion.path
        d="M0,200 Q400,100 800,200 T1600,200"
        fill="none"
        stroke={stroke}
        strokeWidth="1"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.6 }}
        transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
      />
      <motion.path
        d="M0,400 Q500,300 1000,400 T2000,400"
        fill="none"
        stroke={theme === 'dark' ? '#f97316' : '#ea580c'}
        strokeWidth="1"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 4, delay: 0.5, repeat: Infinity, repeatType: 'reverse' }}
      />
    </svg>
  )
}
