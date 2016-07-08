(function(){   
var selectedSodaPrice = 0;
$('#sodas li').on('click', function() {
  selectedSodaPrice = $(this).data('price');
  $('#cost').text("$"+selectedSodaPrice);
});
$('#get-soda').on('click', function() {
  var amountPaid = $('#amount-paid').val();
  var charge = (amountPaid - selectedSodaPrice);
    if ($('#amount-paid').val()=='') {
    alert('Make it look good.');
  }else{
  if (charge < 0) {
    $('#output').text('NOT ENOUGH MONRY');
  } else {
    $('#output').text("Your charge is "+"$"+ charge);
  }
}});

    })();