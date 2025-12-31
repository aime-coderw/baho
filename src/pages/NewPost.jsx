import React, { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";
import { useNavigate } from "react-router-dom";
import "./NewPost.css";

export default function NewPost() {
  const navigate = useNavigate();
  const [session, setSession] = useState(null);
  const [loadingSession, setLoadingSession] = useState(true);

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [author, setAuthor] = useState("");
  const [coverImage, setCoverImage] = useState(null);
  const [loading, setLoading] = useState(false);

  // --- Check session on page load ---
  useEffect(() => {
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) navigate("/admin-login");
      else setSession(session);
      setLoadingSession(false);
    };

    checkSession();

    const { data: listener } = supabase.auth.onAuthStateChange((event, session) => {
      if (!session) navigate("/admin-login");
      else setSession(session);
    });

    return () => listener.subscription.unsubscribe();
  }, [navigate]);

  if (loadingSession) return <p>Checking session...</p>;
  if (!session) return null; // redirecting

  // --- Upload cover image ---
  const uploadImage = async (file) => {
    if (!file) return null;
    const fileExt = file.name.split(".").pop();
    const fileName = `${Math.random().toString(36).substring(2, 10)}.${fileExt}`;
    const { data, error } = await supabase.storage
      .from("blog-images")
      .upload(fileName, file);
    if (error) {
      alert("Error uploading image: " + error.message);
      return null;
    }
    const publicURL = supabase.storage.from("blog-images").getPublicUrl(fileName).data.publicUrl;
    return publicURL;
  };

  // --- Handle post submission ---
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !slug || !content || !category || !author) {
      alert("Please fill all required fields!");
      return;
    }

    setLoading(true);
    let imageUrl = null;
    if (coverImage) imageUrl = await uploadImage(coverImage);

    const { error } = await supabase.from("blogs").insert([
      {
        title,
        slug,
        content,
        category,
        author,
        cover_image: imageUrl || null,
      },
    ]);

    setLoading(false);

    if (error) alert("Error creating blog: " + error.message);
    else {
      alert("✔️ Blog post created!");
      setTitle(""); setSlug(""); setContent(""); setCategory(""); setAuthor(""); setCoverImage(null);
      navigate("/blog");
    }
  };

  return (
    <div className="new-post">
      <h1>➕ Create New Blog Post</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Blog Title" value={title} onChange={e => setTitle(e.target.value)} required />
        <input type="text" placeholder="Slug (for URL, e.g., my-first-blog)" value={slug} onChange={e => setSlug(e.target.value)} required />
        <textarea placeholder="Content" value={content} onChange={e => setContent(e.target.value)} rows="8" required />
        <input type="text" placeholder="Author Name" value={author} onChange={e => setAuthor(e.target.value)} required />
        <select value={category} onChange={e => setCategory(e.target.value)} required>
          <option value="">Select Category</option>
          <option value="TeleCare">TeleCare</option>
          <option value="ChronicCare">ChronicCare</option>
          <option value="HomeCare">HomeCare</option>
          <option value="HealthTips">Health Tips</option>
          <option value="ePharmacy">ePharmacy</option>
          <option value="LifeTrack">LifeTrack</option>
          <option value="PreventivePrograms">Preventive Programs</option>
          <option value="MentalHealth">Mental Health</option>
          <option value="GlobalCare">GlobalCare</option>

        </select>
        <input type="file" accept="image/*" onChange={e => setCoverImage(e.target.files[0])} />
        <button type="submit" disabled={loading}>{loading ? "Posting..." : "Post Blog"}</button>
      </form>
    </div>
  );
}
