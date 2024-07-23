import type {Metadata} from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'About Page',
    description: 'Page Description',
    keywords: 'SEO, Description, About, Page, Keywords',
};

export default function Home() {
  return (
    <main className="flex flex-col items-center p-24">
      <span className="text-5xl">
        Hello World!
      </span>
        <Link href={'/about'}>About</Link>
    </main>
  );
}
