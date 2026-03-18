import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  Users, Globe, Star, Copyright, FilePlus, AlertCircle, 
  BarChart3, FastForward, ShieldAlert, ExternalLink, 
  RefreshCw, FileCheck, ShieldOff, Scale, ShieldCheck, 
  Gavel, ArrowRight, FileText, Scissors, Lock, Info 
} from 'lucide-react'

/* ─── Shared animation helpers ─── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay },
  viewport: { once: true, margin: '-40px' },
})

const GOLD = '#D4AF37'

const TermsAndConditions = () => {
  return (
    <div className="bg-white min-h-screen font-sans selection:bg-[#D4AF37] selection:text-white pt-32 pb-20">
      <div className="container mx-auto px-6 lg:px-16 max-w-5xl">
        
        {/* Header Section */}
        <motion.div {...fadeUp(0)} className="mb-20">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-px" style={{ background: GOLD }} />
            <span className="text-xs font-semibold tracking-[0.35em] uppercase text-gray-400">Legal</span>
          </div>
          <h1 
            className="text-5xl md:text-7xl tracking-tighter leading-none mb-8"
            style={{ fontFamily: 'PT Serif, serif' }}
          >
            Terms of <span className="gold-text">Use</span>
          </h1>
          <p className="text-xl text-gray-600 font-light leading-relaxed max-w-3xl">
            IndusArtha Financial Services Pvt. Ltd., its subsidiaries and affiliates (collectively, “IndusArtha”,“Tievista”,  “we”, “us” or “our”), require all visitors to this website and any other websites owned, operated, or controlled by IndusArtha to adhere to the following Terms of Use.
          </p>
        </motion.div>

        {/* Intro Text */}
        <motion.div {...fadeUp(0.1)} className="mb-16 prose prose-lg prose-gray max-w-none text-gray-600 font-light leading-relaxed">
          <p>
            By accessing and/or using the Website and any information, content, data, text, images, graphics, forms, software, tools, or services made available through the Website (collectively, the “Content”), you acknowledge that you have read, understood, and agree to be bound by these Terms of Use (“TOU”).
          </p>
          <p>
            To the extent applicable, these TOU supplement any existing agreements you may have with IndusArtha. Please read them carefully.
          </p>
        </motion.div>

        <div className="space-y-16">
          
          {/* Section 1: Parties */}
          <motion.section {...fadeUp(0.2)}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 flex items-center justify-center rounded-full" style={{ background: `${GOLD}10` }}>
                <Users size={20} color={GOLD} />
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-black" style={{ fontFamily: 'PT Serif, serif' }}>1. Parties</h2>
            </div>
            <div className="pl-14 space-y-4 text-gray-600 font-light leading-relaxed">
              <p>As used herein, “You” or “Your” refers to you individually and any entity on whose behalf you access or use the Website.</p>
              <p>All references to “IndusArtha”, “Tievista Global Private Wealth”, “We”, “Us”, or “Our” refer to IndusArtha Financial Services Pvt. Ltd.</p>
              <p>The Website is operated by IndusArtha Financial Services Pvt. Ltd.</p>
            </div>
          </motion.section>

          {/* Section 2: Use of Website */}
          <motion.section {...fadeUp(0.3)}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 flex items-center justify-center rounded-full" style={{ background: `${GOLD}10` }}>
                <Globe size={20} color={GOLD} />
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-black" style={{ fontFamily: 'PT Serif, serif' }}>2. Use of Website & Proprietary Rights</h2>
            </div>
            <div className="pl-14 space-y-4 text-gray-600 font-light leading-relaxed">
              <p>All rights, title, and interest in the Website and the Content are the exclusive property of IndusArtha or its licensors, unless otherwise expressly stated.</p>
              <p>We grant you a limited, personal, non-exclusive, non-transferable, non-sublicensable, and revocable license to access and use the Website and Content strictly in accordance with these TOU and for personal, non-commercial purposes only.</p>
              <p>You do not acquire any ownership or intellectual property rights in the Content. The Content is protected by copyright, trademark, and other applicable intellectual property laws.</p>
              <p>You may not modify, copy, distribute, transmit, publish, display, reproduce, license, create derivative works from, or otherwise exploit any part of the Website or Content for commercial or public purposes without prior written consent from IndusArtha.</p>
              <p>IndusArtha reserves the right, at its sole discretion and without notice, to modify, suspend, or discontinue any part of the Website, restrict or terminate your access, or terminate this license at any time.</p>
            </div>
          </motion.section>

          {/* Section 3: Trademarks */}
          <motion.section {...fadeUp(0.4)}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 flex items-center justify-center rounded-full" style={{ background: `${GOLD}10` }}>
                <Star size={20} color={GOLD} />
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-black" style={{ fontFamily: 'PT Serif, serif' }}>3. Trademarks & Restricted Content</h2>
            </div>
            <div className="pl-14 space-y-4 text-gray-600 font-light leading-relaxed">
              <p>All trademarks, service marks, logos, slogans, trade dress, and identifiers displayed on the Website (“Marks”) are the property of IndusArtha or their respective owners.</p>
              <p>You are prohibited from using any Marks without express written permission, including but not limited to use in branding, domain names, presentations, advertising, or metadata.</p>
            </div>
          </motion.section>

          {/* Section 4: Copyright */}
          <motion.section {...fadeUp(0.5)}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 flex items-center justify-center rounded-full" style={{ background: `${GOLD}10` }}>
                <Copyright size={20} color={GOLD} />
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-black" style={{ fontFamily: 'PT Serif, serif' }}>4. Copyright Notices</h2>
            </div>
            <div className="pl-14 text-gray-600 font-light leading-relaxed">
              <p>If you believe any content on the Website infringes your copyright, please notify us with sufficient detail to allow investigation and resolution, in accordance with applicable copyright laws.</p>
            </div>
          </motion.section>

          {/* Section 5: Additional Terms */}
          <motion.section {...fadeUp(0.6)}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 flex items-center justify-center rounded-full" style={{ background: `${GOLD}10` }}>
                <FilePlus size={20} color={GOLD} />
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-black" style={{ fontFamily: 'PT Serif, serif' }}>5. Additional Terms & Supplemental Agreements</h2>
            </div>
            <div className="pl-14 space-y-4 text-gray-600 font-light leading-relaxed">
              <p>Certain sections or features of the Website may be subject to additional terms or agreements. In case of conflict, such additional terms shall prevail.</p>
              <p>You may be required to accept supplemental agreements electronically. Any acceptance through clicks or similar actions shall constitute valid consent.</p>
            </div>
          </motion.section>

          {/* Section 6: No Investment Advice */}
          <motion.section {...fadeUp(0.7)}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 flex items-center justify-center rounded-full" style={{ background: `${GOLD}10` }}>
                <AlertCircle size={20} color={GOLD} />
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-black" style={{ fontFamily: 'PT Serif, serif' }}>6. No Investment Advice or Offer</h2>
            </div>
            <div className="pl-14 space-y-4 text-gray-600 font-light leading-relaxed">
              <p>Nothing on this Website constitutes financial, investment, tax, legal, or accounting advice, nor an offer or solicitation to buy or sell any financial instrument.</p>
              <p>All Content is provided for informational purposes only. You should consult qualified advisors before making any financial or investment decisions.</p>
              <p>The Website is not intended for use in jurisdictions where such use would be unlawful or where IndusArtha is not authorized to provide services.</p>
            </div>
          </motion.section>

          {/* Section 7: Market Information */}
          <motion.section {...fadeUp(0.2)}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 flex items-center justify-center rounded-full" style={{ background: `${GOLD}10` }}>
                <BarChart3 size={20} color={GOLD} />
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-black" style={{ fontFamily: 'PT Serif, serif' }}>7. Market & Third-Party Information</h2>
            </div>
            <div className="pl-14 space-y-4 text-gray-600 font-light leading-relaxed">
              <p>The Website may include financial data, market information, research, opinions, or content provided by third-party sources (“Third Party Providers”).</p>
              <p>IndusArtha does not guarantee the accuracy, completeness, timeliness, or reliability of such information and does not endorse any third-party content.</p>
              <p>We and Third Party Providers are not liable for any loss arising from reliance on such information. Redistribution or commercial use of market information is strictly prohibited.</p>
            </div>
          </motion.section>

          {/* Section 8: Forward Looking */}
          <motion.section {...fadeUp(0.3)}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 flex items-center justify-center rounded-full" style={{ background: `${GOLD}10` }}>
                <FastForward size={20} color={GOLD} />
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-black" style={{ fontFamily: 'PT Serif, serif' }}>8. Forward-Looking Statements</h2>
            </div>
            <div className="pl-14 text-gray-600 font-light leading-relaxed">
              <p>Certain statements may be forward-looking and subject to risks and uncertainties. Such statements speak only as of the date made, and IndusArtha undertakes no obligation to update them.</p>
            </div>
          </motion.section>

          {/* Section 9: Unauthorized Use */}
          <motion.section {...fadeUp(0.4)}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 flex items-center justify-center rounded-full" style={{ background: `${GOLD}10` }}>
                <ShieldAlert size={20} color={GOLD} />
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-black" style={{ fontFamily: 'PT Serif, serif' }}>9. Unauthorized Use</h2>
            </div>
            <div className="pl-14 space-y-4 text-gray-600 font-light leading-relaxed">
              <p>Unauthorized access, misuse of passwords, interference with system operations, introduction of malware, or any attempt to compromise Website security is strictly prohibited and may result in legal action.</p>
              <p>Framing, deep-linking, caching, or unauthorized linking to the Website is not permitted.</p>
            </div>
          </motion.section>

          {/* Section 10: Third Party Links */}
          <motion.section {...fadeUp(0.5)}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 flex items-center justify-center rounded-full" style={{ background: `${GOLD}10` }}>
                <ExternalLink size={20} color={GOLD} />
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-black" style={{ fontFamily: 'PT Serif, serif' }}>10. Third-Party Links</h2>
            </div>
            <div className="pl-14 text-gray-600 font-light leading-relaxed">
              <p>The Website may contain links to third-party websites. IndusArtha does not control or endorse these websites and is not responsible for their content, policies, or practices.</p>
            </div>
          </motion.section>

          {/* Section 11: Changes to Terms */}
          <motion.section {...fadeUp(0.6)}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 flex items-center justify-center rounded-full" style={{ background: `${GOLD}10` }}>
                <RefreshCw size={20} color={GOLD} />
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-black" style={{ fontFamily: 'PT Serif, serif' }}>11. Changes to Terms</h2>
            </div>
            <div className="pl-14 text-gray-600 font-light leading-relaxed">
              <p>IndusArtha reserves the right to modify these TOU at any time without notice. Continued use of the Website constitutes acceptance of revised terms.</p>
            </div>
          </motion.section>

          {/* Section 12: Reps & Warranties */}
          <motion.section {...fadeUp(0.7)}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 flex items-center justify-center rounded-full" style={{ background: `${GOLD}10` }}>
                <FileCheck size={20} color={GOLD} />
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-black" style={{ fontFamily: 'PT Serif, serif' }}>12. Representations & Warranties</h2>
            </div>
            <div className="pl-14 space-y-4 text-gray-600 font-light leading-relaxed">
              <p>You represent and warrant that:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>You have the authority to accept these TOU</li>
                <li>Your use of the Website complies with applicable laws</li>
                <li>You accept responsibility when accessing on behalf of another party</li>
              </ul>
            </div>
          </motion.section>

          {/* Section 13: Disclaimer */}
          <motion.section {...fadeUp(0.2)}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 flex items-center justify-center rounded-full" style={{ background: `${GOLD}10` }}>
                <ShieldOff size={20} color={GOLD} />
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-black" style={{ fontFamily: 'PT Serif, serif' }}>13. Disclaimer of Warranties</h2>
            </div>
            <div className="pl-14 space-y-4 text-gray-600 font-light leading-relaxed">
              <p>The Website and Content are provided “as is,” “as available,” and “where is.”</p>
              <p>IndusArtha makes no warranties, express or implied, including warranties of accuracy, merchantability, fitness for a particular purpose, or non-infringement.</p>
              <p className="italic">Your use of the Website is entirely at your own risk.</p>
            </div>
          </motion.section>

          {/* Section 14: Limitation of Liability */}
          <motion.section {...fadeUp(0.3)}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 flex items-center justify-center rounded-full" style={{ background: `${GOLD}10` }}>
                <Scale size={20} color={GOLD} />
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-black" style={{ fontFamily: 'PT Serif, serif' }}>14. Limitation of Liability</h2>
            </div>
            <div className="pl-14 text-gray-600 font-light leading-relaxed">
              <p>To the maximum extent permitted by law, IndusArtha and its affiliates shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of or inability to use the Website or Content.</p>
            </div>
          </motion.section>

          {/* Section 15: Indemnification */}
          <motion.section {...fadeUp(0.4)}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 flex items-center justify-center rounded-full" style={{ background: `${GOLD}10` }}>
                <ShieldCheck size={20} color={GOLD} />
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-black" style={{ fontFamily: 'PT Serif, serif' }}>15. Indemnification</h2>
            </div>
            <div className="pl-14 text-gray-600 font-light leading-relaxed">
              <p>You agree to indemnify and hold harmless IndusArtha, its directors, officers, employees, and agents from any claims, losses, or expenses arising from your use of the Website or violation of these TOU.</p>
            </div>
          </motion.section>

          {/* Section 16: Gov Law */}
          <motion.section {...fadeUp(0.5)}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 flex items-center justify-center rounded-full" style={{ background: `${GOLD}10` }}>
                <Scale size={20} color={GOLD} />
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-black" style={{ fontFamily: 'PT Serif, serif' }}>16. Governing Law & Jurisdiction</h2>
            </div>
            <div className="pl-14 space-y-4 text-gray-600 font-light leading-relaxed">
              <p>These TOU shall be governed by and construed in accordance with the laws of India.</p>
              <p>All disputes shall be subject to the exclusive jurisdiction of the courts located in Mumbai, Maharashtra.</p>
            </div>
          </motion.section>

          {/* Section 17: Jury Trial */}
          <motion.section {...fadeUp(0.6)}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 flex items-center justify-center rounded-full" style={{ background: `${GOLD}10` }}>
                <Gavel size={20} color={GOLD} />
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-black" style={{ fontFamily: 'PT Serif, serif' }}>17. Waiver of Jury Trial</h2>
            </div>
            <div className="pl-14 text-gray-600 font-light leading-relaxed">
              <p>To the extent permitted by law, each party waives the right to trial by jury in any legal proceeding arising out of or relating to this Website.</p>
            </div>
          </motion.section>

          {/* Section 18: Assignment */}
          <motion.section {...fadeUp(0.7)}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 flex items-center justify-center rounded-full" style={{ background: `${GOLD}10` }}>
                <ArrowRight size={20} color={GOLD} />
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-black" style={{ fontFamily: 'PT Serif, serif' }}>18. Assignment & Waiver</h2>
            </div>
            <div className="pl-14 space-y-4 text-gray-600 font-light leading-relaxed">
              <p>You may not assign or transfer your rights under these TOU without written consent. Failure to enforce any provision shall not constitute a waiver.</p>
            </div>
          </motion.section>

          {/* Section 19: Entire Agreement */}
          <motion.section {...fadeUp(0.2)}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 flex items-center justify-center rounded-full" style={{ background: `${GOLD}10` }}>
                <FileText size={20} color={GOLD} />
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-black" style={{ fontFamily: 'PT Serif, serif' }}>19. Entire Agreement</h2>
            </div>
            <div className="pl-14 text-gray-600 font-light leading-relaxed">
              <p>These TOU, along with any supplemental or client agreements, constitute the entire agreement between you and IndusArtha regarding use of the Website.</p>
            </div>
          </motion.section>

          {/* Section 20: Severability */}
          <motion.section {...fadeUp(0.3)}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 flex items-center justify-center rounded-full" style={{ background: `${GOLD}10` }}>
                <Scissors size={20} color={GOLD} />
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-black" style={{ fontFamily: 'PT Serif, serif' }}>20. Severability</h2>
            </div>
            <div className="pl-14 text-gray-600 font-light leading-relaxed">
              <p>If any provision is held unenforceable, the remaining provisions shall remain in full force and effect.</p>
            </div>
          </motion.section>

          {/* Section 21: Privacy */}
          <motion.section {...fadeUp(0.4)}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 flex items-center justify-center rounded-full" style={{ background: `${GOLD}10` }}>
                <Lock size={20} color={GOLD} />
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-black" style={{ fontFamily: 'PT Serif, serif' }}>21. Privacy Commitment</h2>
            </div>
            <div className="pl-14 text-gray-600 font-light leading-relaxed">
              <p>IndusArtha is committed to protecting your privacy. Please review our <Link to="/privacypolicy" className="text-[#D4AF37] hover:underline">Privacy Policy</Link> for details on how information is collected, used, and safeguarded.</p>
            </div>
          </motion.section>

        </div>
      </div>
    </div>
  )
}

export default TermsAndConditions;