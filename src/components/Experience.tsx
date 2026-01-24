'use client';
import { motion } from 'framer-motion';

const experiences = [
  {
    category: 'Work Experience',
    items: [
      {
        title: 'Senior Full-Stack Developer',
        period: '2023 - Present',
        description: 'Leading development of scalable web applications and mentoring junior developers.',
        company: 'TechCorp Solutions',
        location: 'Remote',
        link: undefined
      },
      {
        title: 'Frontend Developer',
        period: '2022 - 2023',
        description: 'Built responsive user interfaces and improved application performance by 40%.',
        company: 'Digital Agency',
        location: 'New York',
        link: undefined
      }
    ]
  },
  {
    category: 'Education',
    items: [
      {
        title: 'Bachelor of Computer Science',
        period: '2018 - 2022',
        description: 'Focused on software engineering principles, algorithms, and modern web technologies.',
        company: 'University of Technology',
        location: 'California',
        link: undefined
      }
    ]
  },
  {
    category: 'Certifications',
    items: [
      {
        title: 'AWS Solutions Architect',
        period: '2024',
        description: 'Professional certification in cloud architecture and AWS services.',
        company: 'Amazon Web Services',
        location: 'Online',
        link: 'https://www.credly.com/badges/your-badge-id'
      },
      {
        title: 'Google UX Design Certificate',
        period: '2023',
        description: 'Comprehensive program covering user research, prototyping, and usability testing.',
        company: 'Google',
        location: 'Online',
        link: 'https://www.credly.com/badges/your-badge-id'
      }
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Journey</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A timeline of my professional growth, education, and achievements
          </p>
        </motion.div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-500 to-purple-500 hidden md:block"></div>
          
          <div className="space-y-16">
            {experiences.map((section, sectionIndex) => (
              <motion.div
                key={section.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: sectionIndex * 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                  {section.category}
                </h3>
                
                <div className="space-y-8">
                  {section.items.map((item, itemIndex) => (
                    <motion.div
                      key={`${item.title}-${itemIndex}`}
                      initial={{ opacity: 0, x: itemIndex % 2 === 0 ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: itemIndex * 0.1 }}
                      viewport={{ once: true }}
                      className={`relative flex items-center ${itemIndex % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                    >
                      {/* Timeline dot */}
                      <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                      
                      <div className={`w-full md:w-5/12 ${itemIndex % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                        <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-3xl hover:shadow-lg transition-shadow duration-300">
                          <div className="flex justify-between items-start mb-4">
                            <div>
                              <h4 className="text-xl font-bold text-gray-900 mb-2">
                                {item.title}
                              </h4>
                              <p className="text-blue-600 font-semibold">{item.company}</p>
                              {item.location && (
                                <p className="text-gray-500 text-sm">{item.location}</p>
                              )}
                            </div>
                            <span className="text-sm font-medium text-gray-600 bg-white px-3 py-1 rounded-full">
                              {item.period}
                            </span>
                          </div>
                          
                          <p className="text-gray-600 leading-relaxed mb-4">
                            {item.description}
                          </p>
                          
                          {item.link && (
                            <a
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm group"
                            >
                              View Certificate
                              <svg className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                            </a>
                          )}
                        </div>
                      </div>
                      
                      {/* Empty space for the other side */}
                      <div className="hidden md:block w-5/12"></div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}