<?php

/* _global/index.html */
class __TwigTemplate_de0ccd3477ae464f89db36a91454a3c3c671fe4d14e56d4b9a4d96fbc22ac4c5 extends Twig_Template
{
    private $source;

    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = array(
            'title' => array($this, 'block_title'),
            'main' => array($this, 'block_main'),
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        // line 1
        echo "<!DOCTYPE html>
<html>
    <head>
        <title>Bend CHE - ";
        // line 4
        $this->displayBlock('title', $context, $blocks);
        echo "</title>
        <meta charset=\"utf-8\">        
        <script>const BASE = '";
        // line 6
        echo twig_escape_filter($this->env, ($context["BASE"] ?? null), "html", null, true);
        echo "';</script>
        <link rel=\"shortcut icon\" href=\"";
        // line 7
        echo twig_escape_filter($this->env, ($context["BASE"] ?? null), "html", null, true);
        echo "assets/img/title_logo.png\" />
        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">
        <link href=\"";
        // line 9
        echo twig_escape_filter($this->env, ($context["BASE"] ?? null), "html", null, true);
        echo "assets/css/main.css\" rel=\"stylesheet\" type=\"text/css\"/>
        <link href=\"";
        // line 10
        echo twig_escape_filter($this->env, ($context["BASE"] ?? null), "html", null, true);
        echo "assets/libs/animate.css/animate.css\" rel=\"stylesheet\" type=\"text/css\"/>
        <link href=\"";
        // line 11
        echo twig_escape_filter($this->env, ($context["BASE"] ?? null), "html", null, true);
        echo "assets/libs/bootstrap/dist/css/bootstrap.min.css\" rel=\"stylesheet\" type=\"text/css\"/>        
        <link href=\"";
        // line 12
        echo twig_escape_filter($this->env, ($context["BASE"] ?? null), "html", null, true);
        echo "assets/libs/@fortawesome/fontawesome-free/css/all.css\" rel=\"stylesheet\" />
    </head>

    <body id=\"myPage\" data-spy=\"scroll\" data-target=\".navbar\">        
        <div>
            <main>
                ";
        // line 18
        $this->displayBlock('main', $context, $blocks);
        // line 20
        echo "            </main>
        </div>
        
        <script src=\"";
        // line 23
        echo twig_escape_filter($this->env, ($context["BASE"] ?? null), "html", null, true);
        echo "assets/libs/jquery/dist/jquery.min.js\" type=\"text/javascript\"></script>
        <script src=\"";
        // line 24
        echo twig_escape_filter($this->env, ($context["BASE"] ?? null), "html", null, true);
        echo "assets/libs/popper.js/dist/umd/popper.min.js\" type=\"text/javascript\"></script>
        <script src=\"";
        // line 25
        echo twig_escape_filter($this->env, ($context["BASE"] ?? null), "html", null, true);
        echo "assets/libs/bootstrap/dist/js/bootstrap.min.js\" type=\"text/javascript\"></script>        
        <script src=\"";
        // line 26
        echo twig_escape_filter($this->env, ($context["BASE"] ?? null), "html", null, true);
        echo "assets/libs/wow.js/dist/wow.js\" type=\"text/javascript\"></script>
        <script src=\"";
        // line 27
        echo twig_escape_filter($this->env, ($context["BASE"] ?? null), "html", null, true);
        echo "assets/js/main.js\" type=\"text/javascript\"></script>        
    </body>
</html>";
    }

    // line 4
    public function block_title($context, array $blocks = array())
    {
        echo "Pocetna";
    }

    // line 18
    public function block_main($context, array $blocks = array())
    {
        // line 19
        echo "                ";
    }

    public function getTemplateName()
    {
        return "_global/index.html";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  104 => 19,  101 => 18,  95 => 4,  88 => 27,  84 => 26,  80 => 25,  76 => 24,  72 => 23,  67 => 20,  65 => 18,  56 => 12,  52 => 11,  48 => 10,  44 => 9,  39 => 7,  35 => 6,  30 => 4,  25 => 1,);
    }

    public function getSourceContext()
    {
        return new Twig_Source("", "_global/index.html", "C:\\xampp\\htdocs\\bendche\\views\\_global\\index.html");
    }
}
