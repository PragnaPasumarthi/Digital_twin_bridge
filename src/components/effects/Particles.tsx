import { motion } from 'framer-motion'
import { useMemo } from 'react'
import { useTheme } from '@/contexts/ThemeContext'

export function Particles({ count = 40 }: { count?: number }) {
  const { theme } = useTheme()
  const particles = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 2 + Math.random() * 4,
        duration: 8 + Math.random() * 12,
        delay: Math.random() * 5,
      })),
    [count],
  )

  return (
    <motion.div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            background:
              theme === 'dark'
                ? 'rgba(59, 130, 246, 0.6)'
                : 'rgba(59, 130, 246, 0.35)',
            boxShadow:
              theme === 'dark'
                ? '0 0 12px rgba(59, 130, 246, 0.8)'
                : '0 0 8px rgba(59, 130, 246, 0.4)',
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.9, 0.2],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
    </motion.div>
  )
}
