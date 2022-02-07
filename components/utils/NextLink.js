import React from "react";
import Link from "next/link";

export default function NextLink(props) {
  return <Link href={props.href}>{props.children}</Link>;
}
