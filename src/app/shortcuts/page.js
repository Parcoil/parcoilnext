import React from "react";
import { Card, CardBody, CardFooter, Image, Link } from "@nextui-org/react";

import shortcutsData from "./shortcuts.json"; // Assuming your JSON file is named shortcuts.json
import "../app.css";
import Nav from "../components/nav";
import Stars from "../components/stars";
export default function App() {
  const shortcuts = shortcutsData;

  return (
    <>
      <Stars />
      <Nav />
      <div className="text-center m-7 text-4xl">
        <h1>Shortcuts</h1>
      </div>
      <div className="gap-2 grid grid-cols-4 sm:grid-cols-4 shortcutcard ">
        {shortcuts.map((shortcut, index) => (
          <Link href={shortcut.url}>
            <Card shadow="sm" key={index} isPressable>
              <CardBody className="overflow-visible p-0">
                <Image
                  shadow="sm"
                  radius="lg"
                  width="100%"
                  alt={shortcut.title}
                  className="w-full object-cover h-[140px]"
                  src={shortcut.img}
                />
              </CardBody>
              <CardFooter className="text-small justify-between">
                <b>{shortcut.title}</b>
                <p className="text-default-500">{shortcut.action}</p>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </>
  );
}
