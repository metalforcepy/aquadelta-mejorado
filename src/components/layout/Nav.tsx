import { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import { NAV_HREFS, NAV_KEY_MAP, NAV_LOGO } from "../../data/content";
import LanguageSwitcher from "../LanguageSwitcher";

export default function Nav() {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Build links from NAV_HREFS with translated labels
  const links = NAV_HREFS.map((href) => ({
    href,
    label: t(NAV_KEY_MAP[href]),
    id: href.replace("#", ""),
  }));

  // Detect scroll for backdrop-blur + shrink
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight active section based on scroll position
  useEffect(() => {
    const sectionIds = links.map((item) => item.id);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [links]);

  const handleClick = useCallback(
    (e: React.MouseEvent, href: string) => {
      e.preventDefault();
      setMobileOpen(false);
      const id = href.replace("#", "");
      if (pathname !== "/") {
        navigate("/" + href);
        return;
      }
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    },
    [pathname, navigate],
  );

  const navHeight = scrolled ? 56 : 72;

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-azul transition-[height] duration-300"
      style={{ height: navHeight }}
    >
      <div
        className={`mx-auto flex h-full max-w-[1200px] items-center justify-between px-6 transition-all duration-300 ${
          scrolled ? "backdrop-blur-md bg-azul/90" : ""
        }`}
      >
        {/* Logo */}
        <a href="#hero" onClick={(e) => handleClick(e, "#hero")}>
          <img
            src={NAV_LOGO}
            alt="Aquadelta"
            className="h-10 w-auto"
            style={{ height: scrolled ? 32 : 40 }}
          />
        </a>

        {/* Desktop links + LanguageSwitcher */}
        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {links.map(({ href, label, id }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={(e) => handleClick(e, href)}
                  className={`font-textos text-sm font-semibold transition-colors ${
                    activeSection === id
                      ? "text-turquesa"
                      : "text-tiza hover:text-turquesa"
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <LanguageSwitcher />
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-tiza"
          aria-label={mobileOpen ? t("nav.cerrarMenu") : t("nav.abrirMenu")}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-azul border-t border-tiza/10">
          <ul className="flex flex-col px-6 py-4 gap-3">
            {links.map(({ href, label, id }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={(e) => handleClick(e, href)}
                  className={`block w-full font-textos text-sm font-semibold transition-colors ${
                    activeSection === id
                      ? "text-turquesa"
                      : "text-tiza hover:text-turquesa"
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <LanguageSwitcher />
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
