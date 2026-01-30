"use client";
// Reusable ExperienceCard component for internships
type ExperienceCardProps = {
  role: string;
  company?: string;
  date: string;
  description: string;
};
function ExperienceCard({ role, company, date, description }: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="relative bg-white rounded-lg p-5 shadow transition-transform duration-200 hover:shadow-lg hover:-translate-y-1 border border-gray-100"
    >
      {company && (
        <div className="text-gray-900 font-bold text-base mb-1">{company}</div>
      )}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
        <h5 className="text-base font-semibold text-gray-800">{role}</h5>
        <div className="text-blue-600 font-semibold text-sm">{date}</div>
      </div>
      <p className="text-sm leading-relaxed text-gray-700">{description}</p>
    </motion.div>
  );
}
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Briefcase } from 'lucide-react';

export default function About() {
  return (
    <section
      id="about"
      className="pb-10 pt-6 px-4 bg-gray-50 text-black" style={{ fontFamily: 'Inter, sans-serif' }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - About Me & Education */}
          <div className="space-y-8">
            {/* About Me */}
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-1">About Me</h2>
              <div className="text-gray-500 text-base mb-4">Who I am & what I build</div>
              <p className="text-lg text-gray-800 mb-6">
                Final-year CSE (Data Science) student who enjoys building and working on real-world projects. I like turning ideas into working products and learning by building practical, hands-on projects across web and data.
              </p>
              {/* Quick Stats Row */}
              <div className="flex flex-wrap gap-3 mb-3">
                <span className="inline-flex items-center gap-1 bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                  <MapPin className="w-4 h-4 text-gray-500" /> Bangalore, India
                </span>
                <span className="inline-flex items-center gap-1 bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                  <GraduationCap className="w-4 h-4 text-gray-500" /> B.Tech CSE (DS)
                </span>
                <span className="inline-flex items-center gap-1 bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                  <Briefcase className="w-4 h-4 text-gray-500" /> Web + Data
                </span>
              </div>
              {/* Skills Chips */}
              <div className="flex flex-wrap gap-2 mb-6">
                {/* Removed skill buttons */}
              </div>
            </div>
            {/* Education Timeline Card */}
            <div className="relative bg-white rounded-lg p-4 shadow-md border border-gray-200 flex flex-col gap-1">
              <div className="flex items-center gap-2 mb-2">
                <GraduationCap className="w-5 h-5 text-blue-600" />
                <span className="text-lg font-bold text-gray-900">Education</span>
              </div>
              <div className="text-gray-500 text-sm mb-2">My academic background</div>
              <div className="flex flex-wrap gap-2 mb-2">
                <span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full text-xs font-semibold">CGPA 7.1</span>
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded-full text-xs font-semibold">Graduating 2026</span>
                <span className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full text-xs font-semibold">Christ University</span>
              </div>
              <div className="text-gray-900 font-semibold">B.Tech, Computer Science (Data Science)</div>
              <div className="text-gray-500 text-xs">Bangalore, Karnataka</div>
            </div>
            {/* Certifications Card */}
            <div className="relative bg-white rounded-lg p-4 shadow-md border border-yellow-200 flex flex-col gap-1 mt-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-block w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-3 h-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 17v-6m0 0V7m0 4h4m-4 0H8" />
                  </svg>
                </span>
                <span className="text-lg font-bold text-gray-900">Certifications</span>
              </div>
              <div className="text-gray-500 text-sm mb-2">Professional credentials & ongoing learning</div>
              <div className="flex flex-wrap gap-2 mb-2">
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full text-xs font-semibold">Google Data Analytics Professional Certificate</span>
                <span className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full text-xs font-semibold">Ongoing</span>
              </div>
              <div className="text-gray-500 text-xs">Coursera</div>
            </div>
          </div>
          {/* Right Column - Experience Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-1">Experience</h2>
              <div className="text-gray-500 text-base mb-4">Internships & volunteering work</div>
              <div className="relative pl-6">
                {/* Vertical timeline line */}
                <div className="absolute left-1.5 top-0 w-px h-full bg-gray-200" style={{ zIndex: 0 }}></div>
                <div className="space-y-5">
                  {/* Web Development Intern (AntStack) */}
                  <ExperienceCard
                    role="Web Development Intern"
                    company="AntStack"
                    date="May 2025 – Jun 2025"
                    description="Developed responsive web applications using HTML, CSS, and JavaScript. Implemented reusable UI components and optimized page layouts for better performance and user experience."
                  />
                  {/* Data Engineering Intern (AntStack) */}
                  <ExperienceCard
                    role="Data Engineering Intern"
                    company="AntStack"
                    date="Apr 2024 – Jul 2024"
                    description="Built and executed Apache Spark ETL pipelines on Databricks to process large-scale datasets. Performed SQL-based transformations and implemented data validation checks, improving reliability of downstream analytics workflows."
                  />
                  {/* Volunteer Experience - Keraleeyam Website */}
                  <ExperienceCard
                    role="Web Developer"
                    company="Keraleeyam"
                    date="Nov 2024 – Mar 2025"
                    description="Built and deployed a responsive website for Keraleeyam, a community-based charity organization. The platform highlights social service, charity initiatives, and community impact by showcasing activities, events, and outreach programs."
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}