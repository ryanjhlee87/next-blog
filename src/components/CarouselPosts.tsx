import { getNonFeaturedPosts } from '@/service/posts';
import React from 'react';
import PostCard from './PostCard';
import MultiCarousel from './MultiCarousel';

export default async function CarouselPosts() {
  const posts = await getNonFeaturedPosts();

  return (
    <section>
      <h2 className="text-2xl text-bold my-4">You may also like</h2>
      <MultiCarousel>
        {posts.map(post => (
          <PostCard post={post} key={post.path} />
        ))}
      </MultiCarousel>
    </section>
  );
}
