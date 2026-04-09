
const Home = () => {
    return ( 
        <>
            <main>
                <section className="relative overflow-hidden pt-16 pb-24 lg:pt-32 lg:pb-40 hero-gradient">
                    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                        <div className="flex flex-col gap-8">
                            <div
                                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
                                <span className="relative flex h-2 w-2">
                                    <span
                                        className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                                </span>
                                Next-Gen Engineering
                            </div>
                            <h1 className="text-5xl lg:text-7xl font-black leading-[1.1] text-slate-900 tracking-tight">
                                Powering the <span
                                    className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Digital
                                    Core</span> of Tomorrow.
                            </h1>
                            <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
                                QR Electronics bridges the gap between sophisticated software engineering and robust electrical
                                implementation. We provide turnkey solutions for the modern industrial landscape.
                            </p>
                            <div className="flex flex-wrap gap-4 pt-4">
                                <button
                                    className="px-8 py-4 rounded-xl bg-primary text-background-dark font-bold text-lg hover:shadow-[0_0_20px_rgba(93,230,25,0.3)] transition-all">
                                    Explore Services
                                </button>
                                <button
                                    className="px-8 py-4 rounded-xl border border-slate-200 bg-white text-slate-900 font-bold text-lg hover:bg-slate-50 transition-all">
                                    View Portfolio
                                </button>
                            </div>
                        </div>
                        <div className="relative">
                            <div
                                className="absolute -inset-4 bg-gradient-to-tr from-accent/20 to-secondary/20 blur-3xl rounded-full">
                            </div>
                            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                                <img alt="Technology Hub" className="w-full aspect-square object-cover"
                                    data-alt="High-tech automated manufacturing facility with glowing lights"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCo_i2FMQ3GhcMn1WYmMWpPiXPOvE4n0K2ZfsM-W9qcEY1JXgH3-oqfpY1blcS6KIp2K6pfw_8AcaAJdh3YDaTiBDhKgg8Ke_H1e8fEJ_aZNfNMC-MPW2Q8y_mQmS92oSd7FJSIjodQBI5ltrAlf-1XYnh0U1pD0hALoxVptWqAEViMXWv7Af27CV3iT_A7DfvDldvM2MR0GgkTsKFjrKJ7cGSaTMBRlnmaNwQWvCakimjeG_0HBsEGVC3VqhYFa1lmBs4aTjw57KA" />
                                <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 to-transparent"></div>
                                <div className="absolute bottom-8 left-8 right-8 glass-card p-6 rounded-xl">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-lg text-slate-600 leading-relaxed max-w-xl">Active Projects</p>
                                            <p className="text-lg text-slate-600 leading-relaxed max-w-xl">420+</p>
                                        </div>
                                        <div className="h-12 w-px bg-white/10"></div>
                                        <div>
                                            <p className="text-lg text-slate-600 leading-relaxed max-w-xl">Global Clients</p>
                                            <p className="text-lg text-slate-600 leading-relaxed max-w-xl">85</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-24 bg-white relative" id="services">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-20 flex flex-col items-center">
                            <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Core Competencies</h2>
                            <h3 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6">Our Services</h3>
                            <div className="h-1.5 w-24 bg-gradient-to-r from-primary via-secondary to-accent rounded-full"></div>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div
                                className="group relative p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-primary/50 hover:bg-white hover:shadow-xl transition-all">
                                <div
                                    className="size-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <span className="material-symbols-outlined text-primary text-3xl">terminal</span>
                                </div>
                                <h4 className="text-2xl font-bold text-slate-900 mb-4">Software Development</h4>
                                <p className="text-slate-600 leading-relaxed mb-6">
                                    Custom enterprise software, IoT integration, and cloud-native applications tailored for
                                    industrial automation and real-time monitoring.
                                </p>
                                <img alt="Software Dev"
                                    className="w-full h-40 object-cover rounded-lg opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all mb-4"
                                    data-alt="Abstract code on a dark monitor screen"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuFZS0tDbgSLevCMrW8-vuuQDUj9OeVLCWup_Tv-3eGpA-qfhq51Jy2OGQajYXQbuWnayieI1KAGmWRlJNCjEWLhIXiNDiMacY-qu77B70ITy5bG1q7deBGrWG4F8yBIMpeVb49Bg7YuRp2ZnUQtSH72fK7FZTqDpm-K8Bp_X8n40YxdYdXynCnX0X95HLJHzrNQXDjxAf0WzIdgGFm1-5mF2rf88YI12rfhEXKd7w9De1Al7Z7DdXPC6ACqfgFaiwtsVWCtHzRKI" />
                                <a className="inline-flex items-center gap-2 text-primary font-bold hover:underline" href="#">
                                    Learn More <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                </a>
                            </div>
                            <div
                                className="group relative p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-primary/50 hover:bg-white hover:shadow-xl transition-all">
                                <div
                                    className="size-16 rounded-xl bg-secondary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <span className="material-symbols-outlined text-secondary text-3xl">developer_board</span>
                                </div>
                                <h4 className="text-2xl font-bold text-slate-900 mb-4">Tech Implementation</h4>
                                <p className="text-slate-600 leading-relaxed mb-6">
                                    Precision deployment of server racks, robotic systems, and advanced sensory hardware into
                                    existing infrastructure workflows.
                                </p>
                                <img alt="Hardware Implementation"
                                    className="w-full h-40 object-cover rounded-lg opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all mb-4"
                                    data-alt="Modern server circuit board with blue lighting"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC92k8tvfKHAY6Hf8--GKIHKmgKze0L2elUf4ESjFhedWEZLgsgR4fvdXnQkN37OH1wZN0-FW2ucMX9mRrBcXtv9w3YUfGkyCJ65jl67lypX4ewbtspLXVA5fTCwFwgrg4fYxfKbCVAjfdPS7urSxh-dpJ5twuXygixP-SITQ5_LjSLiVKjZAdgcse_eA8tXKr8gFUwCW9IM6Mm8iHMoEVf7zg4Q5TRZgRadtH7k62pfBwFfINDqDkwZXM0AUw9VbyjgjReEoQS75w" />
                                <a className="inline-flex items-center gap-2 text-secondary font-bold hover:underline" href="#">
                                    Learn More <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                </a>
                            </div>
                            <div
                                className="group relative p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-primary/50 hover:bg-white hover:shadow-xl transition-all">
                                <div
                                    className="size-16 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <span className="material-symbols-outlined text-accent text-3xl">bolt</span>
                                </div>
                                <h4 className="text-2xl font-bold text-slate-900 mb-4">Electrical Engineering</h4>
                                <p className="text-slate-600 leading-relaxed mb-6">
                                    Industrial-grade electrical solutions, power distribution systems, and safety-compliant
                                    wiring for commercial and factory scale.
                                </p>
                                <img alt="Electrical Engineering"
                                    className="w-full h-40 object-cover rounded-lg opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all mb-4"
                                    data-alt="Close up of electrical wires and panel"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSoxYoRWeh0MNTFokAhsnbHy4YZ2i2qrwHV1TzIHt9L0fSfumJtMnJ7EfpBTKeP8iXkOO-OXlr5E4Y7k5ED4rSuPjBxYdqcGvc13OcBJLHan14qTowe7WYClE4k6xIRR5Z46vbeuC9BSgCVbboa0IcMCs1aVeX_ietUa3QhyDquYOeP2WL7juZBlIxq7prbHqztTTjNUfD7h6ExCf0U2PyAgAeOcVnInNUnPOPEk2P94zyvzBO3npYxKx2OM-gg5DRRXVIjYMcrzU" />
                                <a className="inline-flex items-center gap-2 text-accent font-bold hover:underline" href="#">
                                    Learn More <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-24 bg-slate-50 relative overflow-hidden" id="about">

                    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 relative z-10">
                        <div className="order-2 lg:order-1">
                            <img alt="Team Collaboration" className="rounded-3xl shadow-2xl border border-white/10"
                                data-alt="Diverse engineering team working on a digital project"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEG1yw3_9fMzkxevfwfZJbkwnal_Q7qoTFS6Dvs-VuacPDaD7CuFAYydxc1U-820it_hP-VZxPWK22NTDP1wI6EkFH4SdwyCvOlJpB5DHFIQbtmrJflVfmIBRb60rcsN5awTOtK8EI-bpSiFoC8GIbxJeCPM4EGAP9IjhH_V_RO4B575_YiVaUF-JBBL5YnZRar1V44I1JVa4HvmgxSOnQaxNYhYXEabJY1l5x9uUvplvwmxMwy7bZa36F6xDj2HUogkTif2w7Qpg" />
                        </div>
                        <div className="flex flex-col justify-center order-1 lg:order-2">
                            <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">The QR Advantage</h2>
                            <h3 className="text-4xl font-black text-slate-900 mb-8">Why Industry Leaders Choose Us</h3>
                            <div className="space-y-8">
                                <div className="flex gap-6">
                                    <div
                                        className="size-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                                        <span className="material-symbols-outlined text-primary">verified</span>
                                    </div>
                                    <div>
                                        <h5 className="text-xl font-bold text-slate-900 mb-2">Certified Excellence</h5>
                                        <p className="text-slate-600">Our engineers hold top-tier certifications in both software
                                            architecture and electrical safety standards.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div
                                        className="size-12 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                                        <span className="material-symbols-outlined text-secondary">sync_alt</span>
                                    </div>
                                    <div>
                                        <h5 className="text-xl font-bold text-slate-900 mb-2">Full-Cycle Integration</h5>
                                        <p className="text-slate-600">We don't just deliver parts; we create cohesive ecosystems
                                            where hardware and software work in perfect harmony.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div
                                        className="size-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                                        <span className="material-symbols-outlined text-accent">support_agent</span>
                                    </div>
                                    <div>
                                        <h5 className="text-xl font-bold text-slate-900 mb-2">24/7 Global Support</h5>
                                        <p className="text-slate-600">Critical infrastructure requires constant vigilance. Our
                                            support teams are always on standby to ensure uptime.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-24 bg-white" id="contact">
                    <div className="max-w-5xl mx-auto px-6">
                        <div
                            className="relative rounded-3xl overflow-hidden p-12 lg:p-20 text-center bg-slate-50 border border-slate-200 shadow-xl">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent">
                            </div>
                            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6">Ready to upgrade your
                                infrastructure?</h2>
                            <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
                                Join 80+ global companies scaling their operations with QR Electronics' precision engineering
                                and software solutions.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <input
                                    className="min-w-[300px] bg-white border border-slate-300 rounded-xl px-6 py-4 text-slate-900 focus:outline-none focus:border-primary transition-colors"
                                    placeholder="Enter your business email" type="email" />
                                <button
                                    className="px-10 py-4 rounded-xl bg-primary text-background-dark font-bold hover:opacity-90 transition-all">
                                    Get Consultation
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            
        </> 
    );
}
 
export default Home;