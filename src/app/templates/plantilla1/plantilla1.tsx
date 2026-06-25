// import { useNavigate, useParams } from "react-router";
// import { Plantilla1 } from "@/app/templates/plantilla1/plantilla1";
import '@/app/templates/plantilla1/assets/img/logo/favicon.png';

import '@/app/templates/plantilla1/assets/img/logo/favicon.png';
import "@/app/templates/plantilla1/assets/css/bootstrap.min.css";
import "@/app/templates/plantilla1/assets/css/font-awesome-pro.css";
import "@/app/templates/plantilla1/assets/css/flaticon.css";
import "@/app/templates/plantilla1/assets/css/meanmenu.css";
import "@/app/templates/plantilla1/assets/css/animate.css";
import "@/app/templates/plantilla1/assets/css/nice-select.css";
import "@/app/templates/plantilla1/assets/css/swiper-bundle.css";
import "@/app/templates/plantilla1/assets/css/slick.css";
import "@/app/templates/plantilla1/assets/css/magnific-popup.css";
import "@/app/templates/plantilla1/assets/css/spacing.css";
import "@/app/templates/plantilla1/assets/css/style.css";
import { useEffect, useState } from 'react';

    // Importaciones de imágenes para el Layout
// import navPatternBottom from "@/app/templates/plantilla1/assets/img/hero/nav-parrten-botoom.png";
import navPatternBottom from "@/app/templates/plantilla1/assets/img/hero/nav-parrten-botoom.png";
import sliderHero1 from "@/app/templates/plantilla1/assets/img/slider/ptg-hero-1.jpg";
import darkLogo from "@/app/templates/plantilla1/assets/img/logo/dark-logo.png";

// Importaciones de las imágenes de la sección Portfolio
import portfolio1 from "@/app/templates/plantilla1/assets/img/portfolio/ptg-portfilo-1.jpg";
import portfolio2 from "@/app/templates/plantilla1/assets/img/portfolio/ptg-portfilo-2.jpg";
import portfolio3 from "@/app/templates/plantilla1/assets/img/portfolio/ptg-portfilo-3.jpg";
import portfolio4 from "@/app/templates/plantilla1/assets/img/portfolio/ptg-portfilo-4.jpg";
import portfolio5 from "@/app/templates/plantilla1/assets/img/portfolio/ptg-portfilo-5.jpg";
import portfolio6 from "@/app/templates/plantilla1/assets/img/portfolio/ptg-portfilo-6.jpg";
import { useParams } from 'react-router';
import { todasFotos } from '@/app/panel-control/services/galeria/FotoService';
import type { Image } from '@/app/panel-control/interface/galeria/Image';

// Si en el resto de tu HTML tienes más imágenes, puedes importarlas siguiendo este mismo patrón:
// import nombreVariable from "../assets/img/ruta/imagen.png";
const IMG_URL = import.meta.env.VITE_APP_IMG_URL;

