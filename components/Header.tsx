import React from "react";
import Link from "next/link";

type Props = {};

export default function Header({}: Props) {
  return (
    <ul className="header">
      <div style={{ gap: "1rem", display: "flex" }}>
        <li>
          <Link href="/">home</Link>
        </li>
        <li>
          <Link href="/blog">blog</Link>
        </li>
        <li>
          <Link href="/guestbook">guestbook</Link>
        </li>
      </div>
    </ul>
  );
}
