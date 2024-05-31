import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="bg-white w-90 min-h-[504px] rounded-lg border-2 border-neutral-200 shadow">
        <div className="bg-blog-card h-blog-card bg-cover rounded-t-lg">
          {/* Blog Image */}
        </div>
        {/* Content */}
        <div className="px-4 py-6">
          <span>Interior</span>
          <h2>Top 5 Living Room Inspirations</h2>
          <p>
            Curated vibrants colors for your living, make it pop & calm in the
            same time.
          </p>
          <Link href="#">Read More</Link>
        </div>
      </section>
    </main>
  );
}
