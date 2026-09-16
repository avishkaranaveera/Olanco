import { useId, type SVGProps } from 'react';

/**
 * Hand-drawn placeholder illustrations used until a real photo is dropped
 * into `public/images/` (see `SmartImage` and `AI_IMAGE_PROMPTS.md`).
 * All share one warm, wood-toned palette so the site looks coherent even
 * before any AI photos are added.
 */

const PALETTE = {
  bg: '#f3e8d8',
  bgDeep: '#e8d3b3',
  walnutDark: '#4a2f1f',
  walnut: '#6b4128',
  oak: '#9a6b3f',
  oakLight: '#c99a63',
  honey: '#e0ad6b',
  cream: '#faf3e6',
  sky: '#d7e6e6',
};

type IllustrationProps = SVGProps<SVGSVGElement>;

function useGradientId(prefix: string) {
  const id = useId();
  return `${prefix}-${id.replace(/[:]/g, '')}`;
}

function Frame({
  children,
  viewBox = '0 0 400 300',
  ...props
}: IllustrationProps & { children: React.ReactNode }) {
  return (
    <svg viewBox={viewBox} xmlns="http://www.w3.org/2000/svg" {...props}>
      {children}
    </svg>
  );
}

function WoodGrain({
  x,
  y,
  width,
  stroke = PALETTE.walnut,
}: {
  x: number;
  y: number;
  width: number;
  stroke?: string;
}) {
  return (
    <line
      x1={x}
      y1={y}
      x2={x + width}
      y2={y}
      stroke={stroke}
      strokeWidth={1.5}
      strokeLinecap="round"
      opacity={0.35}
    />
  );
}

export function DoorIllustration(props: IllustrationProps) {
  const grad = useGradientId('door-bg');
  return (
    <Frame {...props}>
      <defs>
        <linearGradient id={grad} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={PALETTE.bg} />
          <stop offset="1" stopColor={PALETTE.bgDeep} />
        </linearGradient>
      </defs>
      <rect width="400" height="300" fill={`url(#${grad})`} />
      <rect x="0" y="230" width="400" height="70" fill={PALETTE.walnutDark} opacity={0.12} />
      <g transform="translate(130,40)">
        <rect x="-8" y="-8" width="156" height="226" rx="4" fill={PALETTE.walnutDark} />
        <rect x="0" y="0" width="140" height="210" rx="2" fill={PALETTE.walnut} />
        <rect
          x="10"
          y="12"
          width="120"
          height="80"
          rx="3"
          fill={PALETTE.oak}
          stroke={PALETTE.walnutDark}
          strokeWidth={2}
        />
        <rect
          x="10"
          y="106"
          width="120"
          height="90"
          rx="3"
          fill={PALETTE.oak}
          stroke={PALETTE.walnutDark}
          strokeWidth={2}
        />
        {[20, 40, 60, 80, 118, 138, 158, 178].map((y) => (
          <WoodGrain key={y} x={16} y={y} width={108} />
        ))}
        <circle
          cx="122"
          cy="108"
          r="4.5"
          fill={PALETTE.cream}
          stroke={PALETTE.walnutDark}
          strokeWidth={1.5}
        />
      </g>
    </Frame>
  );
}

export function WindowIllustration(props: IllustrationProps) {
  const grad = useGradientId('window-bg');
  return (
    <Frame {...props}>
      <defs>
        <linearGradient id={grad} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={PALETTE.sky} />
          <stop offset="1" stopColor={PALETTE.bg} />
        </linearGradient>
      </defs>
      <rect width="400" height="300" fill={`url(#${grad})`} />
      <g transform="translate(80,55)">
        <rect x="-14" y="-14" width="268" height="198" rx="6" fill={PALETTE.walnut} />
        <rect x="0" y="0" width="240" height="170" fill={PALETTE.cream} />
        <rect x="0" y="0" width="240" height="170" fill="#dcecf0" opacity={0.55} />
        <rect x="112" y="0" width="16" height="170" fill={PALETTE.walnut} />
        <rect x="0" y="77" width="240" height="16" fill={PALETTE.walnut} />
        <rect
          x="-14"
          y="-14"
          width="268"
          height="198"
          rx="6"
          fill="none"
          stroke={PALETTE.walnutDark}
          strokeWidth={3}
        />
        <line x1="20" y1="20" x2="95" y2="60" stroke="#fff" strokeWidth={6} opacity={0.25} />
      </g>
    </Frame>
  );
}

