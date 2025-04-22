import Image from "next/image"
import { LoginButton } from "@/components/login-button"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import PricingSection from "@/components/pricing-section"
import ContactSection from "@/components/contact-section"

export default function Home() {
  return (
    <main className="main-container">
      <header className="header">
        <div className="logo">
          <div className="logo-icon">
            <Image src="/icons/chart-icon.svg" alt="Analytics Logo" width={48} height={48} />
          </div>
          <span className="logo-text">HOME</span>
        </div>

        <nav className="nav-desktop">
          <a href="#about" className="nav-link">
            ABOUT
          </a>
          <a href="#pricing" className="nav-link">
            PRICING
          </a>
          <a href="#contact" className="nav-link">
            CONTACT
          </a>
          <LoginButton />
        </nav>

        <div className="nav-mobile">
          <button className="menu-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button>
        </div>
      </header>

      <HeroSection />
      <AboutSection />
      <PricingSection />
      <ContactSection />

      <footer className="footer">
        <div className="footer-content">
          <p>© 2024 Business Analytics. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
