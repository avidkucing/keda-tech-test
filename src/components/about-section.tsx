import Image from "next/image"
import styles from "@/styles/about-section.module.scss"

export default function AboutSection() {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>About Our Platform</h2>
          <div className={styles.divider}></div>
        </div>

        <div className={styles.aboutContent}>
          <div className={styles.aboutText}>
            <h3 className={styles.aboutTitle}>Powerful Business Analytics</h3>
            <p className={styles.aboutDescription}>
              Our platform provides comprehensive business analytics tools to help you track inventory, monitor sales,
              and analyze profits. With our intuitive interface, you can make data-driven decisions to grow your
              business.
            </p>
            <ul className={styles.featureList}>
              {[
                "Real-time inventory tracking",
                "Sales performance analytics",
                "Profit margin calculations",
                "Customizable reporting",
                "Data visualization tools",
              ].map((feature, index) => (
                <li key={index} className={styles.featureItem}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={styles.checkIcon}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.aboutImage}>
            <Image src="/images/dashboard-preview.svg" alt="Dashboard Preview" fill className={styles.dashboardImage} />
          </div>
        </div>
      </div>
    </section>
  )
}
