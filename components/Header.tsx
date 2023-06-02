import React from "react";
import Link from "next/link";

type Props = {};

export default function Header({}: Props) {
  return (
    <ul className="header">
      <li>
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <img src="favicon.ico" alt="" width={40} height={40} />
        </Link>
      </li>
      <div>
        <li>
          <Link href="/">About</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/resume">Resume</Link>
        </li>
      </div>
    </ul>
  );
}
