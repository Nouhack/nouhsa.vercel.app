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
                borderRadius: "3px",
                backgroundColor: "#262626",
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
