import NavLink, { LinkProps } from "next/link";
import styles from "./Link.module.scss";
import { PropsWithChildren } from "react";

const Link = (props: PropsWithChildren & LinkProps) => {
  return <NavLink {...props} className={styles.link} />;
};

export default Link;
