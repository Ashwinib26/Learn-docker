import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fff1f2] via-[#ffe4e6] to-[#fef6f0] text-neutral-900 font-sans">
      <main className="flex flex-col items-center justify-center gap-10 px-6 py-20 sm:py-28 text-center sm:text-left max-w-4xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight text-rose-600">
          Master Dockerization with <span className="text-rose-900">DockIt</span>
        </h1>

        {/* Description */}
        <p className="text-lg sm:text-xl max-w-2xl text-neutral-700">
          Your one-stop destination for intuitive guides, visual explanations, and hands-on learning about containerization using Docker
        </p>

        {/* Features List */}
        <ul className="text-left list-disc list-inside space-y-2 font-medium text-neutral-800">
          <li>📘 Learn Docker Commands and concepts with clear, interactive theory</li>
          <li>🚀 Explore containerization demos and implementation tricks</li>
        </ul>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Link href="/Guide">
            <button className="rounded-full px-6 py-3 text-white bg-rose-600 hover:bg-rose-700 transition shadow-lg font-semibold">
              📖 Explore Docker Concepts
            </button>
          </Link>
        </div>
      </main>

      {/* Footer Links */}
<footer className="flex flex-wrap justify-center items-center gap-6 py-6 text-sm text-neutral-600 border-t border-rose-100 px-6 bg-[#fff1f2]">
  <a
    href="https://docs.docker.com/get-started/"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 hover:underline"
  >
    <Image src="/file.svg" alt="Docker Docs icon" width={16} height={16} />
    Docker Official Guide
  </a>
  <a
    href="https://dockerlabs.github.io/"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 hover:underline"
  >
    <Image src="/window.svg" alt="Docker Labs icon" width={16} height={16} />
    Docker Labs
  </a>
  <a
    href="https://hub.docker.com/search?q=&type=guide"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 hover:underline"
  >
    <Image src="/globe.svg" alt="Docker Hub icon" width={16} height={16} />
    Docker Hub Guides
  </a>
  </footer>
  </div>
  );
}
