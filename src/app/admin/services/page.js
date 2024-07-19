
import Link from 'next/link';// `app/dashboard/page.js` is the UI for the `/dashboard` URL
export default function Page() {
  return (  <>
    <header>
        <h1>Gestion des services</h1>
      </header>
      <nav>
      <ul>
        <li><Link href="/">Se déconnecter</Link></li>
        <li><Link href="/admin/services">Gestion les services</Link></li>
        <li><Link href="/admin/habitats">Gestion les habitats</Link></li>
        <li><Link href="/admin/animals">Gestion des Animaux</Link></li>
        <li><Link href="/admin/general">Configuration générale</Link></li>
        <li><Link href="/admin/statistics">Statistiques</Link></li>
        <li><Link href="/admin/feed-animal">Nourrir un animale</Link></li>
        <li><Link href="/admin/cure-animal">Soigner un animale</Link></li>
      </ul>
    </nav>
      <main className="">

      </main>
      <footer>

      </footer>
  </>)

  }