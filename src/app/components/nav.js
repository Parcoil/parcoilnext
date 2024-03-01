"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Image,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";

// import parcoillogo from "public/logo.png";
// import { Camera, Home } from "lucide-react";

function Nav() {
  return (
    <Navbar isBordered>
      <NavbarBrand>
        <img alt="alt" src="/logo.png" width={50} className="l-0" />
        <p className="font-bold text-inherit ml-10">Parcoil</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/./">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/shortcuts">
            Shortcuts{" "}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Dropdown backdrop="blur">
            <DropdownTrigger>
              <Link
                color="foreground"
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent hre3"
                variant="light"
              >
                Products
              </Link>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
              <DropdownItem href="/shortcuts" key="new">
                📦&nbsp;Shortcuts
              </DropdownItem>
              <DropdownItem key="copy" href="/sparkle">
                ✨&nbsp;Sparkle
              </DropdownItem>
              <DropdownItem key="edit" href="https://nativegames.net">
                🎮&nbsp;Nativegames
              </DropdownItem>
              {/* <DropdownItem key="delete" className="text-danger" color="danger">
                Delete file
              </DropdownItem> */}
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        {/* <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem> */}
        {/* <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem> */}
      </NavbarContent>
    </Navbar>
  );
}
export default Nav;
