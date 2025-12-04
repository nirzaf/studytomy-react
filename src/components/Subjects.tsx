import { motion, type Variants } from 'framer-motion';
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, Key } from 'react';
import SubjectsOnDemand from './SubjectsOnDemand';
import { EducationalBackground, KnowledgeParticles } from './animations/EducationalAnimations';

// Subject data (ensure iconClass matches CSS and React conditional rendering)
const subjects = [
  { name: "Geography", iconClass: "icon-geography", color: "color-1", alt: "Geographic concepts and global studies visualization" },
  { name: "History", iconClass: "icon-history", color: "color-2", alt: "Historical concepts and timeline visualization" },
  { name: "Biology", iconClass: "icon-biology", color: "color-3", alt: "Animated DNA double helix structure" },
  { name: "Human Biology", iconClass: "icon-human-bio", color: "color-2", alt: "Animated pulsing heart with ECG line" },
  { name: "Physics", iconClass: "icon-physics", color: "color-3", alt: "Animated atom with nucleus and orbiting electrons" },
  { name: "Chemistry", iconClass: "icon-chemistry", color: "color-1", alt: "Animated beaker with bubbling liquid" },
  { name: "Language", iconClass: "icon-language", color: "color-2", alt: "Animated speech bubbles representing language" },
  { name: "Literature", iconClass: "icon-literature", color: "color-3", alt: "Animated book with turning pages" },
  { name: "Psychology", iconClass: "icon-psychology", color: "color-2", alt: "Animated brain halves with firing synapses" },
  { name: "Mathematics", iconClass: "icon-mathematics", color: "color-3", alt: "Animated Pi symbol with orbiting numbers" },
  { name: "Business Studies", iconClass: "icon-business", color: "color-1", alt: "Animated growing bar chart" },
  { name: "Accounting", iconClass: "icon-accounting", color: "color-2", alt: "Animated calculator with changing numbers" },
  { name: "Economics", iconClass: "icon-economics", color: "color-3", alt: "Animated pulsing dollar sign with floating coins" },
  { name: "Additional Maths", iconClass: "icon-add-maths", color: "color-1", alt: "Animated graph with drawing curve" },
  { name: "Computer Science", iconClass: "icon-cs", color: "color-2", alt: "Animated terminal window with typing code" },
  { name: "Statistics", iconClass: "icon-statistics", color: "color-3", alt: "Animated bell curve with plotting data points" },
  { name: "ICT", iconClass: "icon-ict", color: "color-1", alt: "Animated network grid with nodes and data packets" },
  { name: "Sociology", iconClass: "icon-sociology", color: "color-2", alt: "Animated interacting figures" }
];

