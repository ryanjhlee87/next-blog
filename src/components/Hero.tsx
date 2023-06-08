'use client';

import Image from 'next/image';
import portrait from '../../public/images/portrait.jpg';
import React from 'react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="text-center">
      <div className="flex flex-col items-center rounded-full">
        <Image
          className="rounded-full my-4"
          src={portrait}
          width={250}
          height={250}
          alt="Portrait photo"
        />
        <h2 className="text-3xl text-bold">{"Hi I'm Ryan"}</h2>
        <h3 className="text-xl">Full-stack Engineer</h3>
        <p>who codes dream, a dream coder</p>

        {/* Contact Btn */}
        <Link href="/contact">
          <button className="btn btn-secondary rounded-lg py-2 px-3 bg-yellow-500 my-2">
            Contact Me
          </button>
        </Link>
      </div>
    </section>
  );
}
