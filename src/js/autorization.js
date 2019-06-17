$(document).ready(function() {
	function autorization() {
		var autorizationForm = $('.autorization__form');
		var autorizationModal = $('.autorization__modal');
		var buttonClose = $('.autorization__button-close');
		var inputPhone = $('.autorization__input_phone');
		var inputPassword = $('.autorization__input_password');
    var autorizationButton = $('.autorization__button');
		var form = $('#dataForm');
    var autorizationItemPhone = $('.autorization__form-item-phone');
    var autorizationItemPassword = $('.autorization__form-item-password');

		autorizationForm.on('submit', function(e) {
			e.preventDefault();
			$.ajax({
				type: 'POST',
				url: 'http://localhost:3012/test',
				data: autorizationForm.serialize(),
				success: function(data) {
					form.html(data);
				}
			});
			autorizationModal.addClass('autorization__modal_active');
		});

		//Кнопка закрыть модальное окно
		buttonClose.on('click', function() {
			autorizationModal.removeClass('autorization__modal_active');
		});

    //Валидация поля пароль
    function validationPassword(value) {
      if(value.val().length < 5) {
        autorizationItemPassword.addClass('autorization__input_novalid');
        autorizationItemPassword.removeClass('autorization__input_valid');
      } else {
        autorizationItemPassword.addClass('autorization__input_valid');
        autorizationItemPassword.removeClass('autorization__input_novalid');
      }
    };

    //Валидация кнопки Войти
    function validationBtn(value) {
      //Блокировка кнопки Войти если поля не валидны
      if (value.hasClass('autorization__input_novalid')) {
        autorizationButton.attr('disabled', 'disabled');
        autorizationButton.addClass('autorization__button_disabled');
      } else {
        autorizationButton.removeAttr("disabled");
        autorizationButton.removeClass('autorization__button_disabled');
      }
      if (inputPassword.val().length < 5 || autorizationItemPhone.hasClass('autorization__input_novalid')) {
        autorizationButton.attr('disabled', 'disabled');
        autorizationButton.addClass('autorization__button_disabled')
      } else {
        autorizationButton.removeAttr("disabled");
        autorizationButton.removeClass('autorization__button_disabled')
      }
    };

    //Проверка на длину пароля (не менее 5 символов)
    inputPassword.on('input', function() {
      validationPassword($(this));
      validationBtn($(this))
    });

    //Валидация поля телефон
    inputPhone.on('input', function() {
        validationBtn(autorizationItemPhone);
        var inputValue = getInputValue();
        var length = inputValue.length; 
        if (inputValue < 1000)
        {
            inputValue = '('+inputValue;
        }else if (inputValue < 1000000) 
        {
            inputValue = '('+ inputValue.substring(0, 3) + ')' + inputValue.substring(3, length);
        }else if (inputValue < 10000000000) 
        {
            inputValue = '('+ inputValue.substring(0, 3) + ')' + inputValue.substring(3, 6) + '-' + inputValue.substring(6, length);
        }else
        {
            inputValue = '('+ inputValue.substring(0, 3) + ')' + inputValue.substring(3, 6) + '-' + inputValue.substring(6, 10);
        }       
        inputPhone.val(inputValue);
        inputValue = getInputValue();
      if ((inputValue > 2000000000) && (inputValue < 9999999999))
      {
          autorizationItemPhone.addClass('autorization__input_valid'); autorizationItemPhone.removeClass('autorization__input_novalid');
      }else
      {
         autorizationItemPhone.addClass('autorization__input_novalid'); autorizationItemPhone.removeClass('autorization__input_valid');
      }
  });

  function getInputValue() {
        var inputValue = inputPhone.val().replace(/\D/g,'');
      if (inputValue.charAt(0) == 1)
      {
          var inputValue = inputValue.substring(1, inputValue.length);
      }
      return inputValue;
  }
  }
	autorization();
});
