import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="mt-[200px] flex justify-center">
      <section className="bg-white w-90 min-h-[504px] rounded-lg border-2 border-neutral-200 shadow-md">
        <div className="rounded-t-lg">
          <Image
            className="rounded-t-lg object-contain"
            src="/blog-card.jpg"
            alt="Blog Post"
            width={340}
            height={228}
          />
        </div>
        {/* Content */}
        <div className="px-4 py-6">
          <span className="text-sm text-green-700 bg-green-50 px-2 py-0.5 mb-3 border-2 border-green-200 rounded-full inline-block mt-0">
            Interior
          </span>
          <h2 className="text-lg font-semibold text-neutral-900 mb-3">
            Top 5 Living Room Inspirations
          </h2>
          <p className="text-base text-neutral-600">
            Curated vibrants colors for your living, make it pop & calm in the
            same time.
          </p>
          <Link href="#">Read More</Link>
        </div>
      </section>
    </main>
  );
}