const plantilla1 = () => {
    const { usuario_id } = useParams<Record<string, string | undefined>>();
    const [dataJson, setDataJson] = useState<Image[]>([]);
    useEffect(() => {
    listaFotos(usuario_id);
    // 2. IMPORTACIÓN DE JAVASCRIPT
    // Como tus archivos JS están en "templates/plantilla1/assets/js/", la ruta relativa correcta
    // para subirlos dinámicamente desde este archivo (que está en layouts/) es saliendo una carpeta hacia atrás.
    // la ruta en la que esta los scripts son en "public/template/plantilla1/assets/js/"
    const scripts = [
        "../plantilla1/assets/js/jquery.js", // Siempre primero
        "../plantilla1/assets/js/waypoints.js",
        "../plantilla1/assets/js/modernizr.js",
        "../plantilla1/assets/js/bootstrap.bundle.min.js",
        "../plantilla1/assets/js/meanmenu.js",
        "../plantilla1/assets/js/swiper-bundle.js",
        "../plantilla1/assets/js/slick.js",
        "../plantilla1/assets/js/magnific-popup.js",
        "../plantilla1/assets/js/counterup.js",
        "../plantilla1/assets/js/wow.js",
        "../plantilla1/assets/js/nice-select.js",
        "../plantilla1/assets/js/isotope-pkgd.js",
        "../plantilla1/assets/js/imagesloaded-pkgd.js",
        "../plantilla1/assets/js/ajax-form.js",
        "../plantilla1/assets/js/headline.js",
        "../plantilla1/assets/js/tilt.jquery.min.js",
        "../plantilla1/assets/js/main.js" // Al final para activar la plantilla
    ];

    const loadedScriptElements: HTMLScriptElement[] = [];

    const loadScriptsSequentially = (index: number) => {
        if (index >= scripts.length) return;

        const src = scripts[index];

        if (document.querySelector(`script[src="${src}"]`)) {
        loadScriptsSequentially(index + 1);
        return;
        }

        const script = document.createElement("script");
        script.src = src;
        script.async = false;

        script.onload = () => {
        loadScriptsSequentially(index + 1);
        };

        document.body.appendChild(script);
        loadedScriptElements.push(script);
    };

    loadScriptsSequentially(0);

    // Limpieza al salir de la página
    return () => {
        loadedScriptElements.forEach((script) => {
        if (document.body.contains(script)) {
            document.body.removeChild(script);
        }
        });
    };
    }, []);

    const listaFotos = async (id: number) => {
        const respons: Image[] = await todasFotos(id);
        setDataJson(respons)
        console.log(respons);
        
    }

    return (
        <>
            <div>
                <header>
                    <div id="header-sticky" className="tp-ptg-header dark-header black-bg p-relative">
                        <div className="container-fluid p-0">
                            <div className="tp-ptg-header__main pl-40">
                                <div className="row align-items-center g-0">
                                    <div className="col-xl-2 col-8">
                                        <div className="logo">
                                            <a href="index.html"><img src={darkLogo} alt="" /></a>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-9 d-none d-xl-block">
                                        <div className="main-menu ptg-menu">  
                                            <nav id="mobile-menu">
                                                {/* <ul>
                                                    <li className="has-dropdown">
                                                        <a href="index.html">Home</a>
                                                        <ul className="submenu">
                                                            <li><a href="index.html">Main Home</a></li>
                                                            <li><a href="index-2.html">It Solutions</a></li>
                                                            <li><a href="index-3.html">Digital Agency</a></li>
                                                            <li><a href="index-4.html">Home Saas</a></li>
                                                            <li><a href="index-5.html">Photography</a></li>
                                                            <li><a href="index-6.html">Minimal Portfolio</a></li>
                                                            <li><a href="index-7.html">Law Firm</a></li>
                                                            <li><a href="index-8.html">Creative Agency</a></li>
                                                            <li><a href="index-9.html">Architecture</a></li>
                                                            <li><a href="index-10.html">Seo Agency</a></li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <a href="about.html">About</a>
                                                    </li>
                                                    <li className="has-dropdown">
                                                        <a href="shop.html">Shop</a>
                                                        <ul className="submenu">
                                                            <li><a href="shop.html">shop</a></li>
                                                            <li><a href="shop-details.html">Shop Details</a></li>
                                                            <li><a href="checkout.html">Checkout Page</a></li>
                                                        </ul>
                                                    </li>
                                                    <li className="has-dropdown has-megamenu">
                                                        <a href="#">Pages</a>
                                                        <ul className="mega-menu">
                                                            <li>
                                                                <a className="" href="#">Layout 1</a>
                                                                <ul>
                                                                <li><a href="about-me.html">About Me</a></li>
                                                                <li><a href="about.html">About Us v.1 </a></li>
                                                                <li><a href="about-2.html">About Us v.2</a></li>
                                                                <li><a href="about-3.html">About Us v.3</a></li>
                                                                </ul>
                                                            </li>
                                                            <li>
                                                                <a href="#">Layout 2</a>
                                                                <ul>
                                                                <li><a href="service.html">Service v.1</a></li>
                                                                <li><a href="service-2.html">Service v.2</a></li>
                                                                <li><a href="service-3.html">Service v.3</a></li>
                                                                <li><a href="service-details.html">Service Details</a></li>
                                                                <li><a href="faq.html">Faq Page</a></li>
                                                                </ul>
                                                            </li>
                                                            <li>
                                                                <a href="#">Layout 3</a>
                                                                <ul>
                                                                <li><a href="portfolio.html">Portfolio v.1</a></li>
                                                                <li><a href="portfolio-2.html">portfolio v.2</a></li>
                                                                <li><a href="portfolio-3.html">portfolio v.3</a></li>
                                                                <li><a href="portfolio-4.html">portfolio v.4</a></li>
                                                                <li><a href="portfolio-5.html">portfolio v.5</a></li>
                                                                <li><a href="portfolio-details.html">portfolio details</a></li>
                                                                </ul>
                                                            </li>
                                                            <li>
                                                                <a href="#">Layout 4</a>
                                                                <ul>
                                                                <li><a href="team.html">Team</a></li>
                                                                <li><a href="team-2.html">Team v.1</a></li>
                                                                <li><a href="team-details.html">Team Details</a></li>
                                                                <li><a href="job.html">Job</a></li>
                                                                <li><a href="job-details.html">Job Details</a></li>
                    
                                                                </ul>
                                                            </li>
                                                            <li>
                                                                <a href="#">Layout 5</a>
                                                                <ul>
                                                                <li><a href="price.html">Price & Plans</a></li>
                                                                <li><a href="privacy-policy.html">privacy policy</a></li>
                                                                <li><a href="terms.html">Terms & Condition</a></li>
                                                                <li><a href="help.html">Help Center</a></li>
                                                                
                                                                </ul>
                                                            </li>
                                                            <li>
                                                                <a href="#">Layout 6</a>
                                                                <ul>
                                                                <li><a href="search.html">Search Results</a></li>
                                                                <li><a href="contact.html">Contact</a></li>
                                                                <li><a href="shop.html">Shop</a></li>
                                                                <li><a href="shop-details.html">Shop Details</a></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="has-dropdown">
                                                        <a href="blog.html">Blog</a>
                                                        <ul className="submenu">
                                                            <li><a href="blog.html">Blog</a></li>
                                                            <li><a href="blog-list.html">Blog List</a></li>
                                                            <li><a href="blog-details.html">Blog Details</a></li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <a href="contact.html">Contact</a>
                                                    </li>
                                                </ul> */}
                                            </nav>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-4">
                                        <div className="tp-header-search-nav d-flex align-items-center justify-content-end">
                                            <div className="tp-header-sing-icon text-danger">
                                                <span><a href="#"><i className="fas fa-user"></i>sign in</a></span>
                                            </div> 
                                            {/* <div className="tp-header-search-2 p-relative d-none d-lg-block">
                                                <form action="#">
                                                    <input type="text" id="search" placeholder="Keyword here...." />
                                                    <label htmlFor="search"><i className="fal fa-search"></i></label>
                                                </form>
                                            </div> */}
                                            {/* <div className="tp-header-nav tp-header-nav-2"> */}
                                            <div className="black-bg"style={{ width: '110px', height: '110px' }}>
                                                {/* <i className="flaticon-more"></i> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </header>
                <div className="tp-offcanvas-wrapper">
                    <div className="tp-offcanvas white-bg">
                        <div className="offc-top-pattern">
                            <img src="assets/img/hero/nav-parrten-top.png" alt="" />
                        </div>
                        <div className="tp-offcanvas__top tp-border-bottom pb-30 mb-30">
                            <div className="tp-offcanvas-close">
                                <span><i className="fal fa-times"></i></span>
                            </div>
                            <div className="tp-offcanvas__logo mb-50">
                                <a href="index.html"><img src="assets/img/logo/black-logo.png" alt="sticky-logo" /></a>
                            </div>
                            <p> We bring your ideas to better product. Base in NYC</p>
                            <div className="tp-offcanvas__social">
                                <span> <a href="#"><i className="fab fa-facebook-f"></i></a></span>
                                <span> <a href="#"><i className="fab fa-twitter"></i></a></span>
                                <span> <a href="#"><i className="fab fa-behance"></i></a></span>
                                <span> <a href="#"><i className="fab fa-youtube"></i></a></span>
                            </div>
                        </div>
                        <div className="tp-offcanvas__widget mb-40 d-none d-xl-block">
                            <h3 className="tp-footer__widget-title mb-35">
                                Get In Touch
                            </h3>
                            <div className="tp-offcanvas-cta d-flex align-items-center tp-border-bottom pb-20  mb-30">
                                <span className="icon mr-20"><img src="assets/img/icons/ofp-phone.png" alt="" /></span>
                                <span>
                                    <span className="d-block mb-0">Phone number</span>
                                    <b><a href="callto:0002229090"> Call Us: 000-222-9090 </a></b>
                                </span>
                            </div>

                            <div className="tp-offcanvas-cta d-flex align-items-center tp-border-bottom pb-20 mb-30">
                                <span className="icon mr-20"><img src="assets/img/icons/ofc-mail-icon.png" alt="" /></span>
                                <span>
                                    <span className="d-block mb-0">Email address</span>
                                    <b><a href="mailto:info@webmail.com"> info@webmail.com </a></b>
                                </span>
                            </div>
                            <div className="tp-offcanvas-cta d-flex align-items-center pb-20  mb-30">
                                <span className="icon mr-20"><img src="assets/img/icons/ofc-locaiton.png" alt="" /></span>
                                <span>
                                    <span className="d-block mb-0">1300 Don City, NYC</span>
                                    <b><a href="callto:0002229090"> Call Us: 000-222-9090 </a></b>
                                </span>
                            </div>
                        </div>
                        <div className="tp-mobile-menu">
                        </div>
                        <div className="tp-offcanvas__bottom mt-80 d-none d-lg-block">
                            <p>Our team applies its wide ranging in
                                experience to determining.</p>
                            <div className="tp-offcanvas-btn-wrapper">
                                <a href="#" className="tp-common-btn">get in touch
                                    <span>
                                        <i className="fal fa-long-arrow-right"></i>
                                        <i className="fal fa-long-arrow-right"></i>
                                    </span>
                                </a>
                            </div>
                        </div>

                        <div className="offc-bottom-pattern">
                            <img src={navPatternBottom} alt="" />
                        </div>
                    </div>
                </div>
                <div className="body-overlay"></div>  
                <a href="#main-wrapper" id="tp-backto-top" className="tp-back-to-top show">
                    <span>
                        <i className="fal fa-angle-double-up"></i>
                    </span>
                </a>
                <main>
                    <div className="tp-ptg-slider p-relative">
                        <div className="swiper-container ptg-slider-active">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide ptg-slider-item ptg-slider-height d-flex align-items-center p-relative"
                                    data-background={sliderHero1}>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="tp-ptg-slider-content text-center p-relative">
                                                    <h3 className="tp-ptg-slider-title mb-45" data-animation="tpfadeUp"
                                                        data-delay=".3s">Gencio <br />
                                                        <span>Photography</span>
                                                    </h3>
                                                    <a href="#" className="ptg-slider-btn" data-animation="tpfadeUp" data-delay=".5s">
                                                        <span className="circle mr-20">
                                                            <i className="fal fa-long-arrow-right"></i>
                                                            <i className="fal fa-long-arrow-right"></i>
                                                        </span>
                                                        Hire Us Now
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ptg-slider-social">
                                        <b>Connect Here:</b>
                                        <span> <a href="#"><i className="fab fa-facebook-f"></i></a></span>
                                        <span> <a href="#"><i className="fab fa-twitter"></i></a></span>
                                        <span> <a href="#"><i className="fab fa-behance"></i></a></span>
                                        <span> <a href="#"><i className="fab fa-youtube"></i></a></span>
                                    </div>
                                    <div className="ptg-contact-slider-info">
                                        <span><a  href="mailto:info@gencio.com"></a>info@webmail.com</span>
                                        <span className="ptg-spt"> - </span>
                                        <span><a href="te:#"></a>222 090 000 01</span>
                                    </div>
                                </div>
                                <div className="swiper-slide ptg-slider-item ptg-slider-height d-flex align-items-center p-relative"
                                    data-background="assets/img/slider/ptg-hero-2.jpg">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="tp-ptg-slider-content text-center p-relative">
                                                    <h3 className="tp-ptg-slider-title mb-45" data-animation="tpfadeUp"
                                                        data-delay=".3s">Gencio <br />
                                                        <span>Photography</span>
                                                    </h3>
                                                    <a href="#" className="ptg-slider-btn" data-animation="tpfadeUp" data-delay=".5s">
                                                        <span className="circle mr-20">
                                                            <i className="fal fa-long-arrow-right"></i>
                                                            <i className="fal fa-long-arrow-right"></i>
                                                        </span>
                                                        Hire Us Now
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ptg-slider-social">
                                        <b>Connect Here:</b>
                                        <span> <a href="#"><i className="fab fa-facebook-f"></i></a></span>
                                        <span> <a href="#"><i className="fab fa-twitter"></i></a></span>
                                        <span> <a href="#"><i className="fab fa-behance"></i></a></span>
                                        <span> <a href="#"><i className="fab fa-youtube"></i></a></span>
                                    </div>
                                    <div className="ptg-contact-slider-info">
                                        <span><a  href="mailto:info@gencio.com"></a>info@webmail.com</span>
                                        <span className="ptg-spt"> - </span>
                                        <span><a href="te:#"></a>222 090 000 01</span>
                                    </div>
                                </div>
                                <div className="swiper-slide ptg-slider-item ptg-slider-height d-flex align-items-center p-relative"
                                    data-background="assets/img/slider/ptg-hero-3.jpg">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="tp-ptg-slider-content text-center p-relative">
                                                    <h3 className="tp-ptg-slider-title mb-45" data-animation="tpfadeUp"
                                                        data-delay=".3s">Gencio <br />
                                                        <span>Photography</span>
                                                    </h3>
                                                    <a href="#" className="ptg-slider-btn" data-animation="tpfadeUp" data-delay=".5s">
                                                        <span className="circle mr-20">
                                                            <i className="fal fa-long-arrow-right"></i>
                                                            <i className="fal fa-long-arrow-right"></i>
                                                        </span>
                                                        Hire Us Now
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ptg-slider-social">
                                        <b>Connect Here:</b>
                                        <span> <a href="#"><i className="fab fa-facebook-f"></i></a></span>
                                        <span> <a href="#"><i className="fab fa-twitter"></i></a></span>
                                        <span> <a href="#"><i className="fab fa-behance"></i></a></span>
                                        <span> <a href="#"><i className="fab fa-youtube"></i></a></span>
                                    </div>
                                    <div className="ptg-contact-slider-info">
                                        <span><a  href="mailto:info@gencio.com"></a>info@webmail.com</span>
                                        <span className="ptg-spt"> - </span>
                                        <span><a href="te:#"></a>222 090 000 01</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ptg-sldider-dot"></div>
                    </div>
                    {/* <div className="ptg-about dark-bg pt-120 pb-90 p-relative">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-7 col-lg-6">
                                    <div className="ptg-about-info pt-50">
                                        <div className="section-title-wraper">
                                            <div className="tp-section">
                                                <span className="tp-section__subtitle mb-15 shadow-none text-rgb p-0 wow tpfadeUp" data-wow-delay=".3s">About Our
                                                    Agency</span>
                                                <h2
                                                    className="tp-section__title text-non-rgb tp-rgb-border text-white text-uppercase mb-30 wow tpfadeUp" data-wow-delay=".4s">
                                                    Catch Your Memories
                                                    <br /> In <span> Photo & Video.</span>
                                                </h2>
                                            </div>
                                        </div>
                                        <div className="ptg-about-content d-flex mb-40 wow tpfadeUp" data-wow-delay=".4s">
                                            <div className="about-step-info mr-100">
                                                <h3>Services</h3>
                                                <p>Fashion Photography <br />
                                                    Wedding Photography <br />
                                                    Commercial Shooting <br />
                                                    Photo Studio</p>
                                            </div>
                                            <div className="about-step-info">
                                                <h3>Services</h3>
                                                <p>Geographic Photo Contest 2022 <br />
                                                    <a href="#">Sony World Photography 2018</a> <br />
                                                    Monovisions Photography 2017
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ptg-about-btn-wrapper mb-30 wow tpfadeUp" data-wow-delay=".3s">
                                        <a href="contact.html" className="tp-black-btn br-btn-bg-dark">get in touch
                                            <span className="ml-10">
                                                <i className="fal fa-long-arrow-right"></i>
                                                <i className="fal fa-long-arrow-right"></i>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-xl-5 col-lg-6">
                                    <div className="ptg-about-img-wrapper p-relative wow tpfadeUp">
                                        <div className="ptg-about-img" data-tilt data-tilt-perspective="2000">
                                            <img src="assets/img/about/pta-about-img.jpg" alt="about" />
                                        </div>
                                        <div className="pta-about-circle">
                                            <img src="assets/img/about/ptg-ab-circle.png" alt="circe" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    {/* <div className="arrow-down-btn dark-bg">
                        <a href="#ptg-portfolio" className="down-arrow-btn"><i className="fal fa-long-arrow-down"></i>
                        </a>
                    </div> */}
                    {/* <div className="ptg-service dark-bg pt-120 pb-80">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-3 col-md-6">
                                    <div className="ptg-service__box p-relative wow tpfadeUp" data-wow-delay=".3s">
                                        <div className="ptg-service__box-icon">
                                            <span><i className="flaticon-diaphragm"></i></span>
                                        </div>
                                        <h3 className="ptg-service__box-title"><a href="#">Flytographer</a></h3>
                                        <p className="mb-0">Photographer is someone who
                                            takes photographs.</p>
                                        <span className="ptg-counter">01</span>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-6">
                                    <div className="ptg-service__box p-relative wow tpfadeUp" data-wow-delay=".4s">
                                        <div className="ptg-service__box-icon">
                                            <span><i className="flaticon-mountains"></i></span>
                                        </div>
                                        <h3 className="ptg-service__box-title"><a href="#">Dark Room Portrait</a></h3>
                                        <p className="mb-0">Photographer is someone who
                                            takes photographs.</p>
                                        <span className="ptg-counter">02</span>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-6">
                                    <div className="ptg-service__box p-relative wow tpfadeUp" data-wow-delay=".5s">

                                        <div className="ptg-service__box-icon">
                                            <span><i className="flaticon-camera"></i></span>
                                        </div>
                                        <h3 className="ptg-service__box-title"><a href="#">Exposure Pictures</a></h3>
                                        <p className="mb-0">Photographer is someone who
                                            takes photographs.</p>
                                        <span className="ptg-counter">03</span>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-6">
                                    <div className="ptg-service__box p-relative wow tpfadeUp" data-wow-delay=".6s">
                                        <div className="ptg-service__box-icon">
                                            <span><i className="flaticon-forest"></i></span>
                                        </div>
                                        <h3 className="ptg-service__box-title"><a href="#">Pose Photo Studio</a></h3>
                                        <p className="mb-0">Photographer is someone who
                                            takes photographs.</p>
                                        <span className="ptg-counter">04</span>
                                    </div>
                                </div>
                            </div>
                            <div className="row flex-column-reverse wow tpfadeUp">
                                <div className="tp-ptg-service-review text-center pt-40 mt-50 pb-40 tp-border-top-dark">
                                    <div className="tp-pg-sv-avata d-lg-inline-block pr-25">
                                        <img src="assets/img/services/service-avatas-black.png" alt="" />
                                    </div>
                                    <p className="d-inline-block pr-5 text-uppercase">Here are some of the rewards from putting our
                                        customers first.
                                        <a href="#">Make Request <span><i className="fal fa-long-arrow-right"></i></span></a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>  */}
                    <div className="ptg-portfolio dark-bg-2 pt-120 pb-120" id="ptg-portfolio">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="section-title-wraper text-center">
                                        <div className="tp-section">
                                            <span className="tp-section__subtitle mb-15 shadow-none text-rgb p-0 wow tpfadeUp">Photo Showcase</span>
                                            <h2
                                                className="tp-section__title text-non-rgb tp-rgb-border text-white text-uppercase mb-65 wow tpfadeUp" data-wow-delay=".4s">
                                                our <span> case study</span>
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="ptg-portfolio-item mb-30  p-relative wow tpfadeUp" data-wow-delay=".3s">
                                        <div className="ptg-portfolio-item-img pta-pt-img-large" data-tilt data-tilt-perspective="2000">
                                            <a href={portfolio1} className="ptg-portfilo">
                                                <img src={portfolio1} alt="pt1" />
                                            </a>
                                        </div>
                                        <div className="ptg-portfolio-item-info">
                                            <span className="ptg-portfolio-item-subtitle">Landscaping, Outdoor</span>
                                            <h3 className="ptg-portfolio-item-title"><a href="#">oliza pablo photo</a></h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="ptg-portfolio-item mb-30  p-relative wow tpfadeUp" data-wow-delay=".4s">
                                        <div className="ptg-portfolio-item-img text-center" data-tilt data-tilt-perspective="2000">
                                            <a href={portfolio2} className="ptg-portfilo">
                                                <img src={portfolio2} alt="pt2" />
                                            </a>
                                        </div>
                                        <div className="ptg-portfolio-item-info">
                                            <span className=" ptg-portfolio-item-subtitle">Landscaping, Outdoor</span>
                                            <h3 className="ptg-portfolio-item-title"><a href="#">oliza pablo photo</a></h3>
                                        </div>
                                    </div>
                                </div>
                                 {dataJson.map((data, index: number) => (
                                    <div className="col-lg-6" key={data.id}>
                                        <div className="ptg-portfolio-item mb-30  p-relative wow tpfadeUp" data-wow-delay=".3s">
                                            <div className="ptg-portfolio-item-img pta-pt-img-large" data-tilt data-tilt-perspective="2000">
                                                <a href={IMG_URL+'/'+data.path} className="ptg-portfilo">
                                                    <img src={IMG_URL+'/'+data.path} alt="pt1" />
                                                </a>
                                            </div>
                                            <div className="ptg-portfolio-item-info">
                                                <span className="ptg-portfolio-item-subtitle">Landscaping, Outdoor</span>
                                                <h3 className="ptg-portfolio-item-title"><a href="#">oliza pablo photo</a></h3>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                                
                                {/* <div className="col-lg-6">
                                    <div className="ptg-portfolio-item mb-100 p-relative wow tpfadeUp" data-wow-delay=".5s">
                                        <div className="ptg-portfolio-item-img text-center" data-tilt data-tilt-perspective="2000">
                                            <a href={portfolio3} className="ptg-portfilo">
                                                <img src={portfolio3} alt="pt1" />
                                            </a>
                                        </div>
                                        <div className="ptg-portfolio-item-info">
                                            <span className="ptg-portfolio-item-subtitle">Landscaping, Outdoor</span>
                                            <h3 className="ptg-portfolio-item-title"><a href="#">oliza pablo photo</a></h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="ptg-portfolio-item mb-100  p-relative wow tpfadeUp" data-wow-delay=".4s">
                                        <div className="ptg-portfolio-item-img pta-pt-img-large" data-tilt data-tilt-perspective="2000">
                                            <a href={portfolio4} className="ptg-portfilo">
                                                <img src={portfolio4} alt="pt2" />
                                            </a>
                                        </div>
                                        <div className="ptg-portfolio-item-info">
                                            <span className="ptg-portfolio-item-subtitle">Landscaping, Outdoor</span>
                                            <h3 className="ptg-portfolio-item-title"><a href="#">oliza pablo photo</a></h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="ptg-portfolio-item mb-100  p-relative wow tpfadeUp" data-wow-delay=".5s">
                                        <div className="ptg-portfolio-item-img pta-pt-img-large" data-tilt data-tilt-perspective="2000">
                                            <a href={portfolio5} className="ptg-portfilo">
                                                <img src={portfolio5} alt="pt1" />
                                            </a>
                                        </div>
                                        <div className="ptg-portfolio-item-info">
                                            <span className="ptg-portfolio-item-subtitle">Landscaping, Outdoor</span>
                                            <h3 className="ptg-portfolio-item-title"><a href="#">oliza pablo photo</a></h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="ptg-portfolio-item mb-100  p-relative wow tpfadeUp" data-wow-delay=".6s">
                                        <div className="ptg-portfolio-item-img text-center" data-tilt data-tilt-perspective="2000">
                                            <a href={portfolio6} className="ptg-portfilo">
                                                <img src={portfolio6} alt="pt2" />
                                            </a>
                                        </div>
                                        <div className="ptg-portfolio-item-info">
                                            <span className="ptg-portfolio-item-subtitle">Landscaping, Outdoor</span>
                                            <h3 className="ptg-portfolio-item-title"><a href="#">oliza pablo photo</a></h3>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                            {/* <div className="row">
                                <div className="ptg-rgp-btn-wrapper text-center wow tpfadeUp" data-wow-delay=".4s">
                                    <a href="portfolio-4.html" className="tp-grd-btn">load more
                                        <span className="ml-10">
                                            <i className="fal fa-plus"></i>
                                            <i className="fal fa-plus"></i>
                                        </span>
                                    </a>
                                </div>
                            </div> */}
                        </div>
                    </div>
                    {/* <div className="ptg-testimonial-area dark-bg pt-120 pb-120">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-8">
                                    <div className="section-title-wraper">
                                        <div className="tp-section">
                                            <span className="tp-section__subtitle mb-15 shadow-none text-rgb p-0 wow tpfadeUp" data-wow-delay=".4a">Testimonials</span>
                                            <h2
                                                className="tp-section__title text-non-rgb tp-rgb-border text-white text-uppercase mb-65 wow tpfadeUp" data-wow-delay=".5s">
                                                users <span> feedback</span>
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="ptg-testi-navigation text-end p-relative mb-80 wow tpfadeUp" data-wow-delay=".3s">
                                        <div className="ptg-testi-button-prev"><i className="fal fa-long-arrow-left"></i></div>
                                        <div className="ptg-testi-button-next"><i className="fal fa-long-arrow-right"></i></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="tp-ptg-testi-active swiper-container">
                                <div className="swiper-wrapper">
                                    <div className="ptg-testimonial swiper-slide wow tpfadeUp" data-wow-delay=".3s">
                                        <div className="ptg-testimonial-box p-relative">
                                            <div className="ptg-testimonial-box__ratting">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fal fa-star"></i>
                                            </div>
                                            <div className="ptg-testimonial-box__review">
                                                “ Our award-winning US-based experts are
                                                available to help when you get stuck anytime
                                                day or night here is ready. ”
                                            </div>
                                            <div className="ptg-testimonial-bg">
                                                <span><i className="flaticon-bubble-chat-1"></i></span>
                                            </div>
                                        </div>
                                        <div className="tp-testimonial-reviewer d-flex align-items-center ml-40">
                                            <div className="tesi-reviewer-avata mr-15">
                                                <img src="assets/img/testimonial/testi-avata-1.png" alt="" />
                                            </div>
                                            <div className="ptg-tesi-reviewer-name">
                                                <h4 className="mb-5 vogue-text-color">River Craft</h4>
                                                <span>Founder, Romdon Co.</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ptg-testimonial swiper-slide wow tpfadeUp" data-wow-delay=".3s">
                                        <div className="ptg-testimonial-box p-relative">
                                            <div className="ptg-testimonial-box__ratting">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fal fa-star"></i>
                                            </div>
                                            <div className="ptg-testimonial-box__review">
                                                “ Our award-winning US-based experts are
                                                available to help when you get stuck anytime
                                                day or night here is ready. ”
                                            </div>
                                            <div className="ptg-testimonial-bg">
                                                <span><i className="flaticon-bubble-chat-1"></i></span>
                                            </div>
                                        </div>
                                        <div className="tp-testimonial-reviewer d-flex align-items-center ml-40">
                                            <div className="tesi-reviewer-avata mr-15">
                                                <img src="assets/img/testimonial/testi-avata-3.png" alt="" />
                                            </div>
                                            <div className="ptg-tesi-reviewer-name">
                                                <h4 className="mb-5 vogue-text-color">Jayson Mahoney</h4>
                                                <span>Author, themepure Co.</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ptg-testimonial swiper-slide wow tpfadeUp" data-wow-delay=".3s">
                                        <div className="ptg-testimonial-box p-relative">
                                            <div className="ptg-testimonial-box__ratting">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fal fa-star"></i>
                                            </div>
                                            <div className="ptg-testimonial-box__review">
                                                “ Our award-winning US-based experts are
                                                available to help when you get stuck anytime
                                                day or night here is ready. ”
                                            </div>
                                            <div className="ptg-testimonial-bg">
                                                <span><i className="flaticon-bubble-chat-1"></i></span>
                                            </div>
                                        </div>
                                        <div className="tp-testimonial-reviewer d-flex align-items-center ml-40">
                                            <div className="tesi-reviewer-avata mr-15">
                                                <img src="assets/img/testimonial/testi-avata-4.png" alt="" />
                                            </div>
                                            <div className="ptg-tesi-reviewer-name">
                                                <h4 className="mb-5 vogue-text-color">Tushar N. Biswas </h4>
                                                <span>Leader, Fontend Co.</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ptg-brand-area dark-bg">
                        <div className="container">
                            <div className="tp-ptg-brand-slider dark-bg-2 pt-60 pb-60 pl-40 pr-40">
                                <div className="ptg-brand-slider-active swiper-container">
                                    <div className="swiper-wrapper">
                                        <div className="tp-ptg-brand-item swiper-slide">
                                            <img src="assets/img/brand/ptg-brand-1.png" alt="" />
                                        </div>
                                        <div className="tp-ptg-brand-item swiper-slide text-center">
                                            <img src="assets/img/brand/ptg-brand-2.png" alt="" />
                                        </div>
                                        <div className="tp-ptg-brand-item swiper-slide">
                                            <img src="assets/img/brand/ptg-brand-3.png" alt="" />
                                        </div>
                                        <div className="tp-ptg-brand-item swiper-slide">
                                            <img src="assets/img/brand/ptg-brand-2.png" alt="" />
                                        </div>
                                        <div className="tp-ptg-brand-item swiper-slide">
                                            <img src="assets/img/brand/ptg-brand-4.png" alt="" />
                                        </div>
                                        <div className="tp-ptg-brand-item swiper-slide">
                                            <img src="assets/img/brand/ptg-brand-3.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ptg-blog-area dark-bg pt-120 pb-90">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="section-title-wraper text-center">
                                        <div className="tp-section">
                                            <span className="tp-section__subtitle mb-15 shadow-none text-rgb p-0 wow tpfadeUp">Studio News</span>
                                            <h2
                                                className="tp-section__title text-non-rgb tp-rgb-border text-white text-uppercase mb-65 wow tpfadeUp" data-wow-delay=".4s">
                                                our blog & <span> insights</span>
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-4 col-lg-6">
                                    <div className="ptg-blog__item mb-30 wow tpfadeUp" data-wow-delay=".3s">
                                        <div className="ptg-blog__item-thumb w-img">
                                            <img src="assets/img/blog/ptg-blog-1.jpg" alt="" />
                                        </div>
                                        <div className="ptg-blog__item-content dark-bg-2">
                                            <div className="ptg-blog__item-meta">
                                                <span><a href="#"><b className="ptg-blog-cta">Software</b></a></span>
                                                <span><a href="#"> / <b> June 21, 2022</b></a> </span>
                                            </div>
                                            <h3 className="ptg-blog__item-title"><a href="blog-details.html"> the Technology His Improve
                                                    Business Today</a></h3>
                                            <a href="blog-details.html" className="ptg-blog-btn text-uppercase">Read More
                                                <span className="pl-10">
                                                    <i className="fal fa-long-arrow-right"></i>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-6">
                                    <div className="ptg-blog__item mb-30 wow tpfadeUp" data-wow-delay=".3s">
                                        <div className="ptg-blog__item-thumb w-img">
                                            <img src="assets/img/blog/ptg-blog-2.jpg" alt="" />
                                        </div>
                                        <div className="ptg-blog__item-content dark-bg-2">
                                            <div className="ptg-blog__item-meta">
                                                <span><a href="#"><b className="ptg-blog-cta">Software</b></a></span>
                                                <span><a href="#"> / <b> June 21, 2022</b></a> </span>
                                            </div>
                                            <h3 className="ptg-blog__item-title"><a href="blog-details.html"> the Technology His Improve
                                                    Business Today</a></h3>
                                            <a href="blog-details.html" className="ptg-blog-btn text-uppercase">Read More
                                                <span className="pl-10">
                                                    <i className="fal fa-long-arrow-right"></i>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-6">
                                    <div className="ptg-blog__item mb-30 wow tpfadeUp" data-wow-delay=".3s">
                                        <div className="ptg-blog__item-thumb w-img wow tpfadeUp" data-wow-delay=".4s">
                                            <img src="assets/img/blog/ptg-blog-3.jpg" alt="" />
                                        </div>
                                        <div className="ptg-blog__item-content dark-bg-2">
                                            <div className="ptg-blog__item-meta">
                                                <span><a href="#"><b className="ptg-blog-cta">Software</b></a></span>
                                                <span><a href="#"> / <b> June 21, 2022</b></a> </span>
                                            </div>
                                            <h3 className="ptg-blog__item-title"><a href="blog-details.html"> the Technology His Improve
                                                    Business Today</a></h3>
                                            <a href="blog-details.html" className="ptg-blog-btn text-uppercase">Read More
                                                <span className="pl-10">
                                                    <i className="fal fa-long-arrow-right"></i>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}

                </main>
                <footer>
                    <div className="bs-footer dark-bg ">
                        <div className="container">
                            <div className="ptg-footer__main pb-120 pt-120 tp-border-top-dark tp-border-bottom-dark text-center">
                                <div className="ptg-footer-logo mb-40">
                                    <a href="index.html"><img src={darkLogo} alt="" /></a>
                                </div>
                                <div className="ptg-footer-info">
                                    <span>NEED A PHOTOGRAPHER? SOMEONE WITH EXPERIENCE TO <br />
                                        COLLABORATE WITH?<a href="about-me.html"> WRITE ME!</a></span>
                                </div>
                                <div className="ptg-footer__top-social">
                                    <span> <a href="#"><i className="fab fa-facebook-f"></i></a></span>
                                    <span> <a href="#"><i className="fab fa-twitter"></i></a></span>
                                    <span> <a href="#"><i className="fab fa-behance"></i></a></span>
                                    <span> <a href="#"><i className="fab fa-youtube"></i></a></span>
                                </div>
                            </div>
                            <div className="tp-footer__bottom pt-25 pb-25">
                                <div className="row align-ptgems-center">
                                    <div className="col-md-8 col-12">
                                        <div className="tp-copyrigh-text text-center text-md-start ptg-footer-copyright">
                                            <span>Copyright & Design By <a href="#">@Theme Pure</a> - 2022</span>
                                        </div>
                                    </div>
                                    <div className="col-md-4 d-none d-md-block">
                                        <div className="tp-footer-menu ptg-footer-menu text-end">
                                            <ul>
                                                <li><a href="faq.html">FAQ</a> </li>
                                                <li><a href="about.html">Insights</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default plantilla1;