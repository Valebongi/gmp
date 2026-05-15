function DotGrid() {
  return (
    <svg
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0 }}
      aria-hidden="true"
    >
      <defs>
        <pattern id="dots" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="1" fill="rgba(79,70,229,0.07)" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#dots)" />
    </svg>
  )
}

const ACCENT_COLORS = {
  default: { node: 'rgba(79,70,229,0.18)', line: 'rgba(79,70,229,0.06)' },
  foda:    { node: 'rgba(16,185,129,0.20)', line: 'rgba(16,185,129,0.07)' },
  came:    { node: 'rgba(59,130,246,0.20)', line: 'rgba(59,130,246,0.07)' },
  action:  { node: 'rgba(245,158,11,0.22)', line: 'rgba(245,158,11,0.07)' },
}

function GeometricAccent({ variant = 'default' }) {
  const { node, line } = ACCENT_COLORS[variant] || ACCENT_COLORS.default
  return (
    <svg
      style={{ position: 'absolute', right: 0, top: 0, width: '44%', height: '65%', pointerEvents: 'none', zIndex: 0 }}
      viewBox="0 0 380 280"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="310" cy="50"  r="5" fill={node} />
      <circle cx="200" cy="110" r="7" fill={node} />
      <circle cx="340" cy="170" r="4" fill={node} />
      <circle cx="120" cy="75"  r="5" fill={node} />
      <circle cx="260" cy="230" r="4" fill={node} />
      <circle cx="160" cy="180" r="3" fill={node} />
      <circle cx="290" cy="110" r="3" fill={node} />

      <line x1="310" y1="50"  x2="200" y2="110" stroke={line} strokeWidth="1.2" />
      <line x1="200" y1="110" x2="340" y2="170" stroke={line} strokeWidth="1" />
      <line x1="120" y1="75"  x2="200" y2="110" stroke={line} strokeWidth="1" />
      <line x1="340" y1="170" x2="260" y2="230" stroke={line} strokeWidth="0.9" />
      <line x1="310" y1="50"  x2="340" y2="170" stroke={line} strokeWidth="0.7" />
      <line x1="200" y1="110" x2="160" y2="180" stroke={line} strokeWidth="0.8" />
      <line x1="160" y1="180" x2="260" y2="230" stroke={line} strokeWidth="0.7" />
      <line x1="290" y1="110" x2="340" y2="170" stroke={line} strokeWidth="0.7" />
    </svg>
  )
}

export default function BackgroundSystem({ variant = 'default' }) {
  return (
    <div style={{
      position: 'absolute', inset: 0,
      background: 'radial-gradient(ellipse at -5% -5%, rgba(79,70,229,0.05) 0%, #FAFBFF 55%)',
      overflow: 'hidden',
    }}>
      <DotGrid />
      <GeometricAccent variant={variant} />
    </div>
  )
}
