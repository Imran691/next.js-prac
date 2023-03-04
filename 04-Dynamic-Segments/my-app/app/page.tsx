import Image from "next/image";
import { Inter } from "@next/font/google";
//import styles from './page.module.css'
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

import React from "react";


export default function Hello() {
  return (
    <div>
      <div>Hello World!</div>
      <Link href="/name/myname">Name</Link>
      <br />
      <Link href="/name/address">Address</Link>
      <br/>
      <Link href="designation">Designation</Link>
    </div>
  );
}
