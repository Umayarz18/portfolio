import { Error404 } from "../public/error404art";
import Head from "next/head";
import React from "react";
export default function Custom404() {
  return (
    <React.Fragment>
      <Head>
        <title>Error 404 | Roewyn Umayam</title>
      </Head>
      <div className="grid justify-center items-center content-center w-screen h-screen">
        <Error404 classes="w-2/4 h-2/4 justify-self-center " />
        <p className="justify-self-center text-lg md:text-xl lg:text-2xl text-center">
          Oops! Looks like the page you're looking for is no longer here. <br />
          Shoot a message to{" "}
          <a href="/contact" className="text-primary hover:underline font-bold">
            @me
          </a>{" "}
          or head back to my{" "}
          <a href="/" className="text-primary hover:underline font-bold">
            home page
          </a>
          .
        </p>
      </div>
    </React.Fragment>
  );
}
