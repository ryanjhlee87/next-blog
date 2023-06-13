'use client';

import { ChangeEvent, FormEvent, useState } from 'react';
import Banner, { BannerData } from './Banner';

type Form = {
  from: string;
  subject: string;
  message: string;
};

export default function ContactForm() {
  const [form, setForm] = useState<Form>({
    from: '',
    subject: '',
    message: '',
  });

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(form);
    setBanner({ message: 'Success', state: 'success' });

    setTimeout(() => {
      setBanner(null);
    }, 3000);
  };

  const [banner, setBanner] = useState<BannerData | null>(null);

  return (
    <section className="max-w-md w-full">
      {banner && <Banner banner={banner} />}
      <form
        onSubmit={onSubmit}
        className="w-full max-w-md flex flex-col gap-2 my-4 p-4 bg-slate-700 rounded-xl text-white"
      >
        <label htmlFor="from" className="font-semibold">
          Your Email
        </label>
        <input
          className="text-black"
          type="email"
          name="from"
          id="from"
          required
          autoFocus
          value={form.from}
          onChange={onChange}
        />

        <label htmlFor="subject" className="font-semibold">
          Subject
        </label>
        <input
          className="text-black"
          type="text"
          name="subject"
          id="subject"
          required
          autoFocus
          value={form.subject}
          onChange={onChange}
        />

        <label htmlFor="message" className="font-semibold">
          Message
        </label>
        <textarea
          className="text-black"
          rows={10}
          name="message"
          id="message"
          required
          autoFocus
          value={form.message}
          onChange={onChange}
        />

        <button className="bg-yellow-400 p-2 text-black font-bold hover:bg-yellow-300">
          Submit
        </button>
      </form>
    </section>
  );
}
