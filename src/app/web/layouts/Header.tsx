
const Header = () => {
  return (
    <div>
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <div className="flex items-center gap-3">
                <div className="size-10 flex items-center justify-center rounded-xl bg-gradient-to-br from-primary via-secondary to-accent">
                    <span className="material-symbols-outlined text-background-dark font-bold">
                        qr_code_2
                    </span>
                </div>
                <span className="text-xl font-black tracking-tight text-slate-900 uppercase">
                QR Electronics
                </span>
            </div>
            <nav className="hidden md:flex items-center gap-10">
                <a
                className="text-sm font-semibold text-slate-600 hover:text-primary transition-colors"
                href="#"
                >
                Home
                </a>
                <a
                className="text-sm font-semibold text-slate-600 hover:text-primary transition-colors"
                href="#services"
                >
                Services
                </a>
                <a
                className="text-sm font-semibold text-slate-600 hover:text-primary transition-colors"
                href="#about"
                >
                About Us
                </a>
                <a
                className="text-sm font-semibold text-slate-600 hover:text-primary transition-colors"
                href="#portfolio"
                >
                Portfolio
                </a>
                <a
                className="text-sm font-semibold text-slate-600 hover:text-primary transition-colors"
                href="#contact"
                >
                Contact
                </a>
            </nav>
            <div className="flex items-center gap-4">
                <button className="hidden lg:flex items-center justify-center px-6 py-2.5 rounded-xl bg-primary text-background-dark font-bold text-sm hover:opacity-90 transition-all">
                Get a Quote
                </button>
                <button className="p-2.5 rounded-xl bg-surface-dark border border-white/5 text-white">
                <span className="material-symbols-outlined">light_mode</span>
                </button>
            </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
