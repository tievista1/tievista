import { Routes, Route } from 'react-router-dom'
import { Layout } from './Layout'
import { Home } from './components/Home'
import { AboutUs } from './components/AboutUs'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import { InvestmentUniverse } from './components/InvestmentUniverse'
import { NriSolutions } from './components/NriSolutions'
import { Service } from './components/Service'
import { BusinessToBusiness } from './components/BusinessToBusiness'

gsap.registerPlugin(ScrollTrigger, SplitText)

function App() {
  return (
    <>

      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/' element={<Home />} />
          <Route path='aboutus' element={<AboutUs />} />
          <Route path='investmentuniverse' element={<InvestmentUniverse />} />
          <Route path='nrisolutions' element={<NriSolutions />} />
          <Route path='services' element={<Service />} />
          <Route path='b2b' element={<BusinessToBusiness />} />
        </Route>
      </Routes>

    </>
  )
}

export default App
