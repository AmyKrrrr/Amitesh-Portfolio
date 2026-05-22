import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { posts } from "./blogData";
import "./Blog.css";
import { color } from "framer-motion";

const Blog = () => {
  const [blogContents, setBlogContents] = useState({});

  useEffect(() => {
    const loadBlogs = async () => {
      const loadedBlogs = {};

      for (const post of posts) {
        const response = await fetch(`/blogs/${post.post}.md`);
        const text = await response.text();

        loadedBlogs[post.id] = text;
      }

      setBlogContents(loadedBlogs);
    };

    loadBlogs();
  }, []);

  return (
    <div className="blog-page">
      <h1>Something Which I Write For People</h1>
      {posts.map((post) => (
        <article key={post.id} className="blog-post">
          <br className="gh"/>
          <h2>{post.title}</h2>
          <p className="date">({post.date})</p>
          <ReactMarkdown>{blogContents[post.id] || "Loading..."}</ReactMarkdown>
        </article>
      ))}
    </div>
  );
};

export default Blog;
