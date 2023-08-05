import path from "path";
import React from "react";
import { promises as fs } from "fs";
import grayMatter from "gray-matter";
import Link from "next/link";
import { Posts } from "../posts";
import Head from "next/head";
import { NextSeo } from "next-seo";

type Props = {};

const url = "https://www.nouhsa.vercel.app/blog";
const title = "Blog - Nouh saiche";

export default function Blog({ posts }: any) {
    return (
        <div>
            <NextSeo
                title={title}
                canonical={url}
                openGraph={{
                    url,
                    title,
                }}
            />
            <h2 style={{ color: 'white' }}>Blog</h2>
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
