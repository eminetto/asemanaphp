<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of DiretoryHandler
 *
 * @author ArthurVenturin
 */
class DirectoryHandler {

    private $path_to_directory;
    private $files = [];    

    public function __construct($path_to_directory) {
        $this->path_to_directory = $path_to_directory;
        $this->setFilesFromDirectory();
    }

    private function setFilesFromDirectory() {
        $files = scandir($_SERVER['DOCUMENT_ROOT'] . '/' . $this->path_to_directory);
        $this->files = !empty($files) ? $files : [];
    }
    public function getFiles(){
        return $this->files;
    }
    public function getDirectoryPath(){
        return $this->path_to_directory;
    }

}
