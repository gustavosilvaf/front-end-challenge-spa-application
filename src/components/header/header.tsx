import { HeaderItem } from "./header-item/header-item";
import OffCanvas from "react-aria-offcanvas";
import { MENU_ITEMS } from "./header.constants";
import Link from "next/link";
import styles from "./header.styles.module.scss";
import Image from "next/image";
import Logo from "../../assets/logo.svg";
import MenuButton from "../../assets/menu-button.svg";
import ResponsiveLogo from "../../assets/responsive-logo.svg";
import { useWindowSize } from "../../hooks/useWindowSize";
import { useState } from "react";

export const Header = () => {
  const { width } = useWindowSize();

  const isMobileVision = width <= 768;

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.container}>
      <header>
        {!isMobileVision ? (
          <div className={styles.content}>
            <Link href="/">
              <a>
                <Image alt="Logo" src={Logo} className={styles.logo} />
              </a>
            </Link>
            <nav>
              {MENU_ITEMS.map((item) => (
                <HeaderItem
                  key={item.link}
                  label={item.label}
                  link={item.link}
                />
              ))}
            </nav>
          </div>
        ) : (
          <>
            <OffCanvas
              isOpen={isOpen}
              onClose={() => setIsOpen(false)}
              height="100vh"
            >
              <nav className={styles.drawer}>
                {MENU_ITEMS.map((item) => (
                  <HeaderItem
                    key={item.link}
                    label={item.label}
                    link={item.link}
                  />
                ))}
              </nav>
            </OffCanvas>
            <div className={styles.mobileMenu}>
              <button onClick={() => setIsOpen(true)}>
                <Image alt="Menu button" src={MenuButton} />
              </button>
              <div>
                <Image alt="Logo" src={ResponsiveLogo} />
              </div>
            </div>
          </>
        )}
      </header>
    </div>
  );
};
