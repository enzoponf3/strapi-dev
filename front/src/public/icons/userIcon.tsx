import React from "react";

export default function UserIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="#1f1f1f"
      {...props}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.696.074a3.841 3.841 0 1 1 1.498 7.534A3.841 3.841 0 0 1 7.696.074ZM9 1.049a2.85 2.85 0 1 0-1.112 5.59 2.85 2.85 0 0 0 1.112-5.59Z"
      ></path>{" "}
      <path d="M3.887 10.813A6.444 6.444 0 0 1 14.89 15.37a.494.494 0 1 1-.988 0v-.003a5.457 5.457 0 0 0-10.913 0v.003a.494.494 0 1 1-.988 0c0-1.71.679-3.348 1.887-4.557Z"></path>
    </svg>
  );
}
