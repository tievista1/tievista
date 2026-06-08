import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Target, TrendingUp, Users, BarChart3, Star, Handshake, Shield, ClipboardCheck, ArrowRight, Zap, Globe, Database, Layers, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const GOLD = '#D4AF37';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay },
  viewport: { once: true, margin: '-40px' },
});

const faqData = [
  {
    question: "What is the vision behind the TieVista partners platform?",
    answer: "TieVista has been conceived as a platform where independent Partners can operate with the intellectual depth, institutional discipline, and technological infrastructure typically associated with leading wealth institutions. The objective is to create an ecosystem where thoughtful Partners can elevate the quality of portfolio conversations and deliver a more sophisticated investment experience to their clients.",
    icon: Target
  },
  {
    question: "How does TieVista support partners in navigating markets?",
    answer: "TieVista follows a structured investment framework that studies evolving macro cycles, market valuations, liquidity conditions, and relative opportunities across asset classes and market capitalisation segments. Through this disciplined approach, our Partners gain access to curated investment perspectives that help inform portfolio positioning as market environments evolve.",
    icon: TrendingUp
  },
  {
    question: "What role does TieVista play in relation to the partner’s clients?",
    answer: "The advisor remains at the centre of the client relationship. TieVista functions as a strategic platform partner—providing the research orientation, product access, and infrastructure that enable Partners to deliver a more considered and institutional-quality investment experience.",
    icon: Users
  },
  {
    question: "What capabilities does the platform provide to enhance client engagement?",
    answer: "Partners on the TieVista platform benefit from sophisticated reporting and portfolio analytics that allow them to view, analyse, and present client portfolios in multiple dimensions. This enables Partners to communicate investment journeys with greater clarity, transparency, and perspective.",
    icon: BarChart3
  },
  {
    question: "What distinguishes partners who partner with TieVista?",
    answer: "TieVista partners with Partners who believe wealth management is a long-term craft—one built on trust, disciplined thinking, and enduring client relationships. The platform attracts Partners who aspire to operate with the standards and professionalism associated with leading wealth institutions.",
    icon: Star
  },
  {
    question: "How does TieVista approach alignment with partner partners?",
    answer: "TieVista believes that meaningful partnerships are built on transparency, respect, and fair alignment of interests. The platform follows a transparent and equitable framework designed to ensure Partners are appropriately recognised for the relationships they nurture and the value they create for clients.",
    icon: Handshake
  },
  {
    question: "How does TieVista help partners build enduring partnership franchises?",
    answer: "By bringing together institutional investment thinking, facilitating access to a wide spectrum, and modern technology infrastructure, TieVista allows Partners to focus on deepening client relationships while building advisory practices designed for longevity, scale, and generational continuity.",
    icon: Shield
  },
  {
    question: "What are the requirements to partner with TieVista?",
    answer: "To partner with TieVista, entities are required to hold a valid ARN (AMFI Registration Number), issued by the Association of Mutual Funds in India and the PMS distribution License issued by APMI. This requires successfully clearing the prescribed certification examination conducted by National Institute of Securities Markets, along with completing the necessary registration formalities.\n\nPartners must also comply with all applicable regulatory requirements and maintain their registration in good standing in order to engage in the distribution of mutual fund and Portfolio Management schemes through the TieVista platform.",
    icon: ClipboardCheck
  }
];

