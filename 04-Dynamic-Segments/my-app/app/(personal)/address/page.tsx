import React from "react";
import Link from "next/link";

export default function Address() {
  return (
    <div>
      <div>My address is in Lahore.</div>
      <Link href="../name/myname">Name</Link>
      <br />
      <Link href="../../">Home Page</Link>
    </div>
  );
}
