import React from "react";
import Nav from "../components/nav";
import { Image, Button } from "@nextui-org/react";

import Link from "next/link";
function page() {
  return (
    <>
      <Nav />
      <div className="text-center">
        <div className="flex justify-center items-center">
          <img width={100} alt="Sparkle Logo" src="sparkles_logo.png" />
        </div>
        <h1 className="text-6xl">Sparkle</h1>
        <h4 className="mt-3">The Finest Windows Optimizer</h4>
        <Link href={"https://github.com/Parcoil/Sparkle/releases/latest"}>
          <Button variant="shadow" color="primary" className="mt-5">
            Download
          </Button>
        </Link>
      </div>
      <div className="flex justify-center items-center mt-9">
        <img
          width={500}
          alt="Sparkle App Screenshot"
          src="sparkleapp.png"
        ></img>
      </div>
    </>
  );
}

export default page;
