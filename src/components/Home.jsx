import React, { useState, useEffect, useRef } from 'react'
import { Square, Landmark, TrendingUp, Users, Globe, Briefcase, FileText, Mail, ArrowRight, ShieldCheck, Search, UserCheck, DollarSign, Award, Star } from 'lucide-react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { useGSAP } from '@gsap/react'
import AboutUs from './AboutUs';


gsap.registerPlugin(ScrollTrigger);


const Home = () => {
    const [videoLoaded, setVideoLoaded] = useState(false);
    useEffect(() => {
        // Force show page after 2s on slow/mobile connections
        const timeout = setTimeout(() => {
            setVideoLoaded(true);
        }, 2000);

        return () => clearTimeout(timeout);
    }, []);

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
                <div className="h-[100vh] w-full snap-start relative flex items-center justify-center overflow-hidden border-b border-gray-100">
                    {/* {!videoLoaded && (
                        <div className="fixed inset-0 bg-white z-[200] flex items-center justify-center">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="flex flex-col items-center gap-6"
                            >
                                <div className="h-30 w-30">
                                    <img src="/TieVistaLogo.png" className="h-full w-full animate-pulse" alt="Icon" />
                                </div>
                                
                            </motion.div>
                        </div>
                    )}

                    Background Video
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="auto"
                        poster="/hero-thumbnail.jpg"
                        onLoadedMetadata={() => setVideoLoaded(true)}  // ⚡ fastest event
                        onLoadedData={() => setVideoLoaded(true)}       // fallback event
                        onCanPlay={() => setVideoLoaded(true)}
                        className={`absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-700 ${videoLoaded ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        {/* Mobile - small file 
                        <source
                            media="(max-width: 768px)"
                            src="https://res.cloudinary.com/dxlysvpud/video/upload/w_480,h_854,c_fill,q_60,f_auto,ac_none/v1773212606/TieVistaIntroNew_hzve1t.mp4"
                        />
                        {/* Desktop 
                        <source
                            src="https://res.cloudinary.com/dxlysvpud/video/upload/w_1920,h_1080,c_fill,q_60,f_auto/v1773212606/TieVistaIntroNew_hzve1t.mp4"
                        />
                    </video> */}
                    <img className='absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-700' src="/Landingpage.png" alt="" />
                    {/* <div className='flex justify-center items-center absolute inset-0 z-20 w-full h-full p-4 py-20 md:p-10 lg:p-20 bg-transparent'>
                        <div className='h-full w-full bg-amber-50/60 rounded-3xl md:rounded-4xl'></div>
                    </div> */}

                    {/* Content */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.5 }}
                        variants={containerVariants}
                        className="relative z-50 max-w-7xl w-full"
                    >
                        <motion.div
                            variants={itemVariants}
                            className="flex justify-start items-center text-5xl md:text-7xl lg:text-9xl mb-6 font-bold tracking-tighter"
                            style={{ fontFamily: 'PT Serif, sans-serif' }}
                        >
                            {/* <img className='w-100 h-25 md:h-28 lg:w-150 lg:h-35' src="/TieVistaVerticalLogo.png" alt="" /> */}
                            <h1 className='text-white'>Beyond Wealth, Towards Legacy</h1>
                            
                        </motion.div>
                    </motion.div>

                </div>

                <AboutUs />


            </div>
        </>
    )
}

export default Home;
