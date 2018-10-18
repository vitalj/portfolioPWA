<?php
header("Access-Control-Allow-Origin: *");

try {

    $bdd = new PDO('mysql:host=localhost;dbname=jeremyv_portfolio', 'jeremyv', 'Ymn8EpF2D7');

    
    $req = $bdd->query('SELECT * from projets');
    $projects = $req->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($projects);

} catch (PDOException $e) {

    print "Erreur !: " . $e->getMessage() . "<br/>";
    die();

}
?>
