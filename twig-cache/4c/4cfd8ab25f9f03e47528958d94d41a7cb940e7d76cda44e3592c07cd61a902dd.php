<?php

/* Main/home.html */
class __TwigTemplate_a6db7f7b6da8726a3eac32f3cea40895468ad2bf493fa40c9baaad195906392d extends Twig_Template
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
    <div class=\"container-fluid\">
        <div class=\"navbar-header\">
            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">
                <span class=\"icon-bar\"></span>
                <span class=\"icon-bar\"></span>
                <span class=\"icon-bar\"></span>
            </button>                    
            <a class=\"navbar-brand\" id=\"small-logo-brand\" href=\"#myPage\">BEND CHE</a>
            <a class=\"navbar-brand\" id=\"big-logo-brand\" href=\"#myPage\"><img class=\"img-circle img-responsive\" id=\"logoPic\" src=\"";
        // line 14
        echo twig_escape_filter($this->env, ($context["BASE"] ?? null), "html", null, true);
        echo "assets/img/logo.jpg\" alt=\"Logo\" /></a>                      
        </div>
        <div class=\"collapse navbar-collapse\" id=\"myNavbar\">
            <ul class=\"nav navbar-nav navbar-right\">
                <li><a href=\"#myPage\" class=\"active\">POČETNA</a></li>
                <li><a href=\"#band\">BAND</a></li>
                <li><a href=\"#dates\">DATUMI</a></li>
                <li><a href=\"#contact\">KONTAKT</a></li>
            </ul>
        </div>                
    </div>
</nav>

<!-- carousel -->
<div id=\"myCarousel\" class=\"carousel slide carousel-fade\" data-ride=\"carousel\" data-interval=\"4000\">
    <!-- indicators -->
    <ol class=\"carousel-indicators\">
        <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>
        <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>
        <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>
        <li data-target=\"#myCarousel\" data-slide-to=\"3\"></li>
        <li data-target=\"#myCarousel\" data-slide-to=\"4\"></li>
        <li data-target=\"#myCarousel\" data-slide-to=\"5\"></li>
        <li data-target=\"#myCarousel\" data-slide-to=\"6\"></li>
        <li data-target=\"#myCarousel\" data-slide-to=\"7\"></li>
    </ol>

    <!-- wrapper for slides -->
    <div class=\"carousel-inner\" role=\"listbox\">                
        <div class=\"item active\">
            <img src=\"";
        // line 44
        echo twig_escape_filter($this->env, ($context["BASE"] ?? null), "html", null, true);
        echo "assets/img/band-3.jpg\" alt=\"band picture\" />                    
        </div>

        <div class=\"item\">
            <img src=\"";
        // line 48
        echo twig_escape_filter($this->env, ($context["BASE"] ?? null), "html", null, true);
        echo "assets/img/band-15.png\" alt=\"band picture\" />                    
        </div>                                                

        <div class=\"item\">
            <img src=\"";
        // line 52
        echo twig_escape_filter($this->env, ($context["BASE"] ?? null), "html", null, true);
        echo "assets/img/band-5.jpg\" alt=\"band picture\" />                    
        </div>                                

        <div class=\"item\">
            <img src=\"";
        // line 56
        echo twig_escape_filter($this->env, ($context["BASE"] ?? null), "html", null, true);
        echo "assets/img/band-9.jpg\" alt=\"band picture\" />                    
        </div>                                

        <div class=\"item\">
            <img src=\"";
        // line 60
        echo twig_escape_filter($this->env, ($context["BASE"] ?? null), "html", null, true);
        echo "assets/img/band-10.jpg\" alt=\"band picture\" />                    
        </div>

        <div class=\"item\">
            <img src=\"";
        // line 64
        echo twig_escape_filter($this->env, ($context["BASE"] ?? null), "html", null, true);
        echo "assets/img/band-13.jpg\" alt=\"band picture\" />                    
        </div>

        <div class=\"item\">
            <img src=\"";
        // line 68
        echo twig_escape_filter($this->env, ($context["BASE"] ?? null), "html", null, true);
        echo "assets/img/band-4.jpg\" alt=\"band picture\" />                    
        </div> 

        <div class=\"item\">
            <img src=\"";
        // line 72
        echo twig_escape_filter($this->env, ($context["BASE"] ?? null), "html", null, true);
        echo "assets/img/band-12.jpg\" alt=\"band picture\" />                    
        </div> 
    </div>

    <!-- controls -->
    <a class=\"left carousel-control\" href=\"#myCarousel\" role=\"button\" data-slide=\"prev\">
        <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\"></span>
        <span class=\"sr-only\">Prethodni</span>
    </a>
    <a class=\"right carousel-control\" href=\"#myCarousel\" role=\"button\" data-slide=\"next\">
        <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>
        <span class=\"sr-only\">Sledeci</span>
    </a>
