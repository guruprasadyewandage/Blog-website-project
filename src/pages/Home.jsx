import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";
import { Link } from "react-router-dom";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-white">
        <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-indigo-100 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-violet-100 blur-3xl" />

        <Container>
          <div className="relative py-20 md:py-28">
            <div className="max-w-3xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-600">
                <span className="h-2 w-2 rounded-full bg-indigo-600" />
                Welcome to Blog-Website
              </div>

              <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-5xl md:text-6xl">
                Ideas worth
                <span className="block bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                  reading & sharing.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-500">
                Discover thoughtful articles, share your ideas, and connect
                with a community of writers through Inkly.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/all-posts"
                  className="rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-200 transition hover:-translate-y-0.5 hover:bg-indigo-700"
                >
                  Explore Articles →
                </Link>

                <Link
                  to="/signup"
                  className="rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600"
                >
                  Start Writing
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Posts */}
      <section className="py-16">
        <Container>
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <p className="mb-2 text-sm font-bold uppercase tracking-wider text-indigo-600">
                Latest stories
              </p>

              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
                Fresh from the community
              </h2>

              <p className="mt-2 text-slate-500">
                Explore the latest thoughts and ideas from Inkly writers.
              </p>
            </div>

            {posts.length > 0 && (
              <Link
                to="/all-posts"
                className="hidden text-sm font-semibold text-indigo-600 transition hover:text-indigo-700 sm:block"
              >
                View all →
              </Link>
            )}
          </div>

          {posts.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-2xl">
                ✍️
              </div>

              <h3 className="mt-5 text-xl font-bold text-slate-900">
                No posts yet
              </h3>

              <p className="mx-auto mt-2 max-w-md text-slate-500">
                Sign in and create the first article for the Inkly community.
              </p>

              <Link
                to="/login"
                className="mt-6 inline-flex rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
              >
                Sign in to continue
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <PostCard key={post.$id} {...post} />
              ))}
            </div>
          )}
        </Container>
      </section>
    </div>
  );
}

export default Home;