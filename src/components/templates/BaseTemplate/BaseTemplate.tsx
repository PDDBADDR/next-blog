import { PropsWithChildren } from "react";
import Navbar from "@/components/organisms/Navbar/Navbar";
import styles from "./BaseTemplate.module.scss";
import Footer from "@/components/organisms/Footer/Footer";
import Container from "@/components/atoms/Container/Container";

const BaseTemplate = ({ children }: PropsWithChildren) => {
  return (
    <div className={styles.wrapper}>
      <Navbar />
      <Container>{children}</Container>
      <Footer />
    </div>
  );
};

export default BaseTemplate;
