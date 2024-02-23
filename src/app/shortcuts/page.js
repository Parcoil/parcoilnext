import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import Nav from "../nav";
export default function App() {
  const shortcuts = [
    {
      title: "Send message to Mom",
      img: "/images/message.jpeg",
      action: "Send a message to your mom",
    },
    {
      title: "Set timer for 10 minutes",
      img: "/images/timer.jpeg",
      action: "Set a timer for 10 minutes",
    },
    {
      title: "Directions to Home",
      img: "/images/directions.jpeg",
      action: "Get directions to your home",
    },
    {
      title: "Call Emergency",
      img: "/images/call.jpeg",
      action: "Call emergency services",
    },
    {
      title: "Create reminder",
      img: "/images/reminder.jpeg",
      action: "Create a reminder",
    },
    {
      title: "Play Music",
      img: "/images/music.jpeg",
      action: "Play your favorite music",
    },
    {
      title: "Search the web",
      img: "/images/search.jpeg",
      action: "Perform a web search",
    },
    {
      title: "Send email",
      img: "/images/email.jpeg",
      action: "Compose and send an email",
    },
  ];

  return (
    <>
      <Nav />
      <div className="gap-2 grid grid-cols-2 sm:grid-cols-4 m-9">
        {shortcuts.map((shortcut, index) => (
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
        ))}
      </div>
    </>
  );
}
