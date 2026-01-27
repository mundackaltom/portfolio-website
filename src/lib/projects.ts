export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  heroImage?: string;
  description: string;
  longDescription: string;
  year: string;
  status: 'Live' | 'Completed';
  role: string;
  stack: string[];
  githubUrl: string;
  liveUrl?: string;
  highlights: string[];
  features: string[];
  challenges: string[];
  futureImprovements: string[];
  images: string[];
};

export const projects: Project[] = [
  {
    slug: 'brain-tumour-detection',
    title: 'Brain Tumour Detection System',
    subtitle: 'AI-powered medical imaging for early diagnosis',
    heroImage: '/projects/brain-tumour-detection/cover.png',
    description: 'Machine learning system to detect brain tumours from MRI scans.',
    longDescription: 'A full-stack ML project that leverages deep learning to assist radiologists in identifying brain tumours from MRI images. The system includes data preprocessing, model training, and a user-friendly interface for predictions.',
    year: '2025',
    status: 'Completed',
    role: 'ML Engineer, Full Stack Developer',
    stack: ['Python', 'TensorFlow', 'OpenCV', 'Flask', 'React'],
    githubUrl: 'https://github.com/mundackaltom/Brain-Tumour-Detection-System',
    highlights: [
      'Achieved 95%+ accuracy on test data',
      'Automated preprocessing pipeline',
      'User-friendly web interface for predictions',
    ],
    features: [
      'Upload MRI images for instant analysis',
      'Deep learning model for tumour classification',
      'Interactive results dashboard',
      'Exportable reports',
      'Secure user authentication',
    ],
    challenges: [
      'Limited labeled medical data',
      'Balancing model accuracy and speed',
    ],
    futureImprovements: [
      'Expand to other tumour types',
      'Integrate with hospital systems',
    ],
    images: [
      '/projects/brain-tumour-detection/cover.png',
      '/projects/brain-tumour-detection/1.png',
      '/projects/brain-tumour-detection/2.png',
    ],
  },
  {
    slug: 'sonias-realty-media',
    title: 'Sonia’s Realty Media',
    subtitle: 'Modern real estate web platform',
    heroImage: '/projects/sonias-realty-media/cover.png',
    description: 'Responsive website for a real estate business, built with React and Tailwind.',
    longDescription: 'A production-ready real estate website featuring property listings, agent profiles, and lead capture forms. Built for performance and mobile usability.',
    year: '2025',
    status: 'Live',
    role: 'Frontend Developer',
    stack: ['React', 'Tailwind CSS', 'JavaScript'],
    githubUrl: 'https://github.com/mundackaltom/Sonias-Realty-Media',
    liveUrl: 'https://soniasrealty.com',
    highlights: [
      'Mobile-first responsive design',
      'SEO optimized',
      'Integrated lead capture',
    ],
    features: [
      'Property search and filter',
      'Agent profiles',
      'Contact forms',
      'Gallery and virtual tours',
    ],
    challenges: [
      'Optimizing for SEO',
      'Ensuring accessibility',
    ],
    futureImprovements: [
      'Add mortgage calculator',
      'Integrate chat support',
    ],
    images: [
      '/projects/sonias-realty-media/cover.png',
      '/projects/sonias-realty-media/1.png',
      '/projects/sonias-realty-media/2.png',
    ],
  },
  {
    slug: 'keraleeyam',
    title: 'Keraleeyam',
    subtitle: 'Nonprofit school website',
    heroImage: '/projects/keraleeyam/cover.png',
    description: 'Website for a school supporting underprivileged children.',
    longDescription: 'A web platform to showcase the mission, activities, and impact of Keraleeyam, a nonprofit school. Features include event galleries, donation info, and volunteer sign-up.',
    year: '2024-2025',
    status: 'Live',
    role: 'Web Developer',
    stack: ['HTML5', 'CSS3', 'JavaScript'],
    githubUrl: 'https://github.com/mundackaltom/keraleeyam',
    highlights: [
      'Accessibility-focused UI',
      'Donation and volunteer info',
      'Event photo galleries',
    ],
    features: [
      'Responsive design',
      'Gallery and events',
      'Contact and donation forms',
      'Volunteer sign-up',
    ],
    challenges: [
      'Limited resources',
      'Driving online engagement',
    ],
    futureImprovements: [
      'Add blog/news section',
      'Enable online donations',
    ],
    images: [
      '/projects/keraleeyam/cover.png',
      '/projects/keraleeyam/1.png',
      '/projects/keraleeyam/2.png',
    ],
  },
  {
    slug: 'wood-solutions',
    title: 'Wood Solutions',
    subtitle: 'Custom furniture e-commerce',
    heroImage: '/projects/wood-solutions/cover.png',
    description: 'E-commerce site for custom wood furniture, with product configurator.',
    longDescription: 'A full-featured e-commerce platform for a custom furniture business. Includes product configurator, shopping cart, and order management.',
    year: '2025',
    status: 'Completed',
    role: 'Full Stack Developer',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe'],
    githubUrl: 'https://github.com/mundackaltom/wood-solutions',
    liveUrl: 'https://woodsolutions.com',
    highlights: [
      'Custom product configurator',
      'Stripe payments integration',
      'Admin order dashboard',
    ],
    features: [
      'Product customization',
      'Shopping cart',
      'Order management',
      'Responsive UI',
      'Secure checkout',
    ],
    challenges: [
      'Complex product options',
      'Payment integration',
    ],
    futureImprovements: [
      'Add customer reviews',
      'Expand product catalog',
    ],
    images: [
      '/projects/wood-solutions/cover.png',
      '/projects/wood-solutions/1.png',
      '/projects/wood-solutions/2.png',
    ],
  },
];
