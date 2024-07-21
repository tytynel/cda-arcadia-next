import Image from "next/image";
import Link from 'next/link';
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <header>
        <h1>Arcadia</h1>
      </header>
      <nav>
        <ul>
          <li><Link href="/">Accueil</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/habitat">Habitats</Link></li>
          <li><Link href="/animals">Animaux</Link></li>
          <li><Link href="./connection">Se connecter</Link></li>
        </ul>
      </nav>
      <main className={styles.main}>

      </main>
    </>

  );
}
