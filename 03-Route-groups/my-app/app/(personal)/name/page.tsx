import React from "react";
import Link from "next/link";

export default function Name() {
  return (
    <div>
      <div>My name is Imran.</div>
      <Link href="/">Home Page</Link>
      <br />
      <Link href="/address">Address</Link>
    </div>
  );
}
