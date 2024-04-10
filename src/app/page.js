import "./App.css";
import { Button, Link } from "@nextui-org/react";
import { Metadata } from "next";
import Stars from "./components/stars";
import Nav from "./components/nav";
export const metadata = {
  title: "Home",
};
function App() {
  return (
    <main>
      <Stars />
      <Nav />
      <div className="text-center mt-6">
        <h1 className="font-bold parcoil-logo">parcoil.</h1>

        <a className="text-gray-50 ">
          Powering Play, Optimizing Performance, and Streamlining Your Digital
          Experience!
        </a>
        <div className="text-center mt-6">
          <Link href="https://lunaar.org">
            <Button size="lg" color="primary" variant="shadow">
              Check Out Lunaar 🌙
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}

export default App;
