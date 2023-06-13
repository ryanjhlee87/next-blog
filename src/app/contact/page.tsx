import ContactForm from '@/components/ContactForm';
import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';

export default function ContactPage() {
  const LINKS = [
    { icon: <AiFillGithub></AiFillGithub>, url: 'github.com' },
    { icon: <AiFillLinkedin></AiFillLinkedin>, url: 'linkedin.com' },
    { icon: <AiFillYoutube></AiFillYoutube>, url: 'youtube.com' },
  ];

  return (
    <section className="flex flex-col items-center">
      <h2 className="text-3xl font-bold my-2">Contact Me</h2>
      <p>info@ryanlee.com</p>
      <div className="flex flex-col items-center">
        <ul className="flex gap-4 my-2">
          {LINKS.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_black"
              rel="noreferrer"
              className="text-5xl hover:text-yellow-400"
            >
              {link.icon}
            </a>
          ))}
        </ul>

        <h2 className="text-3xl font-bold m-8">Or Send me an email</h2>
        <ContactForm />
      </div>
    </section>
  );
}
