import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, Linkedin, Twitter, Instagram } from 'lucide-react'
import logo from '/TieVistaLogo.png'
import { motion } from 'framer-motion'

const GOLD = '#D4AF37'

export const Footer = () => {

  return (
    <footer className="bg-black text-white py-5 lg:py-10 border-t border-gray-800 selection:bg-[#D4AF37] selection:text-white">

      <section className="w-full min-h-[20vh] bg-black flex items-center justify-center relative overflow-hidden py-8">

        {/* Background texture: subtle gold diagonal lines */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, #D4AF37 0px, #D4AF37 1px, transparent 1px, transparent 40px)',
          }}
        />

        {/* Large ghost text */}
        <div
          className="absolute inset-0 flex items-center justify-center select-none pointer-events-none overflow-hidden"
          aria-hidden
        >
          <span
            className="text-[18vw] font-bold tracking-tighter leading-none opacity-[0.025] text-white gold-text"
            style={{ fontFamily: 'PT Serif, serif' }}
          >
            Tievista
          </span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="relative z-10 px-6 max-w-4xl mx-auto"
        >
          {/* Gold rule */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="w-16 h-px mx-auto mb-10"
            style={{ background: GOLD, transformOrigin: 'left' }}
          />

          <p className="text-sm text-white tracking-[0.3em] uppercase font-light mb-6 gold-text">Our Identity</p>

          <h2
            className="text-sm font-light leading-relaxed tracking-tight text-white mb-10"
            style={{ fontFamily: 'PT Serif, serif' }}
          >
            IndusArtha Financial Services Private Limited,
            known as TieVista - designed to simplify complexity and provide clear oversight.
          </h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="w-16 h-px mx-auto"
            style={{ background: `${GOLD}60`, transformOrigin: 'right' }}
          />
        </motion.div>
      </section>

      <div className="py-5 mx-auto px-6 lg:px-16">

        {/* Main Content Area */}
        <div className="flex flex-wrap gap-10 lg:gap-20 mb-16">

          {/* Brand Section */}
          <div className="flex-1 min-w-[280px]">
            <Link to="/" className="inline-block mb-6">
              <div className="w-25 h-25 p-2 flex items-center justify-center ">
                <img src={logo} alt="TieVista Logo" className="w-full h-full object-contain brightness-0 invert" />
              </div>
            </Link>
            <p className="text-white font-light leading-relaxed max-w-sm">

            </p>
            <div className="flex gap-4 mt-8 ">
              <a href="https://www.linkedin.com/company/tievista/" className="flex gap-2 group">
                <div className='w-10 h-10 rounded-full border border-white flex items-center justify-center text-white group-hover:border-[#D4AF37] group-hover:text-[#D4AF37] transition-all'>
                  <Linkedin size={18} />
                </div>
                <h6 className='flex justify-center items-center text-white group-hover:border-[#D4AF37] group-hover:text-[#D4AF37] transition-all font-light text-sm'> LinkedIn</h6>

              </a>

              <a href="https://mail.google.com/mail/u/0/#inbox/FMfcgzQfCDMHbJDLQnzjfQrXtpdWmsWT?compose=CllgCKCHTgqwmLnLdDGDGqZPpjWNgdMRxHRBGHFkvGNDsWlMKlbtnzLBbNqklMcpWRrjLkRQMZL" className="flex gap-2 group">
                <div className='w-10 h-10 rounded-full border border-white flex items-center justify-center text-white group-hover:border-[#D4AF37] group-hover:text-[#D4AF37] transition-all'>
                  <Mail size={18} />
                </div>
                <h6 className='flex justify-center items-center text-white group-hover:border-[#D4AF37] group-hover:text-[#D4AF37] transition-all font-light text-sm'>Email</h6>
              </a>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="flex flex-wrap gap-12 lg:gap-24">

            {/* Column 1 */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.3em] mb-6 gold-text">
                Quick Links
              </h4>
              <ul className="space-y-4 font-light text-white">
                <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/aboutus" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
                <li><Link to="/nrisolutions" className="hover:text-white transition-colors">NRI Solutions</Link></li>
                <li><Link to="/partners" className="hover:text-white transition-colors">Partners</Link></li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.3em] mb-6" style={{ color: GOLD }}>
                Solutions
              </h4>
              <ul className="space-y-4 font-light text-white">
                <li><Link to="/investmentuniverse" className="hover:text-white transition-colors">Investment Universe</Link></li>
                <li><Link to="/b2b" className="hover:text-white transition-colors">Allied Services</Link></li>
                {/* <li><Link to="/insights" className="hover:text-white transition-colors">Insights</Link></li> */}
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              </ul>
            </div>

          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-800 mb-10" />

        {/* Disclaimer Section */}
        <div className="mb-10">
          <p className="text-[12px]  leading-relaxed text-white text-justify md:text-left">
            Mutual fund investments are subject to market risks. Please read the scheme information and other related documents carefully before investing. Past performance is not indicative of future returns. Please consider your specific investment requirements before choosing a fund,or designing a portfolio that suits your needs. IndusArtha financial services private limited, (with ARN code 342010 and APRN code 07336) makes no warranties or representations, express or implied, on products offered through the platform. It accepts no liability for any damages or losses, however caused, in connection with the use of, or on the reliance of its product or related services. Terms and conditions of the website are applicable.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[12px] text-white font-light pt-8 border-t border-gray-900">
          <p>© 2025 TieVista. All rights reserved.</p>
          <div className="flex gap-8">
            <Link to="/privacypolicy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Use</Link>

          </div>
        </div>

      </div>
    </footer>
  )
}
