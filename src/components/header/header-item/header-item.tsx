import Link from "next/link";

interface HeaderItemProps {
  link: string;
  label: string;
}

export const HeaderItem = ({ link, label }: HeaderItemProps) => {
  return (
    <Link href={link}>
      <a>{label}</a>
    </Link>
  );
};
