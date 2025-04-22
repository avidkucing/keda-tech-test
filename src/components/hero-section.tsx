import Image from "next/image"
import styles from "@/styles/hero-section.module.scss"

export default function HeroSection() {
  return (
    <section className={styles.heroSection}>
      {/* Left blue blob */}
      <div className={styles.leftBlob}>
        <Image src="/images/left-blob.svg" alt="Decorative background" fill className={styles.blobImage} />
      </div>

      {/* Right blue blob */}
      <div className={styles.rightBlob}>
        <Image src="/images/right-blob.svg" alt="Decorative background" fill className={styles.blobImage} />
      </div>

      <div className={styles.heroContent}>
        <div className={styles.heroText}>
          <h1 className={styles.heroTitle}>Business Analytics Platform</h1>
          <p className={styles.heroDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
          <div className={styles.heroButtons}>
            <button className={styles.primaryButton}>Get Started</button>
            <button className={styles.secondaryButton}>Learn More</button>
          </div>
        </div>

        <div className={styles.heroImage}>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/analytics-illustration.svg"
              alt="Analytics Dashboard"
              width={400}
              height={300}
              className={styles.illustration}
            />
          </div>
        </div>

        <div className={styles.testimonial}>
          <blockquote className={styles.quote}>"Excepteur sint occaecat cupidatat non proident."</blockquote>
        </div>
      </div>
    </section>
  )
}
