<?php 

		//Arquivos de email já existentes serão listados 
		$files = scandir("../edicoes/");
		$name_file_parts = null;
		$i = 0;

		//Filtrando para que só os .html apareçam, diminuindo a possibilidade de que seja listado algo que não se deseja
		foreach ($files as $name_file) {
				
				$name_file_parts = explode(".",$name_file);

				if($name_file_parts[1] !== "html"){
					unset($files[$i]);
				}

				$i++;

		}


?>