'use client';
import { motion } from 'framer-motion';
import { TechStackStrip } from '@/components/ui/tech-stack-strip';
import { SocialLinks } from '@/components/ui/social-links';
import { SimpleTypingAnimation } from '@/components/ui/simple-typing-animation';

export default function EnhancedHero() {
  return (
    <section id="intro" className="relative min-h-screen bg-white">
      {/* Content Overlay */}
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="text-center px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-4xl md:text-6xl lg:text-7xl leading-tight tracking-tight"
              >
                <span className="text-gray-900 font-sans font-semibold">
                  Hello, I'm
                </span>
                <br />
                <SimpleTypingAnimation
                  text="Tom Jimmy"
                  duration={150}
                  className="text-gray-600 text-4xl md:text-6xl lg:text-7xl"
                  style={{fontFamily: '"Playfair Display", Georgia, serif', letterSpacing: '-0.02em'}}
                />
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-6"
              >
                <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed font-normal">
                  Crafting beautiful digital experiences with modern technologies and thoughtful design.
                  Passionate about creating solutions that make a difference.
                </p>
                
                {/* Dynamic Tech Stack Strip - Left aligned under description */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="w-full max-w-2xl mx-auto mt-6"
                >
                  <div className="flex items-center justify-start gap-4">
                    <h3 className="text-sm font-medium text-gray-500 tracking-wide whitespace-nowrap ml-2">Tech Stack:</h3>
                    <div className="max-w-xl mr-4">
                      <TechStackStrip />
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Social Media Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="pt-8"
              >
                <SocialLinks />
              </motion.div>
            </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
            >
              <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}