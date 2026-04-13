import { useScroll, useTransform, motion } from 'framer-motion';

// Bottle shape path — coordinates within a 80 × 235 box.
// Cap (y 0–18) → curved shoulder (y 18–50) → straight body (y 50–215) → rounded base (y 215–235)
const BOTTLE_PATH =
  'M 28,0 L 52,0 L 52,18 C 66,28 68,38 68,50 L 68,215 Q 68,235 40,235 Q 12,235 12,215 L 12,50 C 12,38 14,28 28,18 Z';

const W = 80;   // viewBox / container width
const H = 235;  // viewBox / container height

// Height of the bottle body (the part that holds water)
const BODY_HEIGHT = 165;

export default function WaterBottleAnimation() {
  const { scrollYProgress } = useScroll();

  // Bottle drifts down, tilts, and shrinks slightly as the user scrolls
  const y       = useTransform(scrollYProgress, [0, 1], [80, 420]);
  const rotate  = useTransform(scrollYProgress, [0, 1], [-2, 22]);
  const scale   = useTransform(scrollYProgress, [0, 1], [1, 0.88]);

  // Visible on page load, stay visible, then fade out near the very bottom
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.88, 1],
    [0.65, 0.65, 0.05]
  );

  // Water column height shrinks from full body to zero
  const waterHeight = useTransform(scrollYProgress, [0, 1], [BODY_HEIGHT, 0]);

  return (
    <motion.div
      className="fixed right-4 md:right-14 top-0 pointer-events-none z-[1]"
      style={{ opacity, willChange: 'opacity' }}
      aria-hidden="true"
    >
      <motion.div
        style={{ y, rotate, scale, willChange: 'transform' }}
        className="relative select-none"
      >
        {/* ── Bottle silhouette clipped container ─────────────────────── */}
        {/* Everything inside here (water) is clipped to the bottle shape  */}
        <div
          style={{
            width: `${W}px`,
            height: `${H}px`,
            clipPath: `path("${BOTTLE_PATH}")`,
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Water fill — anchored at bottom, height shrinks on scroll */}
          <motion.div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: waterHeight,
              background:
                'linear-gradient(180deg, rgba(96,165,250,0.82) 0%, rgba(29,78,216,0.9) 100%)',
              willChange: 'height',
            }}
          >
            {/* Wave ripple at the water surface */}
            <div className="wba-wave-surface" />
          </motion.div>
        </div>

        {/* ── Glass / bottle SVG overlay ───────────────────────────────── */}
        {/* Rendered on top of the water div to create a glass-like look   */}
        <svg
          viewBox={`0 0 ${W} ${H}`}
          width={W}
          height={H}
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            overflow: 'visible',
          }}
        >
          <defs>
            {/* Subtle frosted-glass fill gradient */}
            <linearGradient id="wba-glass" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%"   stopColor="white" stopOpacity="0.03" />
              <stop offset="20%"  stopColor="white" stopOpacity="0.10" />
              <stop offset="78%"  stopColor="white" stopOpacity="0.03" />
              <stop offset="100%" stopColor="white" stopOpacity="0.06" />
            </linearGradient>
          </defs>

          {/* Frosted-glass interior fill */}
          <path d={BOTTLE_PATH} fill="url(#wba-glass)" />

          {/* Bottle outline */}
          <path
            d={BOTTLE_PATH}
            fill="none"
            stroke="rgba(255,255,255,0.18)"
            strokeWidth="1"
          />

          {/* Left-edge light scatter */}
          <line
            x1="19" y1="55" x2="19" y2="200"
            stroke="white" strokeOpacity="0.07"
            strokeWidth="3" strokeLinecap="round"
          />

          {/* Right primary specular highlight */}
          <line
            x1="60" y1="55" x2="60" y2="195"
            stroke="white" strokeOpacity="0.13"
            strokeWidth="2" strokeLinecap="round"
          />

          {/* Narrow secondary highlight */}
          <line
            x1="63" y1="72" x2="63" y2="138"
            stroke="white" strokeOpacity="0.06"
            strokeWidth="1.5" strokeLinecap="round"
          />

          {/* Thin horizontal label-band suggestion */}
          <rect
            x="14" y="95" width="52" height="0.5"
            fill="white" fillOpacity="0.06"
          />
          <rect
            x="14" y="155" width="52" height="0.5"
            fill="white" fillOpacity="0.06"
          />
        </svg>
      </motion.div>
    </motion.div>
  );
}
