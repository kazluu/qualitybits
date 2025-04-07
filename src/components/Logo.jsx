import { useId } from 'react'
import clsx from 'clsx'

export function Logo({
  className,
  invert = false,
  filled = false,
  fillOnHover = false,
  ...props
}) {
  return (
    <div className="flex items-center">
      <span className={clsx("text-4xl rounded-full border border-neutral-950 p-2", invert ? "bg-neutral-950 text-white" : "bg-white text-neutral-950")}>λ</span>
      <span className="text-lg font-semibold">QualityBits</span>
    </div>
  )
}
