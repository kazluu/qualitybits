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
      <span className="text-lg font-semibold">&lt;/&gt; QualityBits</span>
    </div>
  )
}
