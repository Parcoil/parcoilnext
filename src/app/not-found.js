import React from "react";
import Nav from "./nav";
import { Button, Link } from "@nextui-org/react";

function notfound() {
  return (
    <>
      <Nav />
      <div className="text-center mt-5">
        <h1 className=" text-6xl">404</h1>
        <h2>Not Found</h2>
        <Link href="/./" color="foreground">
          <Button variant="shadow" color="primary" className="mt-5">
            Go Home
          </Button>
        </Link>
      </div>
    </>
  );
}

export default notfound;
