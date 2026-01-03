"use client"

import { useRef, useState } from "react"

export default function HorizontalScroll({
  children,
}: {
  children: React.ReactNode
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  const onMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setStartX(e.pageX - containerRef.current!.offsetLeft)
    setScrollLeft(containerRef.current!.scrollLeft)
  }

  const onMouseLeave = () => setIsDragging(false)
  const onMouseUp = () => setIsDragging(false)

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    e.preventDefault()
    const x = e.pageX - containerRef.current!.offsetLeft
    const walk = (x - startX) * 1.5 // kecepatan geser
    containerRef.current!.scrollLeft = scrollLeft - walk
  }

  return (
    <div
      ref={containerRef}
      onMouseDown={onMouseDown}
      onMouseLeave={onMouseLeave}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
      className={`flex gap-1 overflow-x-auto cursor-grab scrollbar-hide px-4 ${
        isDragging ? "cursor-grabbing" : ""
      }`}
    >
      {children}
    </div>
  )
}
