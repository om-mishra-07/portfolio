import { useScroll, useTransform, motion } from 'framer-motion';

// Bottle shape path — coordinates within a 80 × 235 box.
// Cap (y 0–18) → curved shoulder (y 18–50) → straight body (y 50–215) → rounded base (y 215–235)
const BOTTLE_PATH =
  'M 28,0 L 52,0 L 52,18 C 66,28 68,38 68,50 L 68,215 Q 68,235 40,235 Q 12,235 12,215 L 12,50 C 12,38 14,28 28,18 Z';

const W = 80;   // viewBox width
const H = 235;  // viewBox height

// Top of the bottle body (shoulder end) — water starts here when full
const BODY_TOP = 70;

export default function WaterBottleAnimation() {
  const { scrollYProgress } = useScroll();

  // Cinematic scroll: falls down, drifts sideways, grows slightly
  const y      = useTransform(scrollYProgress, [0, 1], [0, 1600]);
  const x      = useTransform(scrollYProgress, [0, 0.33, 0.66, 1], [0, 100, -80, 40]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-2, 22]);
  const scale  = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  // Subtle background presence, fades out near the very bottom
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.88, 1],
    [0.25, 0.25, 0.05]
  );

  // Water surface translateY: BODY_TOP (full) → H (empty)
  const waterY = useTransform(scrollYProgress, [0, 1], [BODY_TOP, H]);

  return (
    <motion.div
      className="wba-fixed-pos fixed pointer-events-none z-[1]"
      style={{ right: '-5%', top: '10%', opacity, willChange: 'opacity' }}
      aria-hidden="true"
    >
      <motion.div
        style={{ y, x, rotate, scale, willChange: 'transform' }}
        className="relative select-none"
      >
        {/* Single SVG — viewBox scales all internals automatically */}
        <svg
          className="wba-bottle-svg"
          viewBox={`0 0 ${W} ${H}`}
          style={{ height: '80vh', width: 'auto', maxWidth: 'none', display: 'block' }}
          aria-hidden="true"
        >
          <defs>
            {/* Clip to bottle silhouette */}
            <clipPath id="wba-bottle-clip">
              <path d={BOTTLE_PATH} />
            </clipPath>

            {/* Water gradient — bright blue at bottom, deeper blue at top */}
            <linearGradient id="wba-water-grad" x1="0" y1="1" x2="0" y2="0">
              <stop offset="0%"   stopColor="#00c6ff" />
              <stop offset="100%" stopColor="#0072ff" />
            </linearGradient>

            {/* Subtle frosted-glass fill */}
            <linearGradient id="wba-glass" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%"   stopColor="white" stopOpacity="0.03" />
              <stop offset="20%"  stopColor="white" stopOpacity="0.10" />
              <stop offset="78%"  stopColor="white" stopOpacity="0.03" />
              <stop offset="100%" stopColor="white" stopOpacity="0.06" />
            </linearGradient>
          </defs>

          {/* Water fill — rect slides down as scroll increases, clipped to bottle */}
          <motion.rect
            x={0}
            width={W}
            height={H}
            fill="url(#wba-water-grad)"
            clipPath="url(#wba-bottle-clip)"
            style={{ y: waterY }}
          />

          {/* Wave ripple at water surface */}
          <motion.ellipse
            cx={W / 2}
            cy={0}
            rx={W / 2 + 2}
            ry={4}
            fill="rgba(147,197,253,0.45)"
            clipPath="url(#wba-bottle-clip)"
            style={{ y: waterY }}
            className="wba-wave-ellipse"
          />

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

          {/* Thin horizontal label-band suggestions */}
          <rect x="14" y="95"  width="52" height="0.5" fill="white" fillOpacity="0.06" />
          <rect x="14" y="155" width="52" height="0.5" fill="white" fillOpacity="0.06" />
        </svg>
      </motion.div>
    </motion.div>
  );
}
