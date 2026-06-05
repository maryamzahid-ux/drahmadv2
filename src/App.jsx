import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { useLang } from './LangContext'
import Navbar from './components/Navbar'
import TopBanner from './components/TopBanner'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Activities from './pages/Activities'
import WhyUs from './pages/WhyUs'
import Contact from './pages/Contact'
import Trading from './pages/Trading'
import Advertising from './pages/Advertising'
import Calligraphy from './pages/Calligraphy'
import Printing from './pages/Printing'
import './transitions.css'

function PageWrapper({ children }) {
 const location = useLocation()
 return (
 <div key={location.pathname} className="page-enter">
 {children}
 </div>
 )
}

export default function App() {
 const { lang } = useLang()
 const location = useLocation()

 useEffect(() => {
 document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
 document.documentElement.lang = lang
 }, [lang])

 useEffect(() => {
 window.scrollTo({ top: 0, behavior: 'instant' })
 }, [location.pathname])

 return (
 <>
 <TopBanner />
 <Navbar />
 <main>
 <PageWrapper>
 <Routes location={location}>
 <Route path="/" element={<Home />} />
 <Route path="/about" element={<About />} />
 <Route path="/activities" element={<Activities />} />
 <Route path="/why-us" element={<WhyUs />} />
 <Route path="/contact" element={<Contact />} />
 <Route path="/trading" element={<Trading />} />
 <Route path="/advertising" element={<Advertising />} />
 <Route path="/calligraphy" element={<Calligraphy />} />
 <Route path="/printing" element={<Printing />} />
 </Routes>
 </PageWrapper>
 </main>
 <Footer />
 </>
 )
}
