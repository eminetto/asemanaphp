<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of Edicao
 *
 * @author catalog-01
 */
class Edicao {
    private $name;
    private $index;
    private $file;
    
    public function __construct($file){
        $this->file = $file;
        $this->setIndex();
        $this->setName();
    }
    
    private function setIndex(){
        $name = explode('.',$this->file);
        $this->index = str_replace('edicao','',$name[0]);
    }
    private function setName(){
        $this->name = 'Edição ' . $this->index;
    }
    
    public function getName(){
        return $this->name;
    }
    public function getFile(){
        return $this->file;
    }
    
}
