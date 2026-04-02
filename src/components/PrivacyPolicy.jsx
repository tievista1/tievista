import React from 'react'
import { motion } from 'framer-motion'
import { ShieldAlert, Info, CircleCheck, Lock, Trash2, Globe, Users, FileText, Scale, Phone, Mail, MapPin, Target } from 'lucide-react'

/* ─── Shared animation helpers ─── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay },
  viewport: { once: true, margin: '-40px' },
})

const GOLD = '#D4AF37'

const PrivacyPolicy = () => {
  return (
    <div className="bg-white min-h-screen font-sans selection:bg-[#D4AF37] selection:text-white pt-32 pb-20">
      <div className="container mx-auto px-6 lg:px-16 max-w-5xl">
        
        {/* Header Header */}
        <motion.div {...fadeUp(0)} className="mb-20">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-px" style={{ background: GOLD }} />
            <span className="text-xs font-semibold tracking-[0.35em] uppercase text-gray-400">Legal</span>
          </div>
          <h1 
            className="text-5xl md:text-7xl tracking-tighter leading-none mb-8"
            style={{ fontFamily: 'PT Serif, serif' }}
          >
            Privacy <span className="gold-text">Policy</span>
          </h1>
          <p className="text-xl text-gray-600 font-light leading-relaxed max-w-3xl">
            IndusArtha Financial Services Pvt. Ltd., its subsidiaries and affiliates (collectively, “IndusArtha”, “TieVista”, “we”, “us”, or “our”) are committed to protecting the privacy and confidentiality of the information entrusted to us.
          </p>
        </motion.div>

        {/* Intro Text */}
        <motion.div {...fadeUp(0.1)} className="mb-16 prose prose-lg prose-gray max-w-none text-gray-600 font-light leading-relaxed">
          <p>
            This Privacy Policy explains how we collect, use, disclose, store, and safeguard information obtained through our website(s), digital platforms, applications, and services (collectively, the “Website”).
          </p>
          <p>
            By accessing or using our Website, you consent to the practices described in this Privacy Policy.
          </p>
        </motion.div>

        <div className="space-y-16">
          
          {/* Section 1: Scope */}
          <motion.section {...fadeUp(0.2)}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 flex items-center justify-center rounded-full" style={{ background: `${GOLD}10` }}>
                <Globe size={20} color={GOLD} />
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-black" style={{ fontFamily: 'PT Serif, serif' }}>1. Scope of This Policy</h2>
            </div>
            <div className="pl-14 space-y-4 text-gray-600 font-light leading-relaxed">
              <p>This Privacy Policy applies to:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Visitors to our Website</li>
                <li>Users submitting inquiries, applications, or forms</li>
                <li>Clients and prospective clients engaging with our services online</li>
              </ul>
              <p>This Policy does not apply to information collected offline or through third-party websites not controlled by IndusArtha.</p>
            </div>
          </motion.section>

          {/* Section 2: Information We Collect */}
          <motion.section {...fadeUp(0.3)}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 flex items-center justify-center rounded-full" style={{ background: `${GOLD}10` }}>
                <Info size={20} color={GOLD} />
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-black" style={{ fontFamily: 'PT Serif, serif' }}>2. Information We Collect</h2>
            </div>
            <div className="pl-14 space-y-8 text-gray-600 font-light leading-relaxed">
              <div>
                <h3 className="text-xl font-medium text-black mb-3">a. Personal Information</h3>
                <p className="mb-3">We may collect personal information including, but not limited to:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {[
                    "Full name", "Email address", "Mobile number", 
                    "Residential or mailing address", "PAN, Aadhaar, or other KYC-related identifiers",
                    "Date of birth", "Employment, income, or financial details",
                    "Any information voluntarily submitted through forms"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF3750]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-medium text-black mb-3">b. Non-Personal Information</h3>
                <p className="mb-3">We may automatically collect:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {[
                    "IP address", "Browser type and version", "Device information",
                    "Operating system", "Pages visited and time spent", "Cookies and usage analytics"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF3750]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>

          {/* Section 3: Purpose */}
          <motion.section {...fadeUp(0.4)}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 flex items-center justify-center rounded-full" style={{ background: `${GOLD}10` }}>
                <Target size={20} color={GOLD} />
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-black" style={{ fontFamily: 'PT Serif, serif' }}>3. Purpose of Information Collection</h2>
            </div>
            <div className="pl-14 text-gray-600 font-light leading-relaxed">
              <p className="mb-4">We collect and use information for the following purposes:</p>
              <ul className="space-y-3">
                {[
                  "To provide and manage financial services", 
                  "To comply with KYC, AML, and regulatory obligations",
                  "To respond to inquiries and service requests",
                  "To process applications and onboarding",
                  "To improve Website performance and user experience",
                  "To communicate service updates or regulatory disclosures",
                  "To prevent fraud, misuse, or unauthorized access",
                  "To meet legal, compliance, and audit requirements"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <CircleCheck size={18} color={GOLD} className="mt-1 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.section>

          {/* Section 4: Cookies */}
          <motion.section {...fadeUp(0.5)}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 flex items-center justify-center rounded-full" style={{ background: `${GOLD}10` }}>
                <FileText size={20} color={GOLD} />
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-black" style={{ fontFamily: 'PT Serif, serif' }}>4. Cookies & Tracking Technologies</h2>
            </div>
            <div className="pl-14 text-gray-600 font-light leading-relaxed">
              <p className="mb-4">Our Website may use cookies, web beacons, and similar technologies to:</p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>Enhance functionality</li>
                <li>Understand user behavior</li>
                <li>Improve performance and security</li>
              </ul>
              <p>You may disable cookies through your browser settings; however, doing so may limit Website functionality.</p>
            </div>
          </motion.section>

          {/* Section 5: Sharing */}
          <motion.section {...fadeUp(0.6)}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 flex items-center justify-center rounded-full" style={{ background: `${GOLD}10` }}>
                <Users size={20} color={GOLD} />
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-black" style={{ fontFamily: 'PT Serif, serif' }}>5. Information Sharing & Disclosure</h2>
            </div>
            <div className="pl-14 text-gray-600 font-light leading-relaxed space-y-4">
              <p className="font-medium text-black">We do not sell, rent, or trade personal information.</p>
              <p>Information may be shared only:</p>
              <ul className="space-y-3">
                {[
                  "With authorized employees on a need-to-know basis",
                  "With regulated service providers or advisors under confidentiality",
                  "To comply with legal, SEBI, RBI, or statutory requirements",
                  "To law enforcement or regulators when required by law",
                  "In connection with business restructuring (subject to confidentiality)"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="w-1 h-1 rounded-full bg-gray-400 mt-2.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.section>

          {/* Section 6: Security */}
          <motion.section {...fadeUp(0.7)}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 flex items-center justify-center rounded-full" style={{ background: `${GOLD}10` }}>
                <Lock size={20} color={GOLD} />
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-black" style={{ fontFamily: 'PT Serif, serif' }}>6. Data Security</h2>
            </div>
            <div className="pl-14 text-gray-600 font-light leading-relaxed">
              <p className="mb-4">We maintain reasonable administrative, technical, and physical safeguards to protect information against unauthorized access, loss, misuse, or alteration.</p>
              <p className="text-gray-500">While we strive to protect your information, no system can be guaranteed to be 100% secure.</p>
            </div>
          </motion.section>

          {/* Section 7: Retention */}
          <motion.section {...fadeUp(0.2)}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 flex items-center justify-center rounded-full" style={{ background: `${GOLD}10` }}>
                <FileText size={20} color={GOLD} />
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-black" style={{ fontFamily: 'PT Serif, serif' }}>7. Data Retention</h2>
            </div>
            <div className="pl-14 text-gray-600 font-light leading-relaxed">
              <p>We retain personal information only for as long as necessary to fulfill the purposes outlined in this Policy, comply with legal/regulatory obligations, and resolve disputes.</p>
            </div>
          </motion.section>

          {/* Section 8: Rights */}
          <motion.section {...fadeUp(0.3)}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 flex items-center justify-center rounded-full" style={{ background: `${GOLD}10` }}>
                <Users size={20} color={GOLD} />
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-black" style={{ fontFamily: 'PT Serif, serif' }}>8. User Rights</h2>
            </div>
            <div className="pl-14 space-y-4 text-gray-600 font-light leading-relaxed">
              <p>Subject to applicable laws, you may:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Request access to your personal information</li>
                <li>Request correction or updating of inaccurate information</li>
                <li>Withdraw consent where permitted by law</li>
                <li>Request deletion of information, subject to legal requirements</li>
              </ul>
              <p>Requests may be subject to identity verification.</p>
            </div>
          </motion.section>

          {/* Section 9: Third Party */}
          <motion.section {...fadeUp(0.4)}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 flex items-center justify-center rounded-full" style={{ background: `${GOLD}10` }}>
                <Globe size={20} color={GOLD} />
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-black" style={{ fontFamily: 'PT Serif, serif' }}>9. Third-Party Websites</h2>
            </div>
            <div className="pl-14 text-gray-600 font-light leading-relaxed">
              <p>Our Website may contain links to third-party websites. IndusArtha is not responsible for the privacy practices or content of such external sites. We encourage you to review their policies separately.</p>
            </div>
          </motion.section>

          {/* Section 10: Kids */}
          <motion.section {...fadeUp(0.5)}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 flex items-center justify-center rounded-full" style={{ background: `${GOLD}10` }}>
                <ShieldAlert size={20} color={GOLD} />
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-black" style={{ fontFamily: 'PT Serif, serif' }}>10. Children’s Privacy</h2>
            </div>
            <div className="pl-14 text-gray-600 font-light leading-relaxed">
              <p>Our Website is not intended for individuals under the age of 18. We do not knowingly collect personal information from minors.</p>
            </div>
          </motion.section>

          {/* Section 11: Compliance */}
          <motion.section {...fadeUp(0.6)}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 flex items-center justify-center rounded-full" style={{ background: `${GOLD}10` }}>
                <Scale size={20} color={GOLD} />
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-black" style={{ fontFamily: 'PT Serif, serif' }}>11. Regulatory Compliance</h2>
            </div>
            <div className="pl-14 text-gray-600 font-light leading-relaxed">
              <p className="mb-4">IndusArtha complies with applicable Indian laws, including:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Information Technology Act, 2000</li>
                <li>IT (Reasonable Security Practices and Procedures) Rules, 2011</li>
                <li>SEBI, RBI, and other applicable regulatory guidelines</li>
              </ul>
            </div>
          </motion.section>

          {/* Section 12: Changes */}
          <motion.section {...fadeUp(0.7)}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 flex items-center justify-center rounded-full" style={{ background: `${GOLD}10` }}>
                <FileText size={20} color={GOLD} />
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-black" style={{ fontFamily: 'PT Serif, serif' }}>12. Changes to This Privacy Policy</h2>
            </div>
            <div className="pl-14 text-gray-600 font-light leading-relaxed">
              <p>We reserve the right to update or modify this Privacy Policy at any time without prior notice. Changes will be effective immediately upon posting. Continued use of the Website constitutes acceptance of the revised Policy.</p>
            </div>
          </motion.section>

          {/* Section 13: Consent */}
          <motion.section {...fadeUp(0.2)}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 flex items-center justify-center rounded-full" style={{ background: `${GOLD}10` }}>
                <CircleCheck size={20} color={GOLD} />
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-black" style={{ fontFamily: 'PT Serif, serif' }}>13. Consent</h2>
            </div>
            <div className="pl-14 text-gray-600 font-light leading-relaxed space-y-4">
              <p>By using our Website or submitting information, you:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Consent to the collection, use, and processing of your information as described herein</li>
                <li>Confirm that the information provided is accurate and lawful</li>
              </ul>
            </div>
          </motion.section>

          {/* Section 14: Contact */}
          <motion.section {...fadeUp(0.3)}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 flex items-center justify-center rounded-full" style={{ background: `${GOLD}10` }}>
                <Phone size={20} color={GOLD} />
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-black" style={{ fontFamily: 'PT Serif, serif' }}>14. Contact Information</h2>
            </div>
            <div className="pl-14 text-gray-600 font-light leading-relaxed">
              <p className="mb-6">For questions, concerns, or requests related to this Privacy Policy or data handling practices, please contact:</p>
              <div className="space-y-4 bg-[#FAFAFA] p-8  border border-gray-100">
                <p className="font-semibold text-black mb-4">TIEVISTA GLOBAL PRIVATE WEALTH</p>
                <div className="flex items-start gap-4">
                  <MapPin size={18} color={GOLD} className="mt-1 shrink-0" />
                  <span>4th Floor, AWFIS, VIOS Tower, Wadala, Mumbai 400037</span>
                </div>
                <div className="flex items-start gap-4">
                  <Mail size={18} color={GOLD} className="mt-1 shrink-0" />
                  <a href="mailto:connect@tievista.com" className="hover:text-black transition-colors">connect@tievista.com</a>
                </div>
                <div className="flex items-start gap-4">
                  <Phone size={18} color={GOLD} className="mt-1 shrink-0" />
                  <a href="tel:+919167915651" className="hover:text-black transition-colors">+91 91679 15651</a>
                </div>
              </div>
            </div>
          </motion.section>

        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicy;