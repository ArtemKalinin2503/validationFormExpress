$(document).ready(function() {
	function autorization() {
    var autorizationForm = $('.autorization__form');
		var inputPhone = $('.autorization__input_phone');
		var inputPassword = $('.autorization__input_password');
    var autorizationButton = $('.autorization__button');
    
    autorizationButton.on('submit', function(){
      e.preventDefault();
      if (!inputPhone.val() && inputPassword.val()) {
        autorizationForm.addClass('autorizationForm_novalid')
      }
    });
 

	}
	autorization();
});
