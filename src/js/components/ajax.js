import $ from 'jquery'

$(document).ready(function() {
  let form = $('.feedback__form')

  form.submit(function(event) {
    event.preventDefault()

    let submit = $('.feedback__form-btn')

    submit.prop('disabled', true)

    let valid = true

    if (!valid) {
      submit.prop('disabled', false)
    }

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
      success: function() {
        let suc = $('#successmessage')
        suc.text('Ваша заявка успешно отправлена!')

        form.hide(2000)
      },
      error: function() {
        let err = $('#errormessage')
        err.text('Произошла ошибка! Попробуйте еще раз.')
      },
    })
  })
})