export function HandrailIllustration(props: IllustrationProps) {
  const grad = useGradientId('handrail-bg');
  const spindles = Array.from({ length: 7 }, (_, i) => 40 + i * 24);
  return (
    <Frame {...props}>
      <defs>
        <linearGradient id={grad} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={PALETTE.bg} />
          <stop offset="1" stopColor={PALETTE.bgDeep} />
        </linearGradient>
      </defs>
      <rect width="400" height="300" fill={`url(#${grad})`} />
      <polygon points="20,260 380,150 380,175 20,285" fill={PALETTE.walnutDark} opacity={0.12} />
      <line
        x1="30"
        y1="90"
        x2="330"
        y2="30"
        stroke={PALETTE.walnutDark}
        strokeWidth={14}
        strokeLinecap="round"
      />
      <line
        x1="30"
        y1="90"
        x2="330"
        y2="30"
        stroke={PALETTE.oak}
        strokeWidth={8}
        strokeLinecap="round"
      />
      {spindles.map((x, i) => {
        const y = 82 - i * 8.6;
        return (
          <rect key={x} x={x - 3} y={y} width="6" height={210 - y} rx="3" fill={PALETTE.walnut} />
        );
      })}
      <rect x="18" y="76" width="16" height="200" rx="4" fill={PALETTE.walnutDark} />
    </Frame>
  );
}

export function CupboardIllustration(props: IllustrationProps) {
  const grad = useGradientId('cupboard-bg');
  return (
    <Frame {...props}>
      <defs>
        <linearGradient id={grad} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={PALETTE.bg} />
          <stop offset="1" stopColor={PALETTE.bgDeep} />
        </linearGradient>
      </defs>
      <rect width="400" height="300" fill={`url(#${grad})`} />
      <rect x="0" y="248" width="400" height="52" fill={PALETTE.walnutDark} opacity={0.12} />
      <g transform="translate(70,40)">
        <rect x="-10" y="-10" width="280" height="230" rx="4" fill={PALETTE.walnutDark} />
        <rect x="0" y="0" width="130" height="210" fill={PALETTE.walnut} />
        <rect x="140" y="0" width="130" height="210" fill={PALETTE.walnut} />
        <rect x="12" y="14" width="106" height="60" rx="2" fill={PALETTE.oakLight} opacity={0.85} />
        <rect x="12" y="86" width="106" height="60" rx="2" fill={PALETTE.oakLight} opacity={0.85} />
        <rect
          x="12"
          y="158"
          width="106"
          height="38"
          rx="2"
          fill={PALETTE.oakLight}
          opacity={0.85}
        />
        <rect
          x="152"
          y="14"
          width="106"
          height="60"
          rx="2"
          fill={PALETTE.oakLight}
          opacity={0.85}
        />
        <rect
          x="152"
          y="86"
          width="106"
          height="60"
          rx="2"
          fill={PALETTE.oakLight}
          opacity={0.85}
        />
        <rect
          x="152"
          y="158"
          width="106"
          height="38"
          rx="2"
          fill={PALETTE.oakLight}
          opacity={0.85}
        />
        <circle cx="108" cy="44" r="3.5" fill={PALETTE.walnutDark} />
        <circle cx="162" cy="44" r="3.5" fill={PALETTE.walnutDark} />
      </g>
    </Frame>
  );
}

export function JoineryIllustration(props: IllustrationProps) {
  const grad = useGradientId('joinery-bg');
  return (
    <Frame {...props}>
      <defs>
        <linearGradient id={grad} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={PALETTE.bg} />
          <stop offset="1" stopColor={PALETTE.bgDeep} />
        </linearGradient>
      </defs>
      <rect width="400" height="300" fill={`url(#${grad})`} />
      <rect x="0" y="240" width="400" height="60" fill={PALETTE.walnutDark} opacity={0.12} />
      <g transform="translate(60,120)">
        <rect x="0" y="0" width="220" height="14" rx="4" fill={PALETTE.walnut} />
        <rect x="8" y="14" width="12" height="86" fill={PALETTE.walnutDark} />
        <rect x="200" y="14" width="12" height="86" fill={PALETTE.walnutDark} />
        <rect x="60" y="14" width="10" height="86" fill={PALETTE.walnutDark} opacity={0.6} />
        <rect x="150" y="14" width="10" height="86" fill={PALETTE.walnutDark} opacity={0.6} />
      </g>
      <g transform="translate(90,60) rotate(-8)">
        <rect
          x="0"
          y="0"
          width="70"
          height="46"
          rx="4"
          fill={PALETTE.oak}
          stroke={PALETTE.walnutDark}
          strokeWidth={2}
        />
        <rect x="8" y="8" width="54" height="30" rx="2" fill={PALETTE.oakLight} />
      </g>
      <g transform="translate(230,48) rotate(6)">
        <rect x="0" y="0" width="60" height="60" rx="30" fill={PALETTE.honey} opacity={0.85} />
      </g>
    </Frame>
  );
}

