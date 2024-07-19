// `app/dashboard/page.js` is the UI for the `/dashboard` URL
export default function Page() {
  return
  <>
  <header>
      <h1>Habitat</h1>
    </header>
    <nav>
    <ul>
      <li><Link href="/">Accueil</Link></li>
      <li><Link href="/services">Services</Link></li>
      <li><Link href="/habitat">Habitats</Link></li>
      <li><Link href="/animals">Animaux</Link></li>
      <li><Link href="/connection">Se connecter</Link></li>
    </ul>
  </nav>
    <main className="">

    </main>
    <footer>

    </footer>
</>
  }