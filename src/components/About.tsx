'use client';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section
      id="about"
      className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white text-black min-h-screen"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Profile & Description */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Profile Card */}
            <div className="bg-white shadow-lg border border-gray-200 rounded-xl p-6 text-center text-black max-w-md mx-auto">
              <div className="w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden border-4 border-gray-300">
                <img
                  src="/images/me.jpg"
                  alt="Tom Jimmy"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex items-center justify-center gap-2 mb-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-xs font-medium text-green-600">
                  Open to Work
                </span>
              </div>

              <h3 className="text-2xl font-extrabold mb-2">Tom Jimmy</h3>
              <p className="text-gray-600 mb-3 text-sm">
                @tomjimmy • 📍 Bangalore, India
              </p>
              <p className="text-gray-800 font-medium mb-4 text-sm">
                Data Analyst & Web Developer
              </p>

              <div className="text-xs text-gray-600 mb-4">
                <p className="font-medium">Final Year Student</p>
                <p className="text-xs">Computer Science (Data Science)</p>
                <div className="flex justify-center mt-2 gap-2">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    P
                  </div>
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    S
                  </div>
                  <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    R
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="text-center lg:text-left">
              <h3 className="text-xl font-bold mb-3 text-gray-900">About Me</h3>
              <p className="text-base leading-relaxed text-gray-700">
                Final-year Computer Science Engineering (Data Science) student with
                hands-on experience in data engineering and web development. I
                specialize in building Apache Spark ETL pipelines, performing
                SQL-based data transformations, and developing responsive web
                applications using React and Next.js.
              </p>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Education</h3>
              <div className="bg-gray-100 rounded-lg p-6 shadow-md">
                <div className="text-blue-600 font-semibold mb-2 text-sm">
                  2022 - 2026
                </div>
                <h4 className="text-lg font-bold mb-2 text-gray-900">
                  B.Tech, Computer Science (Data Science)
                </h4>
                <p className="text-gray-600 font-medium mb-2 text-sm">
                  Christ University, Bangalore, Karnataka
                </p>
                <p className="text-sm leading-relaxed text-gray-700">
                  Graduating May 2026 with a <strong>7.1/10.0 CGPA</strong>. Focused
                  on data science, machine learning, and software engineering with
                  practical projects in data analysis and web development.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Experience */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Experience</h3>

              <div className="relative pl-8">
                {/* Vertical timeline line */}
                <div className="absolute left-3 top-0 w-0.5 h-full bg-gray-300"></div>

                <div className="space-y-6">
                  {/* Web Development Intern */}
                  <div className="relative bg-white rounded-lg p-6 shadow-md">
                    {/* Timeline dot */}
                    <div className="absolute -left-5 w-4 h-4 bg-black rounded-full border-2 border-white shadow-sm"></div>

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h4 className="text-lg font-bold text-gray-900">
                        AntStack <span className="text-gray-600 font-normal">- Technology Company</span>
                      </h4>
                      <div className="text-blue-600 font-semibold text-sm">
                        May 2025 – Jun 2025
                      </div>
                    </div>
                    <h5 className="text-base font-semibold mb-2 text-gray-800">
                      Web Development Intern
                    </h5>
                    <p className="text-sm leading-relaxed text-gray-700">
                      Developed responsive web applications using HTML, CSS, and
                      JavaScript. Implemented reusable UI components and optimized
                      page layouts for better performance and user experience.
                    </p>
                  </div>

                  {/* Data Engineering Intern */}
                  <div className="relative bg-white rounded-lg p-6 shadow-md">
                    {/* Timeline dot */}
                    <div className="absolute -left-5 w-4 h-4 bg-black rounded-full border-2 border-white shadow-sm"></div>

                    <div className="text-blue-600 font-semibold mb-2 text-sm">
                      Apr 2024 – Jul 2024
                    </div>
                    <h5 className="text-base font-semibold mb-2 text-gray-800">
                      Data Engineering Intern
                    </h5>
                    <p className="text-sm leading-relaxed text-gray-700">
                      Built and executed Apache Spark ETL pipelines on Databricks to
                      process large-scale datasets. Performed SQL-based
                      transformations and implemented data validation checks,
                      improving reliability of downstream analytics workflows.
                    </p>
                  </div>

                  {/* Volunteer Experience */}
                  <div className="relative bg-white rounded-lg p-6 shadow-md">
                    {/* Timeline dot */}
                    <div className="absolute -left-5 w-4 h-4 bg-black rounded-full border-2 border-white shadow-sm"></div>

                    <div className="text-blue-600 font-semibold mb-2 text-sm">
                      Nov 2024 – Mar 2025
                    </div>
                    <h5 className="text-base font-semibold mb-2 text-gray-800">
                      Web Developer - Keraleeyam (Volunteer)
                    </h5>
                    <p className="text-sm leading-relaxed text-gray-700">
                      Developed and deployed a website for a school supporting
                      underprivileged children. Implemented responsive design and
                      accessibility-focused UI components to improve online
                      visibility.
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