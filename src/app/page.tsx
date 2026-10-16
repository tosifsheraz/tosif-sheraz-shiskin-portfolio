import { Navbar } from "@/components/portfolio/navbar";
import { Hero } from "@/components/portfolio/hero";
import { About } from "@/components/portfolio/about";
import { Company } from "@/components/portfolio/company";
import { Services } from "@/components/portfolio/services";
import { Projects } from "@/components/portfolio/projects";
import { Freelancing } from "@/components/portfolio/freelancing";
import { Education } from "@/components/portfolio/education";
import { Skills } from "@/components/portfolio/skills";
import { Experience } from "@/components/portfolio/experience";
import { Contact } from "@/components/portfolio/contact";
import { Footer } from "@/components/portfolio/footer";
import { profile, socials } from "@/lib/portfolio";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: "Founder & CEO · DevOps & Cloud Engineer",
  description: profile.intro,
  url: "https://coreeliteexperts.com/",
  image: profile.portrait,
  address: {
    "@type": "PostalAddress",
    addressRegion: "Gilgit-Baltistan",
    addressCountry: "PK",
  },
  knowsLanguage: profile.languages,
  knowsAbout: [
    "Entrepreneurship",
    "DevOps",
    "Cloud Computing",
    "AWS",
    "Azure",
    "Google Cloud Platform",
    "Docker",
    "Kubernetes",
    "CI/CD",
    "GitOps",
    "Digital Education",
    "Freelancing Mentorship",
  ],
  worksFor: {
    "@type": "Organization",
    name: "Core Elite Experts Pvt Ltd",
    url: "https://coreeliteexperts.com/",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Virtual University of Pakistan",
  },
  sameAs: socials.map((s) => s.href),
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Company />
        <Services />
        <Projects />
        <Freelancing />
        <Education />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