</div>

<!-- band -->
<div id=\"band\" class=\"container text-center\">
    <div class=\"row\">
        <div class=\"col-md-12\">
            <h3>BEND CHE</h3>
            <p><em>Mi volimo muziku!</em></p>
            <p>Rock/Pop/Funk/RnB akusticni kaver bend</p>
            <p>
                Mlad ali iskusan bend, dve gitare, dva glasa i ritam sekcija. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
        </div>
    </div>
    <br />

    <div class=\"row band-info-pics\">
        <div class=\"col-sm-6 col-md-6 col-lg-3 person-left\">
            <p><strong>Predrag Avramović</strong></p><br />                    
            <a href=\"#pedja-info\" data-toggle=\"collapse\">
                <div class=\"parent img-circle\">
                    <img src=\"";
        // line 106
        echo twig_escape_filter($this->env, ($context["BASE"] ?? null), "html", null, true);
        echo "assets/img/pedja.jpg\" class=\"img-circle person\" alt=\"pedja avramović\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Klikni za više infomacija\"/>
                    <span class=\"person-text person-text-opened\"><i class=\"fa fa-arrow-circle-down\"></i></span>
                </div>    
            </a>                                          
            <div id=\"pedja-info\" class=\"collapse info-collapse\">
                <p>Rođen 1995. godine u Čačku, gde je završio Osnovnu i Srednju školu, sada student Saobraćajnog Fakulteta. Ambiciozan i veoma duhovit momak, zadužen za bass gitaru</p>
            </div>                    
        </div>
        <div class=\"col-sm-6 col-md-6 col-lg-3 person-left\">
            <p><strong>Veljko Janković</strong></p><br />
            <a href=\"#veljko-info\" data-toggle=\"collapse\">
                <div class=\"parent img-circle\">
                    <img src=\"";
        // line 118
        echo twig_escape_filter($this->env, ($context["BASE"] ?? null), "html", null, true);
        echo "assets/img/veljko-3.jpg\" class=\"img-circle person\" alt=\"veljko janoković\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Klikni za više infomacija\"/>
                    <span class=\"person-text\"><i class=\"fa fa-arrow-circle-down\"></i></span>
                </div>    
            </a>
            <div id=\"veljko-info\" class=\"collapse info-collapse\">
                <p>Rođen 1994 u Sopotu, talentovan i sa puno iskustva, svojim izvanrednim glasom i svojom energijom veoma lako podize publiku na noge.</p>
            </div>
        </div>
        <div class=\"col-sm-6 col-md-6 col-lg-3 person-right\">
            <p><strong>Pavle Đurić</strong></p><br />
            <a href=\"#pavle-info\" data-toggle=\"collapse\">
                <div class=\"parent img-circle\">
                    <img src=\"";
        // line 130
        echo twig_escape_filter($this->env, ($context["BASE"] ?? null), "html", null, true);
        echo "assets/img/pavle.jpg\" class=\"img-circle person\" alt=\"pavle đurić\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Klikni za više infomacija\" />
                    <span class=\"person-text\"><i class=\"fa fa-arrow-circle-down\"></i></span>
                </div>    
            </a>
            <div id=\"pavle-info\" class=\"collapse info-collapse\">
                <p>Student Saobraćajnog Fakulteta zadužen za gitaru i prateći vokal.</p>
            </div>
        </div>
        <div class=\"col-sm-6 col-md-6 col-lg-3 person-right\">
            <p><strong>Nikola Stefanović</strong></p><br />
            <a href=\"#stefano-info\" data-toggle=\"collapse\">
                <div class=\"parent img-circle\">
                    <img src=\"";
        // line 142
        echo twig_escape_filter($this->env, ($context["BASE"] ?? null), "html", null, true);
        echo "assets/img/stefano.jpg\" class=\"img-circle person\" alt=\"nikola stefanović\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Klikni za više infomarcija\" />
                    <span class=\"person-text\"><i class=\"fa fa-arrow-circle-down\"></i></span>
                </div>
            </a>
            <div id=\"stefano-info\" class=\"collapse info-collapse\">
                <p>Rođen u Čačku 1993 godine, gde je zavrđio Osnovnu i Srednju školu, sada student Saobraćajnog Fakulteta. Obožava bubanj, kahon i sve što se tiče ritma.</p>
            </div>
        </div>
    </div>           

    <hr />

    <!-- photo grid -->
    <div class=\"row\">
        <div class=\"col-md-12\">
            <div class=\"column\">
                <div class=\"photo-grid\">
                    <img src=\"";
        // line 159
        echo twig_escape_filter($this->env, ($context["BASE"] ?? null), "html", null, true);
        echo "assets/img/photo-grid/band-6.jpg\" style=\"width:100%\" alt=\"photo grid\">
                </div>
                <div class=\"photo-grid\">
                    <img src=\"";
        // line 162
        echo twig_escape_filter($this->env, ($context["BASE"] ?? null), "html", null, true);
        echo "assets/img/photo-grid/anker.jpg\" style=\"width:100%\" alt=\"photo grid\">
                </div>
                <div class=\"photo-grid\">
                    <img src=\"";
        // line 165
        echo twig_escape_filter($this->env, ($context["BASE"] ?? null), "html", null, true);
        echo "assets/img/photo-grid/pedja-i-stefano.jpg\" style=\"width:100%\" alt=\"photo grid\">
                </div>
                <div class=\"photo-grid\">
                    <img src=\"";
        // line 168
        echo twig_escape_filter($this->env, ($context["BASE"] ?? null), "html", null, true);
        echo "assets/img/photo-grid/band-7.jpg\" style=\"width:100%\" alt=\"photo grid\">
                </div>
                <div class=\"photo-grid\">
                    <img src=\"";
        // line 171
        echo twig_escape_filter($this->env, ($context["BASE"] ?? null), "html", null, true);
        echo "assets/img/photo-grid/band-14.jpg\" style=\"width:100%\" alt=\"photo grid\">
                </div>
                <div class=\"photo-grid\">
                    <img src=\"";
        // line 174
        echo twig_escape_filter($this->env, ($context["BASE"] ?? null), "html", null, true);
        echo "assets/img/photo-grid/stefano-2.jpg\" style=\"width:100%\" alt=\"photo grid\">
                </div>
                <div class=\"photo-grid\">
                    <img src=\"";
        // line 177
        echo twig_escape_filter($this->env, ($context["BASE"] ?? null), "html", null, true);
        echo "assets/img/photo-grid/republika.jpg\" style=\"width:100%\" alt=\"photo grid\">
                </div>
                <div class=\"photo-grid\">
                    <img src=\"";
        // line 180
        echo twig_escape_filter($this->env, ($context["BASE"] ?? null), "html", null, true);
        echo "assets/img/photo-grid/pedja-2.jpg\" style=\"width:100%\" alt=\"photo grid\">
                </div>
            </div>
            <div class=\"column\">                        
                <div class=\"photo-grid\">
                    <img src=\"";
        // line 185
        echo twig_escape_filter($this->env, ($context["BASE"] ?? null), "html", null, true);
        echo "assets/img/photo-grid/stefano.jpg\" style=\"width:100%\" alt=\"photo grid\">
                </div>
                <div class=\"photo-grid\">
                    <img src=\"";
        // line 188
        echo twig_escape_filter($this->env, ($context["BASE"] ?? null), "html", null, true);
        echo "assets/img/photo-grid/pedja.jpg\" style=\"width:100%\" alt=\"photo grid\">
                </div>
                <div class=\"photo-grid\">
                    <img src=\"";
        // line 191
        echo twig_escape_filter($this->env, ($context["BASE"] ?? null), "html", null, true);
        echo "assets/img/photo-grid/close-up.jpg\" style=\"width:100%\" alt=\"photo grid\">
                </div>
                <div class=\"photo-grid\">
                    <img src=\"";
        // line 194
        echo twig_escape_filter($this->env, ($context["BASE"] ?? null), "html", null, true);
        echo "assets/img/photo-grid/band-11.jpg\" style=\"width:100%\" alt=\"photo grid\">
                </div>
                <div class=\"photo-grid\">
                    <img src=\"";
        // line 197
        echo twig_escape_filter($this->env, ($context["BASE"] ?? null), "html", null, true);
        echo "assets/img/photo-grid/pivara.jpg\" style=\"width:100%\" alt=\"photo grid\">
                </div>
                <div class=\"photo-grid\">
                    <img src=\"";
        // line 200
        echo twig_escape_filter($this->env, ($context["BASE"] ?? null), "html", null, true);
        echo "assets/img/photo-grid/tramvaj.jpg\" style=\"width:100%\" alt=\"photo grid\">
                </div>                        
                <div class=\"photo-grid\">
                    <img src=\"";
        // line 203
        echo twig_escape_filter($this->env, ($context["BASE"] ?? null), "html", null, true);
        echo "assets/img/photo-grid/band-12.jpg\" style=\"width:100%\" alt=\"photo grid\">
                </div>                        
            </div>
        </div>
    </div>

