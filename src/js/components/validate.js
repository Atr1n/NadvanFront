import JustValidate from "just-validate";

const validation = new JustValidate('.feedback__form', {
    errorLabelStyle: {
        color: '#FF0000'
    },
}) 

validation
    .addField('#name', [
        {
        rule: 'required',
        errorMessage: 'Мы хотим знать, как вас зовут! :)'
        }
    ])
    .addField('#phone', [
        {
        rule: 'required',
        errorMessage: 'Поле обязательно для заполнения!'
        }
    ])
    .addField('#textarea', [
        {
        rule: 'required',
        errorMessage:
            'Для нас очень важно, знать в общех чертах, о вашем проекте!'
        }
    ])