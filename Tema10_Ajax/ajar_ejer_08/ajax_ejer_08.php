<?php
	$servername = "localhost";
	$dbName = "provincias_ajax";
	$username = "rubens";
	$password = "toor";

	try {
		$conn = new PDO("mysql:host=$servername;dbname=$dbName;charset=utf8", $username, $password);
		$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

		/*$libro = new stdClass();
		$libros = array();*/


		foreach($conn->query("SELECT * FROM provincias ") as $fila) {
            echo "<tr><td>".$fila["codigo"]."</td><td>".$fila["nombre"]."</td><td>".$fila["temperatura"]."</td><td>".$fila["estado"]."</td></tr>";
		}

	} catch(PDOException $e) {
		echo "Fallo la conexión: " . $e->getMessage();
	}
?>