import path from "path";
import React from "react";
import { promises as fs } from "fs";
import grayMatter from "gray-matter";
import Link from "next/link";
import { Posts } from "../posts";
import Head from "next/head";

type Props = {};

export default function Blog({ posts }: any) {
  return (
    <div>
      <Head>
        <title>Blog | Nouh Saiche</title>
        <meta
          name="description"
          content="Read my thoughts on software development, design, and more."
        />
      </Head>
      <h2>Blog</h2>
      <div className="blog_wrapper">
        {Posts.map((item, index) => {
          return (
            <div key={index} className="post_container">
              <p className="blog_title">
                <Link href={`blog/${item.slug}`}>{item.title}</Link>
              </p>
              <p className="blog_date">{item.date}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
