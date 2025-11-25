import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "E-Commerce Platform",
    desc: "Full-stack online store with Stripe payments, user auth, and admin dashboard.",
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe"],
    live: "https://your-live-link.com",
    github: "https://github.com/johnlloydtuliba43-prog/ecommerce",
    image: "/projects/ecommerce.jpg",
  },
  {
    title: "Task Management App",
    desc: "Real-time collaborative task board with drag-and-drop and team features.",
    tech: ["React", "Node.js", "Socket.io", "MongoDB"],
    live: "https://your-live-link.com",
    github: "https://github.com/johnlloydtuliba43-prog/taskapp",
    image: "/projects/tasks.jpg",
  },
  {
    title: "Personal Finance Tracker",
    desc: "Beautiful dashboard for tracking income, expenses, and financial goals.",
    tech: ["Next.js", "Chart.js", "Supabase"],
    live: "https://your-live-link.com",
    github: "https://github.com/johnlloydtuliba43-prog/finance-tracker",
    image: "/projects/finance.jpg",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((p) => (
            <div key={p.title} className="bg-gray-50 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition">
              <div className="h-64 bg-gray-200 border-2 border-dashed">
                <Image src={p.image} alt={p.title} width={600} height={400} className="w-full h-full object-cover" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3">{p.title}</h3>
                <p className="text-gray-600 mb-6">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {p.tech.map((t) => (
                    <span key={t} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-6">
                  <Link href={p.live} target="_blank" className="text-blue-600 font-medium hover:underline">
                    Live Demo →
                  </Link>
                  <Link href={p.github} target="_blank" className="text-gray-600 font-medium hover:underline">
                    GitHub →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}