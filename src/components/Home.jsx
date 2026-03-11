import React, { useState, useEffect, useRef } from 'react'
import { Square, Landmark, TrendingUp, Users, Globe, Briefcase, FileText, Mail, ArrowRight, ShieldCheck, Search, UserCheck, DollarSign, Award, Star } from 'lucide-react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { useGSAP } from '@gsap/react'


gsap.registerPlugin(ScrollTrigger);


const Home = () => {
    const [videoLoaded, setVideoLoaded] = useState(false);

    useGSAP(() => {
        gsap.fromTo('#text', { x: '100%' }, {
            x: '-100%',
            repeat: -1,
            duration: 10,
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
                    {!videoLoaded && (
                        <div className="fixed inset-0 bg-black z-[200] flex items-center justify-center">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="flex flex-col items-center gap-6"
                            >
                                <div className="h-30 w-30">
                                    <img src="/icon.png" className="h-full w-full animate-pulse" alt="Icon" />
                                </div>
                                <span className="text-[#c9a36b] tracking-[0.4em] uppercase text-[10px] animate-pulse">
                                    TieVista
                                </span>
                            </motion.div>
                        </div>
                    )}

                    {/* Background Video */}
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="auto"
                        poster="/hero-thumbnail.jpg"
                        onLoadedData={() => setVideoLoaded(true)}
                        className={`absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-700 ${videoLoaded ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        {/* Mobile - small file */}
                        <source
                            media="(max-width: 768px)"
                            src="https://res.cloudinary.com/dxlysvpud/video/upload/w_480,h_854,c_fill,q_30,f_auto,ac_none/v1773212606/TieVistaIntroNew_hzve1t.mp4"
                        />
                        {/* Desktop */}
                        <source
                            src="https://res.cloudinary.com/dxlysvpud/video/upload/w_1920,h_1080,c_fill,q_60,f_auto/v1773212606/TieVistaIntroNew_hzve1t.mp4"
                        />
                    </video>

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
                        <span className="whitespace-nowrap ">Trust</span><span className='text-[#D4AF37]'>• </span>
                        <span className="whitespace-nowrap ">Transparency</span><span className='text-[#D4AF37]'>• </span>
                        <span className="whitespace-nowrap ">Transformation</span>
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
                            Trust <span className="font-light bg-gradient-to-r from-[#f3d34f] via-[#d59d1c] via-[#f5d958] to-[#e0b12d] bg-clip-text text-transparent ">first</span>
                        </motion.h1>
                        <motion.p variants={itemVariants} className="text-xl md:text-2xl text-gray-800 mb-8 leading-relaxed font-light">
                            At TieVista, trust is not earned post-engagement — it is the foundation of
                            engagement. <span className="font-semibold block mt-2 underline decoration-[#D4AF37]">Trust is our currency.</span>
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
                                    <CheckCircle2 size={20} className="text-[#D4AF37] group-hover:scale-110 transition-transform" />
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
                            Transparency <span className="font-light bg-gradient-to-r from-[#f3d34f] via-[#d59d1c] via-[#f5d958] to-[#e0b12d] bg-clip-text text-transparent">always</span>
                        </motion.h1>
                        <motion.p variants={itemVariants} className="font-semibold block mt-2 underline text-2xl mb-5 decoration-[#D4AF37]" style={{ fontFamily: 'PT Serif, sans-serif' }}>
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
                                <div key={i} className="flex items-center gap-2 border-l-2 border-[#D4AF37] pl-4 py-1">
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
                            Transformation through <span className="font-light bg-gradient-to-r from-[#f3d34f] via-[#d59d1c] via-[#f5d958] to-[#e0b12d] bg-clip-text text-transparent">innovation</span>
                        </motion.h1>
                        <motion.p variants={itemVariants} className="text-xl md:text-2xl text-gray-800 mb-8 leading-relaxed font-light">
                            At TieVista, innovation is not about chasing trends — it is about structurally improving how wealth is built, managed, and experienced.
                            True transformation begins with questioning legacy models. <span className="font-semibold block mt-2 underline decoration-[#D4AF37]">Traditional wealth management often operates in silos:</span>
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
                                    <TrendingUp size={20} className="text-[#D4AF37] group-hover:scale-110 transition-transform" />
                                    <span className="text-black font-medium text-lg">{item}</span>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>


            </div>
        </>
    )
}

export default Home;
