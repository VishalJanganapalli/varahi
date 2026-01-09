import icon1 from '../assets/renovation.svg'
import icon2 from '../assets/demolition.svg'
import icon3 from '../assets/construction.svg'
import icon4 from '../assets/excavator.svg'
import icon5 from '../assets/painting.svg'
import icon6 from '../assets/protection.svg'
import icon7 from '../assets/rocks.svg'
import icon8 from '../assets/civil.svg'
import icon9 from '../assets/interior-design.svg'

const services = [
  {
    slug: 'renovation',
    name: 'Renovation',
    icon: icon1,
    heroImage:
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=60',
    priceStartText: 'Price start from ₹ 149.00 per square foot',
    note: 'Materials and debris will be handled safely and disposed of as per site requirements.',
    workFlowTitle: 'Varahi work flow',
    workFlow: [
      'Site visit and renovation assessment',
      'Scope finalization and estimate approval',
      'Skilled execution with quality checks',
      'Cleanup and handover with final inspection'
    ]
  },
  {
    slug: 'demolition',
    name: 'Demolition',
    icon: icon2,
    heroTitle: 'Demolition',
    heroImage:
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=60',
    priceStartText: 'Price start from ₹ 5.00 per square foot',
    note: 'All wood, iron, and copper materials will be collected and taken over by Varahi Infra Company.',
    workFlowTitle: 'Varahi work flow',
    workFlow: [
      'Safe and controlled demolition for residential & commercial buildings',
      'Partial and complete structure demolition services',
      'Trained professionals with proper safety measures',
      'Debris removal and site cleanup included',
      'Use of modern tools and equipment',
      'Compliance with local safety and environmental norms'
    ]
  },
  {
    slug: 'construction',
    name: 'Construction',
    icon: icon3,
    heroTitle: 'Construction',
    heroImage:
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=60',
    priceStartText: 'Price start from ₹ 1899.00 per square foot',
    note: 'There will be no charges for demolition, the service is completely free of cost.',
    workFlowTitle: 'Varahi work flow',
    packages: [
      { id: 'supercomfort', label: 'Supercomfort 1699' },
      { id: 'comfort', label: 'Comfort 1899' },
      { id: 'premium', label: 'Premium 1899' },
      { id: 'customized', label: 'Customized' }
    ],
    tiers: ['Basic', 'Luxury', 'Super Luxury'],
    workFlow: [
      'Requirement discussion & site inspection',
      'Planning & design coordination',
      'Estimation & agreement',
      'Site preparation & foundation work',
      'Structural construction',
      'MEP works',
      'Finishing works',
      'Quality checks & inspections',
      'Final handover'
    ]
  },
  {
    slug: 'earth-excavation',
    name: 'Earth Excavation',
    icon: icon4,
    heroTitle: 'Earth Excavation / Rock Cutting',
    heroImage:
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=60',
    priceStartText: 'Price start from ₹ 99.00 per square foot',
    note: 'There will be no charges for demolition, the service is completely free of cost.',
    workFlowTitle: 'Varahi work flow',
    workFlow: [
      'Site assessment and marking before excavation',
      'Earth excavation for foundations, basements, and trenches',
      'Rock cutting and breaking using modern machinery',
      'Safe removal and disposal of excavated soil and debris',
      'Precise work as per drawings and site requirements',
      'Suitable for residential, commercial, and industrial sites'
    ]
  },
  {
    slug: 'painting',
    name: 'Painting',
    icon: icon5,
    heroImage:
      'https://images.unsplash.com/photo-1599619351208-3e6c839d6828?auto=format&fit=crop&w=1200&q=60',
    priceStartText: 'Price start from ₹ 25.00 per square foot',
    note: 'Surface preparation and finishing will be done with quality materials and proper safety.',
    workFlowTitle: 'Varahi work flow',
    workFlow: [
      'Site visit and shade selection',
      'Surface preparation (sanding/putty/primer)',
      'Painting execution with quality checks',
      'Touch-ups and cleanup'
    ]
  },
  {
    slug: 'waterproofing',
    name: 'Waterproofing',
    icon: icon6,
    heroImage:
      'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1200&q=60',
    priceStartText: 'Price start from ₹ 35.00 per square foot',
    note: 'We use suitable waterproofing systems based on site conditions and requirements.',
    workFlowTitle: 'Varahi work flow',
    workFlow: [
      'Leakage inspection and root-cause identification',
      'Surface cleaning and preparation',
      'Application of waterproofing system',
      'Curing, testing, and handover'
    ]
  },
  {
    slug: 'rock-cutting',
    name: 'Rock Cutting',
    icon: icon7,
    heroImage:
      'https://images.unsplash.com/photo-1590725121839-892b458a74fe?auto=format&fit=crop&w=1200&q=60',
    priceStartText: 'Price start from ₹ 99.00 per square foot',
    note: 'Work is executed using safe methods and equipment suitable for site constraints.',
    workFlowTitle: 'Varahi work flow',
    workFlow: [
      'Site inspection and marking',
      'Machine setup and safety checks',
      'Rock cutting / breaking execution',
      'Debris removal and cleanup'
    ]
  },
  {
    slug: 'civil',
    name: 'Civil',
    icon: icon8,
    heroImage:
      'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=1200&q=60',
    priceStartText: 'Price start from ₹ 49.00 per square foot',
    note: 'Civil works are executed with supervision and quality assurance at every stage.',
    workFlowTitle: 'Varahi work flow',
    workFlow: [
      'Requirement gathering',
      'Site execution planning',
      'Work execution with skilled labor',
      'Quality checks and delivery'
    ]
  },
  {
    slug: 'interior',
    name: 'Interior',
    icon: icon9,
    heroImage:
      'https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1200&q=60',
    priceStartText: 'Price start from ₹ 999.00 per square foot',
    note: 'Design, materials, and execution are aligned to your requirements and budget.',
    workFlowTitle: 'Varahi work flow',
    workFlow: [
      'Design discussion and site measurement',
      '3D/2D planning and approvals',
      'Execution with quality checks',
      'Installation and handover'
    ]
  }
]

export default services
