import { createFileRoute } from "@tanstack/react-router";

// Eagerly bundle all sub-page HTMLs as raw strings.
const pages = import.meta.glob("../site/**/index.html", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

const notFound = (import.meta.glob("../site/404.html", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>)["../site/404.html"];

// Map URL slug → HTML body. Key is the slug between site/ and /index.html.
const bySlug: Record<string, string> = {};
for (const [path, html] of Object.entries(pages)) {
  const m = path.match(/^\.\.\/site\/(.+)\/index\.html$/);
  if (m) bySlug[m[1]] = html;
}

export const Route = createFileRoute("/$")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const url = new URL(request.url);
        // Strip leading + trailing slash
        const slug = decodeURIComponent(url.pathname.replace(/^\/+|\/+$/g, ""));
        const html = bySlug[slug];
        if (html) {
          return new Response(html, {
            headers: { "Content-Type": "text/html; charset=utf-8" },
          });
        }
        return new Response(notFound ?? "Not Found", {
          status: 404,
          headers: { "Content-Type": "text/html; charset=utf-8" },
        });
      },
    },
  },
});
