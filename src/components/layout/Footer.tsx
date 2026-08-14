import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import { FOOTER_LOGO, NAV_HREFS, NAV_KEY_MAP } from "../../data/content";

export default function Footer() {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const links = NAV_HREFS.map((href) => ({
    href,
    label: t(NAV_KEY_MAP[href]),
    id: href.replace("#", ""),
  }));

  const handleClick = useCallback(
    (e: React.MouseEvent, href: string) => {
      e.preventDefault();
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

  const year = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-azul text-tiza">
      <div className="mx-auto max-w-[1200px] px-6 py-16 flex flex-col items-center gap-8">
        {/* Logo */}
        <img
          src={FOOTER_LOGO}
          alt="Aquadelta"
          loading="lazy"
          className="h-12 w-auto"
        />

        {/* Nav links */}
        <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3">
          {links.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                onClick={(e) => handleClick(e, href)}
                className="font-textos text-sm text-tiza/70 hover:text-turquesa transition-colors"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Slogan */}
        <p className="font-destacados text-2xl text-tiza/80">
          {t("brand.slogan")}
        </p>

        {/* Copyright */}
        <p className="font-textos text-xs text-tiza/50">
          {t("footer.copyright", { year })}
        </p>
      </div>
    </footer>
  );
}
