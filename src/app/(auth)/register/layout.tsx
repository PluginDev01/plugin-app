import React from "react";
import Head from "next/head";

export default function Layout({
  children,
  title = "Plugin | Register",
}: {
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      {children}
    </>
  );
}
