import React, { FC } from 'react'
import Footer from '../containers/Footer'
import Navbar from '../containers/Navbar'
import HeroSection from '../containers/HeroSection'
import WhoSection from '../containers/WhoSection'
import TimelineSection from '../containers/TimelineSection'
import HowWorkSection from '../containers/HowWorkSection'
import ProjectsSection from '../containers/ProjectsSection'
import ColaborateSection from '../containers/ColaborateSection'
import TransparencySection from '../containers/TransparencySection'
import NewsletterPopup from '../containers/NewsletterPopup'
import PolicyBanner from '../containers/PolicyBanner'

const Home: FC = () => (
  <>
    <Navbar isHomePage/>

    <HeroSection />
    <WhoSection/>
    <TimelineSection/>
    <HowWorkSection/>
    <ProjectsSection/>
    <ColaborateSection/>
    <TransparencySection/>
    
    <Footer />

    <NewsletterPopup />
    <PolicyBanner />
  </>
)

export default Home