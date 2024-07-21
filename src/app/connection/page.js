
"use client";
import Link from 'next/link';
import axios from "axios";
//import { NextResponse } from "next/server";
//import db from "./../../API/db";
import { useEffect, useState } from 'react';
// `app/dashboard/page.js` is the UI for the `/dashboard` URL
export default function Page() {
  const [inputs, setInputs] = useState([]);
const serverHost = `http://localhost:3000/api/user`;
useEffect(() => {
/*const headers = {
  headers: {
      'crossOrigin': 'anonymous',
  }
};
  axios.get('http://localhost:3000/api/user',{},headers)
  .then(function(response){
      console.log(response.data);
  })
  .catch(function (error) {
      console.log(error);
  });*/


  
  async function getUserData(){
    //user();
    const apiUrl = serverHost;
    console.log(apiUrl);
    const response = await fetch(apiUrl);
    const res = await response.json();
    console.log(res);
  }
  getUserData();
}, [])

//let connectedUser = GetUser();
//console.log("connecté en tant que ",connectedUser);
    return (
      <>
      <header>
          <h1>Connection</h1>
      </header>
      <nav>
        <ul>
          <li><Link href="/">Accueil</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/habitats">Habitats</Link></li>
          <li><Link href="/animals">Animaux</Link></li>
          <li><Link href="/connection">Se connecter</Link></li>
        </ul>
      </nav>

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
    </>
    );

  }