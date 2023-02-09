import Link from "@/components/atoms/Link/Link";
import styles from "./Navbar.module.scss";
import Container from "@/components/atoms/Container/Container";
import { Raleway } from "@next/font/google";

const raleway = Raleway({ subsets: ["latin"] });

const Navbar = () => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.nav}>
          <div className={`${raleway.className} ${styles.logo}`}>
            NextJS Blog
          </div>
          <div className={styles.nav}>
            <Link href="/">Home</Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
