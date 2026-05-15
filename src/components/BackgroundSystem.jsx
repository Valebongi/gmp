function DotGrid() {
  return (
    <svg
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0 }}
      aria-hidden="true"
    >
      <defs>
        <pattern id="dots" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="1.1" fill="rgba(79,70,229,0.11)" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#dots)" />
    </svg>
  )
}

const ACCENT_COLORS = {
  default: { node: 'rgba(79,70,229,0.28)', line: 'rgba(79,70,229,0.10)', glow: 'rgba(79,70,229,0.06)' },
  foda:    { node: 'rgba(5,150,105,0.30)',  line: 'rgba(5,150,105,0.11)',  glow: 'rgba(5,150,105,0.06)' },
  came:    { node: 'rgba(37,99,235,0.30)',  line: 'rgba(37,99,235,0.11)',  glow: 'rgba(37,99,235,0.06)' },
  action:  { node: 'rgba(217,119,6,0.32)',  line: 'rgba(217,119,6,0.11)',  glow: 'rgba(217,119,6,0.06)' },
}

function GeometricAccent({ variant = 'default' }) {
  const { node, line } = ACCENT_COLORS[variant] || ACCENT_COLORS.default
  return (
    <>
      {/* Top-right network */}
      <svg
        style={{ position: 'absolute', right: 0, top: 0, width: '46%', height: '68%', pointerEvents: 'none', zIndex: 0 }}
        viewBox="0 0 400 300"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="320" cy="48"  r="7" fill={node} />
        <circle cx="210" cy="108" r="9" fill={node} />
        <circle cx="355" cy="175" r="5" fill={node} />
        <circle cx="125" cy="72"  r="6" fill={node} />
        <circle cx="272" cy="238" r="5" fill={node} />
        <circle cx="168" cy="188" r="4" fill={node} />
        <circle cx="295" cy="115" r="4" fill={node} />
        <circle cx="380" cy="90"  r="3" fill={node} />
        <circle cx="240" cy="50"  r="3" fill={node} />

        <line x1="320" y1="48"  x2="210" y2="108" stroke={line} strokeWidth="1.5" />
        <line x1="210" y1="108" x2="355" y2="175" stroke={line} strokeWidth="1.2" />
        <line x1="125" y1="72"  x2="210" y2="108" stroke={line} strokeWidth="1.2" />
        <line x1="355" y1="175" x2="272" y2="238" stroke={line} strokeWidth="1.1" />
        <line x1="320" y1="48"  x2="355" y2="175" stroke={line} strokeWidth="0.9" />
        <line x1="210" y1="108" x2="168" y2="188" stroke={line} strokeWidth="1" />
        <line x1="168" y1="188" x2="272" y2="238" stroke={line} strokeWidth="0.9" />
        <line x1="295" y1="115" x2="355" y2="175" stroke={line} strokeWidth="0.9" />
        <line x1="380" y1="90"  x2="320" y2="48"  stroke={line} strokeWidth="0.8" />
        <line x1="240" y1="50"  x2="320" y2="48"  stroke={line} strokeWidth="0.7" />
        <line x1="295" y1="115" x2="210" y2="108" stroke={line} strokeWidth="0.7" />
      </svg>

      {/* Bottom-left subtle network */}
      <svg
        style={{ position: 'absolute', left: 0, bottom: 0, width: '30%', height: '45%', pointerEvents: 'none', zIndex: 0, opacity: 0.6 }}
        viewBox="0 0 280 220"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="40"  cy="180" r="5" fill={node} />
        <circle cx="120" cy="155" r="6" fill={node} />
        <circle cx="70"  cy="100" r="4" fill={node} />
        <circle cx="180" cy="120" r="4" fill={node} />
        <circle cx="95"  cy="210" r="3" fill={node} />

        <line x1="40"  y1="180" x2="120" y2="155" stroke={line} strokeWidth="1" />
        <line x1="120" y1="155" x2="70"  y2="100" stroke={line} strokeWidth="1" />
        <line x1="120" y1="155" x2="180" y2="120" stroke={line} strokeWidth="0.9" />
        <line x1="40"  y1="180" x2="95"  y2="210" stroke={line} strokeWidth="0.8" />
        <line x1="70"  y1="100" x2="180" y2="120" stroke={line} strokeWidth="0.7" />
      </svg>
    </>
  )
}

export default function BackgroundSystem({ variant = 'default' }) {
  const { glow } = ACCENT_COLORS[variant] || ACCENT_COLORS.default
  return (
    <div style={{
      position: 'absolute', inset: 0,
      background: `radial-gradient(ellipse at -8% -8%, rgba(79,70,229,0.07) 0%, #F8F9FF 52%), radial-gradient(ellipse at 110% 110%, ${glow} 0%, transparent 55%)`,
      overflow: 'hidden',
    }}>
      <DotGrid />
      <GeometricAccent variant={variant} />
    </div>
  )
}
