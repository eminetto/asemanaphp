<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of newPHPClass
 *
 * @author catalog-01
 */
require_once($_SERVER['DOCUMENT_ROOT'] . '/DirectoryHandler.php');
require_once($_SERVER['DOCUMENT_ROOT'] . '/Edicao.php');

class Acervo {

    private $edicoes;
    private $DirectoryHandler;

    public function __construct(DirectoryHandler $dh) {
        $this->DirectoryHandler = $dh;
        $this->filterFilesNamedEdicao();
    }

    private function filterFilesNamedEdicao() {
        foreach ($this->DirectoryHandler->getFiles() as $nome_arquivo) {
            if (stripos($nome_arquivo, 'edicao') !== false) {
                $this->edicoes[] = new Edicao($nome_arquivo);
            }
        }
    }

    public function getEdicoes() {
        return $this->edicoes;
    }

}
