
import styles from './Footer.module.css'
const Footer = () => {
  return (
    <>
    
    <footer className={styles.footer}>
        <div className={styles.footerContainer}>
         
          <div className={styles.footerColumn}>
            <h3>ONLINE SHOPPING</h3>
            <ul>
              <li><a href="#">Men</a></li>
              <li><a href="#">Women</a></li>
              <li><a href="#">Kids</a></li>
              <li><a href="#">Home & Living</a></li>
              <li><a href="#">Beauty</a></li>
            </ul>
          </div>

         {/*Column 2: Customer Policies */}
          <div  className={styles.footerColumn}>
            <h3>CUSTOMER POLICIES</h3>
            <ul>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Returns</a></li>
            </ul>
          </div>

          {/* Column 3: Social Media & Apps */}
          <div  className={styles.footerColumn}>
            <h3>KEEP IN TOUCH</h3>
            <div className={styles.socialIcons}>
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-youtube"></i></a>
            </div>
            <h3>DOWNLOAD APP</h3>
            <div  className={styles.appIcons} >
              <img src="google-play.png" alt="Google Play" />
              <img src="app-store.png" alt="App Store" />
            </div>
          </div>

         
          <div className={styles.footerColumn}>
            <h3>100% ORIGINAL</h3>
            <p>Guarantee for all products.</p>
            <h3>EASY RETURNS</h3>
            <p>Return within 30 days.</p>
          </div>
        </div>

      
        <div  className={styles.footerBottom}>
          © 2025 Myntra Clone. All rights reserved.
        </div>
      </footer>
    
    </>
  )
}

export default Footer