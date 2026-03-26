import { Routes, Route } from 'react-router-dom'
import { Layout } from './Layout'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import { lazy, Suspense } from 'react'
import { motion } from 'framer-motion'
import ScrollToTop from './scroll/ScrollToTop'
import icon from '/TieVistaLogo.png'

const Home = lazy(() => import("./components/Home"));
const InvestmentUniverse = lazy(() => import("./components/InvestmentUniverse"));
const NriSolutions = lazy(() => import("./components/NriSolutions"));
const Service = lazy(() => import("./components/Service"));
const BusinessToBusiness = lazy(() => import("./components/BusinessToBusiness"));
const Contact = lazy(() => import("./components/Contact"));
const GlobalGiftCitySolutions = lazy(() => import("./components/GlobalGiftCitySolutions"));
const PrivacyPolicy = lazy(() => import("./components/PrivacyPolicy"));
const TermsAndConditions = lazy(() => import("./components/TermsAndConditions"));
const TieVistaPatners = lazy(() => import("./components/TieVistaPatners"));
const NotFound = lazy(() => import("./components/NotFound"));

gsap.registerPlugin(ScrollTrigger, SplitText)

function App() {

  const PageLoader = () => (
    <div className="fixed inset-0 bg-white z-[200] flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col items-center gap-6"
      >
        <div className="h-30 w-30">
          <img src={icon} className="h-full w-full animate-pulse" alt="Icon" loading='lazy' />
        </div>

      </motion.div>
    </div>
  );

  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>


        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='investmentuniverse' element={<InvestmentUniverse />} />
            <Route path='nrisolutions' element={<NriSolutions />} />
            <Route path='services' element={<Service />} />
            <Route path='b2b' element={<BusinessToBusiness />} />
            <Route path='contact' element={<Contact />} />
            <Route path='globalgiftcitysolutions' element={<GlobalGiftCitySolutions />} />
            <Route path='privacypolicy' element={<PrivacyPolicy />} />
            <Route path='terms' element={<TermsAndConditions />} />
            <Route path='partners' element={<TieVistaPatners />} />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>

    </>
  )
}

export default App;