export function WorkshopIllustration(props: IllustrationProps) {
  const grad = useGradientId('workshop-bg');
  return (
    <Frame {...props}>
      <defs>
        <linearGradient id={grad} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={PALETTE.bg} />
          <stop offset="1" stopColor={PALETTE.bgDeep} />
        </linearGradient>
      </defs>
      <rect width="400" height="300" fill={`url(#${grad})`} />
      <rect x="0" y="220" width="400" height="80" fill={PALETTE.walnutDark} opacity={0.14} />
      {/* workbench */}
      <rect x="60" y="180" width="280" height="18" rx="3" fill={PALETTE.walnut} />
      <rect x="76" y="198" width="14" height="60" fill={PALETTE.walnutDark} />
      <rect x="310" y="198" width="14" height="60" fill={PALETTE.walnutDark} />
      {/* plank being worked */}
      <rect
        x="90"
        y="150"
        width="220"
        height="26"
        rx="3"
        fill={PALETTE.oakLight}
        stroke={PALETTE.walnutDark}
        strokeWidth={2}
      />
      {[100, 130, 160, 190, 220, 250, 280].map((x) => (
        <line
          key={x}
          x1={x}
          y1={156}
          x2={x + 14}
          y2={170}
          stroke={PALETTE.oak}
          strokeWidth={1.5}
          opacity={0.5}
        />
      ))}
      {/* tools on wall */}
      <circle cx="60" cy="70" r="22" fill="none" stroke={PALETTE.walnut} strokeWidth={5} />
      <rect x="120" y="50" width="8" height="60" rx="4" fill={PALETTE.walnutDark} />
      <rect x="150" y="55" width="8" height="50" rx="4" fill={PALETTE.walnutDark} />
      <rect x="180" y="45" width="8" height="65" rx="4" fill={PALETTE.walnutDark} />
      {/* shavings */}
      <path
        d="M170,178 q10,14 -4,20 q14,-2 10,12"
        stroke={PALETTE.oak}
        strokeWidth={2}
        fill="none"
        opacity={0.6}
      />
      <path
        d="M230,180 q12,10 0,20 q16,0 8,14"
        stroke={PALETTE.oak}
        strokeWidth={2}
        fill="none"
        opacity={0.6}
      />
    </Frame>
  );
}

