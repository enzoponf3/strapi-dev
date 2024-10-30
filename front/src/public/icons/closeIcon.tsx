import React from "react";

export default function CloseIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="#1f1f1f"
    >
      <path
        d="M16.561 17.777a.86.86 0 0 0 1.216-1.216l-4.552-4.553 4.552-4.552a.86.86 0 0 0-1.216-1.216l-4.552 4.548L7.456 6.24A.86.86 0 0 0 6.24 7.456l4.548 4.552-4.548 4.553a.86.86 0 0 0 1.216 1.216l4.553-4.552 4.552 4.552Z"
        fill={props.fill}
      ></path>
    </svg>
  );
}
