export interface ServiceItem {
  id: string;
  category: 'hair-architecture' | 'dimensional-color' | 'scalp-therapy' | 'bridal-atelier';
  title: string;
  subtitle: string;
  duration: string;
  price: string;
  description: string;
  techniqueNotes: string[];
  recommendedInterval: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  experience: string;
  specialty: string;
  bio: string;
  quote: string;
  image: string;
  portfolioHighlight: string[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'cuts' | 'color' | 'treatment' | 'bridal';
  image: string;
  aspect: 'tall' | 'square' | 'wide';
  technique: string;
  architect: string;
  description: string;
  beforeAfter?: {
    beforeImg: string;
    afterImg: string;
  };
}

export interface Testimonial {
  id: string;
  clientName: string;
  profession: string;
  serviceReceived: string;
  rating: number;
  date: string;
  quote: string;
  fullReview: string;
  verifiedBooth: string;
}

export interface BoothStatus {
  boothId: string;
  name: string;
  status: 'in-session' | 'available' | 'reserved';
  nextAvailable: string;
  currentArchitect: string;
}

export const ATELIER_INFO = {
  name: 'SALONZ',
  tagline: 'Atelier of Hair Architecture & Sculptural Color',
  address: 'Level 2, 100 Feet Road, Indiranagar, Bengaluru 560038',
  phone: '+91 98200 47821',
  whatsapp: '919820047821',
  email: 'concierge@salonz-atelier.com',
  dailyCapacity: 6,
  hours: [
    { days: 'Tuesday – Saturday', time: '10:00 – 19:30 IST' },
    { days: 'Sunday', time: '11:00 – 17:00 IST' },
    { days: 'Monday', time: 'Closed (Research & Formulation Day)' },
  ],
  coordinates: {
    lat: 12.9784,
    lng: 77.6408,
  },
};

export const LIVE_BOOTHS: BoothStatus[] = [
  { boothId: '01', name: 'Brutalist Suite A', status: 'in-session', nextAvailable: '14:45 IST', currentArchitect: 'Marcus Lin' },
  { boothId: '02', name: 'Brutalist Suite B', status: 'available', nextAvailable: 'Immediate', currentArchitect: 'Priya Nair' },
  { boothId: '03', name: 'Linen Sanctuary C', status: 'reserved', nextAvailable: '16:00 IST', currentArchitect: 'Kenji Sato' },
  { boothId: '04', name: 'Color Lab D', status: 'in-session', nextAvailable: '15:15 IST', currentArchitect: 'Priya Nair' },
  { boothId: '05', name: 'Trichology Suite E', status: 'available', nextAvailable: 'Immediate', currentArchitect: 'Kenji Sato' },
  { boothId: '06', name: 'Bridal Suite F', status: 'reserved', nextAvailable: '17:30 IST', currentArchitect: 'Marcus Lin' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'precision-hair-sculpt',
    category: 'hair-architecture',
    title: 'Architectural Cut & Bone-Structure Framing',
    subtitle: 'Dry-sculpting tailored to facial geometry and natural hair fall',
    duration: '90 MINS',
    price: '₹ 3,200',
    description: 'We do not wet-cut hair to standard templates. Each architecture cut begins with a 20-minute dry structural analysis of skull contours, hair density vector, and natural growth cowlicks. Finished with Japanese stainless steel shears.',
    techniqueNotes: [
      '3D Facial Contour Mapping',
      'Dry-Sculpt Precision Shear Work',
      'Weight-Distribution Pointing',
      'Custom Blow-Sculpt & Maintenance Blueprint'
    ],
    recommendedInterval: 'Every 8 – 10 weeks'
  },
  {
    id: 'dimensional-balayage',
    category: 'dimensional-color',
    title: 'Dimensional Smoked Slate Balayage',
    subtitle: 'Freehand foil-less color placement for Seamless Grow-Out',
    duration: '210 MINS',
    price: '₹ 12,500',
    description: 'Designed for low-maintenance elegance that evolves beautifully over 6 months. Using custom-blended low-ammonia clay lighteners infused with bond-rebuilding lipids. We paint highlights aligned with movement lines rather than harsh linear foils.',
    techniqueNotes: [
      'Freehand Clay Balayage Painting',
      'Root-Melt Shadow Tonal Blending',
      'Bond Rebuilding Protein Shielding',
      'Glaze & Gloss Neutralizer'
    ],
    recommendedInterval: 'Every 16 – 20 weeks'
  },
  {
    id: 'japanese-silk-head-spa',
    category: 'scalp-therapy',
    title: 'Kyoto Silk Botanical Head Spa & Scalp Detox',
    subtitle: 'Clinical scalp micro-exfoliation and deep follicle nourishment',
    duration: '75 MINS',
    price: '₹ 3,800',
    description: 'A 7-step restorative therapy using imported Kyoto silk peptides, fermented bamboo charcoal, and ultrasonic mist infusion. Clears sebum buildup, stimulates micro-circulation, and restores natural scalp pH balance.',
    techniqueNotes: [
      'Scalp Micro-Camera Diagnostics',
      'Charcoal & Botanical Scrubbing Massage',
      'Ultrasonic Warm Mist Infusion',
      'Silk Peptide Lock Hydro-Mask'
    ],
    recommendedInterval: 'Monthly'
  },
  {
    id: 'custom-color-correction',
    category: 'dimensional-color',
    title: 'Structural Pigment & Tone Re-Balancing',
    subtitle: 'Reversing brassiness, chemical damage, or patchy box color',
    duration: '240 MINS',
    price: '₹ 14,500',
    description: 'A multi-phase corrective process for compromised hair. We first assess strand elasticity, dissolve residual synthetic metallic dyes, rebuild internal disulfide bonds, and deposit rich multi-tonal pigments.',
    techniqueNotes: [
      'Strand Elasticity & Porosity Test',
      'Chelating Metallic Mineral Removal',
      'Disulfide Bond Matrix Repair',
      'Dual-Phase Glaze Neutralization'
    ],
    recommendedInterval: 'Single Treatment / As Needed'
  },
  {
    id: 'bridal-couture-hair',
    category: 'bridal-atelier',
    title: 'Bridal Couture Hair Architecture (One Bride Per Day)',
    subtitle: 'Exclusive full-day atelier experience with complete trial and day-of styling',
    duration: 'FULL DAY',
    price: '₹ 22,000',
    description: 'We limit bridal bookings to strictly one bride per day to guarantee undivided focus. Includes a 2-hour pre-wedding architecture trial, veil/jewelry weight-engineering, texture preparation, and on-site touchups.',
    techniqueNotes: [
      'Comprehensive Pre-Event Trial Session',
      'Jewelry & Dupatta Weight Balance Structuring',
      'Humidity-Resistant Polymer Matrix Lock',
      'Private Suite Access & Refreshment Pairing'
    ],
    recommendedInterval: 'By Special Reservation'
  },
  {
    id: 'keratin-re-alignment',
    category: 'scalp-therapy',
    title: 'Zero-Formaldehyde Botanical Keratin Smoothing',
    subtitle: 'Frizz removal with natural bounce preservation',
    duration: '150 MINS',
    price: '₹ 11,000',
    description: 'Unlike stiff pin-straight chemical relaxers, our organic wheat amino acid & argan keratin formula eliminates humidity frizz while preserving natural wave texture, movement, and volume.',
    techniqueNotes: [
      'Formaldehyde-Free Botanical Complex',
      'Thermal Heat-Infusion Sealing',
      'Natural Volume & Bounce Preservation',
      'Sulfate-Free Home Care System Included'
    ],
    recommendedInterval: 'Every 4 – 5 Months'
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'marcus-lin',
    name: 'Marcus Lin',
    role: 'Founder & Master Hair Architect',
    experience: '16+ Years (London, Tokyo, Mumbai)',
    specialty: 'Precision Dry-Sculpting & Geometric Layering',
    bio: 'Trained at Vidal Sassoon Academy London and worked in Tokyo high-fashion editorial backstages before founding SALONZ in Pali Hill. Marcus treats hair not as a surface to trim, but as a living 3D architectural medium.',
    quote: 'Hair should move naturally with gravity and bounce back with your step. If a cut requires 40 minutes of round-brushing every morning, the architecture failed.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1000',
    portfolioHighlight: ['Precision Bob Architecture', 'Asymmetric Texture Cuts', 'Editorial Cover Work']
  },
  {
    id: 'priya-nair',
    name: 'Priya Nair',
    role: 'Head of Sculptural Color & Pigment Science',
    experience: '12 Years (Paris & Mumbai)',
    specialty: 'Smoked Slate Balayage & Low-Damage Tone Melting',
    bio: 'Former chemical formulation specialist turned colorist. Priya approaches hair color through light refraction and skin-undertone harmony, crafting multidimensional hues that grow out seamlessly without blunt line demarcation.',
    quote: 'The most expensive color is the one that looks like it took 4 hours in a salon chair. True luxury color looks like you were born under golden hour light.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=1000',
    portfolioHighlight: ['Smoked Bronde Balayage', 'Copper Verdigris Tonal Glaze', 'Correctional Root Melts']
  },
  {
    id: 'kenji-sato',
    name: 'Kenji Sato',
    role: 'Senior Trichologist & Scalp Specialist',
    experience: '14 Years (Kyoto & Mumbai)',
    specialty: 'Japanese Head Spa & Follicular Restoration',
    bio: 'Certified in traditional Japanese scalp shiatsu and trichological diagnostics. Kenji spent over a decade in Kyoto perfecting follicle detox rituals before bringing authentic head spa practices to SALONZ.',
    quote: 'Healthy hair is purely a byproduct of a balanced, hydrated scalp. We treat the soil before expecting the flower to bloom.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1000',
    portfolioHighlight: ['Kyoto Botanical Head Spa', 'Ultrasonic Mist Detox', 'Post-Color Scalp Balancing']
  }
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'port-1',
    title: 'Architectural Asymmetric Bob in Obsidian',
    category: 'cuts',
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80&w=1000',
    aspect: 'tall',
    technique: 'Dry Precision Shearing',
    architect: 'Marcus Lin',
    description: 'Clean geometric lines crafted around jawline angle to emphasize natural cheekbone height without heavy product weight.',
  },
  {
    id: 'port-2',
    title: 'Dimensional Smoked Slate & Honey Balayage',
    category: 'color',
    image: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&q=80&w=1000',
    aspect: 'square',
    technique: 'Freehand Clay Paint',
    architect: 'Priya Nair',
    description: 'Seamless melt from deep natural roots into warm honey highlights with cooler slate undertones for year-round low maintenance.',
  },
  {
    id: 'port-3',
    title: 'Japanese Silk Botanical Scalp Revival',
    category: 'treatment',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=1000',
    aspect: 'wide',
    technique: 'Kyoto Ultrasonic Steam',
    architect: 'Kenji Sato',
    description: 'Post-treatment shine and natural follicle volume after 75 minutes of deep botanical scalp exfoliation.',
  },
  {
    id: 'port-4',
    title: 'Couture Bridal Hair Sculpture with Natural Texture',
    category: 'bridal',
    image: 'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?auto=format&fit=crop&q=80&w=1000',
    aspect: 'tall',
    technique: 'Structural Pinning & Veil Anchor',
    architect: 'Marcus Lin',
    description: 'Weight-balanced bridal updo engineered to hold a heavy embroidered dupatta without tension pulling.',
  },
  {
    id: 'port-5',
    title: 'Subtle Copper Verdigris Gloss & Soft Shag',
    category: 'color',
    image: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&q=80&w=1000',
    aspect: 'square',
    technique: 'Multi-Tonal Glaze',
    architect: 'Priya Nair',
    description: 'Iridescent copper reflections under sun exposure with soft curtain bangs framed around facial contours.',
  },
  {
    id: 'port-6',
    title: 'Curtain Fringe & Texture Weight Reduction',
    category: 'cuts',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=1000',
    aspect: 'tall',
    technique: 'Point-Cutting & Slidewriting',
    architect: 'Marcus Lin',
    description: 'Relieving bulk from thick coarse hair while introducing airy movement that settles effortlessly with hand-drying.',
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'rev-1',
    clientName: 'Ananya Deshmukh',
    profession: 'Architect & Interior Designer',
    serviceReceived: 'Dimensional Smoked Slate Balayage & Precision Cut',
    rating: 5,
    date: '12 June 2026',
    quote: 'As an architect, I am obsessed with structure. Marcus and Priya are the only hair professionals in Mumbai who truly understand line, shadow, and proportion.',
    fullReview: 'I spent 4 years going to commercial chain luxury salons in Lower Parel where they would charge ₹35k and sit me under heat lamps with 50 foils while 3 different assistants rushed around. SALONZ is a complete breath of fresh air. Marcus sat with me for 20 minutes before even picking up a pair of scissors. He cut my hair dry to watch how it falls when I move my neck. The balayage Priya did grew out over 5 months without a single ugly demarcation line.',
    verifiedBooth: 'Suite A (Pali Hill)'
  },
  {
    id: 'rev-2',
    clientName: 'Devika Singhania',
    profession: 'Fashion Curator',
    serviceReceived: 'Bridal Couture Hair Architecture (Single Bride Day)',
    rating: 5,
    date: '28 May 2026',
    quote: 'Having the entire atelier dedicated solely to me on my wedding morning removed 90% of my wedding day stress.',
    fullReview: 'When Marcus told me SALONZ takes only ONE bride per day, I didn’t realize how much of a luxury that was until the day arrived. There were no other clients walking in, no noisy hair dryers blaring in the background. Marcus had engineered a custom hidden mesh frame inside my updo so my 4kg Sabyasachi dupatta didn’t pull a single hair on my head for 12 hours straight. Worth every single rupee.',
    verifiedBooth: 'Bridal Suite F'
  },
  {
    id: 'rev-3',
    clientName: 'Rohan Mehta',
    profession: 'Creative Director',
    serviceReceived: 'Kyoto Silk Botanical Head Spa',
    rating: 5,
    date: '04 July 2026',
    quote: 'The scalp spa with Kenji is essentially meditation for your nervous system and follicle health.',
    fullReview: 'I suffer from stress-induced scalp irritation and hair thinning from back-to-back shoots. Kenji did a micro-camera scalp check first to show me my follicle roots. The 75-minute head spa with warm ultrasonic mist and Japanese shiatsu massage is unreal. My scalp felt lighter immediately and my hair has noticeably more volume at the roots.',
    verifiedBooth: 'Trichology Suite E'
  },
  {
    id: 'rev-4',
    clientName: 'Kavita Kapoor',
    profession: 'Film Producer',
    serviceReceived: 'Color Correction & Botanical Keratin Smoothing',
    rating: 5,
    date: '19 April 2026',
    quote: 'They saved my hair after a horrible bleached brassy disaster at another studio.',
    fullReview: 'Another salon had burnt out my ends with high-volume bleach while trying to do a blonde balayage. Priya spent 4 hours gently dissolving the brassy pigment and doing a bond repair treatment before laying down a rich dark slate glaze. My hair didn’t snap, and it actually feels softer now than it did before the damage.',
    verifiedBooth: 'Color Lab D'
  }
];
