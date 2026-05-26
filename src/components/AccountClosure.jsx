import React from 'react'
import { motion } from 'framer-motion'
import PTSerif from '../fonts/PTSerif-Regular.ttf'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay },
  viewport: { once: true, margin: '-40px' },
})

const GOLD = '#D4AF37'

const AccountClosure = () => {
  const steps = [
    "Clear any negative balance in account",
    "Sell off any holdings in the account",
    "Withdraw any cash balance from the account",
    "Download all necessary reports (trade confirms, ledger, and P&L statements), as you cannot access these reports once your account closes",
    "In case you wish to move securities to another broker, please transfer shares and cash and then request account closure."
  ]

  return (
    <div className="bg-white min-h-screen font-sans selection:bg-[#D4AF37] selection:text-white pt-32 pb-20">
      <div className="container mx-auto px-6 lg:px-16 max-w-4xl">
        
        {/* Header Section */}
        <motion.div {...fadeUp(0)} className="mb-10">
          <h1
            className="text-3xl md:text-4xl font-bold tracking-tight text-black text-center mb-6"
            style={{ fontFamily: PTSerif }}
          >
            How to close my TieVista Global trading account?
          </h1>
          <div className="w-full h-[2px] mb-8" style={{ background: GOLD }} />
          
          <p className="text-base text-black font-medium leading-relaxed">
            You can close your Global trading account by sending us an email request from registered email id to <a href="mailto:connect@tievista.com" className="underline hover:text-[#D4AF37] transition-colors">connect@tievista.com</a>,<br />
            The closure process takes 2 working days once you submit your request.
          </p>
        </motion.div>

        {/* Before closing Section */}
        <motion.div {...fadeUp(0.1)} className="mb-6">
          <h2 className="text-xl md:text-2xl font-normal text-black mb-3" style={{ fontFamily: 'PT Serif, serif' }}>
            Before closing your account
          </h2>
        </motion.div>

        {/* Steps List */}
        <div className="space-y-6 mb-12">
          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              {...fadeUp(0.2 + index * 0.1)}
              className="border border-gray-300 p-6 flex items-center gap-8 bg-white"
            >
              <span className="text-3xl md:text-4xl" style={{ color: GOLD, fontFamily: 'PT Serif, serif' }}>
                {String(index + 1).padStart(2, '0')}
              </span>
              <p className="text-black text-base md:text-lg">
                {step}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer Note */}
        <motion.div 
          {...fadeUp(0.8)} 
          className="bg-[#FAFAFA] p-8 md:p-10 relative"
        >
          <div className="absolute left-0 top-8 bottom-8 w-1" style={{ background: GOLD }} />
          <p className="text-black text-sm leading-relaxed pl-6">
            *Please note that upon submission of an account closure request, the client irrevocably agrees that any residual amounts, including but not limited to dividends, corporate action proceeds, or any other entitlements arising from prior holdings and received post-closure, shall not be credited to the client’s account. The client acknowledges and accepts that such amounts may be forfeited, and that no claims shall lie against the Company in respect of the same.
          </p>
        </motion.div>

      </div>
    </div>
  )
}

export default AccountClosure