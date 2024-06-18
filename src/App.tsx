import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Home from "./pages/Home/Home";
import HamsterKombat from "./pages/HamsterKombat/HamsterKombat";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <section>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hamster_kombat" element={<HamsterKombat />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </section>
  );
}

export default App;
