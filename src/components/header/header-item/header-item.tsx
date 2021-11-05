import Link from "next/link";
import {useRouter} from "next/router";
import styles from './header-item.styles.module.scss'

interface HeaderItemProps {
  link: string;
  label: string;
}

export const HeaderItem = ({ link, label }: HeaderItemProps) => {
  const {asPath} = useRouter()

  const linkIsActivated = asPath === link;
    console.log(asPath, link)

  return !linkIsActivated ? (
    <Link href={link}>
      <a>{label}</a>
    </Link>
  ) : (
      <Link href={link}>
        <a className={styles.activatedLink}>{label}</a>
      </Link>
  );
};
