import { serve } from "https://deno.land/std@0.184.0/http/server.ts";

const kv = await Deno.openKv();

const zero = new Uint8Array();

serve(async (req) => {
  const params = new URL(req.url).searchParams;
  const k = params.get("k") ?? zero;
  const v = params.get("v") ?? zero;
  await kv.set(["users", k], { name: v });
  const res = await kv.get(["users", k]);
  return new Response("Hello World " + JSON.stringify(res));
});
