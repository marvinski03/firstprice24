<?php

namespace FirstPrice24\Containers;

use Plenty\Plugin\Templates\Twig;

class FirstPrice24Container
{
    public function call(Twig $twig):string
    {
        return $twig->render('FirstPrice24::Stylesheet');
    }
}