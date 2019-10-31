<?php

$db = new PDO('mysql:host=localhost;dbname=bendche;charset=utf8', 'root', '');
$db->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
$db->setAttribute(PDO::MYSQL_ATTR_FOUND_ROWS, true);
$database_name = "bendche";