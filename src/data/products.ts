import { Product, Testimonial, ProcessStep, Benefit } from '../types';

export const products: Product[] = [
  {
    id: 'premium-vermicompost',
    name: 'Premium Vermicompost',
    description: 'Our highest quality vermicompost, rich in beneficial microorganisms and plant nutrients. Perfect for farms, gardens, and commercial agriculture.',
    price: 25,
    image: '/images/products/vermicompost.png',
    features: [
      'Rich in essential plant nutrients',
      'Contains beneficial microorganisms',
      'Improves soil structure and water retention',
      'Made from organic agricultural waste',
      '100% organic and chemical-free',
      'State of Odisha certified organic fertilizer testing laboratory'
    ],
    sizes: [
      {
        id: 'small',
        name: 'Small Bag',
        weight: '1 kg',
        price: 25
      },
      {
        id: 'medium',
        name: 'Medium Bag',
        weight: '5 kg',
        price: 120
      },
      {
        id: 'large',
        name: 'Bulk Pack',
        weight: '25 kg',
        price: 500
      }
    ]
  },
  {
    id: 'prom',
    name: 'PROM (Phosphate Rich Organic Manure)',
    description: 'High-quality phosphate-rich organic manure that enhances soil fertility and promotes healthy plant growth. Made from natural rock phosphate and organic materials.',
    price: 60,
    image: '/images/products/prom.png',
    features: [
      'Rich in natural phosphate',
      'Improves soil fertility',
      'Enhances root development',
      'Promotes flowering and fruiting',
      '100% organic and chemical-free'
    ],
    sizes: [
      {
        id: 'small',
        name: 'Small Bag',
        weight: '1 kg',
        price: 60
      },
      {
        id: 'medium',
        name: 'Medium Bag',
        weight: '5 kg',
        price: 300
      },
      {
        id: 'large',
        name: 'Bulk Pack',
        weight: '50 kg',
        price: 2500
      }
    ]
  },
  {
    id: 'vermiwash',
    name: 'Vermiwash',
    description: 'Natural liquid fertilizer collected from vermicomposting units. Rich in enzymes, growth hormones, and beneficial microorganisms.',
    price: 30,
    image: '/images/products/Vermiwash.png',
    features: [
      'Natural growth promoter',
      'Rich in beneficial microorganisms',
      'Enhances plant immunity',
      'Easy application with sprayer',
      'Concentrated formula',
      'State of Odisha certified organic product'
    ],
    sizes: [
      {
        id: 'small-bottle',
        name: 'Small Bottle',
        weight: '500 ml',
        price: 30
      },
      {
        id: 'large-bottle',
        name: 'Large Bottle',
        weight: '1 litre',
        price: 60
      },
      {
        id: 'bulk',
        name: 'Bulk Pack',
        weight: '5 litre',
        price: 250
      }
    ]
  },
  {
    id: 'red-wiggler-worms',
    name: 'Red Wiggler Worms',
    description: 'Live Eisenia fetida worms for vermicomposting. Start your own vermicompost unit with our healthy, active worms.',
    price: 600,
    image: '/images/products/Red-wiggler-worms.png',
    features: [
      'Healthy and active worms',
      'Ideal for vermicomposting',
      'High reproduction rate',
      'Includes care instructions',
      'Free starter guide',
      'Live delivery guaranteed'
    ],
    sizes: [
      {
        id: 'starter',
        name: 'Starter Pack',
        weight: '1 kg',
        price: 1000
      },
      {
        id: 'medium',
        name: 'Medium Pack',
        weight: '10 kg',
        price: 6000
      },
      {
        id: 'large',
        name: 'Commercial Pack',
        weight: '100 kg',
        price: 50000
      }
    ]
  },
  {
    id: 'cocopeat',
    name: 'Cocopeat Blocks',
    description: 'Premium quality compressed cocopeat blocks. Excellent growing medium for plants with superior water retention.',
    price: 100,
    image: '/images/products/Cocopeat.png',
    features: [
      'Excellent water retention',
      'pH balanced',
      'Low EC value',
      'Organic and sustainable',
      'Weed and pathogen free',
      'Easy to hydrate and use'
    ],
    sizes: [
      {
        id: 'small',
        name: 'Small Block',
        weight: '1 kg',
        price: 100
      },
      {
        id: 'medium',
        name: 'Medium Block',
        weight: '5 kg',
        price: 250
      },
      {
        id: 'large',
        name: 'Bulk Pack',
        weight: '1 ton',
        price: 40000
      }
    ]
  },
  {
    id: 'neem-cake',
    name: 'Neem Cake Organic Fertilizer',
    description: 'Natural pest repellent and soil enricher made from neem seed extraction. Rich in NPK and organic matter.',
    price: 80,
    image: '/images/products/Neem-cake.png',
    features: [
      'Natural pest repellent',
      'Rich in NPK',
      'Improves soil fertility',
      'Controls nematodes',
      'Slow-release nutrients'
    ],
    sizes: [
      {
        id: 'small',
        name: 'Small Pack',
        weight: '1 kg',
        price: 80
      },
      {
        id: 'medium',
        name: 'Medium Pack',
        weight: '5 kg',
        price: 400
      },
      {
        id: 'large',
        name: 'Bulk Pack',
        weight: '50 kg',
        price: 4000
      }
    ]
  },
  {
    id: 'shade-net',
    name: 'Agro Shade Net',
    description: 'High-quality UV-stabilized shade nets for agricultural and horticultural applications. Various shade percentages available.',
    price: 230,
    image: '/images/products/Shade-net.png',
    features: [
      'UV stabilized',
      'Multiple shade percentages',
      'Durable construction',
      'Weather resistant',
      'Easy installation',
      'Reduces water evaporation'
    ],
    sizes: [
      {
        id: 'small',
        name: '50% Shade',
        weight: '1 kg',
        price: 180
      },
      {
        id: 'medium',
        name: '75% Shade',
        weight: '1 kg',
        price: 200
      },
      {
        id: 'large',
        name: '90% Shade',
        weight: '1 kg',
        price: 230
      }
    ]
  },
  {
    id: 'nursery-pots',
    name: 'Nursery Pots',
    description: 'Durable plastic nursery pots perfect for plant propagation and growing. UV-resistant and reusable.',
    price: 200,
    image: '/images/products/Nursery-pots.png',
    features: [
      'UV resistant',
      'Durable construction',
      'Drainage holes',
      'Reusable design',
      'Multiple sizes available',
      'Easy to clean'
    ],
    sizes: [
      {
        id: 'small',
        name: 'Small Pots',
        weight: '4 inch (10 pcs)',
        price: 200
      },
      {
        id: 'medium',
        name: 'Medium Pots',
        weight: '6 inch (10 pcs)',
        price: 400
      },
      {
        id: 'large',
        name: 'Large Pots',
        weight: '8 inch (10 pcs)',
        price: 600
      }
    ]
  },
  {
    id: 'perlite',
    name: 'Agricultural Perlite',
    description: 'Premium horticultural grade perlite for improved soil aeration and drainage. Perfect for potting mixes.',
    price: 200,
    image: '/images/products/Agricultural_perlite.png',
    features: [
      'Improves soil aeration',
      'Enhances drainage',
      'pH neutral',
      'Sterile medium',
      'Lightweight',
      'Long-lasting'
    ],
    sizes: [
      {
        id: 'small',
        name: 'Small Pack 0-3mm',
        weight: '1 kg',
        price: 180
      },
      {
        id: 'medium',
        name: 'Medium Pack 1-4mm',
        weight: '1 kg',
        price: 200
      },
      {
        id: 'large',
        name: 'Bulk Pack',
        weight: '10 kg',
        price: 1800
      }
    ]
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Hari Har',
    role: 'Organic Farmer',
    content: 'The quality of Ganjam Biofertilizers\' vermicompost is exceptional. After using it in my fields, I\'ve seen remarkable improvement in soil health and crop yield. Their commitment to quality is truly commendable.',
    image: ''
  },
  {
    id: '2',
    name: 'Deekshita Mudusu',
    role: 'Home Gardener',
    content: 'As a home gardener, I\'ve tried many products, but Ganjam\'s vermicompost stands out. My plants are healthier, producing more flowers and vegetables than ever before. The results are simply amazing.',
    image: ''
  },
  {
    id: '3',
    name: 'Srikanta Kumar Swain',
    role: 'Commercial Farmer',
    content: 'The results in my paddy nursery have been outstanding. Using only their vermicompost during seedling stage has shown remarkable results. The growth is vigorous and healthy, without any chemical fertilizers.',
    image: ''
  }
];

