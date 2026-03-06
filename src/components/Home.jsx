import React, { useState, useEffect, useRef } from 'react'
import { Square, Landmark, TrendingUp, Users, Globe, Briefcase, FileText, Mail, ArrowRight, ShieldCheck, Search, UserCheck, DollarSign, Award, Star } from 'lucide-react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { useGSAP } from '@gsap/react'


gsap.registerPlugin(ScrollTrigger);


export const Home = () => {

    useGSAP(() => {
        gsap.fromTo('#text', { x: '100%' }, {
            x: '-100%',
            repeat: -1,
            duration: 7,
            ease: 'linear'
        })

        // Glassy Reveal Effect for Transparency Section
        gsap.fromTo('#glassy-overlay',
            { opacity: 1.5, backdropFilter: 'blur(24px)' },
            {
                opacity: -1,
                backdropFilter: 'blur(0px)',
                ease: 'none',
                scrollTrigger: {
                    trigger: '#transparency-section',
                    start: 'top 60%',
                    end: 'bottom 40%',
                    scrub: 1,
                }
            }
        )
    }, [])

    const goldColor = '#D4AF37';
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollContainerRef = useRef(null);

    const solutions = [
        {
            title: 'About Us',
            description: 'Our mission, values and leadership.',
            icon: Landmark,
            href: '/aboutus'
        },
        {
            title: 'Investment Universe',
            description: 'Personalized, research-backed investment advisory.',
            icon: TrendingUp,
            href: '/investmentuniverse'
        },
        {
            title: 'Services',
            description: 'Structuring, legacy planning, and governance.',
            icon: Users,
            href: '#'
        },
        {
            title: 'NRI Solutions',
            description: 'FDs, remittances, global reporting, and investment guidance.',
            icon: Globe,
            href: '/nrisolutions'
        },
        {
            title: 'Insights',
            description: 'Latest market research, reports, and thought leadership.',
            icon: FileText,
            href: '#'
        },
        {
            title: 'Contact',
            description: 'Get in touch with our advisory team.',
            icon: Mail,
            href: '#'
        }
    ]

    const whyChooseUs = [
        {
            title: 'Advisory-led, Not Product-Pushing',
            description: 'We prioritize your interests with unbiased, client-first recommendations.',
            icon: ShieldCheck,
            isHighlighted: false
        },
        {
            title: 'Research-Driven Product Selection',
            description: 'Rigorous due diligence ensures only the best investment solutions.',
            icon: Search,
            isHighlighted: false
        },
        {
            title: 'Holistic Planning & Structuring',
            description: 'Comprehensive wealth structuring aligned with your life goals.',
            icon: UserCheck,
            isHighlighted: false
        },
        {
            title: 'Multi-Currency Reporting',
            description: 'Consolidated global portfolio views across all asset classes and geographies.',
            icon: DollarSign,
            isHighlighted: false
        },
        {
            title: 'Dedicated Relationship Managers',
            description: 'Personalized service with direct access to senior wealth advisors.',
            icon: Award,
            isHighlighted: false
        }
    ]

    const testimonials = [
        {
            quote: "The team provided exceptional guidance on restructuring our family office. Their expertise in succession planning was invaluable.",
            author: "Rajesh M.",
            role: "Family Office Principal"
        },
        {
            quote: "Transparent, research-driven recommendations that align with our long-term objectives. A truly institutional approach.",
            author: "Priya S.",
            role: "Tech Entrepreneur"
        },
        {
            quote: "As an NRI, managing investments across geographies was complex. Their multi-currency reporting simplified everything.",
            author: "Vikram K.",
            role: "NRI Investor, Dubai"
        },
        {
            quote: "Their focus on strategic planning rather than just products has made a significant difference to our wealth growth.",
            author: "Ananya R.",
            role: "Corporate Executive"
        }
    ];

    const stats = [
        { label: "Assets Under Advisory", value: 2.5, prefix: "$", suffix: "B+" },
        { label: "Clients Served", value: 400, suffix: "+" },
        { label: "Years of Excellence", value: 15, suffix: "+" },
        { label: "Client Retention", value: 98, suffix: "%" }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            if (scrollContainerRef.current) {
                const container = scrollContainerRef.current;
                const nextIndex = (currentIndex + 1) % testimonials.length;
                const scrollAmount = nextIndex * (container.offsetWidth / (window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1));

                container.scrollTo({
                    left: scrollAmount,
                    behavior: 'smooth'
                });
                setCurrentIndex(nextIndex);
            }
        }, 4000);

        return () => clearInterval(interval);
    }, [currentIndex, testimonials.length]);

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeInOut",
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 5 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <>
            <div className='selection:bg-[#D4AF37] selection:text-white'>
                {/* Hero Snap Scroll Section */}
                <div className="h-[70vh] w-full snap-start relative flex items-center justify-center overflow-hidden border-b border-gray-100">


                    {/* Background Video */}
                    <video
                        src="https://res.cloudinary.com/dxlysvpud/video/upload/v1772094729/TieVistaIntro_kbviig.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover z-0"
                    />

                    <div className='flex justify-center items-center absolute inset-0 z-20 w-full h-full p-4 py-20 md:p-10 lg:p-20 bg-transparent'>
                        <div className='h-full w-full bg-amber-50/60 rounded-3xl md:rounded-4xl'></div>
                    </div>

                    {/* Content */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.5 }}
                        variants={containerVariants}
                        className="relative z-50 max-w-4xl w-full"
                    >
                        <motion.div
                            variants={itemVariants}
                            className="flex justify-center items-center text-5xl md:text-7xl lg:text-7xl mb-6 font-bold tracking-tighter"
                            style={{ fontFamily: 'PT Serif, sans-serif' }}
                        >
                            {/* <span className="gold-letter mr-1">T</span>
                            <span className="mr-1">I</span>
                            <span className="">E</span>
                            <span className="gold-letter pb-10 text-9xl">V</span>
                            <span className="relative mr-1">I</span>
                            <span className="mr-1">S</span>
                            <span className="mr-1">T</span>
                            <span className="mr-1">A</span> */}
                            <img className='w-100 h-25 md:h-28 lg:w-150 lg:h-35' src="/TieVistaVerticalLogo.png" alt="" />
                        </motion.div>
                    </motion.div>

                </div>

                <div className='h-[20vh] md:h-[20vh] w-full flex overflow-x-hidden overflow-y-hidden justify-center items-center'>
                    <div className='flex text-5xl md:text-5xl lg:text-7xl gap-10 md:gap-20 lg:gap-40' id='text' style={{ fontFamily: 'PT Serif, sans-serif' }}>
                        <span className="whitespace-nowrap gold-letter">Trust</span><span className='text-[#D4AF37]'>• </span>
                        <span className="whitespace-nowrap gold-letter">Transparency</span><span className='text-[#D4AF37]'>• </span>
                        <span className="whitespace-nowrap gold-letter">Transformation</span>
                    </div>
                </div>

                {/* Section 1: Trust */}
                <div className="min-h-[80vh] w-full snap-start flex items-center justify-center p-6 md:p-12 border-b border-gray-100">


                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2 }}
                        variants={containerVariants}
                        className="max-w-4xl w-full"
                    >
                        <motion.h1 variants={itemVariants} className="text-5xl md:text-8xl font-bold mb-6 text-black tracking-tighter" style={{ fontFamily: 'PT Serif, sans-serif' }} >
                            Trust <span className="font-light text-[#D4AF37] ">first</span>
                        </motion.h1>
                        <motion.p variants={itemVariants} className="text-xl md:text-2xl text-gray-800 mb-8 leading-relaxed font-light">
                            At TieVista, trust is not earned post-engagement — it is the foundation of
                            engagement. <span className="font-semibold block mt-2 underline decoration-gray-300">Trust is our currency.</span>
                        </motion.p>
                        <motion.p variants={itemVariants} className="text-lg text-gray-600 mb-10 max-w-2xl font-light">
                            We operate with fiduciary intent, institutional discipline, and long-term alignment
                            with our clients’ families, capital and legacy.
                        </motion.p>
                        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                "Client-first architecture",
                                "Long-horizon thinking",
                                "Discretion and confidentiality",
                                "Governance-led decision frameworks"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 group">
                                    <CheckCircle2 size={20} className="text-black group-hover:scale-110 transition-transform" />
                                    <span className="text-black font-medium text-lg">{item}</span>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>

                {/* Section 2: Transparency */}
                <div id="transparency-section" className="min-h-screen w-full snap-start flex items-center justify-center p-6 md:p-12 border-b border-gray-100 relative overflow-hidden">
                    {/* Content behind */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.5 }}
                        variants={containerVariants}
                        className="max-w-4xl w-full z-0"
                    >
                        <motion.h1 variants={itemVariants} className="text-5xl md:text-8xl font-bold mb-6 text-black tracking-tighter" style={{ fontFamily: 'PT Serif, sans-serif' }}>
                            Transparency <span className="font-light text-[#D4AF37]">always</span>
                        </motion.h1>
                        <motion.p variants={itemVariants} className="text-xl md:text-2xl text-gray-800 mb-8 leading-relaxed font-light">
                            Transparency builds confidence. Confidence builds continuity.
                        </motion.p>
                        <motion.p variants={itemVariants} className="text-lg text-gray-600 mb-10 max-w-2xl font-light">
                            We believe sophisticated clients deserve complete visibility — on risk, fees, structures
                            and outcomes.
                        </motion.p>
                        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                "No hidden layers",
                                "No opaque incentives",
                                "Clear fee structures",
                                "Independent product evaluation",
                                "Open reporting architecture"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-2 border-l-2 border-black pl-4 py-1">
                                    <span className="text-black font-medium">{item}</span>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Glassy Overlay */}
                    <div
                        id="glassy-overlay"
                        className="absolute inset-0 z-10 pointer-events-none flex items-center justify-center p-4 md:p-12 lg:p-24"
                    >
                        <div className="w-full h-full
                            bg-gradient-to-br from-white/25 via-white/10 to-transparent
                            backdrop-blur-xl
                            rounded-3xl md:rounded-[40px]
                            "></div>
                    </div>
                </div>

                {/* Section 3: Transformation */}
                <div className="h-screen w-full snap-start flex items-center justify-center p-6 md:p-12 border-b border-gray-100" style={{ fontFamily: 'PT Serif, sans-serif' }}>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.5 }}
                        variants={containerVariants}
                        className="max-w-4xl w-full"
                    >
                        <motion.h1 variants={itemVariants} className="text-5xl md:text-8xl font-bold mb-6 text-black tracking-tighter">
                            Transformation through <span className="font-light text-[#D4AF37] ">innovation</span>
                        </motion.h1>
                        <motion.p variants={itemVariants} className="text-xl md:text-2xl text-gray-800 mb-8 leading-relaxed font-light">
                            At TieVista, innovation is not about chasing trends — it is about structurally improving how wealth is built, managed, and experienced.
                            True transformation begins with questioning legacy models. <span className="font-semibold block mt-2 underline decoration-gray-300">Traditional wealth management often operates in silos:</span>
                        </motion.p>
                        <motion.p variants={itemVariants} className="text-lg text-gray-600 mb-10 max-w-2xl font-light">
                            Transformation Through Innovation means  your portfolio is periodically reviewed and refined in alignment with evolving objectives.
                        </motion.p>
                        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                "Fragmented reporting",
                                "Opaque products",
                                "Reactive advice",
                                "Static portfolios"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 group">
                                    <TrendingUp size={20} className="text-black group-hover:scale-110 transition-transform" />
                                    <span className="text-black font-medium text-lg">{item}</span>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>

                <div className="min-h-screen w-full flex flex-col items-center justify-center py-20 px-4 sm:px-6 lg:px-8 snap-start max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h1 className="text-4xl font-medium text-gray-900 mb-6">
                            Comprehensive Wealth Solutions
                        </h1>
                        <p className="text-lg text-gray-500 font-light leading-relaxed max-w-2xl mx-auto px-4">
                            From investment advisory to family office services, we provide institutional-grade solutions tailored to your financial goals.
                        </p>
                    </div>

                    {/* Service Cards (Flexbox) */}
                    <div className="flex flex-wrap -mx-4 w-full">
                        {solutions.map((item, index) => (
                            <div
                                key={index}
                                className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-8"
                            >
                                <div
                                    className="bg-white border border-gray-100 p-8 flex flex-col items-start transition-all duration-300 min-h-[300px] group hover:bg-[#FFFDF5] hover:border-b-4 hover:border-b-[#D4AF37] hover:shadow-2xl hover:-translate-y-1 h-full"
                                >
                                    {/* Icon Container */}
                                    <div className="w-12 h-12 bg-gray-50 flex items-center justify-center mb-6 group-hover:bg-[#D4AF37] transition-all duration-300">
                                        <item.icon className="w-5 h-5 text-gray-700 group-hover:text-white transition-colors duration-300" />
                                    </div>

                                    <h3 className="text-lg font-medium text-gray-900 mb-3">
                                        {item.title}
                                    </h3>

                                    <p className="text-sm text-gray-500 font-light leading-relaxed mb-8 grow">
                                        {item.description}
                                    </p>

                                    <a
                                        href={item.href}
                                        className="flex items-center gap-2 text-sm text-gray-400 group-hover:text-[#D4AF37] transition-colors font-medium"
                                    >
                                        Learn more
                                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Why Clients Choose Us Section */}
                <div className="min-h-screen w-full snap-start flex flex-col items-center justify-center py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-medium text-gray-900 mb-6">
                            Why Clients Choose Us
                        </h2>
                        <p className="text-lg text-gray-500 font-light leading-relaxed max-w-2xl mx-auto">
                            We combine institutional expertise with personalized service to deliver exceptional wealth management outcomes.
                        </p>
                    </div>

                    {/* Cards Container */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                        {whyChooseUs.map((item, index) => (
                            <div
                                key={index}
                                className="w-full"
                            >
                                <div className={`p-8 border transition-all duration-300 min-h-[250px] flex flex-col items-start h-full group
                                    hover:border-[#D4AF37] shadow-lg hover:-translate-y-1 bg-white`}
                                >
                                    {/* Icon Container */}
                                    <div className={`w-12 h-12 flex items-center justify-center mb-6  group-hover:bg-[#D4AF37] bg-black group-hover:text-white transition-all`}
                                    >
                                        <item.icon className="w-5 h-5 text-white group-hover:text-white" />
                                    </div>

                                    <h3 className="text-lg font-medium text-gray-900 mb-4">
                                        {item.title}
                                    </h3>

                                    <p className="text-sm text-gray-500 font-light leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
