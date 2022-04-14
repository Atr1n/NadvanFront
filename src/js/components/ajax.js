import $ from 'jquery'

$(document).ready(function() {
    $('.feedback__form').submit(function(event) {
        event.preventDefault()

        let name = $('#name').val()

        let formData = {
            name: $('#name').val(),
            phone: $('#phone').val(),
            notes: $('#textarea').val(),
            title: `Заявка с Nadvan.kz от ${name}`
        }

        $.ajax({
            type: 'POST',
            url: './assets/php/form-callback.php',
            data: formData,
            headers: {},
            success: function(result) {
                //Здесь функция при успешной отправке заявки
            }
        }).done(function(data) {
            console.log(data)
        })
    })
})
