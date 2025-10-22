import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

serve(async (req) => {
  const response = await fetch("https://xxxx.supabase.co/rest/v1/prsys_weather_feedback", {
    method: "GET",
    headers: {
      "apikey": "your-anon-key",
      "Authorization": "Bearer your-anon-key",
      "Content-Type": "application/json"
    }
  });

  const data = await response.json();

  return new Response(JSON.stringify(data), {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json"
    }
  });
});
