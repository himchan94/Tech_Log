import React from "react";
import Seo from "./Seo";

interface Props {
  children: React.ReactNode;
}

export default function Layout({children}: Props) {
  return (
    <>
    <Seo />
    <div>
      {children}
    </div>
    </>
  );
}

