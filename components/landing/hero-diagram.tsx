"use client"

import { useCallback, useRef, useState, type MouseEvent } from "react"
import { InfoCard, type InfoCardProps } from "./info-card"

const CARDS: InfoCardProps[] = [
  {
    badge: "Powering Startups",
    text: "We back founders with funding, resources, and the one thing money can't buy. The network.",
    cta: { label: "Pitch us", href: "/pitch" },
    images: [
      "/images/hero/card1.png",
      "/images/hero/card2.png",
      "/images/hero/card3.png",
    ],
    avatarCount: 30,
  },
  {
    badge: "Curating Investors",
    text: "Early access to the projects we back and the conviction that only comes from being involved.",
    cta: { label: "Join as investor", href: "/join" },
  },
  {
    badge: "Aligning Participants",
    text: "One network, aligning the people who build and the people who back them.",
    cta: { label: "About us", href: "/about" },
  },
]

export function HeroDiagram() {
  const containerRef = useRef<HTMLElement>(null)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const handleMouseMove = useCallback((e: MouseEvent<HTMLElement>) => {
    const section = containerRef.current
    if (!section) return

    const rect = section.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const mx = (e.clientX - cx) / (rect.width / 2)
    const my = (e.clientY - cy) / (rect.height / 2)

    section.style.setProperty("--mx", mx.toFixed(4))
    section.style.setProperty("--my", my.toFixed(4))
  }, [])

  const handleMouseLeave = useCallback(() => {
    const s = containerRef.current
    if (s) {
      s.style.setProperty("--mx", "0")
      s.style.setProperty("--my", "0")
    }
  }, [])

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative h-[636px] w-full overflow-hidden bg-align-bg"
    >
      {/* ---- VIDEO + BLUR (only element with parallax) ---- */}
      <div
        className="absolute top-1/2 left-1/2 h-[636px] w-[620px] -translate-x-1/2 -translate-y-1/2"
        style={{
          perspective: "1200px",
        }}
      >
        {/* 3D tilt wrapper — video only */}
        <div
          className="absolute inset-0"
          style={{
            transformStyle: "preserve-3d",
            transform:
              "rotateY(calc(var(--mx) * -12deg)) rotateX(calc(var(--my) * 8deg))",
            transition: "transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)",
            willChange: "transform",
          }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 size-full object-cover"
            style={{
              transform:
                "translateZ(-80px) translate(calc(var(--mx) * 15px), calc(var(--my) * 15px))",
            }}
          >
            <source src="/bg.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Blur overlay — 5×5 grid, integer sizes to avoid sub-pixel gaps */}
        <div
          className="absolute top-[303px] left-[40px] grid h-[205px] w-[205px] grid-cols-5 grid-rows-5 gap-0"
          style={{
            transform:
              "translate(calc(var(--mx) * 10px), calc(var(--my) * 10px))",
            transition: "transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)",
            willChange: "transform",
          }}
        >
          {Array.from({ length: 25 }).map((_, i) => (
            <div key={i} className="backdrop-blur-[22.8px]" />
          ))}
        </div>
      </div>

      {/* ---- STATIC OVERLAY: arrows, cards, dots, squares ---- */}
      {/* Arrows */}
      <div className="absolute top-[228px] left-[calc(50%-306px)] flex h-[165.5px] w-[193.7px] items-center justify-center">
        <div className="flex-none rotate-[40.52deg]">
          <div
            className={`h-0 w-[254.8px] border-t-2 transition-none ${
              hoveredCard === 0 ? "border-align-green" : "border-black"
            }`}
          />
        </div>
      </div>

      <div className="absolute top-[179px] left-[calc(50%+93px)] flex h-[83px] w-[205px] items-center justify-center">
        <div className="flex-none rotate-[157.96deg]">
          <div
            className={`h-0 w-[221.2px] border-t-2 transition-none ${
              hoveredCard === 1 ? "border-align-green" : "border-black"
            }`}
          />
        </div>
      </div>

      <div className="absolute top-[423px] left-[calc(50%+18px)] flex h-[58px] w-[248px] items-center justify-center">
        <div className="flex-none rotate-[-166.84deg]">
          <div
            className={`h-0 w-[254.7px] border-t-2 transition-none ${
              hoveredCard === 2 ? "border-align-green" : "border-black"
            }`}
          />
        </div>
      </div>

      {/* Cards */}
      <div
        className="absolute top-[102px] left-[calc(50%-591px)]"
        onMouseEnter={() => setHoveredCard(0)}
        onMouseLeave={() => setHoveredCard(null)}
      >
        <InfoCard {...CARDS[0]} />
      </div>
      <div
        className={`absolute top-[224px] left-[calc(50%-310px)] size-2 transition-none ${
          hoveredCard === 0 ? "bg-align-green" : "bg-black"
        }`}
      />
      <svg
        className={`absolute top-[216px] left-[calc(50%-318px)] size-6 overflow-visible transition-none ${
          hoveredCard === 0 ? "animate-dash opacity-100" : "opacity-0"
        }`}
        viewBox="0 0 24 24"
      >
        <rect
          x="0"
          y="0"
          width="24"
          height="24"
          fill="none"
          stroke="#26e500"
          strokeWidth="1"
          strokeDasharray="6 8"
        />
      </svg>

      <div
        className="absolute top-[93px] left-[calc(50%+298px)]"
        onMouseEnter={() => setHoveredCard(1)}
        onMouseLeave={() => setHoveredCard(null)}
      >
        <InfoCard {...CARDS[1]} />
      </div>
      <div
        className={`absolute top-[176px] left-[calc(50%+294px)] size-2 transition-none ${
          hoveredCard === 1 ? "bg-align-green" : "bg-black"
        }`}
      />
      <svg
        className={`absolute top-[168px] left-[calc(50%+286px)] size-6 overflow-visible transition-none ${
          hoveredCard === 1 ? "animate-dash opacity-100" : "opacity-0"
        }`}
        viewBox="0 0 24 24"
      >
        <rect
          x="0"
          y="0"
          width="24"
          height="24"
          fill="none"
          stroke="#26e500"
          strokeWidth="1"
          strokeDasharray="6 8"
        />
      </svg>

      <div
        className="absolute top-[402px] left-[calc(50%+266px)]"
        onMouseEnter={() => setHoveredCard(2)}
        onMouseLeave={() => setHoveredCard(null)}
      >
        <InfoCard {...CARDS[2]} />
      </div>
      <div
        className={`absolute top-[477px] left-[calc(50%+262px)] size-2 transition-none ${
          hoveredCard === 2 ? "bg-align-green" : "bg-black"
        }`}
      />
      <svg
        className={`absolute top-[469px] left-[calc(50%+254px)] size-6 overflow-visible transition-none ${
          hoveredCard === 2 ? "animate-dash opacity-100" : "opacity-0"
        }`}
        viewBox="0 0 24 24"
      >
        <rect
          x="0"
          y="0"
          width="24"
          height="24"
          fill="none"
          stroke="#26e500"
          strokeWidth="1"
          strokeDasharray="6 8"
        />
      </svg>

      {/* Green squares */}
      <div className="absolute top-[239px] left-[calc(50%+72px)] size-[42px] border-2 border-align-green" />
      <div className="absolute top-[402px] left-[calc(50%-5px)] size-[42px] border-2 border-align-green" />
      <div className="absolute top-[370px] left-[calc(50%-134.5px)] size-[42px] border-2 border-align-green" />
    </section>
  )
}
