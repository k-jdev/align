"use client"

import { useState } from "react"
import Image from "next/image"

interface AccordionItem {
  title: string
  content: string
  note?: {
    text: string
  }
}

const ITEMS: AccordionItem[] = [
  {
    title: "Resources",
    content:
      "The full network early startups need but rarely have; engineers, designers, and operators, plus early testers who tell you what's working.",
  },
  {
    title: "Funding",
    content:
      "We back startups with anywhere from $50K to $250K+. We also share your project with investors in the Align network creating a path to a larger seed round.",
    note: {
      text: "Not every startup needs early funding. Many choose Align for the network and resources over the capital.",
    },
  },
  {
    title: "Exposure",
    content:
      "We get your startup in front of users, partners, and communities. We run social campaigns that turn attention into adoption, and adoption into revenue.",
  },
]

export function AccordionCards() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (i: number) => {
    setOpenIndex((prev) => (prev === i ? null : i))
  }

  return (
    <div className="w-full">
      {ITEMS.map((item, i) => {
        const isOpen = openIndex === i
        const isLast = i === ITEMS.length - 1

        return (
          <div
            key={item.title}
            className={`border-t border-align-text py-4 ${isLast ? "border-b" : ""}`}
          >
            <button
              type="button"
              onClick={() => toggle(i)}
              className="flex w-full items-center justify-between text-left"
            >
              <span className="font-sans text-[24px] leading-[40px] font-normal tracking-[-0.16px] text-align-text">
                {item.title}
              </span>
              {isOpen ? (
                <MinusIcon className="text-[#4a4a4a] transition-transform duration-300 ease-in-out" />
              ) : (
                <PlusIcon className="text-[#4a4a4a] transition-transform duration-300 ease-in-out" />
              )}
            </button>

            <div
              className="grid transition-all duration-300 ease-in-out"
              style={{
                gridTemplateRows: isOpen ? "1fr" : "0fr",
                opacity: isOpen ? 1 : 0,
              }}
            >
              <div className="overflow-hidden">
                {item.content && (
                  <div className="flex flex-col gap-2 pt-2">
                    <p className="font-sans text-[20px] leading-[1.4] font-normal tracking-[0] text-align-text">
                      {item.content}
                    </p>

                    {item.note && (
                      <div className="flex items-center gap-6 bg-[#e4e4e4] px-6 py-4">
                        <Image
                          src="/logo.svg"
                          alt=""
                          width={25}
                          height={27}
                          className="shrink-0 brightness-0"
                          draggable={false}
                        />
                        <p className="flex-1 font-sans text-[20px] leading-[1.4] font-normal tracking-[0] text-[#4a4a4a]">
                          {item.note.text}
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

function MinusIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className={`shrink-0 ${className ?? ""}`}
    >
      <path d="M5 11H19V13H5V11Z" fill="#111111" />
    </svg>
  )
}

function PlusIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className={`shrink-0 ${className ?? ""}`}
    >
      <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z" fill="#111111" />
    </svg>
  )
}
