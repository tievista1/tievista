import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const GOLD = '#D4AF37'
const CHARCOAL = '#1A1A1A'

const TheRupeeLongestFall = () => {

    const blog = {
        id: 2,
        title: "The Rupee's Longest Fall",
        goldtitle: "From ₹1 to ₹95 and Counting",
        description: "The Indian rupee has steadily depreciated since independence but 2026 marks a sharp acceleration in the pace of depreciation particularly since 2024.",
        img: "https://res.cloudinary.com/dr1u4plse/image/upload/v1774960590/US_CRISIS_bpyyrp.png",
        url: "/blogs/the-rupees-longest-fall",
        date: "May 15, 2026"
    }

    const heroRef = useRef(null)
    const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] })
    const heroY = useTransform(scrollYProgress, [0, 1], [0, 300])
    const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

    return (
        <>
            <div className='min-h-screen w-full selection:text-white selection:bg-[#D4AF37]' style={{ fontFamily: "PT Serif,serif" }}>
                <section ref={heroRef} className="h-60 w-full relative flex items-center justify-center overflow-hidden">

                    {/* Parallax Background */}
                    <motion.div style={{ y: heroY }} className="absolute inset-0 z-0 will-change-transform">
                        <img
                            className="h-full w-full object-cover"
                            src={blog.img}
                            alt={blog.title}
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/20" />
                    </motion.div>

                    {/* Content — left aligned for compact height */}
                    <motion.div
                        style={{ opacity: heroOpacity }}
                        className="relative z-10 px-8 lg:px-16 max-w-3xl"
                    >
                        {/* Date Badge */}
                        <motion.div
                            initial={{ opacity: 0, x: -12 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="inline-flex items-center gap-2 px-3 py-1 mb-4 border rounded-full backdrop-blur-sm"
                            style={{ borderColor: `${GOLD}60`, background: 'rgba(0,0,0,0.25)' }}
                        >
                            <span className="w-1 h-1 rounded-full" style={{ background: GOLD }} />
                            <span className="text-[9px] font-bold tracking-[0.3em] uppercase" style={{ color: GOLD }}>
                                {blog.date}
                            </span>
                        </motion.div>

                        {/* Title */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
                            className="text-3xl md:text-4xl text-white tracking-tight leading-tight"
                            style={{ fontFamily: 'Laura, serif' }}
                        >
                            <h1 className='md:text-4xl text-3xl font-bold'>{blog.title}</h1>{' '}
                            <h1 className="md:text-4xl text-3xl gold-text font-bold">{blog.goldtitle}</h1>
                        </motion.h1>

                        {/* Gold Divider */}
                        <motion.div
                            initial={{ opacity: 0, scaleX: 0 }}
                            animate={{ opacity: 1, scaleX: 1 }}
                            transition={{ duration: 0.7, delay: 0.8 }}
                            className="w-10 h-px mt-4 origin-left"
                            style={{ background: GOLD }}
                        />
                    </motion.div>
                </section>

                <div className='min-h-screen max-w-5xl mx-auto px-6 lg:px-16 py-20'>

                    <div id='page0' className='space-y-16'>
                        {/* 3-Stat Grid */}
                        <div className='w-full'>
                            <div className='flex flex-wrap md:flex-nowrap border border-gray-100 bg-white shadow-sm'>
                                {[
                                    { value: "₹96.05", label: "Record low in May 2026" },
                                    { value: "~10%", label: "Rupee decline 2025–26" },
                                    { value: "$20.6B", label: "Total FII Outflows Jan-Apr 2026" }
                                ].map((stat, idx) => (
                                    <div key={idx} className={`p-8 flex flex-col items-center text-center flex-1 border border-gray-300 ${idx !== 0 ? 'md:border-l' : ''} w-full md:w-1/3`}>
                                        <span className='text-3xl lg:text-5xl font-bold mb-2' style={{ color: GOLD, fontFamily: 'Laura, serif' }}>
                                            {stat.value}
                                        </span>
                                        <span className='text-[10px] lg:text-xs font-medium text-gray-500 uppercase tracking-widest leading-relaxed max-w-[140px]' style={{ fontFamily: 'Poppins, serif' }}>
                                            {stat.label}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Executive Summary Box */}
                        <div className='bg-[#FDFBF7] border-l-4 border-[#D4AF37] p-8 md:p-12 shadow-sm'>
                            <h3 className='text-lg md:text-xl font-bold uppercase tracking-widest mb-6' style={{ color: GOLD, fontFamily: 'PT Serif, serif' }}>
                                EXECUTIVE SUMMARY
                            </h3>
                            <ul className='space-y-4 text-sm md:text-base text-gray-800 font-serif leading-relaxed' style={{ fontFamily: 'Poppins, serif' }}>
                                <li className='flex items-start gap-3'>
                                    <span className='size-1.5 rounded-full bg-[#D4AF37] mt-2 shrink-0' />
                                    <span>INR hit a new record low of ₹96.05 on May 15, 2026, down ~10% in FY26 - one of the sharpest annual decline in years</span>
                                </li>
                                <li className='flex items-start gap-3'>
                                    <span className='size-1.5 rounded-full bg-[#D4AF37] mt-2 shrink-0' />
                                    <span>The pace of depreciation has structurally accelerated: ₹83 to ₹96.05 took less than two years, versus 14 years for the prior ₹38 move</span>
                                </li>
                                <li className='flex items-start gap-3'>
                                    <span className='size-1.5 rounded-full bg-[#D4AF37] mt-2 shrink-0' />
                                    <span>Oil price rises and sustained capital outflows are the primary near-term pressure drivers</span>
                                </li>
                                <li className='flex items-start gap-3'>
                                    <span className='size-1.5 rounded-full bg-[#D4AF37] mt-2 shrink-0' />
                                    <span>The Iran conflict served as a force multiplier, amplifying pre-existing structural vulnerabilities</span>
                                </li>
                                <li className='flex items-start gap-3'>
                                    <span className='size-1.5 rounded-full bg-[#D4AF37] mt-2 shrink-0' />
                                    <span>RBI intervention has been effective only tactically, slowing the pace but not reversing the trend</span>
                                </li>
                                <li className='flex items-start gap-3'>
                                    <span className='size-1.5 rounded-full bg-[#D4AF37] mt-2 shrink-0' />
                                    <span>Risks remain skewed to further weakness near term; structural buffers limit tail risk</span>
                                </li>
                            </ul>
                        </div>

                        <div className='mt-4 text-[10px] text-gray-500 font-bold uppercase tracking-widest' style={{ fontFamily: 'PT Serif,serif' }}>
                            Source: <span className='text-blue-600 underline cursor-pointer'><a href="https://timesofindia.indiatimes.com/business/india-business/rupee-tumbles-9-88-in-fy26-worst-annual-fall-in-14-years-what-lies-ahead/articleshow/129906881.cms" target='_blank'>Times of India</a></span>, <span className='text-blue-600 underline cursor-pointer'><a href="https://www.republicworld.com/business/fii-outflows-2026-india-stock-market-record-selloff-dii-support" target='_blank'>Republic World</a></span>
                        </div>
                    </div>

                    <div id='page1' className='space-y-8 pt-16'>
                        {/* Header with Number Badge */}
                        <div className='flex items-center gap-4'>
                            <div className='bg-[#D4AF37] text-black px-4 py-1 font-bold text-sm'>
                                01
                            </div>
                            <h3 className='text-sm font-bold uppercase tracking-widest text-black'>
                                THE LONG SLIDE
                            </h3>
                        </div>

                        {/* Title */}
                        <h2 className='text-3xl md:text-4xl font-bold text-black' style={{ fontFamily: 'PT Serif, serif' }}>
                            Seventy-Five Years, One Direction
                        </h2>

                        {/* Description */}
                        <p className='text-base md:text-lg text-gray-800 leading-relaxed font-serif' style={{ fontFamily: 'Poppins, serif' }}>
                            The Indian rupee has steadily depreciated since independence but 2026 marks a sharp acceleration 
                            in the pace of depreciation particularly since 2024. With the Iran conflict amplifying existing structural 
                            pressures, ₹100 per dollar is now being priced in options markets. 
                        </p>

                        {/* 6-Stat Grid */}
                        <div className='w-full'>
                            <div className='flex flex-wrap md:flex-nowrap border border-gray-300 bg-white'>
                                {[
                                    { year: "1947", value: "₹1", bg: "bg-white" },
                                    { year: "1991", value: "₹17", bg: "bg-white" },
                                    { year: "2010", value: "₹45", bg: "bg-white" },
                                    { year: "2024", value: "₹83+", bg: "bg-white" },
                                    { year: "Dec 2025", value: "₹90", bg: "bg-[#FDFBF7]", color: "#D4AF37" },
                                    { year: "May 2026", value: "₹95.9", bg: "bg-[#FFF5F5]", color: "#E53E3E" }
                                ].map((stat, idx) => (
                                    <div key={idx} className={`p-6 flex flex-col items-center text-center flex-1 border-gray-300 ${idx !== 0 ? 'md:border-l' : ''} ${stat.bg} w-1/2 md:w-auto`}>
                                        <span className='text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-widest mb-1' style={{ fontFamily: 'PT Serif, serif' }}>
                                            {stat.year}
                                        </span>
                                        <span className='text-2xl md:text-3xl font-medium' style={{ color: stat.color || 'black', fontFamily: 'Poppins, serif' }}>
                                            {stat.value}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Source */}
                        <div className='text-[10px] text-gray-500 font-bold uppercase tracking-widest' style={{ fontFamily: 'PT Serif,serif' }}>
                            Source: <span className='text-black underline cursor-pointer font-bold'><a href="https://www.icicidirect.com/research/equity/finace/impact-of-usd-inr-exchange-rates-on-indian-markets" target='_blank'>ICICI Report</a></span>
                        </div>

                        {/* Conclusion Paragraph */}
                        <p className='text-base md:text-lg text-gray-800 leading-relaxed font-serif pt-4' style={{ fontFamily: 'Poppins, serif' }}>
                            To understand the severity: the rupee took 43 years to move from ₹1 to ₹45. It took another 14 years to 
                            reach ₹83. But the journey from ₹83 to ₹96.05 has happened in less than two years, highlighting a 
                            much faster phase of depreciation than earlier cycles. In FY2025–26 alone, it reached 6%.
                        </p>
                    </div>

                    <div id='page2' className='space-y-10 pt-16'>
                        {/* Header with Number Badge */}
                        <div className='flex items-center gap-4'>
                            <div className='bg-[#D4AF37] text-black px-4 py-1 font-bold text-sm'>
                                02
                            </div>
                            <h3 className='text-sm font-bold uppercase tracking-widest text-black'>
                                SIX FORCES
                            </h3>
                        </div>

                        {/* Title */}
                        <div className='space-y-4'>
                            <h2 className='text-3xl md:text-4xl font-bold text-black' style={{ fontFamily: 'PT Serif, serif' }}>
                                Why the Rupee Keeps Falling - The Real Drivers
                            </h2>
                            <p className='text-base md:text-lg text-gray-800 leading-relaxed font-serif' style={{ fontFamily: 'Poppins, serif' }}>
                                Currency movements are driven by multiple factors. The rupee’s current weakness reflects a mix of 
                                structural pressures and short-term shocks, creating sustained downward pressure. 
                            </p>
                        </div>

                        {/* Red Box: Oil & FII */}
                        <div className='bg-[#FFF5F5] border-l-4 border-[#E53E3E] p-8 md:p-10 space-y-8'>
                            <div className='space-y-4'>
                                <h4 className='text-xl font-bold text-black' style={{ fontFamily: 'PT Serif, serif' }}>The Oil Shock</h4>
                                <p className='text-sm md:text-base text-gray-800 leading-relaxed font-serif' style={{ fontFamily: 'Poppins, serif' }}>
                                    Brent surged above $116/barrel by early May 2026 up ~60% year-to-date before falling 
                                    sharply toward $101 on May 7 as US-Iran ceasefire negotiations advanced. Volatility remains 
                                    high with no final deal signed. Higher crude prices widen the trade deficit, increasing net USD 
                                    demand. As one of the world's largest oil importers, this pressures INR directly through the 
                                    balance of payments channel - exerting structural depreciation pressure beyond just the 
                                    oil bill.
                                </p>
                            </div>
                            <div className='space-y-4'>
                                <h4 className='text-xl font-bold text-black' style={{ fontFamily: 'PT Serif, serif' }}>FII Outflows</h4>
                                <p className='text-sm md:text-base text-gray-800 leading-relaxed font-serif' style={{ fontFamily: 'Poppins, serif' }}>
                                    FII selling continued in April, with a further ₹60,847 crore (~$6.5 billion) withdrawn. 
                                    Cumulative FII outflows in the first four months of 2026 surpassed $20 billion exceeding the 
                                    entire 2025 calendar year outflow of $18.9 billion. For the first time, FII ownership in Indian 
                                    equities has fallen to approximately 16%, the lowest in nearly two decades. FIIs are shifting to 
                                    safer US Assets (Treasuries and dollar holdings) amid oil shocks & global risk-off sentiment, 
                                    and to select emerging markets like South Korea, Taiwan, China, Thailand, and Brazil.
                                </p>
                            </div>
                            <p className='text-sm md:text-base text-gray-800 leading-relaxed font-serif' style={{ fontFamily: 'Poppins, serif' }}>
                                Indian equities continue to trade at a premium to broader emerging markets, with MSCI 
                                India at about 20.45x forward P/E versus MSCI Emerging Markets at about 12.05x Forward P/E, 
                                while MSCI China and South Korea trade at meaningfully lower valuations. This valuation 
                                gap helps explain why foreign flows can weaken during risk-off periods, especially when 
                                cheaper Asian peers offer lower entry multiples.
                            </p>
                        </div>

                        {/* Red Box: Structural Gaps */}
                        <div className='bg-[#FFF5F5] border-l-4 border-[#E53E3E] p-8 md:p-10 space-y-6'>
                            <h4 className='text-xl font-bold text-black' style={{ fontFamily: 'PT Serif, serif' }}>India's structural/outlook gaps</h4>
                            <ul className='space-y-4 text-sm md:text-base text-gray-800 font-serif leading-relaxed' style={{ fontFamily: 'Poppins, serif' }}>
                                <li className='flex items-start gap-4'>
                                    <div className='size-1.5 rounded-full border border-gray-400 mt-2 shrink-0' />
                                    <span>Current account deficit: ~1.3% GDP ($13.2B Q3FY26), manageable but oil-vulnerable.</span>
                                </li>
                                <li className='flex items-start gap-4'>
                                    <div className='size-1.5 rounded-full border border-gray-400 mt-2 shrink-0' />
                                    <span>Growth slowdown: No AI/export boom like Taiwan/Korea (+70% exports).</span>
                                </li>
                                <li className='flex items-start gap-4'>
                                    <div className='size-1.5 rounded-full border border-gray-400 mt-2 shrink-0' />
                                    <span>Volatility: India has exhibited higher sensitivity to global risk-off episodes relative to 
                                    select North Asian exporters, reflecting lower export leverage and higher oil 
                                    dependency.</span>
                                </li>
                                <li className='flex items-start gap-4'>
                                    <div className='size-1.5 rounded-full border border-gray-400 mt-2 shrink-0' />
                                    <span>Liquidity reliance: Heavy on domestic inflows (DIIS absorbing FII sales), but FIIs want 
                                    global tailwinds like US rate cuts.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Yellow Box: Trade & Inflation */}
                        <div className='bg-[#FDFBF7] border-l-4 border-[#D4AF37] p-8 md:p-10 space-y-8'>
                            <div className='space-y-4'>
                                <h4 className='text-xl font-bold text-black' style={{ fontFamily: 'PT Serif, serif' }}>Trade Deficit</h4>
                                <p className='text-sm md:text-base text-gray-800 leading-relaxed font-serif' style={{ fontFamily: 'Poppins, serif' }}>
                                    India's trade deficit was $27.1B in February 2026, driven by higher crude oil and gold imports. 
                                    It narrowed sharply to $20.67B in March 2026 a nine-month low and well below market 
                                    expectations of $32.75B as exports rebounded and oil/gold imports fell. However, the full
                                    year FY26 merchandise deficit widened to $333.19B versus $283.50B in FY25, reflecting the 
                                    structural imbalance. With imports consistently exceeding exports, this persistent deficit 
                                    creates steady structural demand for USD exerting sustained downward pressure on INR.
                                </p>
                            </div>
                            <div className='space-y-4'>
                                <h4 className='text-xl font-bold text-black' style={{ fontFamily: 'PT Serif, serif' }}>Inflation Differential</h4>
                                <p className='text-sm md:text-base text-gray-800 leading-relaxed font-serif' style={{ fontFamily: 'Poppins, serif' }}>
                                    India’s persistent inflation differential of 2–3% above the US, contributes to gradual currency 
                                    depreciation over time (PPP effect).
                                </p>
                            </div>
                        </div>

                        {/* Red Box: US Trade & Gulf Remittance */}
                        <div className='bg-[#FFF5F5] border-l-4 border-[#E53E3E] p-8 md:p-10 space-y-8'>
                            <div className='space-y-4'>
                                <h4 className='text-xl font-bold text-black' style={{ fontFamily: 'PT Serif, serif' }}>US Trade / Tariff Headwind</h4>
                                <p className='text-sm md:text-base text-gray-800 leading-relaxed font-serif' style={{ fontFamily: 'Poppins, serif' }}>
                                    Tariff uncertainty continues to weigh on exports. The February 2026 US-India interim trade 
                                    deal reduced US reciprocal tariffs from 50% to ~18% providing partial relief to sectors 
                                    including textiles & apparel, gems & jewellery, leather, engineering goods, and auto 
                                    components. However, export sectors still face pressure → limiting dollar inflows.
                                </p>
                            </div>
                            <div className='space-y-4'>
                                <h4 className='text-xl font-bold text-black' style={{ fontFamily: 'PT Serif, serif' }}>Gulf Remittance Risk</h4>
                                <p className='text-sm md:text-base text-gray-800 leading-relaxed font-serif' style={{ fontFamily: 'Poppins, serif' }}>
                                    India received $135.4B in remittances in FY25, with Gulf nations (UAE, Saudi Arabia, Qatar) 
                                    supplying ~38% ($51B). Gulf disruptions from the Iran conflict threaten this vital dollar inflow, 
                                    tightening supply and pressuring the rupee.
                                </p>
                            </div>
                        </div>

                        {/* Sources */}
                        <div className='text-[10px] text-gray-500 font-bold uppercase tracking-widest leading-relaxed pt-4' style={{ fontFamily: 'PT Serif,serif' }}>
                            Source: <span className='text-blue-600 underline cursor-pointer'><a href="https://www.moneycontrol.com/news/business/india-s-goods-trade-deficit-narrows-to-20-7-billion-in-march-13889594.html">Money Control</a></span>, <span className='text-blue-600 underline cursor-pointer'><a href="https://economictimes.indiatimes.com/news/economy/foreign-trade/india-trade-deficit-at-27-1-billion-in-february-tariff-uncertainty-iran-conflict-loom/articleshow/129603951.cms">Economic Times</a></span>, <span className='text-blue-600 underline cursor-pointer'><a href="https://www.reuters.com/world/india/foreign-investors-flee-indian-assets-record-pace-oil-shock-pummel-rupee-2026-03-27/">Reuters</a></span>, <span className='text-blue-600 underline cursor-pointer'><a href="https://www.msci.com/documents/10199/1ad792ce-3199-445c-8be3-f2a035ac782d">MSCI</a></span>, <span className='text-blue-600 underline cursor-pointer'><a href="https://www.whitehouse.gov/fact-sheets/2026/02/fact-sheet-the-united-states-and-india-announce-historic-trade-deal/">Whitehouse Factsheet</a></span>, <span className='text-blue-600 underline cursor-pointer'><a href="https://www.business-standard.com/markets/news/fpis-pull-out-60-847-crore-in-april-2026-outflows-hit-1-92-trillion-126050100171_1.html">Business Standard</a></span>
                        </div>
                    </div>

                    <div id='page3' className='space-y-10 pt-16 border-t border-gray-100'>
                        {/* Header */}
                        <div className='flex items-center gap-4'>
                            <div className='bg-[#D4AF37] text-black px-4 py-1 font-bold text-sm'>
                                03
                            </div>
                            <h3 className='text-sm font-bold uppercase tracking-widest text-black'>
                                THE WAR MULTIPLIER
                            </h3>
                        </div>

                        {/* Title & Narrative */}
                        <div className='space-y-6'>
                            <h2 className='text-3xl md:text-4xl font-bold text-black' style={{ fontFamily: 'PT Serif, serif' }}>
                                How the Iran Conflict Turbocharged Existing Weakness
                            </h2>
                            <p className='text-base md:text-lg text-gray-800 leading-relaxed font-serif' style={{ fontFamily: 'Poppins, serif' }}>
                                The rupee was already under pressure before February 28, 2026, having been one of Asia’s weakest 
                                currencies in FY26 and falling about 9.9% through that fiscal year. Foreign portfolio outflows stayed 
                                heavy, while higher oil prices and trade uncertainty kept USD demand elevated. 
                            </p>
                            <p className='text-base md:text-lg text-gray-800 leading-relaxed font-serif' style={{ fontFamily: 'Poppins, serif' }}>
                                The April 2026 US-Iran ceasefire eased the risk of outright escalation, but Strait of Hormuz disruptions 
                                persisted and the US briefly launched ‘Project Freedom’ to secure vessel passage before pausing it as 
                                talks advanced. Oil prices spiked above $116/barrel before easing sharply on May 6, yet the INR still 
                                faces structural pressure from India’s dependence on imported oil. 
                            </p>
                            <div className='text-[10px] text-gray-500 font-bold uppercase tracking-widest leading-relaxed pt-2' style={{ fontFamily: 'PT Serif,serif' }}>
                                Source: <span className='text-blue-600 underline cursor-pointer'><a href="https://economictimes.indiatimes.com/markets/forex/forex-news/rupee-tops-asias-worst-performers-list-with-9-9-slide-in-fy26/articleshow/129938831.cms">Economics Times</a></span>, <span className='text-blue-600 underline cursor-pointer'><a href="https://edition.cnn.com/2026/05/05/energy/oil-price-highest-in-2026-intl-hnk">CNN News</a></span>
                            </div>
                        </div>

                        {/* Chart Section */}
                        <div className='space-y-4 pt-6'>
                            <div className='space-y-1'>
                                <h3 className='text-xl md:text-2xl font-bold text-black' style={{ fontFamily: 'PT Serif, serif' }}>
                                    USD/INR Exchange Rate - The Accelerating Fall
                                </h3>
                                <div className='flex items-center gap-4 text-xs text-gray-500' style={{ fontFamily: 'Poppins, serif' }}>
                                    <div className='flex items-center gap-1'><span className='text-[#D4AF37]'>◆</span> = Normal,</div>
                                    <div className='flex items-center gap-1'><span className='text-[#E53E3E]'>◆</span> = Record Low,</div>
                                    <div className='flex items-center gap-1'><span className='text-[#38A169]'>◆</span> = RBI Bounce</div>
                                </div>
                            </div>

                            {/* Custom Grid Chart */}
                            <div className='w-full border border-gray-800 overflow-x-auto bg-white'>
                                {(() => {
                                    // Chart constants
                                    const COLS = ['May \'25','Jun','Jul','Aug','Sep \'25','Oct','Nov','Dec \'25','Jan \'26','Feb 28','Mar 8','Mar 19','Mar 27','May 15'];
                                    const COLS_BOLD = [4, 7]; // Sep '25, Dec '25 → gold
                                    const COLS_RED = [9, 10, 11, 12, 13]; // Feb 28 onward → red
                                    const WAR_COL = 9; // Feb 28 column index = war start
                                    const Y_MIN = 84, Y_MAX = 96, Y_STEP = 2;
                                    const Y_TICKS = [96, 94, 92, 90, 88, 86, 84]; // top→bottom

                                    // Data points: { col, val, type: 'normal'|'record'|'bounce' }
                                    const dataPoints = [
                                        { col: 0, val: 84, type: 'normal' },
                                        { col: 1, val: 84, type: 'normal' },
                                        { col: 2, val: 84, type: 'normal' },
                                        { col: 3, val: 84, type: 'normal' },
                                        { col: 4, val: 88, type: 'normal' },
                                        { col: 5, val: 87, type: 'normal' },
                                        { col: 6, val: 87, type: 'normal' },
                                        { col: 7, val: 90, type: 'normal' },
                                        { col: 8, val: 88, type: 'normal' },
                                        { col: 9, val: 89, type: 'normal' },
                                        { col: 10, val: 92, type: 'normal' },
                                        { col: 11, val: 93, type: 'normal' },
                                        { col: 12, val: 94, type: 'normal' },
                                        { col: 13, val: 96, type: 'record' },
                                    ];

                                    const BOTTOM_LABELS = {
                                        4: { text: '₹88 ATL', color: '#D4AF37' },
                                        7: { text: '₹90\nbreach', color: '#D4AF37' },
                                        9: { text: 'War', color: '#E53E3E' },
                                        13: { text: '₹95.3 ATH', color: '#E53E3E' },
                                    };

                                    const totalCols = COLS.length;
                                    const totalRows = Y_TICKS.length; // 7
                                    const intervals = totalRows - 1; // 6

                                    // Colors
                                    const cellBg = (type) => type === 'record' ? '#FCA5A5' : '#FEF08A';
                                    const dotColor = (type) => type === 'record' ? '#E53E3E' : '#D4AF37';

                                    // ✅ CHANGED: precise % positioning (replaces valToRowIndex)
                                    const valToTopPct = (val) => ((Y_MAX - val) / (Y_MAX - Y_MIN)) * 100;

                                    // ✅ CHANGED: small tile height instead of full row band
                                    const CELL_H_PCT = 8;

                                    const CHART_H = 180; // px height of grid body

                                    return (
                                        <div style={{ minWidth: '800px' }}>
                                            {/* Column Headers */}
                                            <div className='flex border-b border-gray-200' style={{ paddingLeft: '56px' }}>
                                                {COLS.map((col, i) => (
                                                    <div key={i} className='flex-1 text-center py-3 text-[11px] font-medium'
                                                        style={{
                                                            fontFamily: 'PT Serif, serif',
                                                            color: COLS_RED.includes(i) ? '#E53E3E' : COLS_BOLD.includes(i) ? '#D4AF37' : '#6B7280',
                                                            fontWeight: COLS_RED.includes(i) || COLS_BOLD.includes(i) ? 700 : 400,
                                                        }}>
                                                        {col}
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Chart Body */}
                                            <div className='flex' style={{ height: `${CHART_H}px` }}>
                                                {/* Y-Axis */}
                                                <div className='shrink-0 flex flex-col justify-between border-r border-gray-200 bg-white'
                                                    style={{ width: '56px', padding: '0 4px' }}>
                                                    {Y_TICKS.map((tick) => (
                                                        <span key={tick} className='text-[11px] text-gray-400 font-medium text-right block pr-2'>
                                                            ₹{tick}
                                                        </span>
                                                    ))}
                                                </div>

                                                {/* Grid + Data Points (relative container) */}
                                                <div className='flex-1 relative'>
                                                    {/* War period pink bg (columns WAR_COL → end) */}
                                                    <div className='absolute top-0 bottom-0 bg-[#FFF5F5]' style={{
                                                        left: `${(WAR_COL / totalCols) * 100}%`,
                                                        right: 0,
                                                        zIndex: 0,
                                                    }} />
                                                    {/* Dashed red vertical line at war start */}
                                                    <div className='absolute top-0 bottom-0' style={{
                                                        left: `${(WAR_COL / totalCols) * 100}%`,
                                                        width: '2px',
                                                        borderLeft: '2px dashed #E53E3E',
                                                        zIndex: 2,
                                                    }} />

                                                    {/* Horizontal grid lines */}
                                                    {Y_TICKS.map((_, i) => (
                                                        <div key={i} className='absolute w-full' style={{
                                                            top: `${(i / intervals) * 100}%`,
                                                            height: '1px',
                                                            background: '#E5E7EB',
                                                            zIndex: 1,
                                                        }} />
                                                    ))}

                                                    {/* Data Point Cells */}
                                                    {dataPoints.map((pt, i) => {
                                                        // ✅ CHANGED: use valToTopPct instead of valToRowIndex
                                                        const topPct = valToTopPct(pt.val);
                                                        const leftPct = (pt.col / totalCols) * 100;
                                                        const widthPct = 100 / totalCols;
                                                        return (
                                                            <motion.div
                                                                key={i}
                                                                initial={{ opacity: 0, scale: 0.5 }}
                                                                whileInView={{ opacity: 1, scale: 1 }}
                                                                viewport={{ once: true, margin: '-40px' }}
                                                                transition={{ duration: 0.35, delay: i * 0.06, ease: 'easeOut' }}
                                                                style={{
                                                                    position: 'absolute',
                                                                    // ✅ CHANGED: center small tile on exact Y position
                                                                    top: `calc(${topPct}% - ${CELL_H_PCT / 2}%)`,
                                                                    left: `calc(${leftPct}% + 1px)`,
                                                                    width: `calc(${widthPct}% - 2px)`,
                                                                    // ✅ CHANGED: small tile height (was full row band)
                                                                    height: `${CELL_H_PCT}%`,
                                                                    background: cellBg(pt.type),
                                                                    zIndex: 3,
                                                                    display: 'flex',
                                                                    alignItems: 'center',
                                                                    justifyContent: 'center',
                                                                    borderRadius: '2px',
                                                                }}
                                                            >
                                                                <span style={{ color: dotColor(pt.type), fontSize: '9px', lineHeight: 1 }}>◆</span>
                                                            </motion.div>
                                                        );
                                                    })}
                                                </div>
                                            </div>

                                            {/* Bottom Labels */}
                                            <div className='flex border-t border-gray-200 pt-1 pb-2' style={{ paddingLeft: '56px' }}>
                                                {COLS.map((_, i) => (
                                                    <div key={i} className='flex-1 text-center text-[10px] font-bold leading-tight' style={{
                                                        color: BOTTOM_LABELS[i]?.color || 'transparent',
                                                        fontFamily: 'PT Serif, serif',
                                                        whiteSpace: 'pre-line',
                                                    }}>
                                                        {BOTTOM_LABELS[i]?.text || ''}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    );
                                })()}
                            </div>

                            <div className='text-[10px] text-gray-500 font-bold uppercase tracking-widest pt-2' style={{ fontFamily: 'PT Serif,serif' }}>
                                Source: <span className='text-black underline cursor-pointer'><a href="https://www.bloomberg.com/news/articles/2026-04-01/usd-inr-india-s-rupee-seen-sliding-to-100-per-dollar-as-oil-prices-surge">Bloomberg</a></span>, <span className='text-black underline cursor-pointer'><a href="https://www.hdfcfund.com/learn/deep-dives/tuesday-talking-point/why-indian-rupee-depreciating-against-us-dollar">HDFC Fund</a></span>
                            </div>

                        {/* Channels & Effects */}
                        <div className='space-y-6 pt-10'>
                            <p className='text-base md:text-lg text-gray-800 font-serif' style={{ fontFamily: 'Poppins, serif' }}>
                                The shock transmits through three key channels:
                            </p>
                            <ol className='list-decimal list-inside space-y-4 text-base md:text-lg text-gray-800 font-serif' style={{ fontFamily: 'Poppins, serif' }}>
                                <li className='pl-2'>Higher crude prices raise India's import bill, widen the trade deficit, and increase demand for dollars.</li>
                                <li className='pl-2'>Rising energy costs add to inflation, constraining monetary policy flexibility and limiting INR support.</li>
                                <li className='pl-2'>Global investors turn cautious, leading to capital outflows.</li>
                            </ol>
                            <p className='text-base md:text-lg text-gray-800 font-serif pt-2' style={{ fontFamily: 'Poppins, serif' }}>
                                These effects reinforce each other, creating a cycle that keeps the rupee under pressure until oil prices stabilise.
                            </p>
                        </div>

                        {/* Pull Quote */}
                        <div className='bg-[#FDFBF7] border-l-4 border-[#D4AF37] p-8 md:p-10 my-8'>
                            <p className='text-lg md:text-xl font-serif text-gray-800 leading-relaxed' style={{ fontFamily: 'Poppins, serif' }}>
                                “The dollar-rupee forwards curve is the steepest since 2020, showing that FX traders see 
                                the Indian currency staying weak for an extended period.”
                            </p>
                            <p className='text-sm text-gray-400 mt-4 font-serif' style={{ fontFamily: 'Poppins, serif' }}>
                                - Mark Cranfield, Markets Live Strategist, Bloomberg
                            </p>
                        </div>
                    </div>

                    <div id='page4' className='space-y-10 pt-16 border-t border-gray-100'>
                        {/* Header */}
                        <div className='flex items-center gap-4'>
                            <div className='bg-[#D4AF37] text-black px-4 py-1 font-bold text-sm'>
                                04
                            </div>
                            <h3 className='text-sm font-bold uppercase tracking-widest text-black'>
                                RBI VS MARKETS
                            </h3>
                        </div>

                        {/* Title & Narrative */}
                        <div className='space-y-6'>
                            <h2 className='text-3xl md:text-4xl font-bold text-black' style={{ fontFamily: 'PT Serif, serif' }}>
                                Five Interventions. One Brief Bounce. And Then Reality.
                            </h2>
                            <p className='text-base md:text-lg text-gray-800 leading-relaxed font-serif' style={{ fontFamily: 'Poppins, serif' }}>
                                RBI intervention has addressed symptoms rather than structural causes, slowing the pace of 
                                depreciation at key moments, but leaving the underlying demand-supply imbalance in the currency 
                                market unresolved. 
                            </p>
                            <p className='text-base md:text-lg text-gray-800 leading-relaxed font-serif' style={{ fontFamily: 'Poppins, serif' }}>
                                The Reserve Bank intervened actively across this period, deploying what NDTV described as one of its 
                                most significant intervention phases in recent years. The rupee's biggest single-day gain in 12 years 
                                (a ~1.3% jump to ₹93.53 on a single Thursday) followed these measures. The move proved temporary; 
                                selling pressure resumed within hours, confirming that technical intervention cannot substitute for 
                                resolution of the structural forces driving dollar demand. 
                            </p>
                        </div>

                        {/* Intervention Table */}
                        <div className='w-full overflow-x-auto border border-gray-200'>
                            <table className='w-full text-left border-collapse'>
                                <thead>
                                    <tr className='bg-[#1A1A1A] text-[#D4AF37]'>
                                        <th className='p-4 text-sm font-bold uppercase tracking-wider border-r border-gray-700'>RBI Measure</th>
                                        <th className='p-4 text-sm font-bold uppercase tracking-wider'>Objective & Outcome</th>
                                    </tr>
                                </thead>
                                <tbody className='text-sm text-gray-800 font-serif' style={{ fontFamily: 'Poppins, serif' }}>
                                    {[
                                        { measure: "$100M cap on bank FX positions", outcome: "Forces banks to unwind large rupee bets; triggered a sharp short squeeze." },
                                        { measure: "Ban on rupee NDFs (offshore)", outcome: "Cuts offshore arbitrage route between onshore/offshore price gaps." },
                                        { measure: "No re-booking cancelled forwards", outcome: "Removes loop of cancel → re-book → profit on rate moves." },
                                        { measure: "No FX trades with related parties", outcome: "Closes affiliate loophole used to move internal losses" },
                                        { measure: "Genuine hedging proof required", outcome: "Restricts speculative activity: all contracts need real underlying exposure." }
                                    ].map((row, i) => (
                                        <tr key={i} className='border-b border-gray-200 hover:bg-gray-50 transition-colors'>
                                            <td className='p-4 border-r border-gray-200 font-bold bg-gray-50/50'>{row.measure}</td>
                                            <td className='p-4'>{row.outcome}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className='text-[10px] text-gray-500 font-bold uppercase tracking-widest pt-2' style={{ fontFamily: 'PT Serif,serif' }}>
                            Source: <span className='text-blue-600 underline cursor-pointer'><a href="https://www.moneycontrol.com/news/currency/india-s-forex-reserves-drop-7-billion-to-709-76-billion-rbi-13866232.html">Bloomberg</a></span>, <span className='text-blue-600 underline cursor-pointer'><a href="https://www.reuters.com/world/india/indias-forex-reserves-sufficient-not-matter-concern-rbi-governor-says-2026-04-08/">NDTV</a></span>
                        </div>

                        {/* Reserves Section */}
                        <div className='space-y-6 pt-6'>
                            <p className='text-base md:text-lg text-gray-800 leading-relaxed font-serif' style={{ fontFamily: 'Poppins, serif' }}>
                                The RBI has continued to use reserves as a buffer, with spot-market intervention cited at a net $50.8 
                                billion from April 2025 to January 2026. India’s foreign exchange reserves were about $697.1 billion as 
                                of April 3, 2026, rose to $703.3 billion by April 17, 2026, and were described by the government as 
                                providing roughly 11 months of import cover. Continued intervention can still erode this cushion, even 
                                though reserves remain comfortably above earlier stress levels. 
                            </p>
                            <div className='text-[10px] text-gray-500 font-bold uppercase tracking-widest pt-2' style={{ fontFamily: 'PT Serif,serif' }}>
                                Source: <span className='text-blue-600 underline cursor-pointer'><a href="#">Money Control</a></span>, <span className='text-blue-600 underline cursor-pointer'><a href="#">Reuters</a></span>
                            </div>
                        </div>

                        {/* Callout Quote */}
                        <div className='bg-[#FDFBF7] border border-[#D4AF37]/30 p-8 md:p-10 my-8'>
                            <h4 className='text-sm font-bold uppercase tracking-widest text-[#D4AF37] mb-6'>
                                THE LIMITS OF INTERVENTION
                            </h4>
                            <p className='text-lg md:text-xl font-serif text-gray-800 leading-relaxed' style={{ fontFamily: 'Poppins, serif' }}>
                                "100 per dollar is no longer a tail risk, it is a credible stress scenario if current conditions 
                                persist. The latest measures look more like short-term stabilisation tools than a structural 
                                solution."
                            </p>
                            <p className='text-sm text-gray-400 mt-6 font-serif' style={{ fontFamily: 'Poppins, serif' }}>
                                -Ahmed Azzam, Head of Financial Market Research, Equiti Group
                            </p>
                        </div>
                    </div>

                    <div id='page5' className='space-y-10 pt-16 border-t border-gray-100'>
                        {/* Header */}
                        <div className='flex items-center gap-4'>
                            <div className='bg-[#D4AF37] text-black px-4 py-1 font-bold text-sm'>
                                05
                            </div>
                            <h3 className='text-sm font-bold uppercase tracking-widest text-black'>
                                MARKET IMPACT
                            </h3>
                        </div>

                        {/* Title & Narrative */}
                        <div className='space-y-6'>
                            <h2 className='text-3xl md:text-4xl font-bold text-black' style={{ fontFamily: 'PT Serif, serif' }}>
                                The Sector Split
                            </h2>
                            <p className='text-base md:text-lg text-gray-800 leading-relaxed font-serif' style={{ fontFamily: 'Poppins, serif' }}>
                                Not everyone suffers when the rupee falls. Currency movements create winners and losers across 
                                India’s listed market and understanding sector impact is as important as understanding the macro 
                                drivers.
                            </p>
                        </div>

                        {/* Winners & Losers Grid */}
                        <div className='grid grid-cols-1 md:grid-cols-2 border border-gray-200'>
                            {/* Winners Column */}
                            <div className='flex flex-col border-b md:border-b-0 md:border-r border-gray-200'>
                                <div className='bg-[#F0FFF4] p-4 border-b border-gray-200'>
                                    <h4 className='text-sm font-bold text-[#2F855A] uppercase tracking-wider'>
                                        WINNERS - Weaker Rupee Benefits
                                    </h4>
                                </div>
                                <div className='divide-y divide-gray-100'>
                                    {[
                                        { title: "IT Services", desc: "Earn in USD, spend in INR. Direct margin boost." },
                                        { title: "Pharmaceuticals", desc: "Export-heavy; dollar revenues translate into higher INR earnings." },
                                        { title: "Specialty Chemicals", desc: "USD-linked contracts; weaker rupee supports margins." },
                                        { title: "Metal Exporters", desc: "Steel, aluminium globally USD-priced, higher INR realisations." }
                                    ].map((item, idx) => (
                                        <div key={idx} className='p-6 hover:bg-gray-50 transition-colors'>
                                            <p className='text-sm md:text-base font-serif text-gray-800 leading-relaxed' style={{ fontFamily: 'Poppins, serif' }}>
                                                <span className='font-bold'>{item.title}:</span> {item.desc}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Losers Column */}
                            <div className='flex flex-col'>
                                <div className='bg-[#FFF5F5] p-4 border-b border-gray-200'>
                                    <h4 className='text-sm font-bold text-[#C53030] uppercase tracking-wider'>
                                        LOSERS - Weaker Rupee Hurts
                                    </h4>
                                </div>
                                <div className='divide-y divide-gray-100'>
                                    {[
                                        { title: "Aviation", desc: "Aircraft leases, fuel, all dollar-linked. Hardest hit." },
                                        { title: "Oil Marketing Cos (OMCs)", desc: "Crude priced in USD; raw material costs surge." },
                                        { title: "Paints", desc: "Import-dependent inputs (titanium dioxide & resins); margins under pressure." },
                                        { title: "Auto Components", desc: "Imported chips/parts; immediate cost pressure." }
                                    ].map((item, idx) => (
                                        <div key={idx} className='p-6 hover:bg-gray-50 transition-colors'>
                                            <p className='text-sm md:text-base font-serif text-gray-800 leading-relaxed' style={{ fontFamily: 'PT Serif, serif' }}>
                                                <span className='font-bold'>{item.title}:</span> {item.desc}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Positioning Callout */}
                        <div className='bg-[#FDFBF7] border border-[#D4AF37]/30 p-8 md:p-10 my-8'>
                            <h4 className='text-sm font-bold uppercase tracking-widest text-[#D4AF37] mb-6'>
                                POSITIONING IN A WEAK RUPEE ENVIRONMENT
                            </h4>
                            <p className='text-base md:text-lg text-gray-800 leading-relaxed font-serif' style={{ fontFamily: 'Poppins, serif' }}>
                                In a falling rupee environment, exporters (such as IT and pharma) and domestic-focused 
                                defensives primarily FMCG and healthcare tend to be relatively better positioned. 
                                International exposure can act as a natural hedge, as global assets rise in rupee terms 
                                when the currency weakens. In contrast, import-dependent sectors often face cost 
                                pressures. Companies with natural hedges (where dollar revenues offset dollar costs) 
                                typically remain more resilient through such phases.
                            </p>
                        </div>

                        {/* Source */}
                        <div className='text-[10px] text-gray-500 font-bold uppercase tracking-widest pt-2' style={{ fontFamily: 'PT Serif,serif' }}>
                            Source: <span className='text-blue-600 underline cursor-pointer'><a href="https://www.icicidirect.com/research/equity/finace/impact-of-usd-inr-exchange-rates-on-indian-markets">ICICI Report</a></span>, <span className='text-blue-600 underline cursor-pointer'><a href="https://www.bajajfinserv.in/usd-vs-inr-why-indian-rupee-falling-against-us-dollar">Bajaj Finserv</a></span>
                        </div>
                    </div>

                    <div id='page6' className='space-y-10 pt-16 border-t border-gray-100 pb-20'>
                        {/* Header */}
                        <div className='flex items-center gap-4'>
                            <div className='bg-[#D4AF37] text-black px-4 py-1 font-bold text-sm'>
                                06
                            </div>
                            <h3 className='text-sm font-bold uppercase tracking-widest text-black'>
                                THE ₹100 QUESTION
                            </h3>
                        </div>

                        {/* Title & Narrative */}
                        <div className='space-y-6'>
                            <h2 className='text-3xl md:text-4xl font-bold text-black' style={{ fontFamily: 'PT Serif, serif' }}>
                                A Number Once Unthinkable. Now a Market Probability.
                            </h2>
                            <p className='text-base md:text-lg text-gray-800 leading-relaxed font-serif' style={{ fontFamily: 'Poppins, serif' }}>
                                As of early May 2026, Bloomberg-linked market moves show USD/INR trading near record highs around 
                                95.4, but the April 8 ceasefire, easing oil prices, and RBI currency measures likely reduced the market-
                                implied probability of a move to ₹100/USD versus late-April levels. These probabilities are market-
                                implied, not forecasts
                            </p>
                        </div>

                        {/* Graph 1: Bar Chart */}
                        <div className='space-y-2 pt-4'>
                            <h3 className='text-xl font-bold text-black' style={{ fontFamily: 'PT Serif, serif' }}>
                                Options-implied probability by date (Bloomberg data, as of Early April 2026)
                            </h3>
                            <div className='w-full border border-gray-300 bg-white p-6 relative mt-4'>
                                <h4 className='text-center text-lg font-serif mb-8' style={{ fontFamily: 'Poppins, serif' }}>
                                    Market Probability of USD/INR Reaching ₹100
                                </h4>
                                <div className='relative h-[250px] w-full flex pr-4'>
                                    {/* Y-axis */}
                                    <div className='flex flex-col justify-between h-full text-xs text-gray-600 font-bold pr-4 w-12 text-right'>
                                        <span>50%</span>
                                        <span>40%</span>
                                        <span>30%</span>
                                        <span>20%</span>
                                        <span>10%</span>
                                        <span>0%</span>
                                    </div>
                                    {/* Chart Area */}
                                    <div className='relative flex-1 border-l border-b border-gray-300 flex items-end justify-around pb-0'>
                                        {/* Horizontal grid lines */}
                                        <div className='absolute inset-0 flex flex-col justify-between pointer-events-none'>
                                            {[...Array(6)].map((_, i) => (
                                                <div key={i} className={`w-full h-px ${i === 5 ? 'bg-transparent' : 'bg-gray-100'}`} />
                                            ))}
                                        </div>
                                        {/* Bars */}
                                        {[
                                            { label: 'By end of April 2026', val: 6, color: '#FDE68A' },
                                            { label: 'By end of June 2026', val: 13, color: '#D4AF37' },
                                            { label: 'By September 2026', val: 28, color: '#C05621' },
                                            { label: 'By year-end 2026', val: 41, color: '#7B341E' }
                                        ].map((bar, i) => (
                                            <div key={i} className='relative w-16 md:w-24 h-full flex flex-col justify-end items-center z-10 group'>
                                                <span className='text-xs font-bold text-gray-800 mb-2'>
                                                    {bar.val}%
                                                </span>
                                                <motion.div
                                                    initial={{ height: 0 }}
                                                    whileInView={{ height: `${(bar.val / 50) * 100}%` }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 1, ease: 'easeOut', delay: i * 0.1 }}
                                                    className='w-full shadow-sm'
                                                    style={{ backgroundColor: bar.color }}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                {/* X-axis labels */}
                                <div className='flex ml-12 text-[10px] md:text-xs font-bold text-gray-800 mt-4 justify-around'>
                                    <div className='text-center w-16 md:w-24'>By end of April 2026</div>
                                    <div className='text-center w-16 md:w-24'>By end of June 2026</div>
                                    <div className='text-center w-16 md:w-24'>By September 2026</div>
                                    <div className='text-center w-16 md:w-24'>By year-end 2026</div>
                                </div>
                            </div>
                            <div className='text-[10px] text-gray-500 font-bold uppercase tracking-widest pt-2' style={{ fontFamily: 'PT Serif,serif' }}>
                                Source: <span className='text-black underline cursor-pointer'><a href="https://www.bloomberg.com/news/articles/2026-04-01/usd-inr-india-s-rupee-seen-sliding-to-100-per-dollar-as-oil-prices-surge">Bloomberg</a></span>
                            </div>
                        </div>

                        {/* Narrative */}
                        <div className='space-y-6 pt-6'>
                            <p className='text-base md:text-lg text-gray-800 leading-relaxed font-serif' style={{ fontFamily: 'Poppins, serif' }}>
                                India retains important structural strengths. Forex reserves remain high at about $698.5 billion as of 
                                late April 2026, still providing a sizable external buffer, while official reporting has described reserve 
                                adequacy as roughly 11 months of import cover. The banking system is also well capitalised, with SCB 
                                CRAR at 17.4% and PSB CRAR at 16.4%, which lowers the risk of currency volatility causing wider financial 
                                instability. Current rupee pressure is therefore mostly external rather than a sign of domestic stress.
                            </p>
                            <div className='text-[10px] text-gray-500 font-bold uppercase tracking-widest pt-2' style={{ fontFamily: 'PT Serif,serif' }}>
                                Source: <span className='text-black underline cursor-pointer'><a href="https://tradingeconomics.com/india/foreign-exchange-reserves">Trading Economics</a></span>
                            </div>
                        </div>

                        {/* Graph 2: Line Chart */}
                        <div className='space-y-2 pt-6'>
                            <h3 className='text-xl font-bold text-black' style={{ fontFamily: 'PT Serif, serif' }}>
                                India Forex Reserves Trend
                            </h3>
                            <div className='w-full border border-gray-400 bg-white p-6 relative mt-4 overflow-hidden'>
                                <h4 className='text-center text-lg font-serif mb-10' style={{ fontFamily: 'PT Serif, serif' }}>
                                    India's Forex Reserves - Peak and Recent Drawdown
                                </h4>

                                <div className='relative h-[250px] w-full flex pr-4'>
                                    {/* Y-axis */}
                                    <div className='flex flex-col justify-between h-full text-[13px] text-gray-500 font-medium pr-4 w-16 text-right'>
                                        <span>$800B</span>
                                        <span>$600B</span>
                                        <span>$400B</span>
                                        <span>$200B</span>
                                        <span>$0B</span>
                                    </div>

                                    {/* Chart Area */}
                                    <div className='relative flex-1' id='forex-chart-area'>
                                        {/* Horizontal baseline at 100% (Y=0) extending left below Y-axis */}
                                        <div
                                            className='absolute'
                                            style={{ top: '100%', left: '-64px', width: 'calc(100% + 64px)', height: '1px', background: '#E5E7EB' }}
                                        />

                                        {/* SVG — uses 1000×250 coordinate space, stretched to fill container */}
                                        <svg
                                            className='absolute inset-0 w-full h-full'
                                            viewBox='0 0 1000 250'
                                            preserveAspectRatio='none'
                                        >
                                            <motion.polyline
                                                initial={{ pathLength: 0 }}
                                                whileInView={{ pathLength: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 2, ease: 'easeInOut' }}
                                                fill='none'
                                                stroke='#FFC000'
                                                strokeWidth='4'
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                points='0,248 143,238 286,188 429,178 571,52 714,47 857,23 1000,32'
                                            />
                                        </svg>

                                        {/* Peak dot — $728B at Feb-26 (x=85.7%) */}
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            whileInView={{ scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 1.8, type: 'spring', stiffness: 200 }}
                                            style={{
                                                position: 'absolute',
                                                left: '85.7%',
                                                top: `${(800 - 754) / 800 * 100}%`,
                                                width: '16px',
                                                height: '16px',
                                                borderRadius: '50%',
                                                background: '#B8900D',
                                                transform: 'translate(-50%, -50%)',
                                            }}
                                        >
                                            <div style={{
                                                position: 'absolute',
                                                top: '-24px',
                                                left: '50%',
                                                transform: 'translateX(-50%)',
                                                fontSize: '13px',
                                                fontWeight: 500,
                                                color: '#4B5563',
                                                whiteSpace: 'nowrap',
                                            }}>
                                                $728B
                                            </div>
                                        </motion.div>

                                        {/* Current dot — $698B at Apr-26 (x=100%) */}
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            whileInView={{ scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 2.0, type: 'spring', stiffness: 200 }}
                                            style={{
                                                position: 'absolute',
                                                left: '100%',
                                                top: `${(800 - 720) / 800 * 100}%`,
                                                width: '16px',
                                                height: '16px',
                                                borderRadius: '50%',
                                                background: '#C25114',
                                                transform: 'translate(-50%, -50%)',
                                            }}
                                        >
                                            <div style={{
                                                position: 'absolute',
                                                top: '-24px',
                                                left: '50%',
                                                transform: 'translateX(-50%)',
                                                fontSize: '13px',
                                                fontWeight: 500,
                                                color: '#4B5563',
                                                whiteSpace: 'nowrap',
                                            }}>
                                                $698B
                                            </div>
                                        </motion.div>
                                    </div>
                                </div>

                                {/* X-axis labels (Absolutely positioned for exact alignment) */}
                                <div className='relative ml-16 h-6 mt-4'>
                                    {['\'1991', '\'2000', '\'2008', '\'2013', '\'2021', '\'2024', '\'Feb-26', 'Apr-26'].map((label, idx) => (
                                        <div key={label} className='absolute' style={{ left: `${(idx / 7) * 100}%`, transform: 'translateX(-50%)' }}>
                                            <span className='text-[13px] text-gray-500 font-medium whitespace-nowrap'>{label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className='text-[10px] text-gray-500 font-bold uppercase tracking-widest pt-2' style={{ fontFamily: 'PT Serif, serif' }}>
                                Source: <span className='text-black underline cursor-pointer'><a href='https://www.reuters.com/world/india/india-forex-reserves-adequate-cushion-against-external-shocks-cenbank-report-2026-03-23/'>Reuters</a></span>
                            </div>
                            <p className='text-base md:text-lg text-gray-800 leading-relaxed font-serif pt-2' style={{ fontFamily: 'PT Serif, serif' }}>
                                Despite recent drawdown, reserves remain near historic highs, providing a cushion against external shocks.
                            </p>
                        </div>

                        {/* Scenarios Table */}
                        <div className='space-y-4 pt-10'>
                            <h3 className='text-xl md:text-2xl font-bold text-black' style={{ fontFamily: 'PT Serif, serif' }}>
                                Possible Scenarios for the Rupee
                            </h3>
                            <p className='text-sm italic text-gray-600 pb-2' style={{ fontFamily: 'Poppins, serif' }}>
                                Scenario triggers reflect conditions as of recent ceasefire developments. These are illustrative conditions, not forecasts.
                            </p>
                            
                            <div className='grid grid-cols-1 md:grid-cols-3 border border-gray-200' style={{fontFamily: 'Poppins, serif'}}>
                                {/* BEAR CASE */}
                                <div className='flex flex-col border-b md:border-b-0 md:border-r border-gray-200' >
                                    <div className='bg-[#FEE2E2] p-3 border-b border-gray-200'>
                                        <h4 className='text-xs font-bold text-gray-800 uppercase tracking-wider'>
                                            BEAR CASE
                                        </h4>
                                    </div>
                                    <div className='p-4 space-y-4 flex-1' style={{fontFamily: 'Poppins, serif'}}>
                                        <div style={{fontFamily: 'Poppins, serif'}}>
                                            <h5 className='font-bold text-sm text-black mb-2' style={{fontFamily: 'Poppins, serif'}}>War Re-escalates → ₹100+ risk</h5>
                                            <p className='text-xs text-gray-800 font-serif leading-relaxed' style={{fontFamily: 'Poppins, serif'}}>
                                                If the ceasefire breaks down and crude re-spikes, USD/INR could test ₹100, driven by renewed oil pressure and capital outflows.
                                            </p>
                                        </div>
                                        <div style={{fontFamily: 'Poppins, serif'}}>
                                            <h6 className='text-[10px] font-bold uppercase tracking-wider mb-2' style={{fontFamily: 'Poppins, serif'}}>TRIGGERS</h6>
                                            <ul className='list-disc pl-4 text-xs text-gray-800 font-serif space-y-1.5' style={{fontFamily: 'Poppins, serif'}}>
                                                <li>Ceasefire fails; crude rebounds above $110-$115/barrel</li>
                                                <li>FII outflows accelerate beyond</li>
                                                <li>Fed leaves rates unchanged in June and delays cuts</li>
                                                <li>Middle East tension widens again</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* BASE CASE */}
                                <div className='flex flex-col border-b md:border-b-0 md:border-r border-gray-200' style={{fontFamily: 'Poppins, serif'}}>
                                    <div className='bg-[#FFEDD5] p-3 border-b border-gray-200' style={{fontFamily: 'Poppins, serif'}}>
                                        <h4 className='text-xs font-bold text-gray-800 uppercase tracking-wider' style={{fontFamily: 'Poppins, serif'}}>
                                            BASE CASE
                                        </h4>
                                    </div>
                                    <div className='p-4 space-y-4 flex-1' style={{fontFamily: 'Poppins, serif'}}>
                                        <div style={{fontFamily: 'Poppins, serif'}}>
                                            <h5 className='font-bold text-sm text-black mb-2' style={{fontFamily: 'Poppins, serif'}}>Tension Ease, Rupee stays soft</h5>
                                            <p className='text-xs text-gray-800 font-serif leading-relaxed' style={{fontFamily: 'Poppins, serif'}}>
                                                Even if geopolitical risks fade, the rupee may remain under pressure from FII selling, the trade deficit, and RBI intervention.
                                            </p>
                                        </div>
                                        <div style={{fontFamily: 'Poppins, serif'}}>
                                            <h6 className='text-[10px] font-bold uppercase tracking-wider mb-2' style={{fontFamily: 'Poppins, serif'}}>TRIGGERS</h6>
                                            <ul className='list-disc pl-4 text-xs text-gray-800 font-serif space-y-1.5' style={{fontFamily: 'Poppins, serif'}}>
                                                <li>Crude stabilises in the range bound of $95–$110</li>
                                                <li>FII selling moderates; DII flows absorb pressure</li>
                                                <li>US-India trade deal remains in force</li>
                                                <li>RBI intervention caps volatility</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* BULL CASE */}
                                <div className='flex flex-col' style={{fontFamily: 'Poppins, serif'}}>
                                    <div className='bg-[#DCFCE7] p-3 border-b border-gray-200' style={{fontFamily: 'Poppins, serif'}}>
                                        <h4 className='text-xs font-bold text-gray-800 uppercase tracking-wider' style={{fontFamily: 'Poppins, serif'}}>
                                            BULL CASE
                                        </h4>
                                    </div>
                                    <div className='p-4 space-y-4 flex-1' style={{fontFamily: 'Poppins, serif'}}>
                                        <div style={{fontFamily: 'Poppins, serif'}}>
                                            <h5 className='font-bold text-sm text-black mb-2' style={{fontFamily: 'Poppins, serif'}}>India-US Trade Deal Stabilises</h5>
                                            <p className='text-xs text-gray-800 font-serif leading-relaxed' style={{fontFamily: 'Poppins, serif'}}>
                                                A lasting ceasefire, softer oil, and stronger inflows could help the rupee stabilise below recent highs, requiring external improvement.
                                            </p>
                                        </div>
                                        <div style={{fontFamily: 'Poppins, serif'}}>
                                            <h6 className='text-[10px] font-bold uppercase tracking-wider mb-2' style={{fontFamily: 'Poppins, serif'}}>TRIGGERS</h6>
                                            <ul className='list-disc pl-4 text-xs text-gray-800 font-serif space-y-1.5' style={{fontFamily: 'Poppins, serif'}}>
                                                <li>Oil retreats on ceasefire or demand destruction</li>
                                                <li>Fed delivers 2+ cuts in H2 2026</li>
                                                <li>FII flows return on EM re-rating</li>
                                                <li>Current account deficit narrows materially</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='text-[10px] text-gray-500 font-bold uppercase tracking-widest pt-2' style={{ fontFamily: 'PT Serif,serif' }}>
                                Source: <span className='text-blue-600 underline cursor-pointer'><a href="https://www.reuters.com/world/india/indian-rupee-hits-record-low-mideast-war-rattles-markets-stokes-economic-risks-2026-03-04/">Reuters</a></span>, <span className='text-blue-600 underline cursor-pointer'><a href="https://www.business-standard.com/markets/news/fpis-pull-out-60-847-crore-in-april-2026-outflows-hit-1-92-trillion-126050100171_1.html">Business Standard</a></span>, <span className='text-blue-600 underline cursor-pointer'><a href="https://www.reuters.com/business/energy/us-crude-eases-1-traders-weigh-supply-risks-2026-05-04/">Reuters</a></span>
                            </div>
                        </div>

                        {/* Market Implications */}
                        <div className='bg-[#FDFBF7] border-l-4 border-[#D4AF37] p-8 md:p-10 my-10' style={{fontFamily: 'Poppins, serif'}}>
                            <h4 className='text-sm font-bold uppercase tracking-widest text-[#D4AF37] mb-6' style={{fontFamily: 'PT Serif, serif'}}>
                                MARKET IMPLICATIONS
                            </h4>
                            <ol className='list-decimal pl-4 space-y-4 text-sm md:text-base text-gray-800 font-serif leading-relaxed' style={{ fontFamily: 'Poppins, serif' }}>
                                <li style={{fontFamily: 'Poppins, serif'}}>In prior INR depreciation cycles, companies with USD revenues - IT services, pharma exporters, specialty chemicals have historically experienced natural earnings support as the rupee weakens.</li>
                                <li style={{fontFamily: 'Poppins, serif'}}>Import-intensive businesses - aviation, oil marketing companies, and companies with significant dollar-denominated input costs have historically faced margin compression in the same periods.</li>
                                <li style={{fontFamily: 'Poppins, serif'}}>Companies with natural hedges (dollar revenues broadly matching dollar costs) have shown more stable earnings through currency stress relative to purely domestic peers.</li>
                                <li style={{fontFamily: 'Poppins, serif'}}>Historically, foreign assets have tended to rise in INR terms during periods of rupee weakness, reflecting currency translation effects.</li>
                            </ol>
                        </div>

                        {/* Final Quote */}
                        <div className='text-center space-y-2 mb-16'>
                            <p className='text-lg md:text-[18px] font-serif text-gray-800 leading-relaxed' style={{ fontFamily: 'Poppins, serif' }}>
                                “The rupee will turn one day, but it won’t be dictated by the RBI - it’ll be determined by markets”
                            </p>
                            <p className='text-xs text-gray-400 font-serif' style={{ fontFamily: 'Poppins, serif' }}>
                                — Nick Twidale, AT Global Markets (Bloomberg, April 2026)
                            </p>
                        </div>

                        {/* Disclaimer */}
                        <div className='border-t border-gray-200 pt-8 space-y-4'>
                            <h4 className='font-bold text-sm text-black'>Disclaimer</h4>
                            <p className='text-xs italic text-black font-serif leading-relaxed' style={{ fontFamily: 'PT Serif, serif' }}>
                                Mutual fund investments are subject to market risks. Please read the scheme information and other 
                                related documents carefully before investing. Past performance is not indicative of future returns. 
                                Please consider your specific investment requirements before choosing a fund or designing a portfolio 
                                that suits your needs.
                            </p>
                            <p className='text-xs italic text-black font-serif leading-relaxed' style={{ fontFamily: 'PT Serif, serif' }}>
                                TieVista is the brand name of IndusArtha Financial Services Private Limited, (with ARN code 342010 
                                and APRN code 07336) makes no warranties or representations, express or implied, on products offered 
                                through the platform. It accepts no liability for any damages or losses, however caused, in connection 
                                with the use of, or on the reliance of its product or related services.
                            </p>
                            <p className='text-xs italic text-gray-600 font-serif leading-relaxed' style={{ fontFamily: 'PT Serif, serif' }}>
                                The data presented in this document is based on sources as mentioned and Tievista is not presenting its 
                                own views or recommendation.
                            </p>
                        </div>
                    </div>
                </div>
                    
                </div>
            </div>
        </>
    )
}

export default TheRupeeLongestFall;
