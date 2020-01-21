// Date picker
$('#datepicker').datepicker();
$('.datepicker').datepicker();

// Validate Recaptcha

if(document.getElementById("ingreso") != null){
document.getElementById("ingreso").addEventListener("submit", function(evt) {
    
    const response = grecaptcha.getResponse();
    const error = document.querySelector('.error');
    
    console.log(error);
          
    if(response.length == 0) { 
        //reCaptcha not verified
        error.className += ' show';
        evt.preventDefault();
        return false;
    }
});
}

//Enable button when form fields are filled
const validateForm = function(){
    
    const inputVal = $('#identificacion input').val();
    const selectVal = $('#identificacion select').val();
    
    //console.log(selectVal, inputVal);
    
    if( inputVal != "" && selectVal != "Tipo de documento"){
        $("button[type='submit']").removeAttr("disabled").removeClass('inactive');
    } else {
        $("button[type='submit']").attr("disabled", "disabled").addClass('inactive');
    }
}

$("#identificacion input").keyup(function(){
    validateForm();
});

$("#identificacion select").change( function() {
    validateForm();
});

// Show firmantes table
$(document).ready(function(){
$('.list_icon').click(function(e){
    console.log('hola');
    e.preventDefault();
    $('.firmantes_tabla').slideToggle();
});
})

// Tooltip
$(document).ready(function(){
$('[data-toggle="tooltip"]').tooltip({ trigger: "hover" });
});

 // OTP inputs
   $(function() {
  
    var code = $('.codigo');
  
    function goToNextInput(e) {
      
      var key = e.which,
        t = $(e.target),
        sib = t.next('input');
  
      if (key != 9 && (key < 48 || key > 57)) {
        e.preventDefault();
        return false;
      }
  
      if (key === 9) {
        return true;
      }
  
      if (!sib || !sib.length) {
        sib = code.find('input').eq(0);
      }
      sib.select().focus();
    }
  
    function onKeyDown(e) {
      var key = e.which;
  
      if (key === 9 || (key >= 48 && key <= 57)) {
        return true;
      }
  
      e.preventDefault();
      return false;
    }
    
    function onFocus(e) {
      $(e.target).select();
    }
  
    code.on('keyup', 'input', goToNextInput);
    code.on('keydown', 'input', onKeyDown);
    code.on('click', 'input', onFocus);
  
  })

// Timer
if(document.getElementById('timer') !== null){
  startTimer();
  
  function startTimer() {
    
    var presentTime = document.getElementById('timer').innerHTML;
    var timeArray = presentTime.split(/[:]+/);
    var m = timeArray[0];
    var s = checkSecond((timeArray[1] - 1));
  
    if(s==59){m=m-1}
    //if(m<0){m=0}
    
    document.getElementById('timer').innerHTML =
      m + ":" + s;
    console.log(m)
   t = setTimeout(startTimer, 1000);
   if(m==0 && s==00){
      clearTimeout(t);
    }
  
  }
  function checkSecond(sec) {
    if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
    if (sec < 0) {sec = "59"};
    return sec;
  }


 // Timer Line setup

 const barLine = document.querySelector('.bar_line');
 const timer = document.getElementById('timer').innerHTML;
 const time = timer.split(/[:]+/);
 const min = parseInt(time[0]*60);
 const sec = parseInt(time[1]);
 const barTime = min + sec;

 /*
*  Creates a progressbar.
*  @param id the id of the div we want to transform in a progressbar
*  @param duration the duration of the timer example: '10s'
*  @param callback, optional function which is called when the progressbar reaches 0.
*/
function createProgressbar(id, duration, callback) {
// We select the div that we want to turn into a progressbar
var progressbar = document.getElementById(id);
progressbar.className = 'progressbar';

// We create the div that changes width to show progress
var progressbarinner = document.createElement('div');
progressbarinner.className = 'inner';

// Now we set the animation parameters
progressbarinner.style.animationDuration = duration;

// Eventually couple a callback
if (typeof(callback) === 'function') {
 progressbarinner.addEventListener('animationend', callback);
}

// Append the progressbar to the main progressbardiv
progressbar.appendChild(progressbarinner);

// When everything is set up we start the animation
progressbarinner.style.animationPlayState = 'running';
}

addEventListener('load', function() {
createProgressbar('progressbar1', barTime + 's');
});
}

// checked answer element
$('.input input').click(function(e){
    console.log(e.target);
    $('.radio_question').removeClass('active');
    $(this).closest('.radio_question').toggleClass('active');
});


// Close and send modal notifications
$('.modal_send').click(function(e){
    e.preventDefault();
    $('#solicitud_modificaciones').modal('hide');
   

    setTimeout(function(){
        $('#modificacion_enviada').modal('show');
    }, 500);
});

$('.modal_send_id').click(function(e){
    e.preventDefault();
    $('#no_valida').modal('hide');

    setTimeout(function(){
        $('#modificacion_enviada').modal('show');
    }, 500);
});


// Invalid document id modal
$('.panel_title').click(function(e){
    $('#no_valida').modal({ backdrop: 'static', keyboard: true });
})


// Next question
const nextQuestion = function(n){
  $('.trigger_q_'+n).click(function(e){
    e.preventDefault();
    console.log(n);
    $('.question.current_q').removeClass('current_q').hide();
    $('.question.q_'+n).addClass('current_q');
  });
}
nextQuestion(2);
nextQuestion(3);
nextQuestion(4);


