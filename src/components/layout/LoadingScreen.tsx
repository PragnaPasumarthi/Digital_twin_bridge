import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval)
          setTimeout(onComplete, 400)
          return 100
        }
        return p + 4
      })
    }, 40)
    return () => clearInterval(interval)
  }, [onComplete])

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#030712]"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        className="mb-8 h-16 w-16 rounded-full border-2 border-blue-500/30 border-t-blue-500"
      />
      <h2 className="mb-2 text-2xl font-bold text-white">Digital Twin Bridge</h2>
      <p className="mb-6 text-sm text-gray-400">Initializing Industrial AI Middleware...</p>
      <div className="h-1 w-64 overflow-hidden rounded-full bg-white/10">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-500 to-cyan-400"
          style={{ width: `${progress}%` }}
        />
      </div>
      <span className="mt-2 font-mono text-xs text-blue-400">{progress}%</span>
    </motion.div>
  )
}
