import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Globe, Landmark, ArrowRight, ShieldCheck, Building2,Map } from 'lucide-react'


/* ----- BusinessToBusiness -> TieVistaPatners -> Allied Services ----- */
/* ─── Shared design tokens ─── */
const GOLD = '#D4AF37'

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay },
    viewport: { once: true, margin: '-60px' },
})

/* ─── Partnership sections ─── */
const PARTNERSHIPS = [
    {
        icon: Globe,
        label: '',
        heading: 'Global Mobility &',
        accent: 'Residency Insights',
        body1: 'For many families and entrepreneurs, wealth today is inseparable from global presence and lifestyle flexibility. TieVista facilitates access to high-level information on global mobility and residency frameworks through carefully selected third-party specialists, helping clients gain perspective on long-term living options, residency environments, and international mobility considerations for themselves and their families. TieVista’s role is limited to coordination and information facilitation and does not extend to immigration, legal, or tax advice.',
        body2: 'These conversations are integrated thoughtfully and, recognising that international living decisions often coincide with business cycles, liquidity events, and multi-generational objectives. By curating access to relevant professionals and simplifying the flow of information, TieVista helps clients navigate complex cross-border considerations with greater clarity and discretion, while clients retain full control over decisions',
        points: [
            
        ],
        note: 'TieVista\'s role is limited to coordination and information facilitation and does not extend to immigration, legal, or tax advice.',
        img: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1400',
        reverse: false,
    },
    {
        icon: Landmark,
        label: '',
        heading: 'International Banking',
        accent: 'Access',
        body1: 'TieVista collaborates with select international banking institutions to facilitate access to information and introductions related to cross-border banking and multi-currency account frameworks for clients with global business or lifestyle needs.',
        body2: 'TieVista’s role is limited to coordination and information facilitation, while all banking assessments, onboarding, documentation, and services are provided directly by the licensed banking institution within its applicable regulatory framework.',
        points: [
            
        ],
        note: 'TieVista\'s role is limited to coordination and information facilitation. All banking assessments, onboarding, documentation, and services are provided directly by the licensed banking institution.',
        img: 'https://plus.unsplash.com/premium_photo-1661757762481-676c2690d8ac?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8QmFua2luZ3xlbnwwfHwwfHx8MA%3D%3D',
        reverse: true,
    },
    {
        icon: Building2,
        label: '',
        heading: 'Real Estate Portfolio',
        accent: 'Access',
        body1: 'Real estate continues to play an important role in the long-term portfolios of many investors. TieVista facilitates client access to both physical and financial real estate opportunities, enabling diversified participation in the asset class. Where relevant, we help clients explore opportunities through institutional platforms, curated investment avenues, and regulated financial products linked to real estate, while helping them evaluate these exposures within the broader context of their overall portfolio.',
        body2: 'Our approach is guided by a focus on portfolio diversification, liquidity considerations, and long-term wealth preservation. By situating real estate exposure within a broader asset allocation framework, we help clients consider how such investments may complement their existing financial holdings and long-term objectives. Through our network and market engagement, clients may gain access to select opportunities and institutional platforms that may not always be readily available to individual investors. Periodic portfolio reviews also help ensure that real estate exposures remain aligned with the client’s evolving financial circumstances, investment horizon, and overall wealth strategy.',
        points: [
            
        ],
        note: 'TieVista does not provide investment, tax, or legal advice. All real estate opportunities are subject to due diligence, regulatory requirements, and the terms of the respective investment providers. Clients should consult with their own legal and tax advisors before making any investment decisions.',
        img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1546&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        reverse: false,
    },
    {
        icon: Map,
        label: '',
        heading: 'Tievista’s overseas',
        accent: 'Structuring solutions',
        body1: 'For clients with global ambitions, TieVista may facilitate introductions to trusted professional partners across jurisdictions who assist with the establishment of overseas offices or international business presence.',
        body2: 'For entrepreneurs and globally active families, this may involve connecting clients with the relevant legal, regulatory, and advisory ecosystem that supports cross-border expansion. Such discussions are considered in the broader context of the client’s global business interests and overall wealth objectives, while the underlying advisory services are provided by independent professional firms.',
        points: [
            
        ],
        note: 'Tievista’s role is limited to coordination and information facilitation. All advisory services are provided by independent professional firms.',
        img: 'https://images.unsplash.com/photo-1614107151491-6876eecbff89?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        reverse: true,
    },
]

