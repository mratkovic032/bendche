<?php

/* _global/index.html */
class __TwigTemplate_434838722bd9aaead6a86a9539effc512a288434396f9ea2109db4c2563eacf1 extends Twig_Template
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
        <title>BendCHE - ";
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
        echo "assets/css/main-css.css\" rel=\"stylesheet\" type=\"text/css\"/>
        <link href=\"";
        // line 10
        echo twig_escape_filter($this->env, ($context["BASE"] ?? null), "html", null, true);
        echo "assets/css/animate.css\" rel=\"stylesheet\" type=\"text/css\"/>                
        <link href=\"";
        // line 11
        echo twig_escape_filter($this->env, ($context["BASE"] ?? null), "html", null, true);
        echo "assets/libs/font-awesome/css/font-awesome.min.css\" rel=\"stylesheet\" type=\"text/css\"/>
        <script src=\"";
        // line 12
        echo twig_escape_filter($this->env, ($context["BASE"] ?? null), "html", null, true);
        echo "assets/libs/jquery/dist/jquery.min.js\" type=\"text/javascript\"></script>
        <link href=\"";
        // line 13
        echo twig_escape_filter($this->env, ($context["BASE"] ?? null), "html", null, true);
        echo "assets/libs/bootstrap/dist/css/bootstrap.min.css\" rel=\"stylesheet\" type=\"text/css\"/>
        <script src=\"";
        // line 14
        echo twig_escape_filter($this->env, ($context["BASE"] ?? null), "html", null, true);
        echo "assets/libs/bootstrap/dist/js/bootstrap.min.js\" type=\"text/javascript\"></script>
        <script src=\"";
        // line 15
        echo twig_escape_filter($this->env, ($context["BASE"] ?? null), "html", null, true);
        echo "assets/js/main-js.js\" type=\"text/javascript\"></script>         
    </head>

    <body id=\"myPage\" data-spy=\"scroll\" data-target=\".navbar\">        
        <div>
            <main>
                ";
        // line 21
        $this->displayBlock('main', $context, $blocks);
        // line 23
        echo "            </main>
        </div>    
    </body>
</html>";
    }

    // line 4
    public function block_title($context, array $blocks = array())
    {
        echo "Pocetna";
    }

    // line 21
    public function block_main($context, array $blocks = array())
    {
        // line 22
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
        return array (  95 => 22,  92 => 21,  86 => 4,  79 => 23,  77 => 21,  68 => 15,  64 => 14,  60 => 13,  56 => 12,  52 => 11,  48 => 10,  44 => 9,  39 => 7,  35 => 6,  30 => 4,  25 => 1,);
    }

    public function getSourceContext()
    {
        return new Twig_Source("", "_global/index.html", "C:\\xampp\\htdocs\\bendche\\views\\_global\\index.html");
    }
}
