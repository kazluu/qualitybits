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
      <span className={clsx("text-xl rounded-full w-12 h-12 flex items-center justify-center pb-0.5 font-semibold", invert ? "bg-neutral-950 text-white" : "bg-white text-neutral-950")}>&lt;/&gt;</span>
      <span className="pl-1 text-lg font-semibold">QualityBits</span>
    </div>
  )
}
