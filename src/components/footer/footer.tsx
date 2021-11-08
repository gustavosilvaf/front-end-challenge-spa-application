import styles from "./footer.styles.module.scss";
import YoutubeIcon from "../../assets/yt-icon.svg";
import FacebookIcon from "../../assets/fb-icon.svg";
import TwitterIcon from "../../assets/twt-icon.svg";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.limiter}>
        <div className={styles.followUs}>
          <p>Follow Us</p>
          <div>
            <Image src={YoutubeIcon} alt="Youtube icon" />
            <Image src={FacebookIcon} alt="Facebook icon" />
            <Image src={TwitterIcon} alt="TwitterIcon icon" />
          </div>
        </div>
        <div className={styles.contactUs}>
          <p>Contact</p>
          <div>
            <p>2490 Leisure Lane </p>
            <p>San Luis Obispo</p>
            <p>California</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
