import { useEffect, useState } from 'react'

export function useCounter(target, duration = 1800, start = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) return
    const isNum = !isNaN(parseInt(target))
    if (!isNum) { setCount(target); return }

    const end = parseInt(target)
    const step = Math.ceil(end / (duration / 16))
    let current = 0
    const timer = setInterval(() => {
      current += step
      if (current >= end) { setCount(end); clearInterval(timer) }
      else setCount(current)
    }, 16)
    return () => clearInterval(timer)
  }, [start, target, duration])

  return count
}
