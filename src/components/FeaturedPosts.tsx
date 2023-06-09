import React from 'react';
import PostsGrid from './PostsGrid';
import { getFeaturedPosts } from '@/service/posts';

export default async function FeaturedPosts() {
  const posts = await getFeaturedPosts();

  return (
    <section className="grid gird-cols-4 my-4">
      <h2 className="text-2xl text-bold my-4">Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
}
