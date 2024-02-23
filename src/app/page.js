import "./App.css";
import { Button } from "@nextui-org/react";
import Nav from "./nav";

function App() {
  return (
    <div id="particles-js">
      <main>
        <Nav />
        <div className="text-center mt-6">
          <h1 className="font-bold parcoil-logo">parcoil.</h1>

          <a className="text-gray-50 ">
            Powering Play, Optimizing Performance, and Streamlining Your Digital
            Experience!
          </a>
          <div className="text-center mt-6">
            <Button size="lg" color="primary" variant="shadow">
              Explore
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
