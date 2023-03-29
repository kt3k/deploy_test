import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import "https://deno-state-lib.deno.dev/polyfill.ts";

serve(async (req: Request) => {
  const params = new URLSearchParams(new URL(req.url).search);
  const k = params.get("k");
  const v = params.get("v");
  const db = await Deno.openDatabase();
  await db.set(["users", k], { name: v });
  const res = await db.get(["users", k]);
  return new Response("Hello World " + JSON.stringify(res.value));
});