const TieVistaPatners = () => {
  const navigate = useNavigate();
  const animationSettings = {
    container: {
      hidden: { opacity: 0, y: 30 },
      visible: {
        opacity: 1, y: 0,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], staggerChildren: 0.2 }
      }
    },
    item: {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
    }
  };

  const [activeIndex, setActiveIndex] = React.useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-white min-h-screen font-sans selection:bg-[#D4AF37] selection:text-white">

      {/* Section */}
      <section className="min-h-screen w-full relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            className="h-full w-full object-cover scale-105"
            src="https://res.cloudinary.com/dck5jgfix/image/upload/v1777033100/AlliendServices_kq8s4v.png"
            alt="TieVista Partners"
            loading='lazy'
          />
          <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/40 to-black/80" />
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={animationSettings.container}
          className="relative z-10 text-center px-6 pt-24 pb-12"
        >
          <motion.div
            variants={animationSettings.item}
            className="inline-flex items-center gap-3 px-4 py-1.5 mb-8 border border-[#D4AF37]/40 rounded-full bg-black/30 backdrop-blur-md"
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: GOLD }} />
            <span className="text-[#D4AF37] text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase" style={{ fontFamily: 'PT Serif, serif' }}>Empowering Independent Partners</span>
          </motion.div>
          <motion.h1
            variants={animationSettings.item}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl mb-8 text-white tracking-tighter leading-[0.9] md:leading-none"
            style={{ fontFamily: 'PT Serif, serif' }}
          >
            TieVista <span className="gold-text">Partners</span>
          </motion.h1>
          <motion.p
            variants={animationSettings.item}
            className="text-lg md:text-xl lg:text-2xl text-white font-light max-w-3xl mx-auto leading-relaxed px-4"
          >
            A next-generation partnership platform designed to institutionalize independent financial patnership practices globally.
          </motion.p>
        </motion.div>

        
      </section>

      {/* Main Content Section */}
      <section className="py-10 md:py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-16 max-w-9xl">
          {/* Register Button */}
          <div className="flex justify-center mb-16 md:mb-24">
            <Link
              to="/partnersignup"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg text-white font-medium transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg group"
              style={{
                background: 'linear-gradient(135deg, #F3C35B 0%, #D4AF37 50%, #B8860B 100%)',
                boxShadow: '0 10px 20px -5px rgba(212, 175, 55, 0.3)'
              }}
            >
              Register as Partner <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Content Flex Container */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-20">
            {/* Left Text */}
            <motion.div
              {...fadeUp(0.2)}
              className="w-full md:w-[55%] relative pl-6 md:pl-10"
            >
              <div 
                className="absolute left-0 top-2 bottom-2 w-[1px]" 
                style={{ background: GOLD, opacity: 0.8 }}
              />
              <p 
                className="text-2xl md:text-3xl lg:text-[38px] text-gray-900 leading-[1.3]"
                style={{ fontFamily: 'PT Serif, serif' }}
              >
                "TieVista is a next-generation partnership platform designed to empower independent financial partners who aspire to elevate and institutionalise their practice."
              </p>
            </motion.div>

            {/* Right Image */}
            <motion.div
              {...fadeUp(0.4)}
              className="w-full md:w-[42%] relative"
            >
              <div className="relative overflow-hidden shadow-xl">
                <img
                  src="https://res.cloudinary.com/dck5jgfix/image/upload/v1777449624/TievistaPartner2_lkqhns.png"
                  alt="Financial Partnership"
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-32 bg-white border-y border-gray-100">
        <div className="container mx-auto px-6 lg:px-16 max-w-6xl">

          <motion.div {...fadeUp(0)} className="text-center mb-16 md:mb-24">
            <h2
              className="text-4xl sm:text-5xl md:text-6xl tracking-tight mb-2 text-gray-900"
              style={{ fontFamily: 'PT Serif, serif' }}
            >
              Frequently Asked
            </h2>
            <h2
              className="text-4xl sm:text-5xl md:text-6xl tracking-tight mb-6 gold-text"
              style={{ fontFamily: 'PT Serif, serif' }}
            >
              Questions
            </h2>
            <div className="w-16 h-px bg-[#D4AF37] mx-auto opacity-60" />
          </motion.div>

          <div className="space-y-6">
            {faqData.map((item, idx) => {
              const isOpen = activeIndex === idx;
              return (
                <motion.div
                  key={idx}
                  {...fadeUp(0.05 * idx)}
                  className={`bg-white border transition-all duration-300 overflow-hidden ${isOpen ? 'border-[#D4AF37]/30 shadow-xl' : 'border-gray-100'}`}
                >
                  <button
                    onClick={() => toggleAccordion(idx)}
                    className="w-full text-left p-6 sm:p-8 flex items-center justify-between group cursor-pointer"
                  >
                    <div className="flex items-center gap-6">
                      <div className="w-1.5 h-1.5 rounded-full bg-black shrink-0" />
                      <h3 className="text-lg sm:text-xl md:text-[22px] font-normal text-gray-800 leading-tight" style={{ fontFamily: 'PT Serif, serif' }}>
                        {item.question}
                      </h3>
                    </div>
                    <div className={`transition-transform duration-500 shrink-0 ml-4 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                      <ChevronDown size={20} className={isOpen ? 'text-[#D4AF37]' : 'text-gray-400'} />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <div className="px-6 pb-8 sm:px-8 sm:pb-10 pt-0 ml-10 pr-6 sm:pr-12">
                          <div className="w-full h-px bg-gray-50 mb-6" />
                          <p className="text-gray-600 font-light leading-relaxed text-sm sm:text-base md:text-lg whitespace-pre-line" style={{ fontFamily: "'Poppins', sans-serif" }}>
                            {item.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* OUR Vision */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-16 max-w-6xl text-center">
          
          {/* Title with Gold Lines */}
          <motion.div 
            {...fadeUp(0)}
            className="flex items-center justify-center gap-6 md:gap-12 mb-16"
          >
            <div className="h-[1px] bg-[#D4AF37] flex-1 max-w-[150px] md:max-w-[250px] opacity-60" />
            <span className="text-gray-900 text-xs md:text-sm font-medium tracking-[0.2em] uppercase whitespace-nowrap">
              Our Vision
            </span>
            <div className="h-[1px] bg-[#D4AF37] flex-1 max-w-[150px] md:max-w-[250px] opacity-60" />
          </motion.div>

          {/* Vision Quote */}
          <motion.div 
            {...fadeUp(0.2)}
            className="max-w-5xl mx-auto"
          >
            <p 
              className="text-2xl md:text-4xl lg:text-[42px] text-gray-800 italic leading-[1.4] text-justify"
              style={{ fontFamily: 'PT Serif, serif' }}
            >
              "The partnership model is founded on the principle of fair, transparent, and long-term alignment, ensuring that channel partners are rewarded equitably for the value <span className='md:ml-100'>they create."</span>
            </p>
          </motion.div>

        </div>
      </section>

    </div>
  );
};

export default TieVistaPatners;