</div>        
<!-- dates -->
<div id=\"dates\" class=\"bg-1\">
    <div class=\"container\">
        <h3 class=\"text-center\">DATUMI</h3>
        <p class=\"text-center\"><em>Nastupi u Beogradu i šire</em></p>
        <p style=\"margin-bottom: 20px;\" class=\"text-center\"><em>Dođite i čujte nas na nekim od naših sledećih nastupa, ne zaboravite da ponesete osmeh i dobro raspoloženje</em></p>
        <ul class=\"list-group\">                                                            
            <li class=\"list-group-item\">Decembar 21. - <a href=\"http://tramvaj.rs/\" target=\"_blank\">Tramvaj Pub</a> / <a class=\"mapLinks\" id=\"tramvaj1\" href=\"#googleMap\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Prikazi na mapi\">Ruzveltova 2</a></li>
            <li class=\"list-group-item\">Decembar 22. - <a href=\"http://pivara.rs/\" target=\"_blank\">Pivara</a> / <a class=\"mapLinks\" id=\"pivara1\" href=\"#googleMap\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Prikazi na mapi\">Cetinjska 15</a> <span class=\"label label-warning\">NE PROPUSTITE!</span></li>                    
            <li class=\"list-group-item\">Decembar 23. - <a href=\"https://www.facebook.com/leonidascafe/\" target=\"_blank\">Leonidas Cafe</a> / <a class=\"mapLinks\" id=\"leonidas\" href=\"#googleMap\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Prikazi na mapi\">Braće Jerković 201</a></li>                    
            <li class=\"list-group-item\">Decembar 26. - <a href=\"http://www.squarefivebar.rs/\" target=\"_blank\">Square Five</a> / <a class=\"mapLinks\" id=\"squarefive2\" href=\"#googleMap\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Prikazi na mapi\">Trg Republike 5</a></li>
            <li class=\"list-group-item\">Decembar 28. - <a href=\"http://tramvaj.rs/\" target=\"_blank\">Tramvaj Pub</a> / <a class=\"mapLinks\" id=\"tramvaj2\" href=\"#googleMap\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Prikazi na mapi\">Ruzveltova 2</a></li>
            <li class=\"list-group-item\">Decembar 29. - <a href=\"http://pivara.rs/\" target=\"_blank\">Pivara</a> / <a class=\"mapLinks\" id=\"pivara2\" href=\"#googleMap\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Prikazi na mapi\">Cetinjska 15</a></li>                    
            <li id=\"ng\" style=\"font-family: Helvetica Neue, sans-serif, FontAwesome;\" class=\"list-group-item list-group-item-danger\">Decembar 31. - <a href=\"http://pivara.rs/\" target=\"_blank\">Pivara</a> / <a class=\"mapLinks\" id=\"pivara3\" href=\"#googleMap\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Prikazi na mapi\">Cetinjska 15</a> <span class=\"label label-danger\">NOVOGODIŠNJA NOĆ 2018, REZERVIŠITE NA VREME! </span><i style=\"margin-left: 5px;\" class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i> <a href=\"tel:062748272\"> 062 / Pivara</a></li>
            <li class=\"list-group-item\">Januar 01. - <a href=\"http://pivara.rs/\" target=\"_blank\">Pivara</a> / <a class=\"mapLinks\" id=\"pivara4\" href=\"#googleMap\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Prikazi na mapi\">Cetinjska 15</a> <span class=\"label label-warning\">REPRIZA NOVE GODINE!</span></li>                    
        </ul>

        <!-- youtube video -->
        <div class=\"embed-responsive embed-responsive-16by9 yt-video\">
            <iframe class=\"video\" src=\"https://www.youtube.com/embed/9tjPbgrqQv4?rel=0&amp;controls=0&amp;showinfo=0\" allowfullscreen></iframe>
        </div>
    </div>
