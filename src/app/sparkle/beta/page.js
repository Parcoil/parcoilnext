import React from "react";
import Nav from "@/app/components/nav";
import Stars from "@/app/components/stars";
import Link from "next/link";
import { Button } from "@nextui-org/react";
function page() {
  return (
    <>
      <Nav />
      <Stars />
      <div className="text-center">
        <div className="flex justify-center items-center">
          <img
            width={100}
            alt="Sparkle Logo"
            src="/./sparkle_2.png"
            style={{ marginTop: 51 }}
          />
        </div>
        <h1 className="text-6xl">Meet Sparkle.</h1>
        <h4 className="mt-3">The Finest Windows Optimizer.</h4>
        <h5>*BETA*</h5>
        {/* <Link href={"https://github.com/Parcoil/Sparkle/releases/latest"}>
          <Button variant="shadow" color="primary" className="mt-7">
            Download
          </Button>
        </Link> */}
      </div>
      <div className="flex justify-center items-center mt-9">
        <img
          width={500}
          alt="Sparkle App Screenshot"
          src="/./sparkle2app.png"
          style={{ borderRadius: 10 }}
        ></img>
      </div>
    </>
  );
}

export default page;
