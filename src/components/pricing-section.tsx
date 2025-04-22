import styles from "@/styles/pricing-section.module.scss"

export default function PricingSection() {
  const pricingTiers = [
    {
      name: "Basic",
      tier: "TIER 1",
      price: "Rp 99.000",
      period: "/bulan",
      description: "Ideal untuk bisnis kecil yang baru memulai",
      features: ["Mencatat barang masuk", "Mencatat barang keluar", "Mencatat hasil keuntungan"],
      buttonText: "Mulai Sekarang",
      popular: false,
    },
    {
      name: "Business",
      tier: "TIER 2",
      price: "Rp 199.000",
      period: "/bulan",
      description: "Untuk bisnis yang sedang berkembang",
      features: [
        "Mencatat barang masuk dan keluar",
        "Mencatat Keuntungan",
        "Dapat menganalisa hasil penjualan dengan CHART",
        "Support 7x24 Jam",
      ],
      buttonText: "Mulai Sekarang",
      popular: true,
    },
    {
      name: "Entrepreneur",
      tier: "TIER 3",
      price: "Rp 299.000",
      period: "/bulan",
      description: "Solusi lengkap untuk bisnis yang maju",
      features: [
        "Mencatat barang masuk dan keluar",
        "Mencatat Keuntungan",
        "Dapat menganalisa hasil penjualan dengan CHART",
        "Support 7x24 Jam",
        "Export data ke Excel",
        "AI Prediksi penghasilan",
      ],
      buttonText: "Mulai Sekarang",
      popular: false,
    },
  ]

  return (
    <section id="pricing" className={styles.pricingSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Pricing Plans</h2>
          <div className={styles.divider}></div>
          <p className={styles.sectionDescription}>
            Pilih paket yang sesuai dengan kebutuhan bisnis Anda. Semua paket dapat diupgrade kapan saja.
          </p>
        </div>

        <div className={styles.pricingGrid}>
          {pricingTiers.map((tier, index) => (
            <div key={index} className={`${styles.pricingCard} ${tier.popular ? styles.popularCard : ""}`}>
              {tier.popular && <div className={styles.popularBadge}>POPULAR</div>}
              <div className={styles.cardHeader}>
                <div className={styles.tierLabel}>{tier.tier}</div>
                <h3 className={styles.tierName}>{tier.name}</h3>
                <div className={styles.tierPrice}>
                  <span className={styles.price}>{tier.price}</span>
                  <span className={styles.period}>{tier.period}</span>
                </div>
                <p className={styles.tierDescription}>{tier.description}</p>
              </div>
              <div className={styles.cardContent}>
                <ul className={styles.featureList}>
                  {tier.features.map((feature, i) => (
                    <li key={i} className={styles.featureItem}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={styles.checkIcon}
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={styles.cardFooter}>
                <button className={`${styles.button} ${tier.popular ? styles.primaryButton : styles.secondaryButton}`}>
                  {tier.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
