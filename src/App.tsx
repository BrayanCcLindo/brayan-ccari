import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { PortfolioProvider } from "./appContext/portfolio-context";
import { lazy, Suspense } from "react";
import FullscreenLoader from "./components/Loader";

function MainLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Proyects = lazy(() => import("./pages/Projects"));
const Contact = lazy(() => import("./pages/Contact"));
const Project = lazy(() => import("./pages/ProjectName"));

function App() {
  return (
    <PortfolioProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route
              path="/"
              element={
                <Suspense fallback={<FullscreenLoader />}>
                  <Home />
                </Suspense>
              }
            />
            <Route
              path="/about-me"
              element={
                <Suspense fallback={<FullscreenLoader />}>
                  <About />
                </Suspense>
              }
            />
            <Route
              path="/my-projects"
              element={
                <Suspense fallback={<FullscreenLoader />}>
                  <Proyects />
                </Suspense>
              }
            />
            <Route
              path="/contact"
              element={
                <Suspense fallback={<FullscreenLoader />}>
                  <Contact />
                </Suspense>
              }
            />
            <Route
              path="/my-projects/:projectName"
              element={
                <Suspense fallback={<FullscreenLoader />}>
                  <Project />
                </Suspense>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </PortfolioProvider>
  );
}

export default App;
