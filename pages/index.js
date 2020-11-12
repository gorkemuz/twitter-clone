import Head from "next/head";
import styles from "../components/Home.module.css";
import Button from "../components/Button";
import Nav from "../components/Nav";

export default function Home() {
  return (
    <div className={styles.container}>
      <Button>Chaild</Button>
      <Nav>Chaild</Nav>
    </div>
  );
}
