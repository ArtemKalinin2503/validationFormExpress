$(document).ready(function() {
	function autorization() {
    var autorizationForm = $('.autorization__form');
		var inputPhone = $('.autorization__input_phone');
		var inputPassword = $('.autorization__input_password');
    var autorizationButton = $('.autorization__button');
    var test = $('#dataForm');
    
    autorizationForm.on('submit', function(e){
      e.preventDefault();
      console.log("!")
      $.ajax({
        type: "POST",
        url: "http://localhost:3080/test",
        data: autorizationForm.serialize(), 
        success: function(data)
           {
            test.html(data) 
           }
      });
    });
 

	}
	autorization();
});
