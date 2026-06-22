import TemplatemoLogo from "@/app/templates/plantilla2/assets/images/templatemo_logo.jpg";
import gallery1 from "@/app/templates/plantilla2/assets/images/gallery/1.jpg";
import gallery2 from "@/app/templates/plantilla2/assets/images/gallery/2.jpg";
import gallery3 from "@/app/templates/plantilla2/assets/images/gallery/3.jpg";
import gallery4 from "@/app/templates/plantilla2/assets/images/gallery/4.jpg";
import gallery5 from "@/app/templates/plantilla2/assets/images/gallery/5.jpg";
import gallery6 from "@/app/templates/plantilla2/assets/images/gallery/6.jpg";
import gallery7 from "@/app/templates/plantilla2/assets/images/gallery/7.jpg";
import gallery8 from "@/app/templates/plantilla2/assets/images/gallery/8.jpg";
import gallery9 from "@/app/templates/plantilla2/assets/images/gallery/9.jpg";
import gallery10 from "@/app/templates/plantilla2/assets/images/gallery/10.jpg";
import gallery11 from "@/app/templates/plantilla2/assets/images/gallery/11.jpg";
import gallery12 from "@/app/templates/plantilla2/assets/images/gallery/12.jpg";
import gallery13 from "@/app/templates/plantilla2/assets/images/gallery/13.jpg";
import gallery14 from "@/app/templates/plantilla2/assets/images/gallery/14.jpg";
import gallery15 from "@/app/templates/plantilla2/assets/images/gallery/15.jpg";
import gallery16 from "@/app/templates/plantilla2/assets/images/gallery/16.jpg";
import gallery17 from "@/app/templates/plantilla2/assets/images/gallery/17.jpg";
import gallery18 from "@/app/templates/plantilla2/assets/images/gallery/18.jpg";

import team1 from "@/app/templates/plantilla2/assets/images/team/1.jpg";
import team2 from "@/app/templates/plantilla2/assets/images/team/2.jpg";
import team3 from "@/app/templates/plantilla2/assets/images/team/3.jpg";
import team4 from "@/app/templates/plantilla2/assets/images/team/4.jpg";

import { useEffect, useState } from "react";

import "@/app/templates/plantilla2/assets/css/bootstrap.min.css";
import "@/app/templates/plantilla2/assets/css/font-awesome.min.css";
import "@/app/templates/plantilla2/assets/css/templatemo_misc.css";
import "@/app/templates/plantilla2/assets/css/templatemo_style.css";
// import "http://fonts.googleapis.com/css?family=Raleway:400,100,600";

{/* <link href="css/bootstrap.min.css" rel="stylesheet">
  <link href="css/font-awesome.min.css" rel="stylesheet">
  <link rel="stylesheet" href="css/templatemo_misc.css">
  <link href="css/templatemo_style.css" rel="stylesheet">
  <link href='http://fonts.googleapis.com/css?family=Raleway:400,100,600' rel='stylesheet' type='text/css'></link> */}

//   <script src="js/jquery-1.10.2.min.js"></script>
//   <script src="js/jquery.lightbox.js"></script>
//   <script src="js/templatemo_custom.js"></script>

