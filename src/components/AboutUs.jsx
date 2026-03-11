import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Landmark, Target, ShieldCheck, ChevronsLeftRight, ArrowRight, TrendingUp, Users, Globe } from 'lucide-react'

/* ─── Shared animation helpers ─── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay },
  viewport: { once: true, margin: '-60px' },
})

const GOLD = '#D4AF37'

/* ─── Narrative sections data ─── */
const narratives = [
  {
    icon: Landmark,
    label: '',
    heading: 'A Structured',
    accent: 'Approach.',
    body: 'TieVista is a Private Wealth management organisation serving individuals and families with wealth spanning geographies, asset classes, and generations. We work with UHNIs, HNIs, NRIs, family offices, and entrepreneurs, offering a structured and thoughtful approach to building, managing, and overseeing long-term wealth.',
    img: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=1400',
    reverse: false,
  },
  {
    icon: Target,
    label: '',
    heading: 'Insights into',
    accent: 'Action.',
    body: 'Our engagement begins with a deep understanding of each client\'s context, personal and family objectives, risk preferences, and financial complexity. These insights are translated into a financial risk analysis, compiled into a single page which serves as the foundation for informed decision-making.',
    img: 'https://images.unsplash.com/flagged/photo-1576485436509-a7d286952b65?q=80&w=1400&auto=format&fit=crop',
    reverse: true,
  },
  {
    icon: ShieldCheck,
    label: '',
    heading: 'Seasoned',
    accent: 'Excellence.',
    body: 'TieVista brings experience and expertise of seasoned professionals, institutional access, and coordinated execution. We curate investment opportunities across markets, including Portfolio Management Services, Alternate Investment Funds, and GIFT City products in partnership with AMCs in IFSC.',
    img: 'https://images.unsplash.com/39/lIZrwvbeRuuzqOoWJUEn_Photoaday_CSD%20%281%20of%201%29-5.jpg?q=80&w=1400&auto=format&fit=crop',
    reverse: false,
  },
]

/* ─── What to expect ─── */
const expectations = [
  { text: 'A clearly defined detailed risk profile analysis to guide strategy and decision-making', icon: TrendingUp },
  { text: 'Access to institutional-grade investment opportunities', icon: Globe },
  { text: 'Integrated support across investments, banking, taxation, and governance', icon: ShieldCheck },
  { text: 'Consolidated portfolio reporting through a single, unified dashboard', icon: Landmark },
  { text: 'Strategic advisory support for entrepreneurs across growth, transactions, and legacy planning', icon: Users },
]

