import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <div>
      <Head>
        <title>Doktori Napok</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <div className={styles.logoWrapper}>
          <img src="/logo.png" alt="logo" height="40" />
          <h2>Doktori Napok</h2>
        </div>
        <div className={styles.linkWrapper}>
          <Link href="/tudnivalok">
            <a>tudnivalók</a>
          </Link>
          <Link href="/jelentkezes">
            <a>jelentkezés</a>
          </Link>
          <Link href="/program">
            <a>program</a>
          </Link>
        </div>
      </header>
    </div>
  );
}
