import { NextSeo } from "next-seo";

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
        <h2>About me</h2>
        <p className="dev_introduction">
          Salam alikoum I&lsquo;am nouh ,
          <span className="nested_dev_introduction">
            Full Stack developer at Hostaplast
          </span>
          <br /> Where we offer geolocalization GPS solution.
        </p>
        <div className="dev_contact_info">
          <img className="personal_image" src="./Dev.jpg" alt="" />

          <ul className="social_media">
            <li>
              Github :{" "}
              <a href="https://github.com/Nouhack" target="_blank">
                @nouhack
              </a>
            </li>
            <li>
              Email : <a href="">nouh.saiche@gmail.com</a>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}
