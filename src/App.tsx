import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";

// Carga perezosa (lazy) de las secciones principales + Detalle de noticias
const HeroSection = lazy(() => import("./components/sections/HeroSection"));
const ProjectSection = lazy(() => import("./components/sections/ProjectSection"));
const UbicacionSection = lazy(() => import("./components/sections/UbicacionSection"));
const DistritoNorteSection = lazy(() => import("./components/sections/DistritoNorteSection"));
const BarriosSection = lazy(() => import("./components/sections/BarriosSection"));
const AmenitiesSection = lazy(() => import("./components/sections/AmenitiesSection"));
const GallerySection = lazy(() => import("./components/sections/GallerySection"));
const NoticiasSection = lazy(() => import("./components/sections/NoticiasSection"));
const NoticiaDetallePage = lazy(() => import("./components/sections/NoticiaDetallePage"));

const SectionFallback = () => (
  <div className="min-h-[50vh] flex items-center justify-center bg-[#002f4d]/5">
    <div className="font-textos text-sm text-[#005587]/40 uppercase tracking-widest animate-pulse">
      Cargando experiencia...
    </div>
  </div>
);

function LandingPage() {
  return (
    <Suspense fallback={<SectionFallback />}>
      <HeroSection />
      <ProjectSection />
      <UbicacionSection />
      <DistritoNorteSection />
      <BarriosSection />
      <AmenitiesSection />
      <GallerySection />
      <NoticiasSection />
    </Suspense>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#D9D9D6] text-[#005587] font-sans antialiased selection:bg-[#88DBDF] selection:text-[#005587]">
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:rounded-lg focus:bg-[#E5B263] focus:px-6 focus:py-3 focus:font-textos focus:text-sm focus:font-semibold focus:text-[#003452] focus:shadow-xl"
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
    </div>
  );
}