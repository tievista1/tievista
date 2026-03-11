import { Routes, Route } from 'react-router-dom'
import { Layout } from './Layout'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import { lazy, Suspense } from 'react'
import { motion } from 'framer-motion'
import SmoothFollower from './mouseCursor/SmoothFollower'
import ScrollToTop from './scroll/ScrollToTop'
import icon from '/TieVistaLogo.png'

const Home = lazy(() => import("./components/Home"));
const AboutUs = lazy(() => import("./components/AboutUs"));
const InvestmentUniverse = lazy(() => import("./components/InvestmentUniverse"));
const NriSolutions = lazy(() => import("./components/NriSolutions"));
const Service = lazy(() => import("./components/Service"));
const BusinessToBusiness = lazy(() => import("./components/BusinessToBusiness"));
const Contact = lazy(() => import("./components/Contact"));

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
          <img src={icon} className="h-full w-full animate-pulse" alt="Icon" />
        </div>

      </motion.div>
    </div>
  );

  return (
    <>
      <SmoothFollower />
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>


        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='aboutus' element={<AboutUs />} />
            <Route path='investmentuniverse' element={<InvestmentUniverse />} />
            <Route path='nrisolutions' element={<NriSolutions />} />
            <Route path='services' element={<Service />} />
            <Route path='b2b' element={<BusinessToBusiness />} />
            <Route path='contact' element={<Contact />} />
          </Route>
        </Routes>
      </Suspense>

    </>
  )
}

export default App;
