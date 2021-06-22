addEventListener("fetch", (e) => {
  e.respondWith(new Response("hello"));
});
