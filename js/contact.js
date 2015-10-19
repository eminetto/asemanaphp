	'use strict';

    // Signup form
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
        // submitHandler: function(form) {
        //     $(form).ajaxSubmit({
        //         type:"POST",
        //         data: $(form).serialize(),
        //         url:"inc/signup.php",
        //         success: function() {
        //             $('#signup :input').attr('disabled', 'disabled');
        //             $('#signup').fadeTo( "slow", 0.15, function() {
        //                 $(this).find(':input').attr('disabled', 'disabled');
        //                 $(this).find('label').css('cursor','default');
        //                 $('#success').fadeIn();
        //             });
        //         },
        //         error: function() {
        //             $('#signup').fadeTo( "slow", 0.15, function() {
        //                 $('#error').fadeIn();
        //             });
        //         }
        //     });
        // }
    });
    	
	// Trial signup form
    $('#trial').validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            name: {
                required: "Por favor preencha com seu nome",
                minlength: "Seu nome deve possuir mais de 2 caracteres"
            },
            email: {
                required: "Por favor preencha com seu endereço de email"
            }
        },
        submitHandler: function(form) {
            $(form).ajaxSubmit({
                type:"POST",
                data: $(form).serialize(),
                url:"inc/trial.php",
                success: function() {
                    $('#trial :input').attr('disabled', 'disabled');
                    $('#trial').fadeTo( "slow", 0.15, function() {
                        $(this).find(':input').attr('disabled', 'disabled');
                        $(this).find('label').css('cursor','default');
                        $('#success').fadeIn();
                    });
                },
                error: function() {
                    $('#trial').fadeTo( "slow", 0.15, function() {
                        $('#error').fadeIn();
                    });
                }
            });
        }
    });
	
	// Subscription form
   	$('#subscribe').validate({
        rules: {
            subscribe_email: {
                required: true,
                email: true
            } 
        },
        messages: {
            subscribe_email: {
                required: "Por favor preencha com seu endereço de email"
            } 
        },
        submitHandler: function(form) {
            $(form).ajaxSubmit({
                type:"POST",
                data: $(form).serialize(),
                url:"inc/subscribe.php",
                success: function() {
                    $('#subscribe :input').attr('disabled', 'disabled');
                    $('#subscribe').fadeTo( "slow", 0.15, function() {
                        $(this).find(':input').attr('disabled', 'disabled');
                        $(this).find('label').css('cursor','default');
                        $('#success').fadeIn();
                    });
                },
                error: function() {
                    $('#subscribe').fadeTo( "slow", 0.15, function() {
                        $('#error').fadeIn();
                    });
                }
            });
        }
    });