</div>

<!-- contact -->
<div id=\"contact\" class=\"container\">
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

    <h3 id=\"commentsH3\" class=\"text-center\">KOMENTARI</h3>
    <ul class=\"nav nav-tabs comments\">
        <li class=\"active\"><a data-toggle=\"tab\" href=\"#home\">Nikola</a></li>
        <li><a data-toggle=\"tab\" href=\"#menu1\">Veljko</a></li>
        <li><a data-toggle=\"tab\" href=\"#menu2\">Pavle</a></li>
        <li><a data-toggle=\"tab\" href=\"#menu3\">Predrag</a></li>
    </ul>

    <div class=\"tab-content\">
        <div id=\"home\" class=\"tab-pane fade in active\">
            <h2>Nikola Stefanović, kahon</h2>
            <p>Alkoholičar i narkoman, inače mnogo volim da lupam u kutiju i neću se nikada ošišati</p>
        </div>
        <div id=\"menu1\" class=\"tab-pane fade\">
            <h2>Veljko Janković, gitarista i vodeći vokal</h2>
            <p>Mnogo dobro pevam heh</p>
        </div>
        <div id=\"menu2\" class=\"tab-pane fade\">
            <h2>Pavle Đurić, gitarista i prateći vokal</h2>
            <p>Studiram Saobraćajni Fakultet</p>
        </div>
        <div id=\"menu3\" class=\"tab-pane fade\">
            <h2>Predrag Avramović, bass gitara</h2>
            <p>Kakvi smo ludaci, a?!</p>
        </div>
    </div>
