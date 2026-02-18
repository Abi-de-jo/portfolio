'use client'

import { useEffect, useState, useRef } from 'react'
import { BlurTextEffect } from '@/components/blur-text-effect'

type Screen = 'mobile' | 'tablet' | 'desktop'

const socials = [
  {
    label: 'Instagram',
    handle: '@codebyabi',
    url: 'https://www.instagram.com/codebyabi/',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
      </svg>
    ),
  },
  {
    label: 'YouTube',
    handle: '@codebyabi',
    url: 'https://www.youtube.com/@codebyabi',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    handle: 'codebyabisheik',
    url: 'https://www.linkedin.com/in/codebyabisheik',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
]

const products = [
  { name: 'promptvibely.app', url: 'https://promptvibely.app' },
  { name: 'devpply.mozen.in', url: 'https://devpply.mozen.in' },
]

export default function Home() {
  const [screen, setScreen] = useState<Screen>('desktop')
  const [index, setIndex] = useState(0)
  const [time, setTime] = useState('')
  const [scrollProgress, setScrollProgress] = useState(0)
  const [mounted, setMounted] = useState(false)
  const cursorRef = useRef<HTMLDivElement>(null)
  const cursorDotRef = useRef<HTMLDivElement>(null)

  const stages = [
    {
      mobile: 'I build products.',
      tablet: 'I build digital products.',
      desktop: 'I build digital products that solve real problems.',
    },
    {
      mobile: 'Built to scale.',
      tablet: 'Built to scale from day one.',
      desktop: 'I build products designed to scale from day one.',
    },
    {
      mobile: 'Clarity over complexity.',
      tablet: 'Clarity over unnecessary complexity.',
      desktop: 'I build systems with clarity not unnecessary complexity.',
    },
    {
      mobile: 'Performance matters.',
      tablet: 'Performance and reliability matter.',
      desktop: 'Performance, reliability, and clean architecture matter.',
    },
    {
      mobile: 'Business first.',
      tablet: 'Business goals first.',
      desktop: 'Every line of code serves a business goal.',
    },
    {
      mobile: "Let's build.",
      tablet: "Let's build something that lasts.",
      desktop: "If you're building something serious — let's talk.",
    },
  ]

  useEffect(() => {
    setMounted(true)
    const handleResize = () => {
      const width = window.innerWidth
      if (width < 640) setScreen('mobile')
      else if (width < 1024) setScreen('tablet')
      else setScreen('desktop')
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const height = document.body.scrollHeight - window.innerHeight
      const progress = scrollY / height
      setScrollProgress(progress)
      const stage = Math.min(stages.length, Math.floor(progress * (stages.length + 1)))
      setIndex(stage)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
  if (typeof window === 'undefined') return
  const isTouch = window.matchMedia('(pointer: coarse)').matches
  if (isTouch) return // ← exit early on mobile/touch devices

  const moveCursor = (e: MouseEvent) => {
    if (cursorRef.current) {
      cursorRef.current.style.transform = `translate(${e.clientX - 16}px, ${e.clientY - 16}px)`
    }
    if (cursorDotRef.current) {
      cursorDotRef.current.style.transform = `translate(${e.clientX - 3}px, ${e.clientY - 3}px)`
    }
  }
  window.addEventListener('mousemove', moveCursor)
  return () => window.removeEventListener('mousemove', moveCursor)
}, [])

useEffect(() => {
  if (typeof window === 'undefined') return
  const isTouch = window.matchMedia('(pointer: coarse)').matches
  if (!isTouch) return // ← only run on touch devices

  const spawnComet = (x: number, y: number) => {
    const comet = document.createElement('div')
    comet.style.cssText = `
      position: fixed;
      left: ${x}px;
      top: ${y}px;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(255,255,255,0.95) 0%, rgba(180,120,255,0.6) 50%, transparent 100%);
      box-shadow: 0 0 8px 2px rgba(180,120,255,0.5), 0 0 20px 4px rgba(255,255,255,0.15);
      pointer-events: none;
      z-index: 9999;
      transform: translate(-50%, -50%);
      transition: opacity 0.5s ease, transform 0.5s ease;
    `
    document.body.appendChild(comet)

    // tail particles
    for (let i = 1; i <= 4; i++) {
      const tail = document.createElement('div')
      const size = 6 - i * 1.2
      tail.style.cssText = `
        position: fixed;
        left: ${x}px;
        top: ${y + i * 6}px;
        width: ${size}px;
        height: ${size}px;
        border-radius: 50%;
        background: rgba(180,120,255,${0.4 - i * 0.08});
        pointer-events: none;
        z-index: 9998;
        transform: translate(-50%, -50%);
        transition: opacity ${0.3 + i * 0.1}s ease;
      `
      document.body.appendChild(tail)
      requestAnimationFrame(() => {
        tail.style.opacity = '0'
      })
      setTimeout(() => tail.remove(), 500)
    }

    requestAnimationFrame(() => {
      comet.style.opacity = '0'
      comet.style.transform = 'translate(-50%, -50%) scale(1.8)'
    })
    setTimeout(() => comet.remove(), 600)
  }

  // Touch move → comet follows finger
  const handleTouchMove = (e: TouchEvent) => {
    const touch = e.touches[0]
    spawnComet(touch.clientX, touch.clientY)
  }

  // Scroll → comet appears at center-x, tracks scroll direction
  let lastScrollY = window.scrollY
  const handleScroll = () => {
    const currentScrollY = window.scrollY
    const direction = currentScrollY > lastScrollY ? 1 : -1
    lastScrollY = currentScrollY
    // spawn at a random x near center, y based on scroll position relative to viewport
    const x = window.innerWidth / 2 + (Math.random() - 0.5) * 80
    const y = direction > 0 ? window.innerHeight * 0.6 : window.innerHeight * 0.4
    spawnComet(x, y)
  }

  window.addEventListener('touchmove', handleTouchMove, { passive: true })
  window.addEventListener('scroll', handleScroll, { passive: true })
  return () => {
    window.removeEventListener('touchmove', handleTouchMove)
    window.removeEventListener('scroll', handleScroll)
  }
}, [])

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setTime(now.toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' }))
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  // Custom cursor (desktop only)
  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX - 16}px, ${e.clientY - 16}px)`
      }
      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = `translate(${e.clientX - 3}px, ${e.clientY - 3}px)`
      }
    }
    window.addEventListener('mousemove', moveCursor)
    return () => window.removeEventListener('mousemove', moveCursor)
  }, [])

  const isFinal = index >= stages.length

  if (!mounted) return null

  return (
    <>


{screen === 'desktop' && (
  <>
    <div
      ref={cursorRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: 32,
        height: 32,
        borderRadius: '50%',
        border: '1px solid rgba(255,255,255,0.4)',
        pointerEvents: 'none',
        zIndex: 9999,
        transition: 'transform 0.08s ease',
        willChange: 'transform',
      }}
    />
    <div
      ref={cursorDotRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: 6,
        height: 6,
        borderRadius: '50%',
        background: 'white',
        pointerEvents: 'none',
        zIndex: 9999,
        transition: 'transform 0.04s ease',
        willChange: 'transform',
      }}
    />
  </>
)}

      {/* Grain overlay */}
      <div className="grain" />

      {/* Scroll progress bar */}
      <div className="progress-bar" style={{ width: `${scrollProgress * 100}%` }} />

      {/* Ambient glows */}
      <div className="bg-glow" style={{ background: '#7c3aed', top: '10%', left: '5%' }} />
      <div className="bg-glow" style={{ background: '#0ea5e9', bottom: '10%', right: '5%' }} />

      <main className="relative bg-black text-white">
        <div className="h-[700vh]" />

        <div className="fixed inset-0 flex items-center justify-center px-6 text-center" style={{ zIndex: 10 }}>
          <div className="max-w-3xl mx-auto w-full px-4">

            {/* Clock */}
            <div
              className="absolute top-6 right-6 mono text-xs"
              style={{ color: 'rgba(255,255,255,0.25)', letterSpacing: '0.1em' }}
            >
              {time}
            </div>

            {/* Stage indicator dots */}
            {!isFinal && (
              <div
                className="absolute top-6 left-6 flex gap-1.5 items-center"
              >
                {stages.map((_, i) => (
                  <div
                    key={i}
                    style={{
                      width: i === index ? '20px' : '4px',
                      height: '4px',
                      borderRadius: '2px',
                      background: i === index ? 'rgba(255,255,255,0.6)' : 'rgba(255,255,255,0.15)',
                      transition: 'all 0.4s ease',
                    }}
                  />
                ))}
              </div>
            )}

            {/* Scrolling stages */}
            {!isFinal && (
              <div>
                <BlurTextEffect
                  className="stage-text"
 
                >
                  {stages[index][screen]}
                </BlurTextEffect>

                {index === 0 && (
                  <div className="mt-12 scroll-hint">
                    <p
                      className="mono"
                      style={{
                        fontSize: '11px',
                        color: 'rgba(255,255,255,0.25)',
                        letterSpacing: '0.2em',
                        textTransform: 'uppercase',
                      }}
                    >
                      scroll slowly ↓
                    </p>
                  </div>
                )}

                {/* Stage counter */}
                <p
                  className="mono absolute bottom-6 left-1/2"
                  style={{
                    transform: 'translateX(-50%)',
                    fontSize: '10px',
                    color: 'rgba(255,255,255,0.15)',
                    letterSpacing: '0.15em',
                  }}
                >
                  {String(index + 1).padStart(2, '0')} / {String(stages.length).padStart(2, '0')}
                </p>
              </div>
            )}

            {/* Final reveal */}
            {isFinal && (
              <div className="final-card">
                {/* Name */}
                <div style={{ marginBottom: '4px' }}>
                  <h1
                    className="stage-text"
                    style={{
                      fontSize: 'clamp(3rem, 8vw, 7rem)',
                      fontWeight: 300,
                      color: 'white',
                      letterSpacing: '-0.03em',
                      lineHeight: 1,
                    }}
                  >
                    Abisheik R
                  </h1>
                </div>

                <p
                  className="mono"
                  style={{
                    fontSize: '11px',
                    color: 'rgba(255,255,255,0.3)',
                    letterSpacing: '0.25em',
                    textTransform: 'uppercase',
                    marginBottom: '36px',
                  }}
                >
                  Software Developer
                </p>

                <div className="divider" />

                {/* Social links */}
                <div style={{ marginBottom: '28px' }}>
                  <p
                    className="mono"
                    style={{
                      fontSize: '10px',
                      color: 'rgba(255,255,255,0.2)',
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      marginBottom: '12px',
                      textAlign: 'left',
                    }}
                  >
                    Connect
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {socials.map((s) => (
                      <a
                        key={s.label}
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                      >
                        <span style={{ opacity: 0.5 }}>{s.icon}</span>
                        <span style={{ color: 'rgba(255,255,255,0.35)', marginRight: '6px' }}>
                          {s.label}
                        </span>
                        <span style={{ marginLeft: 'auto' }}>{s.handle}</span>
                      </a>
                    ))}
                  </div>
                </div>

                <div className="divider" />

                {/* Products */}
                <div style={{ marginBottom: '28px' }}>
                  <p
                    className="mono"
                    style={{
                      fontSize: '10px',
                      color: 'rgba(255,255,255,0.2)',
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      marginBottom: '8px',
                      textAlign: 'left',
                    }}
                  >
                    Products
                  </p>
                  {products.map((p) => (
                    <a
                      key={p.name}
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="product-link"
                    >
                      {p.name}
                    </a>
                  ))}
                </div>

                <div className="divider" />

                {/* Contact */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '6px',
                    marginBottom: '32px',
                  }}
                >
                  <a
                    href="mailto:developer.abisheik@gmail.com"
                    className="mono"
                    style={{
                      fontSize: '12px',
                      color: 'rgba(255,255,255,0.35)',
                      textDecoration: 'none',
                      transition: 'color 0.3s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.9)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.35)')}
                  >
                    developer.abisheik@gmail.com
                  </a>
                  <a
                    href="tel:+918072931396"
                    className="mono"
                    style={{
                      fontSize: '12px',
                      color: 'rgba(255,255,255,0.35)',
                      textDecoration: 'none',
                      transition: 'color 0.3s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.9)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.35)')}
                  >
                    +91 80729 31396
                  </a>
                </div>

                {/* Footer note */}
                <p
                  className="mono"
                  style={{
                    fontSize: '10px',
                    color: 'rgba(255,255,255,0.12)',
                    letterSpacing: '0.15em',
                  }}
                >
                  Thank you for scrolling patiently.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  )
}