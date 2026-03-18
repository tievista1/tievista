import React, { useState, useCallback, useMemo } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '/TieVistaLogo.png';
import { Link } from 'react-router-dom';

const GOLD = '#D4AF37';

const DROPDOWN_VARIANTS = {
    hidden: { height: 0, opacity: 0 },
    visible: { height: 'auto', opacity: 1, transition: { duration: 0.2, ease: 'easeInOut' } },
    exit: { height: 0, opacity: 0, transition: { duration: 0.15, ease: 'easeInOut' } },
};

const MOBILE_MENU_VARIANTS = {
    hidden: { height: 0, opacity: 0 },
    visible: { height: 'auto', opacity: 1, transition: { duration: 0.3, ease: 'easeInOut' } },
    exit: { height: 0, opacity: 0, transition: { duration: 0.25, ease: 'easeInOut' } },
};

// ─── Desktop Dropdown ───────────────────────────────────────────────────────
const DesktopDropdown = ({ items, depth = 0 }) => {
    const [hoveredItem, setHoveredItem] = useState(null);

    return (
        <div 
            className={`absolute bg-white shadow-xl border border-gray-100 rounded-sm z-50 ${depth === 0 ? 'left-0 mt-0 w-64' : 'left-full top-0 w-64'}`}
            onMouseLeave={() => setHoveredItem(null)}
        >
            {items.map((item, i) => (
                <div 
                    key={i} 
                    className="relative group/sub"
                    onMouseEnter={() => item.hasDropdown && setHoveredItem(item.label)}
                >
                    <Link
                        to={item.href}
                        {...(item.target ? { target: item.target } : {})}
                        className="flex items-center justify-between px-6 py-3 text-sm text-gray-600 hover:text-[#D4AF37] hover:bg-gray-50 transition-colors"
                    >
                        <span>{item.label}</span>
                        {item.hasDropdown && (
                            <ChevronDown
                                size={14}
                                className="-rotate-90 text-gray-400 group-hover/sub:text-[#D4AF37]"
                            />
                        )}
                    </Link>
                    {item.hasDropdown && hoveredItem === item.label && (
                        <DesktopDropdown items={item.dropdownItems} depth={depth + 1} />
                    )}
                </div>
            ))}
        </div>
    );
};

