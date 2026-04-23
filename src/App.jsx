import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { LangProvider } from "./contexts/LangContext";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <LangProvider>
          <Routes>
            <Route index element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </LangProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
