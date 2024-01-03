import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import About from "./pages/About";
import { PortfolioProvider } from "./appContext/portfolio-context";
import Proyects from "./pages/Projects";
import Contact from "./pages/Contact";
import Project from "./pages/ProjectName";
import { useEffect, useState } from "react";

function MainLayout() {
  const [mode, setMode] = useState("dark");

  const nextMode = mode === "light" ? "dark" : "light";
  useEffect(() => {
    document.body.dataset.theme = mode;
  }, [mode]);

  return (
    <>
      <Header setMode={setMode} nextMode={nextMode} />
      <Outlet />
      <Footer nextMode={nextMode} />
    </>
  );
}

function App() {
  return (
    <PortfolioProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about-me" element={<About />} />
            <Route path="/my-projects" element={<Proyects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/my-projects/:projectName" element={<Project />} />

            {/* <Route path="/filter" element={<FilterPage />} />
            <Route path="/details/:bookSlug" element={<DetailsPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </PortfolioProvider>
  );
}

export default App;
