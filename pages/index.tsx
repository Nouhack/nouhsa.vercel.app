import Head from "next/head";
import React from "react";

type Props = {};

export default function Index({}: Props) {
  return (
    <>
      <Head>
        <title>Nouh Saiche</title>
        <meta name="description" content="Full Stack developer at Hostaplast" />
      </Head>
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
          <img
            className="personal_image"
            src="https://nouhsa.vercel.app/Dev.jpg"
            alt=""
          />

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
