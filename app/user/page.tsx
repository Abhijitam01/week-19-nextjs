"use client";
import {useEffect , useState} from "react";
import axios from "axios";

export default function User() {
    const [loading,setLoading] = useState(true);
    const [data,setData] = useState();

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users/1").then((res) => {
            setData(res.data);
            setLoading(false);
        })
    },[])

    return (
        <div>
            {loading ? <h1>Loading...</h1> : <h1>{data.name,data.email}</h1>}
        </div>
    )
}