import React from "react";

export default function HamIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="#1f1f1f"
      {...props}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3.84 6.943C3.84 6.52879 4.17579 6.193 4.59 6.193H19.273C19.6872 6.193 20.023 6.52879 20.023 6.943C20.023 7.35721 19.6872 7.693 19.273 7.693H4.59C4.17579 7.693 3.84 7.35721 3.84 6.943Z"
      ></path>{" "}
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3.84 12.201C3.84 11.7868 4.17579 11.451 4.59 11.451H19.273C19.6872 11.451 20.023 11.7868 20.023 12.201C20.023 12.6152 19.6872 12.951 19.273 12.951H4.59C4.17579 12.951 3.84 12.6152 3.84 12.201Z"
      ></path>{" "}
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3.84 17.46C3.84 17.0458 4.17579 16.71 4.59 16.71H19.273C19.6872 16.71 20.023 17.0458 20.023 17.46C20.023 17.8742 19.6872 18.21 19.273 18.21H4.59C4.17579 18.21 3.84 17.8742 3.84 17.46Z"
        fill={props.fill}
      ></path>
    </svg>
  );
}
