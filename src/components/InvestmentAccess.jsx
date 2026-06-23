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
        image: "https://res.cloudinary.com/dck5jgfix/image/upload/v1774352512/Income_Capital_Preservation_gryvit.png",
        icon: Database,
        reverse: true
    },
    {
        id: "Private",
        title: "Private &",
        italicTitle: "Alternative Investments",
        subtitle: "",
        description: "Sophisticated portfolios blend traditional and alternative investments to capture broad market potential while uncovering unique value. We provide access to differentiated opportunities that go beyond conventional public markets to enhance returns and reduce correlation.",
        includes: ["AIFs (Category I, II & III)", "Venture Capital", "Real Estate Opportunities", "Commodities"],
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

// Reusable image card with gold accent and overlay label
const ImageCard = ({ name, image, delay = 0, className = "" }) => (
    <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay }}
        viewport={{ once: true, margin: '-60px' }}
        className={`relative overflow-hidden group shadow-md ${className}`}
    >
        {/* Gold left border accent */}
        <div
            className="absolute left-0 top-0 bottom-0 w-[5px] z-20"
            style={{ background: GOLD }}
        />
        {/* Image */}
        <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
        />
        {/* Bottom semi-transparent overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-[32%] px-6 md:px-8 bg-black/40 backdrop-blur-[3px] z-10 flex items-center">
            <h3
                className="text-white text-lg md:text-xl lg:text-2xl font-light tracking-tight leading-tight"
                style={{ fontFamily: 'PT Serif, serif' }}
            >
                {name}
            </h3>
        </div>
    </motion.div>
);

// Section header with title, gold divider, and description
const SectionHeader = ({ title, description, delay = 0.1 }) => (
    <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay }}
        viewport={{ once: true, margin: '-60px' }}
        className="mb-10 text-left"
    >
        <h2
            className="text-5xl md:text-6xl tracking-tighter leading-tight text-black"
            style={{ fontFamily: 'PT Serif, serif' }}
        >
            {title}
        </h2>
        <div className="w-16 h-0.5 mt-4 mb-6" style={{ background: GOLD }} />
        <p className="text-lg text-black leading-relaxed font-light max-w-4xl" style={{ fontFamily: "'Poppins', sans-serif" }}>
            {description}
        </p>
    </motion.div>
);

const CategorySection = ({ cat, index }) => {
    const bg = index % 2 === 0 ? 'bg-white' : 'bg-[#FAFAFA]'

    if (cat.id === 'Growth') {
        const growthCards = [
            { name: "Public Equities", image: "https://res.cloudinary.com/dck5jgfix/image/upload/v1781593855/PublicEquities_nezjmi.png" },
            { name: "Equities Mutual Funds (Including ELSS)", image: "https://res.cloudinary.com/dck5jgfix/image/upload/v1781593853/EquitiesMutualFunds_pme7kb.jpg" },
            { name: "Equity PMS", image: "https://res.cloudinary.com/dck5jgfix/image/upload/v1781593853/EquityPMS_jvmgrq.jpg" },
            { name: "Equity ETFs", image: "https://res.cloudinary.com/dck5jgfix/image/upload/v1781593855/EquityEFTs_ph2p90.png" }
        ];

        return (
            <section id={cat.id} className={`w-full min-h-screen flex flex-col justify-center border-b border-gray-100 ${bg}`}>
                <div className="container mx-auto px-6 lg:px-16 py-16">
                    <SectionHeader title="Growth Assets" description={cat.description} />

                    {/* 2x2 Flex Layout */}
                    <div className="max-w-4xl mx-auto flex flex-col gap-6 md:gap-8">
                        {/* Top Row */}
                        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                            <div className="flex-1">
                                <ImageCard name={growthCards[0].name} image={growthCards[0].image} delay={0.2} className="w-full aspect-[3/2]" />
                            </div>
                            <div className="flex-1">
                                <ImageCard name={growthCards[1].name} image={growthCards[1].image} delay={0.25} className="w-full aspect-[3/2]" />
                            </div>
                        </div>
                        {/* Bottom Row */}
                        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                            <div className="flex-1">
                                <ImageCard name={growthCards[2].name} image={growthCards[2].image} delay={0.3} className="w-full aspect-[3/2]" />
                            </div>
                            <div className="flex-1">
                                <ImageCard name={growthCards[3].name} image={growthCards[3].image} delay={0.35} className="w-full aspect-[3/2]" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    if (cat.id === 'Income') {
        const incomeCards = [
            { name: "Debt Mutual Funds", image: "https://res.cloudinary.com/dck5jgfix/image/upload/v1781594078/DebtMutualFunds_ixqfa3.jpg" },
            { name: "Debt PMS", image: "https://res.cloudinary.com/dck5jgfix/image/upload/v1781594079/DebtPMS_toipk8.png" },
            { name: "Physical Bonds (Govt, Corp, Credit)", image: "https://res.cloudinary.com/dck5jgfix/image/upload/v1781594078/PhyscialBonds_ofpbm7.png" },
            { name: "Fixed Income ETFs", image: "https://res.cloudinary.com/dck5jgfix/image/upload/v1781594077/FixedIncomeETFs_he0dx8.jpg" }
        ];

        return (
            <section id={cat.id} className={`w-full min-h-screen flex flex-col justify-center border-b border-gray-100 ${bg}`}>
                <div className="container mx-auto px-6 lg:px-16 py-16">
                    <SectionHeader title="Income & Capital Preservation" description={cat.description} />

                    {/* 2x2 Flex Layout */}
                    <div className="max-w-4xl mx-auto flex flex-col gap-6 md:gap-8">
                        {/* Top Row */}
                        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                            <div className="flex-1">
                                <ImageCard name={incomeCards[0].name} image={incomeCards[0].image} delay={0.2} className="w-full aspect-[3/2]" />
                            </div>
                            <div className="flex-1">
                                <ImageCard name={incomeCards[1].name} image={incomeCards[1].image} delay={0.25} className="w-full aspect-[3/2]" />
                            </div>
                        </div>
                        {/* Bottom Row */}
                        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                            <div className="flex-1">
                                <ImageCard name={incomeCards[2].name} image={incomeCards[2].image} delay={0.3} className="w-full aspect-[3/2]" />
                            </div>
                            <div className="flex-1">
                                <ImageCard name={incomeCards[3].name} image={incomeCards[3].image} delay={0.35} className="w-full aspect-[3/2]" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    if (cat.id === 'Private') {
        const privateCards = [
            { name: "AIFs (Category I, II & III)", image: "https://res.cloudinary.com/dck5jgfix/image/upload/v1781607152/AIFs_crj4ik.png" },
            { name: "Private Equity & Venture Capital", image: "https://res.cloudinary.com/dck5jgfix/image/upload/v1781607151/PrivateEquity_VentureCaptial_cuwwrv.jpg" },
            { name: "Real Estate Opportunities", image: "https://res.cloudinary.com/dck5jgfix/image/upload/v1781607151/RealEstate_lrdmop.jpg" },
            { name: "Commodities", image: "https://res.cloudinary.com/dck5jgfix/image/upload/v1781607151/Commodity_i90dz5.png" }
        ];

        return (
            <section id={cat.id} className={`w-full min-h-screen flex flex-col justify-center border-b border-gray-100 ${bg}`}>
                <div className="container mx-auto px-6 lg:px-16 py-16">
                    <SectionHeader title="Private & Alternative Investments." description={cat.description} />

                    {/* 4 Portrait Cards in a Single Row */}
                    <div className="flex flex-col sm:flex-row gap-6">
                        {privateCards.map((card, i) => (
                            <div key={i} className="flex-1">
                                <ImageCard name={card.name} image={card.image} delay={0.2 + i * 0.08} className="w-full h-[360px] sm:h-[420px] md:h-[480px]" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }

    // Fallback (won't be reached with current data)
    return null;
}

// --- Main Component ---

const InvestmentAccess = () => {
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
                    <img className="h-full w-full object-cover scale-105" src="https://res.cloudinary.com/dck5jgfix/image/upload/v1777033664/HomeBG_jbaa4u.png" alt="Hero" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />
                </div>

                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={animationSettings.container} className="absolute bottom-28 left-6 md:left-16 lg:left-24 text-left z-10 max-w-3xl pr-6">
                    {/* <div className="inline-flex items-center gap-3 px-4 py-1 mb-6 border border-[#D4AF37]/50  bg-black/20 ">
                        {/* <span className="w-1.5 h-1.5 rounded-full" style={{ background: GOLD }} /> */}
                    {/* <span className="text-[#D4AF37] text-xs font-bold tracking-[0.3em] uppercase" style={{ fontFamily: 'PT Serif, serif' }}>We don’t just manage wealth, We future-proof it.</span> */}
                    {/* </div> */}
                    <motion.h1 variants={animationSettings.item} className="text-6xl md:text-6xl mb-8 text-white tracking-tighter leading-[0.95]" style={{ fontFamily: "PT Serif" }}>
                        Investment Access
                    </motion.h1>
                    <motion.p variants={animationSettings.item} className="text-lg md:text-xl text-white font-light max-w-3xl leading-relaxed mb-12">
                        Navigating the complexities of global wealth through bespoke selection, rigorous discipline, and a borderless perspective.
                    </motion.p>
                </motion.div>

                {/* Quick Nav Bar */}

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
                        <button className="bg-black text-white px-16 py-6 rounded-full font-bold uppercase text-sm hover:bg-[#D4AF37] transition-all shadow-2xl hover:shadow-[#D4AF37]/40">
                            Connect With wealth manager
                        </button>
                    </Link>
                </motion.div>
            </section>
        </div>
    );
};

export default InvestmentAccess;