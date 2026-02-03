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
    heroImage: '/images/BTD.jpg', // Updated to use the image from public/images
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
      '/images/BTD.jpg',
      '/projects/brain-tumour-detection/1.png',
      '/projects/brain-tumour-detection/2.png',
    ],
  },
  {
    slug: 'sonias-realty-media',
    title: 'Sonia’s Realty Media',
    subtitle: 'Modern real estate web platform',
    heroImage: '/images/SRM.jpg', // Updated to use the image from public/images
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
      '/images/SRM.jpg',
      '/projects/sonias-realty-media/1.png',
      '/projects/sonias-realty-media/2.png',
    ],
  },
  {
    slug: 'keraleeyam',
    title: 'Keraleeyam',
    subtitle: 'Community-driven charity initiative',
    heroImage: '/images/K.jpg', // Updated to use the image from public/images
    description: 'A responsive website to showcase Keraleeyam’s charity work, events, and community impact.',
    longDescription: 'A web platform to showcase the mission, activities, and impact of Keraleeyam, a community-driven charity initiative. Features include event galleries, volunteer and support details, and participation information.',
    year: '2024-2025',
    status: 'Live',
    role: 'Web Developer',
    stack: ['HTML5', 'CSS3', 'JavaScript'],
    githubUrl: 'https://github.com/mundackaltom/keraleeyam',
    highlights: [
      'Community-focused charity initiatives',
      'Event updates and activity showcases',
      'Simple and accessible UI',
    ],
    features: [
      'Responsive design',
      'Event and activity galleries',
      'Contact and participation information',
      'Volunteer and support details',
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
      '/images/K.jpg',
      '/projects/keraleeyam/1.png',
      '/projects/keraleeyam/2.png',
    ],
  },
  {
    slug: 'wood-solutions',
    title: 'Wood Solutions',
    subtitle: 'Mass timber technical advisory firm',
    heroImage: '/images/WS.jpg', // Updated to use the image from public/images
    description: 'Advising architects, engineers, and developers on the use of mass timber in sustainable construction projects.',
    longDescription: "A digital platform showcasing Wood Solutions’ expertise in mass timber design, technical advisory services, and project case studies. The site highlights their consulting capabilities, technical documentation, and completed projects.",
    year: '2025',
    status: 'Completed',
    role: 'Full Stack Developer',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe'],
    githubUrl: 'https://github.com/mundackaltom/wood-solutions',
    liveUrl: 'https://woodsolutions.com',
    highlights: [
      'Mass timber consulting',
      'Technical documentation and reports',
      'Project advisory and case studies',
    ],
    features: [
      'Project portfolio and case studies',
      'Technical resources and documentation',
      'Contact and inquiry system',
      'Clean, professional, engineering-focused UI',
    ],
    challenges: [
      'Complex project requirements',
      'Communicating technical concepts',
    ],
    futureImprovements: [
      'Add more case studies',
      'Expand technical resources',
    ],
    images: [
      '/images/WS.jpg',
      '/projects/wood-solutions/1.png',
      '/projects/wood-solutions/2.png',
    ],
  },
];
