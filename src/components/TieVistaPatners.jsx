import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Target, TrendingUp, Users, BarChart3, Star, Handshake, Shield, ClipboardCheck, ArrowRight, Zap, Globe, Database, Layers, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const GOLD = '#D4AF37';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay },
  viewport: { once: true, margin: '-40px' },
});

const faqData = [
  {
    question: "What is the vision behind the TieVista patners platform?",
    answer: "TieVista has been conceived as a platform where independent Partners can operate with the intellectual depth, institutional discipline, and technological infrastructure typically associated with leading wealth institutions. The objective is to create an ecosystem where thoughtful Partners can elevate the quality of portfolio conversations and deliver a more sophisticated investment experience to their clients.",
    icon: Target
  },
  {
    question: "How does TieVista support Partners in navigating markets?",
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
    question: "What distinguishes Partners who partner with TieVista?",
    answer: "TieVista partners with Partners who believe wealth management is a long-term craft—one built on trust, disciplined thinking, and enduring client relationships. The platform attracts Partners who aspire to operate with the standards and professionalism associated with leading wealth institutions.",
    icon: Star
  },
  {
    question: "How does TieVista approach alignment with partner Partners?",
    answer: "TieVista believes that meaningful partnerships are built on transparency, respect, and fair alignment of interests. The platform follows a transparent and equitable framework designed to ensure Partners are appropriately recognised for the relationships they nurture and the value they create for clients.",
    icon: Handshake
  },
  {
    question: "How does TieVista help Partners build enduring partnership franchises?",
    answer: "By bringing together institutional investment thinking, curated access to a broad mutual fund universe, and modern technology infrastructure, TieVista allows Partners to focus on deepening client relationships while building advisory practices designed for longevity, scale, and generational continuity.",
    icon: Shield
  },
  {
    question: "What are the requirements to partner with TieVista?",
    answer: "To partner with TieVista, entities are required to hold a valid ARN (AMFI Registration Number), issued by the Association of Mutual Funds in India and the PMS distribution License issued by APMI. This requires successfully clearing the prescribed certification examination conducted by National Institute of Securities Markets, along with completing the necessary registration formalities.\n\nPartners must also comply with all applicable regulatory requirements and maintain their registration in good standing in order to engage in the distribution of mutual fund and Portfolio Management schemes through the TieVista platform.",
    icon: ClipboardCheck
  }
];

