"use client"
import React, {useEffect, useState} from 'react';
import {Details} from "@/app/interface/datail";
import {Pockemon} from "@/app/interface/pockemon";

 const About = ({params}:{params : {id : number}})=>{
    const [details , setDetails] = useState<Details>();
    const findAll = async ():Promise<Details>=>{
        const res = await fetch (`https://pokeapi.co/api/v2/pokemon/${params.id}`);
        if (!res.ok){
            console.log("error")
        }
        const data : Details = await res.json()
        return data
    }
    useEffect(()=>{
        findAll().then(setDetails);
    }, [])
    return(
        <>
            <img src= {details?.sprites.front_default} alt="image" height={100} width={100} ></img>
            <p>image : {details?.sprites.front_default}</p>
        <ul>
            <li>name : {details?.name}</li>
            <li>height : {details?.height}</li>
            <li>weight : {details?.weight}</li>
            <li>order : {details?.order}</li>

        </ul>
        <ul>
            type :{details?.types?.map((content , index)=>(
            <li key={index}>
                <p>slot:{content.slot}</p>
                <p>
                    <p>name :{content.type.name}</p>
                     <p>url : {content.type.url}</p>
                </p>
            </li>

        ))}
        </ul>

</>

    )
}

export default About;