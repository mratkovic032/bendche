<?php

/* Main/home.html */
class __TwigTemplate_83e77e0816fdf851bf994ee816062b18591f8c002fbb2f8b64f7bd0a79ceadc7 extends Twig_Template
{
    private $source;

    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        // line 1
        $this->parent = $this->loadTemplate("_global/index.html", "Main/home.html", 1);
        $this->blocks = array(
            'main' => array($this, 'block_main'),
        );
    }

    protected function doGetParent(array $context)
    {
        return "_global/index.html";
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $this->parent->display($context, array_merge($this->blocks, $blocks));
    }

    // line 3
    public function block_main($context, array $blocks = array())
    {
        // line 4
        echo "
<nav class=\"navbar navbar-inverse navbar-fixed-top\">
\t<div class=\"container-fluid navbar-wrapper\">
\t\t<div class=\"navbar-header wow fadeIn\" data-wow-duration=\"1.5s\">
\t\t\t<button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">
\t\t\t\t<span class=\"icon-bar\"></span>
\t\t\t\t<span class=\"icon-bar\"></span>
\t\t\t\t<span class=\"icon-bar\"></span>
\t\t\t</button>                    
\t\t\t<!-- <a class=\"navbar-brand\" id=\"small-logo-brand\" href=\"#myPage\">bend che</a> -->
\t\t\t<a class=\"navbar-brand\" id=\"big-logo-brand\" href=\"#myPage\"><img class=\"img-circle img-responsive\" src=\"";
        // line 14
        echo twig_escape_filter($this->env, ($context["BASE"] ?? null), "html", null, true);
        echo "assets/img/title_logo.png\" alt=\"Logo\" /></a>                      
\t\t</div>
\t\t<div class=\"collapse navbar-collapse\" id=\"myNavbar\">
\t\t\t<ul class=\"nav navbar-nav navbar-right\">
\t\t\t\t<li class=\"wow fadeInUp\" data-wow-duration=\"1.6s\"><a href=\"#myPage\" class=\"active\">početna</a></li>
\t\t\t\t<li class=\"wow fadeInUp\" data-wow-duration=\"1.4s\"><a href=\"#events\">nastupi</a></li>
\t\t\t\t<li class=\"wow fadeInUp\" data-wow-duration=\"1.2s\"><a href=\"#band\">bend</a></li>
\t\t\t\t<li class=\"wow fadeInUp\" data-wow-duration=\"1s\"><a href=\"#contact\">kontakt</a></li>
\t\t\t</ul>
\t\t</div>                
\t</div>
</nav>

<!-- landing img -->
<div id=\"landing-wrapper\" class=\"container-fluid\">
    <div class=\"row\">

        <div id=\"veljko-wrapper\" class=\"col-lg-3 landing-img-wrapper wow fadeIn\" data-wow-delay=\"1.6s\" data-wow-duration=\"2s\">
            <img id=\"veljko\" class=\"landing-img\" src=\"";
        // line 32
        echo twig_escape_filter($this->env, ($context["BASE"] ?? null), "html", null, true);
        echo "assets/img/landing-img/veljko.png\" alt=\"Veljko's landing picture\">
            <div id=\"veljko-card-wrapper\" class=\"card-wrapper\">
                <div id=\"veljko-card\" class=\"card card-left\">
                    <div class=\"top-section\">
                        <img src=\"";
        // line 36
        echo twig_escape_filter($this->env, ($context["BASE"] ?? null), "html", null, true);
        echo "assets/img/profile-card/veljko-profile.png\" alt=\"Veljko's profile card picture\" />
                        <div class=\"name\">
                            Veljko<br>
                            <span>Janković</span>
                        </div>
                    </div>
                    <div class=\"info-section\">
                        <p class=\"info-section-headers\">Biografija</p>
                        <p class=\"about-text\">Jedini živi primerak homo sapiensa koji radi u privrednom sudu kao pripravnik, a ujedno predstavlja i glavni vokal benda. Puka je suprotnost dosadne i suve materije sa državnih fakulteta, pa je zbog te energije i često polaskan pitanjem: `Jesi ti bre na nekim drogama?`. Ovakva polimerizacija i nemoguć spoj, bendu daju glavnu udarnu vest. Diplomirao na Pravnom fakultetu u Beogradu 2017. godine, muzikom se bavi od svoje dvanaeste godine, zavrsio je i osnovnu muzičku skolu 2015. godine.</p>
                        <div class=\"social-media\">
                            <a href=\"https://www.facebook.com/Wex93\" target=\"_blank\" class=\"fab fa-facebook\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Facebook\"></a>
                            <a href=\"https://www.instagram.com/veljoslav\" target=\"_blank\" class=\"fab fa-instagram\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Instagram\"></a>
                            <a href=\"tel:+381644102992\" target=\"_blank\" class=\"fab fa-whatsapp\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"WhatsApp\"></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div id=\"pedja-wrapper\" class=\"col-lg-3 landing-img-wrapper wow fadeIn\" data-wow-delay=\"1.6s\" data-wow-duration=\"2s\">            
            <img id=\"pedja\" class=\"landing-img\" src=\"";
        // line 56
        echo twig_escape_filter($this->env, ($context["BASE"] ?? null), "html", null, true);
        echo "assets/img/landing-img/pedja.png\" alt=\"Pedja's landing picture\">
            <div id=\"pedja-card-wrapper\" class=\"card-wrapper\">
                <div id=\"pedja-card\" class=\"card card-left\">
                    <div class=\"top-section\">
                        <img src=\"";
        // line 60
        echo twig_escape_filter($this->env, ($context["BASE"] ?? null), "html", null, true);
        echo "assets/img/profile-card/pedja-profile.png\" alt=\"Pedja's profile card picture\" />
                        <div class=\"name\">
                            Predrag<br>
                            <span>Avramović</span>
                        </div>
                    </div>
                    <div class=\"info-section\">
                        <p class=\"info-section-headers\">Biografija</p>
                        <p class=\"about-text\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>                        
                        <div class=\"social-media\">
                            <a href=\"https://www.facebook.com/PedjaAvramovic\" target=\"_blank\" class=\"fab fa-facebook\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Facebook\"></a>
                            <a href=\"https://www.instagram.com/pedjabasista\" target=\"_blank\" class=\"fab fa-instagram\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Instagram\"></a>
                            <a href=\"tel:+381694202186\" target=\"_blank\" class=\"fab fa-whatsapp\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"WhatsApp\"></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div id=\"pavle-wrapper\" class=\"col-lg-3 landing-img-wrapper wow fadeIn\" data-wow-delay=\"1.8s\" data-wow-duration=\"2s\">
            <img id=\"pavle\" class=\"landing-img\" src=\"";
        // line 80
        echo twig_escape_filter($this->env, ($context["BASE"] ?? null), "html", null, true);
        echo "assets/img/landing-img/pavle.png\" alt=\"Pavle's landing picture\">
            <div id=\"pavle-card-wrapper\" class=\"card-wrapper\">
                <div id=\"pavle-card\" class=\"card card-right\">
                    <div class=\"top-section\">
                        <img src=\"";
        // line 84
        echo twig_escape_filter($this->env, ($context["BASE"] ?? null), "html", null, true);
        echo "assets/img/profile-card/pavle-profile.png\" alt=\"Pavle's profile card picture\" />
                        <div class=\"name\">
                            Pavle<br>
                            <span>Djurić</span>
                        </div>
                    </div>
                    <div class=\"info-section\">
                        <p class=\"info-section-headers\">Biografija</p>
                        <p class=\"about-text\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        <div class=\"social-media\">
                            <a href=\"https://www.facebook.com/pajadj\" target=\"_blank\" class=\"fab fa-facebook\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Facebook\"></a>
                            <a href=\"https://www.instagram.com/dzastinkejs\" target=\"_blank\" class=\"fab fa-instagram\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Instagram\"></a>
                            <a href=\"tel:+38166422329\" target=\"_blank\" class=\"fab fa-whatsapp\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"WhatsApp\"></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div id=\"stefano-wrapper\" class=\"col-lg-3 landing-img-wrapper wow fadeIn\" data-wow-delay=\"1.9s\" data-wow-duration=\"2s\">
            <img id=\"stefano\" class=\"landing-img\" src=\"";
        // line 104
        echo twig_escape_filter($this->env, ($context["BASE"] ?? null), "html", null, true);
        echo "assets/img/landing-img/stefano.png\" alt=\"Stefano's landing picture\">
            <div id=\"stefano-card-wrapper\" class=\"card-wrapper\">
                <div id=\"stefano-card\" class=\"card card-right\">
                    <div class=\"top-section\">
                        <img src=\"";
        // line 108
        echo twig_escape_filter($this->env, ($context["BASE"] ?? null), "html", null, true);
        echo "assets/img/profile-card/stefano-profile.png\" alt=\"Stefano's profile card picture\" />
                        <div class=\"name\">
                            Nikola<br>
                            <span>Stefanović</span>
                        </div>
                    </div>
                    <div class=\"info-section\">
                        <p class=\"info-section-headers\">Biografija</p>
                        <p class=\"about-text\">Kahonista benda ili na maternjem `onaj što lupa u kutiju`. Rođen u Čačku 1993. godine u jeku sankcija međunarodne zajednice protiv SR Jugoslavije, što je najverovatnije uzrok njegove neizmerne ljubavi prema domaćim konditorskim proizvodima. Vukova diploma u osnovnoj školi, obična diploma u Gimnaziji i još uvek bez željene diplome Saobraćajnog fakulteta. Umesto da zagreje stolicu, zagrejao je kahon a time i atmosferu na svakoj bendchetovoj svirci.</p>
                        <div class=\"social-media\">
                            <a href=\"https://www.instagram.com/_fanostefano_\" target=\"_blank\" class=\"fab fa-instagram\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Instagram\"></a>
                            <a href=\"tel:+381645884937\" target=\"_blank\" class=\"fab fa-whatsapp\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"WhatsApp\"></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</div>
<!-- END landing img -->

<!-- events -->
<p class=\"events-rotated-text\">nastupi</p>
<div id=\"events\">
    <div class=\"container\">
        <div class=\"row\">
            <div class=\"events-wrapper wow fadeIn\" data-wow-delay=\".5s\" data-wow-duration=\"0.5s\">
                <div id=\"event1\" class=\"col-lg-12 the-event wow fadeIn\" data-wow-delay=\"1.1s\" data-wow-duration=\"0.6s\">
                    <div class=\"row\">
                        <div class=\"col-lg-2 lokal-img-wrapper\">
                            <img class=\"lokal-img\" src=\"";
        // line 139
        echo twig_escape_filter($this->env, ($context["BASE"] ?? null), "html", null, true);
        echo "assets/img/lokali-img/tramvaj.jpg\" alt=\"\">
                        </div>
                        <div class=\"col-lg-10 lokal-info\">
                            <p class=\"lokal-name\">Tramvaj Pub</p>
                            <p class=\"lokal-address\">Ruzveltova 2, Beograd, Srbija</p>
                            <p class=\"lokal-small-desc\">U utorak tvistujemo u dragom nam Tramvaj Pub-u zajedno sa Sarom Novcic!</p>
                            <p class=\"lokal-date\"><i class=\"far fa-calendar-alt\"></i> &nbsp;Maj 31, 2019</p>
                            <button id=\"event1-button\" class=\"event-more-info\">više informacija</button>
                        </div>
                        <div class=\"col-lg-12 lokal-more-info\">
                            <p class=\"lokal-sub-title\">O lokalu...</p>
                            <p>Nalazi se veoma dobroj i pristupacnoj lokaciji do koje je lako doci gde god da ste u Beogradu. Tacnije smesten je kod Vukovog spomenika, preko puta Masinskog fakulteta. Dobro poznat pab sa velikim izborom piva i odlicnik svirkama. Nalazi se veoma dobroj i pristupacnoj lokaciji do koje je lako doci gde god da ste u Beogradu. Tacnije smesten je kod Vukovog spomenika, preko puta Masinskog fakulteta. Dobro poznat pab sa velikim izborom piva i odlicnik svirkama. Nalazi se veoma dobroj i pristupacnoj lokaciji do koje je lako doci gde god da ste u Beogradu. Tacnije smesten je kod Vukovog spomenika, preko puta Masinskog fakulteta. Dobro poznat pab sa velikim izborom piva i odlicnik svirkama.</p>
                            <p class=\"lokal-sub-title\">Kontakt lokala i korisni linkovi:</p>
                            <a href=\"tel:+381 65 872 68 25\" class=\"lokal-contact\">+381 65 872 68 25</a><br>
                            <a href=\"mailto:kontakt@tramvaj.rs\" class=\"lokal-contact\">kontakt@tramvaj.rs</a><br><br>
                            <a href=\"https://www.facebook.com/tramvajpub/\" target=\"_blank\" class=\"lokal-socials\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Facebook\"><i class=\"fab fa-facebook-square\"></i></a>
                            <a href=\"https://www.instagram.com/tramvaj_pub/\" target=\"_blank\" class=\"lokal-socials\"><i class=\"fab fa-instagram\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Instagram\"></i></a>
                            <a href=\"https://twitter.com/Tramvaj_pub\" target=\"_blank\" class=\"lokal-socials\"><i class=\"fab fa-twitter-square\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Twitter\"></i></a>
                            <p class=\"lokal-sub-title\" id=\"lokal-sub-title-map\">Mapa:</p>
                        </div>                       
                    </div>
                </div>
                <div id=\"event2\" class=\"col-lg-12 the-event wow fadeIn\" data-wow-delay=\"1.3s\" data-wow-duration=\"0.6s\">
                    <div class=\"row\">
                        <div class=\"col-lg-2 lokal-img-wrapper\">
                            <img class=\"lokal-img\" src=\"";
        // line 164
        echo twig_escape_filter($this->env, ($context["BASE"] ?? null), "html", null, true);
        echo "assets/img/lokali-img/vronski.jpg\" alt=\"\">
                        </div>
                        <div class=\"col-lg-10 lokal-info\">
                            <p class=\"lokal-name\">Vrosnki Cafe & Vin</p>
                            <p class=\"lokal-address\">Internacionalnih brigada 22, Beograd, Srbija</p>
                            <p class=\"lokal-small-desc\">U cetvrtak se vidimo po prvi put u Vronski Cafe & Vin!</p>
                            <p class=\"lokal-date\"><i class=\"far fa-calendar-alt\"></i> &nbsp;Maj 31, 2019</p>
                            <button id=\"event2-button\" class=\"event-more-info\">više informacija</button>
                        </div>
                        <div class=\"col-lg-12 lokal-more-info\">
                            <p class=\"lokal-sub-title\">O lokalu...</p>
                            <p>Nalazi se veoma dobroj i pristupacnoj lokaciji do koje je lako doci gde god da ste u Beogradu. Tacnije smesten je kod Vukovog spomenika, preko puta Masinskog fakulteta. Dobro poznat pab sa velikim izborom piva i odlicnik svirkama. Nalazi se veoma dobroj i pristupacnoj lokaciji do koje je lako doci gde god da ste u Beogradu. Tacnije smesten je kod Vukovog spomenika, preko puta Masinskog fakulteta. Dobro poznat pab sa velikim izborom piva i odlicnik svirkama. Nalazi se veoma dobroj i pristupacnoj lokaciji do koje je lako doci gde god da ste u Beogradu. Tacnije smesten je kod Vukovog spomenika, preko puta Masinskog fakulteta. Dobro poznat pab sa velikim izborom piva i odlicnik svirkama.</p>
                            <p class=\"lokal-sub-title\">Kontakt lokala i korisni linkovi:</p>
                            <a href=\"tel:+381 65 872 68 25\" class=\"lokal-contact\">+381 65 872 68 25</a><br>
                            <a href=\"mailto:kontakt@tramvaj.rs\" class=\"lokal-contact\">kontakt@tramvaj.rs</a><br><br>
                            <a href=\"https://www.facebook.com/tramvajpub/\" target=\"_blank\" class=\"lokal-socials\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Facebook\"><i class=\"fab fa-facebook-square\"></i></a>
                            <a href=\"https://www.instagram.com/tramvaj_pub/\" target=\"_blank\" class=\"lokal-socials\"><i class=\"fab fa-instagram\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Instagram\"></i></a>
                            <a href=\"https://twitter.com/Tramvaj_pub\" target=\"_blank\" class=\"lokal-socials\"><i class=\"fab fa-twitter-square\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Twitter\"></i></a>
                            <p class=\"lokal-sub-title\" id=\"lokal-sub-title-map\">Mapa:</p>
                        </div>                                               
                    </div>
                </div>
                <div id=\"event3\" class=\"col-lg-12 the-event wow fadeIn\" data-wow-delay=\"1.5s\" data-wow-duration=\"0.6s\" id=\"event3\">
                    <div class=\"row\">
                        <div class=\"col-lg-2 lokal-img-wrapper\">
                            <img class=\"lokal-img\" src=\"";
        // line 189
        echo twig_escape_filter($this->env, ($context["BASE"] ?? null), "html", null, true);
        echo "assets/img/lokali-img/pivara.jpg\" alt=\"\">
                        </div>
                        <div class=\"col-lg-10 lokal-info\">
                            <p class=\"lokal-name\">Pivara Bar</p>
                            <p class=\"lokal-address\">Cetinjska 15a, Beograd, Srbija</p>
                            <p class=\"lokal-small-desc\">Za sada vec poznat, standardno vrhunski petak u Pivara Bar-u1!</p>
                            <p class=\"lokal-date\"><i class=\"far fa-calendar-alt\"></i> &nbsp;Maj 31, 2019</p>
                            <button id=\"event3-button\" class=\"event-more-info\">više informacija</button>
                        </div>
                        <div class=\"col-lg-12 lokal-more-info\">
                            <p class=\"lokal-sub-title\">O lokalu...</p>
                            <p>Nalazi se veoma dobroj i pristupacnoj lokaciji do koje je lako doci gde god da ste u Beogradu. Tacnije smesten je kod Vukovog spomenika, preko puta Masinskog fakulteta. Dobro poznat pab sa velikim izborom piva i odlicnik svirkama. Nalazi se veoma dobroj i pristupacnoj lokaciji do koje je lako doci gde god da ste u Beogradu. Tacnije smesten je kod Vukovog spomenika, preko puta Masinskog fakulteta. Dobro poznat pab sa velikim izborom piva i odlicnik svirkama. Nalazi se veoma dobroj i pristupacnoj lokaciji do koje je lako doci gde god da ste u Beogradu. Tacnije smesten je kod Vukovog spomenika, preko puta Masinskog fakulteta. Dobro poznat pab sa velikim izborom piva i odlicnik svirkama.</p>
                            <p class=\"lokal-sub-title\">Kontakt lokala i korisni linkovi:</p>
                            <a href=\"tel:+381 65 872 68 25\" class=\"lokal-contact\">+381 65 872 68 25</a><br>
                            <a href=\"mailto:kontakt@tramvaj.rs\" class=\"lokal-contact\">kontakt@tramvaj.rs</a><br><br>
                            <a href=\"https://www.facebook.com/tramvajpub/\" target=\"_blank\" class=\"lokal-socials\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Facebook\"><i class=\"fab fa-facebook-square\"></i></a>
                            <a href=\"https://www.instagram.com/tramvaj_pub/\" target=\"_blank\" class=\"lokal-socials\"><i class=\"fab fa-instagram\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Instagram\"></i></a>
                            <a href=\"https://twitter.com/Tramvaj_pub\" target=\"_blank\" class=\"lokal-socials\"><i class=\"fab fa-twitter-square\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Twitter\"></i></a>
                            <p class=\"lokal-sub-title\" id=\"lokal-sub-title-map\">Mapa:</p>
                        </div>                                                
                    </div>
                </div>
                <div id=\"event4\" class=\"col-lg-12 the-event wow fadeIn\" data-wow-delay=\"1.7s\" data-wow-duration=\"0.6s\">
                    <div class=\"row\">
                        <div class=\"col-lg-2 lokal-img-wrapper\">
                            <img class=\"lokal-img\" src=\"";
        // line 214
        echo twig_escape_filter($this->env, ($context["BASE"] ?? null), "html", null, true);
        echo "assets/img/lokali-img/dobrila.jpg\" alt=\"\">
                        </div>
                        <div class=\"col-lg-10 lokal-info\">
                            <p class=\"lokal-name\">Dobrila Pub</p>
                            <p class=\"lokal-address\">Dobracina 30, Beograd, Srbija</p>
                            <p class=\"lokal-small-desc\">U subotu se vidimo na velikoj bini Dobrila Pub-a!</p>
                            <p class=\"lokal-date\"><i class=\"far fa-calendar-alt\"></i> &nbsp;Maj 31, 2019</p>
                            <button id=\"event4-button\" class=\"event-more-info\">više informacija</button>
                        </div>
                        <div class=\"col-lg-12 lokal-more-info\">
                            <p class=\"lokal-sub-title\">O lokalu...</p>
                            <p>Nalazi se veoma dobroj i pristupacnoj lokaciji do koje je lako doci gde god da ste u Beogradu. Tacnije smesten je kod Vukovog spomenika, preko puta Masinskog fakulteta. Dobro poznat pab sa velikim izborom piva i odlicnik svirkama. Nalazi se veoma dobroj i pristupacnoj lokaciji do koje je lako doci gde god da ste u Beogradu. Tacnije smesten je kod Vukovog spomenika, preko puta Masinskog fakulteta. Dobro poznat pab sa velikim izborom piva i odlicnik svirkama. Nalazi se veoma dobroj i pristupacnoj lokaciji do koje je lako doci gde god da ste u Beogradu. Tacnije smesten je kod Vukovog spomenika, preko puta Masinskog fakulteta. Dobro poznat pab sa velikim izborom piva i odlicnik svirkama.</p>
                            <p class=\"lokal-sub-title\">Kontakt lokala i korisni linkovi:</p>
                            <a href=\"tel:+381 65 872 68 25\" class=\"lokal-contact\">+381 65 872 68 25</a><br>
                            <a href=\"mailto:kontakt@tramvaj.rs\" class=\"lokal-contact\">kontakt@tramvaj.rs</a><br><br>
                            <a href=\"https://www.facebook.com/tramvajpub/\" target=\"_blank\" class=\"lokal-socials\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Facebook\"><i class=\"fab fa-facebook-square\"></i></a>
                            <a href=\"https://www.instagram.com/tramvaj_pub/\" target=\"_blank\" class=\"lokal-socials\"><i class=\"fab fa-instagram\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Instagram\"></i></a>
                            <a href=\"https://twitter.com/Tramvaj_pub\" target=\"_blank\" class=\"lokal-socials\"><i class=\"fab fa-twitter-square\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Twitter\"></i></a>
                            <p class=\"lokal-sub-title\" id=\"lokal-sub-title-map\">Mapa:</p>
                        </div>                                               
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- about band -->
<div id=\"band\" class=\"container-fluid\">
    <div class=\"about-band-img\"></div>
    <div class=\"row\">
        <div class=\"col-lg-6 about-headlines\">
            <div class=\"about-band-headline wow fadeInUp\" data-wow-delay=\"1.2s\">Bend CHE</div>
            <div class=\"about-band-sub-headline sub-headline-1 wow fadeInLeft\" data-wow-delay=\"0.6s\">your</div>
            <div class=\"about-band-sub-headline sub-headline-2 wow fadeInLeft\" data-wow-delay=\"0.8s\">acoustic</div>
            <div class=\"about-band-sub-headline sub-headline-3 wow fadeInLeft\" data-wow-delay=\"1s\">experience</div>  
        </div>
        <div class=\"col-lg-6\">

        </div>
    </div>    
</div>

<!-- images -->
<div id=\"images\" class=\"container-fluid text-center\">    
    <!-- <hr /> -->
    <!-- photo grid -->        
    <div class=\"images-row\">
        <div class=\"images-column\">
            <img src=\"";
        // line 263
        echo twig_escape_filter($this->env, ($context["BASE"] ?? null), "html", null, true);
        echo "assets/img/photo-grid/band-6.jpg\" class=\"wow fadeInUp\" alt=\"photo grid\">
            <img src=\"";
        // line 264
        echo twig_escape_filter($this->env, ($context["BASE"] ?? null), "html", null, true);
        echo "assets/img/photo-grid/anker.jpg\" class=\"wow fadeInUp\" data-wow-delay=\"0.2s\" alt=\"photo grid\">
            <img src=\"";
        // line 265
        echo twig_escape_filter($this->env, ($context["BASE"] ?? null), "html", null, true);
        echo "assets/img/photo-grid/pedja-i-stefano.jpg\" class=\"wow fadeInUp\" data-wow-delay=\"0.4s\" alt=\"photo grid\">
            <img src=\"";
        // line 266
        echo twig_escape_filter($this->env, ($context["BASE"] ?? null), "html", null, true);
        echo "assets/img/photo-grid/band-7.jpg\" class=\"wow fadeInUp\" data-wow-delay=\"0.6\" alt=\"photo grid\">
        </div>

        <div class=\"images-column\">
            <img src=\"";
        // line 270
        echo twig_escape_filter($this->env, ($context["BASE"] ?? null), "html", null, true);
        echo "assets/img/photo-grid/band-14.jpg\" class=\"wow fadeInUp\"  alt=\"photo grid\">
            <img src=\"";
        // line 271
        echo twig_escape_filter($this->env, ($context["BASE"] ?? null), "html", null, true);
        echo "assets/img/photo-grid/stefano-2.jpg\" class=\"wow fadeInUp\" data-wow-delay=\"0.2s\" alt=\"photo grid\">
            <img src=\"";
        // line 272
        echo twig_escape_filter($this->env, ($context["BASE"] ?? null), "html", null, true);
        echo "assets/img/photo-grid/republika.jpg\" class=\"wow fadeInUp\" data-wow-delay=\"0.4s\" alt=\"photo grid\">
            <img src=\"";
        // line 273
        echo twig_escape_filter($this->env, ($context["BASE"] ?? null), "html", null, true);
        echo "assets/img/photo-grid/pedja-2.jpg\"class=\"wow fadeInUp\" data-wow-delay=\"0.6s\"  alt=\"photo grid\">
        </div>

        <div class=\"images-column\">
            <img src=\"";
        // line 277
        echo twig_escape_filter($this->env, ($context["BASE"] ?? null), "html", null, true);
        echo "assets/img/photo-grid/stefano.jpg\" class=\"wow fadeInUp\"  alt=\"photo grid\">
            <img src=\"";
        // line 278
        echo twig_escape_filter($this->env, ($context["BASE"] ?? null), "html", null, true);
        echo "assets/img/photo-grid/pedja.jpg\"class=\"wow fadeInUp\" data-wow-delay=\"0.2s\" alt=\"photo grid\">
            <img src=\"";
        // line 279
        echo twig_escape_filter($this->env, ($context["BASE"] ?? null), "html", null, true);
        echo "assets/img/photo-grid/band-11.jpg\" class=\"wow fadeInUp\" data-wow-delay=\"0.2s\" alt=\"photo grid\">
            <img src=\"";
        // line 280
        echo twig_escape_filter($this->env, ($context["BASE"] ?? null), "html", null, true);
        echo "assets/img/photo-grid/band-12.jpg\" class=\"wow fadeInUp\" data-wow-delay=\"0.2s\" alt=\"photo grid\">
        </div>
        
        <div class=\"images-column\">
            <img src=\"";
        // line 284
        echo twig_escape_filter($this->env, ($context["BASE"] ?? null), "html", null, true);
        echo "assets/img/photo-grid/pivara.jpg\" class=\"wow fadeInUp\" alt=\"photo grid\">
            <img src=\"";
        // line 285
        echo twig_escape_filter($this->env, ($context["BASE"] ?? null), "html", null, true);
        echo "assets/img/photo-grid/tramvaj.jpg\" class=\"wow fadeInUp\" data-wow-delay=\"0.2s\" alt=\"photo grid\">
            <img src=\"";
        // line 286
        echo twig_escape_filter($this->env, ($context["BASE"] ?? null), "html", null, true);
        echo "assets/img/photo-grid/close-up.jpg\" class=\"wow fadeInUp\" data-wow-delay=\"0.4s\" alt=\"photo grid\">
        </div>
    </div>    
</div>        

<section id=\"testimonials\">
    <div class=\"container\">        
        <div class=\"row\">            
            <div class=\"col-lg-4 col-md-6\">
                <div class=\"testimonial-box\">
                    <div class=\"quote\"><i class=\"fas fa-quote-right\"></i></div>
                    <div class=\"testimonial-comment\">
                        Najjaci u drzavi!
                    </div>
                    <div class=\"testimonial-footer\">
                        <span class=\"username\">Milos Jankovic</span><br>
                        <span class=\"fa fa-star checked\"></span>
                        <span class=\"fa fa-star checked\"></span>
                        <span class=\"fa fa-star checked\"></span>
                        <span class=\"fa fa-star checked\"></span>
                        <span class=\"fa fa-star\"></span>
                    </div>
                </div>
            </div>

            <div class=\"col-lg-4 col-md-6\">
                <div class=\"testimonial-box\">
                    <div class=\"quote\"><i class=\"fas fa-quote-right\"></i></div>
                    <div class=\"testimonial-comment\">
                        Momci, kidate!!!!
                    </div>
                    <div class=\"testimonial-footer\">
                        <span class=\"username\">Aleksandra Aleksic</span><br>
                        <span class=\"fa fa-star checked\"></span>
                        <span class=\"fa fa-star checked\"></span>
                        <span class=\"fa fa-star checked\"></span>
                        <span class=\"fa fa-star checked\"></span>
                        <span class=\"fa fa-star checked\"></span>
                    </div>
                </div>
            </div>

            <div class=\"col-lg-4 col-md-6\">
                <div class=\"testimonial-box\">
                    <div class=\"quote\"><i class=\"fas fa-quote-right\"></i></div>
                    <div class=\"testimonial-comment\">
                        &lt;3 &lt;3 &lt;3 &lt;3 &lt;3
                    </div>
                    <div class=\"testimonial-footer\">
                        <span class=\"username\">Mila Sarkic</span><br>
                        <span class=\"fa fa-star checked\"></span>
                        <span class=\"fa fa-star checked\"></span>
                        <span class=\"fa fa-star checked\"></span>
                        <span class=\"fa fa-star checked\"></span>
                        <span class=\"fa fa-star\"></span>
                    </div>
                </div>
            </div>

            <div class=\"col-lg-4 col-md-6\">
                <div class=\"testimonial-box\">
                    <div class=\"quote\"><i class=\"fas fa-quote-right\"></i></div>
                    <div class=\"testimonial-comment\">
                        Svaka Vam cast!
                    </div>
                    <div class=\"testimonial-footer\">
                        <span class=\"username\">Jelena Nikolov</span><br>
                        <span class=\"fa fa-star checked\"></span>
                        <span class=\"fa fa-star checked\"></span>
                        <span class=\"fa fa-star\"></span>
                        <span class=\"fa fa-star\"></span>
                        <span class=\"fa fa-star\"></span>
                    </div>
                </div>
            </div>

            <div class=\"col-lg-4 col-md-6\">
                <div class=\"testimonial-box\">
                    <div class=\"quote\"><i class=\"fas fa-quote-right\"></i></div>
                    <div class=\"testimonial-comment\">
                        Nema sta, sve pohvale za momke!
                    </div>
                    <div class=\"testimonial-footer\">
                        <span class=\"username\">Nikola Stanojevic</span><br>
                        <span class=\"fa fa-star checked\"></span>
                        <span class=\"fa fa-star checked\"></span>
                        <span class=\"fa fa-star checked\"></span>
                        <span class=\"fa fa-star checked\"></span>
                        <span class=\"fa fa-star\"></span>
                    </div>
                </div>
            </div>

            <div class=\"col-lg-4 col-md-6\">
                <div class=\"testimonial-box\">
                    <div class=\"quote\"><i class=\"fas fa-quote-right\"></i></div>
                    <div class=\"testimonial-comment\">
                        Malo ste me smorili ali gogo bendche
                    </div>
                    <div class=\"testimonial-footer\">
                        <span class=\"username\">Milos Ratkovic</span><br>
                        <span class=\"fa fa-star checked\"></span>
                        <span class=\"fa fa-star checked\"></span>
                        <span class=\"fa fa-star checked\"></span>
                        <span class=\"fa fa-star\"></span>
                        <span class=\"fa fa-star\"></span>
                    </div>
                </div>
            </div>
            
        </div>            
    </div>    
</section>

<section id=\"contact\">

</section>

<div id=\"event-info\">

</div>

<!-- <div class=\"contaier\">            
        <h3 class=\"text-center\">KONTAKT</h3>
        <p style=\"margin-bottom: 20px;\" class=\"text-center\"><em>Naši fanovi su na prvom mestu!</em></p>
        <div class=\"row info\">
            <div class=\"col-md-4\" style=\"font-family: FontAwesome;\">
                <p><span class=\"fa fa-map-marker fa-lg\" aria-hidden=\"true\"></span>&nbsp;Beograd, Srbija</p>
                <p><span class=\"fa fa-phone-square fn-lg\" aria-hidden=\"true\"></span>&nbsp;Telefon: <a href=\"tel:+381694204186\" class=\"tel\">+381 69 4204186</a> (Peђа)</p>
                <p><span class=\"fa fa-phone-square fn-lg\" aria-hidden=\"true\"></span>&nbsp;Telefon: <a href=\"tel:+381644102992\" class=\"tel\">+381 64 4102992</a> (Veljko)</p>
                <p><span class=\"fa fa-envelope-o\" aria-hidden=\"true\"></span>&nbsp;Email: <a href=\"mailto:booking@bendche.dx.am\" class=\"tel\">booking@bendche.dx.am</a></p>
            </div>
    
            <div class=\"col-md-8\">
                <form action=\"php/email_script.php\" method=\"POST\">
                    <div class=\"row\">
                        <div class=\"col-sm-6 form-group\">
                            <input style=\"font-family: FontAwesome;\" class=\"form-control\" id=\"from\" name=\"subject\" placeholder=\"&#xf007; Ime\" type=\"text\" required />
                        </div>
                        <div class=\"col-sm-6 form-group\">
                            <input style=\"font-family: FontAwesome;\" class=\"form-control\" id=\"email\" name=\"email\" placeholder=\"&#xf0e0; Email (vas@email.com)\" type=\"email\" required />
                        </div>
                    </div>
                    <textarea style=\"font-family: FontAwesome;\" class=\"form-control\" id=\"message\" name=\"message\" placeholder=\"&#xf086; Poruka\" rows=\"5\"></textarea>
                    <div class=\"row\">
                        <div class=\"col-md-12 form-group\">
                            <button class=\"btn pull-right posaljiBtn\" type=\"submit\">POŠALJI E-MAIL</button>
                        </div>                         
                    </div>
                </form>
            </div>
        </div>  
</div> -->

<!-- mapa -->
<!-- <div id=\"googleMap\"></div>
<a id=\"datesBtn\" href=\"#dates\">VRATI SE NA DATUME</a>
<script src=\"https://maps.googleapis.com/maps/api/js?key=AIzaSyCHzuhEe40_UtGiotTilI2mWObMR60a9B4&callback=myMap\"></script>         -->

<!-- footer -->
<!-- <footer class=\"text-center\">
    <div class=\"row\" style=\"margin-top: 20px;\">
        <div id=\"fb\" class=\"col-md-1 col-xs-4 col-md-offset-4 social-media\">
            <a href=\"https://www.facebook.com/bendche/\" target=\"_blank\"><i class=\"fa fa-facebook-square fa-3x\"></i></a>
        </div>    
        <div id=\"yt\" class=\"col-md-2 col-xs-4 social-media\">
            <a href=\"https://www.youtube.com/user/veljkozvrkjankovic\" target=\"_blank\"><i class=\"fa fa-youtube fa-3x\"></i></a>
        </div>
        <div id=\"insta\" class=\"col-md-1 col-xs-4 social-media\">
            <a href=\"https://www.instagram.com/bend_che/\" target=\"_blank\"><i class=\"fa fa-instagram fa-3x\"></i></a>
        </div>
    </div>
    <div class=\"row\" style=\"margin-top: 20px;\">
        <div class=\"col-md-12\">
            <a class=\"up-arrow\" href=\"#myPage\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Vrati se na vrh\">
                <span style=\"margin-bottom: 30px; font-size: 20px;\" class=\"glyphicon glyphicon-chevron-up\"></span>
            </a>
        </div>
    </div>
    <p class=\"text-center\" style=\"font-size: 10px; position: relative; bottom: 0; width: 100%;\">&COPY; MR2017</p>
</footer>         -->

<!-- modal -->
<!-- <div class=\"row modal\" id=\"msg-sent-modal\">            
    <div class=\"col-md-10 col-md-offset-1 col-xs-12\">            
        <div class=\"panel panel-default\">                    
            <div class=\"panel-body\" style=\"text-align: center; font-size: 25px; color: #F1C53D; background: #2D2D30\">
                <p>Vaša poruka je poslata!</p>
                <p><small>Molimo sačekajte...</small></p>
            </div>                 
        </div>
    </div>
</div>  -->

";
    }

    public function getTemplateName()
    {
        return "Main/home.html";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  400 => 286,  396 => 285,  392 => 284,  385 => 280,  381 => 279,  377 => 278,  373 => 277,  366 => 273,  362 => 272,  358 => 271,  354 => 270,  347 => 266,  343 => 265,  339 => 264,  335 => 263,  283 => 214,  255 => 189,  227 => 164,  199 => 139,  165 => 108,  158 => 104,  135 => 84,  128 => 80,  105 => 60,  98 => 56,  75 => 36,  68 => 32,  47 => 14,  35 => 4,  32 => 3,  15 => 1,);
    }

    public function getSourceContext()
    {
        return new Twig_Source("", "Main/home.html", "C:\\xampp\\htdocs\\bendche\\views\\Main\\home.html");
    }
}
