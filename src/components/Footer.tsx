export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6 text-center">
        <p className="text-lg">© 2025 John Lloyd Tuliba. All rights reserved.</p>
        <div className="flex justify-center gap-6 mt-6">
          <a href="https://github.com/johnlloydtuliba43-prog" target="_blank" className="hover:text-blue-400">GitHub</a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" className="hover:text-blue-400">LinkedIn</a>
          <a href="mailto:your-email@gmail.com" className="hover:text-blue-400">Email</a>
        </div>
      </div>
    </footer>
  );
}