import { motion } from 'framer-motion'
import { useTheme } from '@/contexts/ThemeContext'
import { cn } from '@/lib/utils'

interface SectionBackgroundProps {
  image: string
  children: React.ReactNode
  id?: string
  className?: string
  parallax?: boolean
}

export function SectionBackground({
  image,
  children,
  id,
  className,
  parallax = true,
}: SectionBackgroundProps) {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <section id={id} className={cn('relative min-h-screen overflow-hidden', className)}>
      <div className="absolute inset-0">
        <motion.img
          src={image}
          alt=""
          className="h-full w-full object-cover"
          initial={{ scale: 1.08 }}
          animate={{ scale: parallax ? 1.12 : 1.08 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse', ease: 'linear' }}
        />
        <motion.div
          className={cn(
            'absolute inset-0',
            isDark ? 'section-overlay-dark' : 'section-overlay-light',
          )}
          layout
          transition={{ duration: 0.5 }}
        />
        <div
          className={cn(
            'absolute inset-0 opacity-40',
            isDark
              ? 'bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.25),transparent_50%)]'
              : 'bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.12),transparent_50%)]',
          )}
        />
        <GridOverlay isDark={isDark} />
      </div>
      <div className="relative z-10">{children}</div>
    </section>
  )
}

function GridOverlay({ isDark }: { isDark: boolean }) {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage: isDark
          ? 'linear-gradient(rgba(59,130,246,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.08) 1px, transparent 1px)'
          : 'linear-gradient(rgba(59,130,246,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.06) 1px, transparent 1px)',
        backgroundSize: '48px 48px',
      }}
    />
  )
}
