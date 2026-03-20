import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import {
    TrendingUp, Network, LayoutDashboard, Lightbulb,
    Users, Handshake, ArrowRight, Shield
} from 'lucide-react'

/* ─── Shared design tokens ─── */
const GOLD = '#D4AF37'

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay },
    viewport: { once: true, margin: '-60px' },
})

/* ─── Quick-nav ─── */
const NAV_ITEMS = [
    { label: 'Investment', icon: TrendingUp, href: '#invest' },
    { label: 'Coordination', icon: Network, href: '#coord' },
    { label: 'Reporting', icon: LayoutDashboard, href: '#report' },
    { label: 'Entrepreneurs', icon: Lightbulb, href: '#entre' },
    { label: 'Family Alignment & Continuity', icon: Users, href: '#family' },
    { label: 'Relationship-Led Service Model', icon: Handshake, href: '#relation' },
]

/* ─── Service sections ─── */
const SERVICES = [
    {
        id: 'invest',
        icon: TrendingUp,
        label: '',
        heading: 'Investment',
        accent: 'Facilitation',
        body: 'Facilitation of investments aligned with your stated financial objectives risk profile and time horizon with access to a curated universe across asset classes and fund houses across jurisdictions.',
        bullets: [
            'Investments aligned to financial objectives & risk profile',
            'Curated access across asset classes and fund houses',
            'Cross-jurisdictional investment access',
            'Periodic portfolio reviews per evolving goals',
        ],
        img: 'https://wallpapercave.com/wp/wp8938157.jpg',
        reverse: false,
    },
    {
        id: 'coord',
        icon: Network,
        label: '',
        heading: 'Wealth structuring &',
        accent: 'Coordination',
        body: 'Acting as a central coordination point for your financial ecosystem structured engagement alongside your chartered accountants, legal advisors, bankers, trustees and other professionals.',
        bullets: [
            'Central coordination across your entire financial ecosystem',
            'Structured engagement with CAs, legal, and banking advisors',
            'Alignment with bankers, trustees and other professionals',
            'Holistic oversight across all financial relationships',
        ],
        img: 'https://res.cloudinary.com/dr1u4plse/image/upload/v1773982108/WealthST_miw9uk.png',
        reverse: true,
    },
    {
        id: 'report',
        icon: LayoutDashboard,
        label: '',
        heading: 'Consolidated Reporting',
        accent: '& Visibility',
        body: 'Facilitation of consolidated reporting across holdings and disclosed assets clear intuitive views designed to improve transparency monitoring and informed decision making through tech enabled dashboards.',
        bullets: [
            'Consolidated reporting across all holdings & disclosed assets',
            'Intuitive views for transparency & monitoring',
            'Technology-enabled dashboards focused on simplicity',
            'Informed decision-making tools for the whole family',
        ],
        img: 'https://res.cloudinary.com/dxlysvpud/image/upload/v1772785390/D3_djmo1a.png',
        reverse: false,
    },
    {
        id: 'entre',
        icon: Lightbulb,
        label: '',
        heading: 'Entrepreneur-Focused',
        accent: 'Support',
        body: 'Support for founders and business owners in aligning personal investments with business liquidity events, cash flow cycles and long term family objectives including post liquidity deployment planning.',
        bullets: [
            'Align personal investments with business liquidity events',
            'Cash-flow cycle and planning integration',
            'Post-liquidity deployment planning & assistance',
            'Coordination during exits, capital raises, or transitions',
        ],
        img: 'https://images.unsplash.com/photo-1733040460584-fd693866d0a2?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnVpbGRpaW5nfGVufDB8fDB8fHww',
        reverse: true,
    },
    {
        id: 'family',
        icon: Users,
        label: '',
        heading: 'Family Alignment &',
        accent: 'Continuity',
        body: 'Facilitating discussions around financial awareness, inter generational alignment, and long term intent including supporting families in working with external professionals on governance, succession or estate structures.',
        bullets: [
            'Financial awareness & inter generational alignment discussions',
            'Long term intent facilitation across family members',
            'Support for governance & succession conversations',
            'Coordination with external professionals on estate structures',
        ],
        img: 'https://www.oak.group/media/pdjdgwc1/jon-donald-tl.png?width=800&height=500&quality=80&mode=crop&v=1dbeb5c0ea981b0',
        reverse: false,
    },
    {
        id: 'relation',
        icon: Handshake,
        label: '',
        heading: 'Relationship-Led',
        accent: 'Service Model',
        body: 'Dedicated relationship coverage with an emphasis on continuity, discretion, and long-term engagement rooted in trust, transparency, and transformation through innovation rather than product pushing.',
        bullets: [
            'Dedicated coverage with continuity & discretion',
            'Transparent disclosure of commissions & distributor remuneration',
            'Trust, transparency & transformation as core philosophy',
            'Long-term engagement over product-led interactions',
        ],
        img: 'https://res.cloudinary.com/dr1u4plse/image/upload/v1773741196/RelationModel_nwwjt6.png',
        reverse: true,
    },
]

