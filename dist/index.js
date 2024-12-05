"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_server_1 = require("@hono/node-server");
const serve_static_1 = require("@hono/node-server/serve-static");
const hono_1 = require("hono");
const app = new hono_1.Hono();
app.use("/static/*", (0, serve_static_1.serveStatic)({ root: "./" }));
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
(0, node_server_1.serve)({
    fetch: app.fetch,
    port,
});
