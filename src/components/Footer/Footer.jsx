import React from "react";
import styles from "./footer.module.css";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

const Footer = () => {
  const Recommended = [
    "realme C75",
    "realme 13+ 5G",
    "realme Note 60",
    "realme C61",
    "realme C65",
    "realme 12",
    "realme 12+ 5G",
  ];
  const Support = ["FAQ", "Troubleshooting"];
  const aboutRealme = ["Our brand", "NewsRoom"];
  const contactRealme = [
    "WhatsApp",
    "service.pk@realme.com",
    "04238048018",
    "09:30 - 18:00, MON - SAT",
    "Exclude Holidays",
  ];
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerColumn}>
          <h4>Recommended</h4>
          <ul>
            {Recommended.map((e, i) => {
              return <li key={i}>{e}</li>;
            })}
          </ul>
        </div>
        <div className={styles.footerColumn}>
          <h4>Support</h4>
          <ul>
            {Support.map((e, i) => {
              return <li key={i}>{e}</li>;
            })}
          </ul>
        </div>
        <div className={styles.footerColumn}>
          <h4>About realme</h4>
          <ul>
            {aboutRealme.map((e, i) => {
              return <li key={i}>{e}</li>;
            })}
          </ul>
        </div>
        <div className={styles.footerColumn}>
          <h4>Contact realme</h4>
          <ul>
            {contactRealme.map((e, i) => {
              return <li key={i}>{e}</li>;
            })}
          </ul>
          <div className={styles.socialIcons}>
            <span>
              <FaFacebook />
            </span>
            <span>
              <FaXTwitter />
            </span>
            <span>
              <FaYoutube />
            </span>
            <span>
              <FaSquareInstagram />
            </span>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <div className={styles.footerLeft}>
          <p>Pakistan ( English / PKR )</p>
          <p>© 2019-2024 realme. All Rights Reserved.</p>
        </div>
        <div className={styles.footerRight}>
          <a href="#">User Agreement</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Sales</a>
          <a href="#">Warranty Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
