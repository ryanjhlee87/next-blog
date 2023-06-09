'use client';

import { Post } from '@/service/posts';
import React, { useState } from 'react';
import PostsGrid from './PostsGrid';
import Categories from './Categories';

type Props = {
  posts: Post[];
  categories: string[];
};

export default function FilterablePosts({ posts, categories }: Props) {
  const ALL_POSTS = 'All Posts';
  const [selected, setSelected] = useState(ALL_POSTS);
  const filtered =
    selected === ALL_POSTS
      ? posts
      : posts.filter(post => post.category === selected);

  return (
    <section className="flex mt-12">
      <PostsGrid posts={filtered} />
      <Categories
        categories={[ALL_POSTS, ...categories]}
        selected={selected}
        onClick={selected => setSelected(selected)}
      />
    </section>
  );
}
