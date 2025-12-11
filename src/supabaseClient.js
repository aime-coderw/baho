import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://hmozhdntdhftiatjxhfc.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhtb3poZG50ZGhmdGlhdGp4aGZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU0NDQ4MzUsImV4cCI6MjA4MTAyMDgzNX0.xifF4CfFvwIfAXsK-Ml2y4XBXznp5XMIh0ebrkSmcCo";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

