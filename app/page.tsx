import Image from 'next/image';
import Link from 'next/link';
import { RiArrowRightLine } from 'react-icons/ri';

export default function Home() {
  return (
    <main className="mt-[120px] flex justify-center" role="main">
      <section className="bg-white w-90 min-h-[504px] rounded-lg border-2 border-neutral-200 shadow-md mx-4">
        <Image
          className="rounded-t-lg h-[290px] w-full object-cover"
          src="/blog-card.jpg"
          alt="Blog Post"
          width={340}
          height={228}
        />
        {/* Content */}
        <div className="px-4 py-6">
          <span className="text-sm text-green-700 bg-green-50 px-2 py-0.5 mb-3 border-2 border-green-200 rounded-full inline-block mt-0">
            Interior
          </span>
          <h2 className="text-lg font-semibold text-neutral-900 mb-3 line-clamp-2">
            Top 5 Living Room Inspirations
          </h2>
          <p className="text-base text-neutral-600 mb-6 font-medium line-clamp-3">
            Curated vibrants colors for your living, make it pop & calm in the
            same time.
          </p>
          <Link
            className="inline-flex items-center text-indigo-700 font-medium rounded cursor-pointer hover:text-[#3730A3] transition-colors duration-300 ease-in-out disabled:text-[#A3A3A3] disabled:cursor-not-allowed focus:outline-none focus:ring-4 focus:ring-indigo-50 focus:text-[#3730A3] focus:pl-1"
            href="#"
            aria-label="Read more about the Top 5 Living Room Inspirations"
          >
            Read more
            <RiArrowRightLine className="ml-2 inline-block h-[20px] w-[20px]" />
          </Link>
        </div>
      </section>
    </main>
  );
}
