"use client"

import { useState } from "react"
import styles from "@/styles/login.module.scss"

export function LoginButton() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button className={styles.loginButton} onClick={() => setIsOpen(true)}>
        LOGIN
      </button>

      {isOpen && (
        <div className={styles.modalOverlay} onClick={() => setIsOpen(false)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h2 className={styles.modalTitle}>Login to Your Account</h2>
              <p className={styles.modalDescription}>Enter your credentials to access your dashboard</p>
            </div>

            <form className={styles.loginForm}>
              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.formLabel}>
                  Email
                </label>
                <input id="email" type="email" className={styles.formInput} placeholder="your@email.com" />
              </div>

              <div className={styles.formGroup}>
                <div className={styles.passwordHeader}>
                  <label htmlFor="password" className={styles.formLabel}>
                    Password
                  </label>
                  <a href="#" className={styles.forgotPassword}>
                    Forgot password?
                  </a>
                </div>
                <input id="password" type="password" className={styles.formInput} placeholder="••••••••" />
              </div>

              <button type="submit" className={styles.submitButton}>
                Login
              </button>

              <div className={styles.signupPrompt}>
                <span className={styles.promptText}>Don't have an account? </span>
                <a href="#" className={styles.signupLink}>
                  Sign up
                </a>
              </div>
            </form>

            <button className={styles.closeButton} onClick={() => setIsOpen(false)}>
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
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  )
}
