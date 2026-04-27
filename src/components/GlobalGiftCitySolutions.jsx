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
        id: "Global",
        title: "Global &",
        italicTitle: "GIFT City Solutions",
        subtitle: "",
        description: "In an interconnected world, capital is not confined by geography. We provide seamless access to global markets and India’s premier gateway GIFT City offering strategic diversification and structural efficiency for globally minded families and institutions.",
        includes: ["GIFT City PMS & AIFs", "International Mutual Funds", "Global Equities", "Global ETFs"],
        image: "https://res.cloudinary.com/dck5jgfix/image/upload/v1777033286/GlobalGiftCity_xyr0cq.png",
        icon: Globe,
        reverse: true
    }
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
                            <p className="text-lg text-black leading-relaxed font-light mb-10" style={{ fontFamily: 'PT Serif, serif' }}>
                                {cat.description}
                            </p>

                            {/* Includes list */}
                            <div>
                                <p className="text-xs font-semibold text-black uppercase mb-4" style={{ fontFamily: 'PT Serif, serif' }}>
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
                                                style={{ borderColor: 'black', color: 'black' }}
                                            >
                                                <ArrowRight size={15} />
                                            </div>
                                            <span className="text-base md:text-lg font-light text-black group-hover:text-black transition-colors" style={{ fontFamily: 'PT Serif, serif' }}>
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

const GlobalGiftCitySolutions = () => {
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
                        <span className="text-[#D4AF37] text-xs font-bold tracking-[0.3em] uppercase" style={{ fontFamily: "PT Serif" }}>Global & GIFT City Solutions</span>
                    </div>
                    <motion.h1 variants={animationSettings.item} className="text-6xl md:text-9xl mb-8 text-white tracking-tighter leading-[0.95]" style={{ fontFamily: "PT Serif" }}>
                        Global & GIFT City <span className="gold-text">Solutions</span>
                    </motion.h1>
                    <motion.p variants={animationSettings.item} className="text-xl md:text-2xl text-white font-light max-w-3xl mx-auto leading-relaxed mb-12" style={{ fontFamily: "PT Serif" }}>
                        Leveraging GIFT City’s unique regulatory framework to offer tax-efficient, globally diversified investment solutions.
                    </motion.p>
                </motion.div>
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
                        <button className="bg-black text-white px-16 py-6 rounded-full font-bold uppercase text-sm hover:bg-[#D4AF37] transition-all shadow-2xl hover:shadow-[#D4AF37]/40" style={{ fontFamily: 'PT Serif, serif' }}>
                            Connect With wealth manager
                        </button>
                    </Link>
                </motion.div>
            </section>
        </div>
    );
};

export default GlobalGiftCitySolutions;