const plantilla2 = () => {

    // El estado inicia en 'false' porque tu div originalmente tiene display: none
  const [isVisible, setIsVisible] = useState<boolean>(false);

  // Esta es tu nueva función showhide para React
  const showhide = (): void => {
    setIsVisible(!isVisible); // Invierte el valor actual (true -> false o viceversa)
  };


  useEffect(() => {
    const cargarScripts = async () => {
      const scripts = [
        "../plantilla2/js/jquery-1.10.2.min.js",
        "../plantilla2/js/jquery.lightbox.js",
        "../plantilla2/js/templatemo_custom.js",
        // Nota: ya no necesitas "templatemo_custom.js" porque ya lo programamos en React arriba
      ];

      for (const src of scripts) {
        await new Promise<void>((resolve, reject) => {
          // Verificar si el script ya existe para no duplicarlo
          if (document.querySelector(`script[src="${src}"]`)) {
            resolve();
            return;
          }
          const script = document.createElement('script');
          script.src = src;
          script.async = false; // Mantiene el orden de ejecución estricto
          script.onload = () => resolve();
          script.onerror = () => reject(new Error(`Error al cargar el script: ${src}`));
          document.body.appendChild(script);
        });
      }
    };

    cargarScripts().catch(err => console.error(err));

    // Opcional: Limpieza al desmontar el componente si es necesario
  }, []);
  
  return (
    <>
      <div className="site-header">
    <div className="main-navigation">
      <div className="responsive_menu">
        <ul>
          <li><a className="show-1 templatemo_home" href="#">Gallery</a></li>
          <li><a className="show-2 templatemo_page2" href="#">Our team</a></li>
          <li><a className="show-3 templatemo_page3" href="#">Services</a></li>
          <li><a className="show-5 templatemo_page5" href="#">Contact</a></li>
        </ul>
      </div>
      <div className="container">
        <div className="row templatemo_gallerygap">
          <div className="col-md-12 responsive-menu">
            <a href="#" className="menu-toggle-btn">
              <i className="fa fa-bars"></i>
            </a>
          </div> 
          <div className="col-md-3 col-sm-12">
            <a href="#"><img src={TemplatemoLogo} alt="Polygon HTML5 Template" /></a>
          </div>
          <div className="col-md-9 main_menu">
            <ul>
              <li><a className="show-1 templatemo_home" href="#">
                  <span className="fa fa-camera"></span>
                  Gallery</a></li>
              {/* <li><a className="show-2 templatemo_page2" href="#">
                  <span className="fa fa-users"></span>
                  Our team</a></li>
              <li><a className="show-3 templatemo_page3" href="#">
                  <span className="fa fa-cogs"></span>
                  Services</a></li>
              <li><a className="show-5 templatemo_page5" href="#">
                  <span className="fa fa-envelope"></span>
                  Contact</a></li> */}
            </ul>
          </div> 
        </div> 
      </div> 
    </div> 
  </div> 
  <div id="menu-container">
    <div className="content homepage" id="menu-1">
      <div className="container">
        <div className="row templatemorow">
          <div className="hex col-sm-6">
            <div>
              <div className="hexagon hexagon2 gallery-item">
                <div className="hexagon-in1">
                  <div className="hexagon-in2" style={{ backgroundImage: `url(${gallery1})` }}>
                    <div className="overlay">
                      <a href="images/gallery/1.jpg" data-rel="lightbox" className="fa fa-expand"></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hex col-sm-6">
            <div>
              <div className="hexagon hexagon2 gallery-item">
                <div className="hexagon-in1">
                  <div className="hexagon-in2" style={{ backgroundImage: `url(${gallery2})` }}>
                    <div className="overlay">
                      <a href="images/gallery/2.jpg" data-rel="lightbox" className="fa fa-expand"></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hex col-sm-6  templatemo-hex-top2">
            <div>
              <div className="hexagon hexagon2 gallery-item">
                <div className="hexagon-in1">
                  <div className="hexagon-in2" style={{ backgroundImage: `url(${gallery3})` }}>
                    <div className="overlay">
                      <a href="images/gallery/3.jpg" data-rel="lightbox" className="fa fa-expand"></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hex col-sm-6  templatemo-hex-top3">
            <div>
              <div className="hexagon hexagon2 gallery-item">
                <div className="hexagon-in1">
                  <div className="hexagon-in2" style={{ backgroundImage: `url(${gallery4})` }}>
                    <div className="overlay">
                      <a href="images/gallery/4.jpg" data-rel="lightbox" className="fa fa-expand"></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hex col-sm-6  templatemo-hex-top3">
            <div>
              <div className="hexagon hexagon2 gallery-item">
                <div className="hexagon-in1">
                  <div className="hexagon-in2" style={{ backgroundImage: `url(${gallery5})` }}>
                    <div className="overlay">
                      <a href="images/gallery/5.jpg" data-rel="lightbox" className="fa fa-expand"></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hex col-sm-6 hex-offset templatemo-hex-top1 templatemo-hex-top2">
            <div>
              <div className="hexagon hexagon2 gallery-item">
                <div className="hexagon-in1">
                  <div className="hexagon-in2" style={{ backgroundImage: `url(${gallery6})` }}>
                    <div className="overlay">
                      <a href="images/gallery/6.jpg" data-rel="lightbox" className="fa fa-expand"></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hex col-sm-6 templatemo-hex-top1 templatemo-hex-top3">
            <div>
              <div className="hexagon hexagon2 gallery-item">
                <div className="hexagon-in1">
                  <div className="hexagon-in2" style={{ backgroundImage: `url(${gallery7})` }}>
                    <div className="overlay">
                      <a href="images/gallery/7.jpg" data-rel="lightbox" className="fa fa-expand"></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hex col-sm-6 templatemo-hex-top1  templatemo-hex-top3">
            <div>
              <div className="hexagon hexagon2 gallery-item">
                <div className="hexagon-in1">
                  <div className="hexagon-in2" style={{ backgroundImage: `url(${gallery8})` }}>
                    <div className="overlay">
                      <a href="images/gallery/8.jpg" data-rel="lightbox" className="fa fa-expand"></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hex col-sm-6 templatemo-hex-top1  templatemo-hex-top2">
            <div>
              <div className="hexagon hexagon2 gallery-item">
                <div className="hexagon-in1">
                  <div className="hexagon-in2" style={{ backgroundImage: `url(${gallery9})` }}>
                    <div className="overlay">
                      <a href="images/gallery/9.jpg" data-rel="lightbox" className="fa fa-expand"></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="newpost" style={{ display: isVisible ? 'block' : 'none' }} className="container answer_list templatemo_gallerytop">
        <div className="row templatemorow">
          <div className="hex col-sm-6">
            <div>
              <div className="hexagon hexagon2 gallery-item">
                <div className="hexagon-in1">
                  <div className="hexagon-in2" style={{ backgroundImage: `url(${gallery10})` }}>
                    <div className="overlay">
                      <a href="images/gallery/10.jpg" data-rel="lightbox" className="fa fa-expand"></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hex col-sm-6">
            <div>
              <div className="hexagon hexagon2 gallery-item">
                <div className="hexagon-in1">
                  <div className="hexagon-in2" style={{ backgroundImage: `url(${gallery11})` }}>
                    <div className="overlay">
                      <a href="images/gallery/11.jpg" data-rel="lightbox" className="fa fa-expand"></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hex col-sm-6  templatemo-hex-top2">
            <div>
              <div className="hexagon hexagon2 gallery-item">
                <div className="hexagon-in1">
                  <div className="hexagon-in2" style={{ backgroundImage: `url(${gallery12})` }}>
                    <div className="overlay">
                      <a href="images/gallery/12.jpg" data-rel="lightbox" className="fa fa-expand"></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hex col-sm-6  templatemo-hex-top3">
            <div>
              <div className="hexagon hexagon2 gallery-item">
                <div className="hexagon-in1">
                  <div className="hexagon-in2" style={{ backgroundImage: `url(${gallery13})` }}>
                    <div className="overlay">
                      <a href="images/gallery/13.jpg" data-rel="lightbox" className="fa fa-expand"></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hex col-sm-6  templatemo-hex-top3">
            <div>
              <div className="hexagon hexagon2 gallery-item">
                <div className="hexagon-in1">
                  <div className="hexagon-in2" style={{ backgroundImage: `url(${gallery14})` }}>
                    <div className="overlay">
                      <a href="images/gallery/14.jpg" data-rel="lightbox" className="fa fa-expand"></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hex col-sm-6 hex-offset templatemo-hex-top1 templatemo-hex-top2">
            <div>
              <div className="hexagon hexagon2 gallery-item">
                <div className="hexagon-in1">
                  <div className="hexagon-in2" style={{ backgroundImage: `url(${gallery15})` }}>
                    <div className="overlay">
                      <a href="images/gallery/15.jpg" data-rel="lightbox" className="fa fa-expand"></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hex col-sm-6 templatemo-hex-top1 templatemo-hex-top3">
            <div>
              <div className="hexagon hexagon2 gallery-item">
                <div className="hexagon-in1">
                  <div className="hexagon-in2" style={{ backgroundImage: `url(${gallery16})` }}>
                    <div className="overlay">
                      <a href="images/gallery/16.jpg" data-rel="lightbox" className="fa fa-expand"></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hex col-sm-6 templatemo-hex-top1  templatemo-hex-top3">
            <div>
              <div className="hexagon hexagon2 gallery-item">
                <div className="hexagon-in1">
                  <div className="hexagon-in2" style={{ backgroundImage: `url(${gallery17})` }}>
                    <div className="overlay">
                      <a href="images/gallery/17.jpg" data-rel="lightbox" className="fa fa-expand"></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hex col-sm-6 templatemo-hex-top1  templatemo-hex-top2">
            <div>
              <div className="hexagon hexagon2 gallery-item">
                <div className="hexagon-in1">
                  <div className="hexagon-in2" style={{ backgroundImage: `url(${gallery18})` }}>
                    <div className="overlay">
                      <a href="images/gallery/18.jpg" data-rel="lightbox" className="fa fa-expand"></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="templatemo_loadmore">
            <button className="gallery_more" id="button" onClick={showhide}>{isVisible ? "Load Less" : "Load More"}</button>
          </div>
        </div>
      </div>
    </div>
    <div className="content team" id="menu-2">
      <div className="templatemo_ourteam">
        <div className="container templatemo_hexteam">
          <div className="row">
            <div className="col-md-3 col-sm-4">
              <div className="hexagon hexagonteam gallery-item">
                <div className="hexagon-in1">
                  <div className="hexagon-in2" style= {{ backgroundImage: `url(${team1})` }}>
                    <div className="overlay templatemo_overlay1">
                      <a href="#fb">
                        <div className="smallhexagon">
                          <span className="fa fa-facebook"></span>
                        </div>
                      </a>

                      <a href="#tw">
                        <div className="smallhexagon">
                          <span className="fa fa-twitter"></span>
                        </div>
                      </a>

                      <a href="#ln">
                        <div className="smallhexagon">
                          <span className="fa fa-linkedin"></span>
                        </div>
                      </a>

                      <a href="#rs">
                        <div className="smallhexagon">
                          <span className="fa fa-rss"></span>
                        </div>
                      </a>
                    </div>
                    <div className="clear"></div>
                    <div className="overlay templatemo_overlaytxt">Phasellus interdum</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-8 templatemo_servicetxt">
              <h2>Free Template</h2>
              <p>Polygon is free HTML5 template by <span className="blue">template</span><span className="green">mo</span> that
                can be used for any purpose. You can remove any credit link. Please tell your friends about our website.
                Credit goes to <a rel="nofollow" href="http://unsplash.com">Unsplash</a> for images used in this
                template. Feel free to visit <a href="https://fb.com/templatemo" target="_parent">templatemo page</a> on
                Facebook.</p>
            </div>
            <div className="templatemo_servicecol2">
              <div className="col-md-3 col-sm-4">
                <div className="hexagon hexagonteam gallery-item">
                  <div className="hexagon-in1">
                    <div className="hexagon-in2" style={{ backgroundImage: `url(${team2})` }}>
                      <div className="overlay templatemo_overlay1">
                        <a href="#fb">
                          <div className="smallhexagon">
                            <span className="fa fa-facebook"></span>
                          </div>
                        </a>
                        <a href="#tw">
                          <div className="smallhexagon">
                            <span className="fa fa-twitter"></span>
                          </div>
                        </a>
                        <a href="#ln">
                          <div className="smallhexagon">
                            <span className="fa fa-linkedin"></span>
                          </div>
                        </a>
                        <a href="#rs">
                          <div className="smallhexagon">
                            <span className="fa fa-rss"></span>
                          </div>
                        </a>
                      </div>

                      <div className="clear"></div>
                      <div className="overlay templatemo_overlaytxt">Cras interdum accumsan diam</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-8 templatemo_servicetxt">
                <h2>Responsive Design</h2>
                <p>Please take a look at <a rel="nofollow" href="https://www.toocss.com">Too CSS</a> to see the
                  collection of free website templates for you. This is free CSS website template fully compatible with
                  tablets and mobile phones. Mauris eget neque at sapien faucibus egestas vel vitae mi. Maecenas commodo
                  augue risus, sed placerat neque feugiat vel.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="clear"></div>
        <div className="container templatemo_hexteam s_top">
          <div className="row">
            <div className="col-md-3 col-sm-4">
              <div className="hexagon hexagonteam gallery-item">
                <div className="hexagon-in1">
                  <div className="hexagon-in2" style={{ backgroundImage: `url(${team3})` }}>
                    <div className="overlay templatemo_overlay1">
                      <a href="#fb">
                        <div className="smallhexagon">
                          <span className="fa fa-facebook"></span>
                        </div>
                      </a>
                      <a href="#tw">
                        <div className="smallhexagon">
                          <span className="fa fa-twitter"></span>
                        </div>
                      </a>
                      <a href="#ln">
                        <div className="smallhexagon">
                          <span className="fa fa-linkedin"></span>
                        </div>
                      </a>
                      <a href="#rs">
                        <div className="smallhexagon">
                          <span className="fa fa-rss"></span>
                        </div>
                      </a>
                    </div>

                    <div className="clear"></div>
                    <div className="overlay templatemo_overlaytxt">Morbi pulvinar</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-8 templatemo_servicetxt">
              <h2>Mobile Ready</h2>
              <p>Sed laoreet, enim quis euismod egestas, risus tortor tincidunt lacus, in iaculis mauris lectus at
                augue. Donec luctus nibh nec ullamcorper feugiat. Phasellus felis urna, lobortis vitae lacus sit amet,
                tristique consectetur nibh.</p>
            </div>
            <div className="templatemo_servicecol2">
              <div className="col-md-3 col-sm-4">
                <div className="hexagon hexagonteam gallery-item">
                  <div className="hexagon-in1">
                    <div className="hexagon-in2" style={{ backgroundImage: `url(${team4})` }}>
                      <div className="overlay templatemo_overlay1">
                        <a href="#fb">
                          <div className="smallhexagon">
                            <span className="fa fa-facebook"></span>
                          </div>
                        </a>
                        <a href="#tw">
                          <div className="smallhexagon">
                            <span className="fa fa-twitter"></span>
                          </div>
                        </a>
                        <a href="#ln">
                          <div className="smallhexagon">
                            <span className="fa fa-linkedin"></span>
                          </div>
                        </a>
                        <a href="#rs">
                          <div className="smallhexagon">
                            <span className="fa fa-rss"></span>
                          </div>
                        </a>
                      </div>

                      <div className="clear"></div>
                      <div className="overlay templatemo_overlaytxt">Sed nonummy</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-8 templatemo_servicetxt">
                <h2>HTML5 CSS3</h2>
                <p>Phasellus sodales magna orci, id scelerisque lectus faucibus a. Vivamus varius tincidunt sem. Etiam
                  ultricies orci sit amet sem egestas varius vitae at lacus. Nunc blandit elit in mauris semper, id
                  iaculis felis condimentum.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
    <div className="clear"></div>
    <div className="content services" id="menu-3">
      <div className="container">
        <div className="row templatemo_servicerow">
          <div className="templatemo_hexservices col-sm-6">
            <div className="blok text-center">
              <div className="hexagon-a">
                <a className="hlinktop" href="#">
                  <div className="hexa-a">
                    <div className="hcontainer-a">
                      <div className="vertical-align-a">
                        <span className="texts-a"><i className="fa fa-bell"></i></span>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="hexagonservices">
                <a className="hlinkbott" href="#">
                  <div className="hexa">
                    <div className="hcontainer">
                      <div className="vertical-align">
                        <span className="texts"></span>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="templatemo_servicetext">
              <h3>Etiam vulputate</h3>
              <p>Vestibulum diam lorem, aliquet et sagittis ac, facilisis nec massa. Suspendisse sagittis leo diam, sed
                dapibus eros vehicula eu. Aenean nulla magna, gravida at dui in, fringilla vestibulum massa.</p>
            </div>
          </div>
          <div className="templatemo_hexservices col-sm-6">
            <div className="blok text-center">
              <div className="hexagon-a">
                <a className="hlinktop" href="#">
                  <div className="hexa-a">
                    <div className="hcontainer-a">
                      <div className="vertical-align-a">
                        <span className="texts-a"><i className="fa fa-briefcase"></i></span>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="hexagonservices">
                <a className="hlinkbott" href="#">
                  <div className="hexa">
                    <div className="hcontainer">
                      <div className="vertical-align">
                        <span className="texts"></span>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="templatemo_servicetext">
              <h3>Aliquam faucibus</h3>
              <p>Vivamus a purus vel ante fermentum bibendum. Sed laoreet, enim quis euismod egestas, risus tortor
                tincidunt lacus, in iaculis mauris lectus at augue. Donec luctus nibh nec ullamcorper feugiat.</p>
            </div>
          </div>
          <div className="templatemo_hexservices col-sm-6">
            <div className="blok text-center">
              <div className="hexagon-a">
                <a className="hlinktop" href="#">
                  <div className="hexa-a">
                    <div className="hcontainer-a">
                      <div className="vertical-align-a">
                        <span className="texts-a"><i className="fa fa-mobile"></i></span>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="hexagonservices">
                <a className="hlinkbott" href="#">
                  <div className="hexa">
                    <div className="hcontainer">
                      <div className="vertical-align">
                        <span className="texts"></span>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="templatemo_servicetext">
              <h3>Donec sagittis</h3>
              <p>Phasellus sodales magna orci, id scelerisque lectus faucibus a. Vivamus varius tincidunt sem. Etiam
                ultricies orci sit amet sem egestas varius vitae at lacus. Nunc blandit elit in mauris semper, id
                iaculis felis condimentum.</p>
            </div>
          </div>
          <div className="templatemo_hexservices col-sm-6">
            <div className="blok text-center">
              <div className="hexagon-a">
                <a className="hlinktop" href="#">
                  <div className="hexa-a">
                    <div className="hcontainer-a">
                      <div className="vertical-align-a">
                        <span className="texts-a"><i className="fa fa-trophy"></i></span>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="hexagonservices">
                <a className="hlinkbott" href="#">
                  <div className="hexa">
                    <div className="hcontainer">
                      <div className="vertical-align">
                        <span className="texts"></span>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="templatemo_servicetext">
              <h3>Integer tempus</h3>
              <p>Maecenas porttitor erat et enim dapibus, sit amet accumsan velit tincidunt. Etiam sapien urna, suscipit
                ut purus ac, convallis pulvinar tellus. In eu neque purus. Donec cursus dictum pulvinar.</p>
            </div>
          </div>
          <div className="templatemo_hexservices col-sm-6">
            <div className="blok text-center">
              <div className="hexagon-a">
                <a className="hlinktop" href="#">
                  <div className="hexa-a">
                    <div className="hcontainer-a">
                      <div className="vertical-align-a">
                        <span className="texts-a"><i className="fa fa-thumb-tack"></i></span>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="hexagonservices">
                <a className="hlinkbott" href="#">
                  <div className="hexa">
                    <div className="hcontainer">
                      <div className="vertical-align">
                        <span className="texts"></span>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="templatemo_servicetext">
              <h3>Aliquam pellentesque</h3>
              <p>Nam auctor elementum dolor. Donec euismod, justo sed convallis blandit, ipsum erat mattis lectus, vel
                pharetra neque enim tristique risus. Ut consequat nisi vel justo. Curabitur in orci vel enim congue
                cursus.</p>
            </div>
          </div>

        </div>
      </div>
    </div>
    <div className="content contact" id="menu-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-12">
            <div className="templatemo_contactmap">
              <div id="templatemo_map"></div>
              <img src="images/templatemo_contactiframe.png" alt="contact map" />
            </div>
          </div>
          <div className="col-md-3 col-sm-12 leftalign">
            <div className="templatemo_contacttitle">Contact Information</div>
            <div className="clear"></div>
            <p>Integer eu neque sed mi fringilla pellentesque a eget leo. Duis ornare diam lorem, sit amet tempor mauris
              fringilla in. Etiam semper tempus augue, at vehicula metus. Nam vestibulum tortor nec congue ornare.</p>
            <div className="templatemo_address">
              <ul>
                <li className="left fa fa-map-marker"></li>
                <li className="right">Nulla ut tellus, sit amet urna, <br />scelerisque pretium 10960</li>
                <li className="clear"></li>
                <li className="left fa fa-phone"></li>
                <li className="right">010-020-0770</li>
                <li className="clear"></li>
                <li className="left fa fa-envelope"></li>
                <li className="right">info@company.com</li>
              </ul>
            </div>
          </div>
          <div className="col-md-5 col-sm-12">
            <form role="form">
              <div className="templatemo_form">
                <input name="fullname" type="text" className="form-control" id="fullname" placeholder="Your Name"
                  maxLength={40} />
              </div>
              <div className="templatemo_form">
                <input name="email" type="text" className="form-control" id="email" placeholder="Your Email" maxLength={40} />
              </div>
              <div className="templatemo_form">
                <input name="subject" type="text" className="form-control" id="subject" placeholder="Subject"
                  maxLength={40} />
              </div>
              <div className="templatemo_form">
                <textarea name="message" rows={10} className="form-control" id="message" placeholder="Message"></textarea>
              </div>
              <div className="templatemo_form"><button type="button" className="btn btn-primary">Send Message</button></div>
            </form>
          </div>
        </div>

      </div>
    </div>
  </div>
  <div className="templatemo_footer">
    <div className="container">
      <div className="row">
        <div className="col-md-9 col-sm-12">
          <span>Copyright &copy; 2014 Company Name | Design: TemplateMo</span>
        </div>
        <div className="col-md-3 col-sm-12 templatemo_rfooter">
          <a href="#">
            <div className="hex_footer">
              <span className="fa fa-facebook"></span>
            </div>
          </a>
          <a href="#">
            <div className="hex_footer">
              <span className="fa fa-twitter"></span>
            </div>
          </a>
          <a href="#">
            <div className="hex_footer">
              <span className="fa fa-linkedin"></span>
            </div>
          </a>
          <a href="#">
            <div className="hex_footer">
              <span className="fa fa-rss"></span>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
    
    </>
  )
}

export default plantilla2