/* ─── ServiceSection sub-component ─── */
function ServiceSection({ svc, index }) {
    const { id, icon: Icon, label, heading, accent, body, bullets, img, reverse } = svc
    const bg = index % 2 === 0 ? 'bg-white' : 'bg-[#FAFAFA]'

    return (
        <section id={id} className={`w-full py-28 border-b border-gray-100 ${bg}`}>
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
                                <div
                                    className="w-10 h-10 flex items-center justify-center"
                                    style={{ background: `${GOLD}18` }}
                                >
                                    <Icon size={20} color={GOLD} />
                                </div>
                                <span className="text-gray-400 text-xs font-semibold tracking-[0.35em] uppercase">
                                    {label}
                                </span>
                            </div>

                            {/* Heading */}
                            <h2
                                className="text-5xl md:text-6xl lg:text-7xl mb-6 tracking-tighter leading-tight"
                                style={{ fontFamily: 'PT Serif, serif' }}
                            >
                                {heading}{' '}
                                <span className="gold-text" >{accent}</span> {/*style={{ color: GOLD }} italic*/}
                            </h2>

                            {/* Gold divider */}
                            <div className="w-12 h-px mb-6" style={{ background: GOLD }} />

                            {/* Body */}
                            <p className="text-lg text-gray-600 leading-relaxed font-light mb-10">
                                {body}
                            </p>

                            {/* Bullets */}
                            <div>
                                <p className="text-xs font-semibold text-gray-400 tracking-[0.3em] uppercase mb-4">
                                    Key Offerings
                                </p>
                                <div className="space-y-0">
                                    {bullets.map((item, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.5, delay: i * 0.08 }}
                                            viewport={{ once: true }}
                                            className="group flex items-center gap-4 py-4 border-b border-gray-100 cursor-default"
                                        >
                                            <div
                                                className="w-9 h-9 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-[#D4AF37] group-hover:border-[#D4AF37] group-hover:text-white"
                                                style={{ borderColor: '#e5e7eb', color: '#9ca3af' }}
                                            >
                                                <ArrowRight size={15} />
                                            </div>
                                            <span className="text-base md:text-lg font-light text-gray-700 group-hover:text-black transition-colors">
                                                {item}
                                            </span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    )
}

/* ─── Main Component ─── */
 const Service = () => {
    const heroRef = useRef(null)
    const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
    const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
    const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

    return (
        <div className="bg-white font-sans selection:bg-[#D4AF37] selection:text-white overflow-x-hidden">

            {/* ── Hero ── */}
            <section ref={heroRef} className="h-[90vh] w-full relative flex items-center justify-center overflow-hidden">
                <motion.div style={{ y: heroY }} className="absolute inset-0 z-0 will-change-transform">
                    <img
                        className="h-full w-full object-cover"
                        src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000"
                        alt="Services"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
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
                        <span className="text-xs font-bold tracking-[0.3em] uppercase" style={{ color: GOLD }}>
                            Family Office & Entrepreneur Services
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
                        className="text-7xl md:text-[9rem] text-white tracking-tighter leading-[0.9] mb-8"
                        style={{ fontFamily: 'PT Serif, serif' }}
                    >
                        Our{' '}
                        <span className="font-light gold-text" >Services</span> {/*style={{ color: GOLD }} italic*/}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, delay: 0.8 }}
                        className="text-xl md:text-2xl text-white/75 font-light max-w-3xl mx-auto leading-relaxed"
                    >
                        Beyond portfolio management — a complete blend of wealth consolidation, governance, succession, and tech-enabled insights for complex, multi-jurisdictional wealth.
                    </motion.p>
                </motion.div>
            </section>

            {/* Quick nav bar */}
            <div className="sticky top-[60px] w-full bg-white border-b border-gray-100 z-99 flex shadow-sm">
                {NAV_ITEMS.map((nav, i) => {
                    const Icon = nav.icon
                    return (
                        <a
                            key={i}
                            href={nav.href}
                            className="group relative flex-1 flex flex-col justify-center px-4 py-5 border-r border-gray-100 last:border-r-0 overflow-hidden transition-all duration-300 hover:bg-[#FFFDF5]"
                        >
                            <div
                                className="absolute top-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500"
                                style={{ background: GOLD }}
                            />
                            <div className="flex items-center gap-2 mb-1.5">
                                {/* <span
                                    className="text-[10px] font-bold tabular-nums leading-none"
                                    style={{ color: GOLD, fontFamily: 'PT Serif, serif' }}
                                >
                                    {String(i + 1).padStart(2, '0')}
                                </span> */}
                                <Icon size={13} className="text-gray-400 group-hover:text-[#D4AF37] transition-colors duration-300" />
                            </div>
                            <span className="text-[11px] md:text-sm font-semibold text-gray-700 group-hover:text-gray-900 tracking-tight leading-tight transition-colors duration-300 line-clamp-1">
                                {nav.label}
                            </span>
                            <ArrowRight
                                size={13}
                                className="absolute right-3 top-1/2 -translate-y-1/2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                                style={{ color: GOLD }}
                            />
                        </a>
                    )
                })}
            </div>

            {/* ── Service Sections ── */}
            {SERVICES.map((svc, i) => (
                <ServiceSection key={svc.id} svc={svc} index={i} />
            ))}

            {/* ── "In Essence" callout band ── */}
            <section className="w-full py-24 bg-[#FAFAFA] border-b border-gray-100">
                <div className="container mx-auto px-6 lg:px-16 max-w-4xl">
                    <motion.div {...fadeUp()} className="flex flex-col md:flex-row gap-12 items-start">
                        <div className="shrink-0 pt-1.5">
                            <Shield size={32} color={GOLD} />
                        </div>
                        <div>
                            {/* <p className="text-xs font-semibold text-gray-400 tracking-[0.35em] uppercase mb-4">In Essence</p> */}
                            <h3
                                className="text-3xl md:text-4xl tracking-tighter leading-tight mb-6"
                                style={{ fontFamily: 'PT Serif, serif' }}
                            >
                                A family-office <span className="">experience</span> {/*style={{ color: GOLD }} italic*/}
                            </h3>
                            <p className="text-lg text-gray-600 font-light leading-relaxed">
                                TieVista delivers a family-office style experience without acting as a family office providing coordination, visibility, and disciplined investment facilitation, while clients retain full control and decision making authority.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

        </div>
    )
}

export default Service;
