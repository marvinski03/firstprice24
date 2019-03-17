<?php

namespace FirstPrice24\Containers;

use Plenty\Plugin\Templates\Twig;

class FirstPrice24ItemListContainer1
{
    public function call(Twig $twig, $arg):string
    {
        return $twig->render('FirstPrice24::Containers.ItemLists.ItemList1', ["item" => $arg[0]]);
    }
}