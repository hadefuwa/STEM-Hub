export const CHARACTER_LEVELS = [
  { name: 'Starter', min: 0, max: 19 },
  { name: 'Learner', min: 20, max: 39 },
  { name: 'Builder', min: 40, max: 59 },
  { name: 'Achiever', min: 60, max: 79 },
  { name: 'Master', min: 80, max: 100 },
];

const makeBodySvg = ({ bodyColor, accentColor, glowColor, badgeText }) => `
<svg width="180" height="240" viewBox="0 0 180 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${badgeText} character">
  <defs>
    <linearGradient id="bodyGrad" x1="0" x2="1" y1="0" y2="1">
      <stop offset="0%" stop-color="${bodyColor}" />
      <stop offset="100%" stop-color="#ffffff" />
    </linearGradient>
    <radialGradient id="glow" cx="50%" cy="30%" r="60%">
      <stop offset="0%" stop-color="${glowColor}" stop-opacity="0.7" />
      <stop offset="100%" stop-color="${glowColor}" stop-opacity="0" />
    </radialGradient>
  </defs>
  <rect x="12" y="8" width="156" height="224" rx="28" fill="url(#glow)" />
  <g>
    <circle cx="90" cy="60" r="34" fill="url(#bodyGrad)" stroke="${accentColor}" stroke-width="4" />
    <circle cx="78" cy="56" r="6" fill="#1f2d3d" />
    <circle cx="102" cy="56" r="6" fill="#1f2d3d" />
    <path d="M78 74c8 6 16 6 24 0" stroke="#1f2d3d" stroke-width="4" stroke-linecap="round" fill="none" />
  </g>
  <g>
    <rect x="52" y="96" width="76" height="86" rx="18" fill="url(#bodyGrad)" stroke="${accentColor}" stroke-width="4" />
    <circle cx="90" cy="132" r="10" fill="${accentColor}" opacity="0.9" />
    <path d="M52 120H22" stroke="${accentColor}" stroke-width="8" stroke-linecap="round" />
    <path d="M128 120H158" stroke="${accentColor}" stroke-width="8" stroke-linecap="round" />
  </g>
  <g>
    <rect x="60" y="182" width="22" height="32" rx="10" fill="${accentColor}" />
    <rect x="98" y="182" width="22" height="32" rx="10" fill="${accentColor}" />
  </g>
  <g>
    <rect x="34" y="200" width="112" height="30" rx="15" fill="#1f2d3d" opacity="0.08" />
    <text x="90" y="220" text-anchor="middle" font-size="14" fill="#1f2d3d" font-family="Arial, sans-serif">${badgeText}</text>
  </g>
</svg>
`;

export const CHARACTERS = [
  {
    id: 'forest-fox',
    name: 'Forest Fox',
    color: '#ff9f43',
    stages: ['🦊', '🦊✨', '🦊🏹', '🦊🛡️', '🦊👑'],
    svgStages: [
      makeBodySvg({ bodyColor: '#ffd6a6', accentColor: '#ff9f43', glowColor: '#ffedd6', badgeText: 'Starter' }),
      makeBodySvg({ bodyColor: '#ffc988', accentColor: '#ff9f43', glowColor: '#ffe3c2', badgeText: 'Learner' }),
      makeBodySvg({ bodyColor: '#ffb562', accentColor: '#ff9f43', glowColor: '#ffd6a6', badgeText: 'Builder' }),
      makeBodySvg({ bodyColor: '#ffa33e', accentColor: '#ff9f43', glowColor: '#ffc988', badgeText: 'Achiever' }),
      makeBodySvg({ bodyColor: '#ff8f1f', accentColor: '#ff9f43', glowColor: '#ffb562', badgeText: 'Master' }),
    ],
  },
  {
    id: 'curious-wizard',
    name: 'Curious Wizard',
    color: '#6c5ce7',
    stages: ['🧙‍♂️', '🧙‍♂️✨', '🧙‍♂️🔮', '🧙‍♂️⚡', '🧙‍♂️👑'],
    svgStages: [
      makeBodySvg({ bodyColor: '#d7ccff', accentColor: '#6c5ce7', glowColor: '#e9e3ff', badgeText: 'Starter' }),
      makeBodySvg({ bodyColor: '#c1b2ff', accentColor: '#6c5ce7', glowColor: '#d7ccff', badgeText: 'Learner' }),
      makeBodySvg({ bodyColor: '#a998ff', accentColor: '#6c5ce7', glowColor: '#c1b2ff', badgeText: 'Builder' }),
      makeBodySvg({ bodyColor: '#917eff', accentColor: '#6c5ce7', glowColor: '#a998ff', badgeText: 'Achiever' }),
      makeBodySvg({ bodyColor: '#7a66ff', accentColor: '#6c5ce7', glowColor: '#917eff', badgeText: 'Master' }),
    ],
  },
  {
    id: 'helper-bot',
    name: 'Helper Bot',
    color: '#00b894',
    stages: ['🤖', '🤖🔧', '🤖🛠️', '🤖⚡', '🤖🌟'],
    svgStages: [
      makeBodySvg({ bodyColor: '#b8f5e8', accentColor: '#00b894', glowColor: '#d9fbf4', badgeText: 'Starter' }),
      makeBodySvg({ bodyColor: '#8cf0db', accentColor: '#00b894', glowColor: '#b8f5e8', badgeText: 'Learner' }),
      makeBodySvg({ bodyColor: '#62e7cd', accentColor: '#00b894', glowColor: '#8cf0db', badgeText: 'Builder' }),
      makeBodySvg({ bodyColor: '#2fdcc0', accentColor: '#00b894', glowColor: '#62e7cd', badgeText: 'Achiever' }),
      makeBodySvg({ bodyColor: '#00d0b2', accentColor: '#00b894', glowColor: '#2fdcc0', badgeText: 'Master' }),
    ],
  },
  {
    id: 'space-explorer',
    name: 'Space Explorer',
    color: '#0984e3',
    stages: ['🧑‍🚀', '🧑‍🚀✨', '🚀', '🛰️', '🌌'],
    svgStages: [
      makeBodySvg({ bodyColor: '#cfe8ff', accentColor: '#0984e3', glowColor: '#e3f1ff', badgeText: 'Starter' }),
      makeBodySvg({ bodyColor: '#b1daff', accentColor: '#0984e3', glowColor: '#cfe8ff', badgeText: 'Learner' }),
      makeBodySvg({ bodyColor: '#8ac8ff', accentColor: '#0984e3', glowColor: '#b1daff', badgeText: 'Builder' }),
      makeBodySvg({ bodyColor: '#63b6ff', accentColor: '#0984e3', glowColor: '#8ac8ff', badgeText: 'Achiever' }),
      makeBodySvg({ bodyColor: '#3aa3ff', accentColor: '#0984e3', glowColor: '#63b6ff', badgeText: 'Master' }),
    ],
  },
];
