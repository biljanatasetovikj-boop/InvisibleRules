export default function Footer() {
  const link =
    "inline-block py-3 font-sans text-[12px] font-bold uppercase tracking-[0.22em] text-[#707070] hover:text-[#d4302a] transition-colors";

  return (
    <div className="max-w-[1240px] mx-auto px-6 lg:px-12">
      <footer className="py-8 border-t border-[#e0ddd5] flex justify-between items-center flex-wrap gap-x-8 gap-y-2">
        <div className="font-serif italic text-lg text-[#1a1a1a]">
          — Built quietly. <em className="italic">Ohrid &amp; beyond.</em>
        </div>
        <div className="flex items-center flex-wrap gap-x-5">
          <a href="/privacy" className={link}>
            Privacy
          </a>
          <a href="/privacy#remove-me" className={link}>
            Unsubscribe
          </a>
          <div className="py-3 whitespace-nowrap font-sans text-[12px] font-bold uppercase tracking-[0.22em] text-[#707070]">
            © Invisible Rules · Biljana
          </div>
        </div>
      </footer>
    </div>
  );
}
