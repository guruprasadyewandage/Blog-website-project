import React, { useState, useEffect } from "react";
import { Container, PostCard } from "../components";
import appwriteService from "../appwrite/config";

function AllPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 py-14">
      <Container>
        {/* Heading */}
        <div className="mb-10">
          <p className="mb-2 text-sm font-bold uppercase tracking-wider text-indigo-600">
            Discover
          </p>

          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">
            All Articles
          </h1>

          <p className="mt-3 max-w-2xl text-slate-500">
            Explore all the stories, ideas, and experiences shared by the
            community.
          </p>
        </div>

        {/* Posts */}
        {posts.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
            <h2 className="text-xl font-bold text-slate-900">
              No articles found
            </h2>

            <p className="mt-2 text-slate-500">
              There are currently no published articles.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <PostCard key={post.$id} {...post} />
            ))}
          </div>
        )}
      </Container>
    </div>
  );
}

export default AllPosts;