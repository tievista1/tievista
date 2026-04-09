import React, { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Search, Calendar, ArrowRight } from 'lucide-react'


const Publications = () => {

    const [searchTerm, setSearchTerm] = useState("")

    const publications = [
        {
            id: 1,
            title: "VISTA",
            goldtitle: "EDGE",
            description: "MONTHLY UPDATE",
            img: "https://res.cloudinary.com/dck5jgfix/image/upload/v1775732548/March_2026_foixjy.png",
            url: "https://drive.google.com/uc?export=download&id=1sBlq8NylKUpYCLFdZRVvalqO5CY2WKFi",
            date: "March, 2026"
        }
    ]

    const filteredPublications = useMemo(() => {
        return publications.filter(publication =>
            publication.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            publication.goldtitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
            publication.description.toLowerCase().includes(searchTerm.toLowerCase())
        )
    }, [searchTerm])

    const GOLD = '#D4AF37';

    const handleDownload = (url) => {
        const link = document.createElement("a");
        link.href = url;
        link.target = "_blank";
        link.click();
    };

    return (
        <>
            <div className='w-full min-h-screen bg-white selection:bg-[#D4AF37] selection:text-white'>
                {/* Header Section */}
                <div className='w-full min-h-16 bg-black px-6 md:px-16 border-b border-[#D4AF37]/20 flex items-center py-4 md:py-0'>
                    <div className='container mx-auto flex flex-col md:flex-row justify-between items-center gap-4'>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className='flex items-center gap-4'
                        >
                            <h1 className='text-lg sm:text-xl md:text-2xl text-white font-bold tracking-tight mb-0 flex items-center gap-2' style={{ fontFamily: 'PT Serif, serif' }}>
                                INSIGHTS & <span className='gold-text'>PUBLICATIONS</span>
                            </h1>
                            <div className='hidden md:block w-px h-6 bg-white/20' />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className='relative w-full max-w-[240px] md:max-w-xs group'
                        >
                            <input
                                type="text"
                                placeholder='Search...'
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className='w-full h-9 bg-white/5 border border-white/10 px-10 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#D4AF37] focus:bg-white/10 transition-all duration-300 rounded-none'
                            />
                            <Search className='absolute left-3 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-[#D4AF37] transition-colors size-4' />
                            {searchTerm && (
                                <button
                                    onClick={() => setSearchTerm('')}
                                    className='absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors text-lg'
                                >
                                    ×
                                </button>
                            )}
                        </motion.div>
                    </div>
                </div>

                {/* Blogs List Container - Optimized padding for h-screen cards */}

                <div className='container mx-auto py-10 px-6 lg:px-16'>
                    <AnimatePresence mode='wait'>
                        {filteredPublications.length > 0 ? (
                            <motion.div
                                key="flex-container"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className='flex flex-wrap justify-center gap-8 md:gap-12'
                            >
                                {filteredPublications.map((publication, idx) => (
                                    <a href={publication.url}>
                                        <motion.div
                                            key={publication.id}
                                            initial={{ opacity: 0, y: 30 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                                            viewport={{ once: true }}
                                            whileHover={{ y: -10 }}
                                            className='group flex flex-col bg-white border border-gray-100 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 w-full md:w-[360px] '
                                        >
                                            {/* Header Text - Tightened */}
                                            <div className='flex flex-col p-6 pb-2'>
                                                <h3
                                                    className='text-3xl md:text-4xl font-bold leading-tight flex flex-wrap gap-2'
                                                    style={{ fontFamily: 'PT Serif, serif' }}
                                                >
                                                    <span className='text-black block mb-0.5'>{publication.title}</span>
                                                    <span className='gold-text block'>{publication.goldtitle}</span>
                                                </h3>
                                            </div>

                                            <div className=' flex flex-col p-6 pt-4'>
                                                <div className='flex items-center gap-2'>
                                                    <Calendar className='size-3' style={{ color: GOLD }} />
                                                    <span className='text-sm font-semibold tracking-[0.25em] uppercase text-black' style={{ fontFamily: 'PT Serif, serif' }}>
                                                        {publication.date}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Image Container - 1:1 Aspect Ratio (now 360px based) */}
                                            <div className='relative w-full h-30 sm:h-50 md:h-40 overflow-hidden bg-gray-50'>
                                                <div className='relative w-full h-30 sm:h-50 md:h-40 overflow-hidden bg-gray-50'>
                                                    <img
                                                        src={publication.img || 'https://images.unsplash.com/photo-1454165833767-1314389bcdb8?q=80&w=1000'}
                                                        alt={publication.title}
                                                        className='absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-95 group-hover:opacity-100'
                                                    />
                                                    <div className='absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500' />
                                                    <div
                                                        className="absolute bottom-0 left-0 w-10 h-10 opacity-0 group-hover:opacity-80 transition-opacity duration-500"
                                                        style={{ background: `linear-gradient(135deg, ${GOLD} 50%, transparent 50%)` }}
                                                    />
                                                </div>
                                            </div>

                                            {/* Content Area - Optimized for visibility */}
                                            <div className=' flex flex-col p-6 pt-4'>


                                                <p className='text-black text-sm md:text-base font-light mb-6 line-clamp-3 md:line-clamp-none' style={{ fontFamily: 'PT Serif, serif' }}>
                                                    {publication.description}
                                                </p>

                                                <a
                                                    onClick={() => handleDownload(publication.url)}
                                                    className='inline-flex items-center gap-2 text-[11px] font-bold tracking-widest uppercase text-[#D4AF37] group/link mt-auto' style={{ fontFamily: 'PT Serif, serif' }}
                                                >
                                                    Download
                                                    <ArrowRight className='size-3 transition-transform duration-300 group-hover/link:translate-x-1' />
                                                </a>
                                            </div>

                                        </motion.div>
                                    </a>
                                ))}
                            </motion.div>
                        ) : (
                            <motion.div
                                key="no-results"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className='flex flex-col items-center justify-center py-24'
                            >
                                <p className='text-black font-light mb-4' style={{ fontFamily: 'PT Serif, serif' }}>No insights found matching "{searchTerm}"</p>
                                <button
                                    onClick={() => setSearchTerm('')}
                                    className='text-sm uppercase tracking-widest'
                                    style={{ color: GOLD }}
                                >
                                    Clear search
                                </button>

                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

            </div>
        </>
    )
}

export default Publications