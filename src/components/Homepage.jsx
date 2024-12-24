import React from 'react'
import Styles from '../components/Homepage.module.css'
import { FaArrowDown, FaInstagram, FaTwitter } from 'react-icons/fa'
const Homepage = () => {
  return (
    <div className={Styles.Container}>
      <img src="BG.png" className={Styles.BGHero} alt="" />
      <div className={Styles.actualContainer}>
        <div className={Styles.navbar}>
          <div className={Styles.MNTN}>
            MNTN
          </div>
          <div className={Styles.midbar}>
            <div>Equipment</div>
            <div>About Us</div>
            <div>Blog</div>
          </div>
          <div className={Styles.Account}>
            Account
          </div>
        </div>
        <div className={Styles.sidebar}>
          Follow Us
          <FaInstagram />
          <FaTwitter />
        </div>
        <div className={Styles.Body}>
          <div className={Styles.Rect}>
            <img src="Rect.png" className={Styles.RectAngle} alt="" />
            <p style={{ fontSize: '12px' }}>A HIKING GUIDE</p>
          </div>
          <div className={Styles.MidRect}>
            Be Prepared For The Mountains And Beyond!
          </div>
          <div className={Styles.lastRect}>
            <p>Scroll Down</p>
            <FaArrowDown />
          </div>
        </div>
      </div>
      <img src="layer1.png" className={Styles.layer1} alt="" />
      <img src="layer2.png" className={Styles.layer2} alt="" />
      <img src="layer3.png" className={Styles.layer3} alt="" />
      <img src="BGBelow.png" alt="" className={Styles.BGBelow} />
    </div>
  )
}

export default Homepage
