import React, { useState, useMemo } from 'react'
import { Search, Calendar, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'

const Blogs = () => {
    const [searchTerm, setSearchTerm] = useState('')

    const blogs = [
        {
            id: 1,
            title: "Decluttering the Noise Around",
            goldtitle: "US Private Credit Crisis",
            description: "Private Credit expanded rapidly after 2008, when banks were forced to pull back from risky lending. It now faces a crucial test.",
            img: "https://res.cloudinary.com/dr1u4plse/image/upload/v1774960590/US_CRISIS_bpyyrp.png",
            url: "/blogs/decluttering-the-noise-around",
            date: "March 28, 2026"
        },

    ]

    const filteredBlogs = useMemo(() => {
        return blogs.filter(blog =>
            blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            blog.goldtitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
            blog.description.toLowerCase().includes(searchTerm.toLowerCase())
        )
    }, [searchTerm])

    const GOLD = '#D4AF37'

    return (
        <div className='w-full min-h-screen bg-white selection:bg-[#D4AF37] selection:text-white'>
            {/* Header Section */}
            <div className='w-full h-16 bg-black px-6 md:px-16 border-b border-[#D4AF37]/20 flex items-center'>
                <div className='container mx-auto flex justify-between items-center gap-4'>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className='flex items-center gap-4'
                    >
                        <h1 className='text-xl md:text-2xl text-white font-bold tracking-tight mb-0 flex items-center gap-2' style={{ fontFamily: 'PT Serif, serif' }}>
                            INSIGHTS & <span className='gold-text'>BLOGS</span>
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
                    {filteredBlogs.length > 0 ? (
                        <motion.div
                            key="flex-container"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className='flex flex-wrap justify-center gap-12'
                        >
                            {filteredBlogs.map((blog, idx) => (
                                <Link to={blog.url}>
                                    <motion.div
                                        key={blog.id}
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
                                                className='text-xl font-bold leading-tight'
                                                style={{ fontFamily: 'PT Serif, serif' }}
                                            >
                                                <span className='text-black block mb-0.5'>{blog.title}</span>
                                                <span className='gold-text block'>{blog.goldtitle}</span>
                                            </h3>
                                        </div>

                                        {/* Image Container - 1:1 Aspect Ratio (now 360px based) */}
                                        <div className=''>
                                            <div className='relative w-full aspect-square overflow-hidden bg-gray-50'>
                                                <img
                                                    src={blog.img || 'https://images.unsplash.com/photo-1454165833767-1314389bcdb8?q=80&w=1000'}
                                                    alt={blog.title}
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
                                            <div className='flex items-center gap-2 mb-3'>
                                                <Calendar className='size-3' style={{ color: GOLD }} />
                                                <span className='text-[9px] font-semibold tracking-[0.25em] uppercase text-black' style={{ fontFamily: 'PT Serif, serif' }}>
                                                    {blog.date}
                                                </span>
                                            </div>

                                            <p className='text-black text-sm font-light mb-6' style={{ fontFamily: 'PT Serif, serif' }}>
                                                {blog.description}
                                            </p>

                                            <a
                                                href={blog.url}
                                                className='inline-flex items-center gap-2 text-[11px] font-bold tracking-widest uppercase text-[#D4AF37] group/link mt-auto' style={{ fontFamily: 'PT Serif, serif' }}
                                            >
                                                Read More
                                                <ArrowRight className='size-3 transition-transform duration-300 group-hover/link:translate-x-1' />
                                            </a>
                                        </div>

                                    </motion.div>
                                </Link>
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
    )
}

export default Blogs
