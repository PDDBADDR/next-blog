import Container from "@/components/atoms/Container/Container";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <Container>Adrian Podbielski ©2023</Container>
    </footer>
  );
};

export default Footer;
