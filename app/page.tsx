"use client"
import React ,{useEffect, useState} from "react";
import {Pockemon} from "@/app/interface/pockemon"
import Link from "next/link";

export default function Home() {
  const [pockemon , setPockemon] = useState<Pockemon>()
  const UrlAll : String = "https://pokeapi.co/api/v2/pokemon?limit=50&offset=0";

  const findAll = async ():Promise<Pockemon>=>{
      const res = await fetch ("https://pokeapi.co/api/v2/pokemon?limit=50&offset=0");
      if (!res.ok){
          console.log("error")
      }
      const data : Pockemon = await res.json()
      return data
  }

  useEffect(()=>{
       findAll().then(setPockemon);
      console.log(findAll())
  }, [])

  return (
      <>
        <ul>
            {pockemon?.results?.map(( el, index)=>(
                <li key={index} >
                    <Link href={`/client/${index+1}`}>{el.name}</Link>
                </li>
            ))}
        </ul>

      </>
  );
}

