import React, { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import { useParams } from "react-router-dom";
import "./BlogPage.css";

export default function BlogDetail() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      const { data, error } = await supabase
        .from("blogs")
        .select("*")
        .eq("slug", slug)
        .single();
      if (error) console.error(error);
      else setBlog(data);
    };
    fetchBlog();
  }, [slug]);

  if (!blog) return <p>Loading...</p>;

  // Split content by newlines to render each paragraph separately
  const paragraphs = blog.content.split(/\r?\n/);

  return (
    <div className="blog-page">
      <h1>{blog.title}</h1>
      <p className="category">{blog.category}</p>
      <p className="author">By {blog.author}</p>
      {blog.cover_image && (
        <img src={blog.cover_image} alt={blog.title} className="blog-cover" />
      )}
      <div className="blog-content">
        {paragraphs.map((p, index) => (
          <p key={index}>{p}</p>
        ))}
      </div>
    </div>
  );
}
