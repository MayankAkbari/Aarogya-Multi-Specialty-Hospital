import React from 'react';
import { BLOG_POSTS } from '@/lib/dataStore';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Clock, User, ArrowLeft, Share2, Calendar } from 'lucide-react';

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = BLOG_POSTS.find(p => p.slug === resolvedParams.slug);
  if (!post) return notFound();

  return (
    <div className="py-16 px-6 max-w-4xl mx-auto space-y-8">
      <Link href="/blog" className="text-xs font-bold text-emerald-600 hover:underline flex items-center gap-1">
        <ArrowLeft className="w-4 h-4" /> Back to Medical Knowledge Hub
      </Link>

      <div className="space-y-4">
        <span className="px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-extrabold uppercase tracking-wider">
          {post.category}
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-navy-900 leading-tight">
          {post.title}
        </h1>
        <div className="flex items-center gap-4 text-xs font-bold text-slate-500 pt-2 border-y border-slate-200 py-3">
          <span className="flex items-center gap-1.5 text-navy-800"><User className="w-4 h-4 text-emerald-600" /> By {post.author}</span>
          <span>•</span>
          <span>{post.date}</span>
          <span>•</span>
          <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {post.readTime}</span>
        </div>
      </div>

      <div className="rounded-3xl overflow-hidden aspect-video bg-slate-100 shadow-lg">
        <img src={post.coverUrl} alt={post.title} className="w-full h-full object-cover" />
      </div>

      <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed space-y-6">
        <p className="font-semibold text-lg text-navy-900">{post.excerpt}</p>
        <p>{post.content}</p>
        <p>
          At Aarogya Multi-Specialty Hospital, our philosophy centers on proactive detection and minimally invasive surgical management. Consult our senior faculty early to prevent acute complications.
        </p>
      </div>

      <div className="p-8 rounded-3xl bg-navy-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
        <div>
          <h3 className="font-extrabold text-xl">Consult {post.author}</h3>
          <p className="text-xs text-slate-300 mt-1">Have symptoms or need personalized clinical advice? Schedule an OPD slot.</p>
        </div>
        <Link href="/appointments" className="px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 font-extrabold text-xs shadow shrink-0 flex items-center gap-2">
          <Calendar className="w-4 h-4" /> Schedule Consultation
        </Link>
      </div>
    </div>
  );
}
