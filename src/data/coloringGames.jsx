export const coloringGames = {
  // Level 1: Nursery - Simple Shapes
  'nursery-shapes': {
    id: 'nursery-shapes',
    title: 'Red and Blue Shapes',
    instruction: 'Color the circle RED and the square BLUE.',
    palette: [
      { color: '#FF0000', name: 'Red' },
      { color: '#0000FF', name: 'Blue' },
      { color: '#FFFF00', name: 'Yellow' }, // Distractor
      { color: '#00FF00', name: 'Green' },  // Distractor
    ],
    // ViewBox 0 0 400 300
    regions: [
      { id: 'shape-circle', expectedColor: '#FF0000', hint: 'The circle should be RED.' },
      { id: 'shape-square', expectedColor: '#0000FF', hint: 'The square should be BLUE.' },
    ],
    svgContent: (handleRegionClick, filledColors) => (
      <g>
        {/* Circle */}
        <circle
          cx="100" cy="150" r="60"
          stroke="black" strokeWidth="3"
          fill={filledColors['shape-circle'] || 'white'}
          onClick={() => handleRegionClick('shape-circle')}
          style={{ cursor: 'pointer' }}
        />
        {/* Square */}
        <rect
          x="220" y="90" width="120" height="120"
          stroke="black" strokeWidth="3"
          fill={filledColors['shape-square'] || 'white'}
          onClick={() => handleRegionClick('shape-square')}
          style={{ cursor: 'pointer' }}
        />
      </g>
    )
  },

  // Level 2: Reception - Fruit Colors
  'reception-fruit': {
    id: 'reception-fruit',
    title: 'Fruit Colors',
    instruction: 'Color the apple RED, the banana YELLOW, and the leaf GREEN.',
    palette: [
      { color: '#FF0000', name: 'Red' },    // Apple
      { color: '#FFFF00', name: 'Yellow' }, // Banana
      { color: '#00FF00', name: 'Green' },  // Leaf
      { color: '#800080', name: 'Purple' }, // Distractor
      { color: '#FFA500', name: 'Orange' }, // Distractor
    ],
    regions: [
      { id: 'fruit-apple', expectedColor: '#FF0000', hint: 'Apples are usually RED.' },
      { id: 'fruit-banana', expectedColor: '#FFFF00', hint: 'Bananas are YELLOW.' },
      { id: 'fruit-leaf', expectedColor: '#00FF00', hint: 'Leaves are GREEN.' },
    ],
    svgContent: (handleRegionClick, filledColors) => (
      <g>
        {/* Apple */}
        <path
          d="M80 150 C 40 100, 40 220, 100 240 C 160 220, 160 100, 120 150"
          stroke="black" strokeWidth="3"
          fill={filledColors['fruit-apple'] || 'white'}
          onClick={() => handleRegionClick('fruit-apple')}
          style={{ cursor: 'pointer' }}
        />
        {/* Apple Leaf */}
        <path
          d="M100 150 Q 80 100, 120 100 Q 140 120, 100 150"
          stroke="black" strokeWidth="3"
          fill={filledColors['fruit-leaf'] || 'white'} // Re-using leaf concept or just part of apple
          onClick={() => handleRegionClick('fruit-leaf')} // Simplified, distinct leaf usually separate but combining for simpler SVG
          style={{ cursor: 'pointer' }}
        />
        {/* Banana - simplified curve */}
        <path
          d="M200 100 Q 280 100, 300 200 Q 250 220, 200 160 Q 200 130, 200 100"
          stroke="black" strokeWidth="3"
          fill={filledColors['fruit-banana'] || 'white'}
          onClick={() => handleRegionClick('fruit-banana')}
          style={{ cursor: 'pointer' }}
        />
      </g>
    )
  },

  // Level 3: Year 1 - Day and Night
  'year1-day-night': {
    id: 'year1-day-night',
    title: 'Day and Night',
    instruction: 'Color the Sun YELLOW, the Day Sky LIGHT BLUE, the Moon WHITE/GREY, and the Night Sky DARK BLUE/BLACK.',
    palette: [
      { color: '#FFFF00', name: 'Yellow' }, // Sun
      { color: '#87CEEB', name: 'Light Blue' }, // Day Sky
      { color: '#E0E0E0', name: 'Grey' }, // Moon
      { color: '#000033', name: 'Dark Blue' }, // Night Sky
      { color: '#FFA500', name: 'Orange' }, // Distractor
    ],
    regions: [
      { id: 'sky-day', expectedColor: '#87CEEB', hint: 'The sky is LIGHT BLUE during the day.' },
      { id: 'sun', expectedColor: '#FFFF00', hint: 'The sun is YELLOW.' },
      { id: 'sky-night', expectedColor: '#000033', hint: 'The sky is DARK BLUE at night.' },
      { id: 'moon', expectedColor: '#E0E0E0', hint: 'The moon can look WHITE or GREY.' },
    ],
    svgContent: (handleRegionClick, filledColors) => (
      <g>
        {/* Divider */}
        <line x1="200" y1="0" x2="200" y2="300" stroke="black" strokeWidth="2" />

        {/* Day Side (Left) */}
        <rect
          x="0" y="0" width="200" height="300"
          fill={filledColors['sky-day'] || 'white'}
          onClick={() => handleRegionClick('sky-day')}
          style={{ cursor: 'pointer' }}
        />
        <circle
          cx="100" cy="80" r="40"
          stroke="black" strokeWidth="2"
          fill={filledColors['sun'] || 'white'}
          onClick={() => handleRegionClick('sun')}
          style={{ cursor: 'pointer' }}
        />

        {/* Night Side (Right) */}
        <rect
          x="200" y="0" width="200" height="300"
          fill={filledColors['sky-night'] || 'white'}
          onClick={() => handleRegionClick('sky-night')}
          style={{ cursor: 'pointer' }}
        />
        <circle
          cx="300" cy="90" r="30"
          stroke="black" strokeWidth="2"
          fill={filledColors['moon'] || 'white'}
          onClick={() => handleRegionClick('moon')}
          style={{ cursor: 'pointer' }}
        />
      </g>
    )
  },

  // Level 4: Year 2 - Traffic Lights
  'year2-traffic': {
    id: 'year2-traffic',
    title: 'Traffic Lights',
    instruction: 'Color the traffic lights in the correct order: Top RED, Middle AMBER (Orange), Bottom GREEN.',
    palette: [
      { color: '#FF0000', name: 'Red' },
      { color: '#FFA500', name: 'Amber' },
      { color: '#008000', name: 'Green' },
      { color: '#0000FF', name: 'Blue' }, // Distractor
      { color: '#800080', name: 'Purple' }, // Distractor
    ],
    regions: [
      { id: 'light-red', expectedColor: '#FF0000', hint: 'The top light means STOP. It is RED.' },
      { id: 'light-amber', expectedColor: '#FFA500', hint: 'The middle light means WAIT. It is AMBER.' },
      { id: 'light-green', expectedColor: '#008000', hint: 'The bottom light means GO. It is GREEN.' },
    ],
    svgContent: (handleRegionClick, filledColors) => (
      <g>
        {/* Traffic Light Box */}
        <rect x="150" y="20" width="100" height="260" fill="#333" stroke="black" strokeWidth="2" />

        {/* Red Light */}
        <circle
          cx="200" cy="70" r="30"
          stroke="white" strokeWidth="2"
          fill={filledColors['light-red'] || 'white'}
          onClick={() => handleRegionClick('light-red')}
          style={{ cursor: 'pointer' }}
        />
        {/* Amber Light */}
        <circle
          cx="200" cy="150" r="30"
          stroke="white" strokeWidth="2"
          fill={filledColors['light-amber'] || 'white'}
          onClick={() => handleRegionClick('light-amber')}
          style={{ cursor: 'pointer' }}
        />
        {/* Green Light */}
        <circle
          cx="200" cy="230" r="30"
          stroke="white" strokeWidth="2"
          fill={filledColors['light-green'] || 'white'}
          onClick={() => handleRegionClick('light-green')}
          style={{ cursor: 'pointer' }}
        />
      </g>
    )
  },

  // Level 5: Year 2 - Colorful Flowers
  'year2-flowers': {
    id: 'year2-flowers',
    title: 'Colorful Flowers',
    instruction: 'Color the flower petals YELLOW, the flower centers BROWN, the stems GREEN, and the leaves GREEN.',
    palette: [
      { color: '#FFFF00', name: 'Yellow' }, // Petals
      { color: '#8B4513', name: 'Brown' },  // Centers
      { color: '#228B22', name: 'Green' },  // Stems and leaves
      { color: '#FFA500', name: 'Orange' }, // Distractor
      { color: '#0000FF', name: 'Blue' },   // Distractor
    ],
    regions: [
      { id: 'flower-center-1', expectedColor: '#8B4513', hint: 'The flower center is BROWN.' },
      { id: 'flower-petal-1', expectedColor: '#FFFF00', hint: 'The flower petals are YELLOW.' },
      { id: 'flower-center-2', expectedColor: '#8B4513', hint: 'The flower center is BROWN.' },
      { id: 'flower-petal-2', expectedColor: '#FFFF00', hint: 'The flower petals are YELLOW.' },
      { id: 'stem-1', expectedColor: '#228B22', hint: 'The stem is GREEN.' },
      { id: 'stem-2', expectedColor: '#228B22', hint: 'The stem is GREEN.' },
      { id: 'leaf-1', expectedColor: '#228B22', hint: 'The leaf is GREEN.' },
      { id: 'leaf-2', expectedColor: '#228B22', hint: 'The leaf is GREEN.' },
    ],
    svgContent: (handleRegionClick, filledColors) => (
      <g>
        {/* Left Flower */}
        <circle cx="100" cy="100" r="30" fill={filledColors['flower-petal-1'] || 'white'} stroke="black" strokeWidth="2" onClick={() => handleRegionClick('flower-petal-1')} style={{ cursor: 'pointer' }} />
        <circle cx="100" cy="100" r="15" fill={filledColors['flower-center-1'] || 'white'} stroke="black" strokeWidth="2" onClick={() => handleRegionClick('flower-center-1')} style={{ cursor: 'pointer' }} />

        {/* Right Flower */}
        <circle cx="300" cy="100" r="30" fill={filledColors['flower-petal-2'] || 'white'} stroke="black" strokeWidth="2" onClick={() => handleRegionClick('flower-petal-2')} style={{ cursor: 'pointer' }} />
        <circle cx="300" cy="100" r="15" fill={filledColors['flower-center-2'] || 'white'} stroke="black" strokeWidth="2" onClick={() => handleRegionClick('flower-center-2')} style={{ cursor: 'pointer' }} />

        {/* Stems */}
        <rect x="90" y="130" width="20" height="100" fill={filledColors['stem-1'] || 'white'} stroke="black" strokeWidth="2" onClick={() => handleRegionClick('stem-1')} style={{ cursor: 'pointer' }} />
        <rect x="290" y="130" width="20" height="100" fill={filledColors['stem-2'] || 'white'} stroke="black" strokeWidth="2" onClick={() => handleRegionClick('stem-2')} style={{ cursor: 'pointer' }} />

        {/* Leaves */}
        <ellipse cx="70" cy="160" rx="20" ry="10" fill={filledColors['leaf-1'] || 'white'} stroke="black" strokeWidth="2" onClick={() => handleRegionClick('leaf-1')} style={{ cursor: 'pointer' }} />
        <ellipse cx="330" cy="180" rx="20" ry="10" fill={filledColors['leaf-2'] || 'white'} stroke="black" strokeWidth="2" onClick={() => handleRegionClick('leaf-2')} style={{ cursor: 'pointer' }} />
      </g>
    )
  },

  // Level 6: Year 2 - Farm Animals
  'year2-farm-animals': {
    id: 'year2-farm-animals',
    title: 'Farm Animals',
    instruction: 'Color the cow BLACK and WHITE, the pig PINK, the chicken YELLOW, and the sheep WHITE.',
    palette: [
      { color: '#000000', name: 'Black' },  // Cow spots
      { color: '#FFFFFF', name: 'White' },  // Cow body, Sheep
      { color: '#FFC0CB', name: 'Pink' },   // Pig
      { color: '#FFFF00', name: 'Yellow' }, // Chicken
      { color: '#0000FF', name: 'Blue' },   // Distractor
    ],
    regions: [
      { id: 'cow-body', expectedColor: '#FFFFFF', hint: 'The cow body is WHITE.' },
      { id: 'cow-spot-1', expectedColor: '#000000', hint: 'Cow spots are BLACK.' },
      { id: 'cow-spot-2', expectedColor: '#000000', hint: 'Cow spots are BLACK.' },
      { id: 'pig-body', expectedColor: '#FFC0CB', hint: 'The pig is PINK.' },
      { id: 'chicken-body', expectedColor: '#FFFF00', hint: 'The chicken is YELLOW.' },
      { id: 'sheep-body', expectedColor: '#FFFFFF', hint: 'The sheep is WHITE.' },
    ],
    svgContent: (handleRegionClick, filledColors) => (
      <g>
        {/* Cow */}
        <ellipse cx="100" cy="180" rx="40" ry="25" fill={filledColors['cow-body'] || 'white'} stroke="black" strokeWidth="2" onClick={() => handleRegionClick('cow-body')} style={{ cursor: 'pointer' }} />
        <circle cx="80" cy="170" r="10" fill={filledColors['cow-spot-1'] || 'white'} stroke="black" strokeWidth="2" onClick={() => handleRegionClick('cow-spot-1')} style={{ cursor: 'pointer' }} />
        <circle cx="120" cy="190" r="12" fill={filledColors['cow-spot-2'] || 'white'} stroke="black" strokeWidth="2" onClick={() => handleRegionClick('cow-spot-2')} style={{ cursor: 'pointer' }} />

        {/* Pig */}
        <ellipse cx="200" cy="180" rx="35" ry="20" fill={filledColors['pig-body'] || 'white'} stroke="black" strokeWidth="2" onClick={() => handleRegionClick('pig-body')} style={{ cursor: 'pointer' }} />

        {/* Chicken */}
        <circle cx="300" cy="180" r="25" fill={filledColors['chicken-body'] || 'white'} stroke="black" strokeWidth="2" onClick={() => handleRegionClick('chicken-body')} style={{ cursor: 'pointer' }} />

        {/* Sheep */}
        <ellipse cx="250" cy="120" rx="30" ry="20" fill={filledColors['sheep-body'] || 'white'} stroke="black" strokeWidth="2" onClick={() => handleRegionClick('sheep-body')} style={{ cursor: 'pointer' }} />
      </g>
    )
  },

  // Level 7: Year 2 - Ocean Creatures
  'year2-ocean-creatures': {
    id: 'year2-ocean-creatures',
    title: 'Ocean Creatures',
    instruction: 'Color the fish ORANGE, the starfish RED, the crab RED, and the seashell PINK.',
    palette: [
      { color: '#FFA500', name: 'Orange' }, // Fish
      { color: '#FF0000', name: 'Red' },    // Starfish, Crab
      { color: '#FFC0CB', name: 'Pink' },   // Seashell
      { color: '#0000FF', name: 'Blue' },   // Water (background)
      { color: '#800080', name: 'Purple' }, // Distractor
    ],
    regions: [
      { id: 'fish-body', expectedColor: '#FFA500', hint: 'The fish is ORANGE.' },
      { id: 'starfish-body', expectedColor: '#FF0000', hint: 'The starfish is RED.' },
      { id: 'crab-body', expectedColor: '#FF0000', hint: 'The crab is RED.' },
      { id: 'seashell-body', expectedColor: '#FFC0CB', hint: 'The seashell is PINK.' },
    ],
    svgContent: (handleRegionClick, filledColors) => (
      <g>
        {/* Fish */}
        <ellipse cx="100" cy="100" rx="30" ry="15" fill={filledColors['fish-body'] || 'white'} stroke="black" strokeWidth="2" onClick={() => handleRegionClick('fish-body')} style={{ cursor: 'pointer' }} />

        {/* Starfish */}
        <polygon points="200,80 210,100 230,100 215,115 225,135 200,125 175,135 185,115 170,100 190,100" fill={filledColors['starfish-body'] || 'white'} stroke="black" strokeWidth="2" onClick={() => handleRegionClick('starfish-body')} style={{ cursor: 'pointer' }} />

        {/* Crab */}
        <ellipse cx="300" cy="150" rx="25" ry="20" fill={filledColors['crab-body'] || 'white'} stroke="black" strokeWidth="2" onClick={() => handleRegionClick('crab-body')} style={{ cursor: 'pointer' }} />

        {/* Seashell */}
        <path d="M150,200 Q140,190 145,180 Q150,170 160,175 Q170,180 165,190 Q160,200 150,200" fill={filledColors['seashell-body'] || 'white'} stroke="black" strokeWidth="2" onClick={() => handleRegionClick('seashell-body')} style={{ cursor: 'pointer' }} />
      </g>
    )
  },

  // Level 8: Year 2 - Vehicles
  'year2-vehicles': {
    id: 'year2-vehicles',
    title: 'Vehicles',
    instruction: 'Color the car RED, the bus YELLOW, the truck BLUE, and the bicycle BLACK.',
    palette: [
      { color: '#FF0000', name: 'Red' },    // Car
      { color: '#FFFF00', name: 'Yellow' }, // Bus
      { color: '#0000FF', name: 'Blue' },   // Truck
      { color: '#000000', name: 'Black' },  // Bicycle
      { color: '#FFA500', name: 'Orange' }, // Distractor
    ],
    regions: [
      { id: 'car-body', expectedColor: '#FF0000', hint: 'The car is RED.' },
      { id: 'bus-body', expectedColor: '#FFFF00', hint: 'The bus is YELLOW.' },
      { id: 'truck-body', expectedColor: '#0000FF', hint: 'The truck is BLUE.' },
      { id: 'bicycle-frame', expectedColor: '#000000', hint: 'The bicycle frame is BLACK.' },
    ],
    svgContent: (handleRegionClick, filledColors) => (
      <g>
        {/* Car */}
        <rect x="60" y="150" width="60" height="30" fill={filledColors['car-body'] || 'white'} stroke="black" strokeWidth="2" onClick={() => handleRegionClick('car-body')} style={{ cursor: 'pointer' }} />
        <circle cx="75" cy="185" r="8" fill="black" />
        <circle cx="105" cy="185" r="8" fill="black" />

        {/* Bus */}
        <rect x="150" y="140" width="100" height="40" fill={filledColors['bus-body'] || 'white'} stroke="black" strokeWidth="2" onClick={() => handleRegionClick('bus-body')} style={{ cursor: 'pointer' }} />
        <circle cx="170" cy="185" r="8" fill="black" />
        <circle cx="210" cy="185" r="8" fill="black" />

        {/* Truck */}
        <rect x="270" y="145" width="70" height="35" fill={filledColors['truck-body'] || 'white'} stroke="black" strokeWidth="2" onClick={() => handleRegionClick('truck-body')} style={{ cursor: 'pointer' }} />
        <rect x="300" y="135" width="30" height="15" fill={filledColors['truck-body'] || 'white'} stroke="black" strokeWidth="2" onClick={() => handleRegionClick('truck-body')} style={{ cursor: 'pointer' }} />
        <circle cx="285" cy="185" r="8" fill="black" />
        <circle cx="325" cy="185" r="8" fill="black" />

        {/* Bicycle */}
        <path d="M50,220 L80,200 L110,200 L130,220 L110,240 L80,240 Z" fill={filledColors['bicycle-frame'] || 'white'} stroke="black" strokeWidth="2" onClick={() => handleRegionClick('bicycle-frame')} style={{ cursor: 'pointer' }} />
        <circle cx="70" cy="220" r="15" fill="white" stroke="black" strokeWidth="2" />
        <circle cx="120" cy="220" r="15" fill="white" stroke="black" strokeWidth="2" />
      </g>
    )
  },

  // Level 9: Year 2 - Shapes and Patterns
  'year2-shapes-patterns': {
    id: 'year2-shapes-patterns',
    title: 'Shapes and Patterns',
    instruction: 'Color the circles BLUE, the squares RED, the triangles GREEN, the stars YELLOW, and the hearts PINK.',
    palette: [
      { color: '#0000FF', name: 'Blue' },   // Circles
      { color: '#FF0000', name: 'Red' },    // Squares
      { color: '#008000', name: 'Green' },  // Triangles
      { color: '#FFFF00', name: 'Yellow' }, // Stars
      { color: '#FFC0CB', name: 'Pink' },   // Hearts
    ],
    regions: [
      { id: 'circle-1', expectedColor: '#0000FF', hint: 'Circles are BLUE.' },
      { id: 'circle-2', expectedColor: '#0000FF', hint: 'Circles are BLUE.' },
      { id: 'square-1', expectedColor: '#FF0000', hint: 'Squares are RED.' },
      { id: 'square-2', expectedColor: '#FF0000', hint: 'Squares are RED.' },
      { id: 'triangle-1', expectedColor: '#008000', hint: 'Triangles are GREEN.' },
      { id: 'triangle-2', expectedColor: '#008000', hint: 'Triangles are GREEN.' },
      { id: 'star-1', expectedColor: '#FFFF00', hint: 'Stars are YELLOW.' },
      { id: 'heart-1', expectedColor: '#FFC0CB', hint: 'Hearts are PINK.' },
    ],
    svgContent: (handleRegionClick, filledColors) => (
      <g>
        {/* Circles */}
        <circle cx="80" cy="80" r="20" fill={filledColors['circle-1'] || 'white'} stroke="black" strokeWidth="2" onClick={() => handleRegionClick('circle-1')} style={{ cursor: 'pointer' }} />
        <circle cx="320" cy="80" r="20" fill={filledColors['circle-2'] || 'white'} stroke="black" strokeWidth="2" onClick={() => handleRegionClick('circle-2')} style={{ cursor: 'pointer' }} />

        {/* Squares */}
        <rect x="60" y="150" width="40" height="40" fill={filledColors['square-1'] || 'white'} stroke="black" strokeWidth="2" onClick={() => handleRegionClick('square-1')} style={{ cursor: 'pointer' }} />
        <rect x="300" y="150" width="40" height="40" fill={filledColors['square-2'] || 'white'} stroke="black" strokeWidth="2" onClick={() => handleRegionClick('square-2')} style={{ cursor: 'pointer' }} />

        {/* Triangles */}
        <polygon points="150,60 130,100 170,100" fill={filledColors['triangle-1'] || 'white'} stroke="black" strokeWidth="2" onClick={() => handleRegionClick('triangle-1')} style={{ cursor: 'pointer' }} />
        <polygon points="250,60 230,100 270,100" fill={filledColors['triangle-2'] || 'white'} stroke="black" strokeWidth="2" onClick={() => handleRegionClick('triangle-2')} style={{ cursor: 'pointer' }} />

        {/* Star */}
        <polygon points="200,150 208,170 230,170 212,185 220,205 200,190 180,205 188,185 170,170 192,170" fill={filledColors['star-1'] || 'white'} stroke="black" strokeWidth="2" onClick={() => handleRegionClick('star-1')} style={{ cursor: 'pointer' }} />

        {/* Heart */}
        <path d="M200,250 C180,230 160,230 160,250 C160,270 200,300 200,300 C200,300 240,270 240,250 C240,230 220,230 200,250" fill={filledColors['heart-1'] || 'white'} stroke="black" strokeWidth="2" onClick={() => handleRegionClick('heart-1')} style={{ cursor: 'pointer' }} />
      </g>
    )
  },

  // Level 5: Year 4 - Flag Coloring
  'year4-flags': {
    id: 'year4-flags',
    title: 'Flags of the World',
    instruction: 'Color the French flag (Blue, White, Red) and the Italian flag (Green, White, Red).',
    palette: [
      { color: '#0055A4', name: 'France Blue' },
      { color: '#FFFFFF', name: 'White' },
      { color: '#EF4135', name: 'Red' },
      { color: '#009246', name: 'Italy Green' },
      { color: '#FFFF00', name: 'Yellow' }, // Distractor
    ],
    regions: [
      // France (Left)
      { id: 'fr-blue', expectedColor: '#0055A4', hint: 'France starts with BLUE on the left.' },
      { id: 'fr-white', expectedColor: '#FFFFFF', hint: 'The middle of the French flag is WHITE.' },
      { id: 'fr-red', expectedColor: '#EF4135', hint: 'The right side of the French flag is RED.' },
      // Italy (Right)
      { id: 'it-green', expectedColor: '#009246', hint: 'Italy starts with GREEN on the left.' },
      { id: 'it-white', expectedColor: '#FFFFFF', hint: 'The middle of the Italian flag is WHITE.' },
      { id: 'it-red', expectedColor: '#EF4135', hint: 'The right side of the Italian flag is RED.' },
    ],
    svgContent: (handleRegionClick, filledColors) => (
      <g>
        {/* France Label */}
        <text x="100" y="30" textAnchor="middle" fontSize="16" fontWeight="bold">France</text>
        {/* France Flag */}
        <g transform="translate(25, 40)">
          <rect x="0" y="0" width="50" height="100" stroke="black" fill={filledColors['fr-blue'] || '#EEE'} onClick={() => handleRegionClick('fr-blue')} style={{ cursor: 'pointer' }} />
          <rect x="50" y="0" width="50" height="100" stroke="black" fill={filledColors['fr-white'] || '#EEE'} onClick={() => handleRegionClick('fr-white')} style={{ cursor: 'pointer' }} />
          <rect x="100" y="0" width="50" height="100" stroke="black" fill={filledColors['fr-red'] || '#EEE'} onClick={() => handleRegionClick('fr-red')} style={{ cursor: 'pointer' }} />
        </g>

        {/* Italy Label */}
        <text x="300" y="30" textAnchor="middle" fontSize="16" fontWeight="bold">Italy</text>
        {/* Italy Flag */}
        <g transform="translate(225, 40)">
          <rect x="0" y="0" width="50" height="100" stroke="black" fill={filledColors['it-green'] || '#EEE'} onClick={() => handleRegionClick('it-green')} style={{ cursor: 'pointer' }} />
          <rect x="50" y="0" width="50" height="100" stroke="black" fill={filledColors['it-white'] || '#EEE'} onClick={() => handleRegionClick('it-white')} style={{ cursor: 'pointer' }} />
          <rect x="100" y="0" width="50" height="100" stroke="black" fill={filledColors['it-red'] || '#EEE'} onClick={() => handleRegionClick('it-red')} style={{ cursor: 'pointer' }} />
        </g>
      </g>
    )
  },

  // Level 6: Year 6 - Color Theory (Complimentary Colors)
  'year6-theory': {
    id: 'year6-theory',
    title: 'Complementary Colors',
    instruction: 'Fill the outer ring with secondary colors (Purple, Orange, Green) opposite their complementary primary colors (Yellow, Blue, Red). \n\nHint: Yellow opposite Purple, Blue opposite Orange, Red opposite Green.',
    palette: [
      { color: '#800080', name: 'Purple' },
      { color: '#FFA500', name: 'Orange' },
      { color: '#008000', name: 'Green' },
      // Distractors or Primaries for reference? We'll just give the target palette but maybe all representing a color wheel
      { color: '#FF0000', name: 'Red' },
      { color: '#0000FF', name: 'Blue' },
      { color: '#FFFF00', name: 'Yellow' },
    ],
    regions: [
      // Color wheel with primary and secondary colors
      { id: 'red-segment', expectedColor: '#FF0000', hint: 'This is the primary color Red.' },
      { id: 'blue-segment', expectedColor: '#0000FF', hint: 'This is the primary color Blue.' },
      { id: 'yellow-segment', expectedColor: '#FFFF00', hint: 'This is the primary color Yellow.' },
      { id: 'green-segment', expectedColor: '#008000', hint: 'Green is made by mixing Blue and Yellow. It is complementary to Red.' },
      { id: 'orange-segment', expectedColor: '#FFA500', hint: 'Orange is made by mixing Red and Yellow. It is complementary to Blue.' },
      { id: 'purple-segment', expectedColor: '#800080', hint: 'Purple is made by mixing Red and Blue. It is complementary to Yellow.' },
    ],
    svgContent: (handleRegionClick, filledColors) => (
      <g>
        {/* Title */}
        <text x="200" y="30" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#333">Color Wheel - Complementary Colors</text>

        {/* Complete Color Wheel */}
        <g transform="translate(200, 150)">
          {/* Red segment */}
          <path d="M0,0 L60,-104 A120,120 0 0,1 104,60 L0,0 Z"
            fill={filledColors['red-segment'] || 'white'}
            stroke="black"
            strokeWidth="2"
            onClick={() => handleRegionClick('red-segment')}
            style={{ cursor: 'pointer' }} />

          {/* Orange segment */}
          <path d="M0,0 L104,60 A120,120 0 0,1 60,104 L0,0 Z"
            fill={filledColors['orange-segment'] || 'white'}
            stroke="black"
            strokeWidth="2"
            onClick={() => handleRegionClick('orange-segment')}
            style={{ cursor: 'pointer' }} />

          {/* Yellow segment */}
          <path d="M0,0 L60,104 A120,120 0 0,1 -60,104 L0,0 Z"
            fill={filledColors['yellow-segment'] || 'white'}
            stroke="black"
            strokeWidth="2"
            onClick={() => handleRegionClick('yellow-segment')}
            style={{ cursor: 'pointer' }} />

          {/* Green segment */}
          <path d="M0,0 L-60,104 A120,120 0 0,1 -104,60 L0,0 Z"
            fill={filledColors['green-segment'] || 'white'}
            stroke="black"
            strokeWidth="2"
            onClick={() => handleRegionClick('green-segment')}
            style={{ cursor: 'pointer' }} />

          {/* Blue segment */}
          <path d="M0,0 L-104,60 A120,120 0 0,1 -60,-104 L0,0 Z"
            fill={filledColors['blue-segment'] || 'white'}
            stroke="black"
            strokeWidth="2"
            onClick={() => handleRegionClick('blue-segment')}
            style={{ cursor: 'pointer' }} />

          {/* Purple segment */}
          <path d="M0,0 L-60,-104 A120,120 0 0,1 60,-104 L0,0 Z"
            fill={filledColors['purple-segment'] || 'white'}
            stroke="black"
            strokeWidth="2"
            onClick={() => handleRegionClick('purple-segment')}
            style={{ cursor: 'pointer' }} />

          {/* Center circle */}
          <circle cx="0" cy="0" r="20" fill="white" stroke="black" strokeWidth="2" />

          {/* Labels */}
          <text x="0" y="-85" textAnchor="middle" fill="white" fontWeight="bold" fontSize="10">Red</text>
          <text x="85" y="0" textAnchor="middle" fill="white" fontWeight="bold" fontSize="10">Orange</text>
          <text x="0" y="95" textAnchor="middle" fill="black" fontWeight="bold" fontSize="10">Yellow</text>
          <text x="-85" y="0" textAnchor="middle" fill="white" fontWeight="bold" fontSize="10">Green</text>
          <text x="0" y="-95" textAnchor="middle" fill="white" fontWeight="bold" fontSize="10">Blue</text>
          <text x="85" y="0" textAnchor="middle" fill="white" fontWeight="bold" fontSize="10">Purple</text>
        </g>

        {/* Complementary color pairs illustration */}
        <g transform="translate(50, 280)">
          <text x="0" y="0" fontWeight="bold" fontSize="12" fill="#333">Complementary Pairs:</text>

          {/* Red-Green pair */}
          <rect x="0" y="10" width="30" height="20" fill={filledColors['red-segment'] || 'white'} stroke="black" onClick={() => handleRegionClick('red-segment')} style={{ cursor: 'pointer' }} />
          <text x="15" y="25" textAnchor="middle" fontSize="8" fill="black">Red</text>

          <text x="40" y="22" fontSize="10" fill="#333">↔</text>

          <rect x="50" y="10" width="30" height="20" fill={filledColors['green-segment'] || 'white'} stroke="black" onClick={() => handleRegionClick('green-segment')} style={{ cursor: 'pointer' }} />
          <text x="65" y="25" textAnchor="middle" fontSize="8" fill="black">Green</text>
        </g>

        <g transform="translate(150, 280)">
          {/* Blue-Orange pair */}
          <rect x="0" y="10" width="30" height="20" fill={filledColors['blue-segment'] || 'white'} stroke="black" onClick={() => handleRegionClick('blue-segment')} style={{ cursor: 'pointer' }} />
          <text x="15" y="25" textAnchor="middle" fontSize="8" fill="black">Blue</text>

          <text x="40" y="22" fontSize="10" fill="#333">↔</text>

          <rect x="50" y="10" width="30" height="20" fill={filledColors['orange-segment'] || 'white'} stroke="black" onClick={() => handleRegionClick('orange-segment')} style={{ cursor: 'pointer' }} />
          <text x="65" y="25" textAnchor="middle" fontSize="8" fill="black">Orange</text>
        </g>

        <g transform="translate(250, 280)">
          {/* Yellow-Purple pair */}
          <rect x="0" y="10" width="30" height="20" fill={filledColors['yellow-segment'] || 'white'} stroke="black" onClick={() => handleRegionClick('yellow-segment')} style={{ cursor: 'pointer' }} />
          <text x="15" y="25" textAnchor="middle" fontSize="8" fill="black">Yellow</text>

          <text x="40" y="22" fontSize="10" fill="#333">↔</text>

          <rect x="50" y="10" width="30" height="20" fill={filledColors['purple-segment'] || 'white'} stroke="black" onClick={() => handleRegionClick('purple-segment')} style={{ cursor: 'pointer' }} />
          <text x="65" y="25" textAnchor="middle" fontSize="8" fill="black">Purple</text>
        </g>
      </g>
    )
  }
};
