import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import About from "./pages/About";
import { PortfolioProvider } from "./appContext/portfolio-context";
import Proyects from "./pages/Projects";
import Contact from "./pages/Contact";
import Creadentials from "./pages/Creadentials";
import Project from "./pages/ProjectName";

function MainLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
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
            <Route path="/credentials" element={<Creadentials />} />
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
