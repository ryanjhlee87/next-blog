import Hero from '@/components/Hero';
import React from 'react';

export default function AboutPage() {
  const TITLE_CLASS = 'text-2xl font-bold text-gray-800 my-2';

  return (
    <>
      <Hero />
      <section className="bg-gray-100 shadow-lg p-8 m-8 text-center">
        <h2 className={TITLE_CLASS}>Who am I?</h2>
        <p>
          I am a full stack developer who loves to code
          <br />
          Developing web apps that are both good in performance and design
        </p>

        <h2 className={TITLE_CLASS}>Career</h2>
        <p>Coogle (-Now)</p>
        <p>Microhard (-2020)</p>
        <p>Samsoong Elec (-2018)</p>

        <h2 className={TITLE_CLASS}>Skills</h2>
        <p>React, Typescript, Next.js, Node</p>
        <p>Git, Clean Code</p>
        <p>VS Code, MongoDB, GraphQL</p>
      </section>
    </>
  );
}
