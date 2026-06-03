import { createFileRoute } from "@tanstack/react-router";
import home from "../site/index.html?raw";

export const Route = createFileRoute("/")({
  server: {
    handlers: {
      GET: async () =>
        new Response(home, {
          headers: { "Content-Type": "text/html; charset=utf-8" },
        }),
    },
  },
});
