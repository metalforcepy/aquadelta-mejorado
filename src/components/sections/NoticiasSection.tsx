import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:3000";
const SITE_ID = 2;

function imgSrc(url: string): string | null {
  if (!url) return null;
  return url.startsWith("/") ? API_BASE + url : url;
}

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function NoticiasSection() {
  const { t, i18n } = useTranslation();
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    async function fetchPosts() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(
          `${API_BASE}/api/posts?siteId=${SITE_ID}&lang=${i18n.language}&limit=3`,
        );
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = await res.json();
        if (!cancelled) setPosts(json.data || []);
      } catch (err: any) {
        if (!cancelled) {
          console.error("NoticiasSection:", err);
          setError(err.message);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    fetchPosts();
    return () => {
      cancelled = true;
    };
  }, [i18n.language]);

  return (
    <section id="noticias" className="py-20 lg:py-32 bg-tiza overflow-hidden">
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Section title */}
        <motion.h2
          className="font-titulares text-3xl font-extrabold tracking-[0.2em] text-azul uppercase sm:text-4xl lg:text-5xl text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          {t("noticias.title")}
        </motion.h2>

        {/* Loading state */}
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-white rounded-lg overflow-hidden shadow-md"
              >
                <div className="w-full h-48 bg-azul/5 animate-pulse" />
                <div className="p-6 space-y-3">
                  <div className="h-3 bg-azul/10 rounded w-1/3 animate-pulse" />
                  <div className="h-4 bg-azul/10 rounded w-3/4 animate-pulse" />
                  <div className="h-3 bg-azul/10 rounded w-full animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Error state */}
        {error && !loading && (
          <p className="font-textos text-azul/40 text-center py-12">
            {t("noticias.error")}
          </p>
        )}

        {/* Empty state */}
        {!loading && !error && posts.length === 0 && (
          <p className="font-textos text-azul/40 text-center py-12">
            {t("noticias.empty")}
          </p>
        )}

        {/* Posts grid */}
        {!loading && posts.length > 0 && (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {posts.map((post) => (
              <motion.article
                key={post.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow flex flex-col"
                variants={fadeUp}
              >
                <Link to={`/noticias/${post.id}`} className="block overflow-hidden">
                  {post.imageUrl ? (
                    <img
                      src={imgSrc(post.imageUrl)!}
                      alt={post.title}
                      className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-48 bg-azul/5 flex items-center justify-center">
                      <span className="font-titulares text-azul/20 text-sm">
                        Aquadelta
                      </span>
                    </div>
                  )}
                </Link>
                <div className="p-6 flex flex-col flex-1">
                  <Link
                    to={`/noticias/${post.id}`}
                    className="block mb-2"
                  >
                    <h3 className="font-titulares font-bold text-lg text-azul hover:text-azul/70 transition-colors">
                      {post.title}
                    </h3>
                  </Link>
                  {post.excerpt && (
                    <p className="font-textos text-sm text-azul/70 mb-4 flex-1">
                      {post.excerpt.substring(0, 120)}
                      {post.excerpt.length > 120 ? "..." : ""}
                    </p>
                  )}
                  <span className="font-textos text-xs text-azul/40">
                    {new Date(post.createdAt).toLocaleDateString(
                      i18n.language === "pt"
                        ? "pt-BR"
                        : i18n.language === "en"
                          ? "en-US"
                          : "es-PY",
                      { year: "numeric", month: "long", day: "numeric" },
                    )}
                  </span>
                </div>
              </motion.article>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
