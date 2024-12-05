import { serve } from "@hono/node-server";
import { serveStatic } from "@hono/node-server/serve-static";
import { Hono } from "hono";

const app = new Hono();

app.use("/static/*", serveStatic({ root: "./" }));

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

const port = 3000;
console.log(`Server is running on http://localhost:${port}`);

// GET Route
app.get("/get", (c) => {
  return c.text("get-response-from-compute", 200, {
    "x-get-header": "get-header-value",
  });
});

// POST Route
app.post("/post", async (c) => {
  const body = await c.req.text();
  return c.text(body, 200, {
    "x-post-header": "post-header-value",
  });
});

// PUT Route
app.put("/put", async (c) => {
  const body = await c.req.text();
  return c.text(body, 200, {
    "x-put-header": "put-header-value",
  });
});

// PATCH Route
app.patch("/patch", async (c) => {
  const body = await c.req.text();
  return c.text(body, 200, {
    "x-patch-header": "patch-header-value",
  });
});

// DELETE Route
app.delete("/delete", (c) => {
  return c.text("", 200, {
    "x-delete-header": "delete-header-value",
  });
});

serve({
  fetch: app.fetch,
  port,
});
