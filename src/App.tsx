import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";

// Carga perezosa (lazy) de las 5 secciones principales + Hero y Detalle
const HeroSection = lazy(() => import("./components/sections/HeroSection"));
const ProjectSection = lazy(() => import("./components/sections/ProjectSection"));
const UbicacionSection = lazy(() => import("./components/sections/UbicacionSection"));
const BarriosSection = lazy(() => import("./components/sections/BarriosSection"));
const AmenitiesSection = lazy(() => import("./components/sections/AmenitiesSection"));
const NoticiasSection = lazy(() => import("./components/sections/NoticiasSection"));
const NoticiaDetallePage = lazy(() => import("./components/sections/NoticiaDetallePage"));

const SectionFallback = () => (
  <div style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
    <div className="font-textos text-sm text-azul/30">Cargando...</div>
  </div>
);

function LandingPage() {
  return (
    <>
      <Suspense fallback={<SectionFallback />}><HeroSection /></Suspense>
      <Suspense fallback={<SectionFallback />}><ProjectSection /></Suspense>
      <Suspense fallback={<SectionFallback />}><UbicacionSection /></Suspense>
      <Suspense fallback={<SectionFallback />}><BarriosSection /></Suspense>
      <Suspense fallback={<SectionFallback />}><AmenitiesSection /></Suspense>
      <Suspense fallback={<SectionFallback />}><NoticiasSection /></Suspense>
    </>
  );
}

export default function App() {
  return (
    <>
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:rounded-lg focus:bg-naranja focus:px-6 focus:py-3 focus:font-textos focus:text-sm focus:font-semibold focus:text-tiza focus:shadow-lg"
      >
        Saltar al contenido
      </a>

      <Nav />

      <main id="main-content">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route 
            path="/noticias/:id" 
            element={
              <Suspense fallback={<SectionFallback />}>
                <NoticiaDetallePage />
              </Suspense>
            } 
          />
        </Routes>
      </main>

      <Footer />
    </>
  );
}