// ─── Desktop Nav Item ────────────────────────────────────────────────────────
const DesktopNavItem = ({ item, isActive, onEnter, onLeave }) => (
    <div
        className="relative group"
        onMouseEnter={() => item.hasDropdown && onEnter(item.label)}
        onMouseLeave={onLeave}
    >
        <Link to={item.href}>
            <button
                className="flex items-center gap-1 text-[14px] font-normal text-black hover:text-[#D4AF37] transition-colors hover:cursor-pointer"
                aria-haspopup={item.hasDropdown ? 'true' : undefined}
                aria-expanded={item.hasDropdown ? String(isActive) : undefined}
            >
                {item.label}
                {item.hasDropdown && (
                    <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${isActive ? 'rotate-180' : ''}`}
                    />
                )}
            </button>
        </Link>

        {item.hasDropdown && isActive && (
            <DesktopDropdown items={item.dropdownItems} />
        )}
    </div>
);

// ─── Mobile Nav Item ─────────────────────────────────────────────────────────
const MobileNavItem = ({ item, isOpen, onToggle, onClose, depth = 0 }) => {
    const [activeSubDropdown, setActiveSubDropdown] = useState(null);

    const toggleSubDropdown = (label) => {
        setActiveSubDropdown(prev => prev === label ? null : label);
    };

    return (
        <div className={`border-b border-gray-50 last:border-none ${depth > 0 ? 'border-none' : ''}`}>
            <div className="flex items-center justify-between w-full">
                <Link
                    to={item.href}
                    onClick={onClose}
                    className={`flex-grow py-4 text-gray-700 hover:text-black hover:bg-gray-50 px-2 rounded-md transition-all ${depth === 0 ? 'text-[15px] font-medium' : 'text-sm font-normal text-gray-500'}`}
                >
                    {item.label}
                </Link>
                {item.hasDropdown && (
                    <button
                        onClick={onToggle}
                        className="p-4 text-gray-400 hover:text-black transition-colors"
                        aria-expanded={String(isOpen)}
                        aria-label={`Toggle ${item.label} submenu`}
                    >
                        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                            <ChevronDown size={18} />
                        </motion.div>
                    </button>
                )}
            </div>

            <AnimatePresence>
                {item.hasDropdown && isOpen && (
                    <motion.div
                        variants={DROPDOWN_VARIANTS}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="overflow-hidden"
                    >
                        <div className="pl-6 pb-2 space-y-0 mt-1 border-l-2 ml-2" style={{ borderColor: GOLD }}>
                            {item.dropdownItems.map((dropItem, i) => (
                                <MobileNavItem
                                    key={i}
                                    item={dropItem}
                                    depth={depth + 1}
                                    isOpen={activeSubDropdown === dropItem.label}
                                    onToggle={() => toggleSubDropdown(dropItem.label)}
                                    onClose={onClose}
                                />
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

// ─── Main Navbar ─────────────────────────────────────────────────────────────
export const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);

    const closeMobileMenu = useCallback(() => setIsMobileMenuOpen(false), []);
    const openDropdown = useCallback((label) => setActiveDropdown(label), []);
    const closeDropdown = useCallback(() => setActiveDropdown(null), []);
    const toggleMobileMenu = useCallback(() => setIsMobileMenuOpen((prev) => !prev), []);
    const toggleMobileDropdown = useCallback(
        (label) => setActiveMobileDropdown((prev) => (prev === label ? null : label)),
        []
    );

    const loginOptions = useMemo(() => [
        { label: 'Client Login', target: '_blank', href: 'https://app.tievista.com/wealthspectrum/portal/sign-in' },
        { label: 'Employee Login', target: '_blank', href: 'https://app.tievista.com/wealthspectrum/portal/sign-in' },
        { label: 'Partner Login', target: '_blank', href: 'https://app.tievista.com/wealthspectrum/portal/sign-in' },
    ], []);

    const navItems = useMemo(() => [
        { label: 'Home', href: '/' },
        {
            label: 'Services',
            href: '/services',
            hasDropdown: false,
            dropdownItems: [
                { label: 'Family Office Structuring', href: '/services/family-office-structuring' },
                { label: 'Succession & Estate Planning', href: '/services/succession-estate-planning' },
                { label: 'Governance', href: '/services/governance' },
                { label: 'Tax & Repatriation', href: '/services/tax-repatriation' },
            ],
        },
        {
            label: 'Allied Services',
            href: '/b2b',
            hasDropdown: false,
            dropdownItems: [
                { label: 'Family Office Structuring', href: '/b2b/family-office-structuring' },
                { label: 'Succession & Estate Planning', href: '/b2b/succession-estate-planning' },
                { label: 'Governance', href: '/b2b/governance' },
                { label: 'Tax & Repatriation', href: '/b2b/tax-repatriation' },
            ],
        },
        {
            label: 'NRI Solutions',
            href: '/nrisolutions',
            hasDropdown: false,
            dropdownItems: [
                { label: 'NRI Fixed Deposits', href: '/nrisolutions/nrifixeddeposits' },
                { label: 'Remittance Solutions', href: '/nrisolutions/remittancesolutions' },
                { label: 'Global Multi-Currency Reporting', href: '/nrisolutions/globalmulticurrencyreporting' },
                { label: 'Global Investment', href: '/nrisolutions/globalinvestment' },
            ],
        },
        {
            label: 'Global & GIFT City Solutions',
            href: '/globalgiftcitysolutions',
            hasDropdown: false,
            dropdownItems: [
                { label: 'GIFT City PMS & AIFs', href: '/globalgiftcitysolutions/giftcitypmsandaifs' },
                { label: 'International Mutual Funds', href: '/globalgiftcitysolutions/internationalmutualfunds' },
                { label: 'Global Equities', href: '/globalgiftcitysolutions/globalequities' },
                { label: 'Global ETFs', href: '/globalgiftcitysolutions/globaletfs' },
            ],
        },
        {
            label: 'More...',
            href: '#',
            hasDropdown: true,
            dropdownItems: [
                {
                    label: 'Investment Universe',
                    href: '/investmentuniverse',
                    hasDropdown: true,
                    dropdownItems: [
                        { label: 'Growth Assets', href: '/investmentuniverse#Growth' },
                        { label: 'Income & Capital Preservation', href: '/investmentuniverse#Income' },
                        { label: 'Private & Alternative Investments', href: '/investmentuniverse#Private' },
                    ]
                },
                // {
                //     label: 'Insights',
                //     href: '/insights',
                //     hasDropdown: true,
                //     dropdownItems: [
                //         { label: 'Videos', href: '/insights/videos' },
                //         { label: 'Blogs', href: '/insights/blogs' },
                //     ]
                // },
                { label: 'Contact Us', href: '/contact' },
                // {
                //     label: 'Invest Now',
                //     href: '',
                //     hasDropdown: true,
                //     dropdownItems: [
                //         { label: 'Mutual Funds', href: 'https://app.tievista.com/wealthspectrum/portal/sign-in' }
                //     ],
                // },
            ],
        },
    ], []);

    const isLoginActive = activeDropdown === 'Login';

    return (
        <div className="w-full sticky top-0 z-[100] shadow-sm">
            <nav className="bg-white border-b w-full border-gray-100 px-4 sm:px-8 lg:px-12 xl:px-20">
                <div className="max-w-[1600px] mx-auto">
                    <div className="flex justify-between items-center h-15 space-x-6">

                        {/* Logo */}
                        <Link to="/" onClick={closeMobileMenu}>
                            <div className="flex items-center gap-3">
                                <div className="w-20 h-20 flex items-center justify-center">
                                    <img className="h-full w-full object-contain" src={logo} alt="TieVista Logo" />
                                </div>
                            </div>
                        </Link>

                        {/* Desktop Nav */}
                        <div className="hidden xl:flex items-center space-x-6">
                            {navItems.map((item, i) => (
                                <DesktopNavItem
                                    key={i}
                                    item={item}
                                    isActive={activeDropdown === item.label}
                                    onEnter={openDropdown}
                                    onLeave={closeDropdown}
                                />
                            ))}
                        </div>

                        {/* Desktop Login */}
                        <div
                            className="hidden xl:flex relative group justify-center items-center"
                            onMouseEnter={() => openDropdown('Login')}
                            onMouseLeave={closeDropdown}
                        >
                            <button
                                className="px-8 py-2 border text-sm font-medium transition-all duration-300 hover:cursor-pointer"
                                style={{
                                    borderColor: GOLD,
                                    color: isLoginActive ? 'white' : GOLD,
                                    backgroundColor: isLoginActive ? GOLD : 'transparent',
                                }}
                                aria-haspopup="true"
                                aria-expanded={String(isLoginActive)}
                            >
                                Login
                            </button>

                            {isLoginActive && (
                                <div className="absolute top-full right-0 mt-0 w-48 bg-white shadow-xl border border-gray-100 rounded-sm z-50 overflow-hidden">
                                    {loginOptions.map((item, i) => (
                                        <a
                                            key={i}
                                            href={item.href}
                                            target={item.target}
                                            className="block px-6 py-3 text-sm text-gray-600 hover:bg-gray-50 hover:text-[#D4AF37] transition-colors"
                                        >
                                            {item.label}
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Mobile Menu Toggle */}
                        <div className="xl:hidden flex items-center">
                            <button
                                onClick={toggleMobileMenu}
                                className="text-gray-600 p-2"
                                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                                aria-expanded={String(isMobileMenuOpen)}
                            >
                                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            variants={MOBILE_MENU_VARIANTS}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="xl:hidden bg-white border-t border-gray-100 overflow-hidden"
                        >
                            <div className="max-h-[70vh] overflow-y-auto py-4 px-4 space-y-1">
                                {navItems.map((item, i) => (
                                    <MobileNavItem
                                        key={i}
                                        item={item}
                                        isOpen={activeMobileDropdown === item.label}
                                        onToggle={() => toggleMobileDropdown(item.label)}
                                        onClose={closeMobileMenu}
                                    />
                                ))}

                                {/* Mobile Login */}
                                <div className="pt-6 pb-20 border-t border-gray-100 mt-4">
                                    <button
                                        onClick={() => toggleMobileDropdown('Login')}
                                        className="w-full py-4 border text-[15px] font-medium rounded-sm flex justify-between items-center px-4"
                                        style={{ borderColor: GOLD, color: GOLD }}
                                        aria-expanded={String(activeMobileDropdown === 'Login')}
                                    >
                                        Login
                                        <motion.div
                                            animate={{ rotate: activeMobileDropdown === 'Login' ? 180 : 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <ChevronDown size={16} />
                                        </motion.div>
                                    </button>

                                    <AnimatePresence>
                                        {activeMobileDropdown === 'Login' && (
                                            <motion.div
                                                variants={DROPDOWN_VARIANTS}
                                                initial="hidden"
                                                animate="visible"
                                                exit="exit"
                                                className="overflow-hidden bg-gray-50/50 mt-2 rounded-sm"
                                            >
                                                {loginOptions.map((option, i) => (
                                                    <a
                                                        key={i}
                                                        href={option.href}
                                                        target={option.target}
                                                        onClick={closeMobileMenu}
                                                        className="block px-6 py-4 text-sm text-gray-600 hover:text-[#D4AF37] hover:bg-gray-100 transition-colors"
                                                    >
                                                        {option.label}
                                                    </a>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </div>
    );
};



