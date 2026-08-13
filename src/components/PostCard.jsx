import React from "react";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`} className="group block h-full">
      <article className="h-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl">
        {/* Image */}
        <div className="relative overflow-hidden">
          <img
            src={appwriteService.getFilePreview(featuredImage)}
            alt={title}
            className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

          <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-indigo-600 shadow-sm backdrop-blur">
            Article
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <h2 className="line-clamp-2 text-lg font-bold leading-7 text-slate-900 transition group-hover:text-indigo-600">
            {title}
          </h2>

          <div className="mt-4 flex items-center justify-between">
            <span className="text-sm font-medium text-slate-400">
              Read article
            </span>

            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-50 text-indigo-600 transition group-hover:bg-indigo-600 group-hover:text-white">
              →
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}

export default PostCard;