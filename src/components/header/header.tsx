import {HeaderItem} from "./header-item/header-item";
import {MENU_ITEMS} from "./header.constants";
import Link from 'next/link';
import styles from "./header.styles.module.scss";
import Image from "next/image";
import Logo from "../../assets/logo.svg";

export const Header = () => {
    return (
        <div className={styles.container}>
            <header>
                <div className={styles.content}>
                    <Link href="/">
                        <a>
                            <Image alt="Logo" src={Logo} width={200}/>
                        </a>
                    </Link>
                    <nav>
                        {MENU_ITEMS.map((item) => (
                            <HeaderItem key={item.link} label={item.label} link={item.link}/>
                        ))}
                    </nav>
                </div>
            </header>
        </div>
    );
};
