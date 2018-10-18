<?php

try{
  
    $bdd = new PDO('mysql:host=localhost;dbname=jeremyv_portfolio', 'jeremyv', 'Ymn8EpF2D7');

}
catch(Exeption $e)
{      
	die('Erreur:'.$e->getMessage());
}
    