'use strict';

$('#signup').validate({
    rules: {
        MERGE1: {
            required: true,
            minlength: 2
        },
        MERGE2: {
            required: true
        },
        MERGE0: {
            required: true,
            email: true
        }
    },
    messages: {
        MERGE1: {
            required: "Por favor preencha seu nome",
            minlength: "Seu nome deve possuir mais de 2 caracteres"
        },
        MERGE2: {
            required: "Por favor preencha seu sobrenome"
        },
        MERGE0: {
            required: "Por favor preencha seu endereço de email",
            email: "Seu endereço de email deve ser válido"
        }
    },
});
