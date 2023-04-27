import { serve } from "https://deno.land/std@0.177.0/http/server.ts";

const kv = Deno.openKv();

serve(async (req: Request) => {
  const params = new URLSearchParams(new URL(req.url).search);
  const k = params.get("k");
  const v = params.get("v");
  await kv.set(["users", k], { name: v });
  const res = await kv.get(["users", k]);
  return new Response("Hello World " + JSON.stringify(res.value));
});
