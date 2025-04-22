import styles from "@/styles/contact-section.module.scss"

export default function ContactSection() {
  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Contact Us</h2>
          <div className={styles.divider}></div>
          <p className={styles.sectionDescription}>
            Have questions about our platform? Get in touch with our team and we'll be happy to help.
          </p>
        </div>

        <div className={styles.contactGrid}>
          <div className={styles.formContainer}>
            <h3 className={styles.formTitle}>Send us a message</h3>
            <form className={styles.contactForm}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.formLabel}>
                    Name
                  </label>
                  <input id="name" className={styles.formInput} placeholder="Your name" />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.formLabel}>
                    Email
                  </label>
                  <input id="email" type="email" className={styles.formInput} placeholder="Your email" />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="subject" className={styles.formLabel}>
                  Subject
                </label>
                <input id="subject" className={styles.formInput} placeholder="Subject" />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.formLabel}>
                  Message
                </label>
                <textarea id="message" className={styles.formTextarea} placeholder="Your message" rows={5}></textarea>
              </div>

              <button type="submit" className={styles.submitButton}>
                Send Message
              </button>
            </form>
          </div>

          <div className={styles.contactInfo}>
            <h3 className={styles.infoTitle}>Contact Information</h3>
            <div className={styles.infoCard}>
              <div className={styles.infoItems}>
                <div className={styles.infoItem}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={styles.infoIcon}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  <div>
                    <h4 className={styles.infoLabel}>Email</h4>
                    <p className={styles.infoValue}>info@businessanalytics.com</p>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={styles.infoIcon}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <div>
                    <h4 className={styles.infoLabel}>Phone</h4>
                    <p className={styles.infoValue}>+62 123 4567 890</p>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={styles.infoIcon}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <div>
                    <h4 className={styles.infoLabel}>Address</h4>
                    <p className={styles.infoValue}>
                      Jl. Business Analytics No. 123
                      <br />
                      Jakarta, Indonesia 12345
                    </p>
                  </div>
                </div>
              </div>

              <div className={styles.socialLinks}>
                <h4 className={styles.socialTitle}>Follow Us</h4>
                <div className={styles.socialIcons}>
                  {["facebook", "twitter", "instagram", "linkedin"].map((social) => (
                    <a key={social} href={`#${social}`} className={styles.socialIcon}>
                      <span className={styles.srOnly}>{social}</span>
                      <div className={styles.iconPlaceholder} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
