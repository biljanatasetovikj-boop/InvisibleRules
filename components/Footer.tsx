export default function Footer() {
  return (
    <footer className="border-t border-[#E5E2DB] bg-[#FAFAF7] py-10 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[#6B6B6B]">
        <p>© 2026 Invisible Rules · Biljana K. Tasetovikj</p>
        <p>Based in Macedonia · Working globally</p>
        <div className="flex gap-6">
          <a
            href="https://invisiblerules.substack.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#111111] transition-colors"
          >
            Substack ↗
          </a>
          <a
            href="https://www.linkedin.com/in/biljana-kuzmanovska-tasetovikj/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#111111] transition-colors"
          >
            LinkedIn ↗
          </a>
        </div>
      </div>
    </footer>
  );
}
