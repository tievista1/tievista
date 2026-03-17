import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, Linkedin, Twitter, Instagram } from 'lucide-react'
import logo from '/TieVistaLogo.png'

const GOLD = '#D4AF37'

export const Footer = () => {

  return (
    <footer className="bg-black text-white py-5 lg:py-10 border-t border-gray-800 selection:bg-[#D4AF37] selection:text-white">
      <div className=" sm:h-[90vh] lg:h-[80vh]  py-5 mx-auto px-6 lg:px-16">

        {/* Main Content Area */}
        <div className=" flex flex-wrap gap-10 lg:gap-20 mb-16">

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
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.3em] mb-6" style={{ color: GOLD }}>
                Solutions
              </h4>
              <ul className="space-y-4 font-light text-white">
                <li><Link to="/investmentuniverse" className="hover:text-white transition-colors">Investment Universe</Link></li>
                <li><Link to="/b2b" className="hover:text-white transition-colors">TieVista Partnership</Link></li>
                <li><Link to="/insights" className="hover:text-white transition-colors">Insights</Link></li>
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
            Mutual fund investments are subject to market risks. Please read the scheme information and other related documents carefully before investing. Past performance is not indicative of future returns. Please consider your specific investment requirements before choosing a fund,or designing a portfolio that suits your needs. IndusArtha financial services private limited, (with ARN code342010 and APRN code 07336) makes no warranties or representations, express or implied, on products offered through the platform. It accepts no liability for any damages or losses, however caused, in connection with the use of, or on the reliance of its product or related services. Terms and conditions of the website are applicable.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[12px] text-white font-light pt-8 border-t border-gray-900">
          <p>© 2026 Tievista. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-white transition-colors">Disclosure</a>
          </div>
        </div>

      </div>
    </footer>
  )
}
