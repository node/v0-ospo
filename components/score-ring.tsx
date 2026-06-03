interface ScoreRingProps {
  value: number
  label?: string
  size?: number
  strokeWidth?: number
}

export function ScoreRing({ value, label, size = 192, strokeWidth = 12 }: ScoreRingProps) {
  const radius = (size - strokeWidth) / 2 - 4
  const cx = size / 2
  const cy = size / 2
  const circumference = 2 * Math.PI * radius
  const dash = (Math.max(0, Math.min(100, value)) / 100) * circumference

  return (
    <div
      className="relative"
      style={{ width: size, height: size }}
      role="img"
      aria-label={label ? `${label}: ${value}` : `${value}`}
    >
      <svg
        className="w-full h-full -rotate-90"
        viewBox={`0 0 ${size} ${size}`}
        aria-hidden="true"
      >
        <circle
          cx={cx}
          cy={cy}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="none"
          className="text-muted"
        />
        <circle
          cx={cx}
          cy={cy}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={`${dash} ${circumference}`}
          className="text-primary"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center flex-col">
        <div className="text-4xl font-bold">{value}</div>
        {label && <div className="text-sm text-muted-foreground">{label}</div>}
      </div>
    </div>
  )
}
