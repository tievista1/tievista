import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const GOLD = '#D4AF37'
const CHARCOAL = '#1A1A1A'

const DeclutteringtheNoiseAround = () => {

    const blog = {
        id: 1,
        title: "Decluttering the Noise Around",
        goldtitle: "US Private Credit Crisis",
        description: "Private Credit expanded rapidly after 2008, when banks were forced to pull back from risky lending. It now faces a crucial test.",
        img: "https://res.cloudinary.com/dr1u4plse/image/upload/v1774960590/US_CRISIS_bpyyrp.png",
        url: "/blogs/decluttering-the-noise-around",
        date: "March 28, 2026"
    }

    const heroRef = useRef(null)
    const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] })
    const heroY = useTransform(scrollYProgress, [0, 1], [0, 300])
    const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
    return (
        <>
            <div className='min-h-screen w-full' style={{ fontFamily: "PT Serif,serif" }}>
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
                            style={{ fontFamily: 'PT Serif, serif' }}
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

                    <div id="page1" className="space-y-16">
                        {/* 4-Stat Grid (Refactored to Flex) */}
                        <div className='w-full'>
                            <div className='flex flex-wrap md:flex-nowrap border border-gray-100 bg-[#FDFBF7] shadow-sm'>
                                {[
                                    { value: "$3.5T", label: "Global market size (end-2025)" },
                                    { value: "40%", label: "Borrowers have negative free cash flow" },
                                    { value: "4-5%", label: "US adjusted default rate" },
                                    { value: "~8%", label: "Payment-in-kind (PIK) income deferred" }
                                ].map((stat, idx) => (
                                    <div key={idx} className={`p-8 flex flex-col items-center text-center flex-1 border-gray-100 ${idx !== 0 ? 'md:border-l' : ''} ${idx >= 2 ? 'border-t md:border-t-0 w-1/2 md:w-auto' : 'w-1/2 md:w-auto'}`}>
                                        <span className='text-3xl lg:text-5xl font-bold mb-4' style={{ color: GOLD, fontFamily: 'PT Serif, serif' }}>
                                            {stat.value}
                                        </span>
                                        <span className='text-[10px] lg:text-xs font-bold text-gray-500 uppercase tracking-widest leading-relaxed max-w-[140px]' style={{ fontFamily: 'PT Serif, serif' }}>
                                            {stat.label}
                                        </span>
                                    </div>
                                ))}
                            </div>
                            <div className='mt-3 text-[10px] text-black font-bold uppercase tracking-widest' style={{ fontFamily: 'PT Serif,serif' }}>
                                Source: <span className='text-black underline cursor-pointer'><a href="https://www.ey.com/en_gl/private-equity/private-credit-is-at-a-tipping-point" target='_blank'>EY H2 2025</a></span>
                            </div>
                        </div>

                        {/* Section 01 */}
                        <div className='space-y-8'>
                            <div className='space-y-2'>
                                <h3 className='text-xl md:text-2xl font-bold uppercase tracking-tight' style={{ color: GOLD, fontFamily: 'PT Serif, serif' }}>
                                    01. WHAT IS HAPPENING
                                </h3>
                                <p className='text-lg md:text-xl text-gray-800 leading-relaxed font-light font-serif max-w-5xl' style={{ fontFamily: 'PT Serif,serif' }}>
                                    Private Credit expanded rapidly after 2008, when banks were forced to pull back from risky lending. This worked well for over a decade when returns were steady and risk seemed contained. Then came high interest rates, slowing global growth, and 2026 arrived as the first real stress test this $3.5 trillion market has ever faced.
                                </p>
                            </div>

                            {/* Chart Section */}
                            <div className='space-y-6 pt-8'>
                                <h4 className='text-xl md:text-2xl font-bold tracking-tight' style={{ fontFamily: 'PT Serif, serif' }}>
                                    Global Private Credit Market Size
                                </h4>

                                <div className='w-full border border-gray-200 bg-white p-8 md:p-12'>
                                    <h5 className='text-center text-sm md:text-base font-bold text-black mb-12 uppercase tracking-wide' style={{ fontFamily: 'PT Serif, serif' }}>
                                        Assets Under Management (US$ Trillion), 2020–2029E
                                    </h5>

                                    <div className='relative px-4 md:px-12'>
                                        {/* Chart Area */}
                                        <div className='relative h-[320px] w-full flex items-end justify-around'>

                                            {/* Y-axis grid lines */}
                                            <div className='absolute inset-0 flex flex-col justify-between pointer-events-none'>
                                                {[6, 5, 4, 3, 2, 1, 0].map((val, idx) => (
                                                    <div key={val} className='relative w-full flex items-center h-0'>
                                                        <div className={`absolute left-0 right-0 h-px ${idx === 6 ? 'bg-gray-300' : 'bg-gray-100'}`} />
                                                        <span className='absolute -left-12 text-[10px] font-bold text-black w-8 text-right transform -translate-y-1/2'>
                                                            ${val}T
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Bars */}
                                            {[
                                                { val: 2, year: "2020", isSpecial: false },
                                                { val: 3, year: "2025 (Start)", isSpecial: false },
                                                { val: 3.5, year: "2025 (End)", isSpecial: false },
                                                { val: 5.0, year: "2029E", isSpecial: true }
                                            ].map((bar, idx) => (
                                                <div key={idx} className='flex flex-col items-center justify-end h-full z-10' style={{ width: '18%' }}>
                                                    <span className='text-sm font-bold text-black mb-2'>{bar.val}</span>
                                                    <motion.div
                                                        initial={{ height: 0 }}
                                                        whileInView={{ height: `${(bar.val / 6) * 320}px` }}
                                                        viewport={{ once: true }}
                                                        transition={{ duration: 1, ease: 'easeOut', delay: idx * 0.1 }}
                                                        className='w-full shadow-sm'
                                                        style={{ background: bar.isSpecial ? '#B8860B' : '#F4D03F' }}
                                                    />
                                                </div>
                                            ))}
                                        </div>

                                        {/* Baseline */}
                                        <div className='w-full h-px bg-gray-300' />

                                        {/* X-axis Labels — below baseline */}
                                        <div className='flex justify-around pt-3'>
                                            {[
                                                { year: "2020" },
                                                { year: "2025 (Start)" },
                                                { year: "2025 (End)" },
                                                { year: "2029E" }
                                            ].map((bar) => (
                                                <div key={bar.year} className='text-center' style={{ width: '18%' }}>
                                                    <span className='text-[10px] md:text-xs font-bold text-black uppercase tracking-widest'>
                                                        {bar.year}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className='text-[10px] text-black font-bold uppercase tracking-widest' style={{ fontFamily: "PT Serif,serif" }}>
                                    Source: <span className='text-black underline cursor-pointer'><a href="https://www.morganstanley.com/im/en-us/capital-seeker/about-us/news-and-insights/outlooks/private-credit-2026-outlook.html" target='_blank'>Morgan Stanley Private Credit Outlook 2025</a></span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id='page2' className='space-y-16 pt-24 border-t border-gray-100'>
                        {/* 01. Timeline: The unfolding of contagion */}
                        <div className='space-y-12'>
                            <h3 className='text-xl md:text-2xl font-bold' style={{ color: GOLD, fontFamily: 'PT Serif, serif' }}>
                                The unfolding of contagion
                            </h3>

                            <div className='relative flex flex-col gap-8'>
                                {/* Vertical Line */}
                                <div className='absolute left-[145px] top-2 bottom-2 w-px bg-gray-200 hidden md:block' />

                                {[
                                    { date: "Nov–Dec 2024", text: "Tricolor & First Brands declare bankruptcy. Early tremors in leveraged loan markets." },
                                    { date: "Late 2025", text: "Blackstone caps repurchases at ~$2B. BlackRock writes down a $25M loan to zero just 3 months after valuing it at par." },
                                    { date: "Early Feb 2026", text: "Blue Owl Capital gates retail withdrawals and sells $1.4B in loan assets under pressure." },
                                    { date: "Mid-Feb 2026", text: "Apollo-managed BDC (Business Development Company) cuts its payout and marks down assets spreading anxiety to institutional investors." },
                                    { date: "Feb 27, 2026", text: "Market Financial Solutions (UK) collapses £930M collateral shortfall. Alleged double-pledging. Barclays' isolated exposure: £500M." }
                                ].map((item, idx) => (
                                    <div key={idx} className='flex items-start gap-0 relative'>

                                        {/* Date — right aligned in fixed width */}
                                        <div
                                            className='text-[11px] font-bold tracking-tight shrink-0 text-right pt-0.5'
                                            style={{ color: GOLD, width: '130px', fontFamily: 'PT Serif,serif' }}
                                        >
                                            {item.date}
                                        </div>

                                        {/* Dot — centered on the line */}
                                        <div className='flex items-start justify-center shrink-0 pt-1' style={{ width: '30px' }}>
                                            <div
                                                className='size-[7px] rounded-full z-10'
                                                style={{ background: GOLD }}
                                            />
                                        </div>

                                        {/* Text */}
                                        <div className='flex-1 text-sm md:text-base text-black leading-relaxed' style={{ fontFamily: 'PT Serif,serif' }}>
                                            <span className=' text-black'>{item.text.split('.')[0]}.</span>
                                            {item.text.split('.').slice(1).join('.')}
                                        </div>

                                    </div>
                                ))}
                            </div>

                            <div className='text-[10px] text-black font-bold uppercase tracking-widest' style={{ fontFamily: 'PT Serif, serif' }}>
                                Source: <span className='text-black underline cursor-pointer'><a href="https://www.ascertiscredit.com/insights/private-credit-in-india-a-structural-opportunity-not-a-systemic-risk" target='_blank'>Ascertis Capital</a></span>
                            </div>

                            <p className='text-lg md:text-xl text-gray-800 leading-relaxed font-light font-serif max-w-5xl'>
                                Major names: Blackstone, BlackRock, Blue Owl Capital — have faced investor redemption requests they couldn’t fully honour. The crash is not sudden, it is a slow, grinding reveal of what was hidden beneath years of easy money.
                            </p>
                        </div>

                        {/* SECTION 02: HOW BIG IS THE IMPACT */}
                        <div className='space-y-10 pt-16 border-t border-gray-100'>
                            <div className='space-y-4'>
                                <h3 className='text-2xl md:text-3xl font-bold uppercase tracking-tight' style={{ color: GOLD, fontFamily: 'PT Serif, serif' }}>
                                    02. HOW BIG IS THE IMPACT
                                </h3>
                                <p className='text-lg md:text-xl text-gray-800 leading-relaxed font-light font-serif max-w-5xl'>
                                    The market isn’t collapsing - but the cracks are deep. Three numbers tell the story better than any headline.
                                </p>
                            </div>

                            {/* Grouped Bar Chart Section */}
                            <div className='space-y-8 pt-6'>
                                <h4 className='text-xl md:text-2xl font-bold tracking-tight' style={{ fontFamily: 'PT Serif, serif' }}>
                                    Rising Stress Indicators in Global Private Credit
                                </h4>

                                {/* Main Chart Container with Border - Meticulously Aligned */}
                                {/* Main Chart Container */}
                                <div className='w-full border border-gray-200 bg-white p-6 md:p-12 shadow-sm'>
                                    <h5 className='text-center text-base md:text-2xl font-bold text-[#4B4B4B] mb-10 md:mb-16' style={{ fontFamily: 'PT Serif, serif' }}>
                                        Comparison of key risk metrics: 2021 vs 2025
                                    </h5>

                                    <div className='relative w-full pl-10 md:pl-0 md:px-14'>
                                        {/* Chart Area */}
                                        <div className='relative flex items-end justify-around h-[220px] md:h-[320px]'>

                                            {/* Y-axis Labels */}
                                            <div className='absolute left-0 top-0 bottom-0 flex flex-col justify-between pointer-events-none'
                                                style={{ transform: 'translateX(-36px)' }}>
                                                {['45%', '40%', '35%', '30%', '25%', '20%', '15%', '10%', '5%', '0%'].map((val, idx) => (
                                                    <span key={idx} className='text-[8px] md:text-[11px] text-black text-right w-8 md:w-14'>
                                                        {/* Show abbreviated on mobile, full on desktop */}
                                                        <span className='md:hidden'>{val}</span>
                                                        <span className='hidden md:inline'>
                                                            {['45.00%', '40.00%', '35.00%', '30.00%', '25.00%', '20.00%', '15.00%', '10.00%', '5.00%', '0.00%'][idx]}
                                                        </span>
                                                    </span>
                                                ))}
                                            </div>

                                            {/* Grid Lines */}
                                            <div className='absolute inset-0 flex flex-col justify-between pointer-events-none'>
                                                {Array.from({ length: 10 }).map((_, idx) => (
                                                    <div key={idx} className={`w-full h-px ${idx === 9 ? 'bg-gray-300' : 'bg-gray-100'}`} />
                                                ))}
                                            </div>

                                            {/* Bar Groups */}
                                            {[
                                                { label: "Effective Default Rate (%)", v21: 1.5, v25: 4.0, d21: "1.50%", d25: "4.00%" },
                                                { label: "Borrowers with Negative FCF (%)", v21: 25, v25: 40, d21: "25%", d25: "40%" },
                                                { label: "PIK Income Share (%)", v21: 4.0, v25: 8.0, d21: "4%", d25: "8%" }
                                            ].map((group, idx) => (
                                                <div key={idx} className='relative flex flex-col items-center justify-end h-full z-10' style={{ width: '28%' }}>
                                                    {/* Bars */}
                                                    <div className='flex items-end gap-[2px] md:gap-[3px] w-full justify-center'>
                                                        {/* 2021 Bar */}
                                                        <div className='flex flex-col items-center gap-1' style={{ width: 'clamp(20px, 4vw, 48px)' }}>
                                                            <span className='text-[9px] md:text-[12px] font-bold text-black'>{group.d21}</span>
                                                            <motion.div
                                                                initial={{ height: 0 }}
                                                                whileInView={{ height: `${(group.v21 / 45) * 220}px` }}
                                                                viewport={{ once: true }}
                                                                transition={{ duration: 1, ease: 'easeOut' }}
                                                                className='w-full bg-black md:hidden'
                                                            />
                                                            <motion.div
                                                                initial={{ height: 0 }}
                                                                whileInView={{ height: `${(group.v21 / 45) * 320}px` }}
                                                                viewport={{ once: true }}
                                                                transition={{ duration: 1, ease: 'easeOut' }}
                                                                className='w-full bg-black hidden md:block'
                                                            />
                                                        </div>
                                                        {/* 2025 Bar */}
                                                        <div className='flex flex-col items-center gap-1' style={{ width: 'clamp(20px, 4vw, 48px)' }}>
                                                            <span className='text-[9px] md:text-[12px] font-bold text-black'>{group.d25}</span>
                                                            <motion.div
                                                                initial={{ height: 0 }}
                                                                whileInView={{ height: `${(group.v25 / 45) * 220}px` }}
                                                                viewport={{ once: true }}
                                                                transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
                                                                className='w-full bg-[#F9D461] md:hidden'
                                                            />
                                                            <motion.div
                                                                initial={{ height: 0 }}
                                                                whileInView={{ height: `${(group.v25 / 45) * 320}px` }}
                                                                viewport={{ once: true }}
                                                                transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
                                                                className='w-full bg-[#F9D461] hidden md:block'
                                                            />
                                                        </div>
                                                    </div>

                                                    {/* X-axis label */}
                                                    <div className='absolute w-full text-center' style={{ top: '100%', paddingTop: '8px' }}>
                                                        <span className='text-[8px] md:text-[12px] font-semibold text-black leading-snug'
                                                            style={{ fontFamily: 'PT Serif, serif' }}>
                                                            {group.label}
                                                        </span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Baseline */}
                                        <div className='w-full h-px bg-gray-300' />

                                        {/* Space for x-axis labels */}
                                        <div className='h-10 md:h-12' />

                                        {/* Legend */}
                                        <div className='mt-4 md:mt-6 flex items-center justify-center gap-6 md:gap-10'>
                                            <div className='flex items-center gap-2'>
                                                <div className='w-2.5 h-2.5 md:w-3 md:h-3 bg-black' />
                                                <span className='text-[10px] md:text-[12px] font-bold text-black' style={{ fontFamily: 'PT Serif, serif' }}>
                                                    2021 (Pre-stress)
                                                </span>
                                            </div>
                                            <div className='flex items-center gap-2'>
                                                <div className='w-2.5 h-2.5 md:w-3 md:h-3 bg-[#F9D461]' />
                                                <span className='text-[10px] md:text-[12px] font-bold text-black' style={{ fontFamily: 'PT Serif, serif' }}>
                                                    2025 / Current
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Source Line - Super Accurate Details */}
                                <div className='text-[10px] text-black font-bold uppercase tracking-widest' style={{ fontFamily: 'PT Serif, serif' }}>
                                    Source: <span className='text-black underline cursor-pointer'><a href="https://www.withintelligence.com/insights/private-credit-outlook-2026/" target='_blank'>Withintelligence</a></span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id='page3' className='space-y-12 pt-16 border-t border-gray-100'>
                        {/* Opening Summary Paragraph */}
                        <p className='text-lg md:text-xl text-gray-800 leading-relaxed font-serif' style={{ fontFamily: 'PT Serif,serif' }}>
                            <span className='font-bold' style={{ fontFamily: 'PT Serif,serif' }}>Effective default rate</span> has risen to 4% more than the reported headline of under 2%. <span className='font-bold'>Borrowers with negative free cash flow</span>, meaning they spend more than they earn, jumped from 25% to 40%. And <span className='font-bold'>Payment-in-Kind (PIK) income</span>, where borrowers defer cash interest by rolling it into their debt, climbed from 4.2% pre-stress to 8.8% as of Q3 2025.
                        </p>

                        {/* Styled Pull Quote */}
                        <div className='bg-[#FDFBF7] border-l-4 border-[#D4AF37] p-10 md:p-14 my-8'>
                            <blockquote className='text-2xl md:text-3xl font-serif italic text-gray-900 leading-snug font-light' style={{ fontFamily: "PT Serif,serif" }}>
                                “When you see one cockroach, there are probably more.”
                            </blockquote>
                            <cite className=' mt-6 text-sm md:text-base text-gray-500 font-sans' style={{ fontFamily: "PT Serif,serif" }}>
                                — Jamie Dimon, CEO, JPMorgan
                            </cite>
                        </div>

                        {/* Body Paragraph with Blue Underline Link */}
                        <div className='space-y-4'>
                            <p className='text-lg md:text-xl text-gray-800 leading-relaxed font-serif' style={{ fontFamily: 'PT Serif,serif' }}>
                                Meanwhile, traditional banks long perceived to have de-risked after 2008 are deeply entangled. US banks have committed approximately $300 billion in exposure to private credit providers (Moody’s, 2025). JPMorgan’s lending to nonbank financial firms tripled from ~$50B in 2018 to $160B by 2025. If private credit sneezes, banks catch a cold.
                            </p>
                            <div className='text-[10px] font-bold text-black uppercase tracking-widest' style={{ fontFamily: "PT Serif,serif" }}>
                                Source: <span className='text-black underline cursor-pointer'><a href="https://www.withintelligence.com/insights/private-credit-outlook-2026/" target='_blank'>Withintelligence</a></span>
                            </div>
                        </div>

                        {/* THE STRUCTURAL FAULT LINE Box */}
                        <div className='bg-[#fdfbf7] border-t-4 border-[#d4af37] p-10 md:p-12 my-12'>
                            <h4 className='text-2xl font-bold text-[#d4af37] uppercase mb-4' style={{ fontFamily: 'PT Serif,serif' }}>
                                THE STRUCTURAL FAULT LINE
                            </h4>
                            <p className='text-lg md:text-xl text-gray-800 leading-relaxed font-serif' style={{ fontFamily: 'PT Serif,serif' }}>
                                The Retail Private Credit Funds raised money from investors with promises of quarterly redemptions, but the underlying loans are locked up for 5–7 years. When sentiment turns everyone wants their money back at once.
                            </p>
                        </div>

                        {/* Section Header */}
                        <div className='pt-8'>
                            <h3 className='text-2xl md:text-3xl font-bold uppercase tracking-tight' style={{ color: GOLD, fontFamily: 'PT Serif, serif' }}>
                                03. WHAT IS DRIVING THE SHIFT IN SENTIMENT?
                            </h3>
                        </div>

                        {/* Final Narrative Paragraphs */}
                        <div className='space-y-8 font-serif text-lg md:text-xl text-gray-800 leading-relaxed' style={{ fontFamily: 'PT Serif,serif' }}>
                            <p>
                                It is worth understanding that the market did not change overnight.
                            </p>
                            <p>
                                Redemption requests at large non-traded funds rose sharply. Apollo-managed vehicles cut dividends and reinforced a cautious tone. Lingering memories of real estate liquidity crunch have resurfaced, extrapolating that similar situation could arise in the private credit space too.
                            </p>
                            <p>
                                Another structural consideration is the sectoral concentration of private credit funds. If Artificial Intelligence meaningfully disrupts these business models in the next 3 to 5 years, earnings could be under pressure which could consequentially result in defaults. While this stress hasn’t yet translated into losses, the market has begun to price in this tail risk via a change in sentiment.
                            </p>
                        </div>
                    </div>

                    <div id='page4' className='space-y-12 pt-16 border-t border-gray-100'>
                        {/* THE LIQUIDITY ILLUSION Box */}
                        <div className='bg-[#FDFBF7] border border-t-4 border-r-0 border-b-0 border-l-0 border-[#c9a84c] p-10 md:p-12 mb-12 shadow-sm'>
                            <h4 className='text-2xl font-bold text-[#D4AF37] uppercase mb-4 font-sans' style={{ fontFamily: 'PT Serif,serif' }}>
                                THE LIQUIDITY ILLUSION
                            </h4>
                            <p className='text-lg md:text-xl text-gray-800 leading-relaxed font-serif' style={{ fontFamily: 'PT Serif,serif' }}>
                                Illiquidity is a feature of private credit, not a flaw, it is what earns the premium return. But retail investors who were sold quarterly redemptions on fundamentally illiquid loans are discovering that distinction the hard way. The problem is not private credit itself. It is that the wrong product was sold to the wrong audience.
                            </p>
                        </div>

                        {/* Narrative with Underlines */}
                        <div className='space-y-4'>
                            <p className='text-lg md:text-xl text-gray-800 leading-relaxed font-serif' style={{ fontFamily: 'PT Serif,serif' }}>
                                The result: even though broad fundamentals default rates, coverage ratios are manageable, the perceived risk has ballooned. Sentiment has shifted from ‘stable yield’ to ‘selective, risk-aware investing.’ That shift is real and how capital flows in 2026 and beyond will matter
                            </p>
                            <div className='text-[10px] text-black font-bold uppercase tracking-widest' style={{ fontFamily: 'PT Serif,serif' }}>
                                Source: <span className='text-black underline cursor-pointer'><a href="https://privatebank.jpmorgan.com/apac/en/insights/markets-and-investing/private-credit-under-the-microscope-separating-headlines-from-fundamentals" target='_blank'>J.P. Morgan</a>, <a href="https://www.mckinsey.com/industries/private-capital/our-insights/global-private-markets-report" target='_blank'>McKinsey</a></span>
                            </div>
                        </div>

                        {/* Section Header 04 */}
                        <div className='pt-12'>
                            <h3 className='text-2xl md:text-3xl font-bold uppercase tracking-tight' style={{ color: GOLD, fontFamily: 'PT Serif, serif' }}>
                                04. INDIA: INSULATED OR INFECTED?
                            </h3>
                        </div>

                        {/* India Narrative */}
                        <p className='text-lg md:text-xl text-gray-800 leading-relaxed font-serif' style={{ fontFamily: 'PT Serif,serif' }}>
                            India’s private credit market posted $12.4 billion in deal value across 166 transactions in CY 2025, a 35% jump over CY 2024’s $9.2 billion. At current AUM of $25–30 billion, it represents just 0.6% of India’s GDP. Structurally India is just getting started.
                        </p>

                        {/* India Bar Chart */}
                        <div className='space-y-8 pt-6'>
                            <h4 className='text-xl md:text-2xl font-bold tracking-tight' style={{ fontFamily: 'PT Serif, serif' }}>
                                India Private Credit: Capital Deployment Growth
                            </h4>

                            <div className='w-full border border-gray-100 bg-white p-8 md:p-14 shadow-sm'>
                                <h5 className='text-center text-sm md:text-base font-bold text-gray-500 mb-16' style={{ fontFamily: 'PT Serif, serif' }}>
                                    Total deal value (US$ Billions), CY 2023–2025
                                </h5>

                                <div className='relative px-4 md:px-24'>
                                    {/* Chart Area */}
                                    <div className='relative h-[260px] w-full flex items-end justify-around'>

                                        {/* Y-axis grid lines */}
                                        <div className='absolute inset-0 flex flex-col justify-between pointer-events-none'>
                                            {['$14B', '$12B', '$10B', '$8B', '$6B', '$4B', '$2B', '$0B'].map((val, idx) => (
                                                <div key={val} className='relative w-full flex items-center h-0'>
                                                    <div className={`absolute left-0 right-0 h-px ${idx === 7 ? 'bg-gray-300' : 'bg-gray-100'}`} style={{ fontFamily: 'PT Serif,serif' }} />
                                                    <span className='absolute -left-14 text-[10px] font-bold text-black w-12 text-right font-sans transform -translate-y-1/2' style={{ fontFamily: 'PT Serif,serif' }}>
                                                        {val}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Bars */}
                                        {[
                                            { year: "CY 2023", val: 7.5, color: '#FDE4A3' },
                                            { year: "CY 2024", val: 9.2, color: '#F9D461' },
                                            { year: "CY 2025", val: 12.4, color: '#C09516' }
                                        ].map((bar, idx) => (
                                            <div key={idx} className='flex flex-col items-center justify-end h-full z-10' style={{ width: '22%', fontFamily: 'PT Serif,serif' }}>
                                                <span className='text-sm font-bold text-black font-sans mb-2' style={{ fontFamily: 'PT Serif,serif' }}>{bar.val}</span>
                                                <motion.div
                                                    initial={{ height: 0 }}
                                                    whileInView={{ height: `${(bar.val / 14) * 260}px` }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 1, ease: 'easeOut', delay: idx * 0.1 }}
                                                    className='w-full'
                                                    style={{ background: bar.color, fontFamily: 'PT Serif,serif' }}
                                                />
                                            </div>
                                        ))}
                                    </div>

                                    {/* Baseline */}
                                    <div className='w-full h-px bg-gray-300' />

                                    {/* X-axis Labels — cleanly below baseline */}
                                    <div className='flex justify-around px-0 pt-4'>
                                        {['CY 2023', 'CY 2024', 'CY 2025'].map((label) => (
                                            <div key={label} className='text-center' style={{ width: '22%', fontFamily: 'PT Serif,serif' }}>
                                                <span className='text-[11px] font-bold text-black uppercase tracking-widest' style={{ fontFamily: 'PT Serif,serif' }}>
                                                    {label}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id='page5' className='space-y-12 pt-16 border-t border-gray-100'>
                        {/* Sector Composition Section */}
                        <div className='space-y-8'>
                            <h4 className='text-xl md:text-2xl font-bold tracking-tight' style={{ fontFamily: 'PT Serif, serif' }}>
                                India Private Credit: Sector Composition
                            </h4>

                            <div className='w-full border border-gray-100 bg-white p-8 md:p-14 shadow-sm flex flex-col md:flex-row items-center gap-12 md:gap-20'>
                                {/* Donut Chart */}
                                <div className='relative size-64 md:size-80 shrink-0'>
                                    <h5 className='absolute -top-10 left-1/2 -translate-x-1/2 w-full text-center text-sm md:text-base font-bold text-gray-700 whitespace-nowrap' style={{ fontFamily: 'PT Serif, serif' }}>
                                        Share of total deal value, H2 2025
                                    </h5>
                                    <svg viewBox="0 0 100 100" className='w-full h-full -rotate-90'>
                                        {/* Background Circle */}
                                        <circle cx="50" cy="50" r="40" fill="transparent" stroke="#F1F5F9" strokeWidth="12" />

                                        {/* Real Estate: 42% (Stroke DASH calculation: 42/100 * 251.2 = 105.5) */}
                                        <motion.circle
                                            initial={{ strokeDasharray: "0 251.2" }}
                                            whileInView={{ strokeDasharray: "105.5 251.2" }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1.5, ease: "easeOut" }}
                                            cx="50" cy="50" r="40" fill="transparent" stroke="#3B82F6" strokeWidth="12"
                                        />

                                        {/* Healthcare: 15% (15/100 * 251.2 = 37.7) -> offset 105.5 */}
                                        <motion.circle
                                            initial={{ strokeDasharray: "0 251.2" }}
                                            whileInView={{ strokeDasharray: "37.7 251.2" }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                                            cx="50" cy="50" r="40" fill="transparent" stroke="#F97316" strokeWidth="12" strokeDashoffset="-105.5"
                                        />

                                        {/* Industrials: 15% (37.7) -> offset 143.2 */}
                                        <motion.circle
                                            initial={{ strokeDasharray: "0 251.2" }}
                                            whileInView={{ strokeDasharray: "37.7 251.2" }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1.5, ease: "easeOut", delay: 0.4 }}
                                            cx="50" cy="50" r="40" fill="transparent" stroke="#94A3B8" strokeWidth="12" strokeDashoffset="-143.2"
                                        />

                                        {/* Others: 28% (28/100 * 251.2 = 70.3) -> offset 180.9 */}
                                        <motion.circle
                                            initial={{ strokeDasharray: "0 251.2" }}
                                            whileInView={{ strokeDasharray: "70.3 251.2" }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1.5, ease: "easeOut", delay: 0.6 }}
                                            cx="50" cy="50" r="40" fill="transparent" stroke="#FACC15" strokeWidth="12" strokeDashoffset="-180.9"
                                        />
                                    </svg>
                                    <div className='absolute inset-0 flex flex-col items-center justify-center text-center'>
                                        <span className='text-3xl md:text-4xl font-bold text-gray-900' style={{ fontFamily: 'PT Serif,serif' }}>166 deals</span>
                                    </div>
                                </div>

                                {/* Legend Section */}
                                <div className='flex-1 space-y-8'>
                                    {[
                                        { label: "Real Estate: 42%", text: "Fills a structural gap where bank lending is constrained. Primarily residential and commercial development.", color: "text-[#3B82F6]" },
                                        { label: "Healthcare: 15%", text: "Hospitals, diagnostics, pharma. Long-duration capital demand aligned with India's healthcare infrastructure build-out.", color: "text-[#F97316]" },
                                        { label: "Industrials / Manufacturing: 15%", text: "Capex-heavy sectors benefiting from India's PLI tailwinds and supply chain shifts.", color: "text-[#94A3B8]" },
                                        { label: "Others: 28%", text: "Renewable energy, logistics & warehousing, pharma/life sciences, and technology services.", color: "text-[#FACC15]" }
                                    ].map((item, idx) => (
                                        <div key={idx} className='space-y-1.5'>
                                            <h6 className={`text-base md:text-lg font-bold font-serif ${item.color}`} style={{ fontFamily: 'PT Serif,serif' }}>
                                                {item.label}
                                            </h6>
                                            <p className='text-sm md:text-base text-black font-bold font-serif leading-relaxed' style={{ fontFamily: 'PT Serif,serif' }}>
                                                {item.text}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Narrative Paragraphs */}
                        <div className='space-y-5 font-serif text-lg md:text-xl text-gray-800 leading-relaxed' style={{ fontFamily: 'PT Serif,serif' }}>
                            <p>
                                Real estate is the largest slice at 42%, followed by healthcare and industrials at 15% each. Crucially, over 35% of capital went toward balance sheet optimisation, refinancing, and foundational capex — productive uses of credit, not speculative leverage.
                            </p>
                            <p>
                                One important caveat: a single deal, the Shapoorji Pallonji Group’s $3.4 billion refinancing in H1 2025 accounted for a significant portion of headline deal value. Excluding it, underlying market growth is more moderate. It reflects the deal-concentrated nature of India’s early-stage market but it is a nuance worth knowing.
                            </p>
                            
                            <div className='text-[10px] text-black font-bold uppercase tracking-widest' style={{ fontFamily: 'PT Serif,serif' }}>
                                Source: <span className='text-black underline cursor-pointer'><a href="https://www.ey.com/en_in/newsroom/2026/02/private-credit-market-records-investments-of-us-dollor-3-point-4-billion-in-h2-2025-ey-private-credit-report" target='_blank'>EY H2 2025</a></span>
                            </div>
                        </div>

                        {/* Section Header: Why Is India Structurally Different */}
                        <div className='pt-12 space-y-6'>
                            <h3 className='text-2xl md:text-3xl font-bold uppercase tracking-tight' style={{ color: GOLD, fontFamily: 'PT Serif, serif' }}>
                                Why Is India Structurally Different
                            </h3>
                            <p className='text-lg md:text-xl text-gray-800 leading-relaxed font-serif'>
                                The RBI has built a ring-fence between private credit and the traditional banking system that the US and UK do not have:
                            </p>
                        </div>
                    </div>

                    <div id='page6' className='space-y-8 pt-16 border-t border-gray-100 pb-20'>
                        {/* Comparison Table Section */}
                        <div className='overflow-x-auto'>
                            <table className='w-full border-collapse border border-gray-300 font-serif'>
                                <thead className='bg-[#1A1A1A] text-white'>
                                    <tr>
                                        <th className='p-5 md:p-6 border border-gray-300 text-left font-bold text-sm md:text-base' style={{ fontFamily: 'PT Serif,serif' }}>Risk Factor</th>
                                        <th className='p-5 md:p-6 border border-gray-300 text-left font-bold text-sm md:text-base' style={{ fontFamily: 'PT Serif,serif' }}>Global (Majorly US/UK)</th>
                                        <th className='p-5 md:p-6 border border-gray-300 text-left font-bold text-sm md:text-base' style={{ fontFamily: 'PT Serif,serif' }}>India</th>
                                    </tr>
                                </thead>
                                <tbody className='text-gray-800'>
                                    {[
                                        { factor: "Bank exposure", global: "$300Bn pooled", india: "<10% per bank – RBI cap", gColor: "text-red-800", iColor: "text-green-800" },
                                        { factor: "Retail access", global: "Broad via BDCs / semi-liquid funds", india: "Institutions and retailers through Cat II AIFs", gColor: "text-red-800", iColor: "text-green-800" },
                                        { factor: "Fund leverage", global: "Permitted, widely used", india: "Prohibited for Category II AIFs", gColor: "text-red-800", iColor: "text-green-800" },
                                        { factor: "Credit-to-GDP", global: "~74% (near saturation)", india: "~57% (structural growth gap)", gColor: "text-red-800", iColor: "text-green-800" },
                                        { factor: "Liquidity risk", global: "HIGH", india: "MODERATE - AIF lock-ins standard", gColor: "text-red-800", iColor: "text-green-800" },
                                        { factor: "Yield range", global: "8–12% (US Private Credit Funds returns)", india: "14–22% (Indian AIFs)", gColor: "text-red-800", iColor: "text-green-800" }
                                    ].map((row, idx) => (
                                        <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}>
                                            <td className='p-5 md:p-6 border border-gray-300 font-bold text-gray-400' style={{ fontFamily: 'PT Serif,serif' }}>{row.factor}</td>
                                            <td className={`p-5 md:p-6 border border-gray-300 font-bold ${row.gColor}`} style={{ fontFamily: 'PT Serif,serif' }}>{row.global}</td>
                                            <td className={`p-5 md:p-6 border border-gray-300 font-bold ${row.iColor}`} style={{ fontFamily: 'PT Serif,serif' }}>{row.india}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Source line for table */}
                        <div className='text-[10px] text-black font-bold uppercase tracking-widest' style={{ fontFamily: 'PT Serif,serif' }}>
                            Source: <span className='text-black underline cursor-pointer'><a href="https://www.ey.com/en_in/newsroom/2026/02/private-credit-market-records-investments-of-us-dollor-3-point-4-billion-in-h2-2025-ey-private-credit-report" target='_blank'>EY H2 2025</a></span>, <span className='text-black underline cursor-pointer'><a href="https://www.ascertiscredit.com/insights/private-credit-in-india-a-structural-opportunity-not-a-systemic-risk" target='_blank'>Ascertis</a></span>
                        </div>

                        {/* THE 100% PROVISIONING RULE Box */}
                        <div className='bg-[#fdfbf7] border-t-4 border-[#c9a84c] p-10 md:p-12'>
                            <h4 className='text-2xl font-bold text-[#c9a84c] uppercase mb-4 font-sans' style={{ fontFamily: 'PT Serif,serif' }}>
                                THE 100% PROVISIONING RULE
                            </h4>
                            <p className='text-lg md:text-xl text-gray-800 leading-relaxed font-serif' style={{ fontFamily: 'PT Serif, serif' }}>
                                If a bank holds more than 5% in an AIF that also lends to the bank’s own debtor, it must immediately provision 100% of that exposure. India’s private credit stress stays within fund structures it does not leak into deposit accounts.
                            </p>
                        </div>

                        {/* Section: But India Is Not Without Risk */}
                        <div className='space-y-8'>
                            <h3 className='text-2xl md:text-3xl font-bold uppercase tracking-tight' style={{ color: GOLD, fontFamily: 'PT Serif, serif' }}>
                                But India Is Not Without Risk
                            </h3>
                            <div className='space-y-6' style={{ fontFamily: 'PT Serif,serif' }}>
                                <p className='text-lg md:text-xl text-gray-800 leading-relaxed font-serif'>
                                    Being structurally safer does not mean risk-free. These are the real vulnerabilities to watch:
                                </p>
                                <ul className='space-y-6 pt-2 font-serif text-lg md:text-xl text-gray-800'>
                                    <li className='flex items-start gap-4'>
                                        <span className='size-1.5 rounded-full bg-gray-900 mt-3 shrink-0' />
                                        <span style={{ fontFamily: 'PT Serif, serif' }}>
                                            <span className='font-bold' style={{ fontFamily: 'PT Serif, serif' }}>Deal Concentration</span>: The top 9% of deals account for 36% of total capital. If a large ticket goes wrong, the impact is outsized. (EY H2 2025)
                                        </span>
                                    </li>
                                    <li className='flex items-start gap-4'>
                                        <span className='size-1.5 rounded-full bg-gray-900 mt-3 shrink-0' />
                                        <span style={{ fontFamily: 'PT Serif, serif' }}>
                                            <span className='font-bold' style={{ fontFamily: 'PT Serif, serif' }}>Slower Global Inflows</span>: A wary global investor base may slow foreign capital into Indian funds, even if domestic fundamentals remain strong.
                                        </span>
                                    </li>
                                    <li className='flex items-start gap-4'>
                                        <span className='size-1.5 rounded-full bg-gray-900 mt-3 shrink-0' />
                                        <span style={{ fontFamily: 'PT Serif, serif' }}>
                                            <span className='font-bold' style={{ fontFamily: 'PT Serif, serif' }}>Intensifying Competition</span>: 84% of market participants expect increased competition, which could compress yield premiums over time. (EY Pulse Survey H2 2025)
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Final Summary Paragraph */}
                        <div className=' pt-6 font-serif text-lg md:text-xl text-gray-800 leading-relaxed'>
                            <p style={{ fontFamily: 'PT Serif, serif' }}>
                                The consensus view: India’s domestic drivers and regulatory architecture insulate it from direct contagion risk. The impact, if any, is a slower and more selective inflow of global capital, not a domestic credit meltdown.
                            </p>
                            <div className='text-[10px] text-black font-bold uppercase tracking-widest pt-4' style={{ fontFamily: 'PT Serif, serif' }}>
                                Source: <span className='text-black underline cursor-pointer' style={{ fontFamily: 'PT Serif, serif' }}><a href="https://www.ey.com/en_in/newsroom/2026/02/private-credit-market-records-investments-of-us-dollor-3-point-4-billion-in-h2-2025-ey-private-credit-report"> EY H2 2025</a></span>, <span className='text-black underline cursor-pointer' style={{ fontFamily: 'PT Serif, serif' }}><a href='https://www.ascertiscredit.com/insights/private-credit-in-india-a-structural-opportunity-not-a-systemic-risk'> Avendus</a></span>, <span className='text-black underline cursor-pointer' style={{ fontFamily: 'PT Serif, serif' }}><a href="https://www.kotakneo.com/news/market-news/will-americas-credit-stress-spill-over-to-indias-markets/">Kotak Neo</a></span>
                            </div>
                        </div>
                    </div>

                    <div id='page7' className='space-y-16 pt-16 border-t border-gray-100 pb-32'>
                        {/* Section Header 05 */}
                        <div className='space-y-6'>
                            <h3 className='text-2xl md:text-3xl font-bold uppercase tracking-tight' style={{ color: GOLD, fontFamily: 'PT Serif, serif' }}>
                                05. INVESTOR APPROACH
                            </h3>
                            <p className='text-lg md:text-xl text-gray-800 leading-relaxed font-serif max-w-5xl' style={{ fontFamily: 'PT Serif,serif' }}>
                                The global private credit market is not collapsing, but winners and losers will diverge sharply. Dispersion, not collapse, is the right mental model. Here are the key factors:
                            </p>
                        </div>

                        {/* Factors Box (3 Columns) */}
                        <div className='bg-[#FDFBF7] border border-[#D4AF3740] p-10 md:p-14 shadow-sm'>
                            <div className='grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16'>
                                {[
                                    {
                                        num: "01", title: "Global Selection",
                                        text: "In the context of global private credit exposure, managers are typically selected based on low PIK income dependence (ideally under 5%), a focus on senior-secured positions, and conservative valuation practices. Additionally, semi-liquid retail BDC structures are avoided. Usually, Weaker managers with aggressive retail structures face a severe reckoning."
                                    },
                                    {
                                        num: "02", title: "India is at a Structural Entry Point",
                                        text: "India represents an early-cycle, ring-fenced ecosystem offering yields in the range of 14–22%, rather than merely an alternative allocation. For HNIs, NRIs, and family offices, this constitutes a structural window prior to market maturation and potential yield compression."
                                    },
                                    {
                                        num: "03", title: "Manager Selection Is Everything",
                                        text: "In a growing market with evolving insolvency frameworks, the manager you pick matters more than the asset class itself. Forensic due diligence on track record, deal concentration, and legal navigation capability is non-negotiable."
                                    }
                                ].map((factor, idx) => (
                                    <div key={idx} className='space-y-6'>
                                        <div className='text-5xl md:text-6xl font-bold font-serif opacity-30' style={{ color: GOLD, fontFamily: 'PT Serif,serif' }}>
                                            {factor.num}
                                        </div>
                                        <h4 className='text-xl md:text-2xl font-bold font-serif leading-tight text-gray-900' style={{ fontFamily: 'PT Serif,serif' }}>
                                            {factor.title}
                                        </h4>
                                        <p className='text-sm md:text-base text-gray-600 font-serif leading-relaxed line-clamp-none' style={{ fontFamily: 'PT Serif,serif' }}>
                                            {factor.text}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Note Bullet */}
                        <div className='flex items-start gap-4 font-serif text-lg md:text-xl text-gray-800 leading-relaxed' style={{ fontFamily: 'PT Serif,serif' }}>
                            <span className='size-2 rounded-full bg-gray-900 mt-3 shrink-0' />
                            <p>
                                <span className='font-bold' style={{ fontFamily: 'PT Serif,serif' }}>Note:</span> Large Indian family offices are <span className='font-bold ' style={{ fontFamily: 'PT Serif,serif' }}>increasing allocations to private credit as part of their broader allocation to the Alternates asset class.</span>
                            </p>
                        </div>

                        {/* Final Pull Quote */}
                        <div className='bg-[#FDFBF7] border-l-4 border-[#D4AF37] p-10 md:p-14 my-12' style={{ fontFamily: 'PT Serif,serif' }}>
                            <blockquote className='text-2xl md:text-3xl font-serif italic text-black leading-snug' style={{ fontFamily: 'PT Serif,serif' }}>
                                “Copy-pasting the global crisis narrative onto India misses the point. Here, private credit is opportunity, not risk.”
                            </blockquote>
                            <cite className='block mt-6 text-sm md:text-base text-black font-sans font-bold not-italic' style={{ fontFamily: 'PT Serif,serif' }}>
                                - Ascertis Capital Research, Feb 2026
                            </cite>
                        </div>

                        {/* Final Summary Narrative */}
                        <div className='space-y-2 pt-6 font-serif text-lg md:text-xl text-gray-800 leading-relaxed'>
                            <p>
                                The global narrative is real. The stress is real. But context is everything. India’s private credit market is in a completely different chapter of the same book. The West is navigating late-cycle turbulence - India is still writing its opening pages.
                            </p>
                            <div className='text-[10px] text-black font-bold uppercase tracking-widest pt-4' style={{ fontFamily: 'PT Serif,serif' }}>
                                Source: <span className='text-black underline cursor-pointer'><a href="https://www.mckinsey.com/industries/private-capital/our-insights/global-private-markets-report"> McKinsey</a></span>, <span className='text-black underline cursor-pointer'><a href="https://www.kotakneo.com/news/market-news/will-americas-credit-stress-spill-over-to-indias-markets/">Kotak Neo</a></span>
                            </div>
                        </div>
                    </div>

                    <div id='page8' className='pt-12 pb-24 border-t border-gray-100'>
                        <div className='max-w-4xl space-y-8'>
                            <h5 className='text-xl md:text-2xl font-bold font-serif' style={{ color: GOLD }}>
                                Disclaimer
                            </h5>
                            <div className='space-y-6 font-serif italic text-base md:text-lg text-black font-semibold leading-relaxed' style={{ fontFamily: 'PT Serif,serif' }}>
                                <p>
                                    Mutual fund investments are subject to market risks. Please read the scheme information and other related documents carefully before investing. Past performance is not indicative of future returns. Please consider your specific investment requirements before choosing a fund or designing a portfolio that suits your needs.
                                </p>
                                <p>
                                    TieVista Global Private Wealth (TieVista) is the brand name of IndusArtha Financial Services Private Limited, (with ARN code 342010 and APRN code 07336) makes no warranties or representations, express or implied, on products offered through the platform. It accepts no liability for any damages or losses, however caused, in connection with the use of, or on the reliance of its product or related services.
                                </p>
                                <p>
                                    The data presented in this document is based on sources as mentioned and TieVista is not presenting its own views or recommendation.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DeclutteringtheNoiseAround