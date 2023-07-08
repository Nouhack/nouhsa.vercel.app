import React from "react";

type Props = {
  icon: string;
  name: string;
};

export default function Skillbox({ icon, name }: Props) {
  return (
    <span
      style={{
        alignItems: "center",
        marginLeft: "5px",
        marginRight: "5px",
        paddingLeft: "5px",
        paddingRight: "5px",

        flexGrow: 0,
        borderWidth: "1px",
        borderColor: "#E5E5E5",
        borderStyle: "solid",
        borderRadius: "3px",
        backgroundColor: "#FAFAFA",
        display: "inline-flex", // Updated display property
      }}
    >
      <img
        src={icon}
        style={{
          paddingLeft: "5px",
          paddingRight: "5px",
        }}
        width={17}
        height={17}
        color="green"
        alt="React Logo"
      />
      {name}
    </span>
  );
}
