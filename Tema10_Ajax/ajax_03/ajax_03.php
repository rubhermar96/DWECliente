<?php
	$servername = "localhost";
	$dbName = "dwec_biblioteca";
	$username = "root";
	$password = "root";

	try {
		$conn = new PDO("mysql:host=$servername;dbname=$dbName;charset=utf8", $username, $password);
		$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

		foreach($conn->query("SELECT * FROM libros ") as $fila) {
			$libro = new stdClass();

			$libro->isbn = $fila["Id"];
			$libro->titulo = $fila["titulo"];
			$libro->autor = $fila["autor"];
			$libro->editorial = $fila["editorial"];
			$libro->paginas = $fila["paginas"];
			$libro->precio = $fila["precio"];

			$listaLibros[] = $libro;
		}

		echo json_encode($listaLibros);
	} catch(PDOException $e) {
		echo "Fallo la conexión: " . $e->getMessage();
	}
?>