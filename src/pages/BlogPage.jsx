import React, { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";
import { Link } from "react-router-dom";
import "./BlogPage.css";

export default function BlogPage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBlogs = async () => {
    const { data, error } = await supabase
      .from("blogs")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) console.error(error);
    else setBlogs(data || []);

    setLoading(false);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="blog-page">
      <h1>Baho Medical Blog</h1>
      <p className="intro">Insights, News and health tips.</p>

      {loading ? (
        <p>Loading blogs...</p>
      ) : (
        <div className="blogs-container">
          {blogs.length === 0 ? (
            <p>No blogs published yet.</p>
          ) : (
            blogs.map((blog) => (
              <div key={blog.id} className="blog-card">
                {blog.cover_image && (
                  <img src={blog.cover_image} alt={blog.title} className="blog-cover" />
                )}
                <div className="blog-content">
                  <h2>{blog.title}</h2>
                  <p className="category">{blog.category}</p>
                  <p className="author">By {blog.author}</p>
                  <p className="excerpt">
                    {blog.content.length > 150
                      ? blog.content.substring(0, 150) + "..."
                      : blog.content}
                  </p>
                  <Link to={`/blog/${blog.slug}`} className="read-more">
                    Read More
                  </Link>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}