export function HeroWorkshopIllustration(props: IllustrationProps) {
  const grad = useGradientId('hero-bg');
  const sun = useGradientId('hero-sun');
  return (
    <Frame viewBox="0 0 800 600" {...props}>
      <defs>
        <linearGradient id={grad} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f6ead4" />
          <stop offset="1" stopColor={PALETTE.bgDeep} />
        </linearGradient>
        <radialGradient id={sun} cx="0.8" cy="0.15" r="0.5">
          <stop offset="0" stopColor="#fff6e3" stopOpacity={0.9} />
          <stop offset="1" stopColor="#fff6e3" stopOpacity={0} />
        </radialGradient>
      </defs>
      <rect width="800" height="600" fill={`url(#${grad})`} />
      <rect width="800" height="600" fill={`url(#${sun})`} />
      <rect x="0" y="470" width="800" height="130" fill={PALETTE.walnutDark} opacity={0.1} />

      {/* large door leaning */}
      <g transform="translate(500,150) rotate(6)">
        <rect
          x="0"
          y="0"
          width="180"
          height="320"
          rx="6"
          fill={PALETTE.walnut}
          stroke={PALETTE.walnutDark}
          strokeWidth={4}
        />
        <rect x="16" y="20" width="148" height="120" rx="4" fill={PALETTE.oak} />
        <rect x="16" y="160" width="148" height="140" rx="4" fill={PALETTE.oak} />
        {[40, 65, 90, 115, 180, 205, 230, 255, 280].map((y) => (
          <WoodGrain key={y} x={24} y={y} width={132} stroke={PALETTE.walnutDark} />
        ))}
        <circle
          cx="150"
          cy="165"
          r="6"
          fill={PALETTE.cream}
          stroke={PALETTE.walnutDark}
          strokeWidth={2}
        />
      </g>

      {/* workbench with tools in front */}
      <rect x="60" y="420" width="420" height="24" rx="4" fill={PALETTE.walnut} />
      <rect x="90" y="444" width="18" height="90" fill={PALETTE.walnutDark} />
      <rect x="420" y="444" width="18" height="90" fill={PALETTE.walnutDark} />

      <g transform="translate(110,360)">
        <rect
          x="0"
          y="0"
          width="260"
          height="34"
          rx="4"
          fill={PALETTE.oakLight}
          stroke={PALETTE.walnutDark}
          strokeWidth={3}
        />
        {[20, 60, 100, 140, 180, 220].map((x) => (
          <line
            key={x}
            x1={x}
            y1={6}
            x2={x + 20}
            y2={28}
            stroke={PALETTE.oak}
            strokeWidth={2}
            opacity={0.5}
          />
        ))}
      </g>

      <g transform="translate(150,300)">
        <rect x="-6" y="0" width="12" height="60" rx="4" fill={PALETTE.walnutDark} />
        <rect x="-20" y="-14" width="40" height="18" rx="4" fill={PALETTE.walnut} />
      </g>
      <g transform="translate(230,300)">
        <circle cx="0" cy="10" r="26" fill="none" stroke={PALETTE.walnut} strokeWidth={7} />
      </g>
      <g transform="translate(320,300)">
        <rect x="-4" y="0" width="8" height="60" rx="4" fill={PALETTE.walnutDark} />
        <rect x="-18" y="-10" width="36" height="14" rx="4" fill={PALETTE.honey} />
      </g>

      {/* shavings drifting */}
      <path
        d="M480,470 q14,18 -6,26 q18,-2 12,16"
        stroke={PALETTE.oak}
        strokeWidth={2.5}
        fill="none"
        opacity={0.55}
      />
      <path
        d="M540,480 q16,12 0,26 q20,0 10,18"
        stroke={PALETTE.oak}
        strokeWidth={2.5}
        fill="none"
        opacity={0.55}
      />

      {/* window with light on the left wall */}
      <g transform="translate(80,80)">
        <rect
          x="0"
          y="0"
          width="140"
          height="160"
          fill={PALETTE.cream}
          stroke={PALETTE.walnut}
          strokeWidth={6}
        />
        <rect x="0" y="0" width="140" height="160" fill="#dcecf0" opacity={0.5} />
        <rect x="64" y="0" width="12" height="160" fill={PALETTE.walnut} />
        <rect x="0" y="72" width="140" height="12" fill={PALETTE.walnut} />
      </g>
    </Frame>
  );
}

export function GrainPatternIllustration({
  tone = 'oak',
  ...props
}: IllustrationProps & { tone?: 'oak' | 'walnut' | 'honey' }) {
  const grad = useGradientId('grain-bg');
  const base = tone === 'walnut' ? PALETTE.walnut : tone === 'honey' ? PALETTE.honey : PALETTE.oak;
  return (
    <Frame {...props}>
      <defs>
        <linearGradient id={grad} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={base} />
          <stop offset="1" stopColor={PALETTE.walnutDark} />
        </linearGradient>
      </defs>
      <rect width="400" height="300" fill={`url(#${grad})`} />
      {Array.from({ length: 10 }, (_, i) => (
        <path
          key={i}
          d={`M0,${20 + i * 28} Q100,${5 + i * 28} 200,${20 + i * 28} T400,${20 + i * 28}`}
          stroke={PALETTE.cream}
          strokeWidth={1.2}
          fill="none"
          opacity={0.18}
        />
      ))}
    </Frame>
  );
}

export function MapPlaceholderIllustration(props: IllustrationProps) {
  const grad = useGradientId('map-bg');
  return (
    <Frame {...props}>
      <defs>
        <linearGradient id={grad} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={PALETTE.sky} />
          <stop offset="1" stopColor={PALETTE.bg} />
        </linearGradient>
      </defs>
      <rect width="400" height="300" fill={`url(#${grad})`} />
      <g stroke={PALETTE.oak} strokeWidth={2} opacity={0.4} fill="none">
        <path d="M0,80 C120,40 260,140 400,90" />
        <path d="M0,190 C140,150 260,230 400,170" />
        <path d="M60,0 C90,120 40,220 90,300" />
        <path d="M300,0 C260,110 320,210 260,300" />
      </g>
      <g transform="translate(200,150)">
        <circle r="10" fill={PALETTE.walnutDark} />
        <path
          d="M0,-34 C18,-34 30,-20 30,-6 C30,14 0,40 0,40 C0,40 -30,14 -30,-6 C-30,-20 -18,-34 0,-34 Z"
          fill={PALETTE.walnut}
        />
        <circle r="9" cy="-6" fill={PALETTE.cream} />
      </g>
    </Frame>
  );
}
