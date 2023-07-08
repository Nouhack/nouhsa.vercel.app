import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { useSession, signIn, signOut } from "next-auth/react";
import Form from "../components/Form";
import { SignIn, SignOut } from "../components/Buttons";

type Props = {};

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function Guestbook({}: Props) {
  const { data, error, isLoading } = useSWR("/api/hello", fetcher);
  const { data: session, status } = useSession();

  return (
    <section>
      <h1 className="font-bold text-2xl mb-8 tracking-tighter">
        sign my guestbook
      </h1>
      {session?.user ? (
        <>
          <Form />
          <SignOut />
        </>
      ) : status === "loading" ? (
        <p>loading</p>
      ) : (
        <SignIn />
      )}
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        data.data.map((entry) => (
          <div key={entry.id} style={{ marginTop: "1rem" }}>
            <div style={{ fontSize: 15 }}>
              <span style={{ color: "grey" }}>{entry.created_by}: </span>
              {entry.body}
            </div>
          </div>
        ))
      )}
    </section>
  );
}