/* ─── NarrativeSection ─── */
function NarrativeSection({ sec, index }) {
  const { icon: Icon, label, heading, accent, body, img, reverse } = sec
  const bg = index % 2 === 0 ? 'bg-white' : 'bg-[#FAFAFA]'

  return (
    <section className={`w-full py-28 border-b border-gray-100 ${bg}`}>
      <div className="container mx-auto px-6 lg:px-16">
        <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-16 md:gap-20`}>

          {/* Image */}
          <motion.div
            {...fadeUp(0.1)}
            className="w-full md:w-1/2 overflow-hidden relative group"
            style={{ aspectRatio: '4/3' }}
          >
            <motion.img
              initial={{ scale: 1.08 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              src={img}
              alt={heading}
              className="w-full h-full object-cover"
            />
            {/* Gold corner accent */}
            <div
              className="absolute bottom-0 left-0 w-16 h-16 opacity-80"
              style={{ background: `linear-gradient(135deg, ${GOLD} 50%, transparent 50%)` }}
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500" />
            {/* Subtle overlay on hover */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500" />
          </motion.div>

          {/* Text */}
          <div className="w-full md:w-1/2">
            <motion.div {...fadeUp(0.2)}>
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-10 h-10 flex items-center justify-center"
                  style={{ background: `${GOLD}18` }}
                >
                  <Icon size={20} color={GOLD} />
                </div>
                <span className="text-gray-400 text-xs font-semibold tracking-[0.35em] uppercase">{label}</span>
              </div>

              <h2
                className="text-5xl md:text-6xl lg:text-7xl mb-7 tracking-tighter leading-tight"
                style={{ fontFamily: 'PT Serif, serif' }}
              >
                {heading}{' '}
                <span className="" style={{ color: GOLD }} >{accent}</span> {/*style={{ color: GOLD }} */}
              </h2>

              <div className="w-12 h-px mb-7" style={{ background: GOLD }} />

              <p className="text-lg text-gray-600 leading-relaxed font-light">
                {body}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Main Component ─── */
 const AboutUs = () => {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <div className="bg-white font-sans selection:bg-[#D4AF37] selection:text-white overflow-x-hidden">

      {/* ── Hero ── */}
      <section ref={heroRef} className="h-screen w-full relative flex items-center justify-center overflow-hidden">
        <motion.div style={{ y: heroY }} className="absolute inset-0 z-0 will-change-transform">
          <img
            className="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000"
            alt="TieVista Office"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/80" />
        </motion.div>

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-20 text-center px-6 max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="inline-flex items-center gap-3 px-5 py-2 mb-8 border rounded-full backdrop-blur-sm"
            style={{ borderColor: `${GOLD}60`, background: 'rgba(0,0,0,0.25)' }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: GOLD }} />
            <span className="text-xs font-bold tracking-[0.3em] uppercase" style={{ color: GOLD }}>
              Private Wealth Management
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.65 }}
            className="text-7xl md:text-[10rem] text-white tracking-tighter leading-[0.9] mb-8"
            style={{ fontFamily: 'PT Serif, serif' }}
          >
            About{' '}
            <span className="font-light" style={{ color: GOLD }} >Us</span> {/*style={{ color: GOLD }} italic*/}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.85 }}
            className="text-xl md:text-2xl text-white/75 font-light max-w-2xl mx-auto leading-relaxed"
          >
            Simplifying complexity with care, discretion, and a long-term perspective.
          </motion.p>

        </motion.div>
      </section>

      {/* ── Narrative Sections ── */}
      {narratives.map((sec, i) => (
        <NarrativeSection key={i} sec={sec} index={i} />
      ))}

      {/* ── What to Expect ── */}
      <section className="flex flex-col items-center justify-center w-full py-32 bg-white border-b border-gray-100">
        <div className="flex flex-col items-center justify-center container mx-auto px-6 lg:px-16">

          {/* Header */}
          <motion.div {...fadeUp()} className="mb-10">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-px" style={{ background: GOLD }} />
              <span className="text-xs font-semibold tracking-[0.35em] uppercase text-gray-400">Partnership</span>
            </div>
            <h2
              className="text-5xl md:text-7xl tracking-tighter leading-none"
              style={{ fontFamily: 'PT Serif, serif' }}
            >
              What to{' '}
              <span className="italic" style={{ color: GOLD }}>Expect</span>
            </h2>
          </motion.div>

          {/* Items */}
          <div className="space-y-0">
            {expectations.map(({ text, icon: Icon }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
                viewport={{ once: true, margin: '-40px' }}
                className="group flex items-center gap-4 lg:gap-8 py-2 lg:py-7 border-b border-gray-100 cursor-default"
              >

                {/* Arrow */}
                <ArrowRight
                  size={18}
                  className="shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1"
                  style={{ color: GOLD }}
                />

                {/* Number — hidden on mobile, visible md+
                <span
                  className="hidden md:inline text-xs font-bold tabular-nums shrink-0 w-8 text-right"
                  style={{ color: GOLD, fontFamily: 'PT Serif, serif' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span> */}

                {/* Icon bubble */}
                <div
                  className="w-11 h-11 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 group-hover:border-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-white"
                  style={{ borderColor: '#e5e7eb', color: '#9ca3af' }}
                >
                  <Icon size={18} />
                </div>

                {/* Text */}
                <span className="text-lg md:text-xl font-light text-gray-700 group-hover:text-black transition-colors leading-relaxed flex-1">
                  {text}
                </span>


              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Closing Statement (Dark) ── */}
      <section className="w-full min-h-screen flex items-center justify-center relative overflow-hidden" style={{ background: '#0D0D0D' }}>

        {/* Background texture: subtle gold diagonal lines */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, #D4AF37 0px, #D4AF37 1px, transparent 1px, transparent 40px)',
          }}
        />

        {/* Large ghost text */}
        <div
          className="absolute inset-0 flex items-center justify-center select-none pointer-events-none overflow-hidden"
          aria-hidden
        >
          <span
            className="text-[18vw] font-bold tracking-tighter leading-none opacity-[0.025] text-white"
            style={{ fontFamily: 'PT Serif, serif' }}
          >
            TieVista
          </span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="relative z-10 text-center px-6 max-w-4xl mx-auto py-24"
        >
          {/* Gold rule */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="w-16 h-px mx-auto mb-10"
            style={{ background: GOLD, transformOrigin: 'left' }}
          />

          <p className="text-sm text-gray-500 tracking-[0.3em] uppercase font-light mb-6">Our Identity</p>

          <h2
            className="text-3xl md:text-5xl font-light leading-relaxed tracking-tight text-white mb-10"
            style={{ fontFamily: 'PT Serif, serif' }}
          >
            IndusArtha Financial Services Private Limited,{' '}
            <br className="hidden md:block" />
            known as{' '}
            <span className="font-semibold" style={{ color: GOLD }}>TieVista</span>
            {' '}— designed to simplify{' '}
            <span className="text-white/60">complexity</span> and provide{' '}
            <span className="text-white/60">clear oversight.</span>
          </h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="w-16 h-px mx-auto"
            style={{ background: `${GOLD}60`, transformOrigin: 'right' }}
          />
        </motion.div>
      </section>

    </div>
  )
}

export default AboutUs;
