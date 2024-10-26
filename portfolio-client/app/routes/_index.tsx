
import type { MetaFunction } from "@remix-run/node";
import { Linkedin, Mail, Briefcase, Code } from 'lucide-react'
import { useState } from 'react'
import { Header } from "~/components/header";
import { Contact, Projects, Skills, WorkExperience } from "~/components/professional";
import { Description, Education, Hero } from "~/components/profile";

export default function Index() {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <div className="min-h-screen bg-gray-100">
      <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <Hero />
      <Description />
      <Education />
      <Skills />
      <WorkExperience />
      <Projects />
      <Contact />
    </div>
  );
}
