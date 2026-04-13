import { useScroll, useTransform, motion } from 'framer-motion';

// Bottle shape path — coordinates within a 80 × 260 box.
// Cap (y 0–20) → neck (y 20–40) → curved shoulder (y 40–65) → straight body (y 65–230) → rounded base (y 230–260)
const BOTTLE_PATH =
  'M 30,0 L 50,0 L 50,20 C 50,20 54,22 55,28 L 57,40 C 64,50 67,58 67,65 L 67,230 Q 67,260 40,260 Q 13,260 13,230 L 13,65 C 13,58 16,50 23,40 L 25,28 C 26,22 30,20 30,20 Z';

const W = 80;   // viewBox width
const H = 260;  // viewBox height

// Top of the bottle body (shoulder end) — water starts here when full
const BODY_TOP = 75;

// Scroll progress keyframes for the accelerated water drain curve:
// water empties 30 % of its depth by 30 % scroll, 75 % by 70 % scroll, then fully empty.
const DRAIN_KEYFRAMES = [0, 0.3, 0.7, 1];

export default function WaterBottleAnimation() {
  const { scrollYProgress } = useScroll();

  // Subtle float: small vertical drift only, bottle stays in viewport
  const y      = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const scale  = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  // Slightly more visible since centered; fades near end
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.85, 1],
    [0.3, 0.35, 0.08]
  );

  // Water drains faster as rotation increases (rotation maxes at scroll=1)
  // Use an eased curve so water drains more aggressively mid-scroll
  const waterY = useTransform(
    scrollYProgress,
    DRAIN_KEYFRAMES,
    [
      BODY_TOP,
      BODY_TOP + (H - BODY_TOP) * 0.3,
      BODY_TOP + (H - BODY_TOP) * 0.75,
      H,
    ]
  );

  return (
    <motion.div
      className="wba-fixed-pos fixed pointer-events-none"
      style={{
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: -1,
        opacity,
        willChange: 'opacity',
        filter: 'drop-shadow(0 8px 32px rgba(0,114,255,0.25)) drop-shadow(0 2px 8px rgba(0,198,255,0.15))',
      }}
      aria-hidden="true"
    >
      <motion.div
        style={{ y, rotate, scale, willChange: 'transform' }}
        className="relative select-none"
      >
        {/* Single SVG — viewBox scales all internals automatically */}
        <svg
          className="wba-bottle-svg"
          viewBox={`0 0 ${W} ${H}`}
          style={{ height: '78vh', width: 'auto', maxWidth: 'none', display: 'block' }}
          aria-hidden="true"
        >
          <defs>
            {/* Clip to bottle silhouette */}
            <clipPath id="wba-bottle-clip">
              <path d={BOTTLE_PATH} />
            </clipPath>

            {/* Water gradient — bright cyan at bottom, deeper blue at top */}
            <linearGradient id="wba-water-grad" x1="0" y1="1" x2="0" y2="0">
              <stop offset="0%"   stopColor="#00d4ff" />
              <stop offset="50%"  stopColor="#0090e0" />
              <stop offset="100%" stopColor="#0050c8" />
            </linearGradient>

            {/* Glass body gradient — left edge bright, center transparent, right edge dim */}
            <linearGradient id="wba-glass-body" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%"   stopColor="white" stopOpacity="0.18" />
              <stop offset="12%"  stopColor="white" stopOpacity="0.08" />
              <stop offset="50%"  stopColor="white" stopOpacity="0.02" />
              <stop offset="80%"  stopColor="white" stopOpacity="0.07" />
              <stop offset="100%" stopColor="white" stopOpacity="0.12" />
            </linearGradient>

            {/* Cap gradient */}
            <linearGradient id="wba-cap-grad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%"   stopColor="rgba(180,220,255,0.5)" />
              <stop offset="50%"  stopColor="rgba(220,240,255,0.7)" />
              <stop offset="100%" stopColor="rgba(160,200,240,0.4)" />
            </linearGradient>

            {/* Inner glow at bottle bottom */}
            <radialGradient id="wba-bottom-glow" cx="50%" cy="90%" r="50%">
              <stop offset="0%"   stopColor="#00c6ff" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#00c6ff" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Bottom ambient glow */}
          <ellipse cx={W / 2} cy={H - 15} rx={28} ry={10}
            fill="url(#wba-bottom-glow)" clipPath="url(#wba-bottle-clip)" />

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
            ry={5}
            fill="rgba(147,220,255,0.5)"
            clipPath="url(#wba-bottle-clip)"
            style={{ y: waterY }}
            className="wba-wave-ellipse"
          />

          {/* Bottle glass body fill */}
          <path d={BOTTLE_PATH} fill="url(#wba-glass-body)" />

          {/* Cap fill */}
          <path
            d="M 30,0 L 50,0 L 50,20 C 50,20 30,20 30,20 Z"
            fill="url(#wba-cap-grad)"
          />

          {/* Bottle outline — crisp glass edge */}
          <path
            d={BOTTLE_PATH}
            fill="none"
            stroke="rgba(200,230,255,0.22)"
            strokeWidth="1"
          />

          {/* Primary specular highlight — wide left streak */}
          <line x1="21" y1="68" x2="21" y2="215"
            stroke="white" strokeOpacity="0.22" strokeWidth="3.5" strokeLinecap="round" />

          {/* Secondary specular highlight — narrow bright inner streak */}
          <line x1="25" y1="80" x2="25" y2="160"
            stroke="white" strokeOpacity="0.14" strokeWidth="1.5" strokeLinecap="round" />

          {/* Right-side edge reflection */}
          <line x1="61" y1="68" x2="61" y2="210"
            stroke="white" strokeOpacity="0.10" strokeWidth="2" strokeLinecap="round" />

          {/* Shoulder highlight arc */}
          <path
            d="M 24,42 C 28,36 52,36 56,42"
            fill="none" stroke="white" strokeOpacity="0.18" strokeWidth="1.5" strokeLinecap="round"
          />

          {/* Neck highlight */}
          <line x1="32" y1="22" x2="32" y2="38"
            stroke="white" strokeOpacity="0.20" strokeWidth="2" strokeLinecap="round" />

          {/* Thin horizontal label-band suggestions */}
          <rect x="15" y="105" width="50" height="0.6" fill="white" fillOpacity="0.08" />
          <rect x="15" y="170" width="50" height="0.6" fill="white" fillOpacity="0.08" />
        </svg>
      </motion.div>
    </motion.div>
  );
}
