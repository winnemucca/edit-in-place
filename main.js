$(document).on('ready', function() {
  $('.preText').on('click', function() {
  	$(this).hide();
  	// $(this).hide();


  	$('.profile').append('<input type="text" class="profileInput" />');
  				// .append('<button type="submit">Add</button>')
  				// .append('<button type="reset">Reset</button>');

  	// 

  	$('.profileInput').blur(function() {
  		var response = $(this).val();
  		$('.profileInput').remove();

  		$('.preText').show().append(response);

  		console.log(response);

  	 });

  	console.log('clicked');
  })
});