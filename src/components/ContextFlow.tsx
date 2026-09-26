type Props = { inverted?: boolean }

export default function ContextFlow({ inverted = false }: Props) {
  const c = inverted
    ? {
        nodeFill: '#192118',
        nodeBorder: '#2a3330',
        label: '#a8b5ac',
        connector: '#2a3330',
        arrowFill: '#2a3330',
        dot: '#1e6b47',
        green: '#1e6b47',
      }
    : {
        nodeFill: '#fafbf7',
        nodeBorder: '#c9cec8',
        label: '#626b64',
        connector: '#c9cec8',
        arrowFill: '#c9cec8',
        dot: '#1e6b47',
        green: '#1e6b47',
      }

  const styleContent = `
    @keyframes cf-n1 {
      0%,  18% { stroke: ${c.green}; }
      24%, 100% { stroke: ${c.nodeBorder}; }
    }
    @keyframes cf-n2 {
      0%,  38% { stroke: ${c.nodeBorder}; }
      40%, 58% { stroke: ${c.green}; }
      64%, 100% { stroke: ${c.nodeBorder}; }
    }
    @keyframes cf-n3 {
      0%,  78% { stroke: ${c.nodeBorder}; }
      80%, 96% { stroke: ${c.green}; }
      100%      { stroke: ${c.nodeBorder}; }
    }
    @media (prefers-reduced-motion: reduce) {
      .cf-node-anim { animation: none !important; }
      .cf-dot-el    { display: none; }
    }
  `

  return (
    <svg
      viewBox="0 0 400 82"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Context flow diagram: Knowledge connects to Tools connects to Review"
      className="w-full max-w-[400px]"
      focusable="false"
    >
      <style>{styleContent}</style>

      <defs>
        <marker
          id="cf-arrow"
          viewBox="0 0 6 6"
          refX="5.5"
          refY="3"
          markerWidth="4"
          markerHeight="4"
          orient="auto"
        >
          <path d="M 0 0.5 L 5.5 3 L 0 5.5 Z" fill={c.arrowFill} />
        </marker>
      </defs>

      {/* Connecting lines */}
      <line
        x1="84" y1="34" x2="174" y2="34"
        stroke={c.connector}
        strokeWidth="1"
        markerEnd="url(#cf-arrow)"
      />
      <line
        x1="226" y1="34" x2="314" y2="34"
        stroke={c.connector}
        strokeWidth="1"
        markerEnd="url(#cf-arrow)"
      />

      {/* Nodes */}
      <circle
        cx="60" cy="34" r="22"
        fill={c.nodeFill}
        stroke={c.nodeBorder}
        strokeWidth="1.5"
        className="cf-node-anim"
        style={{ animation: `cf-n1 4s linear infinite` }}
      />
      <circle
        cx="200" cy="34" r="22"
        fill={c.nodeFill}
        stroke={c.nodeBorder}
        strokeWidth="1.5"
        className="cf-node-anim"
        style={{ animation: `cf-n2 4s linear infinite` }}
      />
      <circle
        cx="340" cy="34" r="22"
        fill={c.nodeFill}
        stroke={c.nodeBorder}
        strokeWidth="1.5"
        className="cf-node-anim"
        style={{ animation: `cf-n3 4s linear infinite` }}
      />

      {/* Node labels inside */}
      <text
        x="60" y="37"
        textAnchor="middle"
        dominantBaseline="middle"
        fill={c.label}
        fontFamily="IBM Plex Sans, ui-sans-serif, sans-serif"
        fontSize="9"
        fontWeight="500"
        letterSpacing="0.02em"
      >K</text>
      <text
        x="200" y="37"
        textAnchor="middle"
        dominantBaseline="middle"
        fill={c.label}
        fontFamily="IBM Plex Sans, ui-sans-serif, sans-serif"
        fontSize="9"
        fontWeight="500"
        letterSpacing="0.02em"
      >T</text>
      <text
        x="340" y="37"
        textAnchor="middle"
        dominantBaseline="middle"
        fill={c.label}
        fontFamily="IBM Plex Sans, ui-sans-serif, sans-serif"
        fontSize="9"
        fontWeight="500"
        letterSpacing="0.02em"
      >R</text>

      {/* Labels below nodes */}
      <text
        x="60" y="70"
        textAnchor="middle"
        fill={c.label}
        fontFamily="IBM Plex Sans, ui-sans-serif, sans-serif"
        fontSize="10"
        fontWeight="500"
      >Knowledge</text>
      <text
        x="200" y="70"
        textAnchor="middle"
        fill={c.label}
        fontFamily="IBM Plex Sans, ui-sans-serif, sans-serif"
        fontSize="10"
        fontWeight="500"
      >Tools</text>
      <text
        x="340" y="70"
        textAnchor="middle"
        fill={c.label}
        fontFamily="IBM Plex Sans, ui-sans-serif, sans-serif"
        fontSize="10"
        fontWeight="500"
      >Review</text>

      {/* Animated signal dot */}
      <circle r="4" fill={c.dot} className="cf-dot-el">
        <animateMotion
          dur="4s"
          repeatCount="indefinite"
          calcMode="linear"
          keyPoints="0;0;0.5;0.5;1;1"
          keyTimes="0;0.2;0.4;0.6;0.8;1"
          path="M 60 34 L 200 34 L 340 34"
        />
      </circle>
    </svg>
  )
}