export const processSteps: ProcessStep[] = [
  {
    id: 1,
    title: 'Collection',
    description: 'We collect organic waste from local agricultural sources, ensuring a sustainable and eco-friendly process.',
    icon: 'leaf'
  },
  {
    id: 2,
    title: 'Preparation',
    description: 'The materials are carefully prepared and pre-composted to create the ideal environment for our earthworms.',
    icon: 'recycle'
  },
  {
    id: 3,
    title: 'Vermicomposting',
    description: 'Our specialized earthworms convert the organic material into nutrient-rich castings through natural digestion.',
    icon: 'worm'
  },
  {
    id: 4,
    title: 'Quality Testing',
    description: 'Each batch is tested for nutrient content and quality to meet organic certification standards.',
    icon: 'filter'
  },
  {
    id: 5,
    title: 'Packaging',
    description: 'Products are carefully packaged in moisture-resistant bags to maintain quality and effectiveness.',
    icon: 'package'
  }
];

export const benefits: Benefit[] = [
  {
    id: 1,
    title: 'Improved Soil Health',
    description: 'Enhances soil structure, water retention, and nutrient availability for better crop yield.',
    icon: 'layers'
  },
  {
    id: 2,
    title: 'Rich in Nutrients',
    description: 'Contains essential NPK, micronutrients, and beneficial enzymes for optimal plant growth.',
    icon: 'sprout'
  },
  {
    id: 3,
    title: 'Beneficial Microorganisms',
    description: 'Rich in beneficial bacteria and fungi that improve soil health and plant resistance.',
    icon: 'bug'
  },
  {
    id: 4,
    title: 'Certified Organic',
    description: 'State of Odisha certified organic product, safe for all crops and soil types.',
    icon: 'check-circle'
  },
  {
    id: 5,
    title: 'Eco-Friendly',
    description: 'Produced through sustainable methods that support local agricultural waste management.',
    icon: 'recycle'
  },
  {
    id: 6,
    title: 'Long-Lasting',
    description: 'Provides sustained nutrition throughout the growing season for better results.',
    icon: 'clock'
  }
];