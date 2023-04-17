import React from "react";
import Link from "next/link";

type Props = {};

export default function Header({}: Props) {
  return (
    <ul className="header">
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/blog">Blog</Link>
      </li>
    </ul>
  );
}
