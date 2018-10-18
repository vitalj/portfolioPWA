<?php
header("Access-Control-Allow-Origin: *");
require_once('https://jeremyv.promo-17.codeur.online/pwa/static/bdd.php');
$req = $bdd->prepare("SELECT projects.*, images.picture as picture_1 FROM projects INNER JOIN images ON main_img_id = images.id");
$req->execute();
$response = $req->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($response, JSON_UNESCAPED_UNICODE);