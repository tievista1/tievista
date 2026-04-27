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

                {/* Hidden SEO H1 */}
                <h1 className="sr-only">TieVista</h1>

                {/* Hero Snap Scroll Section */}
                <div className="h-[100vh] w-full snap-start relative flex items-center justify-center overflow-hidden border-b border-gray-100">

                    <img className='absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-700' src="https://res.cloudinary.com/dck5jgfix/image/upload/v1777033664/HomeBG_jbaa4u.png" alt="LandingPage" loading='lazy' />


                    {/* Content */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.5 }}
                        variants={containerVariants}
                        className="relative h-full top-45 left-10 z-50   w-full"
                    >
                        <motion.div
                            variants={itemVariants}
                            className="flex justify-start items-center text-5xl md:text-7xl lg:text-9xl mb-6 font-bold tracking-tighter"
                            style={{ fontFamily: 'PT Serif, sans-serif' }}
                        >
                            {/* <img className='w-100 h-25 md:h-28 lg:w-150 lg:h-35' src="/TieVistaVerticalLogo.png" alt="" /> */}
                            <div className='flex flex-col'>
                                <h1 className='text-black font-light lg:text-7xl text-5xl '>Beyond Wealth, Towards Legacy</h1>
                            </div>

                        </motion.div>
                    </motion.div>

                </div>

                <AboutUs />

            </div>
        </>
    )
}

export default Home;