const TieVistaPatners = () => {
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

      {/* Hero Section */}
      <section className="min-h-screen w-full relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            className="h-full w-full object-cover scale-105"
            src="https://media.istockphoto.com/id/2214941610/photo/businesspeople-walking-and-talking-in-modern-office-with-moss-wall-decoration.jpg?s=612x612&w=0&k=20&c=N9N6ISyX5OzC7JP4NSepeDASbCPnXnm1kO9t14Jcm8I="
            alt="Partners Hero"
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
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: GOLD }} />
            <span className="text-[#D4AF37] text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase">Empowering Independent Advisors</span>
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
            className="text-lg md:text-xl lg:text-2xl text-white/80 font-light max-w-3xl mx-auto leading-relaxed px-4"
          >
            A next-generation partnership platform designed to institutionalize independent financial patnership practices globally.
          </motion.p>
        </motion.div>

        {/* Scroll indicator overlay */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 opacity-50 flex flex-col items-center gap-2">
          <span className="text-[10px] text-white/50 uppercase tracking-[0.2em]">Scroll</span>
          <div className="w-px h-12 bg-linear-to-b from-white/50 to-transparent" />
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-16 max-w-5xl">
          <div className="flex flex-col md:flex-row gap-16 md:gap-24">

            {/* Left Column: Vision & Digital Ecosystem */}
            <div className="w-full md:w-1/2 space-y-10 md:space-y-12">
              <motion.div {...fadeUp(0)}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-px" style={{ background: GOLD }} />
                  <span className="text-[10px] md:text-xs font-semibold tracking-[0.35em] uppercase text-gray-400">Mission</span>
                </div>
                <div className="relative pl-6 border-l-2 border-[#D4AF37]/30">
                  <p className="text-2xl md:text-3xl lg:text-4xl text-gray-900 font-serif leading-tight " style={{ fontFamily: 'PT Serif, serif' }}>
                    "TieVista is building a next-generation partnership platform designed to
                    empower independent financial partners who aspire to elevate and institutionalise
                    their practice."
                  </p>
                </div>
              </motion.div>

              <motion.div {...fadeUp(0.1)} className="text-gray-600 font-light leading-relaxed space-y-6 text-base md:text-lg">
                <p>
                  The platform is envisioned as a growth engine for ambitious partners,
                  providing access to institutional-grade processes, robust operational infrastructure,
                  and a broad product universe, enabling them to scale their businesses while
                  maintaining the personal relationships that define independent partnership.
                </p>
                <p>
                  Through a seamless digital onboarding ecosystem, Channel Partners can
                  onboard clients efficiently while benefiting from structured workflows and disciplined
                  processes typically associated with leading wealth institutions. Channel Partners
                  may also gain access to investment perspectives, interactions with external
                  fund management teams, and a wider spectrum of opportunities within the regulated
                  ecosystem, including differentiated and lesser-known strategies that can add
                  meaningful depth to client portfolios.
                </p>
              </motion.div>
            </div>

            {/* Right Column: Analytics & Alignment */}
            <div className="w-full md:w-1/2 space-y-10 md:space-y-12 md:mt-12">
              <motion.div {...fadeUp(0.2)} className="text-gray-600 font-light leading-relaxed space-y-6 text-base md:text-lg">
                <p>
                  At the heart of the platform is a powerful reporting and portfolio analytics engine,
                  designed to bring institutional-level transparency and analytics to client portfolios.
                  Channel Partners can view, analyse, and present portfolios across multiple
                  dimensions, enabling deeper portfolio discussions and the ability to slice and
                  interpret portfolio exposures in numerous meaningful ways.
                </p>
                <p>
                  TieVista’s vision is to create an ecosystem where independent channel
                  partners can operate with the capabilities and discipline of a sophisticated wealth
                  platform, while preserving their independence and the trust they have built with their
                  clients. The partnership model is founded on the principle of fair, transparent, and
                  long-term alignment, ensuring that channel partners are rewarded equitably
                  for the value they create and the relationships they nurture.
                </p>
                <div className="pt-8 border-t border-gray-100 italic text-sm text-gray-400 leading-relaxed">
                  "The partnership model is founded on the principle of fair, transparent, and long-term alignment, ensuring that channel partners are rewarded equitably for the value they create."
                </div>
                <p className="text-[11px] uppercase tracking-wider text-gray-300">
                  All client recommendations remain the responsibility of the respective partner and the client.
                </p>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-32 bg-[#FAFAFA] border-y border-gray-100">
        <div className="container mx-auto px-6 lg:px-16 max-w-4xl">

          <motion.div {...fadeUp(0)} className="text-center mb-16 md:mb-24">
            <h2
              className="text-4xl sm:text-5xl md:text-7xl tracking-tighter mb-6 leading-none"
              style={{ fontFamily: 'PT Serif, serif' }}
            >
              Frequently Asked <span className="gold-text">Questions</span>
            </h2>
            <div className="w-20 h-px bg-[#D4AF37] mx-auto opacity-60" />
          </motion.div>

          <div className="space-y-4">
            {faqData.map((item, idx) => {
              const isOpen = activeIndex === idx;
              return (
                <motion.div
                  key={idx}
                  {...fadeUp(0.05 * idx)}
                  className={`bg-white border transition-all duration-500 overflow-hidden ${isOpen ? 'border-[#D4AF37]/50 shadow-2xl shadow-[#D4AF37]/5' : 'border-gray-100'}`}
                >
                  <button
                    onClick={() => toggleAccordion(idx)}
                    className="w-full text-left p-5 sm:p-6 md:p-8 flex items-center justify-between group cursor-pointer"
                  >
                    <div className="flex items-center gap-4 sm:gap-6">
                      <div
                        className={`w-10 h-10 sm:w-12 sm:h-12 shrink-0 flex items-center justify-center rounded-lg transition-all duration-500 ${isOpen ? 'bg-[#D4AF37] scale-110' : 'bg-[#D4AF37]/10'}`}
                        style={{ background: isOpen ? GOLD : `${GOLD}15` }}
                      >
                        <item.icon className={`transition-colors duration-500 ${isOpen ? 'text-white' : 'text-[#D4AF37]'}`} size={isOpen ? 22 : 20} />
                      </div>
                      <h3 className={`text-sm sm:text-lg md:text-xl font-semibold tracking-tight transition-colors duration-300 ${isOpen ? 'text-black' : 'text-gray-800'}`}>
                        {item.question}
                      </h3>
                    </div>
                    <div className={`transition-transform duration-500 shrink-0 ml-4 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                      <ChevronDown size={18} className={isOpen ? 'text-[#D4AF37]' : 'text-gray-400'} />
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
                        <div className="px-5 pb-8 sm:px-6 sm:pb-8 md:px-8 md:pb-10 pt-0 sm:ml-18 md:ml-18 pr-6 sm:pr-12">
                          <div className="w-full h-px bg-gray-50 mb-6" />
                          <p className="text-gray-600 font-light leading-relaxed text-sm sm:text-base md:text-lg whitespace-pre-line">
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

    </div>
  );
};

export default TieVistaPatners;
