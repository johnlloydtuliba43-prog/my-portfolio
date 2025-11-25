import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-8">
          <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-8 border-white/30 shadow-2xl bg-gray-200">
            {/* Replace with your real photo later */}
            <Image
              src="/avatar.jpg"
              alt="John Lloyd Tuliba"
              width={192}
              height={192}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-4">John Lloyd Tuliba</h1>
        <p className="text-2xl md:text-4xl mb-6 opacity-90">Full-Stack Web Developer</p>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 opacity-80">
          I build fast, beautiful, and user-friendly web applications with modern technologies.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link
            href="#projects"
            className="bg-white text-blue-600 px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition"
          >
            View My Work
          </Link>
          <Link
            href="#contact"
            className="border-2 border-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </section>
  );
}