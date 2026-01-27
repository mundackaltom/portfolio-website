'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { projects } from '@/lib/projects';
import Image from 'next/image';

export default function Projects() {
  return (
  <section id="projects" className="pt-2 pb-6 px-4 bg-gray-50" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4" style={{fontFamily: '"Playfair Display", Georgia, serif'}}>
            Featured Work
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
            A showcase of projects that demonstrate expertise across the full stack, 
            from concept and design to deployment and optimization.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-50 rounded-lg"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer bg-white rounded-lg shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 overflow-hidden border border-gray-100"
              >
                {/* Project Image */}
                <div className="aspect-[16/10] relative overflow-hidden rounded-t-lg">
                  {project.heroImage ? (
                    <Image
                      src={project.heroImage}
                      alt={`${project.title} hero image`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      priority={index < 2} // Prioritize loading for the first two cards
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-gray-100 via-gray-50 to-gray-100 flex items-center justify-center">
                      <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                        <div className="w-5 h-5 bg-gray-400 rounded-md"></div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-4 space-y-3">
                  {/* Header */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-start gap-2">
                      <h3 className="text-base font-semibold text-gray-900 group-hover:text-gray-700 transition-colors duration-300 leading-tight">
                        {project.title}
                      </h3>
                      <div className="text-right flex-shrink-0">
                        <span className="text-xs text-gray-500 block">{project.year}</span>
                        <span className={`inline-block mt-1 px-1.5 py-0.5 ${project.status === 'Live' ? 'bg-green-100 text-green-700' : 'bg-gray-200 text-gray-700'} text-xs font-medium rounded-full`}>
                          {project.status}
                        </span>
                      </div>
                    </div>
                    <span className="inline-block px-2 py-0.5 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                      {project.subtitle}
                    </span>
                  </div>
                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed text-xs line-clamp-3">
                    {project.description}
                  </p>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1">
                    {project.stack.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="px-1.5 py-0.5 bg-gray-50 text-gray-700 text-xs font-medium rounded border border-gray-200 hover:bg-gray-100 transition-colors duration-200"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.stack.length > 4 && (
                      <span className="px-1.5 py-0.5 text-gray-500 text-xs">
                        +{project.stack.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}