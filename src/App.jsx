// Layout
import { useState } from "react";
import { Footer, Header } from "./components/layout";

// Sections
import { Hero, Projects } from "./components/sections";

const App = () => {
  const mode = useState(() => localStorage.getItem("mode") === "dark");

  return (
    <>
      <Header mode={mode} />
      <main className="w-full h-auto min-h-[calc(100vh-72px)]">
        <div className="w-full h-full border-4 border-green-500">
          <Hero />
          <Projects />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default App;
