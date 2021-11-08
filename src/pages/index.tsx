import styles from "../styles/home.styles.module.scss";
import { Header } from "../components/header/header";
import Image from "next/image";
import FirstCallImage from "../assets/first-call-image.png";
import { Footer } from "../components/footer/footer";
import FadeIn from "react-fade-in";
import { GetStaticProps } from "next";

export default function Home() {
  return (
    <>
      <Header />
      <FadeIn>
        <div className={styles.firstCall}>
          <div className={styles.limiter}>
            <div>
              <h1>Measuring everithing</h1>
            </div>
            <div>
              <Image alt={"measuring tape"} src={FirstCallImage} />
            </div>
          </div>
        </div>
      </FadeIn>

      <FadeIn>
        <div className={styles.aboutUs}>
          <div className={styles.limiter}>
            <div className={styles.aboutUsContent}>
              <h3>We are Leader in Measure Tapes</h3>
              <h5>
                There are 5x circumference of planet earth in metric tapes.
              </h5>
            </div>
          </div>
          <div className={styles.aboutUsBackground}></div>
        </div>
        <Footer />
      </FadeIn>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
    revalidate: 60 * 60 * 24,
  };
};
