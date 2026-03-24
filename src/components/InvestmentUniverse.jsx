import React from 'react'
import { motion } from 'framer-motion'
import { Globe, Database, Layers, TrendingUp, ArrowRight, Zap } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Link } from 'react-router-dom'


gsap.registerPlugin(ScrollTrigger);

const GOLD = '#D4AF37'

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay },
    viewport: { once: true, margin: '-60px' },
})

// --- Static Data ---
const ASSET_CATEGORIES = [
    {
        id: "Growth",
        title: "Growth",
        italicTitle: "Assets",
        subtitle: "",
        description: "At TieVista, we build enduring financial success through disciplined, equity-centric investment strategies. Our approach is rooted in long-term growth, backed by rigorous research and thoughtful risk management to generate capital appreciation globally.",
        includes: ["Public Equities", "Equity Mutual Funds (including ELSS)", "Equity PMS", "Equity ETFs"],
        image: "https://res.cloudinary.com/dck5jgfix/image/upload/v1774346035/GrowthAsset_yffmlk.png",
        icon: TrendingUp,
        reverse: false
    },
    {
        id: "Income",
        title: "Income &",
        italicTitle: "Capital Preservation",
        subtitle: "",
        description: "We understand that protecting hard-earned capital is as essential as growth. Our Income & Capital Preservation strategies prioritize safety and steady income generation, crafted for investors who seek predictable cash flows and shield their portfolios from undue volatility.",
        includes: ["Debt Mutual Funds", "Debt PMS", "Physical Bonds (Govt, Corp, Credit)", "Fixed Income ETFs"],
        image: "https://res.cloudinary.com/dck5jgfix/image/upload/v1774253143/TievistaReserve_vkbvdm.png",
        icon: Database,
        reverse: true
    },
    {
        id: "Private",
        title: "Private &",
        italicTitle: "Alternative Investments",
        subtitle: "",
        description: "Sophisticated portfolios blend traditional and alternative investments to capture broad market potential while uncovering unique value. We provide access to differentiated opportunities that go beyond conventional public markets to enhance returns and reduce correlation.",
        includes: ["AIFs (Category I, II & III)", "Private Equity & Venture Capital", "Real Estate Opportunities", "Commodities"],
        image: "https://res.cloudinary.com/dck5jgfix/image/upload/v1774251622/Private_Alternative_Investments_yygtg2.png",
        icon: Layers,
        reverse: false
    }
];

const NAV_ELEMENTS = [
    { title: "Growth Assets", icon: TrendingUp, href: "#Growth" },
    { title: "Income & Capital Preservation", icon: Database, href: "#Income" },
    { title: "Private & Alternatives", icon: Layers, href: "#Private" },
];

// --- Sub-components ---

