import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:3000";
const SITE_ID = 2;

interface Post {
  id: number;
  title: string;
  body: string;
  imageUrl?: string;
  excerpt?: string;
  createdAt: string;
}

export default function NoticiaDetallePage() {
  const { t, i18n } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!id) return;

    let cancelled = false;
    setLoading(true);
    setError(false);

    fetch(`${API_BASE}/api/posts/${id}?siteId=${SITE_ID}`)
      .then((res) => {
        if (!res.ok) throw new Error("Not found");
        return res.json();
      })
      .then((data: Post) => {
        if (!cancelled) {
          setPost(data);
          setLoading(false);
        }
      })
      .catch(() => {
        if (!cancelled) {
          setError(true);
          setLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [id]);

  // Loading state
  if (loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center bg-tiza">
        <p className="font-textos text-lg text-azul/50">{t("noticias.loading")}</p>
      </div>
    );
  }

  // Error state
  if (error || !post) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 bg-tiza px-6 text-center">
        <h1 className="font-titulares text-3xl font-extrabold tracking-[0.2em] text-azul uppercase sm:text-4xl">
          {t("noticias.notFound")}
        </h1>
        <p className="font-textos text-lg text-azul/60">
          {t("noticias.notFoundDesc")}
        </p>
        <Link
          to="/"
          className="mt-4 inline-block rounded-full bg-naranja px-8 py-3 font-textos font-semibold text-tiza transition-all duration-300 hover:scale-105 hover:shadow-lg motion-reduce:transform-none"
        >
          {t("noticias.back")}
        </Link>
      </div>
    );
  }

  const imageUrl = post.imageUrl
    ? post.imageUrl.startsWith("/")
      ? `${API_BASE}${post.imageUrl}`
      : post.imageUrl
    : null;

  const dateStr = new Date(post.createdAt).toLocaleDateString(
    i18n.language === "pt" ? "pt-BR" : i18n.language === "en" ? "en-US" : "es-PY",
    { year: "numeric", month: "long", day: "numeric" },
  );

  return (
    <div className="min-h-screen bg-tiza">
      <div className="mx-auto max-w-[800px] px-6 py-16 lg:py-24">
        {/* Back link */}
        <Link
          to="/"
          className="mb-8 inline-block font-textos text-sm font-semibold text-naranja transition-colors hover:text-naranja/80"
        >
          {t("noticias.back")}
        </Link>

        {/* Image */}
        {imageUrl && (
          <div className="mb-10 overflow-hidden rounded-lg shadow-xl">
            <img
              src={imageUrl}
              alt={post.title}
              className="w-full object-cover"
            />
          </div>
        )}

        {/* Title */}
        <h1 className="font-titulares text-3xl font-extrabold tracking-[0.15em] text-azul uppercase sm:text-4xl lg:text-5xl">
          {post.title}
        </h1>

        {/* Date */}
        <p className="mt-4 font-textos text-sm text-azul/50">{dateStr}</p>

        {/* Body */}
        <div className="mt-10 font-textos text-lg leading-relaxed text-azul/80">
          {post.body}
        </div>

        {/* Bottom back link */}
        <div className="mt-16 border-t border-azul/10 pt-8">
          <Link
            to="/"
            className="inline-block rounded-full bg-naranja px-8 py-3 font-textos font-semibold text-tiza transition-all duration-300 hover:scale-105 hover:shadow-lg motion-reduce:transform-none"
          >
            {t("noticias.back")}
          </Link>
        </div>
      </div>
    </div>
  );
}
