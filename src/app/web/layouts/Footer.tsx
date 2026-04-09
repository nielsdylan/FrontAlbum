
const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-12 mb-16">
                <div className="col-span-1 md:col-span-1">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="size-8 flex items-center justify-center rounded-lg bg-primary">
                            <span
                                className="material-symbols-outlined text-background-dark text-lg font-bold">qr_code_2</span>
                        </div>
                        <span className="text-lg font-black tracking-tight text-slate-900 uppercase">QR Electronics</span>
                    </div>
                    <p
                        className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
                        Pioneering technological implementation since 2012. We build the systems that build the world.
                    </p>
                    <div className="flex gap-4">
                        <a className="size-10 rounded-full bg-white flex items-center justify-center text-slate-400 hover:text-primary border border-slate-200"
                            href="#"><span className="material-symbols-outlined">public</span></a>
                        <a className="size-10 rounded-full bg-white flex items-center justify-center text-slate-400 hover:text-primary border border-slate-200"
                            href="#"><span className="material-symbols-outlined">share</span></a>
                        <a className="size-10 rounded-full bg-white flex items-center justify-center text-slate-400 hover:text-primary border border-slate-200"
                            href="#"><span className="material-symbols-outlined">code</span></a>
                    </div>
                </div>
                <div>
                    <h4 className="text-slate-900 font-bold mb-6">Services</h4>
                    <ul
                        className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
                        <li><a className="hover:text-primary transition-colors" href="#">Software Dev</a></li>
                        <li><a className="hover:text-primary transition-colors" href="#">Equipment Setup</a></li>
                        <li><a className="hover:text-primary transition-colors" href="#">Electrical Systems</a></li>
                        <li><a className="hover:text-primary transition-colors" href="#">IT Consulting</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-slate-900 font-bold mb-6">Company</h4>
                    <ul
                        className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
                        <li><a className="hover:text-primary transition-colors" href="#">About Us</a></li>
                        <li><a className="hover:text-primary transition-colors" href="#">Our Portfolio</a></li>
                        <li><a className="hover:text-primary transition-colors" href="#">Careers</a></li>
                        <li><a className="hover:text-primary transition-colors" href="#">Privacy Policy</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-slate-900 font-bold mb-6">Contact Us</h4>
                    <ul
                        className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
                        <li className="flex items-center gap-3"><span
                                className="material-symbols-outlined text-sm text-primary">mail</span>
                            hello@qrelectronics.com</li>
                        <li className="flex items-center gap-3"><span
                                className="material-symbols-outlined text-sm text-primary">call</span> +1 (555) 000-1234
                        </li>
                        <li className="flex items-start gap-3"><span
                                className="material-symbols-outlined text-sm text-primary">location_on</span> 101 Tech Way,
                            Silicon Valley<br />CA 94025, USA</li>
                    </ul>
                </div>
            </div>
            <div
                className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
                <p>© 2024 QR Electronics. All rights reserved.</p>
                <p>Designed for the future of engineering.</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer
