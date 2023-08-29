import { fav_blogs } from "@/More/Fav_blog";
import Skillbox from "@/components/Skills_box";
import { NextSeo } from "next-seo";
import Image from "next/image";

import React from "react";

type Props = {};

const url = "https://www.nouhsa.vercel.app/";
const title = "About Me - Nouh saiche";

export default function Index({ }: Props) {
    return (
        <>
            <NextSeo
                title={title}
                canonical={url}
                openGraph={{
                    url,
                    title,
                }}
            />
            <main>
                <h2 style={{ color: 'white' }}>hey, I‘m Nouh 👋</h2>
                <div className="dev_introduction">
                    I‘am a self-taught developer with a Higher Technician degree in
                    database management systems. Experienced in
                    <Skillbox icon="./skills/react.svg" name="React js" />,
                    <Skillbox icon="./skills/mobile.svg" name="React Native" />,
                    <Skillbox icon="./skills/firebase.svg" name="Firebase" />,
                    <Skillbox icon="./skills/nextjs.svg" name="Next.js" />, and
                    <Skillbox icon="./skills/typescript.svg" name="Typescript" />.
                    <Skillbox icon="./skills/html.svg" name="HTML" />,
                    <Skillbox icon="./skills/css.svg" name="CSS" />,
                    <Skillbox icon="./skills/sass.svg" name="Sass" />,
                    <Skillbox icon="./skills/docker.svg" name="Docker" />,
                    <Skillbox icon="./skills/vim.svg" name="Vim" />,
                    <Skillbox icon="./skills/mongodb.svg" name="No SQL" />,
                    <Skillbox icon="./skills/sql.svg" name="Prisma ORM" />,
                    <Skillbox icon="./skills/express.svg" name="Express js" />,
                    <Skillbox icon="./skills/node.svg" name="Node js" />, and
                    <Skillbox icon="./skills/js.svg" name="Javascript" />. Passionate
                    about developing apps and software, eager to contribute skills and
                    collaborate with creative teams. Seeking opportunities to enhance
                    abilities and gain valuable experience.
                </div>
                <div className="dev_contact_info">
                    <div style={{
                        gap: "0.6rem", display: "flex", alignItems: "center", backgroundColor: 'white',
                        padding: '0.5rem',
                        fontWeight: 'bold',
                        borderRadius: '0.2rem'
                    }}>
                        <Image
                            src="./arrow.svg"
                            width={12}
                            height={12}
                            color="green"
                            alt="React Logo"
                        />
                        <a
                            href="https://github.com/Nouhack"
                            target="_blank"
                            style={{ textDecoration: "none", color: 'black' }}
                        >
                            follow me on github
                        </a>
                    </div>
                </div>
                <h2 style={{ color: 'white' }}>My Current status 🏴󠁧󠁢󠁮󠁩󠁲󠁿</h2>
                <p className="dev_introduction">
                    Transitioning from my role at Hostaplast, a geolocation company, I&#39;m eager to join ITComp – an Algerian IT service leader with 20+ years of experience, 500+ clients, and expertise in cutting-edge technologies. My 5 years of development experience and passion for knowledge-sharing, reflected in my blog articles, align perfectly with ITComp&#39;s commitment to advanced tech and client empowerment.





                </p>

                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "1rem",
                        marginBottom: "3rem",
                    }}
                >
                    {fav_blogs.map((item, index) => {
                        return (
                            <a
                                href={"blog/" + item.slug}
                                key={index}
                                style={{
                                    textDecoration: "none",
                                    color: "white",
                                    width: "100%",
                                    height: '80px',
                                    backgroundColor: "#262626",
                                    borderRadius: "5px",
                                    paddingLeft: "0.7rem",
                                    //paddingRight: "0.7rem",
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    overflow: 'hidden'
                                }}
                            >
                                <p style={{ fontWeight: "bold" }}>
                                    {item.title}
                                    <br />
                                    <span style={{ fontSize: "14px", fontWeight: "normal" }}>
                                        {item.date}
                                    </span>
                                </p>
                                <div style={{
                                    backgroundColor: 'white', height: '100%',
                                    width: '40px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}>

                                    < Image
                                        src="./arrow.svg"
                                        width={20}
                                        height={20}
                                        color="green"
                                        alt="React Logo"
                                    />
                                </div>
                            </a>
                        );
                    })}
                </div>
            </main >
        </>
    );
}
