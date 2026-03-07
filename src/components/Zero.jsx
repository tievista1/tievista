import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <>
    
      {/*Section 0 */}
      <div className=" h-screen w-full snap-start flex items-center justify-center p-6 md:p-12 border-b border-gray-100">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          variants={containerVariants}
          className="max-w-4xl w-full"
        >
          <motion.h1 variants={itemVariants} className="flex justify-center items-center text-5xl md:text-7xl lg:text-7xl mb-6 text-black font-bold tracking-tighter" style={{ fontFamily: 'PT Serif, sans-serif' }}>
            <span className=" gold-letter mr-1">T</span>
            <span className=" mr-1">I</span>
            <span className=" mr-1">E</span>
            <span className="gold-letter pb-10 text-9xl">V</span>
            <span className=" mr-1">I</span>
            <span className=" mr-1">S</span>
            <span className=" mr-1">T</span>
            <span className=" mr-1">A</span>
          </motion.h1>
        </motion.div>
      </div>

      {/* Section 1: Trust */}
      <div className="h-screen w-full snap-start flex items-center justify-center p-6 md:p-12 border-b border-gray-100">
        
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          variants={containerVariants}
          className="max-w-4xl w-full"
        >
          <motion.h1 variants={itemVariants} className="text-5xl md:text-8xl font-bold mb-6 text-black tracking-tighter">
            Trust <span className="font-light italic">first</span>
          </motion.h1>
          <motion.p variants={itemVariants} className="text-xl md:text-2xl text-gray-800 mb-8 leading-relaxed font-light">
            At TieVista, trust is not earned post-engagement — it is the foundation of
            engagement. <span className="font-semibold block mt-2 underline decoration-gray-300">Trust is our currency.</span>
          </motion.p>
          <motion.p variants={itemVariants} className="text-lg text-gray-600 mb-10 max-w-2xl font-light">
            We operate with fiduciary intent, institutional discipline, and long-term alignment
            with our clients’ families, capital and legacy.
          </motion.p>
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Client-first architecture",
              "Long-horizon thinking",
              "Discretion and confidentiality",
              "Governance-led decision frameworks"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 group">
                <CheckCircle2 size={20} className="text-black group-hover:scale-110 transition-transform" />
                <span className="text-black font-medium text-lg">{item}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Section 2: Transparency */}
      <div className="h-screen w-full snap-start flex items-center justify-center p-6 md:p-12 border-b border-gray-100">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          variants={containerVariants}
          className="max-w-4xl w-full"
        >
          <motion.h1 variants={itemVariants} className="text-5xl md:text-8xl font-bold mb-6 text-black tracking-tighter">
            Transparency <span className="font-light italic">always</span>
          </motion.h1>
          <motion.p variants={itemVariants} className="text-xl md:text-2xl text-gray-800 mb-8 leading-relaxed font-light">
            Transparency builds confidence. Confidence builds continuity.
          </motion.p>
          <motion.p variants={itemVariants} className="text-lg text-gray-600 mb-10 max-w-2xl font-light">
            We believe sophisticated clients deserve complete visibility — on risk, fees, structures
            and outcomes.
          </motion.p>
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "No hidden layers",
              "No opaque incentives",
              "Clear fee structures",
              "Independent product evaluation",
              "Open reporting architecture"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 border-l-2 border-black pl-4 py-1">
                <span className="text-black font-medium">{item}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Section 3: Transformation */}
      <div className="h-screen w-full snap-start flex items-center justify-center p-6 md:p-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          variants={containerVariants}
          className="max-w-4xl w-full text-center"
        >
          <motion.h1 variants={itemVariants} className="text-5xl md:text-8xl font-bold mb-6 text-black tracking-tighter">
            Transformation through <span className="font-light italic">innovation</span>
          </motion.h1>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-black mx-auto mt-12"
          ></motion.div>
        </motion.div>
      </div>
      
      </>
  );
};
