import { fav_blogs } from "@/More/Fav_blog";
import Skillbox from "@/components/Skills_box";
import { NextSeo } from "next-seo";
import Image from "next/image";

import React from "react";

type Props = {};

const url = "https://www.nouhsa.vercel.app/";
const title = "About Me - Nouh saiche";

export default function Index({}: Props) {
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
        <h2>hey, I‘m Nouh 👋</h2>
        <button
          onClick={() => {
            console.log(process.env.DATABASE_URL);
          }}
        >
          kkk
        </button>
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
          <div style={{ gap: "0.6rem", display: "flex", alignItems: "center" }}>
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
              style={{ textDecoration: "none", color: "inherit" }}
            >
              follow me on github
            </a>
          </div>
        </div>
        <h2>My Current status 🏴󠁧󠁢󠁮󠁩󠁲󠁿</h2>
        <p>
          Currently i‘am working at Hostaplast, a company specializing in
          geolocation services. Throughout my time here, I have successfully
          completed multiple projects, leveraging my 5 years of development
          experience. I have a strong passion for helping others and sharing my
          knowledge, which is why I also write insightful blog articles to
          contribute to the developer community.
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
                  color: "inherit",
                  width: "100%",
                  backgroundColor: "#FAFAFA",
                  borderRadius: "3px",
                  borderStyle: "solid",
                  borderWidth: "2px",
                  borderColor: "#E5E5E5",
                  padding: "0.7rem",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <p style={{ fontWeight: "bold" }}>
                  {item.title}
                  <br />
                  <span style={{ fontSize: "14px", fontWeight: "normal" }}>
                    {item.date}
                  </span>
                </p>
                <Image
                  src="./arrow.svg"
                  width={15}
                  height={15}
                  color="green"
                  alt="React Logo"
                />
              </a>
            );
          })}
        </div>
      </main>
    </>
  );
}
