'use client';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-white text-black min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column - Profile & Description */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Profile Card */}
            <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8 text-center text-black max-w-md mx-auto">
              <div className="w-32 h-32 mx-auto mb-6 rounded-2xl overflow-hidden">
                <img
                  src="/images/me.jpg"
                  alt="Tom Jimmy"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex items-center justify-center gap-2 mb-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium text-green-600">Open to Work</span>
              </div>
              
              <h3 className="text-2xl font-bold mb-2">Tom Jimmy</h3>
              <p className="text-gray-600 mb-4">@tomjimmy • 📍 Bangalore, India</p>
              <p className="text-gray-800 font-medium mb-6">Data Analyst & Web Developer</p>
              
              <div className="text-sm text-gray-600 mb-6">
                <p className="font-medium">Final Year Student</p>
                <p className="text-xs">Computer Science (Data Science)</p>
                <div className="flex justify-center mt-2 gap-1">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs">P</div>
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">S</div>
                  <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-white text-xs">R</div>
                </div>
              </div>
              
              <button className="w-full bg-black text-white py-3 rounded-full font-medium hover:bg-gray-800 transition-colors">
                Contact Me
              </button>
            </div>
            
            {/* Description */}
            <div className="text-center lg:text-left">
              <p className="text-lg leading-relaxed text-gray-700">
                Final-year Computer Science Engineering (Data Science) undergraduate with hands-on experience in data engineering and web development. 
                Skilled in building Apache Spark ETL pipelines on Databricks, performing SQL-based data transformations, and developing responsive web applications using React and Next.js.
              </p>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-2xl font-bold mb-8">Education</h3>
              <div className="space-y-8">
                <div>
                  <div className="text-gray-600 text-sm mb-1">2022 - 2026</div>
                  <h4 className="text-xl font-bold mb-2">B.Tech, Computer Science (Data Science)</h4>
                  <p className="text-gray-600 mb-3">Christ University, Bangalore, Karnataka</p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Graduating May 2026 with a 7.1/10.0 CGPA. Comprehensive coursework in data science, machine learning, 
                    and software engineering with hands-on projects in data analysis and web development.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Experience */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-8">Experience</h3>
              
              <div className="relative pl-6">
                {/* Continuous vertical line */}
                <div className="absolute left-2 top-0 w-px h-full bg-gray-300"></div>
                
                <div className="space-y-12">
                  {/* Web Development Intern */}
                  <div className="relative">
                    <h4 className="text-xl font-bold mb-2">
                      AntStack <span className="text-gray-600 font-normal">- Technology Company</span>
                    </h4>
                    <div className="text-gray-600 text-sm mb-4">May 2025 – Jun 2025</div>
                    
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="absolute -left-5 w-3 h-3 bg-gray-50 rounded-full border-2 border-gray-400"></div>
                        <span className="font-semibold ml-2">Web Development Intern</span>
                      </div>
                      <p className="text-gray-700 text-sm leading-relaxed ml-2">
                        Developed responsive web applications using HTML, CSS, and JavaScript. Implemented reusable UI components 
                        and optimized page layouts for better performance and user experience.
                      </p>
                    </div>
                  </div>

                  {/* Data Engineering Intern */}
                  <div className="relative">
                    <div className="text-gray-600 text-sm mb-4">Apr 2024 – Jul 2024</div>
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="absolute -left-5 w-3 h-3 bg-gray-50 rounded-full border-2 border-gray-400"></div>
                        <span className="font-semibold ml-2">Data Engineering Intern</span>
                      </div>
                      <p className="text-gray-700 text-sm leading-relaxed ml-2">
                        Built and executed Apache Spark ETL pipelines on Databricks to process large-scale datasets. 
                        Performed SQL-based transformations and implemented data validation checks, improving reliability of downstream analytics workflows.
                      </p>
                    </div>
                  </div>

                  {/* Volunteer Experience */}
                  <div className="relative">
                    <div className="text-gray-600 text-sm mb-4">Nov 2024 – Mar 2025</div>
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="absolute -left-5 w-3 h-3 bg-gray-50 rounded-full border-2 border-gray-400"></div>
                        <span className="font-semibold ml-2">Web Developer - Keraleeyam (Volunteer)</span>
                      </div>
                      <p className="text-gray-700 text-sm leading-relaxed ml-2">
                        Developed and deployed a website for a school supporting underprivileged children. 
                        Implemented responsive design and accessibility-focused UI components to improve online visibility.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recent Projects */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold mb-6">Recent Projects</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Sonia's Realty Media</h4>
                    <p className="text-gray-600 text-sm mb-2">Aug 2025 – Present</p>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Production-ready real estate website using React.js and Tailwind CSS with responsive layouts and interactive navigation.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Brain Tumour Detection - ML</h4>
                    <p className="text-gray-600 text-sm mb-2">Sep 2025 – Dec 2025</p>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Machine learning pipeline to classify brain tumours from MRI images with comprehensive preprocessing and analysis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}