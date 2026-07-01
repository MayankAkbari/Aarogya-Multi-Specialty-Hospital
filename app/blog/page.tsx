import React from 'react';
import { BLOG_POSTS } from '@/lib/dataStore';
import Link from 'next/link';
import { ArrowRight, BookOpen, Clock, User } from 'lucide-react';

export const metadata = {
  title: 'Health & Medical Knowledge Hub | Aarogya Hospital Blog',
  description: 'Evidence-based articles on heart disease prevention, robotic surgery advances, and diabetes lifestyle management authored by our clinical directors.'
};

export default function BlogIndexPage() {
  return (
    <div className="py-16 px-6 max-w-7xl mx-auto space-y-12">
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-black text-emerald-600 uppercase tracking-widest">Medical Insights</span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-navy-900 tracking-tight">
          Aarogya Clinical Research Blog
        </h1>
        <p className="text-slate-600 text-sm sm:text-base">
          Authored directly by our senior clinical directors to help you and your family make informed medical decisions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {BLOG_POSTS.map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.slug}`}
            className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition flex flex-col justify-between group"
          >
            <div>
              <div className="h-56 overflow-hidden bg-slate-100 relative">
                <img src={post.coverUrl} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-navy-900/90 text-emerald-400 font-bold text-[10px] uppercase tracking-wider">
                  {post.category}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs text-slate-400 mb-2 font-medium">
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {post.readTime}</span>
                  <span>•</span>
                  <span>{post.date}</span>
                </div>
                <h2 className="font-extrabold text-xl text-navy-900 group-hover:text-emerald-700 transition leading-snug">
                  {post.title}
                </h2>
                <p className="text-slate-600 text-xs mt-2 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </div>
            </div>
            <div className="p-6 pt-0 flex items-center justify-between text-xs font-bold text-navy-800 group-hover:text-emerald-600 border-t border-slate-100 mt-4 pt-4">
              <span className="flex items-center gap-1.5"><User className="w-3.5 h-3.5 text-slate-400" /> {post.author}</span>
              <span className="flex items-center gap-1">Read Article <ArrowRight className="w-3.5 h-3.5" /></span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