const Subjects = () => {
  // Animation variants for staggered appearance
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12
      }
    }
  };

  // Helper function to generate span elements for CS icon
  const renderSpans = (text: string) => {
    return text.split('').map((char: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined, index: Key | null | undefined) => <span key={index}>{char}</span>);
  };

  return (
    <>
      <EducationalBackground variant="default" intensity="medium">
        <section className="py-20 bg-gradient-to-b from-night/5 via-white to-celeste/10 relative overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-celeste/10 blur-3xl"></div>
            <div className="absolute -bottom-32 -left-20 w-80 h-80 rounded-full bg-celeste/5 blur-3xl"></div>

            {/* Additional Subject-Specific Knowledge Particles */}
            <KnowledgeParticles
              count={8}
              variant="mathematical"
              symbols={['∑', '∫', 'π', '∆', '√', 'α', 'β', 'θ', '∞', 'λ']}
            />
          </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold mb-4 text-black"><strong>Academic Expertise</strong></h2>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              Our team of qualified professionals offers assistance across a wide range of academic disciplines
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {/* Sort subjects alphabetically before mapping */}
            {[...subjects].sort((a, b) => a.name.localeCompare(b.name)).map((subject) => (
              <motion.div
                key={subject.name}
                className="flex flex-col items-center"
                variants={itemVariants}
              >
                <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-4 w-full h-full flex flex-col items-center justify-center group">
                  <div className="relative mb-3 p-2 rounded-full bg-gradient-to-br from-night/5 to-celeste/10 group-hover:from-celeste/20 group-hover:to-celeste/30 transition-all duration-300">
                    {/* Icon Wrapper - applies the specific icon class */}
                    <div
                      className={`icon-wrapper ${subject.iconClass} w-16 h-16 relative z-10 group-hover:scale-110 transition-transform duration-300`}
                      role="img"
                      aria-label={subject.alt}
                    >
                      {/* Conditional Rendering based on iconClass - MUST MATCH CSS STRUCTURE */}

                      {/* --- Accounting --- */}
                      {subject.iconClass === 'icon-accounting' && (
                        <div className="calculator-body">
                          <div className="screen"></div>
                          <div className="buttons">
                            {/* Render 12 calculator buttons */}
                            {Array.from({ length: 12 }).map((_, i) => <div key={i} className="button"></div>)}
                          </div>
                        </div>
                      )}

                      {/* --- Additional Maths --- */}
                      {subject.iconClass === 'icon-add-maths' && (
                        <div className="graph-area">
                          <svg className="curve" viewBox="0 0 60 60" preserveAspectRatio="none">
                            {/* Adjusted path data to fit viewBox better */}
                            <path d="M0,58 C20,40 40,10 60,30" />
                          </svg>
                        </div>
                      )}

                      {/* --- Biology - Enhanced DNA Helix --- */}
                      {subject.iconClass === 'icon-biology' && (
                        <div className="dna-container">
                          <div className="strand-group">
                            <div className="strand s1"></div>
                            <div className="strand s2"></div>
                            {/* Render 5 base pairs */}
                            {Array.from({ length: 5 }).map((_, i) => <div key={i} className="pair"></div>)}
                          </div>
                          {/* Add glow effect */}
                          <div className="glow"></div>
                        </div>
                      )}

                      {/* --- Business Studies --- */}
                      {subject.iconClass === 'icon-business' && (
                        <div className="chart-container">
                          {/* Render 4 bars */}
                          {Array.from({ length: 4 }).map((_, i) => <div key={i} className="bar"></div>)}
                        </div>
                      )}

                      {/* --- Chemistry --- */}
                      {subject.iconClass === 'icon-chemistry' && (
                        <div className="beaker-container">
                          <div className="beaker-glass">
                            <div className="liquid-surface">
                              {/* Render 4 bubbles */}
                              {Array.from({ length: 4 }).map((_, i) => <div key={i} className="bubble"></div>)}
                            </div>
                          </div>
                          <div className="beaker-top"></div>
                        </div>
                      )}

                      {/* --- Computer Science --- */}
                      {subject.iconClass === 'icon-cs' && (
                        <div className="terminal-window">
                          <div className="window-buttons">
                            <div className="window-button btn-red"></div>
                            <div className="window-button btn-yellow"></div>
                            <div className="window-button btn-green"></div>
                          </div>
                          <div className="code-area">
                            {/* Lines need spans for the typing animation */}
                            <div className="code-line">{renderSpans('$ npm install')}</div>
                            <div className="code-line">{renderSpans('$ cd src')}</div>
                            <div className="code-line">{renderSpans('$ node index.js')}</div>
                            {/* Add more lines if needed in CSS */}
                            <div className="cursor"></div>
                          </div>
                        </div>
                      )}

                      {/* --- Economics --- */}
                      {subject.iconClass === 'icon-economics' && (
                        <div className="chart-container">
                          <div className="dollar-symbol"></div>
                          <div className="glow-circle"></div>
                          {/* Render 7 coins */}
                          {Array.from({ length: 7 }).map((_, i) => <div key={i} className={`coin coin${i + 1}`}></div>)}
                        </div>
                      )}

                      {/* --- Geography - Interactive 3D Globe --- */}
                      {subject.iconClass === 'icon-geography' && (
                        <div className="globe-container">
                          <div className="globe">
                            <div className="continents"></div>
                            <div className="grid"></div>
                          </div>
                          <div className="stand"></div>
                          <div className="satellite satellite1"></div>
                          <div className="satellite satellite2"></div>
                          <div className="cloud cloud1"></div>
                          <div className="cloud cloud2"></div>
                          <div className="cloud cloud3"></div>
                        </div>
                      )}

                      {/* --- History - Interactive Timeline --- */}
                      {subject.iconClass === 'icon-history' && (
                        <div className="timeline-container">
                          <div className="timeline-scroll">
                            <div className="timeline-line"></div>
                            
                            {/* Historical events */}
                            <div className="event event-1"></div>
                            <div className="event event-2"></div>
                            <div className="event event-3"></div>
                            <div className="event event-4"></div>
                            
                            {/* Event labels */}
                            <div className="event-label event-label-1"></div>
                            <div className="event-label event-label-2"></div>
                            <div className="event-label event-label-3"></div>
                            <div className="event-label event-label-4"></div>
                            
                            {/* Dates */}
                            <div className="date date-1"></div>
                            <div className="date date-2"></div>
                            <div className="date date-3"></div>
                            <div className="date date-4"></div>
                          </div>
                        </div>
                      )}

                      {/* --- Human Biology - Beating Heart --- */}
                      {subject.iconClass === 'icon-human-bio' && (
                        <div className="heart-container">
                          <div className="heart"></div>
                          <div className="ecg-line">
                            <div className="ecg-path">
                              <div className="ecg-wave"></div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* --- ICT - Networked Grid --- */}
                      {subject.iconClass === 'icon-ict' && (
                        <div className="network-container">
                          <div className="grid">
                            {Array.from({ length: 9 }).map((_, i) => (
                              <div key={i} className="node"></div>
                            ))}
                          </div>
                          <div className="connection connection-h connection-1"></div>
                          <div className="connection connection-h connection-2"></div>
                          <div className="connection connection-v connection-3"></div>
                          <div className="connection connection-v connection-4"></div>
                          <div className="data-packet data-packet-1"></div>
                          <div className="data-packet data-packet-2"></div>
                          <div className="data-packet data-packet-3"></div>
                          <div className="data-packet data-packet-4"></div>
                        </div>
                      )}

                      {/* --- Language - Interactive Linguistic Sphere --- */}
                      {subject.iconClass === 'icon-language' && (
                        <div className="language-container">
                          {/* Glowing background effect */}
                          <div className="glow"></div>
                          
                          {/* 3D rotating sphere */}
                          <div className="sphere">
                            <div className="sphere-core"></div>
                            
                            {/* Orbits */}
                            <div className="orbit orbit-1"></div>
                            <div className="orbit orbit-2"></div>
                            <div className="orbit orbit-3"></div>
                            
                            {/* Floating characters from different languages */}
                            <div className="character char-a">A</div>
                            <div className="character char-b">Б</div>
                            <div className="character char-c">ش</div>
                            <div className="character char-d">漢</div>
                            <div className="character char-e">ñ</div>
                            <div className="character char-f">ß</div>
                          </div>
                          
                          {/* Connection lines */}
                          <div className="connection connection-1"></div>
                          <div className="connection connection-2"></div>
                          <div className="connection connection-3"></div>
                          
                          {/* Floating symbols */}
                          <div className="symbol symbol-1">?</div>
                          <div className="symbol symbol-2">!</div>
                          <div className="symbol symbol-3">&</div>
                        </div>
                      )}

                      {/* --- Literature - Magical Book Experience --- */}
                      {subject.iconClass === 'icon-literature' && (
                        <div className="book-container">
                          {/* Background glow effect */}
                          <div className="glow"></div>
                          
                          <div className="book">
                            {/* Book spine */}
                            <div className="book-spine"></div>
                            
                            {/* Book cover with title and decoration */}
                            <div className="book-cover">
                              <div className="book-title"></div>
                              <div className="book-author"></div>
                              <div className="book-decoration"></div>
                            </div>
                            
                            {/* Book pages with text */}
                            <div className="book-page book-page-1">
                              <div className="book-text">
                                <div className="text-line"></div>
                                <div className="text-line"></div>
                                <div className="text-line"></div>
                                <div className="text-line"></div>
                              </div>
                            </div>
                            <div className="book-page book-page-2"></div>
                            <div className="book-page book-page-3"></div>
                            
                            {/* Magical particles */}
                            <div className="particle particle-1"></div>
                            <div className="particle particle-2"></div>
                            <div className="particle particle-3"></div>
                            <div className="particle particle-4"></div>
                            <div className="particle particle-5"></div>
                          </div>
                        </div>
                      )}

                      {/* --- Mathematics - Pi and Orbiting Numbers --- */}
                      {subject.iconClass === 'icon-mathematics' && (
                        <div className="math-container">
                          <div className="pi-symbol"></div>
                          <div className="orbit orbit-1"></div>
                          <div className="orbit orbit-2"></div>
                          <div className="orbit orbit-3"></div>
                          <div className="number number-1"></div>
                          <div className="number number-2"></div>
                          <div className="number number-3"></div>
                        </div>
                      )}

                      {/* --- Physics - Atomic Model --- */}
                      {subject.iconClass === 'icon-physics' && (
                        <div className="atom-container">
                          <div className="nucleus"></div>
                          <div className="electron-shell shell-1"></div>
                          <div className="electron-shell shell-2"></div>
                          <div className="electron-shell shell-3"></div>
                          <div className="electron electron-1"></div>
                          <div className="electron electron-2"></div>
                          <div className="electron electron-3"></div>
                        </div>
                      )}

                      {/* --- Psychology - Advanced Mind Visualization --- */}
                      {subject.iconClass === 'icon-psychology' && (
                        <div className="mind-container">
                          {/* Brain structure */}
                          <div className="brain">
                            <div className="cortex"></div>
                            <div className="brain-divider"></div>
                          </div>
                          
                          {/* Brain hemispheres */}
                          <div className="hemisphere hemisphere-left"></div>
                          <div className="hemisphere hemisphere-right"></div>
                          
                          {/* Thought bubble */}
                          <div className="thought">
                            <div className="thought-content"></div>
                          </div>
                          
                          {/* Neurons */}
                          <div className="neuron neuron-1"></div>
                          <div className="neuron neuron-2"></div>
                          <div className="neuron neuron-3"></div>
                          <div className="neuron neuron-4"></div>
                          <div className="neuron neuron-5"></div>
                          
                          {/* Synapses */}
                          <div className="synapse synapse-1"></div>
                          <div className="synapse synapse-2"></div>
                          <div className="synapse synapse-3"></div>
                          <div className="synapse synapse-4"></div>
                          <div className="synapse synapse-5"></div>
                        </div>
                      )}

                      {/* --- Sociology - Connected People --- */}
                      {subject.iconClass === 'icon-sociology' && (
                        <div className="people-container">
                          <div className="person person-1">
                            <div className="person-head"></div>
                            <div className="person-body"></div>
                            <div className="person-arm"></div>
                            <div className="person-leg person-leg-left"></div>
                            <div className="person-leg person-leg-right"></div>
                          </div>
                          <div className="person person-2">
                            <div className="person-head"></div>
                            <div className="person-body"></div>
                            <div className="person-arm"></div>
                            <div className="person-leg person-leg-left"></div>
                            <div className="person-leg person-leg-right"></div>
                          </div>
                          <div className="person person-3">
                            <div className="person-head"></div>
                            <div className="person-body"></div>
                            <div className="person-arm"></div>
                            <div className="person-leg person-leg-left"></div>
                            <div className="person-leg person-leg-right"></div>
                          </div>
                          <div className="person person-4">
                            <div className="person-head"></div>
                            <div className="person-body"></div>
                            <div className="person-arm"></div>
                            <div className="person-leg person-leg-left"></div>
                            <div className="person-leg person-leg-right"></div>
                          </div>
                          <div className="person person-5">
                            <div className="person-head"></div>
                            <div className="person-body"></div>
                            <div className="person-arm"></div>
                            <div className="person-leg person-leg-left"></div>
                            <div className="person-leg person-leg-right"></div>
                          </div>
                          <div className="connection connection-1"></div>
                          <div className="connection connection-2"></div>
                          <div className="connection connection-3"></div>
                          <div className="connection connection-4"></div>
                          <div className="connection-pulse pulse-1"></div>
                          <div className="connection-pulse pulse-2"></div>
                          <div className="connection-pulse pulse-3"></div>
                          <div className="connection-pulse pulse-4"></div>
                        </div>
                      )}

                      {/* --- Statistics - Data Visualization --- */}
                      {subject.iconClass === 'icon-statistics' && (
                        <div className="stats-container">
                          <div className="axis-x"></div>
                          <div className="axis-y"></div>
                          <div className="bell-curve">
                            <svg viewBox="0 0 50 30" preserveAspectRatio="none">
                              <path className="curve-path" d="M0,30 C10,30 15,5 25,5 S40,30 50,30" />
                            </svg>
                          </div>
                          <div className="data-point data-point-1"></div>
                          <div className="data-point data-point-2"></div>
                          <div className="data-point data-point-3"></div>
                          <div className="data-point data-point-4"></div>
                          <div className="data-point data-point-5"></div>
                          <div className="data-point data-point-6"></div>
                          <div className="data-point data-point-7"></div>
                          <div className="mean-line"></div>
                          <div className="mean-label"></div>
                        </div>
                      )}

                    </div>
                    {/* Subtle glow effect on hover */}
                    <div className="absolute inset-0 bg-celeste/10 blur-xl rounded-full transform scale-75 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <h3 className="text-center text-night font-medium text-sm sm:text-base">{subject.name}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional note */}
          <div className="text-center mt-12 text-gray-500 text-sm">
            <p>Additional subjects available upon request. <a href="/contact" className="text-gray-700 hover:text-celeste"><strong>Contact us</strong></a> for more information.</p>
          </div>
        </div>
        </section>
      </EducationalBackground>
      <SubjectsOnDemand />
    </>
  );
};

export default Subjects;
