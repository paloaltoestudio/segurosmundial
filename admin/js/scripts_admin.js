// Date picker
$('#datepicker1').datepicker();
$('#datepicker2').datepicker();

// Custom input file 
$(".custom-file-input").on("change", function() {
  var fileName = $(this).val().split("\\").pop();
  $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
});


// Show centrales info
$('.centrales_link .link').click(function(e){
    e.preventDefault();
    
    $(this).hide();
    $('.centrales_info').show();
    $('.signer_detail_info').addClass('active');
});

// Reload centrales link
$('.centrales_info a').click(function(e){
    e.preventDefault();
    
    $(this).parent().hide();
    $('.centrales_link .link').show();
    $('.signer_detail_info').removeClass('active');
});