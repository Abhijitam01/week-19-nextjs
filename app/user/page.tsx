"use client";
import {useEffect , useState} from "react";
import axios from "axios";

export default async function User() {
    

    const response = await axios.get("https://jsonplaceholder.typicode.com/users/1");
    await new Promise(r => setTimeout(r, 5000));
    const data = await response.data;
    console.log("hi their");
    return (
        <div>
           user page 
           {data.name}
           {data.email}
        </div>
    )
}