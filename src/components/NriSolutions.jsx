import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { TrendingUp, Briefcase, Target, FileText, BarChart2, ArrowRight, Globe } from 'lucide-react'

/* ─── Shared helpers (same as InvestmentUniverse / AboutUs) ─── */
const GOLD = '#D4AF37'

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay },
    viewport: { once: true, margin: '-60px' },
})

/* ─── Quick-nav items ─── */
const NAV_ITEMS = [
    { label: 'Mutual Funds', icon: TrendingUp, href: '#mf' },
    { label: 'Portfolios', icon: Briefcase, href: '#port' },
    { label: 'Goal Planning', icon: Target, href: '#goal' },
    { label: 'Tax Awareness', icon: FileText, href: '#tax' },
    { label: 'Monitoring', icon: BarChart2, href: '#monitor' },
]

/* ─── Service sections data ─── */
const SERVICES = [
    {
        id: 'mf',
        icon: TrendingUp,
        label: '',
        heading: 'Mutual Fund Access',
        accent: 'for NRIs',
        body: 'Access to Indian mutual fund schemes across categories, with an analytical approach towards product selection aligned to your unique cross-border profile.',
        bullets: [
            'Access to all Indian mutual fund scheme categories',
            'Product selection aligned to risk profile & time horizon',
            'Currency considerations & India allocation within global portfolio',
            'Growth vs. income strategies based on repatriation needs',
        ],
        img: 'https://res.cloudinary.com/dck5jgfix/image/upload/v1774249671/Mutual_Fund_Access_for_NRIs_zw0osx.png',
        reverse: false,
    },
    {
        id: 'port',
        icon: Briefcase,
        label: '',
        heading: 'NRI Portfolio &',
        accent: 'Account Enablement',
        body: 'Structured guidance on NRE/NRO account usage, repatriability, and end-to-end compliance support so your India investments are always set up right.',
        bullets: [
            'NRE / NRO account guidance for investments',
            'Repatriable vs. non-repatriable investment structuring',
            'KYC (initial & ongoing), FATCA / CRS declarations',
            'Power of Attorney (POA) investment setups',
        ],
        img: 'https://res.cloudinary.com/dck5jgfix/image/upload/v1774249834/NRI_Portfolio_Account_Enablement_p5rnyb.png',
        reverse: true,
    },
    {
        id: 'goal',
        icon: Target,
        label: '',
        heading: 'Goal-Based',
        accent: 'India Allocation',
        body: 'Structuring your India exposure around clear life objectives whether wealth creation a potential return or funding family milestones across generations.',
        bullets: [
            'Long term wealth creation in India',
            'Planning for a potential future return to India',
            "Funding children's education & family commitments",
            'Inter generational asset building with periodic reviews',
        ],
        img: 'https://res.cloudinary.com/dck5jgfix/image/upload/v1774249911/Goal-Based_India_Allocation_efzpp2.png',
        reverse: false,
    },
    {
        id: 'tax',
        icon: FileText,
        label: '',
        heading: 'Coordinated',
        accent: 'Tax Awareness',
        body: 'High level guidance on the Indian tax landscape for NRI investors ensuring capital gains treatment TDS implications and cash flow planning are clearly understood.',
        bullets: [
            'Tax treatment of mutual fund investments for NRIs',
            'Capital gains classification equity vs debt',
            'TDS implications & cash flow planning',
            'Awareness of residency linked tax position changes',
        ],
        img: 'https://res.cloudinary.com/dck5jgfix/image/upload/v1774250009/Coordinated_Tax_Awareness_kbvgin.png',
        reverse: true,
    },
    {
        id: 'monitor',
        icon: BarChart2,
        label: '',
        heading: 'Portfolio Monitoring',
        accent: '& Reporting',
        body: 'Ongoing performance tracking allocation drift detection and consolidated reporting designed for overseas residents managing India side wealth across time zones.',
        bullets: [
            'Performance vs goals & asset allocation drift',
            'Risk concentration monitoring',
            'Consolidated reporting for overseas residents',
            'Portfolio clarity across time zones & family decision-makers',
        ],
        img: 'https://res.cloudinary.com/dck5jgfix/image/upload/v1774248212/Consolidating_Reporting_x5ztle.png',
        reverse: false,
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

                    {/* ── Image ── */}
                    <motion.div
                        {...fadeUp(0.1)}
                        className="w-full md:w-1/2 h-full overflow-hidden relative group"
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
                            loading='lazy'
                        />
                        {/* Gold corner accent */}
                        <div
                            className="absolute bottom-0 left-0 w-16 h-16 opacity-80"
                            style={{ background: `linear-gradient(135deg, ${GOLD} 50%, transparent 50%)` }}
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500" />
                    </motion.div>

                    {/* ── Content ── */}
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
                                <span className="text-black text-xs font-semibold tracking-[0.35em] uppercase" style={{ fontFamily: 'PT Serif, serif' }}>
                                    {label}
                                </span>
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

                            {/* Body */}
                            <p className="text-lg text-black leading-relaxed font-light mb-10" style={{ fontFamily: 'PT Serif, serif' }}>
                                {body}
                            </p>

                            {/* Bullet list */}
                            <div>
                                <p className="text-xs font-semibold text-black uppercase mb-4" style={{ fontFamily: 'PT Serif, serif' }}>
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
                                            style={{ fontFamily: 'PT Serif, serif' }}
                                        >
                                            <div
                                                className="w-9 h-9 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-[#D4AF37] group-hover:border-[#D4AF37] group-hover:text-white"
                                                style={{ borderColor: '#000000', color: '#000000' }}
                                            >
                                                <ArrowRight size={15} />
                                            </div>
                                            <span className="text-base md:text-lg font-light text-black group-hover:text-black transition-colors">
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
const NriSolutions = () => {
    const heroRef = useRef(null)
    const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
    const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
    const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

    return (
        <div className="bg-white font-sans selection:bg-[#D4AF37] selection:text-white overflow-x-hidden">

            {/* ── Hero ── */}
            <section ref={heroRef} className="h-[90vh] w-full relative flex items-center justify-center overflow-hidden">

                {/* Parallax background */}
                <motion.div style={{ y: heroY }} className="absolute inset-0 z-0 will-change-transform">
                    <img
                        className="h-full w-full object-cover"
                        src="https://res.cloudinary.com/dck5jgfix/image/upload/v1774249569/NRI_Solutions_BG_cr721a.png"
                        alt="NRI Solutions"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
                </motion.div>

                {/* Hero content */}
                <motion.div
                    style={{ opacity: heroOpacity }}
                    className="relative z-10 text-center px-6 max-w-5xl mx-auto"
                >
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: -16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className="inline-flex items-center gap-3 px-5 py-2 mb-8 border rounded-full backdrop-blur-sm"
                        style={{ borderColor: `${GOLD}60`, background: 'rgba(0,0,0,0.25)' }}
                    >
                        <span className="w-1.5 h-1.5 rounded-full" style={{ background: GOLD }} />
                        <span className="text-xs font-bold tracking-[0.3em] uppercase" style={{ color: GOLD, fontFamily: 'PT Serif, serif' }}>
                            Your trusted India-side investment partner
                        </span>
                    </motion.div>

                    {/* Title */}
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
                        className="text-7xl md:text-[9rem] text-white tracking-tighter leading-[0.9] mb-8"
                        style={{ fontFamily: 'PT Serif, serif' }}
                    >
                        NRI{' '}
                        <span className="font-light gold-text" >Solutions</span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, delay: 0.8 }}
                        className="text-xl md:text-2xl text-white font-light max-w-3xl mx-auto leading-relaxed"
                        style={{ fontFamily: 'PT Serif, serif' }}
                    >
                        As Indian families become increasingly global, TieVista ensures your India-side capital is structured with intent, discipline, and long-term alignment.
                    </motion.p>
                </motion.div>

                {/* Quick nav bar */}
                <div className="absolute bottom-0 left-0 w-full bg-white border-t border-gray-100 z-20 flex">
                    {NAV_ITEMS.map((nav, i) => {
                        const Icon = nav.icon
                        return (
                            <a
                                key={i}
                                href={nav.href}
                                className="group relative flex-1 flex flex-col justify-center px-4 py-5 border-r border-gray-100 last:border-r-0 overflow-hidden transition-all duration-300 hover:bg-[#FFFDF5]"
                                style={{ fontFamily: 'PT Serif, serif' }}
                            >
                                {/* Gold top-border reveal */}
                                <div
                                    className="absolute top-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500"
                                    style={{ background: GOLD }}
                                />

                                {/* Index + icon */}
                                <div className="flex items-center gap-2 mb-1.5">
                                    {/* <span
                                        className="text-[10px] font-bold tabular-nums leading-none"
                                        style={{ color: GOLD, fontFamily: 'PT Serif, serif' }}
                                    >
                                        {String(i + 1).padStart(2, '0')}
                                    </span> */}
                                    <Icon size={13} className="text-gray-400 group-hover:text-[#D4AF37] transition-colors duration-300" />
                                </div>

                                {/* Label */}
                                <span className="text-[11px] md:text-sm font-semibold text-gray-700 group-hover:text-gray-900 tracking-tight leading-tight transition-colors duration-300 line-clamp-1">
                                    {nav.label}
                                </span>

                                {/* Slide-in arrow */}
                                <ArrowRight
                                    size={13}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                                    style={{ color: GOLD }}
                                />
                            </a>
                        )
                    })}
                </div>

            </section>

            {/* ── Intro band ── */}
            <section className="w-full py-20 border-b border-gray-100 bg-[#FAFAFA]">
                <div className="container mx-auto px-6 lg:px-16 max-w-4xl">
                    <motion.div {...fadeUp()} className="flex flex-col md:flex-row gap-12 items-start">
                        <div className="shrink-0">
                            <Globe size={32} color={GOLD} />
                        </div>
                        <div>
                            <h3
                                className="text-3xl md:text-4xl tracking-tighter leading-tight mb-5"
                                style={{ fontFamily: 'PT Serif, serif' }}
                            >
                                Capital beyond <span className="gold-text" >borders.</span>
                            </h3>
                            <p className="text-lg text-black font-light leading-relaxed mb-4" style={{ fontFamily: 'PT Serif, serif' }}>
                                Wealth decisions are no longer confined to a single geography. Assets, incomes, responsibilities, and aspirations often span India, the Middle East, Southeast Asia, Europe, and beyond.
                            </p>
                            <p className="text-lg text-black font-light leading-relaxed" style={{ fontFamily: 'PT Serif, serif' }}>
                                TieVista highlights the role that India plays within the broader wealth landscape ensuring your India-side capital is always structured with purpose.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ── Service Sections ── */}
            {SERVICES.map((svc, i) => (
                <ServiceSection key={svc.id} svc={svc} index={i} />
            ))}

        </div>
    )
}

export default NriSolutions;