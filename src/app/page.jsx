import Link from "next/link";
import styles from "./home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Hi! 👋</h1>
        <div className={styles.buttonGroup}>
          <Link href={"/api/products"} className={styles.link}>
            📦 go to see products
          </Link>
          <Link href={"/data"} className={styles.link}>
            📊 go to see data
          </Link>
        </div>
      </main>
    </div>
  );
}