/* ─── PartnershipSection sub-component ─── */
function PartnershipSection({ p, index }) {
    const { icon: Icon, label, heading, accent, body1, body2, points, note, img, reverse } = p
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
                        <div
                            className="absolute bottom-0 left-0 w-16 h-16 opacity-80"
                            style={{ background: `linear-gradient(135deg, ${GOLD} 50%, transparent 50%)` }}
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500" />
                    </motion.div>

                    {/* Content */}
                    <div className="w-full md:w-1/2">
                        <motion.div {...fadeUp(0.2)}>

                            {/* Icon + label */}
                            <div className="flex items-center gap-3 mb-5">
                                <div className="w-10 h-10 flex items-center justify-center" style={{ background: `${GOLD}18` }}>
                                    <Icon size={20} color={GOLD} />
                                </div>
                                <span className="text-gray-400 text-xs font-semibold tracking-[0.35em] uppercase">{label}</span>
                            </div>

                            {/* Heading */}
                            <h2
                                className="text-5xl md:text-6xl lg:text-7xl mb-6 tracking-tighter leading-tight"
                                style={{ fontFamily: 'PT Serif, serif' }}
                            >
                                {heading}{' '}
                                <span className="gold-text" >{accent}</span>
                            </h2>

                            {/* Gold divider */}
                            <div className="w-12 h-px mb-6" style={{ background: GOLD }} />

                            {/* Body1 */}
                            <p className="text-lg text-gray-600 leading-relaxed font-light mb-8">
                                {body1}
                            </p>
                            {/* Body2 */}
                            <p className="text-lg text-gray-600 leading-relaxed font-light mb-8">
                                {body2}
                            </p>

                            {/* Points */}
                            <div className="mb-8">
                                {points.map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: i * 0.08 }}
                                        viewport={{ once: true }}
                                        className="group flex items-center gap-4 py-3.5 border-b border-gray-100 cursor-default"
                                    >
                                        <div
                                            className="w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-[#D4AF37] group-hover:border-[#D4AF37] group-hover:text-white"
                                            style={{ borderColor: '#e5e7eb', color: '#9ca3af' }}
                                        >
                                            <ArrowRight size={13} />
                                        </div>
                                        <span className="text-base font-light text-gray-700 group-hover:text-black transition-colors">
                                            {item}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Disclaimer note */}
                            <div
                                className="flex gap-3 p-4 rounded-sm border-l-2"
                                style={{ borderColor: GOLD, background: `${GOLD}08` }}
                            >
                                <ShieldCheck size={16} className="shrink-0 mt-0.5" style={{ color: GOLD }} />
                                <p className="text-sm text-gray-500 font-light leading-relaxed italic">
                                    {note}
                                </p>
                            </div>

                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    )
}

/* ─── Main Component ─── */
 const BusinessToBusiness = () => {
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
                        src="https://images.pexels.com/photos/20409388/pexels-photo-20409388.jpeg"
                        alt="B2B Partnerships"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/45 to-black/80" />
                </motion.div>

                <motion.div
                    style={{ opacity: heroOpacity }}
                    className="relative z-10 text-center px-6 max-w-5xl mx-auto"
                >
                    <motion.div
                        initial={{ opacity: 0, y: -16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className="inline-flex items-center gap-3 px-5 py-2 mb-8 border rounded-full backdrop-blur-sm"
                        style={{ borderColor: `${GOLD}60`, background: 'rgba(0,0,0,0.25)' }}
                    >
                        <span className="w-1.5 h-1.5 rounded-full" style={{ background: GOLD }} />
                        <span className="text-[8px] lg:text-xs font-bold tracking-[0.3em] uppercase" style={{ color: GOLD }}>
                            Coordination · Facilitation · Discretion
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
                        className="text-6xl md:text-[7rem] text-white tracking-tighter leading-[0.9] mb-8"
                        style={{ fontFamily: 'PT Serif, serif' }}
                    >
                        Allied{' '}
                        <span className="font-light gold-text" >Services</span> {/*style={{ color: GOLD }} italic*/}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, delay: 0.8 }}
                        className="text-xl md:text-2xl text-white/75 font-light max-w-2xl mx-auto leading-relaxed"
                    >
                        Curating access to global specialists so your clients navigate cross-border complexity with greater clarity and discretion.
                    </motion.p>
                </motion.div>
            </section>

            {/* ── Partnership Sections ── */}
            {PARTNERSHIPS.map((p, i) => (
                <PartnershipSection key={i} p={p} index={i} />
            ))}

        </div>
    )
}

export default BusinessToBusiness;