</div>

<!-- mapa -->
<div id=\"googleMap\"></div>
<a id=\"datesBtn\" href=\"#dates\">VRATI SE NA DATUME</a>
<script src=\"https://maps.googleapis.com/maps/api/js?key=AIzaSyCHzuhEe40_UtGiotTilI2mWObMR60a9B4&callback=myMap\"></script>        

<!-- footer -->
<footer class=\"text-center\">
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
</footer>        

<!-- modal -->
<div class=\"row modal\" id=\"msg-sent-modal\">            
    <div class=\"col-md-10 col-md-offset-1 col-xs-12\">            
        <div class=\"panel panel-default\">                    
            <div class=\"panel-body\" style=\"text-align: center; font-size: 25px; color: #F1C53D; background: #2D2D30\">
                <p>Vaša poruka je poslata!</p>
                <p><small>Molimo sačekajte...</small></p>
            </div>                 
        </div>
    </div>
</div>

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
        return array (  317 => 203,  311 => 200,  305 => 197,  299 => 194,  293 => 191,  287 => 188,  281 => 185,  273 => 180,  267 => 177,  261 => 174,  255 => 171,  249 => 168,  243 => 165,  237 => 162,  231 => 159,  211 => 142,  196 => 130,  181 => 118,  166 => 106,  129 => 72,  122 => 68,  115 => 64,  108 => 60,  101 => 56,  94 => 52,  87 => 48,  80 => 44,  47 => 14,  35 => 4,  32 => 3,  15 => 1,);
    }

    public function getSourceContext()
    {
        return new Twig_Source("", "Main/home.html", "C:\\xampp\\htdocs\\bendche\\views\\Main\\home.html");
    }
}
