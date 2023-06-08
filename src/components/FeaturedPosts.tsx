import React from 'react';
import PostsGrid from './PostsGrid';
import { getAllPosts } from '@/service/posts';

export default async function FeaturedPosts() {
  const posts = await getAllPosts();

  return (
    <section className="grid gird-cols-4">
      <h2 className="text-2xl text-bold">Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
}
