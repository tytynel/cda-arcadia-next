
'use client'
import Link from 'next/link';// `app/dashboard/page.js` is the UI for the `/dashboard` URL
import { useState } from 'react';
export default function Page() {
  const [file,setFile] = useState({});
  const onSubmit = async (e)=> {
    e.preventDefault();
    if (!file) {
      return {};
    }else{
      try {
        const data = new FormData();
        data.set("file",file);
        const res = await fetch("/api/upload-img",{
          method: "POST",
          body: data
        })
        if(!res.ok) throw new Error(await res.text());
      } catch (error) {
        console.error(error);
      }
    }
    } 
  
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
        <form onSubmit={onSubmit}>
          <input type="file" name="file" onChange={(e) =>{
            setFile(e.target.files?.[0]);
            }}/>
          <input type="submit" value="Upload"/>
        </form>
      </main>
      <footer>

      </footer>
  </>)

  }