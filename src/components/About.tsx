import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 space-y-6 text-lg leading-relaxed">
            <p>
              Hi! I’m <strong>John Lloyd Tuliba</strong>, a passionate Full-Stack Web Developer from the Philippines.
            </p>
            <p>
              I love turning ideas into reality using clean code and modern technologies. My journey started in 2023 when I built my first website, and since then I’ve been hooked on creating fast, beautiful, and user-friendly web experiences.
            </p>
            <p>
              Currently mastering <strong>Next.js, TypeScript, Tailwind CSS, Node.js, and PostgreSQL</strong>. I enjoy solving real-world problems and continuously learning new tools and best practices.
            </p>
            <p>
              When I’m not coding, you’ll find me playing basketball, watching tech videos, or exploring new music.
            </p>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/avatar.jpg"
                  alt="John Lloyd Tuliba"
                  width={400}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}