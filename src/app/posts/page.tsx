import { getAllPosts } from '@/service/posts';
import PostCard from '@/components/PostCard';
import React from 'react';

export default async function PostsPage() {
  const posts = await getAllPosts();

  return (
    <section className="mt-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {posts.map(post => (
          <PostCard post={post} />
        ))}
      </div>
    </section>
  );
}
