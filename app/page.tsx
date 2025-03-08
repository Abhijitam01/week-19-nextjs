import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
export default function Home() {
  return (
    <div >
     <Link href="/signin">Sign in</Link>
     <br />
     <Link href="/signup">Sign up</Link>
     <br />
     <button onClick={async () => {
       const router = useRouter();
       router.push("/signup");
     }}>Fetch</button>
    </div>
  );
}
