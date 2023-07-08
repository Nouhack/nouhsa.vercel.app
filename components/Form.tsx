import { useRef, useState } from "react";
import axios from "axios";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

export default function Form() {
  const inputRef = useRef<any>(null);
  const [pending, setPending] = useState(false);
  const { data: session, status } = useSession();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setPending(true);

    const message = inputRef.current.value;
    const email = session?.user?.email;
    const created_by = session?.user?.name;

    try {
      //await axios.post("http://localhost:3000/api/hello", {
      await axios.post("/api/hello", {
        email,
        body: message,
        created_by,
      });
      inputRef.current.value = "";
    } catch (error) {
      console.error("Error:", error);
    }

    setPending(false);
  };

  return (
    <form
      style={{
        opacity: !pending ? 1 : 0.7,
        display: "flex",
        flexDirection: "row",
        width: "70%",
        alignItems: "center",
        position: "relative",
      }}
      className="relative max-w-[500px] text-sm"
      onSubmit={handleSubmit}
    >
      <input
        aria-label="Your message"
        placeholder="Your message..."
        disabled={pending}
        name="entry"
        type="text"
        required
        ref={inputRef}
        style={{
          paddingLeft: "1rem",
          paddingRight: "8rem",
          flexGrow: 2,

          paddingTop: "0.7rem",
          paddingBottom: "0.7rem",
          outline: "none",
          border: "none",
          borderRadius: "0.375rem",
          backgroundColor: "#F3F4F6",
          color: "#1A202C",
          flex: 1,
        }}
      />
      <button
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          right: "0.25rem",
          paddingLeft: "1rem",
          paddingRight: "1rem",
          marginRight: "0.5rem",
          paddingTop: "0.25rem",
          paddingBottom: "0.25rem",
          border: "none",
          fontWeight: "500",
          height: "1.75rem",
          backgroundColor: "#E5E5E5",
          color: "#1A202C",
          borderRadius: "0.375rem",
          position: "absolute",
        }}
        disabled={pending}
        type="submit"
      >
        Sign
      </button>
    </form>
  );
}
