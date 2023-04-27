import { serve } from "https://deno.land/std@0.177.0/http/server.ts";

const kv = await Deno.openKv();

serve(async (req: Request) => {
  const params = new URL(req.url).searchParams;
  const k = params.get("k") ?? null;
  const v = params.get("v") ?? null;
  await kv.set(["users", k], { name: v });
  const res = await kv.get(["users", k]);
  return new Response("Hello World " + JSON.stringify(res.value));
});
