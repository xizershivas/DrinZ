import { useEffect, useRef } from 'react'

const BLOBS = [
  { color: [212, 130, 10],  alpha: 0.45, radius: 900,  speed: 0.45 },
  { color: [30,  58,  92],  alpha: 0.35, radius: 1050, speed: 0.30 },
  { color: [212, 130, 10],  alpha: 0.30, radius: 780,  speed: 0.55 },
  { color: [30,  58,  92],  alpha: 0.28, radius: 950,  speed: 0.38 },
  { color: [252, 163, 17],  alpha: 0.25, radius: 700,  speed: 0.50 },
]

export default function ParticleBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx    = canvas.getContext('2d')
    let animId, W, H

    let blobs = []

    function resize() {
      W = canvas.width  = window.innerWidth
      H = canvas.height = window.innerHeight
    }

    function init() {
      resize()
      blobs = BLOBS.map(b => ({
        ...b,
        x:  Math.random() * W,
        y:  Math.random() * H,
        vx: (Math.random() - 0.5) * b.speed,
        vy: (Math.random() - 0.5) * b.speed,
      }))
    }

    function draw() {
      // Fill base background
      ctx.fillStyle = '#f4f7fb'
      ctx.fillRect(0, 0, W, H)

      blobs.forEach(b => {
        const grad = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.radius)
        grad.addColorStop(0,   `rgba(${b.color},${b.alpha})`)
        grad.addColorStop(0.5, `rgba(${b.color},${b.alpha * 0.5})`)
        grad.addColorStop(1,   `rgba(${b.color},0)`)

        ctx.beginPath()
        ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2)
        ctx.fillStyle = grad
        ctx.fill()

        b.x += b.vx
        b.y += b.vy

        if (b.x < -b.radius)     { b.x = -b.radius;     b.vx = Math.abs(b.vx) }
        if (b.x > W + b.radius)  { b.x = W + b.radius;  b.vx = -Math.abs(b.vx) }
        if (b.y < -b.radius)     { b.y = -b.radius;     b.vy = Math.abs(b.vy) }
        if (b.y > H + b.radius)  { b.y = H + b.radius;  b.vy = -Math.abs(b.vy) }
      })

      animId = requestAnimationFrame(draw)
    }

    init()
    draw()
    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}
    />
  )
}
