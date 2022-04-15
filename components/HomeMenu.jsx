import React from "react";

export default function HomeMenu({ href, children }) {
  return (
    <div>
      <a className=" hover:text-orange-400 " href={href}>
        {children}
      </a>
    </div>
  );
}
