import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

serve(async (req) => {
  const response = await fetch("https://uzyfrplsptljlhqjayff.supabase.co/rest/v1/prsys_weather_feedback", {
    method: "GET",
    headers: {
      "apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV6eWZycGxzcHRsamxocWpheWZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA5Mzc5ODIsImV4cCI6MjA3NjUxMzk4Mn0.ysm-pWfEo-G9f_LhnbJf4JgIuGPm7jotc0G44L3sMCc",
      "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV6eWZycGxzcHRsamxocWpheWZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA5Mzc5ODIsImV4cCI6MjA3NjUxMzk4Mn0.ysm-pWfEo-G9f_LhnbJf4JgIuGPm7jotc0G44L3sMCc",
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
