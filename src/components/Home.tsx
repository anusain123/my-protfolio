
import Education from "./Education";
import WorkExperience from "./Exprience";
import Header from "./Header/Header"
import Hero from "./Hero";
import Projects from "./Projects";
import Skill from "./Skill";
import ContactSection from './ContactSection';
import Footer from "./Footer";



function Home() {
  return (
    <div>
      <Header/>
      <main className="pt-20">
      <Hero/>
      <Skill/>
      <Projects/>
      <WorkExperience/>
     <Education/>
     <ContactSection />
     <Footer/>
      </main>
    </div>
  )
}

export default Home