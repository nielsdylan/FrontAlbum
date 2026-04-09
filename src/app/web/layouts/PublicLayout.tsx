import { Outlet } from 'react-router';
import '@/app/web/assets/scss/landing.scss'; 
import { lazy, Suspense, useEffect } from 'react';

const NavBar = lazy(() => import('@/app/web/layouts/NavBar'));
const Footer = lazy(() => import('@/app/web/layouts/Footer'));
const Header = lazy(() => import('@/app/web/layouts/Header'));

const PublicLayout = () => {
    useEffect(() => {
        // 1. Inyectar Configuración de Tailwind
        const configScript = document.createElement('script');
        configScript.id = "tailwind-config";
        configScript.innerHTML = `
            window.tailwind = window.tailwind || {};
            window.tailwind.config = {
                important: true
                darkMode: "class",
                theme: {
                    extend: {
                        colors: {
                            "primary": "#5de619",
                            "secondary": "#00f2ff",
                            "accent": "#7000ff",
                            "background-light": "#ffffff",
                            "background-dark": "#0d0d12",
                            "surface-light": "#f8fafc",
                            "surface-dark": "#1a1a24",
                        },
                        fontFamily: {
                            "display": ["Public Sans", "sans-serif"]
                        },
                        borderRadius: {
                            "DEFAULT": "0.25rem",
                            "lg": "0.5rem",
                            "xl": "0.75rem",
                            "2xl": "1.5rem",
                            "full": "9999px"
                        },
                    },
                },
            };
        `;
        document.head.appendChild(configScript);

        // 2. Inyectar Estilos CSS Personalizados (Glass card y Hero)
        const customStyles = document.createElement('style');
        customStyles.id = "custom-landing-styles";
        customStyles.innerHTML = `
            body { font-family: 'Public Sans', sans-serif; }
            .glass-card {
                background: rgba(255, 255, 255, 0.8);
                backdrop-filter: blur(12px);
                border: 1px solid rgba(0, 0, 0, 0.05);
            }
            .hero-gradient {
                background: radial-gradient(circle at top right, rgba(112, 0, 255, 0.05), transparent),
                            radial-gradient(circle at bottom left, rgba(93, 230, 25, 0.05), transparent);
            }
        `;
        document.head.appendChild(customStyles);

        // 3. Cargar el motor de Tailwind CDN
        const tailwindScript = document.createElement('script');
        tailwindScript.src = "https://cdn.tailwindcss.com?plugins=forms,container-queries";
        tailwindScript.async = true;
        document.head.appendChild(tailwindScript);

        // 4. Cargar Google Fonts
        const fonts = [
            "https://fonts.googleapis.com/css2?family=Public+Sans:wght@300;400;500;600;700;800;900&display=swap",
            "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@100..700,0..1&display=swap",
            "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        ];
        const linkElements: HTMLLinkElement[] = [];
        fonts.forEach(url => {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = url;
            document.head.appendChild(link);
            linkElements.push(link);
        });

        // 5. Aplicar clases al Body
        const body = document.body;
        const bodyClasses = [
            'bg-background-light', 
            'dark:bg-background-dark', 
            'text-slate-900', 
            'dark:text-slate-100', 
            'antialiased', 
            'font-display'
        ];
        body.classList.add(...bodyClasses);

        // Limpieza al desmontar
        return () => {
            document.head.removeChild(configScript);
            document.head.removeChild(customStyles);
            document.head.removeChild(tailwindScript);
            linkElements.forEach(link => {
                if (document.head.contains(link)) document.head.removeChild(link);
            });
            body.classList.remove(...bodyClasses);
        };
    }, []);

    return (
        <div className="public-site">
            <Suspense fallback={null}>
                <Header />
                <NavBar /> 
                <Outlet />
                <Footer />
            </Suspense>
        </div>
    );
};

export default PublicLayout;