const CategorySection = ({ cat, index }) => {
    const bg = index % 2 === 0 ? 'bg-white' : 'bg-[#FAFAFA]'
    const Icon = cat.icon

    return (
        <section id={cat.id} className={`w-full py-28 border-b border-gray-100 ${bg}`}>
            <div className="container mx-auto px-6 lg:px-16">
                <div className={`flex flex-col ${cat.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-16 md:gap-20`}>

                    {/* ── Image ── */}
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
                            src={cat.image}
                            alt={cat.title}
                            className="w-full h-full object-cover"
                            loading='lazy'
                        />
                        {/* Gold corner accent */}
                        <div
                            className="absolute bottom-0 left-0 w-16 h-16 opacity-80"
                            style={{ background: `linear-gradient(135deg, ${GOLD} 50%, transparent 50%)` }}
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500" />
                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500" />
                    </motion.div>

                    {/* ── Content ── */}
                    <div className="w-full md:w-1/2">
                        <motion.div {...fadeUp(0.2)}>

                            {/* Icon + category label */}
                            <div className="flex items-center gap-3 mb-5">
                                <div
                                    className="w-10 h-10 flex items-center justify-center"
                                    style={{ background: `${GOLD}18` }}
                                >
                                    <Icon size={20} color={GOLD} />
                                </div>
                                <span className="text-gray-400 text-xs font-semibold tracking-[0.35em] uppercase">
                                    {cat.label}
                                </span>
                            </div>

                            {/* Heading */}
                            <h2
                                className="text-5xl md:text-6xl lg:text-7xl mb-6 tracking-tighter leading-tight"
                                style={{ fontFamily: 'PT Serif, serif' }}
                            >
                                {cat.title}{' '}
                                <span className="gold-text" >{cat.italicTitle}</span> {/* italicTitle style={{ color: GOLD }}*/}
                            </h2>

                            {/* Gold divider */}
                            <div className="w-12 h-px mb-6" style={{ background: GOLD }} />

                            {/* Description */}
                            <p className="text-lg text-gray-600 leading-relaxed font-light mb-10">
                                {cat.description}
                            </p>

                            {/* Includes list */}
                            <div>
                                <p className="text-xs font-semibold text-gray-400 tracking-[0.3em] uppercase mb-4">
                                    Institutional Offerings
                                </p>
                                <div className="space-y-0">
                                    {cat.includes.map((item, i) => (
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

// --- Main Component ---

 const InvestmentUniverse = () => {
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

    return (
        <div className="bg-white font-sans selection:bg-[#D4AF37] selection:text-white">

            {/* Hero Section */}
            <section className="h-[90vh] w-full relative flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img className="h-full w-full object-cover scale-105" src="https://res.cloudinary.com/dck5jgfix/image/upload/v1774250145/Global_GIFT_City_Solutions_BG_rndi8p.png" alt="Hero" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />
                </div>

                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={animationSettings.container} className="relative z-10 text-center px-6">
                    <div className="inline-flex items-center gap-3 px-4 py-1 mb-6 border border-[#D4AF37]/50 rounded-full bg-black/20 backdrop-blur-sm">
                        <span className="w-1.5 h-1.5 rounded-full" style={{ background: GOLD }} />
                        <span className="text-[#D4AF37] text-xs font-bold tracking-[0.3em] uppercase">We don’t just manage wealth, We future-proof it.</span>
                    </div>
                    <motion.h1 variants={animationSettings.item} className="text-6xl md:text-9xl mb-8 text-white tracking-tighter leading-[0.95]" style={{ fontFamily: "PT Serif" }}>
                        Investment <span className="gold-text ">Universe</span>
                    </motion.h1>
                    <motion.p variants={animationSettings.item} className="text-xl md:text-2xl text-white/80 font-light max-w-3xl mx-auto leading-relaxed mb-12">
                        Navigating the complexities of global wealth through bespoke selection, rigorous discipline, and a borderless perspective.
                    </motion.p>
                </motion.div>

                {/* Quick Nav Bar */}
                <div className="absolute bottom-0 left-0 w-full bg-white border-t border-gray-100 z-20 flex">
                    {NAV_ELEMENTS.map((el, i) => {
                        const Icon = el.icon
                        return (
                            <a
                                key={i}
                                href={el.href}
                                className="group relative flex-1 flex flex-col justify-center px-5 py-5 border-r border-gray-100 last:border-r-0 overflow-hidden transition-all duration-300 hover:bg-[#FFFDF5]"
                            >
                                {/* Gold top-border reveal on hover */}
                                <div
                                    className="absolute top-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500"
                                    style={{ background: GOLD }}
                                />

                                {/* Row: index + icon */}
                                <div className="flex items-center gap-2 mb-1.5">
                                    {/* <span
                                        className="text-[10px] font-bold tabular-nums leading-none"
                                        style={{ color: GOLD, fontFamily: 'PT Serif, serif' }}
                                    >
                                        {String(i + 1).padStart(2, '0')}
                                    </span> */}
                                    <Icon
                                        size={13}
                                        className="text-gray-400 group-hover:text-[#D4AF37] transition-colors duration-300"
                                    />
                                </div>

                                {/* Title */}
                                <span className="text-[11px] md:text-sm font-semibold text-gray-700 group-hover:text-gray-900 tracking-tight leading-tight transition-colors duration-300 line-clamp-1">
                                    {el.title}
                                </span>

                                {/* Slide-in arrow */}
                                <ArrowRight
                                    size={13}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                                    style={{ color: GOLD }}
                                />
                            </a>
                        )
                    })}
                </div>
            </section>

            {/* Asset Category Sections */}
            {ASSET_CATEGORIES.map((cat, i) => (
                <CategorySection key={i} cat={cat} index={i} />
            ))}

            {/* Final CTA */}
            <section className="h-screen w-full flex items-center justify-center bg-white relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none">
                    <Zap className="w-[800px] h-[800px]" />
                </div>
                <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="text-center z-10 px-6">
                    <h2 className="text-6xl md:text-7xl font-bold mb-12 leading-[0.9] tracking-tighter text-gray-900 font-serif">
                        Future-proof Your <br /> <span className="gold-text italic">Legacy.</span>
                    </h2>
                    <Link to="/contact">
                    <button className="bg-black text-white px-16 py-6 rounded-full font-bold tracking-[0.2em] uppercase text-sm hover:bg-[#D4AF37] transition-all shadow-2xl hover:shadow-[#D4AF37]/40">
                        Connect With wealth manager
                    </button>
                    </Link>
                </motion.div>
            </section>
        </div>
    );
};

export default InvestmentUniverse;