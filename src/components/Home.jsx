import React from 'react'
import Styles from '../components/Home.module.css'
import { FaArrowDown, FaArrowLeft, FaArrowRight, FaInstagram, FaTwitter } from 'react-icons/fa'
import { BiArrowFromLeft, BiArrowFromRight, BiArrowToLeft } from 'react-icons/bi'
import { BsArrowBarRight } from 'react-icons/bs'
const Home = () => {
  return (
    <div className={Styles.Container}>
      <div className={Styles.ImageContainer}>
        <img src="BG.png" className={Styles.BGHero} alt="" />
        <img src="layer1.png" className={Styles.layer1} alt="" />
        <img src="layer2.png" className={Styles.layer2} alt="" />
        <img src="layer3.png" className={Styles.layer3} alt="" />
        <img src="BGBelow.png" alt="" className={Styles.BGBelow} />
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
          <div className={Styles.firstCard}>
            <div className={Styles.firstHalf}>
              <div className={Styles.Number}>
                01
              </div>
              <div className={Styles.MainCard}>
                <div className={Styles.TopBar}>
                  <img src="Rect.png" alt="" />
                  <p>GET STARTED</p>
                </div>
                <div className={Styles.SecondTopBar}>
                  What level of hiker are you ?
                </div>
                <div className={Styles.ThridBar}>
                  Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker?
                </div>
                <div className={Styles.LastBar}>
                  <p>Read More</p>
                  <FaArrowRight style={{ color: 'white', width: "100px", height: "10px" }} />
                </div>
              </div>
            </div>
            <div className={Styles.secondHalf}>
              <img src="01.png" className={Styles.firstImage} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Home
