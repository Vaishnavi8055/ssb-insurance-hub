import './App.css'

function App() {
  const businessEmail = 'ssbinsurancehub@gmail.com'
  const businessPhone = '+919454256604'

  /*
   * Reliable section navigation.
   *
   * We don't rely only on the browser's native #anchor scrolling because
   * the sticky navbar can cover the top part of the target section.
   */
  const handleNavigation = (event, sectionId) => {
    event.preventDefault()

    const target = document.getElementById(sectionId)

    if (!target) {
      return
    }

    const navbar = document.querySelector('.navbar')
    const navbarHeight = navbar ? navbar.offsetHeight : 0

    const extraSpacing = 18

    const targetPosition =
      target.getBoundingClientRect().top +
      window.scrollY -
      navbarHeight -
      extraSpacing

    window.scrollTo({
      top: Math.max(0, targetPosition),
      behavior: 'smooth',
    })

    // Update the URL hash without triggering another native anchor jump.
    window.history.pushState(null, '', `#${sectionId}`)
  }

  return (
    <div className="app">
      {/* ================================
          Navigation
      ================================= */}

      <header className="navbar">
        <div className="nav-container">
          <a
            href="#home"
            className="brand"
            onClick={(event) => handleNavigation(event, 'home')}
          >
            <div className="brand-mark">S</div>

            <div>
              <span className="brand-name">SSB Insurance</span>
              <span className="brand-subtitle">HUB</span>
            </div>
          </a>

          <nav className="nav-links" aria-label="Main navigation">
            <a
              href="#home"
              onClick={(event) => handleNavigation(event, 'home')}
            >
              Home
            </a>

            <a
              href="#about"
              onClick={(event) => handleNavigation(event, 'about')}
            >
              About
            </a>

            <a
              href="#team"
              onClick={(event) => handleNavigation(event, 'team')}
            >
              Our Team
            </a>

            <a
              href="#contact"
              onClick={(event) => handleNavigation(event, 'contact')}
            >
              Contact
            </a>
          </nav>

          <a
            href="#contact"
            className="nav-button"
            onClick={(event) => handleNavigation(event, 'contact')}
          >
            Get in Touch
          </a>
        </div>
      </header>

      <main>
        {/* ================================
            Hero
        ================================= */}

        <section className="hero-section" id="home">
          <div className="hero-background-shape shape-one"></div>
          <div className="hero-background-shape shape-two"></div>

          <div className="container hero-container">
            <div className="hero-content">
              <div className="eyebrow">
                <span className="eyebrow-dot"></span>
                Trusted Insurance Services
              </div>

              <h1>
                Protecting what
                <span> matters most.</span>
              </h1>

              <p className="hero-description">
                Welcome to SSB Insurance HUB — your trusted destination for
                guidance across a wide range of insurance needs, with
                dependable support and solutions designed around you.
              </p>

              <div className="hero-actions">
                <a
                  href="#contact"
                  className="primary-button"
                  onClick={(event) => handleNavigation(event, 'contact')}
                >
                  Connect With Us
                  <span>→</span>
                </a>

                <a
                  href="#about"
                  className="secondary-button"
                  onClick={(event) => handleNavigation(event, 'about')}
                >
                  Discover More
                </a>
              </div>

              <div className="hero-trust">
                <div className="trust-item">
                  <strong>Reliable</strong>
                  <span>Guidance</span>
                </div>

                <div className="trust-divider"></div>

                <div className="trust-item">
                  <strong>Personal</strong>
                  <span>Support</span>
                </div>

                <div className="trust-divider"></div>

                <div className="trust-item">
                  <strong>Multiple</strong>
                  <span>Insurance Needs</span>
                </div>
              </div>
            </div>

            {/* Hero Card */}

            <div className="hero-card-wrapper">
              <div className="hero-card-glow"></div>

              <div className="hero-card">
                <div className="card-top">
                  <span className="card-label">SSB INSURANCE HUB</span>

                  <span className="card-status">
                    <span></span>
                    Trusted
                  </span>
                </div>

                <div className="shield">
                  <svg
                    viewBox="0 0 64 72"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M32 3L57 12V30C57 47.5 46.5 62.5 32 69C17.5 62.5 7 47.5 7 30V12L32 3Z"
                      stroke="currentColor"
                      strokeWidth="2"
                    />

                    <path
                      d="M21 35L28 42L44 25"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <h2>
                  Insurance made
                  <br />
                  more personal.
                </h2>

                <p>
                  Helping individuals and businesses make confident insurance
                  decisions with clarity and care.
                </p>

                <div className="card-line"></div>

                <div className="card-footer">
                  <span>SSB</span>
                  <span>TRUST • CARE • SUPPORT</span>
                </div>
              </div>

              <div className="floating-badge">
                <div className="badge-icon">✓</div>

                <div>
                  <strong>Peace of mind</strong>
                  <span>starts here</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================
            About
        ================================= */}

        <section className="about-section" id="about">
          <div className="container">
            <div className="section-heading">
              <div className="section-label">ABOUT US</div>

              <h2>
                A simpler approach to
                <span> insurance.</span>
              </h2>

              <p>
                At SSB Insurance HUB, we believe insurance should feel simple,
                transparent, and personal. We help individuals and businesses
                understand their options across different types of insurance
                and choose protection with confidence.
              </p>
            </div>

            <div className="about-grid">
              <div className="about-highlight">
                <div className="highlight-number">01</div>

                <h3>Understand</h3>

                <p>
                  We take the time to understand your requirements before
                  discussing suitable insurance options.
                </p>
              </div>

              <div className="about-highlight active">
                <div className="highlight-number">02</div>

                <h3>Guide</h3>

                <p>
                  Clear information and thoughtful guidance help you make
                  informed decisions about your insurance needs.
                </p>
              </div>

              <div className="about-highlight">
                <div className="highlight-number">03</div>

                <h3>Support</h3>

                <p>
                  Our team remains available to help you navigate your
                  insurance journey with confidence and care.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================================
            Business Details
        ================================= */}

        <section className="details-section">
          <div className="container">
            <div className="details-card">
              <div className="details-intro">
                <div className="section-label">BUSINESS PROFILE</div>

                <h2>
                  SSB Insurance
                  <span> HUB</span>
                </h2>

                <p>
                  Your trusted insurance partner, focused on providing
                  dependable guidance and personalized service for a wide range
                  of insurance requirements.
                </p>
              </div>

              <div className="details-list">
                <div className="detail-row">
                  <div className="detail-icon">◎</div>

                  <div className="detail-content">
                    <span>Business Name</span>
                    <strong>SSB Insurance HUB</strong>
                  </div>
                </div>

                <div className="detail-row">
                  <div className="detail-icon">◉</div>

                  <div className="detail-content">
                    <span>Founder</span>
                    <strong>Arvind Gupta</strong>
                  </div>
                </div>

                <div className="detail-row">
                  <div className="detail-icon">◉</div>

                  <div className="detail-content">
                    <span>Co-Founder</span>
                    <strong>Neha</strong>
                  </div>
                </div>

                <div className="detail-row">
                  <div className="detail-icon">⌂</div>

                  <div className="detail-content">
                    <span>Address</span>

                    <strong className="address-value">
                      Mall Road, Clyde House,
                      <br />
                      Near Heer Palace Cinema Hall,
                      <br />
                      Kanpur, Uttar Pradesh
                    </strong>
                  </div>
                </div>

                <div className="detail-row">
                  <div className="detail-icon">▣</div>

                  <div className="detail-content">
                    <span>GST Number</span>
                    <strong>09AQFPY8577K1ZO</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================
            Team
        ================================= */}

        <section className="team-section" id="team">
          <div className="container">
            <div className="section-heading centered">
              <div className="section-label">OUR TEAM</div>

              <h2>
                People behind
                <span> SSB Insurance HUB.</span>
              </h2>

              <p>
                A dedicated team committed to providing approachable and
                dependable assistance across your insurance requirements.
              </p>
            </div>

            <div className="team-grid">
              <div className="person-card featured-person">
                <div className="person-avatar">
                  <span>F</span>
                </div>

                <div className="person-content">
                  <span className="person-role">FOUNDER</span>

                  <h3>Arvind Gupta</h3>

                  <p>
                    Leading SSB Insurance HUB with a focus on trust,
                    transparency, and customer relationships.
                  </p>
                </div>
              </div>

              <div className="person-card">
                <div className="person-avatar blue">
                  <span>CF</span>
                </div>

                <div className="person-content">
                  <span className="person-role">CO-FOUNDER</span>

                  <h3>Neha</h3>

                  <p>
                    Supporting the vision and growth of SSB Insurance HUB.
                  </p>
                </div>
              </div>

              <div className="person-card">
                <div className="person-avatar gold">
                  <span>T1</span>
                </div>

                <div className="person-content">
                  <span className="person-role">TELECALLER</span>

                  <h3>Sumbul Bano</h3>

                  <p>
                    Available to assist customers and help with insurance
                    enquiries.
                  </p>
                </div>
              </div>

              <div className="person-card">
                <div className="person-avatar purple">
                  <span>T2</span>
                </div>

                <div className="person-content">
                  <span className="person-role">TELECALLER</span>

                  <h3>Khushi Pawariya</h3>

                  <p>
                    Here to assist with questions and customer requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================
            Contact
        ================================= */}

        <section className="contact-section" id="contact">
          <div className="container">
            <div className="contact-card">
              <div className="contact-content">
                <div className="section-label light">GET IN TOUCH</div>

                <h2>
                  Let's make
                  <span> protection simpler.</span>
                </h2>

                <p>
                  Have a question about insurance or want to know more about
                  SSB Insurance HUB? Our team would be happy to help with your
                  insurance requirements.
                </p>
              </div>

              <div className="contact-info">
                {/* Address */}

                <div className="contact-item">
                  <div className="contact-icon">⌂</div>

                  <div className="contact-item-content">
                    <span>Visit Us</span>

                    <strong>
                      Mall Road, Clyde House,
                      <br />
                      Near Heer Palace Cinema Hall,
                      <br />
                      Kanpur, Uttar Pradesh
                    </strong>
                  </div>
                </div>

                {/* Email */}

                <div className="contact-item">
                  <div className="contact-icon">✉</div>

                  <div className="contact-item-content">
                    <span>Email</span>

                    <a href={`mailto:${businessEmail}`}>
                      <strong>{businessEmail}</strong>
                    </a>
                  </div>
                </div>

                {/* Phone */}

                <div className="contact-item">
                  <div className="contact-icon">☎</div>

                  <div className="contact-item-content">
                    <span>Call Us</span>

                    <a href={`tel:${businessPhone}`}>
                      <strong>+91 94542 56604</strong>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ================================
          Footer
      ================================= */}

      <footer className="footer">
        <div className="container footer-container">
          <div className="footer-brand">
            <div className="brand-mark">S</div>

            <div>
              <span className="brand-name">SSB Insurance</span>
              <span className="brand-subtitle">HUB</span>
            </div>
          </div>

          <p>
            © {new Date().getFullYear()} SSB Insurance HUB. All rights
            reserved.
          </p>

          <div className="footer-links">
            <a
              href="#home"
              onClick={(event) => handleNavigation(event, 'home')}
            >
              Home
            </a>

            <a
              href="#about"
              onClick={(event) => handleNavigation(event, 'about')}
            >
              About
            </a>

            <a
              href="#contact"
              onClick={(event) => handleNavigation(event, 'contact')}
            >
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App