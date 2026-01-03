export const Header = () => {
  return (
    <header className="h-20 w-full px-4 bg-[#111112]">
        <div className="flex items-center h-full space-x-12 text-l text-white font-bold uppercase">
            <a href="/" className="relative group">
                Home
                <span className="absolute left-0 bottom-0 w-0 h-[6px] bg-[#f0075c] rounded-full transition-all duration-300 ease-out group-hover:w-full translate-y-2"></span>
            </a>
            <a href="/3d_work" className="relative group">
                3D Work
                <span className="absolute left-0 bottom-0 w-0 h-[6px] bg-[#f0075c] rounded-full transition-all duration-300 ease-out group-hover:w-full translate-y-2"></span>
            </a>
            <a href="/development" className="relative group">
                Development
                <span className="absolute left-0 bottom-0 w-0 h-[6px] bg-[#f0075c] rounded-full transition-all duration-300 ease-out group-hover:w-full translate-y-2"></span>
            </a>
            <a href="/other" className="relative group">
                Other
                <span className="absolute left-0 bottom-0 w-0 h-[6px] bg-[#f0075c] rounded-full transition-all duration-300 ease-out group-hover:w-full translate-y-2"></span>
            </a>
            <a href="/about_me" className="relative group">
                About Me
                <span className="absolute left-0 bottom-0 w-0 h-[6px] bg-[#f0075c] rounded-full transition-all duration-300 ease-out group-hover:w-full translate-y-2"></span>
            </a>
        </div>
    </header>
  );
};