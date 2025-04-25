$(document).ready(function() {
    $('#telefone').mask('(00) 00000-0000', { placeholder: "(00) 00000-0000" });

    $('#form-contato').validate({
        rules: {
            nome: {
                required: true,
                minlength: 3
            },
            email: {
                required: true,
                email: true,
            },
            telefone: {
                required: true,
                minlength: 14
            },
            mensagem: {
                required: true,
                minlength: 10
            }
        },
        messages: {
            nome: {
                required: "Por favor, insira seu nome.",
                minlength: " O nome deve ter pelo menos 3 caracteres."
            },
            email: {
                required: "Por favor, insira seu e-mail.",
                email: "Por favor, insira um e-mail válido."
            },
            telefone: {
                required: "Por favor, insira seu telefone.",
                minlength: "O telefone deve ter pelo menos 14 caracteres."
            },
            mensagem: {
                required: "Por favor, insira sua mensagem.",
                minlength: "A mensagem deve ter pelo menos 10 caracteres."
            }
        },

        submitHandler: function (form) {
            $('#confirmacao').modal('show');

            $('#form-contato')[0].reset();

            return false;
        }
    });
});