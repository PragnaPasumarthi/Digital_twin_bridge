import { useEffect, useState } from 'react'

export function useCountUp(
  end: number,
  duration = 2000,
  start = false,
  decimals = 0,
) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!start) return
    let frame: number
    const startTime = performance.now()

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Number((end * eased).toFixed(decimals)))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [end, duration, start, decimals])

  return value
}
