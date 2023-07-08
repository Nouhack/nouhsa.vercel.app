import { signIn, signOut } from "next-auth/react";

function GitHubIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_9914_10)">
        <path
          d="M12 0C5.374 0 0 5.373 0 12C0 17.302 3.438 21.8 8.207 23.387C8.806 23.498 9 23.126 9 22.81V20.576C5.662 21.302 4.967 19.16 4.967 19.16C4.421 17.773 3.634 17.404 3.634 17.404C2.545 16.659 3.717 16.675 3.717 16.675C4.922 16.759 5.556 17.912 5.556 17.912C6.626 19.746 8.363 19.216 9.048 18.909C9.155 18.134 9.466 17.604 9.81 17.305C7.145 17 4.343 15.971 4.343 11.374C4.343 10.063 4.812 8.993 5.579 8.153C5.455 7.85 5.044 6.629 5.696 4.977C5.696 4.977 6.704 4.655 8.997 6.207C9.954 5.941 10.98 5.808 12 5.803C13.02 5.808 14.047 5.941 15.006 6.207C17.297 4.655 18.303 4.977 18.303 4.977C18.956 6.63 18.545 7.851 18.421 8.153C19.191 8.993 19.656 10.064 19.656 11.374C19.656 15.983 16.849 16.998 14.177 17.295C14.607 17.667 15 18.397 15 19.517V22.81C15 23.129 15.192 23.504 15.801 23.386C20.566 21.797 24 17.3 24 12C24 5.373 18.627 0 12 0Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_9914_10">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function SignOut() {
  const buttonStyle = {
    fontSize: "12px",
    color: "#4A5568",
    marginTop: "2px",
    marginBottom: "6px",
    // border: "1px solid #CBD5E0",
    border: "none",
    backgroundColor: "transparent",
    borderRadius: "0.375rem",
  };

  return (
    <button style={buttonStyle} onClick={() => signOut()}>
      Sign out
    </button>
  );
}

export function SignIn() {
  const buttonStyle = {
    paddingRight: "1rem",
    paddingLeft: "1rem",
    paddingTop: "0.5rem",
    paddingBottom: "0.5rem",

    border: "1px solid #CBD5E0",
    backgroundColor: "#F7FAFC",
    borderRadius: "0.375rem",
    fontSize: "14px",
    color: "#1A202C",
    display: "inline-flex",
    alignItems: "center",
    marginBottom: "8px",
    gap: "0.5rem",
  };

  const githubIconStyle = {
    width: "20px",
    height: "20px",
    marginRight: "5px",
    fill: "currentColor",
  };

  const textStyle = {
    marginLeft: "3px",
  };

  return (
    <button style={buttonStyle} onClick={() => signIn("github")}>
      <GitHubIcon />
      <div style={textStyle}>Sign in with GitHub</div>
    </button>
  );
}
