'use client';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Brain Tumour Detection - Machine Learning',
    description: 'Designed and implemented a machine learning pipeline to classify brain tumours from MRI images. Performed image preprocessing, feature extraction, and dataset preparation for model training. Analysed model outputs and failure cases to understand system behavior across different inputs.',
    year: '2025',
    tags: ['Python', 'Machine Learning', 'Computer Vision', 'TensorFlow', 'OpenCV', 'Data Analysis'],
    category: 'Machine Learning',
    status: 'Completed'
  },
  {
    title: 'Sonia\'s Realty Media – Website Development',
    description: 'Designed and developed a production-ready real estate website using React.js and Tailwind CSS. Implemented state management with React Hooks and reusable UI components. Built fully responsive layouts optimized for mobile, tablet, and desktop devices.',
    year: '2025',
    tags: ['React.js', 'Tailwind CSS', 'JavaScript', 'Responsive Design', 'UI/UX'],
    category: 'Web Development',
    status: 'Live'
  },
  {
    title: 'Keraleeyam - Web Development',
    description: 'Developed and deployed a website for a school supporting underprivileged children. Implemented responsive design and accessibility-focused UI components. Improved online visibility of the organization\'s mission and activities through a structured web presence.',
    year: '2024-2025',
    tags: ['Web Development', 'Responsive Design', 'Accessibility', 'HTML5', 'CSS3', 'JavaScript'],
    category: 'Social Impact Web Development',
    status: 'Live'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-6" style={{fontFamily: '"Playfair Display", Georgia, serif'}}>
            Featured Work
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A showcase of projects that demonstrate expertise across the full stack, 
            from concept and design to deployment and optimization.
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
            >
              {/* Project Image Placeholder */}
              <div className="aspect-[16/10] bg-gradient-to-br from-gray-100 via-gray-50 to-gray-100 border-b border-gray-100 flex items-center justify-center group-hover:from-gray-200 group-hover:to-gray-100 transition-all duration-500">
                <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <div className="w-8 h-8 bg-gray-400 rounded-lg"></div>
                </div>
              </div>
              
              <div className="p-8 space-y-6">
                {/* Header */}
                <div className="space-y-3">
                  <div className="flex justify-between items-start gap-4">
                    <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-gray-700 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <div className="text-right flex-shrink-0">
                      <span className="text-sm text-gray-500 block">{project.year}</span>
                      <span className="inline-block mt-1 px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                        {project.status}
                      </span>
                    </div>
                  </div>
                  
                  <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-sm font-medium rounded-full">
                    {project.category}
                  </span>
                </div>
                
                {/* Description */}
                <p className="text-gray-600 leading-relaxed text-base">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-2 bg-gray-50 text-gray-700 text-sm font-medium rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors duration-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Action */}
                <div className="pt-4 border-t border-gray-100">
                  <button className="text-gray-600 hover:text-gray-900 font-medium text-sm transition-colors duration-200 flex items-center gap-2 group/btn">
                    View Project 
                    <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}