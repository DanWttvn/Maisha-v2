import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
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
    <Link to="/landing">Router Link</Link>

    <Button variant="A">Variant A</Button>
    <Button variant="A" styles={{ padding: 15 }}>Variant A</Button>
    <Button variant="B">Variant B</Button>
    <Button variant="C">Variant C</Button>
    <Button variant="D">Variant D</Button>
    <Button variant="E">Variant E</Button>
    <Button variant="F">Variant F</Button>
    <Button variant="G">Variant G</Button>

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