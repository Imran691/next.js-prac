import { Inter } from "@next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

import React from "react";

// <Link> tag is wrapper of <a> tag
// If we use <Link> tag the linked page is pre-rendered and while navigating the browser is not re-freshed
// If we use <a> tag, the browser is re-freshed while navigating between pages

// To write <a> in text between tags, we will have to type   &lt;a&gt;   this will be converted to <a> in browser.

export default function Hello() {
  return (
    <div>
      <div>Hello World!</div>
      <Link href="/name">Name</Link>
      <br />
      <Link href="/name/address">Address</Link>
    </div>
  );
}
