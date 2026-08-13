import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";

function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block">
              <Logo width="170px" />
            </Link>

            <p className="mt-5 max-w-md text-sm leading-7 text-slate-400">
              A modern space for writers and readers to share ideas,
              experiences, stories, and knowledge.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <span className="rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-slate-400">
                Write
              </span>

              <span className="rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-slate-400">
                Share
              </span>

              <span className="rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-slate-400">
                Inspire
              </span>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-white">
              Explore
            </h3>

            <div className="flex flex-col gap-3">
              <Link
                to="/"
                className="text-sm text-slate-400 transition hover:text-white"
              >
                Home
              </Link>

              <Link
                to="/all-posts"
                className="text-sm text-slate-400 transition hover:text-white"
              >
                All Articles
              </Link>

              <Link
                to="/signup"
                className="text-sm text-slate-400 transition hover:text-white"
              >
                Create Account
              </Link>
            </div>
          </div>

          {/* Account */}
          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-white">
              Account
            </h3>

            <div className="flex flex-col gap-3">
              <Link
                to="/login"
                className="text-sm text-slate-400 transition hover:text-white"
              >
                Sign In
              </Link>

              <Link
                to="/signup"
                className="text-sm text-slate-400 transition hover:text-white"
              >
                Sign Up
              </Link>

              <Link
                to="/add-post"
                className="text-sm text-slate-400 transition hover:text-white"
              >
                Write an Article
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-slate-800 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Blog-Website. All rights reserved.</p>

          <p>
            Built with <span className="text-indigo-400">React</span> &{" "}
            <span className="text-indigo-400">Appwrite</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;